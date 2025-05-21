"use client";

import localFont from "next/font/local";
import Image from "next/image";

// Import local fonts
const creatoThin = localFont({
  src: "../public/fonts/CreatoDisplay-Thin.otf",
  variable: "--font-creato-thin",
});

const sansation = localFont({
  src: "../public/fonts/Sansation-Regular.ttf",
  variable: "--font-sansation",
});

const coolvetica = localFont({
  src: "../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

export default function AboutUs() {
  return (
    <section
      className={`${creatoThin.variable} ${sansation.variable} bg-white py-16`}
    >
      {/* Stats */}
      <div className="max-w-6xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-4 mb-30">
        <div className="relative flex flex-col items-center">
          <h2 className={`${coolvetica.className} text-6xl font-normal z-10`}>1000+</h2>
          <Image
            src={"/images/circle.svg"}
            alt="Blob shape"
            height={60}
            width={60}
            className="absolute z-0 opacity-30 top-5"
          />
          <p className={`${creatoThin.className} mt-1 text-4xl relative z-10`}>
            Students
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <h2 className={`${coolvetica.className} text-6xl font-normal z-10`}>5</h2>
          <Image
            src={"/images/circle.svg"}
            alt="Blob shape"
            height={60}
            width={60}
            className="absolute z-0 opacity-30 top-5"
          />
          <p className={`${creatoThin.className} mt-1 text-4xl relative z-10`}>Exams</p>
        </div>
        <div className="relative flex flex-col items-center">
          <h2 className={`${coolvetica.className} text-6xl font-normal z-10`}>10+</h2>
          <Image
            src={"/images/circle.svg"}
            alt="Blob shape"
            height={60}
            width={60}
            className="absolute z-0 opacity-30 top-5"
          />
          <p className={`${creatoThin.className} mt-1 text-4xl relative z-10`}>Courses</p>
        </div>
        <div className="relative flex flex-col items-center">
          <h2 className={`${coolvetica.className} text-6xl font-normal z-10`}>6+</h2>
          <Image
            src={"/images/circle.svg"}
            alt="Blob shape"
            height={60}
            width={60}
            className="absolute z-0 opacity-30 top-5"
          />
          <p className={`${creatoThin.className} mt-1 text-4xl relative z-10`}>Teachers</p>
        </div>
      </div>

      {/* About Section */}
        <div className="max-w-[85rem] mx-auto bg-[rgb(17,111,97)] text-white rounded-4xl px-18 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative">
          {/* Text */}
          <div>
            <h3 className="text-6xl font-bold underline mb-8">About Us</h3>
            <p className={`${sansation.className} mb-6 leading-normal text-xl text-justify w-[30rem]`}>
              In the midst of the global pandemic, a need was felt. That need gave
              rise to IQM — a place where curiosity meets clarity. What started as
              a problem has evolved into a mission: to make learning accessible,
              intuitive, and inspiring.
            </p>
            <button className="bg-white text-teal-800 font-normal font-sans px-6 py-2 mt-6 rounded-full hover:bg-black hover:text-white transition text-2xl border-1 border-black">
              Know more
            </button>
          </div>

          {/* Images */}
          <div className="relative">
            <Image
              src={"/images/aboutBlob2.svg"}
              alt="Blob shape"
              height={300}
              width={300}
              className="absolute opacity-40 bottom-[0.1px] left-0"
            />
            <Image
              src={"/images/aboutImage.png"}
              alt="Illustration"
              height={300}
              width={300}
              className="relative z-10 mx-auto scale-152"
            />
          </div>
        </div>
    </section>
  );
}
