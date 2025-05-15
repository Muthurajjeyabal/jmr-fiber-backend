const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  assignedStreets: [String],
});

const User = mongoose.model("User", UserSchema);

// 🧑 Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return res.status(401).json({ message: "Invalid login" });
  res.json({ user });
});

module.exports = router;
