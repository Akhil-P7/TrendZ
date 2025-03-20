import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Trend-Z</title>
      </Head>

      <main className="flex flex-row min-h-screen bg-gradient-to-b from-[#C42B4A] to-[#1A243C] text-white">
        {/*Past Outfit Recommendations */}
        <section className="w-1/4 bg-blue-100 bg-opacity-80 text-black p-6 pt-8 overflow-auto min-h-screen">
          <h2 className="text-xl font-semibold mt-8 mb-4">Past Outfit Recommendations</h2>
          <ul className="space-y-2 text-sm">
            <li>✔ Outfit 1: Casual Summer Look</li>
            <li>✔ Outfit 2: Formal Evening Attire</li>
            <li>✔ Outfit 3: Sporty Gym Wear</li>
          </ul>
        </section>

        {/*User Profile */}
        <section className="flex-1 relative p-12">
          <div className="absolute top-8 left-8">
            <img
              src="/images/Immortal_Tatsu.jpg"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>

          {/* User Details */}
          <div className="flex flex-col items-center justify-center mt-20 text-lg text-justify">
            <h1 className="text-4xl font-bold text-center">Asher Uchiha</h1>
            <p className="mt-2">📧 <span className="font-medium">uchiha.asher4s@gmail.com</span></p>
            <p className="mt-2">📞 <span className="font-medium">+918299275336</span></p>
            <p className="mt-2">🏆 <span className="font-medium">Thrift Store Points: 100</span></p>

            {/* Thrift Store Orders Dropdown */}
            <div className="mt-4 w-full text-center">
              <label className="text-xl font-semibold">Thrift Store Orders:</label>
              <select className="ml-2 px-4 py-2 text-black rounded-lg">
                <option>Order #1234 - Delivered</option>
                <option>Order #5678 - Shipped</option>
                <option>Order #9101 - Pending</option>
              </select>
            </div>
          </div>

          {/* Logout Button */}
          <button className="absolute bottom-20 right-8 px-6 py-3 bg-red-600 text-white rounded-lg">
            Logout
          </button>

          {/* Donation Section */}
          <div className="absolute bottom-0 left-0 w-full bg-blue-300 text-black text-center py-4">
            <p className="inline-block">
              Support our platform! If you love what we do, consider donating.❤️
            </p>
            <button className="ml-4 px-4 py-2 bg-pink-600 text-white rounded-lg">Donate</button>
          </div>
        </section>
      </main>
    </>
  );
}
