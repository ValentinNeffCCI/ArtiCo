const optionRepository = require("../../../repositories/option-repository.js");

jest.mock("../../../repositories/option-repository.js");

const optionService = require("../../../services/option-service.js");

const makeOption = (overrides = {}) => ({
  id: 1,
  value: "Choix A",
  ...overrides,
});

describe("option-service", () => {
  describe("findById", () => {
    it("renvoie l'option transformée", async () => {
      optionRepository.findById.mockResolvedValue(makeOption());

      const result = await optionService.findById(1);

      expect(optionRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toEqual({ id: 1, value: "Choix A" });
    });

    it("lève une 404 quand l'option n'existe pas", async () => {
      optionRepository.findById.mockResolvedValue(null);

      await expect(optionService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection des options", async () => {
      optionRepository.findAll.mockResolvedValue([
        makeOption({ id: 1 }),
        makeOption({ id: 2, value: "Choix B" }),
      ]);

      const result = await optionService.findAll();

      expect(result).toHaveLength(2);
      expect(result[1]).toEqual({ id: 2, value: "Choix B" });
    });
  });

  describe("create", () => {
    it("crée et transforme l'option", async () => {
      optionRepository.create.mockResolvedValue(makeOption({ id: 5 }));

      const result = await optionService.create({
        value: "Choix A",
        inputId: 10,
      });

      expect(optionRepository.create).toHaveBeenCalled();
      expect(result).toMatchObject({ id: 5 });
    });
  });

  describe("update", () => {
    it("met à jour et transforme l'option", async () => {
      optionRepository.update.mockResolvedValue(makeOption({ value: "Choix Z" }));

      const result = await optionService.update(1, { value: "Choix Z" });

      expect(optionRepository.update).toHaveBeenCalledWith(1, {
        value: "Choix Z",
      });
      expect(result).toMatchObject({ value: "Choix Z" });
    });
  });

  describe("delete", () => {
    it("supprime et transforme l'option supprimée", async () => {
      optionRepository.delete.mockResolvedValue(makeOption({ id: 7 }));

      const result = await optionService.delete(7);

      expect(optionRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
