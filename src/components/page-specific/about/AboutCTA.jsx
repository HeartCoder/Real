
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience North East India with Us?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Let our team of experts create the perfect journey for you.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
