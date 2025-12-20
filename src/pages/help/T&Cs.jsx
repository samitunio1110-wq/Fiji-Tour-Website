// components/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <section id="terms" className="py-8 pt-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto border border-gray-100">
       <h1 className=" font-bold  text-center text-6xl  text-[#14183E] mb-4"   style={{ fontFamily: "Abril Fatface" }}>
          Terms and Conditions
        </h1>
        
        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Guidelines for Using Our Services
        </h2>
        
        <div className="space-y-8 text-gray-600">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h3>
            <p className="text-lg leading-relaxed">
              By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2. User Responsibilities</h3>
            <p className="text-lg leading-relaxed">
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3. Intellectual Property</h3>
            <p className="text-lg leading-relaxed">
              All content included on our website, such as text, graphics, logos, images, and software, is the property of our company or its content suppliers and protected by international copyright laws. The compilation of all content on this site is our exclusive property.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">4. Service Modifications</h3>
            <p className="text-lg leading-relaxed">
              We reserve the right at any time to modify or discontinue, temporarily or permanently, any service or feature with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">5. Limitation of Liability</h3>
            <p className="text-lg leading-relaxed">
              In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">6. Governing Law</h3>
            <p className="text-lg leading-relaxed">
              These terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
            </p>
          </div>
          
          <div className="mt-10 p-5 bg-yellow-50 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact for Questions</h3>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions, please contact us at legal@company.com. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;