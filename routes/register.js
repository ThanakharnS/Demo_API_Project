// routes/register.js
const express = require('express');
const router = express.Router(); // <--- คลาสกลาง (Router)

// @route   POST /api/register/
// @desc    รับข้อมูลผู้ใช้ใหม่ (Register)
// @access  Public
router.post("/", (req, res) => {
// ดึงข้อมูลทั้งหมดจาก request body
  const { 
     firstName,
     lastName,
     gender,
     dateOfBirth,
     age,
     thaiID,
     nationality,
     phone,
     email,
     address,
     province,
     district,
     subdistrict,
     postalCode,
     lineID,
     facebook,
     username,
     profileImage,
     role
  } = req.body; 

// --- 1. ตรวจสอบค่าว่าง (Validation) ---
// กำหนดฟิลด์ที่ห้ามว่าง
  if (!firstName || !lastName || !phone || !thaiID || !email || !username) {
    return res.status(400).json({ 
        success: false,
        errorcode: 400,
        error: 'Validation failed: กรุณากรอกข้อมูลให้ครบถ้วน (ชื่อ, นามสกุล, เบอร์โทร, ThaiID, อีเมล, Username)' 
    });
  } 

  // ในส่วนนี้จะเป็น Logic การบันทึกลง Database จริงๆ
  // เช่น: const savedUser = await User.create(req.body);
  // --- 2. ส่ง Response ตอบกลับ (จำลองว่าบันทึกสำเร็จ) ---
  const newUser = {
    id: "TAE" + Date.now(), 
     firstName,
     lastName,
     thaiID,
     email,
     username // ... ข้อมูลอื่นๆ
  };
  
  res.status(201).json({
    success: true,
    statusCode: 201, // ใช้ 201 Created สำหรับการสร้างทรัพยากรใหม่
    message: 'บันทึกข้อมูลผู้ใช้เรียบร้อย',
    // user: newUser, // จะส่งกลับข้อมูล user ที่สร้างใหม่หรือไม่ก็ได้
  });
});

module.exports = router;