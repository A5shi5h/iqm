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

const creatoThin = localFont({
  src: "../../public/fonts/CreatoDisplay-Thin.otf",
  variable: "--font-creato-thin",
});

{/* data of the team members */}
const featureData = [
    {
        name: "Dinesh Sharma",
        desc: "Mastermind behind bringing the essence of competitive exams to Sikkim",
        image: "/images/logo.jpg",
        role: "Founder & CEO at IQM" 
    },
    {
        name: "Subham Agarwal",
        desc: "Experienced Tech expert with 10+ years of experience in the industry leading the entire IQM tech to success",
        image: "/images/logo.jpg",
        role: "Tech Team Lead at IQM"
    },
    {
        name: "Aniruddha Bhattacherya",
        desc: "B.Tech Graduate with the expertise on design as well as content creation and managemen",
        image: "/images/anirudh.jpg",
        role: "Website Design Lead at IQM"
    },
    {
        name: "Ritesh Uprety",
        desc: "App Design Lead at IQM, creating intuitive mobile experiences that make learning seamless and engaging.",
        image: "/images/ritesh.jpg",
        role: "App Design Team Lead at IQM"
    },
    {
        name: "Nikchaya Lamsal",
        desc: "App Design Lead at IQM, creating intuitive mobile experiences that make learning seamless and engaging.",
        image: "/images/nikchaya.jpg",
        role: "App Design Team Lead at IQM"
    },
    {
        name: "Akhileshwar Pradhan",
        desc: "An aspiring polymathic perfectionist passionate about AI and content strategy.",
        image: "/images/akhileshwar.jpg",
        role: "Social Media team lead at IQM"
    },
    {
        name: "Jiya Kalita",
        desc: "A UI/UX Designer crafting intuitive and engaging digital experiences",
        image: "/images/jiya.jpg",
        role: "UI/UX Intern at IQM"
    },
    {
        name: "Jyotimoy Baishya",
        desc: "Visual artist focused on video editing, motion graphics, UI, and web design—crafting engaging and seamless digital experiences.",
        image: "/images/jyotimoy.jpg",
        role: "Graphics designer/Editor at IQM"
    },
    {
        name: "Payal Khanal",
        desc: "UI/UX and writing intern at IQM, creating clean designs and clear content. Always learning.",
        image: "/images/payal.jpg",
        role: "UI/UX Intern at IQM"
    },
    {
        name: "Atishay Jain",
        desc: "A pixel crusader that's coloring his own world bit by bit.",
        image: "/images/atishay.jpg",
        role: "UI/UX and Video Editing Intern at IQM"
    },
    {
        name: "Prabhanu Kharel",
        desc: "UI/UX intern and a technical writer intern at The Inquisitive Mind.",
        image: "/images/prabhanu.jpg",
        role: "UI/UX Intern, technical writer intern at IQM"
    },
    {
        name: "Harsh pal",
        desc: "UI/UX intern at IQM — a curious creative with a love for never-ending learning.",
        image: "/images/logo.jpg",
        role: "UI/UX Intern"
    },
    {
        name: "Kaustav Baruah",
        desc: "UI/UX and Video Editing Intern—Love for learning new things and implementing it for real life projects.",
        image: "/images/kaustabh.jpg",
        role: "UI/UX and Video Editing Intern"
    },
    {
        name: "Tshering Norbu",
        desc: "I am treading the path to learn and improve my understanding of User eXperience.",
        image: "/images/tshering.jpg",
        role: "UI/UX Intern"
    },
    {
        name: "Ashish Lamichaney",
        desc: "Experienced Backend Web Developer with 2+ years of experience in the industry",
        image: "/images/ashish.jpg",
        role: "Web Developer at IQM"
    },
];

export default function KeyFeatures() {
  return (
    <>
      {/* Stats */}
      <div className="max-w-6xl mx-auto text-center flex justify-center items-start gap-4 mb-20">
        {[
          { number: "6+", label: "Teachers" },
          { number: "10+", label: "Engineers" },
          { number: "5+", label: "Interns" },
        ].map(({ number, label }, idx, arr) => (
          <div key={idx} className="flex items-center">
            <div className="relative flex flex-col items-center">
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
            {idx < arr.length - 1 && (
              <Image
                src="/svgs/green border.svg"
                alt="Divider"
                width={40}
                height={40}
                className="mx-24 scale-180"
              />
            )}
          </div>
        ))}
      </div>

      <TreeCurveBanner />

      <section className="relative bg-[#106e63] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className={`${coolvetica.className} font-normal text-6xl text-center text-white mb-10`}>Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-36 p-12">

            {/* Feature Cards */}
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl px-6 py-8 text-center flex flex-col items-center justify-start shadow-gray-800"
              >
                <div className="rounded-full overflow-hidden mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3
                  className={`${sansation.className} text-xl sm:text-3xl font-normal mb-8`}
                >
                  {feature.name}
                </h3>
                <p
                  className={`${creatoThin.className} text-sm sm:text-lg font-bold mb-10`}
                >
                  {feature.role}
                </p>
                <p
                  className={`${sansation.className} text-sm sm:text-base font-normal`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
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
