const categorieRepository = require("../../../repositories/categorie-repository.js");

jest.mock("../../../repositories/categorie-repository.js");

const categorieService = require("../../../services/categorie-service.js");

const makeCategorie = (overrides = {}) => ({
  id: 1,
  name: "Plomberie",
  entreprises: [{ id: 10 }],
  ...overrides,
});

describe("categorie-service", () => {
  describe("findById", () => {
    it("renvoie la catégorie avec ses entreprises (mode détaillé)", async () => {
      categorieRepository.findById.mockResolvedValue(makeCategorie());

      const result = await categorieService.findById(1);

      expect(categorieRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toMatchObject({ id: 1, name: "Plomberie" });
      expect(result.entreprises).toEqual([{ id: 10 }]);
    });

    it("lève une 404 quand la catégorie n'existe pas", async () => {
      categorieRepository.findById.mockResolvedValue(null);

      await expect(categorieService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection (entreprises masquées par défaut)", async () => {
      categorieRepository.findAll.mockResolvedValue([
        makeCategorie({ id: 1 }),
        makeCategorie({ id: 2, name: "Électricité" }),
      ]);

      const result = await categorieService.findAll();

      expect(categorieRepository.findAll).toHaveBeenCalledWith(false);
      expect(result).toHaveLength(2);
      expect(result[0].entreprises).toBe(false);
    });

    it("transmet la limite au repository", async () => {
      categorieRepository.findAll.mockResolvedValue([]);

      await categorieService.findAll(5);

      expect(categorieRepository.findAll).toHaveBeenCalledWith(5);
    });
  });

  describe("create", () => {
    it("crée et transforme la catégorie", async () => {
      categorieRepository.create.mockResolvedValue(makeCategorie({ id: 3 }));

      const result = await categorieService.create({ name: "Plomberie" });

      expect(categorieRepository.create).toHaveBeenCalledWith({
        name: "Plomberie",
      });
      expect(result).toMatchObject({ id: 3 });
    });
  });

  describe("update", () => {
    it("met à jour et transforme la catégorie", async () => {
      categorieRepository.update.mockResolvedValue(
        makeCategorie({ name: "Maçonnerie" })
      );

      const result = await categorieService.update(1, { name: "Maçonnerie" });

      expect(categorieRepository.update).toHaveBeenCalledWith(1, {
        name: "Maçonnerie",
      });
      expect(result).toMatchObject({ name: "Maçonnerie" });
    });
  });

  describe("delete", () => {
    it("supprime et transforme la catégorie supprimée", async () => {
      categorieRepository.delete.mockResolvedValue(makeCategorie({ id: 7 }));

      const result = await categorieService.delete(7);

      expect(categorieRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
