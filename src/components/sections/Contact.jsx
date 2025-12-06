"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
	return (
		<div
			id="contact"
			className="scroll-mt-20 px-6 py-20 flex flex-col items-center"
		>
			{/* Section Heading */}
			<div className="relative inline-block w-fit mb-10">
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-light uppercase tracking-widest text-gray-900 text-center">
					Contact
				</h1>

				{/* Thin Line */}
				<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-black"></div>
			</div>

			{/* Contact Form */}
			<form className="w-full max-w-3xl space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-200">
				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Name
					</label>
					<Input
						type="text"
						placeholder="Your Name"
						className="border-gray-300 focus:ring-2 focus:ring-black rounded-lg"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Email
					</label>
					<Input
						type="email"
						placeholder="you@example.com"
						className="border-gray-300 focus:ring-2 focus:ring-black rounded-lg"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Message
					</label>
					<Textarea
						placeholder="Write your message..."
						className="border-gray-300 focus:ring-2 focus:ring-black h-32 rounded-lg"
					/>
				</div>

				<Button
					type="submit"
					className="w-full bg-black text-white py-3 rounded-xl text-lg tracking-wider hover:bg-gray-900 transition-all"
				>
					Send Message
				</Button>
			</form>

			{/* Divider Line */}
			<hr className="mt-16 border-t-2 border-black w-full max-w-3xl" />
		</div>
	);
}
