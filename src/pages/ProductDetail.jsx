// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

const dummyProducts = [
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
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-primary font-bold">
            ₹{product.price}{" "}
            <span className="text-gray-500 line-through text-base ml-2">
              ₹{product.originalPrice}
            </span>{" "}
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
    </div>
  );
};

export default ProductDetail;
