// components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-8 pt-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-6xl mx-auto border border-gray-100">
          <h1 className=" font-bold  text-center text-6xl  text-[#14183E] mb-4"   style={{ fontFamily: "Abril Fatface" }}>
          Contact Us
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Get in Touch With Our Team
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* Left side - Map box */}

          <div className="lg:w-1/2">
            <div className="h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
              {/* Google Map iframe */}
              <div className="h-80 md:h-140">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.107494257694!2d67.0304!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9c3d8b6f2f%3A0x9c0e1f2e1a8c5d4!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact details */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Contact Information
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-8 text-[#12c0e2]">📍</span>
                    <span className="text-gray-700">
                      123 Business Street, Karachi
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-8 text-[#12c0e2]">📞</span>
                    <span className="text-gray-700">+1 (123) 456-7890</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-8 text-[#12c0e2]">✉️</span>
                    <span className="text-gray-700">info@company.com</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-8 text-[#12c0e2]">🌐</span>
                    <span className="text-gray-700">www.company.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:w-1/2">
            <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12c0e2] focus:border-[#12c0e2] outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#12c0e2] focus:border-[#12c0e2] outline-none transition"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#12c0e2] focus:border-[#12c0e2] outline-none transition"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#12c0e2] focus:border-[#12c0e2] outline-none transition"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#12c0e2] hover:bg-white hover:text-black hover:border hover:border-[#12c0e2] font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
                <p>
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
