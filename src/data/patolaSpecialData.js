// src/data/patolaSpecialData.js

const patolaSpecials = [
  {
    id: 301,
    name: "Royal Patola Saree",
    price: 3499,
    originalPrice: 4499,
    image: "https://picsum.photos/300/400?random=301",
    description: "Handloom Patola saree from Gujarat with rich traditional patterns.",
    specifications: {
      material: "Silk",
      color: "Multicolor",
      sizes: ["Free Size"],
    },
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: "Sneha Patel",
        rating: 5,
        comment: "Truly stunning design and excellent quality.",
      },
    ],
  },
  {
    id: 302,
    name: "Patola Dupatta",
    price: 999,
    originalPrice: 1299,
    image: "https://picsum.photos/300/400?random=302",
    description: "Bright and bold Patola dupatta to pair with any ethnic wear.",
    specifications: {
      material: "Cotton Silk",
      color: "Red",
      sizes: ["Free Size"],
    },
    rating: 4.4,
    reviews: [
      {
        id: 1,
        name: "Heena Shah",
        rating: 4,
        comment: "Loved the pattern and material.",
      },
    ],
  },
];

export default patolaSpecials;
