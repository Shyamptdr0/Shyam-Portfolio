"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("");

		try {
			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbw_6sIBE_9IM1sOjnBEly6IsZkzb7zsTjXTmv1Vhm7gXkCbbcC1X0rWAyPToTPn7j6R/exec",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
					mode: "no-cors"
				}
			);

			setSubmitStatus("Message sent successfully!");
			setFormData({ name: "", phone: "", email: "", message: "" });
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
			setTimeout(() => setSubmitStatus(""), 5000);
		}
	};

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
			<form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-200">
				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Name
					</label>
					<Input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="border-gray-300 focus:ring-2 focus:ring-black rounded-lg"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Phone
					</label>
					<Input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Your Phone Number"
						className="border-gray-300 focus:ring-2 focus:ring-black rounded-lg"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Email
					</label>
					<Input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="you@example.com"
						className="border-gray-300 focus:ring-2 focus:ring-black rounded-lg"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-800 mb-1">
						Message
					</label>
					<Textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Write your message..."
						className="border-gray-300 focus:ring-2 focus:ring-black h-32 rounded-lg"
						required
					/>
				</div>

				{submitStatus && (
					<div className={`p-3 rounded-lg text-center ${
						submitStatus.includes("success") 
							? "bg-green-100 text-green-800" 
							: "bg-red-100 text-red-800"
					}`}>
					{submitStatus}
				</div>
				)}

				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-black text-white py-3 rounded-xl text-lg tracking-wider hover:bg-gray-900 transition-all disabled:bg-gray-400"
				>
					{isSubmitting ? "Sending..." : "Send Message"}
				</Button>
			</form>

			{/* Divider Line */}
			<hr className="mt-16 border-t-2 border-black w-full max-w-3xl" />
		</div>
	);
}
