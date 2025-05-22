"use client";

import Image from "next/image";
import localFont from "next/font/local";

// Local fonts (optional – adjust or skip if not needed)
const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

const creatoThin = localFont({
  src: "../../public/fonts/CreatoDisplay-Thin.otf",
});

const creato = localFont({
  src: "../../public/fonts/Creato.otf",
});

const sansation = localFont({
  src: "../../public/fonts/Sansation-Regular.ttf",
  variable: "--font-sansation",
});

export default function Testimonials() {
  return (
    <section className=" relative py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`${coolvetica.className} text-4xl md:text-[64px] font-normal text-center mb-24`}
        >
          Our{" "}
          <span className="text-teal-800 underline underline-offset-4">
            Top
          </span>{" "}
          Testimonials
        </h2>

        {/* Blob Image */}
        <Image
          src={"/images/swirl-top.svg"}
          alt="Blob shape"
          height={60}
          width={60}
          className="absolute top-15 left-25 scale-180"
        />
        <Image
          src={"/images/swirl-bottom.svg"}
          alt="Blob shape"
          height={60}
          width={60}
          className="rotate-90 scale-180 absolute top-15 right-25"
        />
        <Image
          src={"/images/crown.svg"}
          alt="Blob shape"
          height={60}
          width={60}
          className="scale-200 absolute top-35 left-65"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
          {/* Card 1 */}
          <div className="bg-[#f5e9da] rounded-xl shadow-2xl shadow-slate-900 flex flex-col items-center text-center overflow-hidden">
            <div className="p-6">
              <h3
                className={`${creato.className} text-[32px] font-bold mb-6 mt-20`}
              >
                Ayush Chettri
              </h3>
              <p className={`${sansation.className} text-lg mb-6 px-4`}>
                Classes were just awesome. Great and experienced teachers, had a
                great time studying in IQM
              </p>
              <Image
                src="/images/testimonial1.jpg"
                alt="Ayush"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-6"
              />
            </div>
            <div className="bg-teal-700 text-white w-full p-4 pb-8">
              <div className="flex justify-center mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className={`${creatoThin.className} text-lg`}>
                Class 10, ICSE
              </p>
              <p className={`${creatoThin.className} text-lg`}>
                St Xavier<span>&apos;</span> School, Pakyong, Sikkim
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5e9da] rounded-xl shadow-2xl shadow-slate-900 flex flex-col items-center text-center overflow-hidden">
            <div className="p-6">
              <h3
                className={`${creato.className} text-[32px] font-bold mb-6 mt-20`}
              >
                Aditya Dahal
              </h3>
              <p className={`${sansation.className} text-lg mb-6 px-4`}>
                Extremely talented faculty with grounded and friendly nature.
                Suggested for excellence in results
              </p>
              <Image
                src="/images/testimonial2.jpg"
                alt="Ayush"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-6"
              />
            </div>
            <div className="bg-teal-700 text-white w-full p-4 pb-8">
              <div className="flex justify-center mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className={`${creatoThin.className} text-lg`}>
                Class 10, ICSE
              </p>
              <p className={`${creatoThin.className} text-lg`}>
                St Xavier<span>&apos;</span> School, Pakyong, Sikkim
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5e9da] rounded-xl shadow-2xl shadow-slate-900 flex flex-col items-center text-center overflow-hidden">
            <div className="p-6">
              <h3
                className={`${creato.className} text-[32px] font-bold mb-6 mt-20`}
              >
                Anusriya Sharma
              </h3>
              <p className={`${sansation.className} text-lg mb-6 px-6`}>
                They create a positive, motivating environment where every
                student feels valued
              </p>
              <Image
                src="/images/testimonial3.jpg"
                alt="Ayush"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-6"
              />
            </div>
            <div className="bg-teal-700 text-white w-full p-4 pb-8">
              <div className="flex justify-center mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className={`${creatoThin.className} text-lg`}>
                Class 10, ICSE
              </p>
              <p className={`${creatoThin.className} text-lg`}>
                St Xavier<span>&apos;</span> School, Pakyong, Sikkim
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
