"use client";

import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa'; 
import localFont from "next/font/local";

const sansation = localFont({
    src: "../public/fonts/Sansation-Regular.ttf",
    variable: "--font-sansation",
});

const creatoThin = localFont({
  src: "../public/fonts/CreatoDisplay-Thin.otf",
});

export default function Footer() {
  return (
    <footer className="relative max-w-6xl mx-auto items-center bg-[#1B5955] text-white px-6 py-12 md:px-20 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Left section */}
        <div className="mb-10 md:mb-0 md:w-1/3">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-[#F6EBD8] rounded-full w-10 h-10 flex items-center justify-center">
              {/* Replace with your logo */}
              <Image
                src="/images/logo2.jpg"
                alt="Logo"
                width={20}
                height={20}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-white text-4xl font-bold">IQM</span>
          </div>
          <p className={`${creatoThin.className} text-lg font-normal mb-4`}>
            Branding text will be written here as such
          </p>
          <p className={`${creatoThin.className} text-lg font-normal mb-2`}>Join us on our socials:</p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white">
              <FaWhatsapp className="scale-170"/>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white">
              <Instagram />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white">
              <Mail />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-10 md:mb-0">
          <h3 className={`${sansation.className} text-[24px] font-normal underline mb-3`}>Company</h3>
          <ul className={`${creatoThin.className} space-y-2 text-lg`}>
            <li>About us</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className={`${sansation.className} text-[24px] font-normal underline mb-3`}>Support</h3>
          <ul className={`${creatoThin.className} space-y-2 text-lg`}>
            <li>Contact us</li>
            <li>Career</li>
            <li>FAQ&apos;s</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
    <div className={`${creatoThin.className} flex justify-between mt-24 text-sm font-normal text-white`}>
        <p>© The Inquisitive Mind 2025 | All rights reserved</p>
        <p>Privacy Policy & Teams of service</p>
      </div>
    </footer>
  );
}
