"use client";

import localFont from "next/font/local";
import Image from "next/image";

// Import local fonts
const creatoThin = localFont({
  src: "../../public/fonts/CreatoDisplay-Thin.otf",
  variable: "--font-creato-thin",
});

const sansation = localFont({
  src: "../../public/fonts/Sansation-Regular.ttf",
  variable: "--font-sansation",
});

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

export default function AboutUs() {
  return (
    <section
      className={`${creatoThin.variable} ${sansation.variable} bg-transparent  py-16 px-4 sm:px-6 lg:px-8`}
    >
      {/* Stats */}
      <div className="max-w-6xl mx-auto text-center grid grid-cols-4 gap-4 mb-20">
        {[
          { number: "1000+", label: "Students" },
          { number: "5", label: "Exams" },
          { number: "10+", label: "Courses" },
          { number: "6+", label: "Teachers" },
        ].map(({ number, label }, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <h2
              className={`${coolvetica.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal z-10`}
            >
              {number}
            </h2>
            <Image
              src="/svgs/circle.svg"
              alt="Blob shape"
              height={60}
              width={60}
              className="absolute z-0 opacity-30 top-5"
            />
            <p
              className={`${creatoThin.className} mt-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl relative z-10`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto bg-[rgb(17,111,97)] text-white rounded-4xl px-6 sm:px-12 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-16">
        {/* Text */}
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold underline mb-6 sm:mb-8">
            About Us
          </h3>
          <p
            className={`${sansation.className} mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-justify max-w-prose`}
          >
            In the midst of the global pandemic, a need was felt. That need gave
            rise to IQM — a place where curiosity meets clarity. What started as
            a problem has evolved into a mission: to make learning accessible,
            intuitive, and inspiring.
          </p>
          <button className="bg-white text-teal-800 font-normal px-6 py-2 mt-4 rounded-full hover:bg-black hover:text-white transition text-lg sm:text-xl border border-black">
            Know more
          </button>
        </div>

        {/* Images */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/svgs/aboutBlob2.svg"
            alt="Blob shape"
            height={300}
            width={300}
            className="absolute opacity-30 bottom-0 left-0 w-[70%] sm:w-[300px]"
          />
          <Image
            src="/images/aboutImage.png"
            alt="Illustration"
            height={300}
            width={300}
            className="relative z-10 w-[80%] sm:w-[300px] h-auto scale-140 max-[760px]:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
