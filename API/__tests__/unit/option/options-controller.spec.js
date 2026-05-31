const optionsService = require("../../../services/option-service.js");

jest.mock("../../../services/option-service.js");

const optionsController = require("../../../controllers/options-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("options-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
  });

  describe("getAllOptions", () => {
    it("répond 200 avec la liste des options", async () => {
      optionsService.findAll.mockResolvedValue([{ id: 1 }]);

      await optionsController.getAllOptions({}, res, next);

      expect(optionsService.findAll).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      optionsService.findAll.mockRejectedValue(error);

      await optionsController.getAllOptions({}, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("getOptionById", () => {
    it("répond 200 avec l'option", async () => {
      optionsService.findById.mockResolvedValue({ id: 3 });

      await optionsController.getOptionById({ params: { id: 3 } }, res, next);

      expect(optionsService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getOptionByInputId", () => {
    it("répond 200 avec les options de l'input", async () => {
      optionsService.findByInputId.mockResolvedValue([{ id: 1 }]);

      await optionsController.getOptionByInputId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(optionsService.findByInputId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("createOption", () => {
    it("crée et répond 201", async () => {
      optionsService.create.mockResolvedValue({ id: 5 });

      await optionsController.createOption(
        { body: { value: "Choix A" } },
        res,
        next
      );

      expect(optionsService.create).toHaveBeenCalledWith({ value: "Choix A" });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("updateOption", () => {
    it("met à jour et répond 200", async () => {
      optionsService.update.mockResolvedValue({ id: 1 });

      await optionsController.updateOption(
        { params: { id: 1 }, body: { value: "x" } },
        res,
        next
      );

      expect(optionsService.update).toHaveBeenCalledWith(1, { value: "x" });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteOption", () => {
    it("supprime et répond 200", async () => {
      optionsService.delete.mockResolvedValue({ id: 1 });

      await optionsController.deleteOption({ params: { id: 1 } }, res, next);

      expect(optionsService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
