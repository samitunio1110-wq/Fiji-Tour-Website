import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from '../pages/Home'
import ThingsToDo from '../pages/ThingsToDo'
import Accommodation from '../pages/Accommodation'
import CruiseShip from '../pages/CruiseShip'
import Help from '../pages/Help'
import HotDeals from '../pages/HotDeals'
import Islands from '../pages/Islands'
import PrivateTours from '../pages/PrivateTours'
import Transfers from '../pages/Transfers'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/private-tours" element={<PrivateTours />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/cruise-ship" element={<CruiseShip />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/islands" element={<Islands />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
