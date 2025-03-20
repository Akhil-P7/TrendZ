import { useState } from "react";
import Head from "next/head";

export default function Wardrobe() {
  const [selectedCloth, setSelectedCloth] = useState(null);
  const [newItemName, setNewItemName] = useState("");  
  const [newItemImage, setNewItemImage] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: "Red Jacket", image: "/images/red_jacket.jpg" },
    { id: 2, name: "Blue Jeans", image: "/images/blue_jeans.jpg" },
    { id: 3, name: "White Shirt", image: "/images/white_shirt.jpg" },
  ]);
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setNewItemImage(imageUrl); 
    }    
  };
  const handleAddItem = () => {
    if (!newItemName || !newItemImage) {
      alert("Please provide both an item name and image.");
      return;
    }
  
    const newItem = {
      id: items.length + 1,  // Assign a unique ID
      name: newItemName,
      image: newItemImage,  // Use the uploaded image preview
    };
  
    setItems([...items, newItem]); // Update wardrobe
    setNewItemName("");  // Reset input field
    setNewItemImage(null);  // Reset image preview
  };
  
  return (
    <>
      <Head>
        <title>Wardrobe | Trend-Z</title>
        <meta name="description" content="Manage your virtual wardrobe." />
      </Head>

      {/* Main Container */}
      <div className={`min-h-screen flex flex-col items-center bg-gradient-to-b from-[#C42B4A] to-[#1A243C] text-white p-6 transition-all relative`}>
        
        {/* Blur Effect on Pop-Up Open */}
        <div className={`absolute inset-0 bg-white bg-opacity-60 rounded-lg shadow-lg transition-opacity duration-300 ${selectedCloth ? "backdrop-blur-md" : "opacity-0 pointer-events-none"}`}></div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 relative z-10">Wardrobe</h1>

        {/* Check if wardrobe is empty */}
        {items.length === 0 ? (
          <p className="text-2xl text-gray-300 relative z-10">Your Wardrobe is empty 😞</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl p-4 bg-white bg-opacity-60 rounded-lg shadow-lg relative z-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer p-4 bg-white bg-opacity-80 rounded-lg shadow-md hover:scale-105 transition-transform border border-gray-300 backdrop-blur-md"
                onClick={() => setSelectedCloth(item)}
              >
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                <p className="text-black font-semibold text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Add New Item Button */}
        <button onClick={handleAddItem} className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-10">
          + Add New Item
        </button>
      </div>

      {/* Pop-Up Modal for Clothing Item */}
      {selectedCloth && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-md"
          onClick={() => setSelectedCloth(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-black"
              onClick={() => setSelectedCloth(null)}
            >
              ✖
            </button>
            <img src={selectedCloth.image} alt={selectedCloth.name} className="w-80 h-80 object-cover rounded-md" />
            <h2 className="text-black text-xl font-semibold mt-4 text-center">{selectedCloth.name}</h2>
          </div>
        </div>
      )}
    </>
  );
}