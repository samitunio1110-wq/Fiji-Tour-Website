// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const HotDeals = React.lazy(() => import("./HotDeals"));
const LautokaCity = React.lazy(() => import("./LautokaCity"));
const NadiCity = React.lazy(() => import("./NadiCity"));
const SuvaCity = React.lazy(() => import("./SuvaCity"));

const AllHotDeals = () => {
  return (
    <Routes>
      <Route path="/" element={<HotDeals />} />
      <Route path="/lautoka-city" element={<LautokaCity />} />
      <Route path="/nadi-city" element={<NadiCity />} />
      <Route path="/suva-city" element={<SuvaCity />} />
    </Routes>
  );
};

export default AllHotDeals;
