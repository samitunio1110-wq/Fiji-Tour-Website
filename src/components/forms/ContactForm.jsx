import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-[#063d4d] rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-[42px] font-bold leading-tight" style={{ fontFamily: "Poppins" }}>
            Les’t talk <br />
            on something{" "}
            <span className="text-[#12c0e2]">great</span>
            <br />
            together
          </h2>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-6 text-sm">
            <div className="flex items-center gap-4 text-xl">
              <FaPhoneAlt className="text-[#12c0e2]" />
              <span>+34 123 456 789</span>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <FaEnvelope className="text-[#12c0e2]" />
              <span>andreaDesign@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <FaMapMarkerAlt className="text-[#12c0e2]" />
              <span>123 Street 487 House</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-10 mt-30 ml-10 text-[#12c0e2] text-4xl">
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaBehance className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
          <form className="space-y-6">

            <div>
              <label className="text-sm text-[#176B87]">Your name</label>
              <input
                type="text"
                placeholder="Jhon Smith"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0c9fa1]"
              />
            </div>

            <div>
              <label className="text-sm text-[#176B87]">Your email</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0c9fa1]"
              />
            </div>

            <div>
              <label className="text-sm text-[#176B87]">Your message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:border-[#12c0e2]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full  bg-[#12c0e2] hover:bg-white hover:text-black transition text-white py-2 rounded-md text-sm font-medium shadow-md hover:border hover:border-[#12c0e2]"
            >
              Send
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
