const optionsService = require("../services/option-service.js");

module.exports = {
    getAllOptions: async (req, res, next) => {
        try {
            const options = await optionsService.getAllOptions();
            res.status(200).json(options);
        } catch (error) {
            next(err);
        }
    },
    getOptionById: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionById(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(err);
        }
    },
    getOptionByInputId: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionByInputId(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(err);
        }
    },
    createOption: async (req, res, next) => {
        try {
            const option = await optionsService.createOption(req.body);
            res.status(201).json(option);
        } catch (error) {
            next(err);
        }
    },
    updateOption: async (req, res, next) => {
        try {
            const option = await optionsService.updateOption(req.params.id, req.body);
            res.status(200).json(option);
        } catch (error) {
            next(err);
        }
    },
    deleteOption: async (req, res, next) => {
        try {
            const option = await optionsService.deleteOption(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(err);
        }
    }
}