
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Pankaj Ahuja",
    location: "Delhi",
    rating: 5,
    text: "Our trip to Meghalaya was absolutely magical! The living root bridges and waterfalls were breathtaking. Namaste North East team was knowledgeable and friendly, making the experience even better.",
    imagePlaceholder: "man-with-specs" 
  },
  {
    id: 2,
    name: "Priyanka Ghosh",
    location: "Kolkata",
    rating: 5,
    text: "The taxi service was excellent. The vehicle was clean and well-maintained, and our driver knew all the best spots. Exploring Kaziranga was a dream come true thanks to Namaste North East!",
    imagePlaceholder: "woman-smiling"
  },
  {
    id: 3,
    name: "Sanjib Gogoi",
    location: "Guwahati",
    rating: 5,
    text: "As a photographer, the Dawki River tour arranged by Namaste North East was perfect. Crystal clear waters and amazing landscapes. The team went above and beyond to ensure I got the best shots.",
    imagePlaceholder: "man-ethnic"
  }
];

const Testimonials = () => {
  const getProfileImage = (placeholder) => {
    switch (placeholder) {
      case "man-with-specs":
        return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60";
      case "woman-smiling":
        return "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60";
      case "man-ethnic":
        return "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60";
      default:
        return "https://images.unsplash.com/photo-1598932324015-91232f2bca84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600"
          >
            Voices of Our Voyagers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Hear from fellow travelers who've discovered the wonders of North East India with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full testimonial-card bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <CardHeader className="pb-4 bg-gradient-to-br from-primary/10 to-emerald-500/5 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full overflow-hidden h-16 w-16 border-2 border-primary p-0.5">
                      <img  
                        className="h-full w-full object-cover rounded-full" 
                        alt={`${testimonial.name} profile picture`}
                        src={getProfileImage(testimonial.imagePlaceholder)} 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 italic text-base leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
