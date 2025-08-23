import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // load 10 images dynamically
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);

  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Image Slider */}
      <div className="relative w-full h-[400px]">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="absolute w-full h-full object-cover rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Prev & Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Text + Buttons Below Images */}
      <div className="text-center mt-6">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Our Site
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore our amazing features and services
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-2xl shadow-lg hover:bg-gray-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
