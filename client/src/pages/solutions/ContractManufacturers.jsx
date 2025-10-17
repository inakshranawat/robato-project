

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../../context/useContext";
import FrequentlyAsked from '../../components/FrequentlyAsked'
import SwiperBlogs from '../../components/SwiperBlogs'
import { 
  contract_manufacturers_bgimg,
  downtimelaptopimg,
  oee_report_laptopimg
} from '../../assets/assets';
import { motion } from 'framer-motion'
import IndustrySolutions from '../../components/IndustrySolutions';
import MachinoxProApplication from '../../components/MachinoxProApplication';
import ShopFloor from '../../components/ShopFloor';

const ContractManufacturers = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-center bg-cover w-full py-20 px-6 md:px-20 lg:px-30" style={{ backgroundImage: `url(${contract_manufacturers_bgimg})` }}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
        >
          WELCOME TO ROBATO SYSTEMS: <br /> YOUR TRUSTED PARTNER <br/>IN CONTRACT MANUFACTURING 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
        >
          Contract manufacturers need every edge they can get in an ever-more competitive space. Harnessing the power of machine data is that edge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
        >
          <button onClick={() => navigate('/contact-us')} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3">
            TRY FOR FREE
          </button>
          <button className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900">
            BOOK A DEMO
          </button>
        </motion.div>
      </div>

      
{/**  ANALYZE & OPTIMIZE YOUR PRODUCTION RUNS*/}

      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={downtimelaptopimg}
            alt=""
          />

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              ANALYZE & OPTIMIZE YOUR PRODUCTION RUNS
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Utilize utilization analytics to maximize production capacity by identifying improvement opportunities through trend analysis.</li>
               <li className='mt-3'>Enhance operational and asset performance visibility with real-time dashboards, promoting transparency across the factory floor.</li>
               <li className='mt-3'>Empower factory workers to meet production targets by identifying and addressing production bottlenecks using downtime analytics.</li>
                              
             
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
        </div>
      </div>

{/** Monitor real-time performance & quality */}
   
   <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
      
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Monitor real-time performance & quality
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Utilize job, part number, and operator analytics to monitor overall job performance, gaining insights into cycle times, shift performance, and OEE metrics.</li>
               <li className='mt-3'>Enhance setup times by implementing process monitoring and operator apps, motivating factory workers to efficiently manage and complete tasks.</li>
               <li className='mt-3'>Streamline processes, even on short production cycles, by employing real-time production and quality monitoring for optimization.</li>
               
               
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
              <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={oee_report_laptopimg}
            alt=""
          />
        </div>
      </div>

{/** IMPROVE EFFICIENCY BY 20% WITH REAL-TIME VISIBILITY */}

   <motion.div
      className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 py-16 md:py-20 w-full text-white bg-[#430099] px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Text */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug">
          IMPROVE EFFICIENCY BY 20% <br /> WITH REAL-TIME VISIBILITY
        </h1>
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          In the age of Industrial IoT, manufacturers who realize the benefits of smart technology will stay a step ahead of the competition in an ever-competitive landscape.
        </p>
      </motion.div>
    </motion.div> 

{/** MACHINOX PRO APPLICATIONS*/}
      
      <MachinoxProApplication/>


{/**WE LET OUR CUSTOMERS DO THE TALKING FOR US. */}
<div className="bg-[#F8F8F8] px-5 md:px-10 lg:px-20 py-16">
      {/* Heading */}
      <motion.h1
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#444444] text-center md:text-left mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WE LET OUR CUSTOMER DO THE TALKING FOR US
      </motion.h1>

      {/* Container */}
      <motion.div
        className="bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{once:true}}
      >
        {/* Left Text */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#444444] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{once:true}}
        >
          CASE STUDY: <br /> OPTIMIZING  <br/> EQUIPMENT <br/> UTILIZATION
        </motion.h1>

        {/* Right Content */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{once:true}}
        >
          <p className="text-sm md:text-base text-[#444444]">
            Learn how MachinoX Pro helped Wiscon Products, an advanced CNC precision turned parts manufacturer, improve their efficiency and Overall Equipment Effectiveness by 30% in year one.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-5">
            <motion.button
              className="bg-purple-950 text-white px-8 py-2 hover:bg-gray-600 hover:text-black rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.button>
            
          </div>
        </motion.div>
      </motion.div>
    </div>

{/**industry solutions */}

      <IndustrySolutions/>
      
      <div className='py-20'>

      <FrequentlyAsked/>
      </div>

      <SwiperBlogs/>

      <ShopFloor/>
      
    </>
  )
}

export default ContractManufacturers
