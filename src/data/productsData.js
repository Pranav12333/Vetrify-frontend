// src/data/products.js
const products = [
  {
    id: 401,
    name: "Elegant Patola Saree",
    price: 1499,
    originalPrice: 1899,
    image: "src/assets/clothes/mens-collection/men-collection-1A.jpg",
    description:
      "Beautiful Patola Saree with handwoven details. Includes blouse piece. Ideal for weddings and festive wear.",
    specifications: {
      fabric: "Silk Blend",
      length: "6.3m (with blouse)",
      color: "Red",
      style: "Traditional",
    },
    reviews: [
      { name: "Priya11111", rating: 5, comment: "Absolutely loved it!" },
      { name: "Amit222222222", rating: 4, comment: "Nice fabric and delivery was fast." },
    ],
  },
  {
    id: 402,
    name: "Women Western",
    price: 899,
    originalPrice: 1199,
    image: "/src/assets/women/women2.jpg",
    description: "Trendy western outfit with bold color.",
    specifications: {
      fabric: "Georgette",
      sizes: ["M", "L", "XL"],
      color: "Red",
      style: "Western",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 403,
    name: "Women Ethnic",
    price: 1199,
    originalPrice: 1499,
    image: "/src/assets/women/women.png",
    description: "Graceful ethnic wear with timeless elegance.",
    specifications: {
      fabric: "Chiffon",
      color: "White",
      sizes: ["M", "L", "XL"],
      style: "Ethnic",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 404,
    name: "Modern Kurti Set",
    price: 999,
    originalPrice: 1299,
    image: "src/assets/clothes/mens-collection/men-collection-2B.jpg",
    description:
      "Modern kurti with embroidered design and matching bottoms. Comfortable and stylish.",
    specifications: {
      fabric: "Cotton",
      sizes: ["M", "L", "XL"],
      color: "Blue",
      style: "Modern",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 405,
    name: "Printed T-Shirt",
    price: 599,
    originalPrice: 799,
    image: "/src/assets/women/women4.jpg",
    description: "Casual printed t-shirt, perfect for daily wear.",
    specifications: {
      fabric: "Cotton",
      color: "Yellow",
      sizes: ["M", "L", "XL"],
      style: "Casual",
    },
     reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
];

export default products;
