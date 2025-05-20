
import React from "react";
import AboutHero from "@/components/page-specific/about/AboutHero";
import OurStory from "@/components/page-specific/about/OurStory";
import OurValues from "@/components/page-specific/about/OurValues";
import OurTeam from "@/components/page-specific/about/OurTeam";
import WhyChooseUs from "@/components/page-specific/about/WhyChooseUs";
import AboutCTA from "@/components/page-specific/about/AboutCTA";

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20">
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurTeam />
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
