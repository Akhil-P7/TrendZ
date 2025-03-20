"use client";

import { useState, useEffect } from "react";
import AddProduct from "./AddProduct"; 
import ProductCard from "./ProductCard"; 
import { FaFilter } from "react-icons/fa"; 

function Hero() {
  const [products, setProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [showDropdown, setShowDropdown] = useState(false); 

  useEffect(() => {
    setProducts([
      { 
        id: 1, 
        name: "High Rise Bootcut Jeans", 
        category: "Jeans", 
        image: "https://splendid.com/cdn/shop/files/FA22_ECOM_RF2C040SE_DIN_4_e0836799-6fbc-4f9a-83f8-3d37f649fd2b_900x900.progressive.jpg?v=1687361609", 
        hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0-cQR2BbTX1OU5RrpxYdyPhvReW_nPcGaQ&s",
        price: 34.05, 
        description: "Aesthetic high waist jeans." 
      },
      { 
        id: 2, 
        name: "Winter Puffer Jacket", 
        category: "Winter Clothes", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fy2pLfJsV8fJq__5OlB4eG_Bmzauw5dlxQ&s", 
        hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7qNxQZJt5wzD5qyjwwVXuAlbjecH4WtL5Q&s",
        price: 50.99, 
        description: "Warm winter puffer stylish jacket." 
      },
      { 
        id: 3, 
        name: "Shoulder bag", 
        category: "Bags", 
        hoverImage: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwbc02b7a6/images/hi-res/2024-L2-CK2-80151362-A-J8-2.jpg?sw=756&sh=1008", 
        image: "https://rukminim1.flixcart.com/image/300/300/xif0q/hand-messenger-bag/n/n/y/-original-imahfpsmgffednzz.jpeg",
        price: 23.78, 
        description: "Cute Aesthetic summer vibe bag for carrying everyday essentials." 
      },
      { 
        id: 4, 
        name: "Nike Shoes", 
        category: "Shoes", 
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/11/26/6382bd20b0f19322c8e0b70d/m_wp_6382c4168634cbdba4b46372.webp", 
        hoverImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
        price: 45.88, 
        description: "Branded comfy shoes for daily usage." 
      },
      { 
        id: 5, 
        name: "Summer Dress", 
        category: "Summer", 
        image: "https://m.media-amazon.com/images/I/7103YD5h4ML._AC_UY350_.jpg", 
        hoverImage: "https://m.media-amazon.com/images/I/716kN1OWLsL._AC_UY1100_.jpg",
        price: 18.45, 
        description: "Summery cool and light weight fabric dress for every beach outing." 
      },
      { 
        id: 6, 
        name: "Black Jeans", 
        category: "Jeans", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NT8Xn9CEj0DAzkXYRMFcij_avIJ9JBXAXGET9M0uD7aGFTn_Y26Fx0E-muB6_QwOG4Y&usqp=CAU", 
        hoverImage: "https://static-01.daraz.pk/p/1b8405e3853bc64d138c0cc78244770d.jpg",
        price: 30.00, 
        description: "Black high waist plazzo style jeans." 
      },
      { 
        id: 7, 
        name: "Leather Jacket", 
        category: "Winter clothes", 
        image: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87010586_99.jpg?imwidth=2048&imdensity=1&ts=1730135095197", 
        hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HEV-5BP6B119SuwDUcqDrOg-Z91UsmSlm5R6WggC1O3RGT_WzdVahUY0GxX1XhbJJKA&usqp=CAU",
        price: 68.02, 
        description: "Black leather jacket for that roadstyle rider look." 
      },
      { 
        id: 8, 
        name: "Summer top", 
        category: "Summer", 
        image: "https://malkauns.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-14-at-14.42.10.jpeg", 
        hoverImage: "https://i.ebayimg.com/thumbs/images/g/6KAAAOSw5htnipKE/s-l1200.jpg",
        price: 15.22, 
        description: "Cute sleeveles summer top with breahable fabric. " 
      },
      { 
        id: 9, 
        name: "Bag Pack", 
        category: "Bags", 
        image: "https://image.made-in-china.com/202f0j00CDrkahOdrcoq/Classical-Leisure-Students-School-Bag-Office-Laptop-Bagpack-Light-Weight-Tactital-Backpack.webp", 
        hoverImage: "https://m.media-amazon.com/images/I/61wI5F8onOL._AC_UY1100_.jpg//",
        price: 15.22, 
        description: "Cute sleeveles summer top with breahable fabric. " 
      },
    ]);
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="w-full min-h-screen bg-gray-100 px-10 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaFilter /> Filter Products
          </button>

          {showDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-10 animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowDropdown(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-8">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <AddProduct onProductAdd={(newProduct) => setProducts([...products, newProduct])} />
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => <ProductCard key={index} product={product} />)
          ) : (
            <p className="text-gray-500">No products found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
