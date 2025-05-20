
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const CallToAction = () => {
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20tour.`;
  const callLink = `tel:${countryCode}${phoneNumber}`;

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Explore the Wonders of North East India?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Let us help you plan an unforgettable journey. Contact us today for personalized tour packages and expert advice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary/90 border-2 border-white"
            onClick={() => window.open(callLink, '_blank')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Book via Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary/90 border-2 border-white"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Book via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
