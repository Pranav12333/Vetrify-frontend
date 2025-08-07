// src/data/newArrivals.js

const newArrivals = [
  {
    id: 101,
    name: "Elegant Patola Saree",
    price: 1499,
    originalPrice: 1999,
    image: "https://picsum.photos/300/400?random=101",
    description: "A rich red patola saree with traditional motifs and soft silk blend.",
    specifications: {
      material: "Silk Blend",
      color: "Red",
      sizes: ["Free Size"],
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        name: "Pooja Shah",
        rating: 5,
        comment: "Absolutely love the fabric and color!",
      },
      {
        id: 2,
        name: "Meena Joshi",
        rating: 4,
        comment: "Great quality for the price.",
      },
    ],
  },
  {
    id: 102,
    name: "Modern Kurti Set",
    price: 999,
    originalPrice: 1299,
    image: "https://picsum.photos/300/400?random=102",
    description: "Stylish kurti with trendy embroidery perfect for all occasions.",
    specifications: {
      material: "Cotton",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
    },
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Rina Patel",
        rating: 4,
        comment: "Very comfortable and looks stylish.",
      },
    ],
  },
];

export default newArrivals;
