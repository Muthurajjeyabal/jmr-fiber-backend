const mongoose = require("mongoose");

const monthlyBillSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  month: String,
  amount: Number,
  status: { type: String, default: "Unpaid" },
  notes: String
});

module.exports = mongoose.model("MonthlyBill", monthlyBillSchema);