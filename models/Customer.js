const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  boxNumber: String,
  amount: Number,
  street: String,
  collectorCode: Number,
  collectorName: String
});

module.exports = mongoose.model("Customer", customerSchema);