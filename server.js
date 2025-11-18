require('dotenv').config();
const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose'); // ยกเลิก comment ถ้าจะใช้ DB
const app = express();
const PORT = process.env.PORT || 9999;

// Import routes
const productRoutes = require("./routes/products");
const registerRoutes = require("./routes/register");
const comparingRoutes = require("./routes/comparing"); 

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (รูปภาพ)
app.use('/images', express.static('public/images'));

// API routes
app.use("/api/products", productRoutes); 
app.use("/api/register", registerRoutes); 
app.use("/api/comparing", comparingRoutes);

// Home / Health check
app.get("/", (req, res) => {
    res.send("API is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
