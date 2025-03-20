import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";

export default function Thrift() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    hoverImage: "",
  });

  useEffect(() => {
    setProducts([
      { id: 1, name: "High Rise Bootcut Jeans", category: "Jeans", image: "https://splendid.com/cdn/shop/files/FA22_ECOM_RF2C040SE_DIN_4_e0836799-6fbc-4f9a-83f8-3d37f649fd2b_900x900.progressive.jpg?v=1687361609", hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0-cQR2BbTX1OU5RrpxYdyPhvReW_nPcGaQ&s", price: 34.05, description: "Aesthetic high waist jeans." },
      { id: 2, name: "Winter Puffer Jacket", category: "Winter Clothes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fy2pLfJsV8fJq__5OlB4eG_Bmzauw5dlxQ&s", hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7qNxQZJt5wzD5qyjwwVXuAlbjecH4WtL5Q&s", price: 50.99, description: "Warm winter puffer stylish jacket." },
    ]);
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...product, id: products.length + 1 }]);
    setProduct({ name: "", description: "", price: "", image: "", hoverImage: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 px-10 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 text-center w-full mt-2">Start Thrifting!</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition" onClick={() => setShowDropdown(!showDropdown)}>
          <FaFilter /> Filter Products
        </button>
        {showDropdown && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
            {categories.map((category) => (
              <button key={category} className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white" onClick={() => { setSelectedCategory(category); setShowDropdown(false); }}>
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-8">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add Your Thrifted Product</h2>
          <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-md">
            <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="w-full p-2 border rounded mb-2 text-gray-900" required />
            <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded mb-2 text-gray-900" required />
            <input type="number" name="price" placeholder="Price ($)" value={product.price} onChange={handleChange} className="w-full p-2 border rounded mb-2 text-gray-900" required />
            <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} className="w-full p-2 border rounded mb-2 text-gray-900" required />
            <input type="text" name="hoverImage" placeholder="Hover Image URL" value={product.hoverImage} onChange={handleChange} className="w-full p-2 border rounded mb-2 text-gray-900" />
            <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">Add Product</button>
          </form>
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
            <div key={index} className="group relative w-72 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-72 w-full">
                <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" />
                {product.hoverImage && <img src={product.hoverImage} alt="Hover" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">${product.price}</p>
              </div>
            </div>
          )) : <p className="text-gray-500">No products found in this category.</p>}
        </div>
      </div>
    </div>
  );
}
