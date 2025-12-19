// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const dropdownRefs = useRef({});
  const timeoutRefs = useRef({});

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = document.querySelector("nav");

      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
      } else {
        setIsScrolled(false);
        nav.style.transform = "translateY(0)";
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        !event.target.closest(`[data-dropdown="${activeDropdown}"]`)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Route mappings for dropdown items
  const routeMappings = {
    "things-to-do": {
      "All Things To Do": "/things-to-do",
      "Tivua Island Day Trips": "/things-to-do/tivua-island",
      "Fiji's Water Activities": "/things-to-do/water-activities",
      "Islands Day Trips": "/things-to-do/island-day-trips",
      "Skydiving In Fiji": "/things-to-do/sky-diving",
      "Snorkelling Tours": "/things-to-do/snorkelling-tours",
      "Boat Charter": "/things-to-do/boat-charter",
      "BBQ E-Boat Fiji": "/things-to-do/bbq-eboat-fiji",
      "Scenic Flights": "/things-to-do/scenic-flights",
      "Sightseeing Tours": "/things-to-do/sightseeing-tours",
      "Culture Tours": "/things-to-do/culture-tours",
      "Fijian Village Tours": "/things-to-do/village-tours",
      "Zipline Tours": "/things-to-do/zipline-tours",
      "Waterfall Tours": "/things-to-do/waterfall-tours",
      "Mud Pools": "/things-to-do/mud-pools",
      "White Water Rafting": "/things-to-do/white-water-rafting",
      "Quad Bike": "/things-to-do/quad-bike",
      "Full Day": "/things-to-do/full-day",
      "Half Day": "/things-to-do/half-day",
    },
    "hot-deals": {
      "Suva City": "/hot-deals/suva-city",
      "Nadi City": "/hot-deals/nadi-city",
      "Lautoka City": "/hot-deals/lautoka-city",
    },
    "private-tours": {
      "All Private Tours": "/private-tours",
      "Day Tours From Nadi": "/private-tours/nadi-day-tours",
      "Coral Coast Tours Fiji": "/private-tours/coral-coast",
      "From Lautoka": "/private-tours/lautoka",
      "From Nadi Airport": "/private-tours/nadi-airport",
      "Private Suva Tours": "/private-tours/private-suva",
      "Fiji Sightseeing Tours": "/private-tours/sightseeing",
      "Fiji Island Tours": "/private-tours/island-tours",
      "Boat Tours": "/private-tours/boat-tours",
    },
    transfers: {
      "Private Transfers": "/transfers/private",
      "Airport Transfers": "/transfers/airport",
      "Hotel Transfers": "/transfers/hotel",
      "Island Boat Transfers": "/transfers/island-boat",
      "Air Transfers": "/transfers/air",
    },
    "cruise-ship": {
      "All Cruise Ship Services": "/cruise-ship",
    },
    "car-hire": {
      "All Car Hire Services": "/car-hire",
    },
    accommodation: {
      "All Accommodation": "/accommodation",
      "Backpacker Packages": "/accommodation/backpacker",
      "Bula Combo Pass": "/accommodation/bula-combo",
      "Budget Holiday Packages": "/accommodation/budget-holiday",
      "Family Holiday Packages": "/accommodation/family-holiday",
      "Village Homestays": "/accommodation/village-homestays",
    },
    islands: {
      Towns: "/islands/towns",
      "Coral Coast": "/islands/coral-coast",
      "Pacific Harbour": "/islands/pacific-harbour",
    },
    help: {
      "About Us": "/help/about",
      Contact: "/help/contact",
      Blog: "/help/blog",
      FAQ: "/help/faq",
      "Travel Agents In Fiji": "/help/travel-agents",
      "T&Cs": "/help/terms",
      "Privacy Policy": "/help/privacy",
      Sitemap: "/help/sitemap",
    },
  };

  // Dropdown data with routes
  const dropdownData = Object.entries(routeMappings).reduce(
    (acc, [key, routes]) => {
      acc[key] = Object.entries(routes).map(([name, route]) => ({
        name,
        route,
      }));
      return acc;
    },
    {}
  );

  const handleMouseEnter = (dropdown) => {
    if (timeoutRefs.current[dropdown]) {
      clearTimeout(timeoutRefs.current[dropdown]);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = (dropdown) => {
    timeoutRefs.current[dropdown] = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavItems = [
    { key: "things-to-do", label: "Things To Do" },
    { key: "hot-deals", label: "Hot Deals" },
    { key: "private-tours", label: "Private Tours" },
    { key: "transfers", label: "Transfers" },
    { key: "cruise-ship", label: "Cruise Ship" },
    { key: "car-hire", label: "Car Hire" },
    { key: "accommodation", label: "Accommodation" },
    { key: "islands", label: "Islands" },
    { key: "help", label: "Help" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
        style={{
          transition:
            "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        }}
      >
        {/* ================= TOP ROW ================= */}
        <div className="relative flex items-center justify-center px-4 py-5   ">
          {/* LOGO CENTER */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2"
          >
            <img
              src="/logo.png"
              alt="TravelExplorer"
              className="w-40 h-40 object-contain"
            />
           
          </Link>

          {/* SEARCH RIGHT */}
          <div className="ml-auto hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "w-64" : "w-48"
                }`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search activities, tours..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 px-4 py-2 pr-10 rounded-full border border-white/20 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-teal-300"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden ml-auto text-white p-2 hover:bg-white/10 rounded-full"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="hidden lg:flex justify-center border-t border-white/10">
          <div className="flex items-center space-x-1 py-2">
            {mainNavItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                data-dropdown={item.key}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={() => handleMouseLeave(item.key)}
              >
                {/* NAV BUTTON */}
                <button className="text-white text-lg hover:text-teal-300 font-bold py-2 px-3 flex items-center gap-1">
                  {item.label}
                  
                </button>

                {/* DROPDOWN (ALWAYS IN DOM FOR SMOOTH ANIMATION) */}
                <div
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={() => handleMouseLeave(item.key)}
                  className={`absolute left-0 mt-2 w-64 bg-transparent  backdrop-blur-xl 
            border   p-5 z-50
            transition-all duration-300 ease-out
            ${
              activeDropdown === item.key
                ? "opacity-100 translate-y-0 visible pointer-events-auto"
                : "opacity-0 -translate-y-2 invisible pointer-events-none"
            }
          `}
                >
                  {dropdownData[item.key]?.map((dropdownItem, index) => (
                    <Link
                      key={index}
                      to={dropdownItem.route}
                      className="block text-black font-bold hover:text-white p-3 rounded-lg hover:bg-teal-500/10 transition"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
            {/* (mobile menu same rahe – no change needed) */}
          </div>
        )}
      </nav>

      {/* ❌ REMOVE OLD SPACER */}
      {/* <div className="h-16" /> */}
    </>
  );
};

export default Navbar;
