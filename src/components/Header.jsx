"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
	const navItems = ["home", "about", "skill", "projects", "contact"];
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full flex justify-between items-center py-4 px-6 md:px-12
                        bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm border-b">

			{/* Logo */}
			<h1 className="text-xl sm:text-2xl font-bold tracking-[3px] uppercase select-none">
				Shyam Patidar
			</h1>

			{/* Desktop Menu */}
			<ul className="hidden md:flex items-center gap-8">
				{navItems.map((item) => (
					<li key={item} className="group">
						<a
							href={`#${item}`}
							className="relative text-gray-700 uppercase tracking-wide text-sm
                                       transition-colors duration-200 group-hover:text-gray-800"
						>
							{item}
							{/* underline animation */}
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-600
                                              transition-all duration-300 group-hover:w-full"></span>
						</a>
					</li>
				))}
			</ul>

			{/* Mobile Menu Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden p-2 rounded-md focus:outline-none"
			>
				{isOpen ? <X size={26} /> : <Menu size={26} />}
			</button>

			{/* Mobile Dropdown */}
			<div
				className={`absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-xl shadow-md 
                           transition-all duration-300 md:hidden ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				<ul className="flex flex-col items-center gap-6 py-6">
					{navItems.map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								onClick={() => setIsOpen(false)}
								className="relative block text-gray-700 capitalize text-lg tracking-wide
                                           transition-colors duration-200 hover:text-blue-600"
							>
								{item}
								{/* mobile underline */}
								<span className="block w-0 h-[2px] bg-blue-600 transition-all duration-300 hover:w-full"></span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
