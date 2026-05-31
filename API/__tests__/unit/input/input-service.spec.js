const inputRepository = require("../../../repositories/input-repository.js");

jest.mock("../../../repositories/input-repository.js");

const inputService = require("../../../services/input-service.js");

const makeInput = (overrides = {}) => ({
  id: 1,
  name: "Email",
  type: "email",
  required: true,
  options: [],
  ...overrides,
});

describe("input-service", () => {
  describe("findById", () => {
    it("renvoie l'input transformé (options masquées)", async () => {
      inputRepository.findById.mockResolvedValue(makeInput());

      const result = await inputService.findById(1);

      expect(inputRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toMatchObject({
        id: 1,
        name: "Email",
        type: "email",
        required: true,
      });
      expect(result.options).toBe(false);
    });

    it("lève une 404 quand l'input n'existe pas", async () => {
      inputRepository.findById.mockResolvedValue(null);

      await expect(inputService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection des inputs", async () => {
      inputRepository.findAll.mockResolvedValue([
        makeInput({ id: 1 }),
        makeInput({ id: 2 }),
      ]);

      const result = await inputService.findAll();

      expect(result).toHaveLength(2);
    });
  });

  describe("create", () => {
    it("crée et transforme l'input", async () => {
      inputRepository.create.mockResolvedValue(makeInput({ id: 5 }));

      const result = await inputService.create({
        name: "Email",
        formulaireId: 10,
      });

      expect(inputRepository.create).toHaveBeenCalled();
      expect(result).toMatchObject({ id: 5 });
    });
  });

  describe("update", () => {
    it("met à jour et transforme l'input", async () => {
      inputRepository.update.mockResolvedValue(
        makeInput({ name: "Téléphone" })
      );

      const result = await inputService.update(1, { name: "Téléphone" });

      expect(inputRepository.update).toHaveBeenCalledWith(1, {
        name: "Téléphone",
      });
      expect(result).toMatchObject({ name: "Téléphone" });
    });
  });

  describe("delete", () => {
    it("supprime et transforme l'input supprimé", async () => {
      inputRepository.delete.mockResolvedValue(makeInput({ id: 7 }));

      const result = await inputService.delete(7);

      expect(inputRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
