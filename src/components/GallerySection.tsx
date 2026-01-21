"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images from public folder (11-38)
  const galleryImages = [
    { id: 1, category: "Students", title: "Student Moments 1", image: "/11.jpeg" },
    { id: 2, category: "Events", title: "School Event 1", image: "/12.jpeg" },
    { id: 3, category: "Administrators", title: "Leadership", image: "/13.jpeg" },
    { id: 4, category: "Programs", title: "Science Program", image: "/14.jpeg" },
    { id: 5, category: "Students", title: "Student Activities", image: "/15.jpeg" },
    { id: 6, category: "Programs", title: "Cultural Event", image: "/16.jpeg" },
    { id: 7, category: "Facilities", title: "School Campus", image: "/17.jpeg" },
    { id: 8, category: "Events", title: "Graduation Day", image: "/18.jpeg" },
    { id: 9, category: "Students", title: "Classroom 1", image: "/19.jpeg" },
    { id: 10, category: "Facilities", title: "Library", image: "/20.jpeg" },
    { id: 11, category: "Programs", title: "Sports Program", image: "/21.jpeg" },
    { id: 12, category: "Events", title: "Assembly", image: "/22.jpeg" },
    { id: 13, category: "Students", title: "Student Life", image: "/23.jpeg" },
    { id: 14, category: "Administrators", title: "Staff Meeting", image: "/24.jpeg" },
    { id: 15, category: "Facilities", title: "Playground", image: "/25.jpeg" },
    { id: 16, category: "Programs", title: "Arts Program", image: "/26.jpeg" },
    { id: 17, category: "Events", title: "Parent Meeting", image: "/27.jpeg" },
    { id: 18, category: "Students", title: "Group Photo", image: "/28.jpeg" },
    { id: 19, category: "Facilities", title: "Laboratory", image: "/29.jpeg" },
    { id: 20, category: "Programs", title: "Mathematics Class", image: "/30.jpeg" },
    { id: 21, category: "Events", title: "Prize Giving", image: "/31.jpeg" },
    { id: 22, category: "Students", title: "Team Work", image: "/32.jpeg" },
    { id: 23, category: "Administrators", title: "Administration", image: "/33.jpeg" },
    { id: 24, category: "Facilities", title: "Cafeteria", image: "/34.jpeg" },
    { id: 25, category: "Programs", title: "Language Classes", image: "/35.jpeg" },
    { id: 26, category: "Events", title: "Special Event", image: "/36.jpeg" },
    { id: 27, category: "Students", title: "Campus Life", image: "/37.jpeg" },
    { id: 28, category: "Facilities", title: "Main Building", image: "/38.jpeg" },
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
              {/* Actual Image */}
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

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
                <div className="w-full h-96 relative">
                  <Image
                    src={filteredImages[selectedImage]?.image}
                    alt={filteredImages[selectedImage]?.title}
                    fill
                    className="object-cover"
                  />
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
