import React from "react";

const SimilarProducts = ({ currentProductId, products = [] }) => {
  const similar = products.filter((p) => p.id !== currentProductId).slice(0, 6);

  return (
    <div className="mt-10 px-4">
      <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {similar.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4 cursor-pointer hover:scale-[1.02] transform">
            <div className="w-full h-48 overflow-hidden rounded-md mb-3">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800 mb-1 truncate">{p.name}</h4>
            <p className="text-primary font-bold text-orange-600">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
