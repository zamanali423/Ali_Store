const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model("Product", productSchema);
