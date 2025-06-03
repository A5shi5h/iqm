"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter, Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setLogin] = useState(false);

  return (
    <nav
      className={`${
        inter.className
      } w-full z-40 fixed top-0 bg-white ${
        showLogin ? "bg-slate-200" : "bg-white"
      }`}
    >
      <div
        className={`transition-opacity duration-300 max-w-9xl mx-auto px-6 py-4 flex items-center justify-between ${
          showLogin ? "opacity-20 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="IQM Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className={`${poppins.className} font-bold text-2xl md:text-4xl`}>
            IQM
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 font-medium text-black">
          {["Home", "About", "Courses", "Testimonial", "Blogs"].map(
            (label, index) => (
              <Link
                key={index}
                href={
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(" ", "")}`
                }
                className="hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button
            onClick={() => setLogin(true)}
            className="bg-[#11796B] text-white px-8 py-2 rounded-full shadow-md text-lg font-semibold hover:bg-black transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "" : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[40%] h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close (X) button inside menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black absolute top-8 "
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4 text-sm font-medium absolute top-2 ">
          {["Home", "About us", "Course", "Testimonial", "Blogs"].map(
            (label, index) => (
              <Link
                key={index}
                href={
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(" ", "")}`
                }
                className="hover:bg-gray-200 px-4 py-2 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      {showLogin && <LoginModal onClose={() => setLogin(false)} />}
    </nav>
  );
};

export default Navbar;
