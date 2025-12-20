// components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including web development, mobile app development, cloud solutions, digital marketing, and IT consulting. Our team works closely with clients to deliver customized solutions that meet their specific business needs."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can request a quote by contacting us through our contact form, email, or phone. We'll schedule a consultation to understand your requirements and provide you with a detailed proposal and cost estimate based on your project scope."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a custom enterprise application could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages for ongoing maintenance, updates, and technical support. We believe in building long-term relationships with our clients and ensuring their solutions continue to perform optimally after deployment."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, Java, AWS, Azure, Docker, and more. We stay updated with the latest industry trends to provide modern, scalable solutions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-8 pt-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto border border-gray-100">
            <h1 className=" font-bold  text-center text-6xl  text-[#14183E] mb-4"   style={{ fontFamily: "Abril Fatface" }}>
          Frequently Asked Questions
        </h1>
        
        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Find Answers to Common Questions
        </h2>
        
        <p className="text-gray-600 text-lg text-center mb-10 max-w-3xl mx-auto">
          We've compiled a list of frequently asked questions to help you better understand our services, processes, and policies. If you don't find the answer you're looking for, please don't hesitate to contact us directly.
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="text-blue-600 font-bold text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our team is here to help you with any questions you might have about our services or processes.</p>
          <button className="px-6 py-3 bg-[#12c0e2] hover:bg-white hover:text-black font-medium rounded-lg transition-colors duration-200 hover:border hover:border-[#12c0e2]">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;