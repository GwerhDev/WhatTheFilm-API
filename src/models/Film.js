const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  year: { type: Number, required: true },
  crew: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  fullTitle: { type: String, required: true },
  imdbId: { type: String, required: true },
  imDbRating: { type: Number, required: true },
  imDbRatingCount: { type: Number, required: true },
  actor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  director: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
});

module.exports = mongoose.model('Film', filmSchema);