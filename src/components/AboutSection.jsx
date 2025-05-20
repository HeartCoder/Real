
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    "Experienced local guides with deep cultural knowledge",
    "Well-maintained vehicles for comfortable travel",
    "Customized itineraries to match your interests",
    "24/7 customer support during your trip",
    "Authentic cultural experiences and interactions",
    "Eco-friendly and sustainable tourism practices"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img   
                  className="w-full h-auto object-cover aspect-[4/3]" 
                  alt="Scenic view of a temple in North East India"
                 src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/721d56ccaa0c7911e29571ceaa83b820.jpg" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-4 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">10+ Years</p>
                <p className="text-white text-sm">of Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Namaste North East</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for showcasing the beauty and culture of North East India, Namaste North East has been providing exceptional travel experiences since 2013. Our team consists of local experts who know every corner of this magnificent region.
            </p>
            <p className="text-gray-600 mb-6">
              We specialize in creating personalized travel experiences that connect you with the authentic culture, breathtaking landscapes, and warm hospitality of Meghalaya, Arunachal Pradesh, and Assam. Our mission is to promote sustainable tourism that benefits local communities while providing unforgettable adventures for our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
