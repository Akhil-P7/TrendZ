import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiUser, FiShoppingBag } from "react-icons/fi";
import { GiClothes } from "react-icons/gi";
import { MdTrendingUp } from "react-icons/md";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Sidebar Navigation */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#1A243C] transform ${navOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 shadow-lg`}>
        <button onClick={() => setNavOpen(false)} className="absolute top-4 right-4 text-white text-2xl">
          <FiX />
        </button>
        <nav className="mt-16 flex flex-col space-y-6 p-6 text-white">
          <Link href="/" className="flex items-center text-lg hover:text-gray-300">
            <FiHome className="mr-2" /> Home
          </Link>
          <Link href="/wardrobe" className="flex items-center text-lg hover:text-gray-300">
            <GiClothes className="mr-2" /> Wardrobe
          </Link>
          <Link href="/thrift" className="flex items-center text-lg hover:text-gray-300">
            <FiShoppingBag className="mr-2" /> Thrift Store
          </Link>
          <Link href="/trendy-looks" className="flex items-center text-lg hover:text-gray-300">
            <MdTrendingUp className="mr-2" /> Trendy Looks
          </Link>
          <Link href="/profile" className="flex items-center text-lg hover:text-gray-300">
            <FiUser className="mr-2" /> Profile
          </Link>
        </nav>
      </div>

      {/* Navbar Toggle Button */}
      <button onClick={() => setNavOpen(true)} className="fixed top-4 left-4 text-white text-2xl z-50">
        <FiMenu />
      </button>
    </>
  );
}
