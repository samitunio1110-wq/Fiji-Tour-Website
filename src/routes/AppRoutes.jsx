// AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Lazy loaded components
const Home = lazy(() => import('../pages/Home'));
const ThingsToDo = lazy(() => import('../pages/things-to-do/index'));
const Accommodation = lazy(() => import('../pages/accommodation/index'));
const Transfers = lazy(() => import('../pages/transfers/index'));
const PrivateTours = lazy(() => import('../pages/private-tours/index'));
const CruiseShip = lazy(() => import('../pages/CruiseShip'));
const Help = lazy(() => import('../pages/help/Help'));
const HotDeals = lazy(() => import('../pages/hot-deals/index'));
const Islands = lazy(() => import('../pages/islands/Islands'));

// Lazy loaded sub-pages
const ThingToDoSubPages = lazy(() => import('../pages/things-to-do'));
const HotDealsSubPages = lazy(() => import('../pages/hot-deals'));
const PrivateToursSubPages = lazy(() => import('../pages/private-tours'));
const TransfersSubPages = lazy(() => import('../pages/transfers'));
const SearchResults = lazy(() => import('../pages/SearchResults'));
const AccommodationSubPages = lazy(() => import('../pages/accommodation'));
const IslandsSubPages = lazy(() => import('../pages/islands'));
const HelpSubPages = lazy(() => import('../pages/help'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
      <div className="w-20 h-20 border-4 border-teal-500 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/things-to-do/*" element={<ThingToDoSubPages />} />
            <Route path="/hot-deals/*" element={<HotDealsSubPages />} />
            <Route path="/private-tours/*" element={<PrivateToursSubPages />} />
            <Route path="/transfers/*" element={<TransfersSubPages />} />
            <Route path="/cruise-ship" element={<CruiseShip />} />
            <Route path="/accommodation/*" element={<AccommodationSubPages />} />
            <Route path="/islands/*" element={<IslandsSubPages />} />
            <Route path="/help/*" element={<HelpSubPages />} />
            
            {/* Search */}
            <Route path="/search" element={<SearchResults />} />
            
            {/* Fallback route */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                <button>Go back</button>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;