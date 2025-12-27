const optionsService = require("../services/option-service.js");

module.exports = {
    getAllOptions: async (req, res, next) => {
        try {
            const options = await optionsService.getAllOptions();
            res.status(200).json(options);
        } catch (error) {
            return next(error);
        }
    },
    getOptionById: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionById(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            return next(error);
        }
    },
    getOptionByInputId: async (req, res, next) => {
        try {
            const option = await optionsService.getOptionByInputId(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            return next(error);
        }
    },
    createOption: async (req, res, next) => {
        try {
            const option = await optionsService.create(req.body);
            res.status(201).json(option);
        } catch (error) {
            return next(error);
        }
    },
    updateOption: async (req, res, next) => {
        try {
            const option = await optionsService.update(req.params.id, req.body);
            res.status(200).json(option);
        } catch (error) {
            return next(error);
        }
    },
    deleteOption: async (req, res, next) => {
        try {
            const option = await optionsService.delete(req.params.id);
            res.status(200).json(option);
        } catch (error) {
            return next(error);
        }
    }
}