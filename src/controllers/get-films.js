const express = require('express');
const router = express.Router();
const films = require('../data/films.json');

router.get('/', (req, res) => {
  res.send(films);
});

router.get('/:id', (req, res) => {
  
});

module.exports = router;