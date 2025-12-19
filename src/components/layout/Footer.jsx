import React from "react";
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00212D] text-white px-6 md:px-20 py-16 h-[40vh] mt-30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT LOGO + TEXT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-bold text-[#19c2d8]">
              Deals
            </span>
            <span className="text-xl font-semibold text-[#19c2d8] mt-2">
              FIJI
            </span>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            There’s Fiji, then there’s My Fiji. We’re the industry Experts on
            curating the best deals and life-changing experiences. These are
            getaways you’ll be talking about for a lifetime.
          </p>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="mb-4 font-semibold text-white"> </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-[#19c2d8] cursor-pointer">Our Collections</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Interest Free</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Blog</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Advertisements</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <ul className="space-y-3 text-gray-300 text-sm mt-8 md:mt-0">
            <li className="hover:text-[#19c2d8] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Gift Cards</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Careers</li>
            <li className="hover:text-[#19c2d8] cursor-pointer">Media Enquiries</li>
          </ul>
        </div>

        {/* EMAIL SECTION */}
        <div>
          <p className="text-sm mb-3">Your email</p>

          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full bg-transparent border-b border-gray-400 text-sm py-2 focus:outline-none focus:border-[#19c2d8]"
          />

          <button className="mt-6 w-full bg-[#19c2d8] hover:bg-[#12a6ba] transition-all py-2 rounded-md text-sm font-medium shadow-lg">
            Send
          </button>

          {/* SOCIAL ICONS */}
          <div className="flex gap-10 mt-8 text-[#1AB8D3] text-5xl mt-10">
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaBehance className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
