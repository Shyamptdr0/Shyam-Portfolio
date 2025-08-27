"use client";

import Image from "next/image";
import heroImg from "../../../public/image.png";

export default function Hero() {
    return (
        <section
            id="home"
            className="scroll-mt-20 relative flex flex-col items-center justify-center  mt-5 md:min-h-screen px-6 md:px-12 lg:px-[25px]  mb-12 rounded-lg"
        >
            {/* Big Background Text */}
            <h2 className="relative text-[40px] sm:text-[50px] md:text-[90px] lg:text-[120px] xl:text-[140px] font-bold uppercase tracking-widest text-black/90 leading-tight text-center z-0">
                {/* Left white vignette */}
                <span className="absolute left-0 top-0 h-full w-8 sm:w-20 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

                {/* Actual Text */}
                Explore My <br /> Portfolio

                {/* Right white vignette */}
                <span className="absolute right-0 top-0 h-full w-8 sm:w-20 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
            </h2>

            {/* Foreground PNG Image with TOP Drop Shadow */}
            <div className="relative z-10 -mt-4 sm:-mt-14 md:-mt-16">
                <Image
                    src={heroImg}
                    alt="Hero Image"
                    // width={500}
                    // height={450}
                    priority
                    className="object-contain filter drop-shadow-[0_-15px_25px_rgba(0,0,0,0.5)] max-h-[200px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] w-auto"
                />
            </div>

            {/* Left Side - About Me */}
            <div className="md:absolute relative left-[5%] top-[70%] mt-10 sm:top-[65%] md:top-[55%] md:max-w-[180px] sm:max-w-[220px] md:max-w-[250px] text-left z-20">
                <p className="text-sm sm:text-md md:text-lg text-gray-600 leading-relaxed uppercase">
                    I am passionate about creating websites that stand out from the crowd.
                </p>
            </div>

            {/* Right Side - Skills List */}
            <div className="absolute right-[4%] top-[40%] sm:top-[65%] md:top-[60%] space-y-2 sm:space-y-3 md:space-y-4 text-right z-20">
                {[
                    "Frontend",
                    "Backend",
                    "Web Design",
                    "Web Development",
                ].map((skill, i) => (
                    <p
                        key={i}
                        className="text-[9px] sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium tracking-wide"
                    >
                        {skill}
                    </p>
                ))}
            </div>
        </section>
    );
}
