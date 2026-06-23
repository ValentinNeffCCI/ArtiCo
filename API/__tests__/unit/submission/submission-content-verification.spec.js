const prisma = require("../../../utils/client.js");

jest.mock("../../../utils/client.js", () => ({
  formulaire: { findUnique: jest.fn() },
}));

const verifySubmissionContent = require("../../../middlewares/submission-content-verification.js");
const { CONTACT_EMAIL_FIELD } = verifySubmissionContent;

const makeRes = () => {
  const res = {};
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

// Formulaire de référence : un champ texte requis, un select avec 2 options.
const makeForm = () => ({
  id: 10,
  inputs: [
    { name: "Nom", type: "text", required: true, options: [] },
    {
      name: "Service",
      type: "select",
      required: true,
      options: [{ value: "Plomberie" }, { value: "Électricité" }],
    },
  ],
});

describe("submission-content-verification", () => {
  let res;
  let next;

  beforeEach(() => {
    res = makeRes();
    next = jest.fn();
    prisma.formulaire.findUnique.mockReset();
  });

  it("laisse passer une soumission valide", async () => {
    prisma.formulaire.findUnique.mockResolvedValue(makeForm());
    const req = {
      body: {
        formulaireId: 10,
        content: {
          Nom: "Dupont",
          Service: "Plomberie",
          [CONTACT_EMAIL_FIELD]: "client@test.com",
        },
      },
    };

    await verifySubmissionContent(req, res, next);

    expect(next).toHaveBeenCalledWith();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("rejette un content qui n'est pas un objet (400)", async () => {
    const req = { body: { formulaireId: 10, content: "n'importe quoi" } };

    await verifySubmissionContent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
    expect(prisma.formulaire.findUnique).not.toHaveBeenCalled();
  });

  it("renvoie 404 si le formulaire n'existe pas", async () => {
    prisma.formulaire.findUnique.mockResolvedValue(null);
    const req = { body: { formulaireId: 999, content: { Nom: "x" } } };

    await verifySubmissionContent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(next).not.toHaveBeenCalled();
  });

  it("rejette une clé arbitraire (injection de champ inconnu)", async () => {
    prisma.formulaire.findUnique.mockResolvedValue(makeForm());
    const req = {
      body: {
        formulaireId: 10,
        content: { Nom: "Dupont", Service: "Plomberie", isAdmin: true },
      },
    };

    await verifySubmissionContent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    const payload = res.json.mock.calls[0][0];
    expect(payload.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ field: "isAdmin" }),
      ])
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("rejette un champ requis laissé vide", async () => {
    prisma.formulaire.findUnique.mockResolvedValue(makeForm());
    const req = {
      body: { formulaireId: 10, content: { Nom: "", Service: "Plomberie" } },
    };

    await verifySubmissionContent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    const payload = res.json.mock.calls[0][0];
    expect(payload.errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ field: "Nom" })])
    );
  });

  it("rejette une valeur de select absente des options déclarées", async () => {
    prisma.formulaire.findUnique.mockResolvedValue(makeForm());
    const req = {
      body: {
        formulaireId: 10,
        content: { Nom: "Dupont", Service: "Piratage" },
      },
    };

    await verifySubmissionContent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    const payload = res.json.mock.calls[0][0];
    expect(payload.errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ field: "Service" })])
    );
    expect(next).not.toHaveBeenCalled();
  });
});
