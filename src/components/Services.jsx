
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Car Rental",
    description: "Choose from our fleet of well-maintained vehicles with experienced drivers who know the region well.",
    icon: <Car className="h-10 w-10 text-primary" />,
    link: "/services#car-rental",
    imageSlug: "/images/CarRental1.jpg"
  },
  {
    id: 2,
    title: "Tour Packages",
    description: "Special packages for groups and individuals with customized itineraries and exclusive experiences.",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/services#tour-packages",
    imageSlug: "/images/Homebackground1.jpg" 
  },
  {
    id: 3,
    title: "Accommodation",
    description: "Stay in carefully selected hotels, homestays, and resorts that offer authentic experiences.",
    icon: <Hotel className="h-10 w-10 text-primary" />,
    link: "/services#accommodation",
    imageSlug: "/images/Accomodation.jpg"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of travel services to make your North East India experience memorable and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full service-card">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={service.link} className="w-full">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
