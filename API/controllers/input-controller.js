const inputService = require("../services/input-service.js");

module.exports = {
    getAllInputs: async (req, res, next) => {
        try {
            const inputs = await inputService.getAllInputs();
            res.status(200).json(inputs);
        } catch (error) {
            next(error);
        }
    },
    getInputById: async (req, res, next) => {
        try {
            const input = await inputService.getInputById(req.params.id);
            res.status(200).json(input);
        } catch (error) {
            next(error);
        }
    },
    getInputByFormulaireId: async (req, res, next) => {
        try {
            const input = await inputService.getInputByFormulaireId(req.params.id);
            res.status(200).json(input);
        } catch (error) {
            next(error);
        }
    },
    createInput: async (req, res, next) => {
        try {
            const input = await inputService.createInput(req.body);
            res.status(201).json(input);
        } catch (error) {
            next(error);
        }
    },
    updateInput: async (req, res, next) => {
        try {
            const input = await inputService.updateInput(req.params.id, req.body);
            res.status(200).json(input);
        } catch (error) {
            next(error);
        }
    },
    deleteInput: async (req, res, next) => {
        try {
            const input = await inputService.deleteInput(req.params.id);
            res.status(200).json(input);
        } catch (error) {
            next(error);
        }
    }
}