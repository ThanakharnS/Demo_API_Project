// server.js (ปรับปรุง)
require('dotenv').config(); 
const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose'); // ยกเลิก comment ถ้าจะใช้ DB
const app = express();
const PORT = process.env.PORT || 9999;


// Import routes
const productRoutes = require("./routes/products");
const registerRoutes = require("./routes/register"); // นำเข้า Register Router

// Middleware
app.use(cors());
app.use(express.json()); // สำคัญ: ต้องอยู่ด้านบนเพื่อให้อ่าน Body ได้

// ใช้งานเส้นทาง (Router Mapping)
// 1. เส้นทางสำหรับ Products: GET /api/products/
app.use("/api/products", productRoutes); 

// 2. เส้นทางสำหรับ Register: POST /api/register/
// ชื่อพาธนี้ควรสอดคล้องกับไฟล์ Register เพื่อความชัดเจน
app.use("/api/register", registerRoutes); 


// Optional: Home/Health check route
app.get("/", (req, res) => {
    res.send("API is running!");
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});