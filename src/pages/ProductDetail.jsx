import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ReviewSection from "../components/ReviewSection";
import SimilarProducts from "../components/SimilarProducts";
import products from "../data/products";


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="container py-10 space-y-14">
      {/* Back Button */}
      <button
        onClick={() => navigate("/new-arrivals")}
        className="flex items-center text-primary hover:text-black dark:hover:text-white transition duration-300 mb-4 group"
      >
        <IoIosArrowBack className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-lg font-medium">Back to New Arrivals</span>
      </button>

      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[600px] object-contain rounded-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-primary font-bold">
            ₹{product.price}
            <span className="text-gray-500 line-through text-base ml-2">
              ₹{product.originalPrice}
            </span>
            <span className="text-green-600 ml-1">
              ({Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )}
              % OFF)
            </span>
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">{product.description}</p>

          <div className="mt-6 space-y-1">
            {Object.entries(product.specifications).map(([key, value]) => (
              <p key={key} className="capitalize">
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition">
              Add to Cart
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
    {products.reviews && products.reviews.length > 0 && (
      <ReviewSection reviews={products.reviews} />
    )}

      {/* Similar Products */}
    {products.filter((p) => p.id !== products.id).length > 0 && (
      <SimilarProducts currentProductId={products.id} products={products} />
    )}
    </div>
  );
};

export default ProductDetail;
