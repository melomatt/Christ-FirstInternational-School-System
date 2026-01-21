"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    "/hsection.png",
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="relative w-full h-screen min-h-96 overflow-hidden" id="home">
      {/* Carousel Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Hero slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-start px-4 md:px-8 lg:px-16 pt-4">
        <div className="max-w-3xl space-y-6">
          {/* Decorative Line */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Welcome</span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-white via-secondary/80 to-white bg-clip-text text-transparent drop-shadow-lg">
              Welcome to Christ First
            </span>
            <span className="block bg-gradient-to-r from-secondary/90 via-white to-secondary/90 bg-clip-text text-transparent drop-shadow-lg mt-2">
              International School System
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light max-w-2xl">
            <span className="inline-block">Fostering excellence through</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-secondary/80 to-secondary/60 bg-clip-text text-transparent font-semibold">faith, innovation, and global citizenship</span>
          </p>

          {/* CTA Button */}
          <button className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore More
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setAutoPlay(false);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-secondary w-8 h-3"
                : "bg-white/40 hover:bg-white/60 w-3 h-3"
            }`}
          />
        ))}
      </div>

      {/* Animated accent elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </section>
  );
}
