const entrepriseRepository = require("../../../repositories/entreprise-repository.js");
const fs = require("fs");

// Le repository (Prisma) et fs sont mockés : aucune DB ni I/O fichier réels.
jest.mock("../../../repositories/entreprise-repository.js");
jest.mock("fs");

const entrepriseService = require("../../../services/entreprise-service.js");

// Entreprise "brute" telle que renvoyée par le repository.
const makeEntreprise = (overrides = {}) => ({
  id: 1,
  name: "ArtiCo",
  email: "contact@artico.fr",
  city: "Strasbourg",
  cp: "67000",
  address1: "1 rue du Test",
  address2: "Bât. B",
  phone: "0388000000",
  description: "Une description",
  image: null,
  owner: null,
  categorie: { id: 2, name: "Plomberie" },
  photos: [],
  formulaires: [],
  ...overrides,
});

describe("entreprise-service", () => {
  describe("findById", () => {
    it("renvoie l'entreprise avec les détails (resource en mode détaillé)", async () => {
      entrepriseRepository.findById.mockResolvedValue(makeEntreprise());

      const result = await entrepriseService.findById(1);

      expect(entrepriseRepository.findById).toHaveBeenCalledWith(1);
      // details=true => phone/description/address2 exposés.
      expect(result).toMatchObject({
        id: 1,
        phone: "0388000000",
        description: "Une description",
        address2: "Bât. B",
      });
    });

    it("lève une 404 quand l'entreprise n'existe pas", async () => {
      entrepriseRepository.findById.mockResolvedValue(null);

      await expect(entrepriseService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findByUserId", () => {
    it("renvoie la collection des entreprises du propriétaire", async () => {
      entrepriseRepository.findByUserId.mockResolvedValue([
        makeEntreprise({ id: 1 }),
        makeEntreprise({ id: 2 }),
      ]);

      const result = await entrepriseService.findByUserId(10);

      expect(entrepriseRepository.findByUserId).toHaveBeenCalledWith(10);
      expect(result).toHaveLength(2);
    });
  });

  describe("findAll", () => {
    it("appelle findAll quand la query est vide", async () => {
      entrepriseRepository.findAll.mockResolvedValue([makeEntreprise()]);

      const result = await entrepriseService.findAll({});

      expect(entrepriseRepository.findAll).toHaveBeenCalledTimes(1);
      expect(entrepriseRepository.filter).not.toHaveBeenCalled();
      expect(result).toHaveLength(1);
    });

    it("convertit categorieId en filtre catégorie et appelle filter", async () => {
      entrepriseRepository.filter.mockResolvedValue([makeEntreprise()]);

      await entrepriseService.findAll({ categorieId: "2" });

      expect(entrepriseRepository.filter).toHaveBeenCalledWith({
        categorie: { id: 2 },
      });
      // categorieId doit être retiré du filtre transmis.
      expect(entrepriseRepository.filter.mock.calls[0][0]).not.toHaveProperty(
        "categorieId"
      );
    });

    it("transmet la query telle quelle quand categorieId n'est pas numérique", async () => {
      entrepriseRepository.filter.mockResolvedValue([]);

      await entrepriseService.findAll({ name: "arti" });

      expect(entrepriseRepository.filter).toHaveBeenCalledWith({ name: "arti" });
    });
  });

  describe("create", () => {
    it("crée l'entreprise et la transforme via la resource", async () => {
      entrepriseRepository.create.mockResolvedValue(makeEntreprise({ id: 5 }));

      const result = await entrepriseService.create({ name: "ArtiCo" });

      expect(entrepriseRepository.create).toHaveBeenCalledWith({
        name: "ArtiCo",
      });
      expect(result).toMatchObject({ id: 5, name: "ArtiCo" });
    });
  });

  describe("update", () => {
    it("met à jour sans toucher au système de fichiers quand deleteImage=false", async () => {
      entrepriseRepository.update.mockResolvedValue(makeEntreprise());

      await entrepriseService.update(1, { name: "Nouveau nom" });

      expect(fs.unlinkSync).not.toHaveBeenCalled();
      expect(entrepriseRepository.update).toHaveBeenCalledWith(1, {
        name: "Nouveau nom",
      });
    });

    it("supprime l'ancienne image quand deleteImage=true et qu'une image existe", async () => {
      entrepriseRepository.findById.mockResolvedValue(
        makeEntreprise({ image: "uploads/old.png" })
      );
      entrepriseRepository.update.mockResolvedValue(makeEntreprise());

      await entrepriseService.update(1, { name: "x" }, true);

      expect(fs.unlinkSync).toHaveBeenCalledWith("./uploads/old.png");
      expect(entrepriseRepository.update).toHaveBeenCalled();
    });

    it("ne supprime rien quand deleteImage=true mais qu'il n'y a pas d'image", async () => {
      entrepriseRepository.findById.mockResolvedValue(
        makeEntreprise({ image: null })
      );
      entrepriseRepository.update.mockResolvedValue(makeEntreprise());

      await entrepriseService.update(1, { name: "x" }, true);

      expect(fs.unlinkSync).not.toHaveBeenCalled();
    });
  });

  describe("delete", () => {
    it("supprime l'image et les photos existantes puis l'entreprise", async () => {
      entrepriseRepository.findById.mockResolvedValue(
        makeEntreprise({
          image: "uploads/logo.png",
          photos: ["uploads/p1.png", "uploads/p2.png"],
        })
      );
      fs.existsSync.mockReturnValue(true);
      entrepriseRepository.delete.mockResolvedValue(makeEntreprise());

      const result = await entrepriseService.delete(1);

      expect(fs.unlinkSync).toHaveBeenCalledWith("./uploads/logo.png");
      expect(fs.unlinkSync).toHaveBeenCalledWith("./uploads/p1.png");
      expect(fs.unlinkSync).toHaveBeenCalledWith("./uploads/p2.png");
      expect(entrepriseRepository.delete).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
    });

    it("ne tente pas de supprimer un fichier inexistant", async () => {
      entrepriseRepository.findById.mockResolvedValue(
        makeEntreprise({ image: "uploads/logo.png", photos: [] })
      );
      fs.existsSync.mockReturnValue(false);
      entrepriseRepository.delete.mockResolvedValue(makeEntreprise());

      await entrepriseService.delete(1);

      expect(fs.unlinkSync).not.toHaveBeenCalled();
      expect(entrepriseRepository.delete).toHaveBeenCalledWith(1);
    });

    it("lève une erreur quand l'entreprise à supprimer n'existe pas", async () => {
      entrepriseRepository.findById.mockResolvedValue(null);

      await expect(entrepriseService.delete(999)).rejects.toBeInstanceOf(Error);
      expect(entrepriseRepository.delete).not.toHaveBeenCalled();
    });
  });

  describe("findByName", () => {
    it("renvoie l'entreprise transformée par la resource", async () => {
      entrepriseRepository.findByName.mockResolvedValue(makeEntreprise());

      const result = await entrepriseService.findByName("ArtiCo");

      expect(entrepriseRepository.findByName).toHaveBeenCalledWith("ArtiCo");
      expect(result).toMatchObject({ name: "ArtiCo" });
    });

    it("lève une 404 quand aucune entreprise ne porte ce nom", async () => {
      entrepriseRepository.findByName.mockResolvedValue(null);

      await expect(
        entrepriseService.findByName("Inconnu")
      ).rejects.toMatchObject({ status: 404 });
    });
  });
});
