const express = require('express');
const router = express.Router();

const getFilms = require('../controllers/get-films');
const getAiRecommendation = require('../controllers/get-ai-recommendation');

router.use('/get-films', getFilms);
router.use('/get-ai-recommendation', getAiRecommendation);

module.exports = router;