import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const mode = useSelector((state) => state.theme.mode);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef(null);
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/src/assets/hero/pizaa3.png",
    },
    {
      id: 2,
      image: "/src/assets/hero/pizaa1.png",
    },
    {
      id: 3,
      image: "/src/assets/hero/pizaa2.png",
    },
  ];

  // Auto slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);

  // Swipe Support
  const handleTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff > 75) {
      setDirection("prev");
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (diff < -75) {
      setDirection("next");
      setIndex((prev) => (prev + 1) % slides.length);
    }
    touchStart.current = null;
  };

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      ref={carouselRef}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className={`relative w-full overflow-hidden flex flex-col justify-center transition-all duration-700 ${
        mode === "light"
          ? "bg-white text-gray-800"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      {/* Image Carousel */}
      <div
        className="relative w-full h-[100vh]  overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 bg-black/30 backdrop-blur-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md border border-white/30 transition-all duration-500 hover:bg-black/60 hover:scale-110 group"
        >
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 bg-black/30 backdrop-blur-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md border border-white/30 transition-all duration-500 hover:bg-black/60 hover:scale-110 group"
        >
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slides */}
        {slides.map((slide, i) => {
          let position = "translate-x-full opacity-0 scale-110";
          if (i === index) position = "translate-x-0 opacity-100 scale-100 z-20";
          else if (direction === "next" && i === (index - 1 + slides.length) % slides.length)
            position = "-translate-x-full opacity-0 scale-110 z-10";
          else if (direction === "prev" && i === (index + 1) % slides.length)
            position = "translate-x-full opacity-0 scale-110 z-10";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out transform ${position}`}
            >
              <img
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full md:top-25  md:h-[80vh] lg:h-[100vh] mx-auto"
                loading="lazy"
              />
            </div>
          );
        })}

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-500 ${
                i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
