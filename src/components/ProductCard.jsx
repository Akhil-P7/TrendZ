"use client";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="group relative w-72 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Image Hover Effect */}
      <div className="relative h-72 w-full">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            product.hoverImage ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} Hover`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">${product.price}</p>

        {/* Centered Shop Now Button */}
        <div className="flex justify-center mt-3">
          <button className="px-4 py-1 text-sm bg-black text-white hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
