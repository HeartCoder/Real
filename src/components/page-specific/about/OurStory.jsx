
import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-auto object-cover aspect-video"
                  alt="Scenic view of a temple, representing the cultural journey of Namaste North East"
                 src="/images/OurStory.jpg" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-4 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">Est. 2013</p>
                <p className="text-white text-sm">10+ Years of Excellence</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Namaste North East was born from a deep love for the breathtaking landscapes, rich cultural heritage, and warm hospitality of North East India. Founded in 2013, our journey began with a simple mission: to share the authentic beauty of this region with the world while supporting local communities.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small operation with just two vehicles and a handful of dedicated guides has grown into a comprehensive travel service provider. Over the years, we've had the privilege of introducing thousands of travelers to the wonders of Meghalaya, Arunachal Pradesh, and Assam.
            </p>
            <p className="text-gray-600 mb-6">
              Despite our growth, we remain committed to our founding principles of personalized service, authentic experiences, and responsible tourism. Every member of our team shares a passion for the region and a commitment to ensuring that our clients experience the very best of North East India.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-gray-600">Expert Guides</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-gray-600">Unique Destinations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
