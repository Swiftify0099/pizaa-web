// src/Contact.js
import React from "react";
import { useSelector } from "react-redux";
const Contact = () => {
    const mode = useSelector((state) => state.theme.mode);
    return (
        <div className={ `bg-gray-50 h-auto flex flex-col items-center px-6 py-16 transition-colors duration-300"
             ${ mode === "light"
                ? "bg-gray-50"
                : "bg-gray-800"
            }` }>
            {/* Page Heading */ }
            <h1 className={ `text-3xl md:text-4xl font-bold dark:text-gray-100 mb-4 text-center 
            ${ mode === "light"
                    ? "text-gray-800 "
                    : "text-white"
                } ` }>
                Contact Us
            </h1>
            <p className={ `text-white-600 dark:text-gray-300 max-w-2xl text-center mb-10  *: ${ mode === "light"
                ? "text-gray-700"
                : "text-gray-300"
                }  ` }>
                We’d love to hear from you! Fill out the form below or reach out to us
                through the provided contact details.
            </p>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Contact Form */ }
                <form className={ `bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4 transition-colors duration-300 
                ${ mode === "light"
                        ? "text-gray-700"
                        : "text-gray-300"
                    }` }>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Your message..."
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Information */ }
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-6 transition-colors duration-300">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Our Address
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            123 Main Street, City, Country
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Call Us
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Email
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            support@example.com
                        </p>
                    </div>

                    {/* Map Embed */ }
                    <div className="mt-6">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
                            width="100%"
                            height="200"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg border border-gray-300 dark:border-gray-700"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
