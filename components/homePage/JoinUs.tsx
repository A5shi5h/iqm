"use client";

import Image from 'next/image'
import localFont from "next/font/local";

const coolvetica = localFont({
    src: "../../public/fonts/Coolvetica.ttf",
    variable: "--font-creato-thin",
});

const sansation = localFont({
    src: "../../public/fonts/Sansation-Regular.ttf",
    variable: "--font-sansation",
});

const creato = localFont({
    src: "../../public/fonts/Creato.otf",
});

export default function JoinUs() {
  return (
    <>
      <main className="relative flex justify-center items-center min-h-screen bg-[#ffffff]">
        <div className="flex flex-col md:flex-row w-[90%] h-[30rem] max-w-6xl rounded-[50px] overflow-hidden bg-[#0E776A]">
          
          {/* Left side - image + bg */}
          <div className="w-full md:w-[40%] flex items-center justify-center p-10">
            <Image
              src="/images/swirl-bottom.svg"
              alt="swirl"
              width={200}
              height={200}
              className="absolute z-30 scale-40 top-40 left-50"
            />
            <Image
              src="/images/aboutBlob2.svg"
              alt="blob"
              width={500}
              height={500}
              className="opacity-50 absolute scale-110 top-5 left-20"
            />

            <Image
              src="/images/books.png"
              alt="Books and Papers"
              width={400}
              height={400}
              className="z-10 scale-115"
            />
          </div>

          {/* Right side - content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10 text-black space-y-4">
            <h1 className={`${coolvetica.className} text-6xl leading-snug font-normal`}>
              Join us!! <br />
              Lets get <span className="underline text-white">Started</span>
            </h1>
            <p className={`${sansation.className} text-[20px] text-white font-normal`}>
              You are just a few clicks away from greatness
            </p>
            <button className={`${creato.className} bg-black text-white px-6 py-3 rounded-full w-fit font-normal text-2xl`}>
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
