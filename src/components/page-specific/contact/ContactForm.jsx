
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${countryCode}${primaryPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Message Prepared for WhatsApp",
        description: "Your message is ready to be sent via WhatsApp.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 border border-primary/20">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Send Us a Message</h2>
        <Form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <FormItem>
              <FormLabel className="text-gray-700">Full Name</FormLabel>
              <FormControl><Input name="name" value={formData.name} onChange={handleChange} placeholder="e.g., John Doe" className="border-gray-300 focus:border-primary focus:ring-primary" /></FormControl>
              {errors.name && <FormMessage>{errors.name}</FormMessage>}
            </FormItem>
            <FormItem>
              <FormLabel className="text-gray-700">Email Address</FormLabel>
              <FormControl><Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g., john.doe@example.com" className="border-gray-300 focus:border-primary focus:ring-primary" /></FormControl>
              {errors.email && <FormMessage>{errors.email}</FormMessage>}
            </FormItem>
            <FormItem>
              <FormLabel className="text-gray-700">Phone Number (Optional)</FormLabel>
              <FormControl><Input name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g., +91 9876543210" className="border-gray-300 focus:border-primary focus:ring-primary" /></FormControl>
            </FormItem>
            <FormItem>
              <FormLabel className="text-gray-700">Subject</FormLabel>
              <FormControl><Input name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g., Inquiry about Meghalaya Tour" className="border-gray-300 focus:border-primary focus:ring-primary" /></FormControl>
              {errors.subject && <FormMessage>{errors.subject}</FormMessage>}
            </FormItem>
            <FormItem>
              <FormLabel className="text-gray-700">Your Message</FormLabel>
              <FormControl><Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your travel plans or questions..." rows={5} className="border-gray-300 focus:border-primary focus:ring-primary" /></FormControl>
              {errors.message && <FormMessage>{errors.message}</FormMessage>}
            </FormItem>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
