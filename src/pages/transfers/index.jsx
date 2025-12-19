// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const Transfers = React.lazy(() => import("./Transfers"));
const PrivateTransfers = React.lazy(() => import("./PrivateTransfers"));
const AirportTransfers = React.lazy(() => import("./AirportTransfers"));
const HotelTransfers = React.lazy(() => import("./HotelTransfers"));
const IslandBoatTransfers = React.lazy(() => import("./IslandBoatTransfers"));
const AirTransfers = React.lazy(() => import("./AirTransfers"));


const AllTransfers = () => {
  return (
    <Routes>
      <Route path="/" element={<Transfers />} />
      <Route path="/private" element={<PrivateTransfers />} />
      <Route path="/airport" element={<AirportTransfers />} />
      <Route path="/hotel" element={<HotelTransfers />} />
      <Route path="/island-boat" element={<IslandBoatTransfers />} />
      <Route path="/air" element={<AirTransfers />} />
   
    </Routes>
  );
};

export default AllTransfers;
