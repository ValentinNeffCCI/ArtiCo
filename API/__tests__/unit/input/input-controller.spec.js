const inputService = require("../../../services/input-service.js");

jest.mock("../../../services/input-service.js");

const inputController = require("../../../controllers/input-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("input-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllInputs", () => {
    it("répond 200 avec la liste des inputs", async () => {
      inputService.findAll.mockResolvedValue([{ id: 1 }]);

      await inputController.getAllInputs({}, res, next);

      expect(inputService.findAll).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      inputService.findAll.mockRejectedValue(error);

      await inputController.getAllInputs({}, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getInputById", () => {
    it("répond 200 avec l'input", async () => {
      inputService.findById.mockResolvedValue({ id: 3 });

      await inputController.getInputById({ params: { id: 3 } }, res, next);

      expect(inputService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getInputByFormulaireId", () => {
    it("répond 200 avec les inputs du formulaire", async () => {
      inputService.findByFormulaireId.mockResolvedValue([{ id: 1 }]);

      await inputController.getInputByFormulaireId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(inputService.findByFormulaireId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("createInput", () => {
    it("crée et répond 201", async () => {
      inputService.create.mockResolvedValue({ id: 5 });

      await inputController.createInput({ body: { name: "Email" } }, res, next);

      expect(inputService.create).toHaveBeenCalledWith({ name: "Email" });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("updateInput", () => {
    it("met à jour et répond 200", async () => {
      inputService.update.mockResolvedValue({ id: 1 });

      await inputController.updateInput(
        { params: { id: 1 }, body: { name: "x" } },
        res,
        next
      );

      expect(inputService.update).toHaveBeenCalledWith(1, { name: "x" });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteInput", () => {
    it("supprime et répond 200", async () => {
      inputService.delete.mockResolvedValue({ id: 1 });

      await inputController.deleteInput({ params: { id: 1 } }, res, next);

      expect(inputService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
