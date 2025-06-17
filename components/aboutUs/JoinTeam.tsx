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
    <section className="relative bg-transparent py-16 px-4 sm:px-6 md:px-12 mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 max-[760px]:gap-4 items-center">
        
        {/* Decorative swirl */}
        <Image
          src="/svgs/swirl-top.svg"
          alt="Decorative Swirl"
          width={100}
          height={100}
          className="absolute right-0 top-10 rotate-90 scale-75"
          loading="lazy"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2
            className={`${coolvetica.className} text-4xl sm:text-5xl md:text-[64px] font-normal leading-tight mb-6`}
          >
            Wish to Join the <span className="underline">Team?</span>
          </h2>
          <p
            className={`${sansation.className} text-gray-700 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-4`}
          >
            Send us your details and essentials, let’s get started. Drop us a
            mail.
            <br />
            All we need is:
          </p>
          <ol
            className={`${sansation.className} list-decimal list-inside text-gray-700 text-base sm:text-lg md:text-xl space-y-2`}
          >
            <li>Your Resume</li>
            <li>A cover letter</li>
            <li>Job role you wish to apply</li>
          </ol>
        </div>

        {/* Blob & Image Section */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/svgs/blob.svg"
            alt="Background Blob"
            width={500}
            height={500}
            className="w-full max-w-[400px] md:max-w-[500px] rotate-[270deg] opacity-20 scale-120 max-[760px]:scale-85"
            loading="lazy"
          />
          <Image
            src="/images/jointeam.png"
            alt="Start Learning Illustration"
            width={300}
            height={300}
            className="absolute top-40 w-4/5 sm:w-[300px] md:w-[350px] z-10 max-[760px]:scale-65 max-[760px]:top-[-50px] scale-150"
            loading="lazy"
          />
          <Image
            src="/svgs/swirl-bottom.svg"
            alt="Bottom Swirl"
            width={100}
            height={100}
            className="absolute bottom-0 left-0 scale-75"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
