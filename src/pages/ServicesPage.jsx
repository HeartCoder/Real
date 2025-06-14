
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Car, Users, Hotel, CheckCircle, ShieldCheck, MapPin as LucideMapPin, Star } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const servicesData = {
  "car-rental": {
    title: "Car Rental Services",
    tagline: "Travel Comfortably and Safely",
    description: "Explore North East India at your own pace with our reliable car rental services. We offer a diverse fleet of well-maintained vehicles, from comfortable sedans for small groups to spacious SUVs for families and adventurers. All our vehicles come with experienced and courteous drivers who are well-versed with local routes and attractions, ensuring a smooth and enjoyable journey.",
    features: [
      "Wide range of vehicles (Sedans, SUVs, Tempo Travellers)",
      "Experienced and professional drivers",
      "Flexible rental periods (daily, weekly, monthly)",
      "Airport pick-up and drop-off services",
      "Customizable itineraries and multi-city travel options",
      "Transparent pricing with no hidden charges",
      "24/7 customer support for on-road assistance"
    ],
    images: [
      { src: "/images/CarRental1.jpg", alt: "Comfortable SUV for North East tours" },
      { src: "/images/CarRental2.jpg", alt: "Spacious Innova car covered in snow" },
      { src: "/images/CarRental1.jpg", alt: "White Innova car parked outdoors" },
      { src: "/images/CarRental2.jpg", alt: "White Innova car covered in snow, different angle" },
    ],
    icon: <Car className="h-12 w-12 text-primary" />
  },
  "tour-packages": {
    title: "Customized Tour Packages",
    tagline: "Your Dream North East Adventure Awaits",
    description: "Discover the magic of North East India with our thoughtfully curated tour packages. Whether you're seeking thrilling adventures, cultural immersions, or serene nature retreats, we have something for everyone. Our packages cover popular destinations across Assam, Meghalaya, Arunachal Pradesh, and more. We specialize in creating personalized itineraries tailored to your interests, budget, and travel style.",
    features: [
      "Individual, family, and group packages",
      "Themed tours: Adventure, Culture, Wildlife, Honeymoon",
      "Accommodation in handpicked hotels and homestays",
      "Guided sightseeing with knowledgeable local guides",
      "All-inclusive options (meals, permits, transfers)",
      "Special interest tours (Photography, Birdwatching, Festivals)",
      "Flexible and customizable itineraries"
    ],
    images: [
      { src: "/images/Homebackground1.jpg", alt: "Group of tourists enjoying a scenic view in Ziro Valley" },
      { src: "/images/Homebackground3.jpg", alt: "Happy travelers on an adventure tour" },
      { src: "/images/AboutNorthEast.jpg", alt: "Breathtaking landscape of North East India" }
    ],
    icon: <Users className="h-12 w-12 text-primary" />
  },
  "accommodation": {
    title: "Accommodation Services",
    tagline: "Comfortable Stays, Authentic Experiences",
    description: "We partner with a wide range of accommodation providers to offer you the best places to stay during your North East India tour. From luxury hotels and boutique resorts to cozy homestays and eco-friendly lodges, we ensure your stay is comfortable, safe, and enhances your travel experience. Let us help you find the perfect accommodation that suits your preferences and budget.",
    features: [
      "Wide selection of hotels, resorts, and homestays",
      "Verified and trusted accommodation partners",
      "Options for all budgets (Luxury, Mid-range, Budget)",
      "Focus on safety, hygiene, and comfort",
      "Authentic local experiences through homestays",
      "Assistance with bookings and special requests",
      "Recommendations based on your itinerary and interests"
    ],
    images: [
      { src: "/images/Accomodation.jpg", alt: "Cozy homestay in a serene location in Dawki" },
      { src: "/images/DestinationsPage.jpg", alt: "Luxurious hotel room with a view" },
      { src: "/images/Accomodation.jpg", alt: "Eco-friendly resort amidst nature" }
    ],
    icon: <Hotel className="h-12 w-12 text-primary" />
  }
};

const ServiceSection = ({ serviceId, data }) => {
  const navigateToContact = () => {
    const phoneNumber = "8822608900";
    const countryCode = "+91";
    const message = encodeURIComponent(`Hello, I'm interested in your ${data.title}.`);
    window.open(`https://wa.me/${countryCode}${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id={serviceId} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {data.icon && <div className="mb-4">{data.icon}</div>}
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">{data.title}</h2>
            <p className="text-lg text-gray-500 mb-6">{data.tagline}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{data.description}</p>
            <ul className="space-y-3 mb-8">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={navigateToContact}>
              Enquire Now
            </Button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Carousel className="w-full max-w-xl mx-auto shadow-xl rounded-lg overflow-hidden" opts={{ loop: data.images.length > 1 }}>
              <CarouselContent>
                {data.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {data.images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 p-2 rounded-full" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 p-2 rounded-full" />
                </>
              )}
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const ServicesPage = () => {
  const location = useLocation();
  const phoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20services.`;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleBookService = () => {
     window.open(whatsappLink, '_blank');
  };

  return (
    <div className="pt-16 md:pt-20">
      <div className="relative h-[50vh] min-h-[300px] md:min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover"
            alt="Our services banner showing travel elements"
            src="/images/umiamlake.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our Travel Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Tailored experiences for an unforgettable journey through North East India. From car rentals to complete tour packages, we've got you covered.
            </motion.p>
          </div>
        </div>
      </div>

      <ServiceSection serviceId="car-rental" data={servicesData["car-rental"]} />
      <div className="border-t border-gray-200"></div>
      <ServiceSection serviceId="tour-packages" data={servicesData["tour-packages"]} />
      <div className="border-t border-gray-200"></div>
      <ServiceSection serviceId="accommodation" data={servicesData["accommodation"]} />

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Namaste North East?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card>
              <CardHeader className="items-center">
                <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Trusted services with a focus on safety and customer satisfaction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <LucideMapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In-depth knowledge of the region for authentic experiences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <Star className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personalized itineraries tailored to your preferences and budget.</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleBookService}>
            Plan Your Trip With Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
