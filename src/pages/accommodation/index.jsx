// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const Accommodation = React.lazy(() => import("./Accommodation"));
const BackpackerPackages = React.lazy(() => import("./BackpackerPackages"));
const BulaComboPass = React.lazy(() => import("./BulaComboPass"));
const BudgetHolidayPackages = React.lazy(() =>
  import("./BudgetHolidayPackages")
);
const FamilyHolidayPackages = React.lazy(() =>
  import("./FamilyHolidayPackages")
);
const VillageHomestays = React.lazy(() => import("./VillageHomestays"));

const AllAccommodations = () => {
  return (
    <Routes>
      <Route path="/" element={<Accommodation />} />
      <Route path="/backpacker" element={<BackpackerPackages />} />
      <Route path="/bula-combo" element={<BulaComboPass />} />
      <Route path="/budget-holiday" element={<BudgetHolidayPackages />} />
      <Route path="/family-holiday" element={<FamilyHolidayPackages />} />
      <Route path="/village-homestays" element={<VillageHomestays />} />
    </Routes>
  );
};

export default AllAccommodations;
