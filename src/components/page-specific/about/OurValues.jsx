
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Connection",
    description: "We believe in creating meaningful connections between travelers and local communities, fostering cultural exchange and understanding."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Excellence in Service",
    description: "We are committed to providing exceptional service at every touchpoint, from planning to execution, ensuring memorable experiences."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Passion for North East",
    description: "Our deep love for the region drives us to continuously explore and share its hidden treasures with our clients."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Responsible Tourism",
    description: "We practice and promote sustainable tourism that respects the environment and benefits local communities."
  }
];

const OurValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Namaste North East.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 mx-auto">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
