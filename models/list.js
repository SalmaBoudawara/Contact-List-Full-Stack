const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
  required :true
  },
  email: {
    type: String,
   required :true
  }
});
module.exports = Lists = mongoose.model("list", itemSchema);
