import React from "react";
import { Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-5   pb-6">
            {/* Contact Info */}
            <div className="text-center space-y-3">
                <p className="text-gray-600 text-sm">
                    Let’s connect and build something amazing together 🚀
                </p>
                <p className="text-gray-600 text-sm">
                    Reach me directly at{" "}
                    <a
                        href="mailto:shyam8patidar@email.com"
                        className="text-black font-medium hover:underline"
                    >
                        shyam8patidar@email.com
                    </a>
                </p>

                {/* Phone */}
                <div className="flex items-center justify-center gap-2 text-gray-700 text-sm">
                    <Phone className="w-4 h-4" />
                    <a
                        href="tel:+916263662870"
                        className="text-black font-medium hover:underline"
                    >
                        +91 6263662870
                    </a>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
                >
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
                >
                    <FaTwitter className="w-6 h-6" />
                </a>
            </div>

            {/* Copyright */}
            <p className="mt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Shyam Patidar. All rights reserved.
            </p>
        </footer>
    );
}
