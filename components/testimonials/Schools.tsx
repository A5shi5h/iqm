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

const schools = [
  {
    name: "Manju Shree Public School",
    image: "/images/manjushri.png",
  },
  {
    name: "St. Xavier's School",
    image: "/images/xaviers.png",
  },
  {
    name: "Tashi Namgyal Academy",
    image: "/images/tna.png",
  },
  {
    name: "St. Joseph's School",
    image: "/images/joseph.png",
  },
  {
    name: "Mamring School",
    image: "/images/mamring.png",
  },
];

export default function Schools() {
  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`${coolvetica.className} text-3xl sm:text-4xl md:text-[48px] lg:text-[64px] font-normal text-center text-black mb-20`}
        >
          Our Students Come from<br />
          <span className="text-white underline">Leading Schools</span>
        </h2>

        {/* Logo Row - fixed alignment, responsive size */}
        <div className="flex justify-center items-center gap-2 lg:gap-16 p-16">
          {schools.map((school, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={school.image}
                alt={school.name}
                width={160}
                height={160}
                className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
