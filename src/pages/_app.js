import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex">
      {/* Sidebar Navbar (Visible on All Pages) */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
