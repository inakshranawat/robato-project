import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useContext";
import DemoBtn from "./DemoBtn";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { setDemoOpen } = useAppContext();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-[9999]"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer"
            src="https://iiot.robatosystems.com/images/MachinoX%20Pro.png"
            alt="logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden xl:flex gap-6 2xl:gap-10 items-center font-medium text-gray-800 text-sm 2xl:text-base">
            <Link to="/" className="hover:text-purple-700 transition">IIoT</Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="hover:text-purple-700 transition flex items-center gap-1">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-in-out ${
                  solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Dropdown content */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 py-10 px-10">
                  {/* Industries */}
                  <div>
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      INDUSTRIES
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/aerospace-defense" className="hover:text-purple-700 transition">Aerospace & Defense</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/automotive" className="hover:text-purple-700 transition">Automotive</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/contract-manufacturers" className="hover:text-purple-700 transition">Contract Manufacturers</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/heavy-machinery" className="hover:text-purple-700 transition">Heavy Machinery</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/medical-devices" className="hover:text-purple-700 transition">Medical Devices</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/oil-gas" className="hover:text-purple-700 transition">Oil & Gas</Link></li>
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      APPLICATIONS
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/production-monitoring" className="hover:text-purple-700 transition">Production Monitoring</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/condition-monitoring" className="hover:text-purple-700 transition">Condition Monitoring</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/predictive-maintenance" className="hover:text-purple-700 transition">Predictive Maintenance</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/process-optimization" className="hover:text-purple-700 transition">Process Optimization</Link></li>
                      <li><Link onClick={() => setSolutionsOpen(false)} to="/machine-builders" className="hover:text-purple-700 transition">For Machine Builders and Distributors</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="hover:text-purple-700 transition flex items-center gap-1">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-in-out ${
                  productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="max-w-5xl mx-auto grid grid-cols-2 gap-20 py-10 px-10">
                  {/* Products Content */}
                  <div>
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">ELECTRONIC MESSAGE DISPLAY</h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li><Link onClick={() => setProductsOpen(false)} to="/production-counter-display" className="hover:text-purple-700 transition">Production Counter Display</Link></li>
                      <li><Link onClick={() => setProductsOpen(false)} to="/andon-board-display" className="hover:text-purple-700 transition">Andon Board Display</Link></li>
                      <li><Link onClick={() => setProductsOpen(false)} to="/industrial-parameter-display" className="hover:text-purple-700 transition">Industrial Parameter Display</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">ANDON TOWER LIGHT</h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li><Link onClick={() => setProductsOpen(false)} to="/andon-signal-tower-light" className="hover:text-purple-700 transition">Andon Signal Tower Light</Link></li>
                      <li><Link onClick={() => setProductsOpen(false)} to="/wireless-andon-tower-light" className="hover:text-purple-700 transition">Wireless Andon Tower Light</Link></li>
                      <li><Link onClick={() => setProductsOpen(false)} to="/cloud-andon-tower-light" className="hover:text-purple-700 transition">Cloud Andon Tower Light</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about-us" className="hover:text-purple-700 transition">Company</Link>
            <Link to="/blogs" className="hover:text-purple-700 transition">Blogs</Link>
            <Link to="/contact-us" className="hover:text-purple-700 transition">Contact Us</Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden xl:flex gap-3 2xl:gap-5 items-center">
            <div
              onClick={() => setDemoOpen(true)}
              className="cursor-pointer border border-purple-700 text-purple-700 px-4 2xl:px-5 py-2 rounded hover:bg-purple-50 transition font-medium text-xs 2xl:text-sm whitespace-nowrap"
            >
              BOOK A DEMO
            </div>

            <DemoBtn />

            <button
              onClick={() => navigate("/contact-us")}
              className="bg-purple-700 cursor-pointer text-white px-4 2xl:px-6 py-2 rounded hover:bg-purple-800 transition font-medium text-xs 2xl:text-sm whitespace-nowrap"
            >
              TRY FOR FREE
            </button>
          </div>

          {/* Mobile Hamburger & CTA */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={() => setDemoOpen(true)}
              className="hidden sm:block border border-purple-700 text-purple-700 px-3 py-1.5 rounded hover:bg-purple-50 transition font-medium text-xs whitespace-nowrap"
            >
              BOOK DEMO
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
