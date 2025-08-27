"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react"; // still valid for phone
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // social icons

export default function Contact() {
    return (
        <div
            id="contact"
            className="scroll-mt-20  px-6 flex flex-col items-center "
        >
            {/* Section Heading */}
            <div className="relative inline-block w-fit mb-6">
                <h1 className="text-6xl md:text-7xl font-normal text-gray-800 uppercase tracking-wider text-center">
                    Contact
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black"></div>
            </div>

            {/* Contact Form */}
            <form className="w-full max-w-3xl space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input type="text" placeholder="Your Name" className="border-gray-400 focus:ring-2 focus:ring-black" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input type="email" placeholder="you@example.com" className="border-gray-400 focus:ring-2 focus:ring-black" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea placeholder="Write your message..." className="border-gray-400 focus:ring-2 focus:ring-black h-32" />
                </div>

                <Button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                    Send Message
                </Button>
            </form>
            <hr className="mt-16 border-t-2 border-black w-full max-w-3xl" />
        </div>
    );
}
