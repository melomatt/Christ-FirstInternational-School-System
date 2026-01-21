"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-96 overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hsection.png"
          alt="Hero background"
          fill
          priority
          className="object-cover animate-zoom"
        />
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

      {/* Animated accent elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-zoom {
          animation: zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
