import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    arrows: true,
  };

  // Create an array of images
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);

  return (
    <section className="relative w-full">
      {/* Image Slider */}
      <div className="w-full h-[400px] overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Existing Text + Buttons */}
      <div className="text-center mt-6 px-4">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your description goes here...
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Experience the untouched beauty, rich culture, and breathtaking landscapes of Meghalaya, Arunachal Pradesh, and Assam with our premium travel services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            {/* Explore Destinations */}
            <Link to="/destinations">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto flex items-center gap-2 shadow-lg rounded-xl px-6 py-4 text-lg"
              >
                <MapPinned className="h-5 w-5" />
                Explore Destinations
              </Button>
            </Link>
            {/* Book a Car */}
            <a href="/services#car-rental">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto flex items-center gap-2 shadow-lg rounded-xl px-6 py-4 text-lg"
              >
                <Car className="h-5 w-5" />
                Book a Car
              </Button>
            </a>
            {/* Book a Hotel */}
            <a href="/services#accommodation">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto flex items-center gap-2 shadow-lg rounded-xl px-6 py-4 text-lg"
              >
                <BedDouble className="h-5 w-5" />
                Book a Hotel
              </Button>
            </a>
            {/* Book a Tour */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto flex items-center gap-2 shadow-lg rounded-xl px-6 py-4 text-lg"
              >
                <Send className="h-5 w-5" />
                Book a Tour
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
