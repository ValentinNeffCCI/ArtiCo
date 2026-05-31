const userService = require("../../../services/user-service.js");

// Le controller ne doit dépendre que du service, qu'on mocke entièrement.
jest.mock("../../../services/user-service.js");

const userController = require("../../../controllers/user-controller.js");

// Fabrique des objets Express factices.
const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("user-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllUsers", () => {
    it("répond 200 avec la liste des utilisateurs", async () => {
      const users = [{ id: 1 }, { id: 2 }];
      userService.getAllUsers.mockResolvedValue(users);

      await userController.getAllUsers({}, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(users);
      expect(next).not.toHaveBeenCalled();
    });

    it("transmet l'erreur à next() en cas d'échec du service", async () => {
      const error = new Error("boom");
      userService.getAllUsers.mockRejectedValue(error);

      await userController.getAllUsers({}, res, next);

      expect(next).toHaveBeenCalledWith(error);
      expect(res.status).not.toHaveBeenCalled();
    });
  });

  describe("getMe", () => {
    it("utilise req.user.id pour récupérer l'utilisateur courant", async () => {
      const user = { id: 99 };
      userService.getUserById.mockResolvedValue(user);

      await userController.getMe({ user: { id: 99 } }, res, next);

      expect(userService.getUserById).toHaveBeenCalledWith(99);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(user);
    });
  });

  describe("getUserById", () => {
    it("passe req.params.id au service", async () => {
      const user = { id: 3 };
      userService.getUserById.mockResolvedValue(user);

      await userController.getUserById({ params: { id: 3 } }, res, next);

      expect(userService.getUserById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith(user);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("not found");
      userService.getUserById.mockRejectedValue(error);

      await userController.getUserById({ params: { id: 3 } }, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("updateUser", () => {
    it("passe l'id et le body au service puis répond 200", async () => {
      const updated = { id: 1, name: "New" };
      userService.updateUser.mockResolvedValue(updated);

      await userController.updateUser(
        { params: { id: 1 }, body: { name: "New" } },
        res,
        next
      );

      expect(userService.updateUser).toHaveBeenCalledWith(1, { name: "New" });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updated);
    });

    it("transmet l'erreur à next() (ex: conflit 409)", async () => {
      const error = new Error("Email déjà utilisé");
      userService.updateUser.mockRejectedValue(error);

      await userController.updateUser(
        { params: { id: 1 }, body: {} },
        res,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteUser", () => {
    it("supprime et répond 200", async () => {
      userService.deleteUser.mockResolvedValue({ id: 1 });

      await userController.deleteUser({ params: { id: 1 } }, res, next);

      expect(userService.deleteUser).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("modifyUserAccess", () => {
    it("passe id et body au service", async () => {
      userService.modifyUserAccess.mockResolvedValue({ id: 1, active: false });

      await userController.modifyUserAccess(
        { params: { id: 1 }, body: { active: false } },
        res,
        next
      );

      expect(userService.modifyUserAccess).toHaveBeenCalledWith(1, {
        active: false,
      });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
