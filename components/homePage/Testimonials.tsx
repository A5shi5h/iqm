"use client";

import Image from "next/image";
import localFont from "next/font/local";

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
    <section className="relative py-16 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`${coolvetica.className} text-3xl sm:text-4xl md:text-[48px] lg:text-[64px] font-normal text-center mb-20`}
        >
          Our{" "}
          <span className="text-teal-800 underline underline-offset-4">
            Top
          </span>{" "}
          Testimonials
        </h2>

        {/* Decorative Images */}
        <Image
          src="/svgs/swirl-top.svg"
          alt="Blob shape"
          width={60}
          height={60}
          className="absolute top-10 left-10 scale-150 opacity-20"
        />
        <Image
          src="/svgs/swirl-bottom.svg"
          alt="Blob shape"
          width={60}
          height={60}
          className="rotate-90 scale-150 absolute top-10 right-10 opacity-20"
        />
        <Image
          src="/svgs/crown.svg"
          alt="Crown"
          width={60}
          height={60}
          className="scale-180 absolute top-35 left-75 -translate-x-1/2 max-[760px]:hidden"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {[
            {
              name: "Ayush Chettri",
              text: "Classes were just awesome. Great and experienced teachers, had a great time studying in IQM",
              image: "/images/testimonial1.jpg",
            },
            {
              name: "Aditya Dahal",
              text: "Extremely talented faculty with grounded and friendly nature. Suggested for excellence in results",
              image: "/images/testimonial2.jpg",
            },
            {
              name: "Anusriya Sharma",
              text: "They create a positive, motivating environment where every student feels valued",
              image: "/images/testimonial3.jpg",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#f5e9da] rounded-xl shadow-2xl shadow-slate-900 flex flex-col items-center text-center overflow-hidden max-[760px]:mx-10"
            >
              <div className="p-6 sm:p-8">
                <h3
                  className={`${creato.className} text-2xl sm:text-3xl font-bold mb-4 mt-12`}
                >
                  {testimonial.name}
                </h3>
                <p
                  className={`${sansation.className} text-base sm:text-lg mb-6 px-2 sm:px-8`}
                >
                  {testimonial.text}
                </p>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-6"
                />
              </div>
              <div className="bg-teal-700 text-white w-full p-4 pb-8">
                <div className="flex justify-center mb-3">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>
                <p className={`${creatoThin.className} text-base sm:text-lg`}>
                  Class 10, ICSE
                </p>
                <p className={`${creatoThin.className} text-base sm:text-lg`}>
                  St Xavier&apos;s School, Pakyong, Sikkim
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
