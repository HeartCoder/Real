
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  const primaryPhoneNumber = "8822608900";
  const secondaryPhoneNumber = "7086936300";
  const countryCode = "+91";
  
  const numericPhoneNumberPrimary = primaryPhoneNumber.replace(/\s/g, '');
  const numericPhoneNumberSecondary = secondaryPhoneNumber.replace(/\s/g, '');

  const emailAddress = "namastenortheast2000@gmail.com";

  const whatsappLink = `https://wa.me/${countryCode}${numericPhoneNumberPrimary}?text=Hello%2C%20I'm%20interested%20in%20your%20services.`;
  const callLinkPrimary = `tel:${countryCode}${numericPhoneNumberPrimary}`;
  const callLinkSecondary = `tel:${countryCode}${numericPhoneNumberSecondary}`;
  const mailLink = `mailto:${emailAddress}`;

  const contactDetails = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: "Our Location", lines: [{ text: "Jalukbari, Guwahati, Assam 781013" }] },   
 { 
      icon: <Phone className="h-6 w-6 text-primary" />, 
      title: "Call Us", 
      lines: [
        { text: `${countryCode} ${primaryPhoneNumber}`, link: callLinkPrimary },
        { text: `${countryCode} ${secondaryPhoneNumber}`, link: callLinkSecondary }
      ] 
    },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: "Email Address", lines: [{text: emailAddress, link: mailLink}] },
    { icon: <MessageCircle className="h-6 w-6 text-primary" />, title: "WhatsApp Us", lines: [{text: `Chat on ${countryCode} ${primaryPhoneNumber}`, link: whatsappLink, target: "_blank"}]},
    { icon: <Clock className="h-6 w-6 text-primary" />, title: "Business Hours", lines: [{text: "Monday - Saturday: 9:00 AM - 7:00 PM"}, {text: "Sunday: 10:00 AM - 4:00 PM"}] },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/namastenortheastghy", icon: <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: "Instagram", href: "https://www.instagram.com/namaste_northeast_/", icon: <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882-.344-1.857.048-1.023.058-1.351.058-3.807v-.468c0-2.456-.01-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Have questions or ready to plan your North East adventure? Reach out to us! Our dedicated team is here to assist you with personalized travel plans, taxi services, and any inquiries you might have.
      </p>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{detail.title}</h3>
              {detail.lines.map((lineItem, lineIndex) => (
                lineItem.link ? (
                  <a 
                    key={lineIndex} 
                    href={lineItem.link} 
                    className="text-gray-600 hover:text-primary transition-colors block"
                    target={lineItem.target || "_self"}
                    rel={lineItem.target === "_blank" ? "noopener noreferrer" : ""}
                  >
                    {lineItem.text}
                  </a>
                ) : (
                  <p key={lineIndex} className="text-gray-600">{lineItem.text}</p>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-4 text-primary">Follow Our Journey</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors transform hover:scale-110">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
