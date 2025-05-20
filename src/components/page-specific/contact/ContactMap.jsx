
import React from "react";

const ContactMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our office is located in Jalukbari, Guwahati. Feel free to visit us to discuss your travel plans.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=91.6906%2C26.1606%2C91.7106%2C26.1706&amp;layer=mapnik&amp;marker=26.1656,91.7006"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Namaste North East Office Location - Jalukbari, Guwahati"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
