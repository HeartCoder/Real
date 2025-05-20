
import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, MapPin, ArrowLeft, Clock, Sun, CloudRain, IndianRupee, CheckCircle, Tag, Sparkles, Hotel, Eye, Car } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getDestinationById } from "@/data/destinationsMaster";
import { cn } from "@/lib/utils";
import { getNewPriceDetails } from "@/lib/priceUtils";


const DestinationDetailPage = () => {
  const { stateKey, destinationId } = useParams();
  const destination = getDestinationById(stateKey, destinationId);
  const navigate = useNavigate();

  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";
  const whatsappBaseLink = `https://wa.me/${countryCode}${primaryPhoneNumber}?text=Hello%2C%20I'm%20interested%20in%20booking%20a%20trip%20to%20`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destinationId, stateKey]);

  const priceDetails = useMemo(() => {
    if (!destination) return { original: "", discounted: "" };
    return getNewPriceDetails(destination.duration, destination.id, destination.priceData);
  }, [destination]);


  if (!destination) {
    return (
      <div className="pt-20 md:pt-24 container mx-auto px-4 md:px-6 py-16 text-center">
        <motion.h1 
          initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }}
          className="text-4xl font-bold text-destructive mb-4"
        >Destination Not Found</motion.h1>
        <motion.p 
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 mb-8"
        >The destination you are looking for does not exist or has been moved.</motion.p>
        <Button onClick={() => navigate("/destinations")} className="bg-primary hover:bg-primary/90">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
        </Button>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = encodeURIComponent(destination.name + ".");
    window.open(whatsappBaseLink + message, '_blank');
  };

  const heroImage = destination.images[0]?.url || "https://images.unsplash.com/photo-1701104282696-a1a69064baa1";
  const durationDisplay = destination.duration.includes("Nights") ? destination.duration : `${destination.duration.match(/\d+/)[0]} Days / ${parseInt(destination.duration.match(/\d+/)[0],10) -1} Nights`;

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-br from-slate-100 via-stone-50 to-gray-100">
      <div className="relative h-[65vh] min-h-[400px] md:min-h-[550px] group">
        <Carousel className="w-full h-full" opts={{ loop: destination.images.length > 1 }}>
          <CarouselContent className="h-full">
            {destination.images.map((image, index) => (
                <CarouselItem key={index} className="h-full relative">
                  <img 
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                    alt={image.alt || `${destination.name} - Image ${index + 1}`}
                    src={image.url} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                   <div className="absolute bottom-10 left-10 text-white z-10 p-4 max-w-3xl">
                    {index === 0 && (
                      <>
                        <motion.h1 
                          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.6 }}
                          className="text-4xl md:text-6xl font-bold font-volkhov mb-2 shadow-text-md"
                        >{destination.name}</motion.h1>
                        <motion.p 
                          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.6 }}
                          className="text-lg md:text-xl text-gray-200 shadow-text-sm"
                        >{destination.tagline}</motion.p>
                      </>
                    )}
                    {index > 0 && image.text && (
                       <motion.p 
                        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5, duration:0.6 }}
                        className="text-sm md:text-base bg-black/30 backdrop-blur-sm p-2 rounded"
                       >{image.text}</motion.p>
                    )}
                  </div>
                </CarouselItem>
            ))}
          </CarouselContent>
          {destination.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none p-3 rounded-full transition-all" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none p-3 rounded-full transition-all" />
            </>
          )}
        </Carousel>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div 
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.5 }}
          className="mb-8 md:mb-12"
        >
          <Button variant="outline" onClick={() => navigate("/destinations")} className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Destinations
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <motion.div 
            className="lg:col-span-8 space-y-8 md:space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease:"easeOut" }}
          >
            <Card className="shadow-xl rounded-xl border border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-emerald-500/5 to-teal-500/5 p-6">
                <CardTitle className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">About {destination.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{destination.description}</p>
              </CardContent>
            </Card>

            {destination.itinerary && (
              <Card className="shadow-xl rounded-xl border border-gray-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 via-emerald-500/5 to-teal-500/5 p-6">
                  <CardTitle className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                    Suggested Itinerary 
                    {destination.itinerary.source !== "Guwahati (Local)" ? <span className="text-sm text-gray-500 font-normal"> (from {destination.itinerary.source})</span> : ""}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {destination.itinerary.days.map((day, index) => (
                      <div key={index} className="border-l-4 border-emerald-500 pl-5 py-3 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-lg text-primary mb-1.5">{day.day ? `Day ${day.day}: ` : ""}{day.title}</h4>
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
            transition={{ duration: 0.6, delay: 0.1, ease:"easeOut" }}
          >
            <Card className="shadow-xl rounded-xl border border-gray-200">
              <CardHeader className="bg-gray-50 p-5">
                <CardTitle className="text-xl font-semibold text-gray-800">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3.5 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-gray-700">State: <span className="font-medium">{stateKey.charAt(0).toUpperCase() + stateKey.slice(1)}</span></span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-gray-700">Duration: <span className="font-medium">{durationDisplay}</span></span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-gray-700">Best Time: <span className="font-medium">{destination.bestTime}</span></span>
                </div>
                {destination.itinerary && destination.itinerary.source !== "Guwahati (Local)" && (
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-primary" />
                    <span className="text-gray-700">Starts From: <span className="font-medium">{destination.itinerary.source}</span></span>
                  </div>
                )}
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-0.5">Package Price</p>
                  <div className="flex items-baseline space-x-2">
                     {priceDetails.original !== priceDetails.discounted && (
                       <span className="text-gray-500 line-through">{priceDetails.original}</span>
                     )}
                     <span className="text-2xl font-bold text-primary">{priceDetails.discounted}</span>
                  </div>
                   <p className="text-xs text-gray-700 font-medium">Per Person Approx.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl rounded-xl border border-gray-200">
              <CardHeader className="bg-gray-50 p-5">
                <CardTitle className="text-xl font-semibold text-gray-800">What's Included?</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-2.5 text-sm">
                {[
                  { icon: <Hotel className="h-5 w-5 mr-3 text-emerald-600" />, text: "Comfortable Accommodation" },
                  { icon: <Eye className="h-5 w-5 mr-3 text-emerald-600" />, text: "Guided Sightseeing Tours" },
                  { icon: <Car className="h-5 w-5 mr-3 text-emerald-600" />, text: "Private Vehicle & Transfers" },
                  { icon: <CheckCircle className="h-5 w-5 mr-3 text-emerald-600" />, text: "Permits & Entry Fees (as per itinerary)" },
                  { icon: <Sparkles className="h-5 w-5 mr-3 text-emerald-600" />, text: "Customizable Itinerary Options" },
                ].map(item => (
                  <div key={item.text} className="flex items-center">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Button size="xl" className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleBookNow}>
              Book This Destination
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
