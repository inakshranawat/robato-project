import React, { useState } from "react";
import { accordian_1, dashboard, data, DataDriven, DataDrivenn, MachineOverview, Organisation, ShopFloor } from "../assets/assets";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Accodian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Section 1 */}
      <div className="mt-10 px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl text-zinc-700 font-bold text-center mx-auto max-w-4xl">
          UNLOCK THE FULL POTENTIAL OF YOUR MANUFACTURING OPERATIONS
        </h1>

        <div className="flex flex-col lg:flex-row mt-20 gap-10 min-h-[600px] overflow-hidden">
          <div className="flex-1 overflow-y-auto h-[600px] pr-2">
            {data.map((item, index) => (
              <div key={index} className="mb-6 select-none">
                <div
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between cursor-pointer bg-white hover:bg-purple-50 border border-purple-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <h2 className="text-lg font-semibold text-zinc-700 hover:text-indigo-900">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700"
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 text-gray-600 pl-4 pr-2"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-start">
            <motion.img
              className="max-w-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]  h-auto"
              src={accordian_1}
              alt="Illustration"
              initial={{ opacity: 0 ,x:70}}
              whileInView={{opacity:1, x:0}}
              transition={{ duration: 0.8 , delay:0.4 }}
              viewport={{once: true}}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[rgb(250,250,250)] px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl text-zinc-700 font-bold text-center mx-auto max-w-4xl">
          COMPREHENSIVE PERSPECTIVE OF THE ENTIRE ORGANISATION
        </h1>

        <div className="flex flex-col lg:flex-row mt-20 gap-10 min-h-[600px] overflow-hidden">
          <div className="flex-1 flex justify-center items-start">
            <motion.img
              className="max-w-full rounded-lg h-auto shadow-[0_20px_50px_rgba(0,0,0,0.4)] "
              src={dashboard}
              alt="Illustration"
              initial={{ opacity: 0 , x:-80 }}
              whileInView={{ opacity: 1 , x:0 }}
              transition={{ duration: 1 , delay:0.4 }}
              viewport={{once:true}}
            />
          </div>

          <div className="flex-1 overflow-y-auto h-[600px] pr-2">
            {Organisation.map((item, index) => (
              <div key={index} className="mb-6 select-none">
                <div
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between uppercase cursor-pointer bg-white hover:bg-purple-50 border border-purple-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <h2 className="text-lg font-semibold text-zinc-700 hover:text-indigo-900">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700"
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 text-gray-600 pl-4 pr-2"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-10 px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl text-zinc-700 font-bold text-center mx-auto max-w-4xl">
          ENHANCED PRODUCTION INSIGHTS - PERSONALIZED TO YOUR SHOP FLOOR
        </h1>

        <div className="flex flex-col lg:flex-row mt-20 gap-10 min-h-[600px] overflow-hidden">
          <div className="flex-1 overflow-y-auto h-[600px] pr-2">
            {ShopFloor.map((item, index) => (
              <div key={index} className="mb-6 select-none">
                <div
                  onClick={() => toggleOpen(index)}
                  className="flex items-center uppercase justify-between cursor-pointer bg-white hover:bg-purple-50 border border-purple-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <h2 className="text-lg font-semibold text-zinc-700 hover:text-indigo-900">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700"
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 text-gray-600 pl-4 pr-2"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-start">
            <motion.img
              className="max-w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] h-auto"
              src={MachineOverview}
              alt="Illustration"
              initial={{ opacity: 0 ,x:70 }}
              whileInView={{ opacity: 1 , x:0 }}
              transition={{ duration: 0.8 , delay:0.4 }}
              viewport={{once: true}}
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-[rgb(250,250,250)] px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl uppercase text-zinc-700 font-bold text-center mx-auto max-w-4xl">
          A Modern Platform to Empower Your data-driven Business
        </h1>

        <div className="flex flex-col lg:flex-row mt-20 gap-10 min-h-[600px] overflow-hidden">
          <div className="flex-1 flex justify-center items-start">
            <motion.img
              className="max-w-full shadow-[0_10px_30px_rgba(0,0,0,0.6)]  rounded-md h-auto"
              src={DataDrivenn}
              alt="Illustration"
              initial={{ opacity: 0 ,x:-70 }}
              whileInView={{ opacity: 1 , x:0 }}
              transition={{ duration: 0.8 , delay:0.3 }}
              viewport={{once:true}}
            />
          </div>

          <div className="flex-1 overflow-y-auto h-[600px] pr-2">
            {DataDriven.map((item, index) => (
              <div key={index} className="mb-6 select-none">
                <div
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between uppercase cursor-pointer bg-white hover:bg-purple-50 border border-purple-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <h2 className="text-lg font-semibold text-zinc-700 hover:text-indigo-900">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700"
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 text-gray-600 pl-4 pr-2"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accodian;
