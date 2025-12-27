const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/submission-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');
const submissionService = require('../services/submission-service.js');

router.get('/', authenticated(), SubmissionController.getAllSubmissions);
router.get('/:id', idParser, authenticated(), SubmissionController.getSubmissionById);
router.post('/', SubmissionController.createSubmission);
router.get('/formulaire/:id', idParser, authenticated(), SubmissionController.getSubmissionByFormulaireId);
router.delete('/:id', idParser, authenticated(),SubmissionController.deleteSubmission);


module.exports = router;