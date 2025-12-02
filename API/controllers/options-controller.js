const optionsService = require("../services/option-service.js");

module.exports = {
    getAllOptions: async (req, res, next) => {
        try {
            const options = await optionsService.getAllOptions();
            res.status(200).json(options);
        } catch (error) {
            next(error);
        }
    },
    getOptionById: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionById(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(error);
        }
    },
    getOptionByInputId: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionByInputId(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(error);
        }
    },
    createOption: async (req, res, next) => {
        try {
            const option = await optionsService.createOption(req.body);
            res.status(201).json(option);
        } catch (error) {
            next(error);
        }
    },
    updateOption: async (req, res, next) => {
        try {
            const option = await optionsService.updateOption(req.params.id, req.body);
            res.status(200).json(option);
        } catch (error) {
            next(error);
        }
    },
    deleteOption: async (req, res, next) => {
        try {
            const option = await optionsService.deleteOption(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            next(error);
        }
    }
}