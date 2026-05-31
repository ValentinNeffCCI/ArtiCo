const entrepriseService = require("../../../services/entreprise-service.js");

jest.mock("../../../services/entreprise-service.js");

const entrepriseController = require("../../../controllers/entreprise-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  res.send = jest.fn(() => res);
  return res;
};

describe("entreprise-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllEntreprises", () => {
    it("transmet la query au service et répond 200", async () => {
      const list = [{ id: 1 }];
      entrepriseService.findAll.mockResolvedValue(list);

      await entrepriseController.getAllEntreprises(
        { query: { categorieId: "2" } },
        res,
        next
      );

      expect(entrepriseService.findAll).toHaveBeenCalledWith({
        categorieId: "2",
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(list);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      entrepriseService.findAll.mockRejectedValue(error);

      await entrepriseController.getAllEntreprises({ query: {} }, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getEntrepriseById", () => {
    it("répond 200 avec l'entreprise", async () => {
      entrepriseService.findById.mockResolvedValue({ id: 3 });

      await entrepriseController.getEntrepriseById(
        { params: { id: 3 } },
        res,
        next
      );

      expect(entrepriseService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getEntreprisesByUserId", () => {
    it("répond 200 avec les entreprises du user", async () => {
      entrepriseService.findByUserId.mockResolvedValue([{ id: 1 }]);

      await entrepriseController.getEntreprisesByUserId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(entrepriseService.findByUserId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("createEntreprise", () => {
    it("injecte ownerId et l'image normalisée puis répond 201", async () => {
      entrepriseService.create.mockResolvedValue({ id: 5 });
      const req = {
        body: { name: "ArtiCo" },
        user: { id: 99 },
        file: { path: "uploads\\logo.png" },
      };

      await entrepriseController.createEntreprise(req, res, next);

      expect(entrepriseService.create).toHaveBeenCalledWith({
        name: "ArtiCo",
        ownerId: 99,
        image: "uploads/logo.png",
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });

    it("fonctionne sans fichier uploadé", async () => {
      entrepriseService.create.mockResolvedValue({ id: 5 });

      await entrepriseController.createEntreprise(
        { body: { name: "ArtiCo" }, user: { id: 99 } },
        res,
        next
      );

      expect(entrepriseService.create).toHaveBeenCalledWith({
        name: "ArtiCo",
        ownerId: 99,
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("updateEntreprise", () => {
    it("passe id et body (avec ownerId) au service", async () => {
      entrepriseService.update.mockResolvedValue({ id: 1 });

      await entrepriseController.updateEntreprise(
        { params: { id: 1 }, body: { name: "x" }, user: { id: 99 } },
        res,
        next
      );

      expect(entrepriseService.update).toHaveBeenCalledWith(1, {
        name: "x",
        ownerId: 99,
      });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteEntreprise", () => {
    it("répond 204 sans corps", async () => {
      entrepriseService.delete.mockResolvedValue(true);

      await entrepriseController.deleteEntreprise(
        { params: { id: 1 } },
        res,
        next
      );

      expect(entrepriseService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
