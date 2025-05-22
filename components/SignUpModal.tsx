"use client";

import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import ModalWrapper from "./ModalWrapper";

const creato = localFont({
  src: "../public/fonts/Creato.otf",
});

export default function SignUpModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-90">
          <div className="h-[568px] w-[320px] bg-[#FAEBD7] rounded-md px-[16px] py-[64px] relative">
            {/* Cross Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <div className="text-[40px] font-semibold text-center pt-[5%] leading-tight mb-[40%]">
              <h1>GET STARTED</h1>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email/Phone Number"
                className="bg-white p-2 rounded-md mt-2 mb-2 w-full shadow-inner shadow-slate-300"
              />
              <br />
            </div>
            <p className={`${creato.className} text-sm`}>
              Already have an account?
              <Link href={""}>
                <span className="text-blue-600">Login</span>
              </Link>
            </p>

            <div
              className={`text-center mt-6 bg-[#107869] w-fit px-8 py-3 text-white absolute left-[26%] rounded-full ${creato.className}`}
            >
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
}
