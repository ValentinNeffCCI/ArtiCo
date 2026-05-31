const formulaireRepository = require("../../../repositories/formulaire-repository.js");

jest.mock("../../../repositories/formulaire-repository.js");

const formulaireService = require("../../../services/formulaire-service.js");

const makeFormulaire = (overrides = {}) => ({
  id: 1,
  name: "Contact",
  entrepriseId: 10,
  inputs: [{ id: 100 }],
  ...overrides,
});

describe("formulaire-service", () => {
  describe("findById", () => {
    it("renvoie le formulaire avec ses inputs (mode détaillé)", async () => {
      formulaireRepository.findById.mockResolvedValue(makeFormulaire());

      const result = await formulaireService.findById(1);

      expect(formulaireRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toMatchObject({ id: 1, name: "Contact", entrepriseId: 10 });
      expect(result.inputs).toEqual([{ id: 100 }]);
    });

    it("lève une 404 quand le formulaire n'existe pas", async () => {
      formulaireRepository.findById.mockResolvedValue(null);

      await expect(formulaireService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection (inputs masqués)", async () => {
      formulaireRepository.findAll.mockResolvedValue([
        makeFormulaire({ id: 1 }),
        makeFormulaire({ id: 2 }),
      ]);

      const result = await formulaireService.findAll();

      expect(result).toHaveLength(2);
      expect(result[0].inputs).toBe(false);
    });
  });

  describe("findByEntrepriseId", () => {
    it("renvoie les formulaires de l'entreprise", async () => {
      formulaireRepository.findByEntrepriseId.mockResolvedValue([
        makeFormulaire(),
      ]);

      const result = await formulaireService.findByEntrepriseId(10);

      expect(formulaireRepository.findByEntrepriseId).toHaveBeenCalledWith(10);
      expect(result).toHaveLength(1);
    });
  });

  describe("create", () => {
    it("crée et transforme le formulaire", async () => {
      formulaireRepository.create.mockResolvedValue(makeFormulaire({ id: 5 }));

      const result = await formulaireService.create({
        name: "Contact",
        entrepriseId: 10,
      });

      expect(formulaireRepository.create).toHaveBeenCalledWith({
        name: "Contact",
        entrepriseId: 10,
      });
      expect(result).toMatchObject({ id: 5 });
    });
  });

  describe("update", () => {
    it("met à jour et transforme le formulaire", async () => {
      formulaireRepository.update.mockResolvedValue(
        makeFormulaire({ name: "Devis" })
      );

      const result = await formulaireService.update(1, { name: "Devis" });

      expect(formulaireRepository.update).toHaveBeenCalledWith(1, {
        name: "Devis",
      });
      expect(result).toMatchObject({ name: "Devis" });
    });
  });

  describe("delete", () => {
    it("supprime et transforme le formulaire supprimé", async () => {
      formulaireRepository.delete.mockResolvedValue(makeFormulaire({ id: 7 }));

      const result = await formulaireService.delete(7);

      expect(formulaireRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
