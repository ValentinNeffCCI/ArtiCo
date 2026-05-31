const userRepository = require("../../../repositories/user-repository.js");
const HttpError = require("../../../customclasses/HttpError.js");

jest.mock("../../../repositories/user-repository.js");

const userService = require("../../../services/user-service.js");

const makeUser = (overrides = {}) => ({
  id: 1,
  email: "test@artico.fr",
  name: "Test",
  entreprises: [],
  role: "USER",
  active: true,
  password: "hashed",
  ...overrides,
});

describe("user-service", () => {
  describe("getAllUsers", () => {
    it("retourne la collection transformée par la resource", async () => {
      userRepository.findAll.mockResolvedValue([
        makeUser({ id: 1 }),
        makeUser({ id: 2, email: "a@b.fr", name: "Autre" }),
      ]);

      const result = await userService.getAllUsers();

      expect(userRepository.findAll).toHaveBeenCalledTimes(1);
      expect(result).toHaveLength(2);
      expect(result[0]).not.toHaveProperty("password");
      expect(result[0]).toMatchObject({ id: 1, email: "test@artico.fr" });
    });
  });

  describe("getUserById", () => {
    it("transforme l'utilisateur via la resource", async () => {
      userRepository.findById.mockResolvedValue(makeUser({ id: 42 }));

      const result = await userService.getUserById(42);

      expect(userRepository.findById).toHaveBeenCalledWith(42);
      expect(result).toMatchObject({ id: 42, role: "USER" });
      expect(result).not.toHaveProperty("password");
    });

    it("lève une 404 quand l'utilisateur n'existe pas", async () => {
      userRepository.findById.mockResolvedValue(null);

      await expect(userService.getUserById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("updateUser", () => {
    it("met à jour quand il n'y a pas de conflit email/nom", async () => {
      userRepository.findByEmail.mockResolvedValue(null);
      userRepository.findByName.mockResolvedValue(null);
      userRepository.update.mockResolvedValue(
        makeUser({ id: 1, email: "new@artico.fr", name: "New" })
      );

      const result = await userService.updateUser(1, {
        email: "new@artico.fr",
        name: "New",
      });

      expect(userRepository.update).toHaveBeenCalledWith(1, {
        email: "new@artico.fr",
        name: "New",
      });
      expect(result).toMatchObject({ email: "new@artico.fr", name: "New" });
    });

    it("autorise la mise à jour si l'email appartient déjà au même utilisateur", async () => {
      // findByEmail renvoie un user avec le MÊME id => pas de conflit.
      userRepository.findByEmail.mockResolvedValue(makeUser({ id: 1 }));
      userRepository.update.mockResolvedValue(makeUser({ id: 1 }));

      await expect(
        userService.updateUser(1, { email: "test@artico.fr" })
      ).resolves.toBeDefined();
      expect(userRepository.update).toHaveBeenCalled();
    });

    it("lève une 409 quand l'email est déjà pris par un autre utilisateur", async () => {
      userRepository.findByEmail.mockResolvedValue(makeUser({ id: 2 }));

      await expect(
        userService.updateUser(1, { email: "test@artico.fr" })
      ).rejects.toMatchObject({ status: 409, message: "Email déjà utilisé" });
      expect(userRepository.update).not.toHaveBeenCalled();
    });

    it("lève une 409 quand le nom est déjà pris par un autre utilisateur", async () => {
      userRepository.findByName.mockResolvedValue(makeUser({ id: 2 }));

      await expect(
        userService.updateUser(1, { name: "Test" })
      ).rejects.toMatchObject({ status: 409, message: "Nom déjà utilisé" });
      expect(userRepository.update).not.toHaveBeenCalled();
    });
  });

  describe("deleteUser", () => {
    it("supprime puis transforme le user supprimé", async () => {
      userRepository.delete.mockResolvedValue(makeUser({ id: 7 }));

      const result = await userService.deleteUser(7);

      expect(userRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
