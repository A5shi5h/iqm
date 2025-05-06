import { Fragment } from "react";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const coolvetica = localFont({
    src: "../../fonts/Coolvetica.ttf",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function About() {
    return (
        <Fragment>
            <section className={`relative w-full min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-24 bg-white ${inter.className}`}>
                <div className="text-center space-y-4 w-full max-w-4xl mt-20 md:mt-35">

                    <h1 className={`${coolvetica.className} text-4xl md:text-5xl lg:text-[64px] mb-6`}>
                        About Us
                    </h1>

                    <div className=" h-px bg-black mx-auto"></div>
                </div>

                <div className="mt-12 w-full max-w-4xl">
                    <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-center">
                        In the midst of the global pandemic, a need was felt. That need gave rise to IQM — a place where curiosity meets clarity.
                        What started as a problem has evolved into a mission: to make learning accessible, intuitive, and inspiring.
                    </p>
                </div>
            </section>
            
        </Fragment>
    );
}