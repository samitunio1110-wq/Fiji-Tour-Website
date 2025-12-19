// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const PrivateTours = React.lazy(() => import("./PrivateTours"));
const DayToursFromNadi = React.lazy(() => import("./DayToursFromNadi"));
const CoralCoastToursFiji = React.lazy(() => import("./CoralCoastToursFiji"));
const FromLautoka = React.lazy(() => import("./FromLautoka"));
const FromNadiAirport = React.lazy(() => import("./FromNadiAirport"));
const PrivateSuvaTours = React.lazy(() => import("./PrivateSuvaTours"));
const FijiSightseeingTours = React.lazy(() => import("./FijiSightseeingTours"));
const IslandTours = React.lazy(() => import("./FijiIslandTours"));
const BoatTours = React.lazy(() => import("./BoatTours"));


const AllPrivateTours = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateTours />} />
      <Route path="/nadi-day-tours" element={<DayToursFromNadi />} />
      <Route path="/coral-coast" element={<CoralCoastToursFiji />} />
      <Route path="/lautoka" element={<FromLautoka />} />
      <Route path="/nadi-airport" element={<FromNadiAirport />} />
      <Route path="/private-suva" element={<PrivateSuvaTours />} />
      <Route path="/sightseeing" element={<FijiSightseeingTours />} />
      <Route path="/island-tours" element={<IslandTours />} />
      <Route path="/boat-tours" element={<BoatTours />} />
      
    </Routes>
  );
};

export default AllPrivateTours;
