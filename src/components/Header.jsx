"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const navItems = ["home", "about", "skill", "projects", "contact"];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center py-5 border-b bg-white sticky top-0 z-50 shadow-md px-6 md:px-10">
            {/* Logo */}
            <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
                Shyam Patidar
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
                {navItems.map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item}`}
                            className="hover:bg-gray-400 rounded-sm transition-colors duration-200 capitalize p-2"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md focus:outline-none cursor-pointer"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-6">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-gray-400 rounded-sm transition-colors duration-200 capitalize p-2 block"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
