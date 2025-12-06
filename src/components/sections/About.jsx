import React from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
	return (
		<div
			id="about"
			className="scroll-mt-30 flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 mb-16"
		>
			{/* Heading */}
			<div className="relative inline-block w-fit mb-16">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                               font-light text-gray-900 uppercase tracking-[8px]">
					About
				</h1>

				{/* Circular Arrow */}
				<div className="absolute -bottom-10 -right-12 sm:-bottom-12 sm:-right-16
                                w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24
                                rounded-full border-2 border-gray-300
                                flex items-center justify-center shadow-md
                                bg-white">
					<ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-500" />
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-col md:flex-row md:justify-between gap-12">

				{/* Left Empty Space for Layout Balance */}
				<div className="hidden md:block md:w-1/2"></div>

				{/* About Text */}
				<div className="w-full md:w-1/2 text-left md:text-right">
					<p className="text-[13px] sm:text-lg md:text-xl leading-relaxed
                                   text-gray-700 max-w-xl md:ml-auto">
						I am a Full Stack Developer focused on building clean,
						modern, and scalable web applications.
						<br /><br />
						I completed my B.Tech from Medi-Caps University with a GPA of{" "}
						<span className="font-semibold text-gray-900">8.48</span>.
						<br /><br />
						I’m passionate about solving real-world challenges using
						intuitive UI, optimized backend systems, and modern tools.
						<br /><br />
						<span className="font-semibold text-gray-900">
                            Currently looking for exciting collaborations and projects.
                        </span>
					</p>

					{/* Bottom Line */}
					<div className="mt-6 w-full md:ml-auto">
						<hr className="border-t-2 border-black" />
					</div>
				</div>
			</div>
		</div>
	);
}
