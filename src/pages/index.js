import Head from "next/head";
import Link from "next/link";
import { FiSmile, FiShoppingCart } from "react-icons/fi";
import { GiClothes } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trend-Z | Virtual Wardrobe & Thrift Store</title>
        <meta name="description" content="Your AI-powered wardrobe and online thrift store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#C42B4A] to-[#1A243C] text-white min-h-screen relative">
        {/* CTA Buttons */}
        <div className="absolute top-6 right-6 flex space-x-4">
          <Link href="/wardrobe" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
            Explore Wardrobe
          </Link>
          <Link href="/thrift" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
            Visit Thrift Store
          </Link>
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-4">Welcome to Trend-Z</h1>
        <p className="text-lg mb-6">Your AI-Powered Virtual Wardrobe & Online Thrift Store</p>

        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 - Virtual Wardrobe */}
          <Link href="/wardrobe">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <GiClothes className="text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Virtual Wardrobe</h3>
              <p className="mt-2">Manage and style your outfits with AI suggestions.</p>
            </div>
          </Link>

          {/* Feature 2 - Mood-Based Styling */}
          <Link href="/mood">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <FiSmile className="text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Mood-Based Styling</h3>
              <p className="mt-2">Get AI-powered outfit recommendations based on your mood.</p>
            </div>
          </Link>

          {/* Feature 3 - Online Thrift Store */}
          <Link href="/thrift">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <FiShoppingCart className="text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Online Thrift Store</h3>
              <p className="mt-2">Buy and sell second-hand clothes sustainably.</p>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
