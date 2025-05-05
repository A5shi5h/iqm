"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter, Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Nav links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/course", label: "Course" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className={`${inter.className} w-full bg-white shadow-sm sticky top-0 z-50`}>
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="IQM Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className={`${poppins.className} font-bold text-4xl`}>IQM</h1>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4 text-black font-medium text-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors ${
                pathname === link.href ? "bg-[#AFE1AF] font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-[#11796B] text-white px-8 py-2 rounded-2xl shadow-md font-semibold text-lg hover:bg-black transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#11796B] text-white px-4 py-1 rounded-2xl shadow-md font-semibold text-sm hover:bg-black transition-colors"
          >
            Login
          </Link>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-black"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors ${
                  pathname === link.href ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;