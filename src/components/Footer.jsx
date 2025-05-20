
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailAddress = "booking@namastenortheast.in";
  const primaryPhoneNumber = "+91 88226 08900";
  const secondaryPhoneNumber = "+91 70869 36300";

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: <Facebook size={20} />, href: "https://www.facebook.com/namastenortheastghy" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "https://www.instagram.com/namaste_northeast_/" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="text-3xl font-bold text-white font-volkhov mb-4 inline-block">
              Namaste <span className="text-primary">North East</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for exploring the enchanting landscapes and vibrant cultures of North East India. We offer tailored tours, reliable car rentals, and unforgettable experiences.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 bg-gray-700 hover:bg-primary/20 p-2 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg text-white mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-white mb-5">Contact Info</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <span>Jalukbari, Guwahati, Assam 781013, India</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <div>
                  <a href={`tel:${primaryPhoneNumber.replace(/\s/g, '')}`} className="hover:text-primary transition-colors duration-300 block">{primaryPhoneNumber}</a>
                  <a href={`tel:${secondaryPhoneNumber.replace(/\s/g, '')}`} className="hover:text-primary transition-colors duration-300 block">{secondaryPhoneNumber}</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <a href={`mailto:${emailAddress}`} className="hover:text-primary transition-colors duration-300 break-all">
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-lg text-white mb-5">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
             <p className="font-semibold text-lg text-white mt-6 mb-3">Newsletter</p>
             <p className="text-sm mb-3">Subscribe to get our latest travel deals and updates.</p>
             <form className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-sm w-full" />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors text-sm">Subscribe</button>
             </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Namaste North East. All Rights Reserved.
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Designed with <span className="text-red-500">&hearts;</span> by Hostinger Horizons
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
