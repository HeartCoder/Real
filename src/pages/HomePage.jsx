
import React from "react";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm"; 
import PostTestimonial from "@/components/PostTestimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedDestinations />
      <Services />
      <Testimonials />
      <PostTestimonial />
      <CallToAction />
      <FAQ />
      <div id="booking-form-section">
        <BookingForm />
      </div>
    </>
  );
};

export default HomePage;
