import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const Home6 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className={`bg-white mt-6 p-10 m-20 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col`}
    >
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-10 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden w-72 flex-shrink-0 transition-transform duration-300 ${
                i === index ? "scale-105" : "scale-100"
              }`}
            >
              {/* Image */}
              <div className="w-full h-48">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center justify-between text-center shadow-2xl shadow-orange-500/50">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {slide.title}
                </h3>
                <button className="bg-orange-500 relative left-20 mt-5 hover:bg-orange-600 text-white text-sm font-medium rounded-full px-5 py-1 transition-all shadow-md">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                i === index ? "bg-orange-500 scale-125" : "bg-gray-400 dark:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};




export const Home5 = ({ data = [], tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [data]);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className={`mt-12 px-6 py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200`}
    >
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-center mb-10 tracking-wide dark:text-white">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl overflow-hidden w-72 flex-shrink-0 transition-all duration-500 ${
                i === index ? "scale-105 shadow-orange-400/60" : "scale-95 opacity-90"
              } hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/40`}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 text-center flex flex-col items-center justify-between">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {slide.description || "Explore our exclusive feature crafted for you."}
                </p>
                <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full px-6 py-2 transition-all shadow-md hover:shadow-orange-500/40">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-orange-500 scale-125"
                  : "bg-gray-400/70 dark:bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};





