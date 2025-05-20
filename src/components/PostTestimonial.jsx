import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Send } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PostTestimonial = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !text) {
      toast({
        title: "Missing Fields",
        description: "Please fill in your name, rating, and testimonial text.",
        variant: "destructive",
      });
      return;
    }

    let whatsappMessage = `New Testimonial Submission:
Name: ${name}
Location: ${location || 'Not provided'}
Rating: ${rating} / 5
Testimonial: ${text}`;

    const whatsappUrl = `https://wa.me/${countryCode}${primaryPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Testimonial Prepared for WhatsApp!",
      description: "Thank you! Your testimonial is ready to be sent via WhatsApp.",
    });

    setName('');
    setLocation('');
    setRating(0);
    setText('');
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
            Share Your Adventure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your stories inspire us and fellow travelers. We'd love to hear about your journey with Namaste North East!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto shadow-2xl rounded-xl border border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-emerald-500/5 to-teal-500/5 p-6">
              <CardTitle className="text-2xl text-center font-semibold text-primary">Write Your Testimonial</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Priya Sharma" required className="border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location (City, Country)</label>
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Mumbai, India" className="border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating <span className="text-red-500">*</span></label>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <Star
                          key={starValue}
                          className={`h-8 w-8 cursor-pointer transition-colors ${
                            starValue <= (hoverRating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 hover:text-yellow-300'
                          }`}
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial <span className="text-red-500">*</span></label>
                  <Textarea id="testimonial" value={text} onChange={(e) => setText(e.target.value)} placeholder="Share your amazing experience with us..." rows={5} required className="border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" /> Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PostTestimonial;