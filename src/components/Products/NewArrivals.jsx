// src/components/Products/NewArrivals.jsx
import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Patola Saree",
      price: 1499,
      image: "https://picsum.photos/300/400?random=1",
      description: "A rich red patola saree with traditional motifs and soft silk blend.",
    },
    {
      id: 2,
      name: "Modern Kurti Set",
      price: 999,
      image: "https://picsum.photos/300/400?random=2",
      description: "Stylish kurti with trendy embroidery perfect for all occasions.",
    },
    // Add more products...
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-all bg-white dark:bg-gray-800"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2 text-gray-800 dark:text-white">
                {product.name}
              </h3>
              <p className="text-primary font-bold text-lg">₹{product.price}</p>

              <Link
                to={`/product/${product.id}`}
                state={{ from: "New Arrivals" }}
                className="mt-4 inline-block w-full text-center bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/90 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
