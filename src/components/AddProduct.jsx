import { useState } from "react";

function AddProduct({ onProductAdd }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    hoverImage: "", // Added hover image field
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    onProductAdd(data);

    // Reset form fields
    setProduct({ name: "", description: "", price: "", image: "", hoverImage: "" });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Add Your Thrifted Product</h2>
      <form onSubmit={handleSubmit} className="bg-white  text-gray-900  p-4 rounded-lg shadow-md w-64">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="hoverImage"
          placeholder="Hover Image URL"
          value={product.hoverImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
