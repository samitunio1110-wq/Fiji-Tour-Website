// pages/things-to-do/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load sub-pages
const AllThingsToDo = React.lazy(() => import("./ThingsToDo"));
const TivuaIsland = React.lazy(() => import("./TivuaIsland"));
const WaterActivities = React.lazy(() => import("./FijiWaterActivities"));
const IslandDayTrips = React.lazy(() => import("./IslandsDayTrips"));
const Skydiving = React.lazy(() => import("./SkydivingInFiji"));
const SnorkellingTours = React.lazy(() => import("./SnorkellingTours"));
const BoatCharter = React.lazy(() => import("./BoatCharter"));
const BBQEBoatFiji = React.lazy(() => import("./BBQEBoatFiji"));
const ScenicFlights = React.lazy(() => import("./ScenicFlights"));
const SightseeingTours = React.lazy(() => import("./SightseeingTours"));
const FijianVillageTours = React.lazy(() => import("./FijianVillageTours"));
const ZiplineTours = React.lazy(() => import("./ZiplineTours"));
const WaterfallTours = React.lazy(() => import("./WaterfallTours"));
const MudPools = React.lazy(() => import("./MudPools"));
const WhiteWaterRafting = React.lazy(() => import("./WhiteWaterRafting"));
const QuadBike = React.lazy(() => import("./QuadBike"));
const FullDay = React.lazy(() => import("./FullDay"));
const HalfDay = React.lazy(() => import("./HalfDay"));
const CultureTours = React.lazy(() => import("./CultureTours"));

const ThingsToDoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllThingsToDo />} />
      <Route path="/tivua-island" element={<TivuaIsland />} />
      <Route path="/water-activities" element={<WaterActivities />} />
      <Route path="/island-day-trips" element={<IslandDayTrips />} />
      <Route path="/sky-diving" element={<Skydiving />} />
      <Route path="/snorkelling-tours" element={<SnorkellingTours />} />
      <Route path="/boat-charter" element={<BoatCharter />} />
      <Route path="/bbq-eboat-fiji" element={<BBQEBoatFiji />} />
      <Route path="/scenic-flights" element={<ScenicFlights />} />
      <Route path="/sightseeing-tours" element={<SightseeingTours />} />
      <Route path="/culture-tours" element={<CultureTours />} />
      <Route path="/village-tours" element={<FijianVillageTours />} />
      <Route path="/zipline-tours" element={<ZiplineTours />} />
      <Route path="/waterfall-tours" element={<WaterfallTours />} />
      <Route path="/mud-pools" element={<MudPools />} />
      <Route path="/white-water-rafting" element={<WhiteWaterRafting />} />
      <Route path="/quad-bike" element={<QuadBike />} />
      <Route path="/half-day" element={<HalfDay />} />
      <Route path="/full-day" element={<FullDay />} />
    </Routes>
  );
};

export default ThingsToDoRoutes;
