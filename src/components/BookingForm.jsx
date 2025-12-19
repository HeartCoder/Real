import React, { useState } from "react";
import { motion } from "framer-motion";
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
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.destination.trim()) newErrors.destination = "Destination is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.guests.trim()) newErrors.guests = "Number of guests is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Compose WhatsApp message
    const message = `New Booking Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Service: ${formData.service}
Preferred Date: ${formData.date}
Guests: ${formData.guests}
Notes: ${formData.notes || "N/A"}`;

    // Open WhatsApp chat
    const whatsappUrl = `https://wa.me/${countryCode}${primaryPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8 booking-form"
    >
      <h2 className="text-2xl font-bold mb-4 text-primary">Book Your Experience</h2>
      <p className="text-lg text-gray-600 mb-6">
        Fill out the form below to start planning your perfect North East India experience. You’ll be redirected to WhatsApp to complete your booking.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full border rounded px-3 py-2"
            />
            {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select destination</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Multiple">Multiple Destinations</option>
            </select>
            {errors.destination && <div className="text-red-500 text-sm">{errors.destination}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Service Required</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select service</option>
              <option value="Taxi Service">Taxi Service</option>
              <option value="Guided Tour">Guided Tour</option>
              <option value="Group Package">Group Package</option>
              <option value="Photography Tour">Photography Tour</option>
              <option value="Custom">Custom Package</option>
            </select>
            {errors.service && <div className="text-red-500 text-sm">{errors.service}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={format(new Date(), "yyyy-MM-dd")}
              className="w-full border rounded px-3 py-2"
            />
            {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3-5">3-5</option>
              <option value="6-10">6-10</option>
              <option value="10+">10+</option>
            </select>
            {errors.guests && <div className="text-red-500 text-sm">{errors.guests}</div>}
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Additional Notes (optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about your preferences, special requests, etc."
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 w-full bg-primary text-white font-bold py-3 rounded hover:bg-primary/90 transition-colors"
        >
          Book via WhatsApp
        </button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
