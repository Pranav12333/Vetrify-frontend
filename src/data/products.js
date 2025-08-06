// src/data/products.js
const products = [
  {
    id: 1,
    name: "Elegant Patola Saree",
    price: 1499,
    originalPrice: 1899,
    image: "https://picsum.photos/500/600?random=1",
    description:
      "Beautiful Patola Saree with handwoven details. Includes blouse piece. Ideal for weddings and festive wear.",
    specifications: {
      fabric: "Silk Blend",
      length: "6.3m (with blouse)",
      color: "Red",
      style: "Traditional",
    },
    reviews: [
      { name: "Priya", rating: 5, comment: "Absolutely loved it!" },
      { name: "Amit", rating: 4, comment: "Nice fabric and delivery was fast." },
    ],
  },
  {
    id: 2,
    name: "Modern Kurti Set",
    price: 999,
    originalPrice: 1299,
    image: "https://picsum.photos/500/600?random=2",
    description:
      "Modern kurti with embroidered design and matching bottoms. Comfortable and stylish.",
    specifications: {
      fabric: "Cotton",
      size: "M, L, XL",
      color: "Blue",
      style: "Modern",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 3,
    name: "Women Ethnic",
    price: 1199,
    originalPrice: 1499,
    image: "/src/assets/women/women.png",
    description: "Graceful ethnic wear with timeless elegance.",
    specifications: {
      fabric: "Chiffon",
      color: "White",
      style: "Ethnic",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 4,
    name: "Women Western",
    price: 899,
    originalPrice: 1199,
    image: "/src/assets/women/women2.jpg",
    description: "Trendy western outfit with bold color.",
    specifications: {
      fabric: "Georgette",
      color: "Red",
      style: "Western",
    },
    reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
  {
    id: 5,
    name: "Printed T-Shirt",
    price: 599,
    originalPrice: 799,
    image: "/src/assets/women/women4.jpg",
    description: "Casual printed t-shirt, perfect for daily wear.",
    specifications: {
      fabric: "Cotton",
      color: "Yellow",
      style: "Casual",
    },
     reviews: [
      { name: "Neha", rating: 4, comment: "Very comfortable and stylish!" },
    ],
  },
];

export default products;
