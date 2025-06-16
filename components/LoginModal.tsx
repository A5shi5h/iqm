"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import ModalWrapper from "./ModalWrapper";
import toast from "react-hot-toast";

const creatoThin = localFont({
  src: "../public/fonts/CreatoDisplay-Thin.otf",
});

const creato = localFont({
  src: "../public/fonts/Creato.otf",
});

export default function LoginModal({ onClose }: { onClose: () => void }) {
 
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");

  const sendOtp = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message || "OTP sent!");
      setStep("otp");
    } else {
      toast.error(data.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ email, otp }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message || "OTP verified!");
    } else {
      toast.error(data.message || "Invalid OTP.");
    }
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-90">
        <div className="h-[580px] w-[390px] bg-[#FAEBD7] rounded-md px-4 py-[64px] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black cursor-pointer"
          >
            ✕
          </button>

          <div className="text-[64px] font-bold text-center pt-[4%] leading-tight">
            <h1 className={`${creato.className}`}>
              Get <span className="text-[#107869] pr-2">Started</span>
            </h1>
          </div>

          {step === "email" && (
            <div
              className={`pt-[30px] p-6 text-md font-thin ${creatoThin.className}`}
            >
              <label>Name *</label>
              <br />
              <input
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
              />
              <div className="pt-4">
                <label>Email *</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
                />
              </div>
              <div className="pt-4">
                <label>Phone *</label>
                <br />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
                />
              </div>
              <br />
              <div
                className={`bg-[#107869] w-fit px-6 py-2 text-white absolute right-10 rounded-full ml-2 ${creatoThin.className}`}
              >
                <button onClick={sendOtp}>Send OTP</button>
              </div>
            </div>
          )}

          {step === "otp" && (
            <div className={`pt-[30px] text-sm ${creatoThin.className}`}>
              <label>Verify OTP</label>
              <br />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
              />
              <br />
              <div
                className={`text-center mt-4 bg-[#107869] w-fit px-8 py-3 text-white absolute left-[26%] rounded-full ml-2 ${creatoThin.className}`}
              >
                <button onClick={verifyOtp}>Verify OTP</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
}
