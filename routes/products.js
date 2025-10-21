// routes/products.js
const express = require('express');
const router = express.Router();


// mock data
const products = [
 {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 45900,
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 42900,
    image: "https://images.unsplash.com/photo-1585060544812-6a4b5fdfc9e5",
  },
  {
    id: 3,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 39900,
    image: "https://images.unsplash.com/photo-1605166632971-d9f9b5fa2d7d",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 32900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 5,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 25900,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8e",
  },
  {
    id: 6,
    name: "Huawei P70 Pro",
    brand: "Huawei",
    price: 30900,
    image: "https://images.unsplash.com/photo-1610465299996-9a93b3c9f9f3",
  },
  {
    id: 7,
    name: "OPPO Find X7 Pro",
    brand: "OPPO",
    price: 28900,
    image: "https://images.unsplash.com/photo-1603901167333-cf12b20c6483",
  },
  {
    id: 8,
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 26900,
    image: "https://images.unsplash.com/photo-1580910051070-3c1b9b6b94e7",
  },
  {
    id: 9,
    name: "Realme GT 6",
    brand: "Realme",
    price: 18900,
    image: "https://images.unsplash.com/photo-1598327105742-f1dc31a02d4e",
  },
  {
    id: 10,
    name: "Asus ROG Phone 8",
    brand: "ASUS",
    price: 37900,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    id: 11,
    name: "iPhone 15",
    brand: "Apple",
    price: 37900,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4c1f12e",
  },
  {
    id: 12,
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    price: 14900,
    image: "https://images.unsplash.com/photo-1606813902912-3f12b0c1c648",
  },
  {
    id: 13,
    name: "Google Pixel 8a",
    brand: "Google",
    price: 22900,
    image: "https://images.unsplash.com/photo-1611042553482-d0b1e3a0d3a3",
  },
  {
    id: 14,
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 10900,
    image: "https://images.unsplash.com/photo-1592202144984-9d63e36b8b89",
  },
  {
    id: 15,
    name: "POCO F6 Pro",
    brand: "POCO",
    price: 15900,
    image: "https://images.unsplash.com/photo-1593672715438-d88a70629abe",
  },
  {
    id: 16,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 25900,
    image: "https://images.unsplash.com/photo-1691363840747-1f4c8a0c0205",
  },
  {
    id: 17,
    name: "Honor Magic 6",
    brand: "Honor",
    price: 27900,
    image: "https://images.unsplash.com/photo-1580910051028-4ec2e9b9c93e",
  },
  {
    id: 18,
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    price: 34900,
    image: "https://images.unsplash.com/photo-1606813902909-8f3e4d70f22f",
  },
  {
    id: 19,
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    price: 18900,
    image: "https://images.unsplash.com/photo-1621768216002-5d4c56f0d69c",
  },
  {
    id: 20,
    name: "Infinix Zero Ultra",
    brand: "Infinix",
    price: 12900,
    image: "https://images.unsplash.com/photo-1592202144984-9d63e36b8b89",
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