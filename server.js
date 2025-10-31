// server.js (ปรับปรุง)
require('dotenv').config(); 
const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose'); // ยกเลิก comment ถ้าจะใช้ DB
const app = express();
const PORT = process.env.PORT || 9999;

const productRoutes = require("./routes/products");
const registerRoutes = require("./routes/register");
const comparingRoutes = require("./routes/comparing"); 

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes); 
app.use("/api/register", registerRoutes); 
app.use("/api/comparing", comparingRoutes);


// Optional: Home/Health check route
app.get("/", (req, res) => {
    res.send("API is running!");
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});