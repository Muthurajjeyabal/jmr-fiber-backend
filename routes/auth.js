const express = require("express");
const router = express.Router();
const User = require("../models/User"); // ✅ Import from models/User.js

// 🧑 Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🚨 Login attempt:", email, password); // 🔍 Debug log

  try {
    // Trim email and password to avoid spaces
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    if (!user) {
      console.log("❌ Invalid login"); // 🔍 Debug log
      return res.status(401).json({ message: "Invalid login" });
    }

    console.log("✅ Login successful:", user.email); // 🔍 Debug log
    res.json({ user });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
