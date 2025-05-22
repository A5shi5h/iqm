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
      <section className="relative bg-[#106e63] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 auto-rows-auto gap-6">
            <div className="relative bg-black rounded-4xl col-span-2 row-span-2 items-center justify-center p-6">
              <h2
                className={`${coolvetica.className} text-white text-6xl font-normal text-center pt-4`}
              >
                Our <span className="underline text-[#1fc1a9]">Key</span> Features
              </h2>
              <Image
                src="/svgs/keyFeature.svg"
                alt="Key Feature"
                height={300}
                width={300}
                className="w-full h-[90%] top-0"
              />
              <Image
                src="/images/teaching.png"
                alt="Teaching"
                height={300}
                width={300}
                className="absolute top-62 left-40 scale-130"
              />
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
              desc="Stuck on a problem? We’re here 24/7 to help you out—day or night"
              icon="/images/doubt-clearance.png"
              positionIndex={4}
            />
          </div>
        </div>
        
         {/* Bottom Curve */}
          <div className="relative">
            <Image 
              src="/svgs/curve.svg"
              alt="Bottom Curve"
              height={100}
              width={100}
              className="w-full rotate-180 absolute bottom-[-100px] z-31"
            />
          </div>

          {/* Bottom Curve Border */}
          <div className="relative">
            <Image 
              src="/svgs/curve-border.svg"
              alt="Bottom Curve"
              height={100}
              width={100}
              className="w-full rotate-180 absolute bottom-[-120px] z-30"
            />
          </div>
      </section>
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
  const circlePositions = ["10%", "20%", "30%", "40%"]; // can be top or left values

  const circleLeft = circlePositions[positionIndex % circlePositions.length];

  return (
    <div className="bg-white rounded-4xl items-center text-center relative p-6">
      <div className="flex justify-center relative">
        <Image
          src={icon}
          alt={title}
          height={200}
          width={200}
          className="scale-50 z-10 relative"
        />
        <Image
          src={"/svgs/circle.svg"}
          alt={"circle svg"}
          height={200}
          width={200}
          className="scale-75 opacity-40 absolute z-0"
          style={{ left: circleLeft }}
        />
      </div>
      <h3 className={`${creato.className} text-2xl font-normal mb-6 mt-4`}>
        {title}
      </h3>
      <p className={`${sansation.className} text-[16px] text-gray-600 font-normal px-6`}>
        {desc}
      </p>
    </div>
  );
}
function TreeCurveBanner() {
  const treePositions = ["10%", "20%", "75%", "85%"];

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      
      {/* Top curve */}
      <Image 
        src="/svgs/curve.svg"
        alt="Background Curve"
        height={100}
        width={100}
        className="w-full absolute top-40 z-31"
      />
      
      {/* Top curve Border */}
      <Image 
        src="/svgs/curve-border.svg"
        alt="Background Curve"
        height={100}
        width={100}
        className="w-full absolute top-35 z-30"
      />

      {/* Trees on top of the curve */}
      {treePositions.map((left, index) => {
        // Apply scale and lift only to trees at index 1 and 2
        const isScaled = index === 1 || index === 2;
        const treeClasses = `absolute ${
          isScaled ? "top-[60px] scale-190" : "top-[90px]"
        } transition-transform duration-300`;

        return (
          <Image
            key={index}
            src="/svgs/tree.svg"
            alt={`Tree ${index}`}
            width={40}
            height={40}
            className={`${treeClasses} scale-130`}
            style={{ left }}
          />
        );
      })}
    </div>
  );
} 