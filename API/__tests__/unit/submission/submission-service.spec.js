const submissionRepository = require("../../../repositories/submission-repository.js");
const formulaireRepository = require("../../../repositories/formulaire-repository.js");
const entrepriseRepository = require("../../../repositories/entreprise-repository.js");
const userRepository = require("../../../repositories/user-repository.js");
const sendMail = require("../../../utils/sendRecap.js");

jest.mock("../../../repositories/submission-repository.js");
jest.mock("../../../repositories/formulaire-repository.js");
jest.mock("../../../repositories/entreprise-repository.js");
jest.mock("../../../repositories/user-repository.js");
jest.mock("../../../utils/sendRecap.js", () => jest.fn());
// Évite d'instancier le vrai PrismaClient (importé par le service).
jest.mock("../../../utils/client.js", () => ({}));

const submissionService = require("../../../services/submission-service.js");

const makeSubmission = (overrides = {}) => ({
  id: 1,
  content: { nom: "Dupont", message: "Bonjour" },
  createdAt: new Date("2026-01-01T10:00:00Z"),
  formulaire: { id: 10, name: "Contact" },
  ...overrides,
});

describe("submission-service", () => {
  describe("findById", () => {
    it("renvoie la soumission avec son formulaire (mode détaillé)", async () => {
      submissionRepository.findById.mockResolvedValue(makeSubmission());

      const result = await submissionService.findById(1);

      expect(submissionRepository.findById).toHaveBeenCalledWith(1);
      expect(result).toMatchObject({
        id: 1,
        content: { nom: "Dupont", message: "Bonjour" },
      });
      expect(result.formulaire).toEqual({ id: 10, name: "Contact" });
    });

    it("lève une 404 quand la soumission n'existe pas", async () => {
      submissionRepository.findById.mockResolvedValue(null);

      await expect(submissionService.findById(999)).rejects.toMatchObject({
        status: 404,
      });
    });
  });

  describe("findAll", () => {
    it("renvoie la collection des soumissions", async () => {
      submissionRepository.findAll.mockResolvedValue([
        makeSubmission({ id: 1 }),
        makeSubmission({ id: 2 }),
      ]);

      const result = await submissionService.findAll();

      expect(result).toHaveLength(2);
    });
  });

  describe("findByFormulaireId", () => {
    it("renvoie les soumissions d'un formulaire", async () => {
      submissionRepository.findByFormulaireId.mockResolvedValue([
        makeSubmission(),
      ]);

      const result = await submissionService.findByFormulaireId(10);

      expect(submissionRepository.findByFormulaireId).toHaveBeenCalledWith(10);
      expect(result).toHaveLength(1);
    });
  });

  describe("create", () => {
    it("crée la soumission et envoie le mail récap quand le formulaire existe", async () => {
      formulaireRepository.findById.mockResolvedValue({ id: 10 });
      entrepriseRepository.findById.mockResolvedValue({ id: 10, email: "test@test.com"});
      userRepository.findById.mockResolvedValue({ id: 10 });
      sendMail.mockResolvedValue(true);

      const submission = makeSubmission({ id: 5 });
      submissionRepository.create.mockResolvedValue(submission);

      const result = await submissionService.create({
        formulaireId: 10,
        content: { nom: "Dupont" },
      });

      expect(formulaireRepository.findById).toHaveBeenCalledWith(10);
      expect(submissionRepository.create).toHaveBeenCalled();
      // Le mail récapitulatif est envoyé avec la soumission créée.
      expect(sendMail).toHaveBeenCalledWith(submission, "test@test.com");
      expect(result).toMatchObject({ id: 5 });
    });

    it("lève une 404 et n'envoie aucun mail si le formulaire n'existe pas", async () => {
      formulaireRepository.findById.mockResolvedValue(null);

      await expect(
        submissionService.create({ formulaireId: 999, content: {} })
      ).rejects.toMatchObject({ status: 404 });

      expect(submissionRepository.create).not.toHaveBeenCalled();
      expect(sendMail).not.toHaveBeenCalled();
    });
  });

  describe("delete", () => {
    it("supprime et transforme la soumission supprimée", async () => {
      submissionRepository.delete.mockResolvedValue(makeSubmission({ id: 7 }));

      const result = await submissionService.delete(7);

      expect(submissionRepository.delete).toHaveBeenCalledWith(7);
      expect(result).toMatchObject({ id: 7 });
    });
  });
});
