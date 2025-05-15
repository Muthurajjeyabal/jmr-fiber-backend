const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");
const Bill = require("../models/Bill");

// ➕ Add customer
router.post("/customers", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📄 Get all customers
router.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// 📄 Generate bills
router.post("/bills/generate", async (req, res) => {
  try {
    const { month, amount } = req.body;
    const customers = await Customer.find();

    const bills = customers.map((cust) => ({
      customerId: cust._id,
      month,
      amount,
      status: "unpaid",
    }));

    await Bill.insertMany(bills);
    res.json({ message: "Bills generated!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get all bills
router.get("/bills", async (req, res) => {
  const bills = await Bill.find().populate("customerId");
  res.json(bills);
});

// ✅ Mark bill paid
router.put("/bills/:id/pay", async (req, res) => {
  const bill = await Bill.findByIdAndUpdate(req.params.id, {
    status: "paid",
    paidDate: new Date(),
  }, { new: true });
  res.json(bill);
});

module.exports = router;
