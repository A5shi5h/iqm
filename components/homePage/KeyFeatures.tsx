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

export default function KeyFeatures() {
  return (
    <>
      {/* Top Curve with Trees */}
      <TreeCurveBanner />

      {/* Main Content Section */}
      <section className="relative bg-[#106e63] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-6">
            <div className="relative bg-black rounded-4xl col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 flex flex-col items-center justify-center p-6">
              <h2
                className={`${coolvetica.className} text-white text-4xl sm:text-5xl lg:text-6xl font-normal text-center pt-4`}
              >
                Our <span className="underline text-[#1fc1a9]">Key</span>{" "}
                Features
              </h2>
              <div className="w-full relative flex justify-center mt-4">
                <Image
                  src="/svgs/keyFeature.svg"
                  alt="Key Feature"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
                <Image
                  src="/images/teaching.png"
                  alt="Teaching"
                  width={300}
                  height={300}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 sm:scale-110"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <FeatureCard
              title="Expert Mentorship"
              desc="Get guidance from the best teachers having 5+ years of experience"
              icon="/images/mentorship.png"
              positionIndex={1}
            />
            <FeatureCard
              title="Online/Offline Classes"
              desc="Whether you're from Sikkim or any corner of India, our classes are always accessible to you"
              icon="/images/online-classes.png"
              positionIndex={2}
            />
            <FeatureCard
              title="Weekly Mock Tests"
              desc="Weekend mock tests to sharpen your skills and stay prepared"
              icon="/images/mock-tests.png"
              positionIndex={3}
            />
            <FeatureCard
              title="24/7 Doubt Clearence"
              desc="Stuck on a problem? We're here 24/7 to help you out—day or night"
              icon="/images/doubt-clearance.png"
              positionIndex={4}
            />
          </div>
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

function FeatureCard({
  title,
  desc,
  icon,
  positionIndex,
}: {
  title: string;
  desc: string;
  icon: string;
  positionIndex: number;
}) {
  const circlePositions = ["10%", "20%", "30%", "40%"];
  const circleLeft = circlePositions[positionIndex % circlePositions.length];

  return (
    <div className="bg-white rounded-4xl text-center relative p-4 sm:p-6 flex flex-col items-center">
      <div className="flex justify-center relative w-full">
        <Image
          src={icon}
          alt={title}
          height={120}
          width={120}
          className="scale-90 sm:scale-100 z-10 relative"
          loading="lazy"
        />
        <Image
          src="/svgs/circle.svg"
          alt="Circle Background"
          height={100}
          width={100}
          className="opacity-40 absolute z-20"
          loading="lazy"
          style={{ left: circleLeft }}
        />
      </div>
      <h3
        className={`${creato.className} text-xl sm:text-2xl font-normal mb-4 mt-4`}
      >
        {title}
      </h3>
      <p
        className={`${sansation.className} text-[15px] sm:text-[16px] text-gray-600 px-4`}
      >
        {desc}
      </p>
    </div>
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
        loading="lazy"
      />
      <Image
        src="/svgs/curve-border.svg"
        alt="Background Curve Border"
        height={100}
        width={100}
        className="w-full absolute top-24 sm:top-36 z-20"
        loading="lazy"
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
            loading="lazy"
            className={`${treeClasses}`}
            style={{ left }}
          />
        );
      })}
    </div>
  );
}
