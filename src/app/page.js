"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skill from "@/components/sections/Skill";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <main className="scroll-smooth">
            <Header />

            {/* Wrap sections with margin */}
            <div className="md:ml-20 md:mr-20 mr-10 ml-10 ">
                <Hero />
                <About />
                <Skill />
                <Projects />
                <Contact />
            </div>

            <Footer/>
        </main>
    );
}
