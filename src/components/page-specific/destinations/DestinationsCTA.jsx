
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DestinationsCTA = () => {
  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${primaryPhoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20trip.`;

  const handleBookTrip = () => {
     window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-emerald-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 font-volkhov"
        >
          Ready to Explore These Amazing Destinations?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Let us craft your perfect North East India itinerary. Contact us today for personalized packages and expert guidance. Your adventure starts here!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="xl" className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleBookTrip}>
            Book Your Dream Trip Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsCTA;
