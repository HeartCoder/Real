import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPinned, Car, BedDouble, Send } from "lucide-react";

const Hero = () => {
  // Load 10 images dynamically for the carousel
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);

  // WhatsApp configuration
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20tour.`;

  // Auto-slide every 5 seconds
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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      {/* Image Carousel Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`North East India landscape ${index + 1}`}
            className={`absolute w-full h-full object-cover ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section - Below Images */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover the Magic of{" "}
              <span className="text-yellow-400">North East India</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Experience the untouched beauty, rich culture, and breathtaking landscapes of Meghalaya, Arunachal Pradesh, and Assam with our premium travel services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            {/* Explore Destinations */}
            <button
              onClick={() => window.location.href = '/destinations'}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <MapPinned className="h-5 w-5" />
              Explore Destinations
            </button>

            {/* Book a Car */}
            <button
              onClick={() => window.location.href = '/services#car-rental'}
              className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <Car className="h-5 w-5" />
              Book a Car
            </button>

            {/* Book a Hotel */}
            <button
              onClick={() => window.location.href = '/services#accommodation'}
              className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <BedDouble className="h-5 w-5" />
              Book a Hotel
            </button>

            {/* Book a Tour */}
            <button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <Send className="h-5 w-5" />
              Book a Tour
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
