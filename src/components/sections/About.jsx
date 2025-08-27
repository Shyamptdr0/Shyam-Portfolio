import React from "react";
import { ArrowRight } from "lucide-react"; // using lucide-react icons

export default function About() {
    return (
        <div
            id="about"
            className="scroll-mt-30 flex flex-col px-6 sm:px-10 mb-10"
        >
            {/* Section Heading with Circle */}
            <div className="relative inline-block w-fit mb-8 sm:mb-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-800 uppercase tracking-wider">
                    About
                </h1>
                {/* Circle with Arrow (attached to heading) */}
                <div className="absolute -bottom-8 -right-10 sm:-bottom-12 sm:-right-14 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-gray-400 border-2 flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400" />
                </div>
            </div>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                {/* Empty space / Heading side (Left) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* About Text (Right side - aligned to top) */}
                <div className="w-full md:w-1/2 text-left md:text-right mt-5">
                    <p className="text-[12px] sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-xl md:ml-auto uppercase">
                        I am a Full Stack Developer with a passion for building responsive,
                        scalable web applications.
                        <br />
                        B.Tech from Medi-Caps University with a GPA of{" "}
                        <span className="font-semibold">8.48</span>. <br />
                        I enjoy solving real-world problems through technology and love
                        exploring modern tools to build clean, efficient, and user-centric
                        products.
                        <br />
                        <span className="font-semibold text-gray-900">
              Currently seeking opportunities to collaborate on exciting
              projects.
            </span>
                    </p>

                    {/* Black Line */}
                    <hr className="mt-6 border-t-2 border-black w-full md:ml-auto" />
                </div>
            </div>
        </div>
    );
}
