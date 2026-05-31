const categorieService = require("../../../services/categorie-service.js");

jest.mock("../../../services/categorie-service.js");

const categorieController = require("../../../controllers/categorie-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("categorie-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllCategories", () => {
    it("parse la limite et répond 200", async () => {
      categorieService.findAll.mockResolvedValue([{ id: 1 }]);

      await categorieController.getAllCategories(
        { query: { limit: "5" } },
        res,
        next
      );

      expect(categorieService.findAll).toHaveBeenCalledWith(5);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it("passe false quand aucune limite n'est fournie", async () => {
      categorieService.findAll.mockResolvedValue([]);

      await categorieController.getAllCategories({ query: {} }, res, next);

      expect(categorieService.findAll).toHaveBeenCalledWith(false);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      categorieService.findAll.mockRejectedValue(error);

      await categorieController.getAllCategories({ query: {} }, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategorieById", () => {
    it("répond 200 avec la catégorie", async () => {
      categorieService.findById.mockResolvedValue({ id: 3 });

      await categorieController.getCategorieById(
        { params: { id: 3 } },
        res,
        next
      );

      expect(categorieService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("createCategorie", () => {
    it("crée et répond 201", async () => {
      categorieService.create.mockResolvedValue({ id: 5 });

      await categorieController.createCategorie(
        { body: { name: "Plomberie" } },
        res,
        next
      );

      expect(categorieService.create).toHaveBeenCalledWith({
        name: "Plomberie",
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("updateCategorie", () => {
    it("met à jour et répond 200", async () => {
      categorieService.update.mockResolvedValue({ id: 1 });

      await categorieController.updateCategorie(
        { params: { id: 1 }, body: { name: "x" } },
        res,
        next
      );

      expect(categorieService.update).toHaveBeenCalledWith(1, { name: "x" });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteCategorie", () => {
    it("supprime et répond 200", async () => {
      categorieService.delete.mockResolvedValue({ id: 1 });

      await categorieController.deleteCategorie(
        { params: { id: 1 } },
        res,
        next
      );

      expect(categorieService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
