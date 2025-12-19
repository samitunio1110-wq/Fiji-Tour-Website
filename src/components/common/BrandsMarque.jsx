// components/MarqueeSimple.jsx
import React from 'react';

// Import images from assets folder
import expediaLogo from '../../assets/brands-marque/3.png';
import weantasLogo from '../../assets/brands-marque/4.png';
import axon from '../../assets/brands-marque/1.png';
import jetstar from '../../assets/brands-marque/1.png';

const BrandsMarque = () => {
  const logos = [
    { src: expediaLogo, alt: 'Expedia' },
    { src: weantasLogo, alt: 'Weantas' },
    { src: axon, alt: 'axon' },
    { src: jetstar, alt: 'jetstar' },
    
  ];

  // Create enough duplicates for smooth loop
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="py-8overflow-hidden">
      <div className="relative">
        {/* Marquee Track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee items-center">
            {marqueeItems.map((logo, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <div className="w-80 h-20 flex items-center justify-center">
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-100 w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-400">
                      {logo.alt}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsMarque;
