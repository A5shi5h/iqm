"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import localFont from "next/font/local";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const nexa = localFont({
  src: "../public/fonts/Nexa-Heavy.ttf",
});

const creatoRegular = localFont({
  src: "../public/fonts/CreatoDisplay-Regular.otf",
});

const creatoBold = localFont({
  src: "../public/fonts/CreatoDisplay-Bold.otf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setLogin] = useState(false);

  return (
    <nav
      className={`${inter.className} w-full z-30 fixed top-0 bg-white ${
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
          <h1 className={`${nexa.className} font-bold text-2xl md:text-4xl`}>
            IQM
          </h1>
        </div>

        {/* Desktop Links */}
        <div
          className={`${creatoRegular.className} hidden md:flex items-center space-x-4 font-normal text-black text-md`}
        >
          {["Home", "About Us", "Courses", "Testimonial", "Blogs"].map(
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
            className={`${creatoBold.className} bg-[#11796B] text-white px-8 py-2 rounded-full shadow-md text-lg font-normal hover:bg-black transition-colors cursor-pointer`}
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
            {menuOpen ? "" : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
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
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4 text-md font-medium absolute top-2 left-0 right-0 bottom-0">
          {["Home", "About Us", "Course", "Testimonial", "Blogs"].map(
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
          <div className="mt-auto flex justify-center gap-6 pb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={28}
                className="text-black hover:text-black transition-colors"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={28}
                className="text-black hover:text-black transition-colors"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={28}
                className="text-black hover:text-black transition-colors"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="text-black hover:text-black transition-colors"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={28}
                className="text-black hover:text-black transition-colors"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showLogin && <LoginModal onClose={() => setLogin(false)} />}
    </nav>
  );
};

export default Navbar;
