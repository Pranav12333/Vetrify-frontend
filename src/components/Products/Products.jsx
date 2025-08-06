import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import products from "../../data/products";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-m text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-s text-gray-400">
            Explore our most loved pieces — from ethnic staples to trendy fits. Style meets comfort at Vestrify Soul.
          </p>
        </div>

        {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {products.map((data, index) => (
              <div key={data.id} data-aos="fade-up" data-aos-delay={index * 100} className="space-y-3">
              <Link to={`/product/${data.id}`}  state={{ from: "Home" }}>
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-[250px] w-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
              </Link>
                <div>
                  <h3 className="font-semibold">{data.name}</h3>
                  <p className="text-sm text-gray-600">{data.specifications?.color}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating || "4.5"}</span>
                  </div>
                  <Link to={`/product/${data.id}`}>
                    <button className="bg-primary text-white px-4 py-1 rounded-full text-sm hover:bg-primary/90 transition">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        {/* View All Button */}
        <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
