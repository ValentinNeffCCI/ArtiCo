const formulaireService = require("../../../services/formulaire-service.js");

jest.mock("../../../services/formulaire-service.js");

const formulaireController = require("../../../controllers/formulaire-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("formulaire-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllFormulaires", () => {
    it("répond 200 avec la liste", async () => {
      formulaireService.findAll.mockResolvedValue([{ id: 1 }]);

      await formulaireController.getAllFormulaires({}, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      formulaireService.findAll.mockRejectedValue(error);

      await formulaireController.getAllFormulaires({}, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getFormulaireById", () => {
    it("répond 200 avec le formulaire", async () => {
      formulaireService.findById.mockResolvedValue({ id: 3 });

      await formulaireController.getFormulaireById(
        { params: { id: 3 } },
        res,
        next
      );

      expect(formulaireService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getFormulaireByEntrepriseId", () => {
    it("répond 200 avec les formulaires de l'entreprise", async () => {
      formulaireService.findByEntrepriseId.mockResolvedValue([{ id: 1 }]);

      await formulaireController.getFormulaireByEntrepriseId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(formulaireService.findByEntrepriseId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("createFormulaire", () => {
    it("crée et répond 201", async () => {
      formulaireService.create.mockResolvedValue({ id: 5 });

      await formulaireController.createFormulaire(
        { body: { name: "Contact" } },
        res,
        next
      );

      expect(formulaireService.create).toHaveBeenCalledWith({ name: "Contact" });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("updateFormulaire", () => {
    it("met à jour et répond 200", async () => {
      formulaireService.update.mockResolvedValue({ id: 1 });

      await formulaireController.updateFormulaire(
        { params: { id: 1 }, body: { name: "x" } },
        res,
        next
      );

      expect(formulaireService.update).toHaveBeenCalledWith(1, { name: "x" });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteFormulaire", () => {
    it("supprime et répond 200", async () => {
      formulaireService.delete.mockResolvedValue({ id: 1 });

      await formulaireController.deleteFormulaire(
        { params: { id: 1 } },
        res,
        next
      );

      expect(formulaireService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
