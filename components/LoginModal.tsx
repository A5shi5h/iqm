"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import ModalWrapper from "./ModalWrapper";

const creato = localFont({
  src: "../public/fonts/Creato.otf",
});

export default function LoginModal({ onClose }: { onClose: () => void }) {

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setStep('otp');
  };

  const verifyOtp = async () => {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ email, otp }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <div className="h-[568px] w-[320px] bg-[#FAEBD7] rounded-md px-[16px] py-[64px] relative">
            {/* Cross Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <div className="text-[48px] font-bold text-center pt-[20%] leading-tight">
              <h1 className={`${creato.className}`}>Welcome</h1>
              <h1>
                <span className="text-[#107869] pr-2 underline">back</span>!
              </h1>
            </div>


            {step === 'email' && (
                <div className={`pt-[60px] text-sm ${creato.className}`}>
                  <label>Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
                  />
                  <br />
                  <div
                      className={`text-center mt-6 bg-[#107869] w-fit px-8 py-3 text-white absolute left-[26%] rounded-full ml-2 ${creato.className}`}
                    >
                      <button onClick={sendOtp}>Send Otp</button>
                  </div>
                </div>
              )}

              {step === 'otp' && (
                <div className={`pt-[30px] text-sm ${creato.className}`}>
                  <label>Verify Otp</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-700 placeholder-gray-400 mt-2 bg-white"
                  />
                  <br />
                  <div
                      className={`text-center mt-4 bg-[#107869] w-fit px-8 py-3 text-white absolute left-[26%] rounded-full ml-2 ${creato.className}`}
                    >
                      <button onClick={verifyOtp}>Verify Otp</button>
                  </div>
              </div>
              )}
              {message && (
                <p className="mt-20 text-center text-sm text-gray-600 rounded-lg">
                  {message}
                </p>
              )}

          </div>
        </div>
      </ModalWrapper>
    </>
  );
}
