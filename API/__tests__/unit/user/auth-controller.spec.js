const AuthService = require("../../../services/auth-service.js");
const HttpError = require("../../../customclasses/HttpError.js");

jest.mock("../../../services/auth-service.js");

const authController = require("../../../controllers/auth-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  res.send = jest.fn(() => res);
  res.cookie = jest.fn(() => res);
  res.clearCookie = jest.fn(() => res);
  return res;
};

describe("auth-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("login", () => {
    it("pose les cookies token/refresh et répond 200 avec role+id", async () => {
      AuthService.login.mockResolvedValue({
        id: 1,
        role: "USER",
        token: "access",
        refresh: "refresh",
      });

      await authController.login(
        { body: { email: "a@b.fr", password: "pw" } },
        res,
        next
      );

      expect(AuthService.login).toHaveBeenCalledWith("a@b.fr", "pw");
      expect(res.cookie).toHaveBeenCalledWith(
        "artico_token",
        "access",
        expect.any(Object)
      );
      expect(res.cookie).toHaveBeenCalledWith(
        "refresh_token",
        "refresh",
        expect.objectContaining({ expires: expect.any(Date) })
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ role: "USER", id: 1 });
    });

    it("encapsule l'erreur du service dans un HttpError et la passe à next()", async () => {
      AuthService.login.mockRejectedValue(new HttpError("Mot de passe incorrect", 403));

      await authController.login(
        { body: { email: "a@b.fr", password: "bad" } },
        res,
        next
      );

      const passed = next.mock.calls[0][0];
      expect(passed).toBeInstanceOf(HttpError);
      expect(passed).toMatchObject({ status: 403, message: "Mot de passe incorrect" });
      expect(res.cookie).not.toHaveBeenCalled();
    });

    it("utilise le statut 500 par défaut quand l'erreur n'en a pas", async () => {
      AuthService.login.mockRejectedValue(new Error("inconnu"));

      await authController.login(
        { body: { email: "a@b.fr", password: "pw" } },
        res,
        next
      );

      expect(next.mock.calls[0][0]).toMatchObject({ status: 500 });
    });
  });

  describe("register", () => {
    it("pose les cookies et répond 200 avec role+id", async () => {
      AuthService.register.mockResolvedValue({
        id: 2,
        role: "USER",
        token: "access",
        refresh: "refresh",
      });

      await authController.register(
        { body: { email: "a@b.fr", password: "pw", name: "Bob" } },
        res,
        next
      );

      expect(AuthService.register).toHaveBeenCalledWith("a@b.fr", "pw", "Bob");
      expect(res.cookie).toHaveBeenCalledTimes(2);
      expect(res.json).toHaveBeenCalledWith({ role: "USER", id: 2 });
    });

    it("transmet une 409 à next() en cas de conflit", async () => {
      AuthService.register.mockRejectedValue(
        new HttpError("Cet email est déjà utilisé", 409)
      );

      await authController.register(
        { body: { email: "a@b.fr", password: "pw", name: "Bob" } },
        res,
        next
      );

      expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
    });
  });

  describe("reset", () => {
    it("utilise le token du body et répond 200", async () => {
      AuthService.reset.mockResolvedValue({
        id: 1,
        role: "USER",
        token: "access",
        refresh: "refresh",
      });

      await authController.reset(
        { body: { token: "reset-token", password: "newpw" } },
        res,
        next
      );

      expect(AuthService.reset).toHaveBeenCalledWith("reset-token", "newpw");
      expect(res.cookie).toHaveBeenCalledTimes(2);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("refresh", () => {
    it("pose le cookie token et répond 200 quand un token est renvoyé", async () => {
      AuthService.refresh.mockResolvedValue("new-access");

      await authController.refresh(
        { user: { id: 1 }, token: "refresh-token" },
        res,
        next
      );

      expect(AuthService.refresh).toHaveBeenCalledWith(1, "refresh-token");
      expect(res.cookie).toHaveBeenCalledWith(
        "artico_token",
        "new-access",
        expect.any(Object)
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ token: "new-access" });
    });

    it("répond 400 quand aucun token n'est renvoyé", async () => {
      AuthService.refresh.mockResolvedValue(null);

      await authController.refresh(
        { user: { id: 1 }, token: "refresh-token" },
        res,
        next
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.cookie).not.toHaveBeenCalled();
    });

    it("transmet l'HttpError à next() tel quel", async () => {
      const error = new HttpError("Session expirée", 401);
      AuthService.refresh.mockRejectedValue(error);

      await authController.refresh(
        { user: { id: 1 }, token: "bad" },
        res,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("forgotPassword", () => {
    it("répond 204 sans corps", async () => {
      AuthService.forgotPassword.mockResolvedValue(true);

      await authController.forgotPassword(
        { body: { email: "a@b.fr" } },
        res,
        next
      );

      expect(AuthService.forgotPassword).toHaveBeenCalledWith("a@b.fr");
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });

    it("transmet l'erreur à next()", async () => {
      AuthService.forgotPassword.mockRejectedValue(new Error("smtp"));

      await authController.forgotPassword(
        { body: { email: "a@b.fr" } },
        res,
        next
      );

      expect(next).toHaveBeenCalled();
    });
  });

  describe("logout", () => {
    it("efface les deux cookies et répond 200", () => {
      authController.logout({}, res);

      expect(res.clearCookie).toHaveBeenCalledWith(
        "artico_token",
        expect.any(Object)
      );
      expect(res.clearCookie).toHaveBeenCalledWith(
        "refresh_token",
        expect.any(Object)
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ success: true })
      );
    });
  });
});
