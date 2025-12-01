const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/submission-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', authenticated(), SubmissionController.getAllSubmissions);
router.get('/:id', authenticated(), SubmissionController.getSubmissionById);
router.get('/formulaire/:id', authenticated(), SubmissionController.getSubmissionByFormulaireId);
router.post('/', authenticated(),SubmissionController.createSubmission);
router.delete('/:id', authenticated(),SubmissionController.deleteSubmission);

module.exports = router;