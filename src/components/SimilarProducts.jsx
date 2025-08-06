// src/components/SimilarProducts.jsx
import React from "react";

const SimilarProducts = ({ currentProductId, products = [] }) => {
  const similar = products.filter((p) => p.id !== currentProductId);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">You May Also Like</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {similar.map((p) => (
          <div key={p.id} className="border p-4 rounded-md">
            <img src={p.image} alt={p.name} className="rounded mb-2" />
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-primary font-bold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
