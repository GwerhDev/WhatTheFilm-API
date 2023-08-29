const mongoose = require("mongoose");
const { mongodbUri } = require("../config");

module.exports = class DB {
  static connect() {
    mongoose.Promise = global.Promise;
    return mongoose.connect(
      mongodbUri,
      { useNewUrlParser: true }
    )
  }
};