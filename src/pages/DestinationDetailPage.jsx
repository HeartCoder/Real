import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CalendarDays, Users, ArrowLeft } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { destinationsData, getStateKeyForDestination } from "@/data/destinationsMaster";

const whatsappBaseLink = "https://wa.me/918822608900?text=I'm%20interested%20in%20booking%20a%20tour%20to%20";

const DestinationDetailPage = () => {
  const { stateKey: urlStateKey, destinationId } = useParams();
  const navigate = useNavigate();

  const stateKey = urlStateKey || getStateKeyForDestination(destinationId);
  const destination = destinationsData[stateKey]?.find(dest => dest.id === destinationId);

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-destructive mb-4"
        >
          Destination Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 mb-8"
        >
          The destination you are looking for does not exist or has been moved.
        </motion.p>
        <Button onClick={() => navigate("/destinations")} className="bg-primary hover:bg-primary/90">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
        </Button>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = encodeURIComponent(destination.name + ".");
    window.open(whatsappBaseLink + message, "_blank");
  };

  const durationDisplay = destination.duration.includes("Nights")
    ? destination.duration
    : `${destination.duration.match(/\d+/)[0]} Days / ${parseInt(destination.duration.match(/\d+/)[0], 10) - 1} Nights`;

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-br from-slate-100 via-stone-50 to-gray-100">
      {/* Fixed Aspect Ratio Image Slider */}
      <div className="relative w-full aspect-[16/9] bg-black">
        <Carousel
          className="w-full h-full"
          opts={{ loop: destination.images.length > 1 }}
        >
          <CarouselContent className="h-full">
            {destination.images.map((image, index) => (
              <CarouselItem key={index} className="h-full relative">
                <div className="w-full h-full aspect-[16/9] relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt || `${destination.name} - Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white z-10 p-4 max-w-3xl">
                    {index === 0 && (
                      <>
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="text-4xl md:text-6xl font-bold font-volkhov mb-2 shadow-text-md"
                        >
                          {destination.name}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="text-lg md:text-xl text-gray-200 shadow-text-sm"
                        >
                          {destination.tagline}
                        </motion.p>
                      </>
                    )}
                    {index > 0 && image.text && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-sm md:text-base bg-black/30 backdrop-blur-sm p-2 rounded"
                      >
                        {image.text}
                      </motion.p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {destination.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 p-2 rounded-full" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 p-2 rounded-full" />
            </>
          )}
        </Carousel>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          className="lg:col-span-8 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="shadow-xl rounded-xl border border-gray-200 mb-8">
            <CardHeader className="p-6">
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
                About {destination.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 text-lg">{destination.description}</p>
            </CardContent>
          </Card>

          {destination.itinerary && (
            <Card className="shadow-xl rounded-xl border border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-emerald-500/5 to-teal-500/5 p-6">
                <CardTitle className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Suggested Itinerary
                  {destination.itinerary.source !== "Guwahati (Local)" ? (
                    <span className="text-sm text-gray-500 font-normal">
                      {" "}
                      (from {destination.itinerary.source})
                    </span>
                  ) : (
                    ""
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {destination.itinerary.days.map((day, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-emerald-500 pl-5 py-3 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-lg text-primary mb-1.5">
                        {day.day ? `Day ${day.day}: ` : ""}
                        {day.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1.5 text-sm">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        <motion.div
          className="lg:col-span-4 space-y-6 md:space-y-8 sticky top-24"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Card className="shadow-xl rounded-xl border border-gray-200">
            <CardHeader className="bg-gray-50 p-5">
              <CardTitle className="text-xl font-semibold text-gray-800">
                Quick Facts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-3.5 text-sm">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-700">
                  State: <span className="font-medium">{stateKey.charAt(0).toUpperCase() + stateKey.slice(1)}</span>
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-700">
                  Duration: <span className="font-medium">{durationDisplay}</span>
                </span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-700">
                  Best Time: <span className="font-medium">{destination.bestTime}</span>
                </span>
              </div>
              {destination.itinerary && destination.itinerary.source !== "Guwahati (Local)" && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-gray-700">
                    Starts From: <span className="font-medium">{destination.itinerary.source}</span>
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            onClick={handleBookNow}
          >
            Book This Tour
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
