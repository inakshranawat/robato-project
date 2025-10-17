// ProductionMonitoring.jsx
import React, { useEffect, useState } from "react";
import {
  alarmlaptopimg,
  alertimg,
  automationlaptopimg,
  cycletimelaptopimg,
  mobileimg,
  plugplay,
  tsugamiimg,
  laptop2,
  shoopfloorimg,
  brotherlaptopimg,
  cutcyclelaptopimg,
  lightningfast_icon,
  easily_connect_icon,
  hit_the_ground_icon,
  immediate_value_icon,
  smarter_icon,
  speaker_icon,
  alert_icon,
  safety_icon,
  factory_bg_blur,
  tool_failure_icon,
  tool_display_icon,
  scrap_icon,
  solution_icon,
  build_app_icon,
  workflow_icon,
} from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useContext";
import { motion, AnimatePresence } from "framer-motion";
import FrequentlyAsked from "../../components/FrequentlyAsked";
import SwiperBlogs from "../../components/SwiperBlogs";

const PredicitiveMaintenance = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();
  const [activeImage, setActiveImage] = useState(0);

  // Determine if viewport is mobile (<= 768px) to tune animation durations
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Framer Motion variants for slide animation with mobile-optimized durations
  const animDuration = isMobile ? 0.45 : 0.8;
  const exitDuration = isMobile ? 0.35 : 0.5;
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: animDuration } },
    exit: { x: -200, opacity: 0, transition: { duration: exitDuration } },
  };

  const images = [plugplay, laptop2, brotherlaptopimg];
  const SophisticatedImages = [tsugamiimg, cycletimelaptopimg, alertimg];
  const PredictiveSectionImages = [alarmlaptopimg, automationlaptopimg, mobileimg];

  const AndonApart = [
    {
      icon: lightningfast_icon,
      title: "Rapid Deployment",
      points: ["Plug-and-play simplicity", "Scalable and user-friendly.", "Seamless connections."],
    },
    {
      icon: easily_connect_icon,
      title: "Instant Data Utilisation",
      points: [
        "Eliminates the need for time-consuming data tag mapping.",
        "Immediate data usability..",
      ],
    },
    {
      icon: hit_the_ground_icon,
      title: "Immediate Returns",
      points: ["Pre-built applications with no initial development needed.", "Quick value realisation."],
    },
    {
      icon: immediate_value_icon,
      title: "Universal Connectivity",
      points: [
        "Effortlessly integrates machine data throughout your digital factory.",
        "Enhances data intelligence.",
      ],
    },
    {
      icon: smarter_icon,
      title: "Manufacturing Expertise",
      points: ["Offers essential context to make data actionable.", "Specialised in manufacturing verticals."],
    },
  ];

  return (
    <>
      {/* HERO: keep desktop sizing intact (applied at md:), mobile optimized for <=768px */}
      <section className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:py-[50px] py-6 px-4 md:px-20 gap-6">
        <div className="w-full md:w-[800px]">
          <motion.h1
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          
          className="text-2xl md:text-4xl md:pl-20 text-[#444444] font-bold uppercase leading-tight">
            Elevate Your Operations with Robato Systems' Predictive Maintenance Services
          </motion.h1>

          <motion.ul
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}}
            viewport={{once:true}}
          
          className="mt-4 md:pl-30 pl-5 list-disc space-y-2 text-sm md:text-base">
            <li>Enhance predictive analytics with high-frequency machine data.</li>
            <li>Diagnose and predict equipment failures with precision.</li>
            <li>Prevent breakdowns in manufacturing equipment.</li>
            <li>No need for additional sensors.</li>
          </motion.ul>
        </div>

        <div className="w-full md:w-[500px] flex justify-center md:justify-end">
          <motion.img
            src={brotherlaptopimg}
            alt="laptop"
            className="w-full md:w-[500px] max-w-sm object-contain"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </div>
      </section>

      {/* FEATURE 3-COL: keep desktop layout, stack on mobile */}
      <motion.section
         initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      
      className="px-4 md:px-0 md:flex md:justify-center md:gap-15 gap-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-6 md:gap-10 w-full md:w-auto">
          {[
            {
              icon: speaker_icon,
              title: "Easily establish connections with any machine",
              points: ["Establish connections and gather high-frequency data.", "Visualise data from shop floor equipment."],
            },
            {
              icon: alert_icon,
              title: "Anticipate machine issues",
              points: ["Utilise transformed data.", "Develop predictive algorithms and workflows promptly."],
            },
            {
              icon: safety_icon,
              title: "Implement solutions rapidly",
              points: ["Provide pre-built or customised applications on the Edge.", "Prevent issues proactively."],
            },
          ].map((card, idx) => (
            <div key={idx} className="text-center md:text-left md:w-[300px]">
              <img src={card.icon} width={100} alt="" className="mx-auto md:mx-0" />
              <h2 className="text-lg md:text-xl font-bold mt-3 text-[#444444]">{card.title}</h2>
              <ul className="list-disc mt-2 text-sm md:text-base pl-5 md:pl-5">
                {card.points.map((p, i) => (
                  <li key={i} className="w-full md:w-[300px]">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA buttons */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 py-10 px-4 md:px-0">
        <button
          onClick={() => navigate("/contact-us")}
          className="w-full md:w-auto px-6 py-3 bg-purple-950 text-white hover:bg-gray-600 hover:text-black rounded text-center"
        >
          TRY FOR FREE
        </button>
        <button
          onClick={() => setDemoOpen(true)}
          className="w-full md:w-auto px-6 py-3 border border-purple-950 text-purple-950 hover:bg-purple-950 hover:text-white rounded"
        >
          BOOK A DEMO
        </button>
      </section>

      {/* PROBLEM SECTION: background image with overlay; keep desktop typography but scale on mobile */}
      <section
        className="flex flex-col md:flex-row items-start md:justify-around bg-center bg-cover md:py-20 py-10"
        style={{
          backgroundImage:
            `url(${factory_bg_blur})`
        }}
      >
        <div className="w-full md:w-[500px] px-4 md:px-0">
          <div className="bg-black/50 md:bg-transparent p-4 md:p-0 rounded md:rounded-none">
            <h1 className="text-3xl md:text-6xl tracking-tighter md:w-[500px] text-white font-extrabold uppercase py-6 md:py-20 leading-tight">
              Unexpected downtime comes at a significant cost
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[500px] px-4 md:px-0 mt-6 md:mt-0">
          <h2 className="text-white text-2xl md:text-3xl font-bold">THE ISSUE</h2>
          <ul className="list-disc text-white pl-5 md:pl-10 mt-4 space-y-2 text-sm md:text-base leading-relaxed">
            <li>Acquiring, parsing, and cleaning data for factory analysis is a messy and tedious task.</li>
            <li>Tool breakage can result in significant costs.</li>
            <li>Damaged tools may produce seemingly compliant parts that are ultimately scrapped.</li>
            <li>Subtle variations in machine load, torque, acceleration, and spindle speed can lead to parts being produced outside of necessary tolerances.</li>
            <li>All of these factors consume both time and finances.</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="flex flex-col md:flex-row items-start md:justify-around bg-[#430099] text-white py-10 md:py-0 px-4 md:px-0">
        <div className="w-full md:w-[500px] px-0 md:px-10 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold">THE SOLUTION</h2>
          <ul className="list-disc mt-5 pl-5 md:pl-10 space-y-2 text-sm md:text-base">
            <li>Collect high-frequency machine data in real-time.</li>
            <li>Utilise this data for diagnosis and prediction.</li>
            <li>Proactively prevent various types of failures.</li>
          </ul>
        </div>

        <div className="w-full md:w-[500px] px-4 md:px-0">
          <h1 className="text-3xl md:text-6xl tracking-tighter md:w-[500px] font-extrabold uppercase py-6 md:py-20 leading-tight">
            Anticipate Issues — Prevent Downtime in Advance
          </h1>
        </div>
      </section>

      {/* EFFORTLESS DEPLOYMENT: keep desktop widths but make mobile stack nicely */}
      <section className="flex flex-col md:flex-row items-start md:items-center md:py-30 py-8 px-4 md:px-0 gap-6">
        <div className="w-full md:w-[800px]">
          <h1 className="text-2xl md:text-5xl md:pl-20 tracking-tighter text-[#444444] font-bold uppercase leading-tight">
            Effortless Deployment
          </h1>
          <p className="font-bold text-[#444444] md:pl-20 mt-4 text-lg md:text-2xl">Industrial IoT Platform for Machines</p>
          <ul className="list-disc text-[#444444] md:w-[700px] pl-0 md:pl-25 text-base md:text-xl mt-4 space-y-2">
            <li>Andon connects to thousands of machine tools</li>
            <li>Data scientists develop algorithms for predicting quality defects and tool life extension.</li>
            <li>Operators label data via the operator interface when tool failures or quality defects happen.</li>
            <li>ML/AI algorithms analyse patterns from the extensive data collected from each machine.</li>
            <li>The algorithms detect issues before they reoccur and halt the machine to prevent failure.</li>
          </ul>
        </div>

        <div className="w-full md:w-[500px] h-[400px] relative overflow-hidden flex justify-center md:justify-end">
          <motion.img
            src={cutcyclelaptopimg}
            alt="laptop animation"
            className="w-full md:w-[500px] h-full object-contain absolute top-0 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animDuration }}
          />
        </div>
      </section>

      {/* ICON FEATURE ROW (interactive) */}
      <motion.section
        initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className="px-4 md:px-10 py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-center">
        {[{
          title: "Forecast Tool Malfunction",
          icon: tool_failure_icon,
          bullets: [
            "Identify the onset of stress fractures in tools.",
            "Alert the operator when such fractures are detected.",
            "Promptly remove affected tools from operation to prevent failure or breakage.",
          ],
        },{
          title: "Maximize Tool Utilization",
          icon: tool_display_icon,
          bullets: [
            "Identify tool wear from material variations, environmental factors, and cutting conditions.",
            "Extend tool lifespan by optimising tool usage.",
            "Maximise tool performance for prolonged use.",
          ],
        },{
          title: "Quality Problem Notifications",
          icon: scrap_icon,
          bullets: [
            "Prevent compromised tools from affecting performance",
            "Enhance finishing quality and prevent incomplete cuts.",
            "Implement tool chatter detection to address these issues.",
          ],
        }].map((card, i) => (
          <div key={i} onClick={() => setActiveImage(i)} className="cursor-pointer w-full md:w-[380px] text-center md:text-left">
            <img className="mx-auto md:mx-0 hover:scale-105 transition-transform duration-500" width={100} src={card.icon} alt="" />
            <h2 className="text-xl font-bold mt-5 text-[#444444]">{card.title}</h2>
            <ul className="list-disc mx-auto md:mx-0 mt-3 text-sm md:text-base pl-5 md:pl-5">
              {card.bullets.map((b, bi) => (
                <li key={bi} className="w-full md:w-[400px]">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* CREATE YOUR OWN */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6 px-4 md:pl-25 py-8">
        <div className="w-full md:w-[500px] h-[400px] relative overflow-hidden">
          <motion.img
            src={plugplay}
            alt="plugplay"
            className="w-full h-full object-contain absolute top-0 left-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </div>

        <div className="mt-2 md:mt-10 w-full md:w-[800px]">
          <h1 className="text-2xl md:text-5xl md:pl-20 tracking-tighter text-[#444444] font-bold uppercase leading-tight">Create Your Own</h1>
          <p className="pl-0 md:pl-20 text-[#444444] font-bold text-base md:text-xl mt-2">Harness High-Frequency Machine Data at Scale</p>
          <ul className="list-disc w-full md:w-[700px] mt-4 text-[#444444] pl-5 md:pl-30 text-base md:text-xl space-y-2">
            <li>Empower your data science team to expedite predictive analytics.</li>
            <li>Utilise data directly as inputs for time-series or machine learning models.</li>
            <li>Employ tools like Spark, R, and Python to create algorithms for failure detection.</li>
            <li>Deploy and oversee custom algorithms for edge data analysis.</li>
            <li>Trigger alerts to factory workers or preempt equipment failure using these algorithms.</li>
          </ul>
        </div>
      </section>

      {/* SECOND ICON ROW */}
      <motion.section
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className="flex flex-col md:flex-row items-start gap-6 justify-center px-4 md:px-0 py-6">
        {[{
          title: "Develop Your Custom Algorithms",
          icon: build_app_icon,
          bullets: ["Utilise high-frequency data from machine control or sensors.", "Employ this data as inputs for time-series or machine learning models."],
        },{
          title: "Implement at the Edge",
          icon: solution_icon,
          bullets: ["Implement and oversee custom algorithms.", "Deploy them to Andon Edge devices and detect potential failures using these algorithms", "Enable processing and analysis at the source."],
        },{
          title: "Automate Processes",
          icon: workflow_icon,
          bullets: ["Send operator alerts/notifications.", "Inform factory workers of required actions.", "Automatically initiate a feed-hold to halt machines before equipment failure occurs."],
        }].map((card, i) => (
          <div key={i} onClick={() => setActiveImage(i)} className="cursor-pointer w-full md:w-[360px] text-center md:text-left">
            <img className="mx-auto md:mx-0 hover:scale-105 transition-transform duration-500" width={100} src={card.icon} alt="" />
            <h2 className="text-xl font-bold mt-5 text-[#444444]">{card.title}</h2>
            <ul className="list-disc mt-3 text-sm md:text-base pl-5 md:pl-5">
              {card.bullets.map((b, bi) => (
                <li key={bi} className="w-full md:w-[400px]">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* THE UNIQUE ANDON ADVANTAGE - preserved desktop style, mobile stacked */}
      <section className="min-h-screen bg-gray-600 relative overflow-hidden flex items-start md:items-center py-10 md:py-0">
        <div
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-br from-purple-300 via-purple-800 to-purple-700"
          style={{
            width: "40%",
            clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)",
            transform: "translateX(-5%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              THE UNIQUE ANDON
              <br />
              ADVANTAGE
            </h1>
          </div>

          <div className="space-y-8 md:space-y-12 pl-0 md:pl-20">
            {AndonApart.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:gap-8 gap-4">
                <img className="flex-shrink-0 w-12 h-12 md:w-auto md:h-auto" src={feature.icon} alt="" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">{feature.title}</h3>
                  <ul className="space-y-1">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-white text-base md:text-xl flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CASE STUDY */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full px-4 md:px-0">
          <div className="flex justify-end mb-4">
            <div className="flex gap-4">
              <div className="w-12 h-20 bg-purple-400/30 rounded" />
              <div className="w-12 h-20 bg-purple-400/30 rounded" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white leading-tight">"OUR SCRAP RATE REDUCED CONSIDERABLY”</h1>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg md:text-2xl text-white">
              <span className="font-bold">Bob Merril</span>, <span className="font-light italic">Owner at BC Machining</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 px-2 md:px-0">
              <p className="text-white text-base md:text-xl leading-relaxed mb-6 font-light">
                Leveraging high-frequency data on spindle load to determine when the tools will fail, BC Machining can now detect a tool failure with 99% confidence up to 40 minutes before it fails.
              </p>

              <button className="border-2 border-white text-white font-bold text-base md:text-lg px-6 py-3 rounded hover:bg-white hover:text-purple-900 transition-all duration-300 uppercase tracking-wider">
                Download the Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Blogs */}
      <div className="py-10 px-4 md:px-0">
        <FrequentlyAsked />
      </div>
      <div className="px-4 md:px-0">
        <SwiperBlogs />
      </div>

      {/* FINAL CTA: keep desktop sizes, mobile stacked and centered */}
      <section
        className="relative w-full py-12 md:py-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${shoopfloorimg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 md:px-20 text-center md:text-left">
          <motion.h1
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className="text-3xl md:text-8xl font-bold text-white leading-tight">READY TO CONNECT</motion.h1>
          <motion.h1
          
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className="text-3xl md:text-8xl font-bold text-white mt-0">YOUR SHOP FLOOR</motion.h1>

          <div className="mt-6">
            <button onClick={() => navigate("/contact-us")} className="bg-white text-indigo-950 px-6 py-3 md:px-6 md:py-4 hover:bg-purple-950 hover:text-white rounded">
              TRY FOR FREE
            </button>
          </div>

          <p className="text-white mt-4">
            Want to see MachinoX Pro in action first?{" "}
            <span className="underline cursor-pointer" onClick={() => setDemoOpen(true)}>
              Book a Demo
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default PredicitiveMaintenance;
