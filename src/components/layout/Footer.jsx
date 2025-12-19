import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00212D] text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div>
         <div className="flex items-center gap-2 mb-4">
  <img
    src="/logo.png"
    alt="Deals Fiji Logo"
    className="w-42 h-32 object-contain"
  />

 
</div>


          <p className="text-md text-white  leading-relaxed max-w-xs">
            There’s Fiji, then there’s My Fiji. We’re the experts in tours,
            transfers and experiences across Fiji.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-6 text-[#1AB8D3] text-4xl">
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaBehance className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* THINGS TO DO */}
        <div>
          <h4 className="mb-4 font-semibold text-white text-xl">Things To Do</h4>
          <ul className="space-y-3 text-gray-300 text-md font-semibold">
            <li><Link to="/things-to-do">All Things To Do</Link></li>
            <li><Link to="/things-to-do/water-activities">Water Activities</Link></li>
            <li><Link to="/things-to-do/sightseeing-tours">Sightseeing Tours</Link></li>
            <li><Link to="/things-to-do/culture-tours">Culture Tours</Link></li>
            <li><Link to="/things-to-do/zipline-tours">Zipline Tours</Link></li>
          </ul>
        </div>

        {/* TOURS & TRANSFERS */}
        <div>
          <h4 className="mb-4 font-semibold text-white text-xl">Tours & Transfers</h4>
          <ul className="space-y-3 text-gray-300 text-md font-semibold">
            <li><Link to="/private-tours">Private Tours</Link></li>
            <li><Link to="/transfers/airport">Airport Transfers</Link></li>
            <li><Link to="/transfers/private">Private Transfers</Link></li>
            <li><Link to="/cruise-ship">Cruise Ship Services</Link></li>
            <li><Link to="/car-hire">Car Hire</Link></li>
          </ul>
        </div>

        {/* HELP + NEWSLETTER */}
        <div>
          <h4 className="mb-4 font-semibold text-white text-xl">Help & Support</h4>
          <ul className="space-y-3 text-gray-300 text-md mb-6 font-semibold">
            <li><Link to="/help/about">About Us</Link></li>
            <li><Link to="/help/contact">Contact Us</Link></li>
            <li><Link to="/help/blog">Blog</Link></li>
            <li><Link to="/help/faq">FAQ</Link></li>
            <li><Link to="/help/privacy">Privacy Policy</Link></li>
          </ul>

          {/* NEWSLETTER */}
          <p className="text-sm mb-2 text-gray-300">Subscribe to our newsletter</p>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full bg-transparent border-b border-gray-400 text-sm py-2 focus:outline-none focus:border-[#19c2d8]"
          />
          <button className="mt-4 w-full bg-[#19c2d8] hover:bg-[#12a6ba] transition-all py-2 rounded-md text-sm font-medium">
            Subscribe
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
