const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const billingRoutes = require("./routes/billing");
const authRoutes = require("./routes/auth"); // include auth routes

const app = express();
app.use(bodyParser.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://muthurajjeyabal:5lOvQrr80DaFPTxk@jmrfiber.su338jp.mongodb.net/jmr_fiber?retryWrites=true&w=majority&appName=jmrfiber", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api", billingRoutes);
app.use("/api/auth", authRoutes); // enable login route

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
