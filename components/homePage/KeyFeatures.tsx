"use client";

import Image from "next/image";
import localFont from "next/font/local";

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

export default function KeyFeatures() {
  return (
    <>
      {/* Top Curve with Trees */}
      <TreeCurveBanner />

      {/* Main Content Section */}
      <section className="relative bg-[#106e63] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 auto-rows-auto gap-6">
            <div className="relative h-[30rem] bg-black rounded-4xl col-span-2 row-span-2 items-center justify-center p-6">
              <h2
                className={`${coolvetica.className} text-white text-6xl font-normal text-center pt-4`}
              >
                Our <span className="underline text-[#1fc1a9]">Key</span> Features
              </h2>
              <Image
                src="/images/keyFeature.svg"
                alt="Key Feature"
                height={300}
                width={300}
                className="w-full h-[90%]"
              />
              <Image
                src="/images/teaching.png"
                alt="Teaching"
                height={400}
                width={400}
                className="absolute top-25 left-25 scale-90"
              />
            </div>

            {/* Feature Cards */}
            <FeatureCard
              title="Expert Mentorship"
              desc="Get guidance from the best teachers having 5+ years of experience"
              icon="/images/mentorship.jpg"
            />
            <FeatureCard
              title="Online/Offline Classes"
              desc="Whether you're from Sikkim or any corner of India, our classes are always accessible to you"
              icon="/images/online-classes.jpg"
            />
            <FeatureCard
              title="Weekly Mock Tests"
              desc="Weekend mock tests to sharpen your skills and stay prepared"
              icon="/images/mock-tests.jpg"
            />
            <FeatureCard
              title="24/7 Doubt Clearence"
              desc="Stuck on a problem? We’re here 24/7 to help you out—day or night"
              icon="/images/doubt-clearence.jpg"
            />
          </div>
        </div>
        
         {/* Bottom Curve */}
          <div className="relative">
            <Image 
              src="/images/curve.svg"
              alt="Bottom Curve"
              height={100}
              width={100}
              className="w-full rotate-180 absolute bottom-[-100px] z-31"
            />
          </div>

          {/* Bottom Curve Border */}
          <div className="relative">
            <Image 
              src="/images/curve-border.svg"
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
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-4xl p-6 shadow flex flex-col items-center text-center">
      <div className="bg-[#92c6bb] rounded-full p-4 mb-4">
        <Image
          src={icon}
          alt={title}
          height={100}
          width={100}
          className="w-10 h-10"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function TreeCurveBanner() {
  const treePositions = ["10%", "20%", "75%", "85%"];

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      
      {/* Top curve */}
      <Image 
        src="/images/curve.svg"
        alt="Background Curve"
        height={100}
        width={100}
        className="w-full absolute top-40 z-31"
      />
      
      {/* Top curve Border */}
      <Image 
        src="/images/curve-border.svg"
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
            src="/images/tree.svg"
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



