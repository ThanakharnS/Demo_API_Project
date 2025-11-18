// routes/products.js
const express = require('express');
const router = express.Router();


// mock data
const products = [
 {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 45900,
    image: "http://localhost:9999/images/iphone16ProMax.png",
    amount: 100
    ,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 42900,
    image: "http://localhost:9999/images/SamsungGalaxyS24Ultra.png",
    amount: 190,

  },
  {
    id: 3,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 39900,
    image: "http://localhost:9999/images/GooglePixel9Pro.png",
    amount: 180,
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 32900,
    image: "http://localhost:9999/images/Oneplus12.jpg",
    amount: 150,
  },
  {
    id: 5,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 25900,
    image: "http://localhost:9999/images/Xiaomi14Pro.png",
    amount: 170,
  },
  {
    id: 6,
    name: "Huawei P70 Pro",
    brand: "Huawei",
    price: 30900,
    image: "http://localhost:9999/images/HuaweiP70ProV2.webp",
    amount: 160,
  },
  {
    id: 7,
    name: "OPPO Find X7 Pro",
    brand: "OPPO",
    price: 28900,
    image: "http://localhost:9999/images/OPPOFindX7Pro.jpeg",
    amount: 140,
  },
  {
    id: 8,
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 26900,
    image: "http://localhost:9999/images/VivoX100Pro.webp",
    amount: 130,
  },
  {
    id: 9,
    name: "Realme GT 6",
    brand: "Realme",
    price: 18900,
    image: "http://localhost:9999/images/RealmeGT6.webp",
    amount: 120,
  },
  {
    id: 10,
    name: "Asus ROG Phone 8",
    brand: "ASUS",
    price: 37900,
    image: "http://localhost:9999/images/AsusROGPhone8.jpg",
    amount: 110,

  },
  {
    id: 11,
    name: "iPhone 15",
    brand: "Apple",
    price: 37900,
    image: "http://localhost:9999/images/iPhone15.jpeg",
    amount: 100,
  },
  {
    id: 12,
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    price: 14900,
    image: "http://localhost:9999/images/SamsungGalaxyA55.jpg",
    amount: 90,
  },
  {
    id: 13,
    name: "Google Pixel 8a",
    brand: "Google",
    price: 22900,
    image: "http://localhost:9999/images/GooglePixel8a.jpeg",
    amount: 80,
  },
  {
    id: 14,
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 10900,
    image: "http://localhost:9999/images/XiaomiRedmiNote13.jpg",
    amount: 170,
  },
  {
    id: 15,
    name: "POCO F6 Pro",
    brand: "POCO",
    price: 15900,
    image: "http://localhost:9999/images/POCOF6Pro.jpeg",
    amount: 150,
  },
  {
    id: 16,
    name: "Nothing Phone",
    brand: "Nothing",
    price: 25900,
    image: "http://localhost:9999/images/NothingPhone.webp",
    amount: 130,
  },
  {
    id: 17,
    name: "Honor Magic 6",
    brand: "Honor",
    price: 27900,
    image: "http://localhost:9999/images/HonorMagic6.png",
    amount: 120,
  },
  {
    id: 18,
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    price: 34900,
    image: "http://localhost:9999/images/SonyXperia1VI.webp",
    amount: 110,
  },
  {
    id: 19,
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    price: 18900,
    image: "http://localhost:9999/images/MotorolaEdge50Pro.png",
    amount: 100,
  },
  {
    id: 20,
    name: "Infinix Zero Ultra",
    brand: "Infinix",
    price: 12900,
    image: "http://localhost:9999/images/InfinixZeroUltra.jpg",
    amount: 90,
  },
];


router.get("/", (req, res) => {
  const totalCount = products.length; // จำนวนสินค้ารวม
  const responseData = {
      totalCount: totalCount,
      status: "success",
      products: products,
  }

  res.json(responseData)
});






module.exports = router;