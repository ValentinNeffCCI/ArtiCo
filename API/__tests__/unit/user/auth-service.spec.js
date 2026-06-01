// Variables d'env lues au chargement du module auth-service.
process.env.SECRET_KEY = "test-secret";
process.env.REFRESH_KEY = "test-refresh";
process.env.RESET_KEY = "test-reset";
process.env.ACCESS_EXPIRACY = "15m";
process.env.REFRESH_EXPIRACY = "7d";
process.env.FRONTEND_URL = "http://localhost:3000";
process.env.APP_EMAIL = "noreply@artico.fr";

const UserRepository = require("../../../repositories/user-repository.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const mailer = require("../../../utils/mailer.js");

// Toutes les dépendances externes sont mockées : pas de DB, pas de crypto réelle,
// pas de fichier lu, pas de mail envoyé.
jest.mock("../../../repositories/user-repository.js");
jest.mock("jsonwebtoken");
jest.mock("bcrypt", () => ({
  compare: jest.fn(),
  hash: jest.fn(),
}));
jest.mock("fs");
jest.mock("../../../utils/mailer.js");

const authService = require("../../../services/auth-service.js");

const makeUser = (overrides = {}) => ({
  id: 1,
  email: "test@artico.fr",
  name: "Test",
  password: "hashed-password",
  role: "USER",
  active: true,
  refresh_token: null,
  reset_token: null,
  ...overrides,
});

describe("auth-service", () => {
  describe("login", () => {
    it("renvoie tokens et infos user quand les identifiants sont valides", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser());
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      UserRepository.update.mockResolvedValue(makeUser());

      const result = await authService.login("test@artico.fr", "password");

      expect(bcrypt.compare).toHaveBeenCalledWith("password", "hashed-password");
      expect(UserRepository.update).toHaveBeenCalledWith(1, {
        refresh_token: "refresh-token",
      });
      expect(result).toEqual({
        id: 1,
        role: "USER",
        token: "access-token",
        refresh: "refresh-token",
      });
    });

    it("lève une 403 quand l'utilisateur n'existe pas", async () => {
      UserRepository.findByEmail.mockResolvedValue(null);

      await expect(
        authService.login("inconnu@artico.fr", "x")
      ).rejects.toMatchObject({ status: 403 });
      expect(bcrypt.compare).not.toHaveBeenCalled();
    });

    it("lève une 403 quand le mot de passe est incorrect", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser());
      bcrypt.compare.mockResolvedValue(false);

      await expect(
        authService.login("test@artico.fr", "mauvais")
      ).rejects.toMatchObject({ status: 403, message: authService.wrongCredentials.message });
    });

    it("lève une 403 quand le compte est inactif", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser({ active: false }));
      bcrypt.compare.mockResolvedValue(true);

      await expect(
        authService.login("test@artico.fr", "password")
      ).rejects.toMatchObject({ status: 403 });
    });
  });

  describe("register", () => {
    it("crée l'utilisateur et renvoie les tokens", async () => {
      UserRepository.findByEmail.mockResolvedValue(null);
      UserRepository.findByName.mockResolvedValue(null);
      UserRepository.create.mockResolvedValue(makeUser({ id: 5 }));
      jwt.sign
        .mockReturnValueOnce("refresh-token")
        .mockReturnValueOnce("access-token");
      UserRepository.update.mockResolvedValue(makeUser({ id: 5 }));

      const result = await authService.register(
        "test@artico.fr",
        "password",
        "Test"
      );

      expect(UserRepository.create).toHaveBeenCalledWith(
        "test@artico.fr",
        "password",
        "Test"
      );
      expect(result).toMatchObject({
        id: 5,
        token: "access-token",
        refresh: "refresh-token",
      });
    });

    it("lève une 409 quand l'email est déjà utilisé", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser());

      await expect(
        authService.register("test@artico.fr", "password", "Test")
      ).rejects.toMatchObject({ status: 409 });
      expect(UserRepository.create).not.toHaveBeenCalled();
    });

    it("lève une 409 quand le nom est déjà utilisé", async () => {
      UserRepository.findByEmail.mockResolvedValue(null);
      UserRepository.findByName.mockResolvedValue(makeUser());

      await expect(
        authService.register("nouveau@artico.fr", "password", "Test")
      ).rejects.toMatchObject({ status: 409 });
      expect(UserRepository.create).not.toHaveBeenCalled();
    });
  });

  describe("refresh", () => {
    it("renvoie un nouveau access token quand le refresh token correspond", async () => {
      UserRepository.findById.mockResolvedValue(
        makeUser({ refresh_token: "valid-refresh" })
      );
      jwt.sign.mockReturnValue("new-access-token");

      const result = await authService.refresh(1, "valid-refresh");

      expect(result).toBe("new-access-token");
    });

    it("lève une 404 quand l'utilisateur n'existe pas", async () => {
      UserRepository.findById.mockResolvedValue(null);

      await expect(authService.refresh(1, "x")).rejects.toMatchObject({
        status: 404,
      });
    });

    it("lève une 401 quand le refresh token ne correspond pas", async () => {
      UserRepository.findById.mockResolvedValue(
        makeUser({ refresh_token: "autre-token" })
      );

      await expect(
        authService.refresh(1, "mauvais-token")
      ).rejects.toMatchObject({ status: 401 });
    });
  });

  describe("forgotPassword", () => {
    it("génère un token, l'enregistre et envoie un mail", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser());
      jwt.sign.mockReturnValue("reset-token");
      UserRepository.update.mockResolvedValue(makeUser());
      fs.readFileSync.mockReturnValue("Bonjour {username}, lien : {url}");
      mailer.sendMail.mockResolvedValue(true);

      const result = await authService.forgotPassword("test@artico.fr");

      expect(UserRepository.update).toHaveBeenCalledWith(1, {
        reset_token: "reset-token",
      });
      // Le template doit être interpolé avant l'envoi.
      const sentMessage = mailer.sendMail.mock.calls[0][0];
      expect(sentMessage.to).toBe("test@artico.fr");
      expect(sentMessage.html).toContain("Test");
      expect(sentMessage.html).toContain("reset-token");
      expect(result).toBe(true);
    });

    it("lève une erreur quand aucun utilisateur n'est associé à l'email", async () => {
      UserRepository.findByEmail.mockResolvedValue(null);

      await expect(
        authService.forgotPassword("inconnu@artico.fr")
      ).rejects.toBeInstanceOf(Error);
      expect(mailer.sendMail).not.toHaveBeenCalled();
    });

    it("lève une 500 quand l'envoi de mail échoue", async () => {
      UserRepository.findByEmail.mockResolvedValue(makeUser());
      jwt.sign.mockReturnValue("reset-token");
      UserRepository.update.mockResolvedValue(makeUser());
      fs.readFileSync.mockReturnValue("{username} {url}");
      mailer.sendMail.mockRejectedValue(new Error("SMTP down"));

      await expect(
        authService.forgotPassword("test@artico.fr")
      ).rejects.toMatchObject({ status: 500 });
    });
  });

  describe("reset", () => {
    it("réinitialise le mot de passe quand le token est valide", async () => {
      // jwt.verify est appelé avec un callback (err, decoded).
      jwt.verify.mockImplementation((token, key, cb) => cb(null, { id: 1 }));
      UserRepository.findById.mockResolvedValue(
        makeUser({ reset_token: "valid-token" })
      );
      jwt.sign
        .mockReturnValueOnce("refresh-token")
        .mockReturnValueOnce("access-token");
      UserRepository.update.mockResolvedValue(makeUser());

      const result = await authService.reset("valid-token", "new-password");

      expect(UserRepository.update).toHaveBeenCalledWith(1, {
        password: "new-password",
        refresh_token: "refresh-token",
        reset_token: null,
      });
      expect(result).toMatchObject({ id: 1, token: "access-token" });
    });

    it("lève une 403 quand le reset_token stocké ne correspond pas", async () => {
      jwt.verify.mockImplementation((token, key, cb) => cb(null, { id: 1 }));
      UserRepository.findById.mockResolvedValue(
        makeUser({ reset_token: "autre-token" })
      );

      await expect(
        authService.reset("valid-token", "new-password")
      ).rejects.toMatchObject({ status: 403 });
      expect(UserRepository.update).not.toHaveBeenCalled();
    });
  });
});
