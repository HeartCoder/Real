
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Upload, Send } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PostTestimonial = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Image Too Large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

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

    if (imagePreview) {
      whatsappMessage += `\n(User has also uploaded an image. Please ask them to send it separately if needed.)`;
    }
    
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
    setImage(null);
    setImagePreview('');
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
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Priya Sharma" required className="border-gray-300 focus:border-primary focus:ring-primary"/>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location (City, Country)</label>
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Mumbai, India" className="border-gray-300 focus:border-primary focus:ring-primary"/>
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
                  <Textarea id="testimonial" value={text} onChange={(e) => setText(e.target.value)} placeholder="Share your amazing experience with us..." rows={5} required className="border-gray-300 focus:border-primary focus:ring-primary"/>
                </div>
                <div>
                  <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-1">Upload Photo (Optional)</label>
                  <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary transition-colors">
                    {imagePreview ? (
                      <div className="text-center">
                        <img src={imagePreview} alt="Preview" className="mx-auto h-24 w-auto rounded mb-2" />
                        <Button variant="link" size="sm" onClick={() => {setImage(null); setImagePreview('');}} className="text-xs text-red-500">Remove image</Button>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image-upload-input"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                          >
                            <span>Upload a file</span>
                            <input id="image-upload-input" name="image-upload-input" type="file" className="sr-only" onChange={handleImageChange} accept="image/png, image/jpeg, image/gif" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
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
