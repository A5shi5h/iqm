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

export default function StartLearning() {
  return (
    <section className="relative bg-transparent py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 max-[760px]:gap-4 items-center">
        {/* Decorative swirl */}
        <Image
          src="/svgs/swirl-top.svg"
          alt="Decorative Swirl"
          width={100}
          height={100}
          className="absolute right-0 top-10 rotate-90 scale-75 max-md:scale-50"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2
            className={`${coolvetica.className} text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6`}
          >
            It<span>&apos;</span>s Easy to <br />
            start{" "}
            <span className="text-[#106e63] underline decoration-[#106e63]">
              LEARNING
            </span>
          </h2>
          <p
            className={`${sansation.className} text-gray-700 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0`}
          >
            A few clicks, a few details, and you<span>&apos;</span>re already
            one step closer to success in your next exam. Just tell us your
            name, class, board, and the exam you<span>&apos;</span>re preparing for!
          </p>
        </div>

        {/* Blob & Image Section */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/svgs/blob.svg"
            alt="Background Blob"
            width={500}
            height={500}
            className="w-full max-w-[400px] md:max-w-[500px] rotate-[270deg] opacity-20 scale-100 max-[760px]:scale-85"
          />
          <Image
            src="/images/startlearning.png"
            alt="Start Learning Illustration"
            width={300}
            height={300}
            className="absolute top-20 w-4/5 sm:w-[300px] md:w-[350px] z-10 max-[760px]:scale-65 max-[760px]:top-[0px] scale-120 max-[1000px]:scale-90 max-[1000px]:top-0 max-[700px]:scale-90"
          />
          <Image
            src="/svgs/swirl-bottom.svg"
            alt="Bottom Swirl"
            width={100}
            height={100}
            className="absolute bottom-0 left-0 scale-75 max-md:scale-55"
          />
        </div>
      </div>
    </section>
  );
}
