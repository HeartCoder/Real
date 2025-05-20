
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqsData = [
  {
    question: "What is the best time to visit North East India?",
    answer: "The best time to visit North East India is from October to May. The weather is pleasant during these months with clear skies, making it ideal for sightseeing and outdoor activities. However, if you want to experience the monsoon beauty, especially in Meghalaya (known as the wettest place on Earth), you can visit between June and September."
  },
  {
    question: "Do I need special permits to visit certain areas?",
    answer: "Yes, some areas in Arunachal Pradesh and certain parts of other North Eastern states require special permits for tourists. Inner Line Permits (ILP) are needed for domestic tourists, while foreign tourists need Protected Area Permits (PAP). Our team will assist you in obtaining all necessary permits as part of our service."
  },
  {
    question: "What types of vehicles do you offer for rental?",
    answer: "We offer a range of well-maintained vehicles including compact cars, SUVs, and luxury vehicles. For larger groups, we also provide tempo travelers and mini-buses. All our vehicles come with experienced drivers who are familiar with the terrain and local customs."
  },
  {
    question: "Are your tours suitable for families with children?",
    answer: "Absolutely! We offer family-friendly tours with activities suitable for all ages. We can customize itineraries to include more child-friendly activities and ensure comfortable accommodations for families. Just let us know your requirements when booking."
  },
  {
    question: "How far in advance should I book my tour?",
    answer: "We recommend booking at least 2-3 months in advance, especially during peak tourist seasons (October-November and March-May). This ensures availability of good accommodations and allows time for any permit processing. For last-minute bookings, please contact us directly to check availability."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, bank transfers, and popular digital payment platforms. A deposit is required to confirm your booking, with the balance payable before the start of your tour. We'll provide detailed payment instructions after your initial inquiry."
  }
];

const FAQPage = () => {
  return (
    <div className="pt-20 md:pt-24 bg-gray-50"> {/* Added padding top */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about traveling in North East India and our services.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqsData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg">
            Still have questions? Feel free to{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              contact us
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
