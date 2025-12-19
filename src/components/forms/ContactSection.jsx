import React from "react";
import bgImg from "../../assets/contact-bg-img.png";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 h-[80vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl w-full  rounded-3xl p-10 md:p-16  md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="text-white">
          <h2
            className="text-[52px] font-bold leading-tight"
            style={{ fontFamily: "Poppins" }}
          >
            Are You Planning To Visit Fiji? We Can Help You With Airport/Hotel
            Transfer And Private Tours!
          </h2>
        </div>

        {/* Right Form */}
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
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:border-[#0c9fa1]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0c9fa1] hover:bg-[#0b8b8d] transition text-white py-2 rounded-md text-sm font-medium shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
