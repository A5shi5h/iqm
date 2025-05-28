"use client";

import Image from "next/image";
import localFont from "next/font/local";
import OurTestimonials from "./OurTestimonials";
import Schools from "./Schools";

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

const sansation = localFont({
  src: "../../public/fonts/Sansation-Regular.ttf",
  variable: "--font-sansation",
});

const creatoThin = localFont({
  src: "../../public/fonts/CreatoDisplay-Thin.otf",
  variable: "--font-creato-thin",
});

export default function KeyFeatures() {
  return (
    <>
      {/* Stats */}
      <div className="relative max-w-6xl mx-auto text-center flex justify-center mb-10">
        <div className="absolute top-1/2 -translate-y-[50%] z-10 leading-12">
            <h1 className={`${coolvetica.className} font-normal text-[64px]`}>1K+</h1>
            <p className={`${creatoThin.className} font-normal text-[32px]`}>Students who  appeared for Board Exam</p>
        </div>
        <Image 
          src={"/svgs/circle.svg"}
          alt="Circle"
          height={220}
          width={220}
          className="opacity-30 z-0"
        />
      </div>

      <TreeCurveBanner />

      <section className="relative bg-[#106e63] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Schools />
          <OurTestimonials />
        </div>
      </section>

      {/* Bottom Curves */}
      <div className="relative w-full h-[100px] overflow-hidden">
            <Image
              src="/svgs/curve.svg"
              alt="Background Curve"
              height={100}
              width={100}
              className="w-full absolute top-28 sm:top-0 z-30 rotate-180"
            />
            <Image
              src="/svgs/curve-border.svg"
              alt="Background Curve Border"
              height={100}
              width={100}
              className="w-full absolute top-24 sm:top-0 z-20 rotate-180"
            />
       </div>
    </>
  );
}

function TreeCurveBanner() {
  const treePositions = ["12%", "20%", "75%", "84%"];

  return (
    <div className="relative w-full h-[100px] sm:h-[190px] overflow-hidden">
      <Image
        src="/svgs/curve.svg"
        alt="Background Curve"
        height={100}
        width={100}
        className="w-full absolute top-28 sm:top-38 z-30"
      />
      <Image
        src="/svgs/curve-border.svg"
        alt="Background Curve Border"
        height={100}
        width={100}
        className="w-full absolute top-24 sm:top-35 z-20"
      />
      {treePositions.map((left, index) => {
        const isScaled = index === 1 || index === 2;
        const treeClasses = `absolute ${
          isScaled
            ? "top-[40px] sm:top-[40px] scale-110 sm:scale-130"
            : "top-[70px] sm:top-[60px]"
        }`;

        return (
          <Image
            key={index}
            src="/svgs/tree.svg"
            alt={`Tree ${index}`}
            width={60}
            height={60}
            className={`${treeClasses}`}
            style={{ left }}
          />
        );
      })}
    </div>
  );
}
