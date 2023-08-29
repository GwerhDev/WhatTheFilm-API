const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  film: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
});

module.exports = mongoose.model('Director', directorSchema);