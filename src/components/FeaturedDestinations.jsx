
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { getStateKeyForDestination, getFeaturedDestinations } from "@/data/destinationsMaster";


const FeaturedDestinations = () => {
  const navigate = useNavigate();
  const featured = getFeaturedDestinations();

  const imageMap = {
    "cherrapunji": "/images/doubledecker.jpg",
    "tawang": "/images/tawang.jpg",
    "kaziranga-national-park": "/images/kaziranga.jpg",
    "dawki": "/images/dawki.jpg",
  };


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most breathtaking locations across North East India, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((destination, index) => {
            const stateKey = getStateKeyForDestination(destination.id);
            if (!stateKey) return null;
            
            return (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden destination-card h-full flex flex-col">
                 <Carousel className="w-full relative">
                    <CarouselContent>
                      <CarouselItem className="relative h-48">
                        <img 
                          className="w-full h-full object-cover"
                          alt={destination.images[0]?.alt || `${destination.name} image`}
                         src={imageMap[destination.id] || destination.images[0]?.url || "https://images.unsplash.com/photo-1492714284113-6e74f3a3d95c" } />
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                <CardHeader className="pb-2">
                  <CardTitle>{destination.name}</CardTitle>
                   <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1 text-primary" />
                      <span>{stateKey.charAt(0).toUpperCase() + stateKey.slice(1)}</span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
                    {destination.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => navigate(`/destinations/${stateKey}/${destination.id}`)}>Explore More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )})}
        </div>

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button className="bg-primary hover:bg-primary/90">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
