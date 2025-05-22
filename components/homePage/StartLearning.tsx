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
    <section className="relative bg-white py-20 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <Image
          src="/svgs/swirl-top.svg"
          alt="Start Learning Illustration"
          width={100}
          height={100}
          className="absolute right-0 top-10 rotate-90 scale-80"
        />

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2
            className={`${coolvetica.className} text-4xl md:text-6xl font-normal leading-tight mb-4`}
          >
            It<span>&apos;</span>s Easy to <br />
            start{" "}
            <span className="text-[#106e63] underline decoration-[#106e63]">
              LEARNING
            </span>
          </h2>
          <p
            className={`${sansation.className} text-gray-700 text-[20px] mt-4 w-[30rem]`}
          >
            A few clicks, a few details, and you<span>&apos;</span>re already
            one step closer to success in your next exam. Just tell us your
            name, class, board, and the exam you<span>&apos;</span>re preparing
            for!
          </p>
        </div>

        {/* Blob Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <Image
            src="/svgs/blob.svg"
            alt="Start Learning Illustration"
            width={500}
            height={500}
            className="w-full max-w-[400px] md:max-w-[500px] rotate-[270deg] opacity-20 scale-110"
          />
          <Image
            src="/images/startlearning.png"
            alt="Start Learning Illustration"
            width={400}
            height={400}
            className="absolute top-10"
          />
          <Image
            src="/svgs/swirl-bottom.svg"
            alt="Start Learning Illustration"
            width={100}
            height={100}
            className="absolute scale-80 top-120 left-0"
          />
        </div>
      </div>
    </section>
  );
}
