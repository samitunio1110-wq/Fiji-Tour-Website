// components/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="py-8 pt-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto border border-gray-100">
        <h1 className=" font-bold  text-center text-6xl  text-[#14183E] mb-4"   style={{ fontFamily: "Abril Fatface" }}>
          Privacy Policy
        </h1>
        
        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          How We Protect Your Information
        </h2>
        
        <div className="space-y-8 text-gray-600">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h3>
            <p className="text-lg leading-relaxed">
              We collect information that you provide directly to us, such as when you create an account, fill out a form, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h3>
            <p className="text-lg leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, to personalize your experience, and to ensure the security of our services. We may also use your information to send you updates, promotional materials, and other information that may be of interest to you.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3. Information Sharing</h3>
            <p className="text-lg leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">4. Data Security</h3>
            <p className="text-lg leading-relaxed">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">5. Your Rights</h3>
            <p className="text-lg leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal information we hold about you. You may also have the right to object to or restrict certain processing activities.
            </p>
          </div>
          
          <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Policy Updates</h3>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to stay informed about how we are protecting your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;