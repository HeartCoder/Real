import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPinned, Car, BedDouble, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { destinationsData } from "@/data/destinationsMaster";
import DestinationCard from "@/components/page-specific/destinations/DestinationCard";

const Hero = () => {
  // Load 10 images dynamically for the carousel
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Package carousel state
  const allPackages = Object.entries(destinationsData).flatMap(([stateKey, destinations]) => 
    destinations.map(dest => ({ ...dest, stateKey }))
  );
  const [packageIndex, setPackageIndex] = useState(0);

  // WhatsApp configuration
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20tour.`;

  // Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Auto-slide packages every 4 seconds (showing 1 at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setPackageIndex((prev) => (prev + 1) % allPackages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [allPackages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextPackages = () => {
    setPackageIndex((prev) => (prev + 1) % allPackages.length);
  };

  const prevPackages = () => {
    setPackageIndex((prev) => (prev - 1 + allPackages.length) % allPackages.length);
  };

  const getCurrentPackage = () => {
    return allPackages[packageIndex];
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Image Carousel Section with Overlay Content */}
      <div className="relative w-full h-[70vh] overflow-hidden">
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

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content Overlay - Positioned Above Images */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Best Tours and Travel Agency in {" "}
                <span className="text-yellow-400">North East India</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl mx-auto">
                Namaste North East Tours & Travels is one of the best tours and travels agencies in Guwahati, providing reliable taxi services, Guwahati–Shillong cabs, airport transfers, and customized North East India tour packages. We cover Assam, Meghalaya, Arunachal Pradesh, and nearby destinations with professional drivers, clean vehicles, and affordable pricing.   
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap"
            >
              {/* Explore Destinations */}
              <button
                onClick={() => window.location.href = '/destinations'}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[160px]"
              >
                <MapPinned className="h-4 w-4" />
                Explore Destinations
              </button>

              {/* Book a Car */}
              <button
                onClick={() => window.location.href = '/services#car-rental'}
                className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[160px]"
              >
                <Car className="h-4 w-4" />
                Book a Car
              </button>

              {/* Book a Hotel */}
              <button
                onClick={() => window.location.href = '/services#accommodation'}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[160px]"
              >
                <BedDouble className="h-4 w-4" />
                Book a Hotel
              </button>

              {/* Book a Tour */}
              <button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[160px]"
              >
                <Send className="h-4 w-4" />
                Book a Tour
              </button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls for Images */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white p-2 transition-all duration-200"
        >
          <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white p-2 transition-all duration-200"
        >
          <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators for Images */}
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

      {/* Package Cards Carousel Section */}
      <div className="relative bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Featured <span className="text-blue-600">Travel Packages</span>
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Discover our handpicked destinations and start planning your dream adventure in North East India
            </p>
          </motion.div>

          {/* Package Cards Container - Single Card Display with Side Transition */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex justify-center max-w-sm mx-auto"
              key={packageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {getCurrentPackage() && (
                <DestinationCard 
                  destination={getCurrentPackage()} 
                  stateKey={getCurrentPackage().stateKey} 
                />
              )}
            </motion.div>

            {/* Navigation Controls for Packages */}
            <button
              onClick={prevPackages}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-blue-600/70 hover:text-blue-600 p-2 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-10 h-10 drop-shadow-lg" strokeWidth={3} />
            </button>
            
            <button
              onClick={nextPackages}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-blue-600/70 hover:text-blue-600 p-2 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-10 h-10 drop-shadow-lg" strokeWidth={3} />
            </button>
          </div>

          {/* Package Indicators - Updated for single card navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {allPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setPackageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  packageIndex === index
                    ? 'bg-blue-600 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* View All Packages Button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => window.location.href = '/destinations'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Packages
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
