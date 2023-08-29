const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: false },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorites' }],
  status: { type: String, required: true },
  isExpert: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', userSchema);