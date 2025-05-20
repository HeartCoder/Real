
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20tour.`;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Beautiful landscape of North East India"
         src="/images/Hero.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover the Magic of <span className="text-primary">North East India</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Experience the untouched beauty, rich culture, and breathtaking landscapes of Meghalaya, Arunachal Pradesh, and Assam with our premium travel services.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/destinations">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                Explore Destinations
              </Button>
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                Book a Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
