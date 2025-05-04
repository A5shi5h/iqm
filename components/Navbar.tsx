"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter, Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${inter.className} w-full bg-white shadow-sm`}>
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo and Brand */}
        
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="IQM Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className={`${poppins.className} font-bold text-4xl`}>IQM</h1>
        </div>

        {/* Desktop Nav Links */}

        <div className="hidden md:flex items-center space-x-4 text-black font-medium text-md">
          <Link href="/" className="hover:bg-gray-200 px-4 py-4 rounded-lg">Home</Link>
          <Link href="/about" className="hover:bg-gray-200 px-4 py-4 rounded-lg">About us</Link>
          <Link href="/course" className="hover:bg-gray-200 px-4 py-4 rounded-lg">Course</Link>
          <Link href="/testimonial" className="hover:bg-gray-200 px-4 py-4 rounded-lg">Testimonial</Link>
          <Link href="/blogs" className="hover:bg-gray-200 px-6 py-4 rounded-lg">Blogs</Link>
        </div>

        {/* Login Button */}

        <Link
          href="/login"
          className="bg-[#11796B] text-white px-12 py-1 rounded-2xl shadow-md font-semibold text-2xl hover:bg-black shadow-slate-400"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 bg-white text-sm font-medium">
          <Link href="/" className="hover:bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link href="/course" className="hover:bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Course</Link>
          <Link href="/testimonial" className="hover:bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Testimonial</Link>
          <Link href="/blogs" className="hover:bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/login" className="bg-[#11796B] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-black mt-2">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
