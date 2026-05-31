const galerieRepository = require("../../../repositories/galerie-repository.js");
const fs = require("fs");

jest.mock("../../../repositories/galerie-repository.js");
jest.mock("fs");

const galerieService = require("../../../services/galerie-service.js");

const makeGalerie = (overrides = {}) => ({
  id: 1,
  path: "uploads/photo.png",
  ...overrides,
});

describe("galerie-service", () => {
  describe("findById", () => {
    it("renvoie l'image transformée", async () => {
      galerieRepository.findById.mockResolvedValue(makeGalerie());

      const result = await galerieService.findById(1);

      expect(galerieRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toEqual({ id: 1, path: "uploads/photo.png" });
    });

    it("lève une 404 quand l'image n'existe pas", async () => {
      galerieRepository.findById.mockResolvedValue(null);

      await expect(galerieService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection des images", async () => {
      galerieRepository.findAll.mockResolvedValue([
        makeGalerie({ id: 1 }),
        makeGalerie({ id: 2 }),
      ]);

      const result = await galerieService.findAll();

      expect(result).toHaveLength(2);
    });
  });

  describe("findAllByEntrepriseId", () => {
    it("renvoie les images d'une entreprise", async () => {
      galerieRepository.findByEntrepriseId.mockResolvedValue([makeGalerie()]);

      const result = await galerieService.findAllByEntrepriseId(10);

      expect(galerieRepository.findByEntrepriseId).toHaveBeenCalledWith(10);
      expect(result).toHaveLength(1);
    });
  });

  describe("create", () => {
    it("crée et transforme l'image", async () => {
      galerieRepository.create.mockResolvedValue(makeGalerie({ id: 3 }));

      const result = await galerieService.create({
        path: "uploads/photo.png",
        entrepriseId: 10,
      });

      expect(galerieRepository.create).toHaveBeenCalled();
      expect(result).toMatchObject({ id: 3 });
    });
  });

  describe("delete", () => {
    it("supprime le fichier sur le disque puis l'enregistrement", async () => {
      galerieRepository.findById.mockResolvedValue(
        makeGalerie({ path: "uploads/photo.png" })
      );
      galerieRepository.delete.mockResolvedValue(makeGalerie());

      const result = await galerieService.delete(1);

      expect(fs.unlinkSync).toHaveBeenCalledWith("uploads/photo.png");
      expect(galerieRepository.delete).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
    });

    it("supprime quand même l'enregistrement si le fichier est introuvable", async () => {
      galerieRepository.findById.mockResolvedValue(null);
      galerieRepository.delete.mockResolvedValue(makeGalerie());

      const result = await galerieService.delete(1);

      expect(fs.unlinkSync).not.toHaveBeenCalled();
      expect(galerieRepository.delete).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
    });
  });
});
