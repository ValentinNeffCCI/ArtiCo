const submissionService = require("../../../services/submission-service.js");

jest.mock("../../../services/submission-service.js");

const submissionController = require("../../../controllers/submission-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("submission-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllSubmissions", () => {
    it("répond 200 avec la liste", async () => {
      submissionService.findAll.mockResolvedValue([{ id: 1 }]);

      await submissionController.getAllSubmissions({}, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      submissionService.findAll.mockRejectedValue(error);

      await submissionController.getAllSubmissions({}, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getSubmissionById", () => {
    it("répond 200 avec la soumission", async () => {
      submissionService.findById.mockResolvedValue({ id: 3 });

      await submissionController.getSubmissionById(
        { params: { id: 3 } },
        res,
        next
      );

      expect(submissionService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getSubmissionByFormulaireId", () => {
    it("répond 200 avec les soumissions du formulaire", async () => {
      submissionService.findByFormulaireId.mockResolvedValue([{ id: 1 }]);

      await submissionController.getSubmissionByFormulaireId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(submissionService.findByFormulaireId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("createSubmission", () => {
    it("crée et répond 201", async () => {
      submissionService.create.mockResolvedValue({ id: 5 });

      await submissionController.createSubmission(
        { body: { formulaireId: 10, content: {} } },
        res,
        next
      );

      expect(submissionService.create).toHaveBeenCalledWith({
        formulaireId: 10,
        content: {},
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });

    it("transmet l'erreur (ex: formulaire introuvable) à next()", async () => {
      const error = new Error("Pas de formulaire trouvé !");
      submissionService.create.mockRejectedValue(error);

      await submissionController.createSubmission(
        { body: { formulaireId: 999 } },
        res,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteSubmission", () => {
    it("supprime et répond 200", async () => {
      submissionService.delete.mockResolvedValue({ id: 1 });

      await submissionController.deleteSubmission(
        { params: { id: 1 } },
        res,
        next
      );

      expect(submissionService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
