const submissionService = require("../services/submission-service.js");

module.exports = {
    getAllSubmissions: async (req, res, next) => {
        try {
            const submissions = await submissionService.findAll();
            res.status(200).json(submissions);
        } catch (error) {
            return next(error);
        }
    },
    getSubmissionById: async (req, res, next) => {
        try {
            const submission = await submissionService.findById(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            return next(error);
        }
    },
    getSubmissionByFormulaireId: async (req, res, next) => {
        try {
            const submission = await submissionService.findByFormulaireId(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            return next(error);
        }
    },
    createSubmission: async (req, res, next) => {
        try {
            const submission = await submissionService.create(req.body);
            res.status(201).json(submission);
        } catch (error) {
            return next(error);
        }
    },
    deleteSubmission: async (req, res, next) => {
        try {
            const submission = await submissionService.delete(req.params.id);
            res.status(200).json(submission);
        } catch (error) {
            return next(error);
        }
    }
}