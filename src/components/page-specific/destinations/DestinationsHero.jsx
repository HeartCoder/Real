
import React from "react";
import { motion } from "framer-motion";

const DestinationsHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[350px] md:min-h-[500px] group">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          alt="Panoramic view of North East India mountains and valleys with a misty atmosphere"
          src="/images/DestinationHero.jpg" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-sky-900/50 to-emerald-700/30 z-10"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight shadow-text-lg font-volkhov"
        >
          Discover Your <span className="text-primary">Next Adventure</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Journey through the breathtaking landscapes of Meghalaya, the spiritual highlands of Arunachal, and the wild heart of Assam. Unforgettable experiences await.
        </motion.p>
      </div>
    </div>
  );
};

export default DestinationsHero;
