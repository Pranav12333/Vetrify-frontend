const mensCollection = [
  {
    id: 101,
    name: "Classic Kurta Pajama",
    price: 1499,
    originalPrice: 1899,
    images: [
      "src/assets/clothes/mens-collection/men-collection-1A.jpg",
      "src/assets/clothes/mens-collection/men-collection-1B.jpg",
      "src/assets/clothes/mens-collection/men-collection-1C.jpg",
    ],
    description: "Traditional white kurta pajama set in premium cotton.",
    specifications: {
      material: "Cotton",
      color: "White",
      sizes: ["M", "L", "XL"],
    },
    rating: 4.6,
    reviews: [
      {
        id: 1,
        name: "Ravi Kumar",
        rating: 5,
        comment: "Looks classy and feels very comfortable.",
      },
      {
        id: 2,
        name: "Amit Roy",
        rating: 4,
        comment: "Great quality and fits well.",
      },
      {
        id: 3,
        name: "Sanjay Patel",
        rating: 5,
        comment: "Excellent product, highly recommend it.",
      },
    ],
  },
  {
    id: 102,
    name: "Formal Shirt",
    price: 1299,
    originalPrice: 1699,
    images: [
      "src/assets/clothes/mens-collection/men-collection-2A.jpg",
      "src/assets/clothes/mens-collection/men-collection-2B.jpg",
      "src/assets/clothes/mens-collection/men-collection-2C.jpg",
    ],
    description: "Slim fit formal shirt in solid color.",
    specifications: {
      material: "Polyester",
      color: "Blue",
      sizes: ["S", "M", "L"],
    },
    rating: 4.5,
    reviews: [
      {
        id: 4,
        name: "Rajesh Sharma",
        rating: 5,
        comment: "Perfect fit and looks great.",
      },
      {
        id: 5,
        name: "Vikas Verma",
        rating: 4,
        comment: "Good quality and comfortable to wear.",
      },
      {
        id: 6,
        name: "Deepak Singh",
        rating: 5,
        comment: "Very satisfied with the purchase.",
      },
    ],
  },
  {
    id: 103,
    name: "Casual T-Shirt",
    price: 999,
    originalPrice: 1299,
    images: [
      "src/assets/clothes/mens-collection/men-collection-3A.jpg",
      "src/assets/clothes/mens-collection/men-collection-3B.jpg",
      "src/assets/clothes/mens-collection/men-collection-3C.jpg",
      "src/assets/clothes/mens-collection/men-collection-3D.jpg",
    ],
    description: "Comfortable casual t-shirt in soft cotton.",
    specifications: {
      material: "Cotton",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
    },
    rating: 4.7,
    reviews: [
      {
        id: 7,
        name: "Rahul Gupta",
        rating: 5,
        comment: "Very comfortable and stylish.",
      },
      {
        id: 8,
        name: "Anil Kumar",
        rating: 4,
        comment: "Good quality and fits well.",
      },
      {
        id: 9,
        name: "Sunil Reddy",
        rating: 5,
        comment: "Excellent product, highly recommend it.",
      },
    ],
  },
  {
    id: 104,
    name: "Jeans",
    price: 1599,
    originalPrice: 1999,
    images: [
      "src/assets/clothes/mens-collection/men-collection-3A.jpg",
      "src/assets/clothes/mens-collection/men-collection-3B.jpg",
      "src/assets/clothes/mens-collection/men-collection-3C.jpg",
    ],
    description: "Slim fit jeans in dark wash.",
    specifications: {
      material: "Denim",
      color: "Blue",
      sizes: ["28", "30", "32", "34"],
    },
    rating: 4.4,
    reviews: [
      {
        id: 10,
        name: "Rajeev Rastogi",
        rating: 5,
        comment: "Perfect fit and looks great.",
      },
      {
        id: 11,
        name: "Vivek Jha",
        rating: 4,
        comment: "Good quality and comfortable to wear.",
      },
      {
        id: 12,
        name: "Manish Kumar",
        rating: 5,
        comment: "Very satisfied with the purchase.",
      },
    ],
  },
  {
    id: 105,
    name: "Winter Jacket",
    price: 2499,
    originalPrice: 2999,
    images: [
      "src/assets/clothes/mens-collection/men-collection-2A.jpg",
      "src/assets/clothes/mens-collection/men-collection-2B.jpg",
      "src/assets/clothes/mens-collection/men-collection-2C.jpg",
    ],
    description: "Warm winter jacket with hood.",
    specifications: {
      material: "Fleece",
      color: "Navy Blue",
      sizes: ["S", "M", "L", "XL"],
    },
    rating: 4.8,
    reviews: [
      {
        id: 13,
        name: "Rakesh Patel",
        rating: 5,
        comment: "Very comfortable and warm.",
      },
      {
        id: 14,
        name: "Rajesh Kumar",
        rating: 4,
        comment: "Good quality and fits well.",
      },
      {
        id: 15,
        name: "Suresh Reddy",
        rating: 5,
        comment: "Excellent product, highly recommend it.",
      },
    ],
  },
  {
    id: 106,
    name: "Sports Shoes",
    price: 1999,
    originalPrice: 2499,
    images: [
      "src/assets/clothes/mens-collection/men-collection-1A.jpg",
      "src/assets/clothes/mens-collection/men-collection-1B.jpg",
      "src/assets/clothes/mens-collection/men-collection-1C.jpg",
    ],
    description: "Comfortable sports shoes for running and training.",
    specifications: {
      material: "Mesh",
      color: "Red",
      sizes: ["7", "8", "9", "10"],
    },
    rating: 4.6,
    reviews: [
      {
        id: 16,
        name: "Rajesh Kumar",
        rating: 5,
        comment: "Very comfortable and stylish.",
      },
      {
        id: 17,
        name: "Amit Roy",
        rating: 4,
        comment: "Good quality and fits well.",
      },
      {
        id: 18,
        name: "Sanjay Patel",
        rating: 5,
        comment: "Excellent product, highly recommend it.",
      },
    ],
  },

];

// Example usage:
export default mensCollection;
