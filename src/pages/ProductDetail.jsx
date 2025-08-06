import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ReviewSection from "../components/ReviewSection";
import SimilarProducts from "../components/SimilarProducts";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "Home";

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before buying.");
      return;
    }
    // Continue to checkout or show popup
    alert(`You selected size: ${selectedSize}`);
  };

  return (
    <div className="container py-10 space-y-14">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-primary hover:text-black dark:hover:text-white transition duration-300 mb-4 group"
      >
        <IoIosArrowBack className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-lg font-medium">Back to {fromPage}</span>
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

          {/* Specifications */}
          <div className="mt-6 space-y-1">
            {Object.entries(product.specifications).map(([key, value]) => {
              if (key.toLowerCase() === "sizes" && Array.isArray(value)) {
                return (
                  <div key={key}>
                    <strong className="capitalize block mb-2">{key}:</strong>
                    <div className="flex gap-2 flex-wrap">
                      {value.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-full border transition 
                            ${selectedSize === size
                              ? "bg-primary text-white border-primary"
                              : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <p key={key} className="capitalize">
                  <strong>{key}:</strong> {value}
                </p>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition">
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <ReviewSection reviews={product.reviews} />
      )}

      {/* Similar Products */}
      <SimilarProducts currentProductId={product.id} products={products.filter((p) => p.id !== product.id)} />
    </div>
  );
};

export default ProductDetail;
