// models/UserModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // ข้อมูลที่ต้องไม่ซ้ำกัน (สำคัญมากสำหรับ Register)
  email: { type: String, required: true, unique: true }, 
  thaiID: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  
  // เพิ่มฟิลด์ password เพื่อจำลองการ Register จริง (ถ้ามี)
  password: { type: String, required: true }, 

  // ข้อมูลส่วนตัวพื้นฐาน
  id: { type: Number, unique: true }, // ถ้าต้องการให้มี ID ที่กำหนดเอง
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  dateOfBirth: { type: Date },
  age: { type: Number },
  nationality: { type: String, default: "Thai" },
  phone: { type: String },

  // ข้อมูลที่อยู่
  address: { type: String },
  province: { type: String },
  district: { type: String },
  subdistrict: { type: String },
  postalCode: { type: String },

  // Social/Profile
  lineID: { type: String },
  facebook: { type: String },
  profileImage: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },

}, {
  timestamps: true // เพิ่ม createdAt และ updatedAt
});

module.exports = mongoose.model('User', UserSchema);