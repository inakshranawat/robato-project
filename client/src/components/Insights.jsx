import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/useContext'
import {motion} from "framer-motion"
import { HandShake, InsightImage } from '../assets/assets'


const Insights = () => { 
    const navigate = useNavigate()
    const {setDemoOpen} = useAppContext()
  return (
     <>
       <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="py-8 sm:py-12 lg:py-16">
             <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-zinc-700 tracking-tight font-bold max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center mx-auto px-4'>
                THE ANALYTICS PLATFORM THAT EMPOWERS MANUFACTURERS TO ACHIEVE THE EXTRAORDINARY
             </h2>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12">
             <img src={InsightImage} alt="Analytics Platform" className="w-full h-auto" />
          </div>

          {/* Buttons Section */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 lg:mb-20 px-4'>
              <button 
                onClick={()=> setDemoOpen(true)} 
                className='w-full sm:w-auto cursor-pointer text-purple-950 border border-purple-950 px-6 sm:px-8 py-3 hover:text-white hover:bg-purple-950 bg-transparent transition-colors duration-300 font-medium'
              >
                Book a Demo
              </button>
              <button 
                onClick={()=> navigate('/contact-us')} 
                className='w-full sm:w-auto border border-purple-950 px-6 sm:px-8 py-3 text-white hover:bg-gray-500 hover:text-black bg-purple-950 transition-colors duration-300 font-medium'
              >
                TRY IT NOW
              </button>
          </div>

          {/* Testimonial Section */}
          <div className='w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-20 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 bg-indigo-900 mt-12 sm:mt-16 lg:mt-20'>
             {/* Text Content */}
             <div className='flex-1 flex flex-col justify-center'>
                <h1 className='tracking-tight text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl max-w-full lg:max-w-lg'>
                  "WE DOUBLED OUR CAPACITY WITH NO ADDITIONAL MACHINES."
                </h1>
                <motion.p 
                  className='text-white text-sm sm:text-base max-w-full lg:max-w-lg mt-4 sm:mt-6'
                  initial={{opacity:0 , x:-70}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{duration:1,delay:0.3}}
                >
                  <span className='font-bold'>MATT TOWNSEND</span>, DIRECTOR OF OPERATIONAL EXCELLENCE, PARAGON MEDICAL
                </motion.p>
             </div>

             {/* Image */}
             <div className='flex-1 flex items-center justify-center lg:justify-end'>
               <motion.img 
                 className='w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg'
                 initial={{opacity:0 , x:70}}
                 whileInView={{opacity:1, x:0}}
                 viewport={{once:true}}
                 transition={{duration:1,delay:0.2}}
                 src={HandShake} 
                 alt="Handshake" 
               />
             </div>
          </div>
       </div>
     </>
  )
}

export default Insights