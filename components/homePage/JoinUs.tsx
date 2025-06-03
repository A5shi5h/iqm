"use client";

import Image from "next/image";
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
    <main className="relative flex justify-center items-center bg-transparent px-4 py-12 max-[760px]:px-10">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl rounded-[40px] py-10 max-[760px]:py-0 overflow-hidden bg-[#0E776A] shadow-lg">
        {/* Left: Image Section */}
        <div className="relative w-full md:w-[45%] flex items-center justify-center px-4 py-6 sm:p-8 md:p-10">
          {/* Background SVGs */}
          <Image
            src="/svgs/swirl-bottom.svg"
            alt="swirl"
            width={0} // no need for fixed width
            height={0}
            className="absolute z-10 top-10 left-10 scale-70 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />

          <Image
            src="/svgs/aboutBlob2.svg"
            alt="blob"
            width={0}
            height={0}
            className="absolute z-0 top-0 left-0 opacity-30 w-56 h-56 scale-150 sm:w-72 sm:h-72 md:w-80 md:h-80 max-[760px]:scale-90 max-[760px]:top-[-250px] max-[760px]:left-[-40px]"
          />

          {/* Main Image */}
          <Image
            src="/images/books.png"
            alt="Books and Papers"
            width={250}
            height={250}
            className="z-20 w-[65%] scale-135 sm:w-[70%] md:w-[80%] max-w-[320px] max-[760px]:hidden"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-[55%] flex flex-col justify-center p-6 sm:p-8 md:p-12 text-white space-y-4">
          <h1
            className={`${coolvetica.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-snug font-normal`}
          >
            Join us!! <br />
            Let's get <span className="underline text-white">Started</span>
          </h1>

          <p
            className={`${sansation.className} text-sm sm:text-base md:text-lg lg:text-xl font-normal`}
          >
            You are just a few clicks away from greatness.
          </p>

          <button
            className={`${creato.className} bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full w-fit font-normal text-base sm:text-lg md:text-xl`}
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
