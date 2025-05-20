
import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20services.`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
