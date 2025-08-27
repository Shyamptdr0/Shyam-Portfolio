"use client";
import React from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

export default function Projects() {
    return (
        <div id="projects" className="scroll-mt-30 min-h-screen px-4 sm:px-6 md:px-10 py-12">
            {/* Section Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[90px] text-gray-700 font-light uppercase tracking-wider text-center mb-8 sm:mb-12">
                Featured Project
            </h1>

            {/* Tabs */}
            <Tabs defaultValue="mobile" className="max-w-6xl mx-auto">
                <TabsList className="flex flex-row justify-center items-center bg-transparent gap-4 sm:gap-6 mb-10">
                    <TabsTrigger
                        value="mobile"
                        className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-full border border-gray-400 text-base sm:text-lg md:text-xl font-semibold transition cursor-pointer
              data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black"
                    >
                        Mobile App
                    </TabsTrigger>
                    <TabsTrigger
                        value="web"
                        className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-full border border-gray-400 text-base sm:text-lg md:text-xl font-semibold transition cursor-pointer
              data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black"
                    >
                        Web Design
                    </TabsTrigger>
                </TabsList>

                {/* Mobile Projects */}
                <TabsContent value="mobile">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Furniture App</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Cross-platform furniture shopping app.</p>
                        </div>
                        <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Solar App</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Mobile app for solar energy monitoring.</p>
                        </div>
                    </div>
                </TabsContent>

                {/* Web Projects */}
                <TabsContent value="web">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Portfolio Website</h3>
                            <p className="text-gray-600 text-sm sm:text-base">A modern portfolio built with Next.js.</p>
                        </div>
                        <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">E-commerce Store</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Full-stack MERN-based store platform.</p>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
