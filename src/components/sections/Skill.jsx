import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui card

// List of skills
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
        <div id="skill" className="scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-10 py-12">
            {/* Section Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[90px] font-light uppercase tracking-wider text-center mb-6 sm:mb-8">
                Skills that I have
            </h1>

            {/* Description */}
            <p className="text-[12px] sm:text-base md:text-lg font-light uppercase tracking-widest text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                I specialize in building modern, scalable web applications with a strong
                foundation in both <span className="font-semibold">frontend</span> and{" "}
                <span className="font-semibold">backend</span> development. My expertise
                spans working with{" "}
                <span className="font-semibold">Full Stack Web Development</span>,
                designing responsive user interfaces, managing databases, and deploying
                production-ready applications.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-200"
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8">
                            <span className="text-2xl sm:text-3xl md:text-4xl mb-3">{skill.icon}</span>
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 text-center">
                                {skill.name}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
