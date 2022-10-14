const mongoose = require("mongoose");
const TestSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  place: { type: String, require: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("TestData", TestSchema);
