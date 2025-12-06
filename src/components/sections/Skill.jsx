import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Skills List
const skills = [
	{ name: "HTML5", icon: "🌐" },
	{ name: "CSS3", icon: "🎨" },
	{ name: "JavaScript", icon: "⚡" },
	{ name: "React.js", icon: "⚛️" },
	{ name: "Next.js", icon: "⏭️" },
	{ name: "Node.js", icon: "🟢" },
	{ name: "Express.js", icon: "🚀" },
	{ name: "MongoDB", icon: "🍃" },
];

export default function Skill() {
	return (
		<div
			id="skill"
			className="scroll-mt-20 min-h-screen px-6 sm:px-10 py-16"
		>
			{/* Section Heading */}
			<h1 className="text-4xl sm:text-5xl md:text-7xl font-light uppercase tracking-widest text-center mb-10">
				Skills That I Have
			</h1>

			{/* Description */}
			<p className="text-[12px] sm:text-base md:text-lg font-light uppercase tracking-[0.25em] text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-14">
				Expertise in <span className="font-semibold">frontend</span> and{" "}
				<span className="font-semibold">backend</span> technologies.
				Building clean UI, scalable APIs, and full production-ready applications.
			</p>

			{/* Skills Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
				{skills.map((skill, index) => (
					<Card
						key={index}
						className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl border border-gray-200 bg-white"
					>
						<CardContent className="flex flex-col items-center justify-center p-8">
              <span className="text-3xl sm:text-4xl md:text-5xl mb-4 transform group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </span>
							<h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 text-center tracking-wide">
								{skill.name}
							</h3>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
