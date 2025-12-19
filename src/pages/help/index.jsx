// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const Help = React.lazy(() => import("./Help"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Contact = React.lazy(() => import("./Contact"));
const Blog = React.lazy(() => import("./Blog"));
const FAQ = React.lazy(() => import("./FAQ"));
const TravelAgentsInFiji = React.lazy(() => import("./TravelAgentsInFiji"));
const TandCs = React.lazy(() => import("./T&Cs"));
const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));
const Sitemap = React.lazy(() => import("./Sitemap"));


const AllHelps = () => {
  return (
    <Routes>
      <Route path="/" element={<Help />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/travel-agents" element={<TravelAgentsInFiji />} />
      <Route path="/terms" element={<TandCs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/sitemap" element={<Sitemap />} />

    </Routes>
  );
};

export default AllHelps;
