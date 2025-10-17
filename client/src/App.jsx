import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoBtn from './components/DemoBtn';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';

// Solutions
import Aerospace from "./pages/solutions/Aerospace";
import Automotive from "./pages/solutions/Automotive";
import ContractManufacturers from "./pages/solutions/ContractManufacturers";
import HeavyMachinery from "./pages/solutions/HeavyMachinery";
import MedicalDevices from "./pages/solutions/MedicalDevices";
import OilGas from "./pages/solutions/OilGas";
import ProductionMonitoring from "./pages/solutions/ProductionMonitoring";
import ConditionMonitoring from "./pages/solutions/ConditionMonitoring";
import PredictiveMaintenance from "./pages/solutions/PredictiveMaintenance";
import ProcessOptimization from './pages/solutions/ProcessOptimization';
import MachineBuilders from "./pages/solutions/MachineBuilders";

// Products
import ProductionCounterDisplay from "./pages/products/ProductionCounterDisplay";
import AndonBoardDisplay from "./pages/products/AndonBoardDisplay";
import IndustrialParameterDisplay from "./pages/products/IndustrialParameterDisplay";
import AndonSignalTowerLight from "./pages/products/AndonSignalTowerLight";
import WirelessAndonTowerLight from "./pages/products/WirelessAndonTowerLight";
import CloudAndonTowerLight from "./pages/products/CloudAndonTowerLight";

const App = () => {
  const scrollRef = useRef(null);
  const locoRef = useRef(null);
  const location = useLocation();

  // Initialize Locomotive Scroll
  useEffect(() => {
    locoRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });

    return () => {
      if (locoRef.current) locoRef.current.destroy();
    };
  }, []);

  // Update Locomotive Scroll on route change
  useEffect(() => {
    if (locoRef.current) {
      locoRef.current.update();
    }
  }, [location.pathname]);

  return (
    <div id="app" data-scroll-container ref={scrollRef}>
      <Navbar />

      {/* Each route wrapped as a scroll section */}
      <div data-scroll-section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about-us' element={<Company />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:slug' element={<BlogDetail />} />

          <Route path="/aerospace-defense" element={<Aerospace />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/contract-manufacturers" element={<ContractManufacturers />} />
          <Route path="/heavy-machinery" element={<HeavyMachinery />} />
          <Route path="/medical-devices" element={<MedicalDevices />} />
          <Route path="/oil-gas" element={<OilGas />} />
          <Route path="/production-monitoring" element={<ProductionMonitoring />} />
          <Route path="/condition-monitoring" element={<ConditionMonitoring />} />
          <Route path="/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/process-optimization" element={<ProcessOptimization />} />
          <Route path="/machine-builders" element={<MachineBuilders />} />

          <Route path="/production-counter-display" element={<ProductionCounterDisplay />} />
          <Route path="/andon-board-display" element={<AndonBoardDisplay />} />
          <Route path="/industrial-parameter-display" element={<IndustrialParameterDisplay />} />
          <Route path="/andon-signal-tower-light" element={<AndonSignalTowerLight />} />
          <Route path="/wireless-andon-tower-light" element={<WirelessAndonTowerLight />} />
          <Route path="/cloud-andon-tower-light" element={<CloudAndonTowerLight />} />
        </Routes>
      </div>

      {/* Footer outside routes but inside scroll container */}
      <div data-scroll-section>
        <Footer />
      </div>

      {/* Demo Button fixed */}
      <DemoBtn />
    </div>
  );
};

export default App;
