const prisma = require("../utils/client.js");

const CONTACT_EMAIL_FIELD =
  "Votre adresse mail afin de pouvoir être recontacté par le professionnel";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "string" && value.trim() === "") ||
  (Array.isArray(value) && value.length === 0);

const verifySubmissionContent = async (req, res, next) => {
  try {
    const { content, formulaireId } = req.body;

    if (
      typeof content !== "object" ||
      content === null ||
      Array.isArray(content)
    ) {
      return res.status(400).json({
        error: "Le contenu de la soumission est invalide",
        errors: [
          { field: "content", message: "Le contenu doit être un objet" },
        ],
      });
    }

    const form = await prisma.formulaire.findUnique({
      where: { id: formulaireId },
      include: { inputs: { include: { options: true } } },
    });

    if (!form) {
      return res.status(404).json({
        error: "Pas de formulaire trouvé !",
        errors: [
          { field: "formulaireId", message: "Pas de formulaire trouvé !" },
        ],
      });
    }

    const errors = [];
    const inputsByName = new Map(
      form.inputs.map((input) => [input.name, input])
    );

    for (const key of Object.keys(content)) {
      if (key === CONTACT_EMAIL_FIELD) continue;
      if (!inputsByName.has(key)) {
        errors.push({ field: key, message: `Champ inconnu : ${key}` });
      }
    }

    for (const input of form.inputs) {
      const value = content[input.name];

      if (isEmpty(value)) {
        if (input.required) {
          errors.push({
            field: input.name,
            message: `Le champ "${input.name}" est requis`,
          });
        }
        continue;
      }

      const allowedValues = input.options.map((option) => option.value);

      switch (input.type) {
        case "checkbox": {
          if (!Array.isArray(value)) {
            errors.push({
              field: input.name,
              message: `Le champ "${input.name}" est invalide`,
            });
            break;
          }
          if (value.some((v) => !allowedValues.includes(v))) {
            errors.push({
              field: input.name,
              message: `Valeur non autorisée pour "${input.name}"`,
            });
          }
          break;
        }
        case "radio":
        case "select": {
          if (!allowedValues.includes(value)) {
            errors.push({
              field: input.name,
              message: `Valeur non autorisée pour "${input.name}"`,
            });
          }
          break;
        }
        case "number": {
          if (Number.isNaN(Number(value))) {
            errors.push({
              field: input.name,
              message: `Le champ "${input.name}" doit être un nombre`,
            });
          }
          break;
        }
        case "email": {
          if (!EMAIL_REGEX.test(value)) {
            errors.push({
              field: input.name,
              message: `Le champ "${input.name}" doit être un email valide`,
            });
          }
          break;
        }
        default:
          break;
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0].message, errors });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = verifySubmissionContent;
module.exports.CONTACT_EMAIL_FIELD = CONTACT_EMAIL_FIELD;
