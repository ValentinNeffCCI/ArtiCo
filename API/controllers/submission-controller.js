const submissionService = require("../services/submission-service.js");

module.exports = {
    getAllSubmissions: async (req, res, next) => {
        try {
            const submissions = await submissionService.getAllSubmissions();
            res.status(200).json(submissions);
        } catch (error) {
            next(err);
        }
    },
    getSubmissionById: async (req, res, next) => {
        try {
            const submission = await submissionService.getSubmissionById(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            next(err);
        }
    },
    getSubmissionByFormulaireId: async (req, res, next) => {
        try {
            const submission = await submissionService.getSubmissionByFormulaireId(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            next(err);
        }
    },
    createSubmission: async (req, res, next) => {
        try {
            const submission = await submissionService.createSubmission(req.body);
            res.status(201).json(submission);
        } catch (error) {
            next(err);
        }
    },
    deleteSubmission: async (req, res, next) => {
        try {
            const submission = await submissionService.deleteSubmission(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            next(err);
        }
    }
}