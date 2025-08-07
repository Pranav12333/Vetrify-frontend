// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ReviewSection from "../components/ReviewSection";
import SimilarProducts from "../components/SimilarProducts";
import Modal from "react-modal";

// Import all product data
import products from "../data/productsData";
import newArrivals from "../data/newArrivalsData";
import mensCollection from "../data/mensCollectionData";
import patolaSpecial from "../data/patolaSpecialData";
import womenProducts from "../data/womenCollectionData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "Home";

  // Combine all product sources
  const allProducts = [
    ...products, ...newArrivals, ...mensCollection, ...patolaSpecial, ...womenProducts,
  ];

  const product = allProducts.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return <div className="p-10 text-center text-red-600 text-xl">Product not found</div>;

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before buying.");
      return;
    }
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
        {/* Image Gallery */}
        <div>
          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-70"
            ariaHideApp={false}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl z-50 hover:text-red-400 transition"
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
              onClick={() => setIsModalOpen(false)}
            />
          </Modal>

          <div className="overflow-hidden rounded-md border mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-zoom-in"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="flex gap-3">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border 
                  ${selectedImage === img ? "border-blue-500" : "border-transparent"}
                `}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
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
            {Object.entries(product.specifications || {}).map(([key, value]) => {
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
      <SimilarProducts
        currentProductId={product.id}
        products={allProducts.filter((p) => p.id !== product.id)}
      />
    </div>
  );
};

export default ProductDetail;
