import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "p5",
    name: "Baseus 100W GaN Fast Charger",
    description: "3 USB-C ports + 1 USB-A, PD fast charging for laptops, tablets, and phones. Foldable plug design. Compatible with iPhone, Samsung, Xiaomi, and more.",
    price: 44.99,
    originalPrice: 58.38,
    image: "https://ae-s1.alicdn.com/kf/Sd34b678f3e88403e8a2e81e6d4fc79fbX.jpg",
    category: "Chargers",
    rating: 4.7,
    reviews: 52000,
    trending: true,
    stock: 100,
    specs: {
      "Technology": "GaN (Gallium Nitride)",
      "Ports": "3x USB-C, 1x USB-A",
      "Total Output": "100W Max",
      "Plug": "Foldable",
      "Compatibility": "iPhone, Samsung, Xiaomi, Laptops, Tablets"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256808521803104.html"
  },
  {
    id: "p6",
    name: "Xiaomi Smart Band 9 Active",
    description: "1.47\" AMOLED display, 5ATM waterproof, 18-day battery life. Health monitoring for heart rate, sleep, and activity. Global version with multi-language support.",
    price: 74.99,
    originalPrice: 79.64,
    image: "https://ae-s1.alicdn.com/kf/S9c8a07c3db4240b18a89ea3e9a9e0cfcO.jpg",
    category: "Wearables",
    rating: 4.6,
    reviews: 1690,
    trending: true,
    stock: 50,
    specs: {
      "Display": "1.47\" AMOLED",
      "Battery": "18 days",
      "Waterproof": "5ATM",
      "Features": "Heart rate, Sleep tracking, Activity tracking",
      "Version": "Global"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256805551655155.html"
  },
  {
    id: "p7",
    name: "Apple Watch Ultra 2 Case Cover",
    description: "Hard PC full protection case for Apple Watch Ultra 2. Precise cutouts for buttons and sensors. Shock-absorbent and scratch-resistant.",
    price: 22.99,
    originalPrice: 46.80,
    image: "https://ae-s1.alicdn.com/kf/S6a2e07a7e0e74f0b9a1e72b3d6e72b7X.jpg",
    category: "Cases",
    rating: 4.5,
    reviews: 5569,
    trending: true,
    stock: 75,
    specs: {
      "Compatibility": "Apple Watch Ultra 2",
      "Material": "Hard PC",
      "Protection": "Full coverage, Shock-absorbent",
      "Features": "Precise cutouts, Scratch-resistant"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256805844995369.html"
  },
  {
    id: "p8",
    name: "Universal Phone Ring Holder Stand",
    description: "Metal手机支架扣环，可折叠粘贴式支架。适用于所有智能手机。强力粘附，可重复使用。",
    price: 6.99,
    originalPrice: 24.85,
    image: "https://ae-s1.alicdn.com/kf/S7d6b5d6c82a4a2b8a2e2e2e2e2e2e2X.jpg",
    category: "Gadgets",
    rating: 4.3,
    reviews: 6135,
    trending: true,
    stock: 200,
    specs: {
      "Material": "Metal",
      "Type": "Foldable ring holder",
      "Compatibility": "All smartphones",
      "Features": "Strong adhesive, Reusable"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256807977547741.html"
  },
  {
    id: "p9",
    name: "Magnetic Wireless Charging Cable",
    description: "Magnetic charging cable with LED indicator. 360° rotation for easy use. Fast charging compatible with iPhone and Android.",
    price: 12.99,
    originalPrice: 74.65,
    image: "https://ae-s1.alicdn.com/kf/S9a5b6c7d8e9f0a1b2c3d4e5f6g7h8i9J.jpg",
    category: "Cables",
    rating: 4.4,
    reviews: 106141,
    trending: true,
    stock: 500,
    specs: {
      "Type": "Magnetic charging cable",
      "Features": "LED indicator, 360° rotation",
      "Charging": "Fast charge compatible",
      "Compatibility": "iPhone & Android"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256805726279896.html"
  },
  {
    id: "p10",
    name: "USB-C to Lightning braided Cable",
    description: "Nylon braided fast charging cable. Durable connectors with strain relief. Supports fast charging for iPhone and iPad.",
    price: 8.98,
    originalPrice: 60.65,
    image: "https://ae-s1.alicdn.com/kf/S1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6P.jpg",
    category: "Cables",
    rating: 4.6,
    reviews: 32036,
    trending: true,
    stock: 300,
    specs: {
      "Type": "USB-C to Lightning",
      "Material": "Nylon braided",
      "Features": "Strain relief, Fast charge",
      "Compatibility": "iPhone, iPad"
    },
    aliExpressUrl: "https://www.aliexpress.us/item/3256809917672587.html"
  },
  {
    id: "p1",
    name: "Ultra-Fast 65W GaN Charger",
    description: "Compact and powerful charging for your laptop, tablet, and phone simultaneously.",
    price: 49.99,
    image: "/products/charger-gan.jpg",
    category: "Chargers",
    rating: 4.8,
    reviews: 1250,
    trending: true,
    stock: 50,
    specs: {
      "Technology": "GaN (Gallium Nitride)",
      "Ports": "2x USB-C, 1x USB-A",
      "Total Output": "65W Max",
      "Compatibility": "Universal"
    }
  },
  {
    id: "p2",
    name: "Rugged Armor Phone Case",
    description: "Military-grade protection with a slim profile and enhanced grip.",
    price: 24.99,
    image: "/products/case-rugged.jpg",
    category: "Cases",
    rating: 4.9,
    reviews: 850,
    trending: true,
    stock: 120,
    specs: {
      "Drop Protection": "10ft",
      "Material": "TPU & Polycarbonate",
      "Wireless Charging": "Compatible"
    }
  },
  {
    id: "p3",
    name: "Braided Nylon USB-C to Lightning Cable",
    description: "MFi certified durable cable that won't tangle or fray.",
    price: 19.99,
    image: "/products/cable-braided.jpg",
    category: "Cables",
    rating: 4.7,
    reviews: 3400,
    stock: 500,
    specs: {
      "Length": "6ft / 2m",
      "Certification": "MFi Certified",
      "Data Speed": "480Mbps"
    }
  },
  {
    id: "p4",
    name: "Magnetic Car Mount Gadget",
    description: "Strongest magnets in the market for a secure hold on any terrain.",
    price: 15.99,
    image: "/products/mount-magnetic.jpg",
    category: "Gadgets",
    rating: 4.5,
    reviews: 620,
    stock: 85
  }
];
