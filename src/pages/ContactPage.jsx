
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ContactHero from "@/components/page-specific/contact/ContactHero";
import ContactInfo from "@/components/page-specific/contact/ContactInfo";
import ContactForm from "@/components/page-specific/contact/ContactForm";
import ContactMap from "@/components/page-specific/contact/ContactMap";


const ContactPage = () => {
  const location = useLocation();
  const phoneNumber = "8822608900";


  useEffect(() => {
    if (location.hash === "#booking-form-section") {
      const element = document.getElementById("contact-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pt-16 md:pt-20">
      <ContactHero />
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactInfo phoneNumber={phoneNumber} />
            <div id="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <Toaster />
    </div>
  );
};

export default ContactPage;
