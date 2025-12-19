// components/TravelBanner.jsx - Auto-rotating carousel component
import React, { useState, useEffect } from 'react';

// Import local images from assets/banner-img folder
import banner1 from '../../assets/banner-img/bnner-img-1.png';
import banner2 from '../../assets/banner-img/banner-img-2.png';
import banner3 from '../../assets/banner-img/banner-img-3.png';

const TravelBanner = () => {
  const images = [
    {
      url: banner1
    },
    {
      url: banner2
    },
    {
      url: banner3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen overflow-hidden shadow-lg mb-8 w-full h-[100vh]">
      {/* Carousel Images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
     
            <div 
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            
            {/* Centered Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center text-center text-white pt-[216px]  ">
              <h1 
                style={{ fontFamily: "'Abril Fatface', serif" }}
                className="text-[48px] lg:text-8xl mb-4 md:mb-6"
              >
                Your Dream Vacation Awaits
              </h1>
              <p 
                style={{ fontFamily: "'Grape Nuts', cursive" }}
                className="text-3xl md:text-[32px] lg:text-5xl mb-8 md:mb-12 font-bold"
              >
                Explore the World with us.
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBanner;