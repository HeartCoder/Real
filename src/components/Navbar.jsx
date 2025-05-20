
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, MountainSnow } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { destinationsData } from "@/data/destinationsMaster";


const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const primaryPhoneNumber = "8822608900";
  const countryCode = "+91";
  const callLink = `tel:${countryCode}${primaryPhoneNumber.replace(/\s/g, '')}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); 
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || isOpen ? "bg-white shadow-lg text-gray-800" : "bg-transparent text-white",
        location.pathname !== "/" && !isScrolled && !isOpen ? "bg-white shadow-lg text-gray-800" : "" 
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center text-xl font-bold font-volkhov">
            <div className={cn(
              "flex items-center justify-center h-10 w-10 rounded-full mr-2 transition-colors duration-300",
              isScrolled || isOpen || location.pathname !== "/" ? "bg-primary text-white" : "bg-white text-primary"
            )}>
              <MountainSnow size={20} />
            </div>
            Namaste <span className={cn("ml-1", isScrolled || isOpen || location.pathname !== "/" ? "text-primary" : "text-primary")}>North East</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(navigationMenuTriggerStyle(), isActive ? "bg-primary/10 text-primary" : "", 
                        isScrolled || location.pathname !== "/" ? "text-gray-700 hover:bg-gray-100 focus:bg-gray-100" : "text-white hover:bg-white/10 focus:bg-white/10"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled || location.pathname !== "/" ? "text-gray-700 hover:bg-gray-100 focus:bg-gray-100" : "text-white hover:bg-white/10 focus:bg-white/10")}>Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Object.entries(destinationsData).map(([stateKey, destinations]) =>
                        destinations.slice(0, 3).map((dest) => ( 
                          <ListItem
                            key={dest.id}
                            title={dest.name}
                            href={`/destinations/${stateKey}/${dest.id}`}
                          >
                            {dest.tagline}
                          </ListItem>
                        ))
                      )}
                       <ListItem href="/destinations" title="View All Destinations" className="md:col-span-2 text-center bg-primary/5 hover:bg-primary/10">
                        Explore all our curated destinations.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild variant="ghost" className={cn("ml-4", isScrolled || location.pathname !== "/" ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10 border-white/50 hover:border-white")}>
              <a href={callLink}>
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn("p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset", isScrolled || location.pathname !== "/" ? "focus:ring-primary text-gray-700" : "focus:ring-white text-white")}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn("md:hidden overflow-hidden", isScrolled || location.pathname !== "/" ? "bg-white text-gray-800" : "bg-black/80 backdrop-blur-md text-white")}
          >
            <div className="container mx-auto px-4 md:px-6 py-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                  <NavLink
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 px-3 rounded-md text-lg font-medium transition-colors duration-200",
                        isActive ? "bg-primary text-white" : "hover:bg-primary/20"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div custom={navLinks.length} variants={navItemVariants} initial="hidden" animate="visible">
                 <NavLink
                    to="/destinations"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 px-3 rounded-md text-lg font-medium transition-colors duration-200",
                        isActive || location.pathname.startsWith("/destinations") ? "bg-primary text-white" : "hover:bg-primary/20"
                      )
                    }
                  >
                    Destinations
                  </NavLink>
              </motion.div>
              <motion.div custom={navLinks.length + 1} variants={navItemVariants} initial="hidden" animate="visible" className="pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <a href={callLink} onClick={toggleMenu}>
                    <Phone className="mr-2 h-5 w-5" /> Call Us Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
