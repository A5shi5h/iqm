import Image from "next/image";
import localFont from "next/font/local";

const coolvetica = localFont({
  src: "../public/fonts/Coolvetica.ttf",
  variable: "--font-creato-thin",
});

export default function KeyFeatures() {
  return (
    <>
      {/* Top Curve */}
      <div className="bg-transparent">
        <div className="-mb-px bg-[#106e63] overflow-hidden leading-none">
          <svg
            className="w-full h-[100px]"
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="relative bg-[#106e63] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 auto-rows-auto gap-6">
            <div className="relative h-[30rem] bg-black rounded-4xl col-span-2 row-span-2 items-center justify-center p-6">
              <h2
                className={`${coolvetica.className} text-white text-6xl font-normal text-center pt-4`}
              >
                Our <span className="underline text-[#1fc1a9]">Key</span>{" "}
                Features
              </h2>
              <Image
                src="/images/keyFeature.svg"
                alt="Teaching"
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
              icon="/icon-mentor.svg"
            />
            <FeatureCard
              title="Online/Offline Classes"
              desc="Whether you're from Sikkim or any corner of India, our classes are always accessible to you"
              icon="/icon-online.svg"
            />
            <FeatureCard
              title="Weekly Mock Tests"
              desc="Weekend mock tests to sharpen your skills and stay prepared"
              icon="/icon-test.svg"
            />
            <FeatureCard
              title="24/7 Doubt Clearence"
              desc="Stuck on a problem? We’re here 24/7 to help you out—day or night"
              icon="/icon-support.svg"
            />
          </div>
        </div>
      </section>

      {/* Bottom Curve */}
      <div className="bg-transparent">
        <div className="-mt-px bg-[#106e63] overflow-hidden leading-none">
          <svg
            className="block w-full h-[100px]"
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
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