export const Home4 = ({ data = [], tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  // Scroll to active slide
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 340,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className={`relative overflow-hidden py-16 px-8 md:px-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black`}
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* Section Title */}
      <h2 className="relative text-4xl font-extrabold text-center mb-14 tracking-wide text-gray-800 dark:text-white">
        {tital}
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth pb-6"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`relative group w-80 flex-shrink-0 rounded-3xl overflow-hidden backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-700 ${
                i === index ? "scale-105" : "scale-95 opacity-85"
              } hover:scale-105 hover:shadow-[0_8px_40px_rgb(255,165,0,0.25)]`}
            >
              {/* Image with gradient overlay */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="absolute top-40 left-0 right-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl p-5 rounded-t-3xl shadow-inner transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {slide.description ||
                    "Experience innovation, design, and technology blended seamlessly."}
                </p>
                <button className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-sm rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-300">
                  Explore
                </button>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-orange-400/60 transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 scale-125 shadow-md"
                  : "bg-gray-400/70 dark:bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};



export const Home4Left = ({ data = [], title }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 360, // card width + gap
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div className="relative overflow-hidden py-14 px-6 md:px-14 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        {title}
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Row */}
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`group flex-shrink-0 w-[360px] h-[260px] rounded-2xl overflow-hidden border border-white/10 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl shadow-[0_6px_25px_rgb(0,0,0,0.25)] transition-all duration-700 ${
                i === index ? "scale-100 opacity-100" : "scale-95 opacity-90"
              } hover:scale-105`}
            >
              <div className="flex h-full">
                {/* Image Left */}
                <div className="flex-shrink-0 w-1/2 h-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content Right */}
                <div className="flex-1 flex flex-col justify-center px-4 md:px-6 py-3">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {slide.description ||
                      "Experience innovation, design, and technology seamlessly."}
                  </p>
                  <button className="text-sm md:text-base bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 scale-125 shadow-md"
                  : "bg-gray-400/70 dark:bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};


export const Home4Right = ({ data = [], title }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000); // Slightly slower for better UX
    return () => clearInterval(interval);
  }, [data]);

  // Smooth scroll when index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 380, // Slightly increased for better spacing
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div className="relative overflow-hidden py-16 px-6 md:px-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full blur-3xl opacity-40 dark:from-orange-900/20 dark:to-amber-900/20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 dark:from-blue-900/20 dark:to-cyan-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Row */}
          <div
            ref={carouselRef}
            className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          >
            {data.map((slide, i) => (
              <div
                key={slide.id || i}
                className={`group flex-shrink-0 w-[480px] h-[300px] rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
                  i === index 
                    ? "scale-105 opacity-100 shadow-2xl ring-2 ring-orange-500/20" 
                    : "scale-95 opacity-85"
                } hover:scale-[1.02] hover:shadow-xl hover:opacity-100`}
              >
                <div className="flex h-full w-[100%]">
                  {/* Content Section - Left */}
                  <div className="flex-1 flex flex-col justify-between p-6 md:p-7">
                    <div>
                      {/* Badge/Category */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 border border-orange-200 dark:border-orange-800 mb-4">
                        <span className="text-xs font-medium text-orange-700 dark:text-orange-300">
                          Featured
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                        {slide.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-2">
                        {slide.description ||
                          "Experience innovation, design, and technology seamlessly."}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button className="group relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:from-orange-600 hover:to-amber-600 w-fit">
                      <span className="absolute right-0 top-0 w-4 h-4 -mt-1 -mr-1 transition-all duration-300 ease-in-out rotate-45 bg-white opacity-10 group-hover:w-12 group-hover:h-12 group-hover:-mt-3 group-hover:-mr-3"></span>
                      <span className="absolute left-0 top-0 w-4 h-4 -mt-1 -ml-1 transition-all duration-300 ease-in-out -rotate-45 bg-white opacity-10 group-hover:w-12 group-hover:h-12 group-hover:-mt-3 group-hover:-ml-3"></span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full bg-white/10 group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white font-semibold transition-colors duration-300 ease-in-out flex items-center">
                        Explore
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Image Section - Right */}
                  <div className="flex-shrink-0 w-[30%] h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-30 h-40 object-cover transition-transform duration-700 group-hover:scale-110 relative left-3 top-[20%]"
                    />
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative w-12 h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30"
                    : "bg-gray-300/70 dark:bg-gray-600/70 hover:bg-gray-400"
                }`}
              >
                <span className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium transition-all duration-300 ${
                  i === index 
                    ? "text-orange-600 dark:text-orange-400 opacity-100" 
                    : "text-gray-500 opacity-0"
                }`}>
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setIndex((prev) => (prev + 1) % data.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};




export const Home3 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 340,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className={`bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-10 md:p-16 rounded-3xl shadow-lg mt-10 transition-all duration-500`}
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent tracking-wide">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth px-4 md:px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`relative backdrop-blur-xl bg-white/60 dark:bg-gray-800/50 rounded-3xl border border-gray-200/40 dark:border-gray-700/50 shadow-xl w-80 flex-shrink-0 overflow-hidden transition-all duration-700 ${
                i === index ? "scale-105 shadow-orange-400/40" : "scale-100 opacity-90"
              } hover:scale-105 hover:shadow-amber-400/40 hover:opacity-100`}
            >
              {/* Image Section */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 tracking-wide">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {slide.description || "Discover our latest offerings crafted with precision."}
                </p>
                <button className="mt-5 px-8 py-2 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-xl">
                  View
                </button>
              </div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-amber-400/40 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 scale-125 shadow-md"
                  : "bg-gray-400/60 dark:bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};




export const Home2 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (!carouselRef.current || data.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [data]);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-8 p-8 md:p-12 mx-4 md:mx-20 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500`}
    >
      {/* Enhanced Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 tracking-tight">
          {tital}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
      </div>

      {/* Enhanced Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth px-4 py-6"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl w-80 flex-shrink-0 overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 group ${
                i === index 
                  ? "scale-105 shadow-2xl ring-2 ring-orange-400/20" 
                  : "scale-100 hover:scale-105"
              } hover:shadow-xl hover:ring-1 hover:ring-orange-400/30`}
            >
              {/* Enhanced Image Section */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Improved Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>

              {/* Enhanced Card Content */}
              <div className="p-6 flex flex-col justify-between min-h-[180px]">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white tracking-tight leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                    {slide.description || "Discover our latest offerings crafted with precision and expertise for exceptional results."}
                  </p>
                </div>
                
                {/* Enhanced Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Available</span>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm rounded-xl px-6 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0">
                    View Details
                  </button>
                </div>
              </div>

              {/* Professional Hover Effects */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 dark:ring-gray-600/20 group-hover:ring-orange-400/30 transition-all duration-500 pointer-events-none" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-12 h-2 rounded-full transition-all duration-500 overflow-hidden ${
                i === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg scale-110"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            >
              {/* Progress Bar Animation for Active Dot */}
              {i === index && (
                <div className="absolute top-0 left-0 h-full bg-white/30 animate-pulse-slide rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};




export const Home = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemWidth, setItemWidth] = useState(328); // Default desktop width

  // Update item width based on screen size
  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth < 640) { // Mobile
        setItemWidth(window.innerWidth * 0.85); // 85% of screen width
      } else if (window.innerWidth < 768) { // Tablet
        setItemWidth(280);
      } else if (window.innerWidth < 1024) { // Small desktop
        setItemWidth(300);
      } else { // Large desktop
        setItemWidth(328);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  // Auto-scroll with hover pause
  useEffect(() => {
    if (!carouselRef.current || data.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [data, isHovered]);

  // Scroll to center the current slide
  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const children = carousel.children;
    if (!children[index]) return;

    const child = children[index];
    const childLeft = child.offsetLeft;
    const childWidth = child.offsetWidth;
    const carouselWidth = carousel.offsetWidth;

    // Center the current slide
    const scrollPosition = childLeft - (carouselWidth / 2 - childWidth / 2);

    carousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [index, itemWidth, data]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className={`relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-4 sm:mt-6 lg:mt-8 p-4 sm:p-6 lg:p-8 xl:p-16 mx-auto rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-700 max-w-7xl w-full`}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-full blur-2xl sm:blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-l from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-2xl sm:blur-3xl opacity-40 translate-x-1/4 sm:translate-x-1/3 translate-y-1/4 sm:translate-y-1/3"></div>

        {/* Enhanced Header Section */}
        <div className="relative text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Featured Collection
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight px-2">
            {tital}
          </h2>

          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <div className="w-12 h-0.5 sm:w-16 sm:h-1 lg:w-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-12 h-0.5 sm:w-16 sm:h-1 lg:w-20 bg-gradient-to-l from-gray-300 to-gray-400 rounded-full"></div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-4">
            Discover our premium selection of expertly crafted solutions designed for exceptional performance and reliability.
          </p>
        </div>

        {/* Enhanced Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-700 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-700 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Mobile Arrows */}
          <div className="sm:hidden flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 z-20 px-2">
            {/* <button
              onClick={prevSlide}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl w-8 h-8 flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}
            <button
              onClick={nextSlide}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl w-8 h-8 flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-hidden scroll-smooth px-2 sm:px-4 py-4 sm:py-6 lg:py-8"
            style={{ scrollbarWidth: "none" }}
          >
            {data.map((slide, i) => (
              <div
                key={slide.id || i}
                className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl flex-shrink-0 overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 group cursor-pointer
                  ${window.innerWidth < 640 ? 'w-[85vw] mx-2' : 'w-64 sm:w-72 md:w-80 lg:w-80'} 
                  ${i === index 
                    ? 'scale-105 shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-orange-400/30 transform -translate-y-1 sm:-translate-y-2' 
                    : 'scale-100 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2'
                  } hover:shadow-xl sm:hover:shadow-2xl hover:ring-1 sm:hover:ring-2 hover:ring-orange-400/20`}
              >
                {/* Image Section */}
                <div className={`relative w-full ${window.innerWidth < 640 ? 'h-40' : 'h-44 sm:h-48 lg:h-56'} overflow-hidden`}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-5">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg backdrop-blur-sm">
                      PREMIUM
                    </span>
                  </div>
                  {/* <div className="absolute top-3 sm:top-4 right-3 sm:right-5 bg-black/50 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    {i + 1}/{data.length}
                  </div> */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs sm:text-sm font-medium">In Stock</span>
                      </div> */}
                      {/* <div className="flex space-x-1 sm:space-x-2">
                        <button className="bg-white/20 backdrop-blur-md text-white p-1 sm:p-2 rounded-lg hover:bg-white/30 transition-colors text-xs">
                          ♡
                        </button>
                        <button className="bg-white/20 backdrop-blur-md text-white p-1 sm:p-2 rounded-lg hover:bg-white/30 transition-colors text-xs">
                          ⚡
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className={`p-4 sm:p-5 lg:p-7 flex flex-col justify-between ${window.innerWidth < 640 ? 'min-h-[140px]' : 'min-h-[160px] sm:min-h-[180px]'}`}>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className={`font-bold text-gray-800 dark:text-white tracking-tight leading-tight ${window.innerWidth < 640 ? 'text-lg' : 'text-xl sm:text-2xl'}`}>
                        {slide.title}
                      </h3>
                      <div className="flex items-center text-amber-500 text-sm sm:text-base">
                        ★★★★☆
                      </div>
                    </div>
                    {/* <p className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 line-clamp-2 ${window.innerWidth < 640 ? 'text-xs' : 'text-sm sm:text-base'}`}>
                      {slide.description || "Discover our latest offerings crafted with precision and expertise for exceptional results."}
                    </p> */}
                    {/* <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                        Advanced
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                        Secure
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                        Fast
                      </span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 lg:pt-5 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 dark:text-gray-400">From</span>
                      <span className={`font-bold text-gray-800 dark:text-white ${window.innerWidth < 640 ? 'text-base' : 'text-lg sm:text-xl'}`}>
                        $99.99 
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                        {/* <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg> */}
                      </button>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 lg:py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-1px] sm:hover:translate-y-[-2px] active:translate-y-0 flex items-center gap-1 sm:gap-2 group text-xs sm:text-sm">
                        <span>Explore</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Rings */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl ring-1 ring-white/20 dark:ring-gray-600/20 group-hover:ring-orange-400/30 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Progress & Dots */}
          <div className="flex flex-col items-center mt-8 sm:mt-10 lg:mt-12 space-y-4 sm:space-y-6">
            <div className="w-full max-w-xs sm:max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((index + 1) / data.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Can't find what you're looking for?
          </p>
          <button className="bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 hover:from-gray-700 hover:to-gray-600 text-white font-semibold rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-1px] sm:hover:translate-y-[-2px] text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};


