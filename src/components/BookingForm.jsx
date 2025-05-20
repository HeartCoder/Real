
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    service: "",
    date: "",
    guests: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
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
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.destination) newErrors.destination = "Destination is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      // Show success message
      toast({
        title: "Booking Request Submitted",
        description: "We'll contact you shortly to confirm your booking details.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        service: "",
        date: "",
        guests: "",
        message: "",
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Adventure</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to start planning your perfect North East India experience.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 booking-form"
          >
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </FormControl>
                  {errors.name && <FormMessage>{errors.name}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                    />
                  </FormControl>
                  {errors.email && <FormMessage>{errors.email}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </FormControl>
                  {errors.phone && <FormMessage>{errors.phone}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">Select destination</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="arunachal">Arunachal Pradesh</option>
                      <option value="assam">Assam</option>
                      <option value="multiple">Multiple Destinations</option>
                    </Select>
                  </FormControl>
                  {errors.destination && <FormMessage>{errors.destination}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Service Required</FormLabel>
                  <FormControl>
                    <Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select service</option>
                      <option value="car-rental">Car Rental</option>
                      <option value="guided-tour">Guided Tour</option>
                      <option value="group-package">Group Package</option>
                      <option value="photography-tour">Photography Tour</option>
                      <option value="custom">Custom Package</option>
                    </Select>
                  </FormControl>
                  {errors.service && <FormMessage>{errors.service}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={format(new Date(), "yyyy-MM-dd")}
                    />
                  </FormControl>
                  {errors.date && <FormMessage>{errors.date}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">More than 10 People</option>
                    </Select>
                  </FormControl>
                  {errors.guests && <FormMessage>{errors.guests}</FormMessage>}
                </FormItem>
              </div>

              <FormItem className="mt-6">
                <FormLabel>Special Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about any special requirements or questions you have"
                    rows={4}
                  />
                </FormControl>
              </FormItem>

              <Button type="submit" className="w-full mt-6 bg-primary hover:bg-primary/90">
                Submit Booking Request
              </Button>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
