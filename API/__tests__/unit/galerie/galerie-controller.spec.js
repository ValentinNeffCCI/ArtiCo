const galerieService = require("../../../services/galerie-service.js");

jest.mock("../../../services/galerie-service.js");

const galerieController = require("../../../controllers/galerie-controller.js");

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe("galerie-controller", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
    // Évite la pollution de la sortie : le controller log les erreurs.
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  describe("getAllGaleries", () => {
    it("répond 200 avec la liste", async () => {
      galerieService.findAll.mockResolvedValue([{ id: 1 }]);

      await galerieController.getAllGaleries({}, res, next);

      expect(galerieService.findAll).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("getGalerieById", () => {
    it("répond 200 avec l'image", async () => {
      galerieService.findById.mockResolvedValue({ id: 3 });

      await galerieController.getGalerieById({ params: { id: 3 } }, res, next);

      expect(galerieService.findById).toHaveBeenCalledWith(3);
      expect(res.json).toHaveBeenCalledWith({ id: 3 });
    });
  });

  describe("getGalerieByEntrepriseId", () => {
    it("répond 200 avec les images de l'entreprise", async () => {
      galerieService.findAllByEntrepriseId.mockResolvedValue([{ id: 1 }]);

      await galerieController.getGalerieByEntrepriseId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(galerieService.findAllByEntrepriseId).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it("transmet l'erreur à next()", async () => {
      const error = new Error("boom");
      galerieService.findAllByEntrepriseId.mockRejectedValue(error);

      await galerieController.getGalerieByEntrepriseId(
        { params: { id: 10 } },
        res,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("createGalerie", () => {
    it("normalise le path du fichier et répond 201", async () => {
      galerieService.create.mockResolvedValue({ id: 5 });
      const req = {
        file: { path: "uploads\\photo.png" },
        body: { entrepriseId: "10" },
      };

      await galerieController.createGalerie(req, res, next);

      expect(galerieService.create).toHaveBeenCalledWith({
        path: "uploads/photo.png",
        entrepriseId: "10",
      });
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("deleteGalerie", () => {
    it("supprime et répond 200", async () => {
      galerieService.delete.mockResolvedValue(true);

      await galerieController.deleteGalerie({ params: { id: 1 } }, res, next);

      expect(galerieService.delete).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
