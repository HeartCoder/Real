
import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinationsData } from "@/data/destinationsMaster";
import { cn } from "@/lib/utils";
import DestinationCard from "@/components/page-specific/destinations/DestinationCard";
import DestinationsHero from "@/components/page-specific/destinations/DestinationsHero";
import DestinationsCTA from "@/components/page-specific/destinations/DestinationsCTA";

const DestinationsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-br from-slate-100 via-stone-50 to-gray-100">
      <DestinationsHero />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="meghalaya" className="w-full">
            <motion.div 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mb-10 md:mb-12"
            >
              <TabsList className="bg-white shadow-lg p-1.5 rounded-xl border border-gray-200">
                <TabsTrigger value="meghalaya" id="meghalaya-tab" className="text-sm md:text-base px-4 md:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300">Meghalaya</TabsTrigger>
                <TabsTrigger value="arunachal" id="arunachal-tab" className="text-sm md:text-base px-4 md:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300">Arunachal</TabsTrigger>
                <TabsTrigger value="assam" id="assam-tab" className="text-sm md:text-base px-4 md:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300">Assam</TabsTrigger>
              </TabsList>
            </motion.div>

            {Object.keys(destinationsData).map((stateKey) => (
              <TabsContent key={stateKey} value={stateKey} id={stateKey}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {destinationsData[stateKey].map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} stateKey={stateKey} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <DestinationsCTA />
    </div>
  );
};

export default DestinationsPage;
