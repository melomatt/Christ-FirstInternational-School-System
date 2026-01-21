"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images - replace with actual images later
  const galleryImages = [
    {
      id: 1,
      category: "Students",
      title: "Students in Classroom",
      image: "/placeholder-1.jpg",
    },
    {
      id: 2,
      category: "Events",
      title: "Annual Sports Day",
      image: "/placeholder-2.jpg",
    },
    {
      id: 3,
      category: "Administrators",
      title: "School Leadership",
      image: "/placeholder-3.jpg",
    },
    {
      id: 4,
      category: "Programs",
      title: "Science Program",
      image: "/placeholder-4.jpg",
    },
    {
      id: 5,
      category: "Students",
      title: "Student Activities",
      image: "/placeholder-5.jpg",
    },
    {
      id: 6,
      category: "Programs",
      title: "Cultural Event",
      image: "/placeholder-6.jpg",
    },
    {
      id: 7,
      category: "Facilities",
      title: "School Campus",
      image: "/placeholder-7.jpg",
    },
    {
      id: 8,
      category: "Events",
      title: "Graduation Ceremony",
      image: "/placeholder-8.jpg",
    },
  ];

  const categories = ["All", "Students", "Administrators", "Programs", "Events", "Facilities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="w-full py-20 px-4 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              School Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant community, talented students, and dynamic programs at CFIS
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-secondary to-secondary/90 text-gray-900 shadow-lg"
                  : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-xl border border-primary/20 cursor-pointer h-64 bg-primary/5"
            >
              {/* Placeholder - Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{image.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{image.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold mb-1">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 p-2 text-white hover:text-secondary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="bg-background rounded-xl overflow-hidden border border-primary/20">
                <div className="w-full h-96 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">Image placeholder</p>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-6 border-t border-primary/20">
                  <h3 className="text-xl font-bold mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground inline-block px-3 py-1 bg-secondary/10 rounded-full">
                    {filteredImages[selectedImage]?.category}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
                    )
                  }
                  className="px-4 py-2 bg-secondary text-gray-900 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1
                    )
                  }
                  className="px-4 py-2 bg-secondary text-gray-900 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
