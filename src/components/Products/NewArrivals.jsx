// src/components/Products/NewArrivals.jsx
import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const newArrivalProducts = [
    {
      id: 1,
      name: "new arrived Elegant Patola Saree",
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
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-rose-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-rose-700 dark:text-rose-300 tracking-wide">
          ✨ New Arrivals ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {newArrivalProducts.map((product) => (
            <div
              key={product.id}
              className="group relative border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-md hover:shadow-2xl transition-all bg-white dark:bg-gray-800 hover:scale-105 duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg group-hover:brightness-90 transition-all"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-rose-600 font-bold text-lg">₹{product.price}</p>
              </div>

              <Link
                to={`/product/${product.id}`}
                state={{ from: "New Arrivals" }}
                className="mt-6 inline-block w-full text-center bg-rose-600 text-white font-medium py-2.5 px-4 rounded-full hover:bg-rose-700 transition-colors duration-300"
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
