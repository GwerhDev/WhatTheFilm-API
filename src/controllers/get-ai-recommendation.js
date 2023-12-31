const express = require('express');
const router = express.Router();
const films = require('../data/films.json');
const { aiRecommendation } = require('../integrations/cohere');

router.post('/', async(req, res) => {
  const { query, cohereApiKey } = req.body;
  const response = await aiRecommendation(query, cohereApiKey);
  res.send(response);
});

module.exports = router;