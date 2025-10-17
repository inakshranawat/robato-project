import React from 'react';

import HeroSection from '../components/HeroSection';
import Insights from '../components/Insights';
import Accodian from '../components/Accodian';
import FrequentlyAsked from '../components/FrequentlyAsked';
import SwiperBlogs from '../components/SwiperBlogs';
import PurupleReadySection from "../components/PurupleReadySection"

const Home = () => {
  return (
    <div className="bg-gray-50 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <HeroSection />
      </section>

      {/* Insights Section */}
      <section className="py-32 bg-white px-10 md:px-20">
        <Insights />
      </section>

      {/* Unlock Features Section */}
      <section className="py-32 bg-gray-50 px-10 md:px-20">
        <Accodian />
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-32 bg-white px-10 md:px-20">
        <FrequentlyAsked />
      </section>

      {/* Swiper Blogs Section */}
      <section>
        <SwiperBlogs />
      </section>

      <section>
        <PurupleReadySection/>
      </section>

      

    
    </div>
  );
};

export default Home;
