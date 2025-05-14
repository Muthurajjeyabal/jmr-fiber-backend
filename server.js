
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://muthurajjeyabal:5lOvQrr80DaFPTxk@jmrfiber.su338jp.mongodb.net/?retryWrites=true&w=majority&appName=jmrfiber", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Dummy route
app.get("/", (req, res) => {
  res.send("JMR Fiber Billing Backend Live 🌐");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
