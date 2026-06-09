const submissionRepository = require("../repositories/submission-repository.js");
const submissionResource = require("../resources/soumission-resource.js");
const submissionCollectionResource = require("../resources/collections/soumission-collection-resource.js");
const formulaireRepository = require("../repositories/formulaire-repository.js");
const HttpError = require("../customclasses/HttpError.js");
const soumissionCollectionResource = require("../resources/collections/soumission-collection-resource.js");
const client = require("../utils/client.js");
const sendMail = require("../utils/sendRecap.js");

module.exports = {
    findById: async (id) => {
        return submissionResource(await submissionRepository.findById(id), true);
    },
    findAll: async () => {
        return submissionCollectionResource(await submissionRepository.findAll(), true);
    },
    findByFormulaireId: async (formulaireId) => {
        const responses = await submissionRepository.findByFormulaireId(formulaireId);
        return soumissionCollectionResource(responses, true);
    },
    create: async (data) => {
        const form = await formulaireRepository.findById(data.formulaireId);
        if(!form){
            throw new HttpError('Pas de formulaire trouvé !', 404);
        }
        const submission = await submissionRepository.create(data)
        const entreprise = await entrepriseRepository.findById(form.entrepriseId);
        if(!entreprise){
            throw new HttpError('Pas d\'entreprise trouvée !', 404);
        }
        let destinataire = "";
        if(!entreprise.email || entreprise.email.length === 0) {
            const proprietaire = await userRepository.findById(entreprise.ownerId);
            if(!proprietaire) {
                throw new HttpError('Pas de proprietaire trouvé !', 404);
            }
            destinataire = proprietaire.email;
        } else {
            destinataire = entreprise.email;
        }
        console.log("envoi de mail à ", destinataire);
        sendMail(submission, destinataire);
        return submissionResource(submission);
    },
    delete: async (id) => {
        return submissionResource(await submissionRepository.delete(id));
    }
}