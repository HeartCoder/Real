
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <div className="relative h-[40vh] min-h-[300px]">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover"
          alt="Contact Namaste North East"
         src="https://images.unsplash.com/photo-1588399330577-792433750fe0" />
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            We're here to answer your questions and help you plan your perfect North East India adventure.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHero;
