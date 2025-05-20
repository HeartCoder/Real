
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Local Expertise", description: "Our team consists of locals who know every hidden gem and cultural nuance of the region." },
    { title: "Personalized Service", description: "We tailor each experience to your interests, preferences, and pace." },
    { title: "Quality Assurance", description: "We personally vet all accommodations, vehicles, and experiences to ensure high standards." },
    { title: "Responsible Tourism", description: "We prioritize environmental sustainability and support for local communities." },
    { title: "24/7 Support", description: "Our team is always available to assist you throughout your journey." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              With numerous travel options available, here's why Namaste North East stands out as your ideal partner for exploring North East India:
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                className="w-full h-auto object-cover aspect-square"
                alt="Tourists enjoying a guided tour in North East India"
               src="https://images.unsplash.com/photo-1581326002021-ba3f4abd127e" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
