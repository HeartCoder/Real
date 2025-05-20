import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { getNewPriceDetails } from "@/lib/priceUtils";

const DestinationCard = ({ destination, stateKey }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/destinations/${stateKey}/${destination.id}`);
  };

  const cardImage = destination.images[0]?.url || "https://images.unsplash.com/photo-1492714284113-6e74f3a3d95c";
  
  const priceDetails = useMemo(
    () => getNewPriceDetails(destination.duration, destination.id, destination.priceData),
    [destination.duration, destination.id, destination.priceData]
  );

  const durationDisplay = destination.duration.includes("Nights")
    ? destination.duration
    : `${destination.duration.match(/\d+/)[0]} Days / ${parseInt(destination.duration.match(/\d+/)[0], 10) - 1} Nights`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <Card className="overflow-hidden destination-card h-full flex flex-col bg-white shadow-lg rounded-xl border border-transparent hover:border-primary transition-all duration-300 ease-in-out transform hover:shadow-2xl">
        {/* Fixed image size and cropping */}
        <div className="relative flex justify-center items-center overflow-hidden" style={{ height: "200px" }}>
          <img
            className="w-48 h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
            alt={destination.images[0]?.alt || `${destination.name} image`}
            src={cardImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {destination.bestTime.split('(')[0].trim()}
          </div>
          {destination.id === "meghalaya-kaziranga-explorer" && (
            <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center">
              <Sparkles className="h-3 w-3 mr-1" /> SPECIAL
            </div>
          )}
        </div>
        
        <CardHeader className="p-5 pb-3">
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
            {destination.name}
          </CardTitle>
          <CardDescription className="text-xs text-emerald-600 font-medium uppercase tracking-wider">
            {destination.tagline}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow p-5 pt-0">
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-center text-gray-700">
              <CalendarDays className="h-4 w-4 mr-2 text-primary" />
              {durationDisplay}
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              {destination.itinerary?.source || "Customizable Pickup"}
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
              Best Time: {destination.bestTime}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 flex flex-col space-y-2">
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-lg font-bold text-primary mr-2">
                {priceDetails.discounted}
              </span>
              {priceDetails.original !== priceDetails.discounted && (
                <span className="text-gray-400 line-through text-base">
                  {priceDetails.original}
                </span>
              )}
            </div>
            <Button onClick={handleViewDetails} size="sm" className="bg-primary hover:bg-primary/90 text-white">
              View Details
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;