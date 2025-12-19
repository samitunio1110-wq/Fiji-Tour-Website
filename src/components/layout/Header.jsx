// components/Navbar.jsx - Updated with black background on scroll
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to hide/show navbar and change background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide
          document.querySelector("nav").style.transform = "translateY(-100%)";
        } else {
          // Scrolling up - show
          document.querySelector("nav").style.transform = "translateY(0)";
        }
      } else {
        setIsScrolled(false);
        document.querySelector("nav").style.transform = "translateY(0)";
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Dropdown data with icons
  const dropdownData = {
    "things-to-do": [
      { name: "All Things To Do" },
      { name: "Tivua Island Day Trips" },
      { name: "Fiji's Water Activities"},
      { name: "Islands Day Trips"},
      { name: "Skydiving In Fiji" },
      { name: "Snorkelling Tours" },
      { name: "Boat Charter" },
      { name: "BBQ E-Boat Fiji" },
      { name: "Scenic Flights" },
      { name: "Sightseeing Tours" },
      { name: "Culture Tours" },
      { name: "Fijian Village Tours" },
      { name: "Zipline Tours" },
      { name: "Waterfall Tours" },
      { name: "Mud Pools" },
      { name: "White Water Rafting" },
      { name: "Quad Bike" },
      { name: "Full Day" },
      { name: "Half Day" },
    ],
    "hot-deals": [
      { name: "Suva City"},
      { name: "Nadi City"},
      { name: "Lautoka City" },
    ],
    "private-tours": [
      { name: "All Private Tours" },
      { name: "Day Tours From Nadi" },
      { name: "Coral Coast Tours Fiji" },
      { name: "From Lautoka" },
      { name: "From Nadi Airport"},
      { name: "Private Suva Tours" },
      { name: "Fiji Sightseeing Tours"},
      { name: "Fiji Island Tours" },
      { name: "Boat Tours" },
    ],
    transfers: [
      { name: "Private Transfers" },
      { name: "Airport Transfers" },
      { name: "Hotel Transfers"},
      { name: "Island Boat Transfers" },
      { name: "Air Transfers" },
    ],
    "cruise-ship": [
    ],
    "car-hire": [
    ],
    accommodation: [
      { name: "All Accommodation" },
      { name: "Bagpaker Packages"},
      { name: "Bula Combo Pass" },
      { name: "Budget Holiday Packages" },
      { name: "Family Holiday Packages", },
      { name: "Village Homestays" },
    
    ],
    islands: [
      { name: "Towns" },
      { name: "Coral Coast"},
      { name: "Pacific Harbour",  },
    
    ],
    help: [
      { name: "About Us",  },
      { name: "Contact" },
      { name: "Blog " },
      { name: "FAQ" },
      { name: "Travel Agents In Fiji",  },
      { name: "T&Cs"},
      { name: "Privacy Policy" },
      { name: "Sitemap", }, 
    ],
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
        style={{
          transition:
            "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        }}
      >
        <div className="container mx-auto flex flex-col  justify-between items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                TravelExplorer
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex flex-wrap justify-center gap-1 lg:gap-3">
            {Object.keys(dropdownData).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white hover:text-blue-300 font-medium py-2 px-3 transition-colors duration-200 flex items-center gap-1">
                  <span className="capitalize">{key.replace("-", " ")}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === key && (
                  <div className="absolute  mt-2 w-[20vw] h-auto bg-black/95 backdrop-blur-xl border border-gray-800 shadow-2xl rounded-xl p-5">
                    <div className="">
                      {dropdownData[key].map((item, index) => (
                        <Link
                          key={index}
                          to="#"
                          className="group flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-200"
                        >
                         
                          <span className="flex-1 group-hover:translate-x-1 transition-transform duration-200">
                            {item.name}
                          </span>
                          
                         
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden w-full mt-4 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl p-4">
              <div className="grid grid-cols-1 gap-2">
                {Object.keys(dropdownData).map((key) => (
                  <div key={key} className="mb-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === key ? null : key)
                      }
                      className="w-full text-left text-white hover:text-blue-300 font-medium py-2 px-3 flex items-center justify-between"
                    >
                      <span className="capitalize">
                        {key.replace("-", " ")}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === key && (
                      <div className="ml-4 mt-2 bg-gray-900/50 rounded-lg p-3">
                        <div className="grid grid-cols-1 gap-2">
                          {dropdownData[key].map((item, index) => (
                            <Link
                              key={index}
                              to="#"
                              className="flex items-center gap-3 text-gray-300 hover:text-white p-2 rounded"
                            >
                             
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
