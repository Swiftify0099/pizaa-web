/**
 * ProfessionalFooter.jsx
 * Tailwind CSS based responsive, modern, professional footer with dark mode support.
 */

import React from 'react';
import { useSelector } from "react-redux";
import { CgNotes } from "react-icons/cg";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { BsShieldLockFill } from "react-icons/bs";

const Footer = () => {
    const mode = useSelector((state) => state.theme.mode);

    const socialLinks = [
        { name: "Facebook", icon: <Facebook />, href: "https://facebook.com" },
        { name: "Instagram", icon: <Instagram />, href: "https://instagram.com" },
        { name: "Twitter", icon: <Twitter />, href: "https://twitter.com" },
        { name: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com" },
        { name: "YouTube", icon: <Youtube />, href: "https://youtube.com" },
    ];

    return (
        <footer className={`relative border-t ${mode === "light" ? "bg-white text-gray-700 border-gray-200" : "bg-gray-800 text-gray-200 border-gray-700"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Brand Section */}
                    <div>
                        <h2 className={`text-2xl font-bold ${mode === "light" ? "text-gray-900" : "text-white"}`}>YourFirm</h2>
                        <p className={`mt-3 text-sm ${mode === "light" ? "text-gray-800" : "text-amber-300"}`}>
                            We design modern, scalable, and accessible interfaces for your business.
                        </p>
                        {/* Social Icons */}
                        <div className="flex mt-4 gap-3">
                            {socialLinks.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Section */}
                    <div>
                        <h3 className={`text-lg font-bold mb-4 ${mode === "light" ? "text-gray-900" : "text-white"}`}>Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Features</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Pricing</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Roadmap</a></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className={`text-lg font-bold mb-4 ${mode === "light" ? "text-gray-900" : "text-white"}`}>Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>About Us</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Careers</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className={`text-lg font-bold mb-4 ${mode === "light" ? "text-gray-900" : "text-white"}`}>Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Docs</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Community</a></li>
                            <li><a href="#" className={`transition-colors duration-300 hover:text-indigo-500 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>Blog</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    <p>© {new Date().getFullYear()} YourFirm. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 items-center">
                        <BsShieldLockFill className={`text-lg ${mode === "light" ? "text-black" : "text-green-400"}`} />
                        <a href="#" className={`hover:text-indigo-500 font-semibold ${mode === "light" ? "text-gray-800" : "text-gray-200"}`}>Privacy</a>
                        <CgNotes className={`text-lg ${mode === "light" ? "text-black" : "text-green-400"}`} />
                        <button className={`hover:text-indigo-500 font-semibold ${mode === "light" ? "text-gray-800" : "text-gray-200"}`}>Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
