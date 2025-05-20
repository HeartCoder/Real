
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative h-[50vh] min-h-[300px] md:min-h-[400px]">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover"
          alt="Namaste North East team in a scenic location"
         src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/4cd994e6029cd75d68572f7a05a3d5bf.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Namaste North East
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your trusted partner for authentic and memorable experiences in North East India.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
