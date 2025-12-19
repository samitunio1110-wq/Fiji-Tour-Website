// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const Islands = React.lazy(() => import("./Islands"));
const Towns = React.lazy(() => import("./Towns"));
const CoralCoast = React.lazy(() => import("./CoralCoast"));
const PacificHarbour = React.lazy(() => import("./PacificHarbour"));

const AllIslands = () => {
  return (
    <Routes>
      <Route path="/" element={<Islands />} />
      <Route path="/towns" element={<Towns />} />
      <Route path="/coral-coast" element={<CoralCoast />} />
      <Route path="/pacific-harbour" element={<PacificHarbour />} />

    </Routes>
  );
};

export default AllIslands;
