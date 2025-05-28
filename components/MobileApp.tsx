"use client";

import Image from 'next/image'
import localFont from "next/font/local";

const coolvetica = localFont({
    src: "../public/fonts/Coolvetica.ttf",
    variable: "--font-creato-thin",
});

export default function MobileApp() {
  return (
    <>
      <main className={`${coolvetica.className} relative items-center justify-center bg-white text-center p-6 mb-30`}>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-[64px] font-normal text-black mb-4">
          Try out our
        </h1>
        <h2 className="text-4xl md:text-[64px] font-normal text-[#0E776A] underline mb-10">
          Mobile App
        </h2>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-10">
          <div className="relative">
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={250}
              height={80}
              className="opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black font-normal text-lg">coming soon</p>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/images/play-store.png"
              alt="Play Store"
              width={250}
              height={80}
              className="opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black font-normal text-lg">coming soon</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
