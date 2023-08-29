const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  film: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
});

module.exports = mongoose.model('Actor', actorSchema);