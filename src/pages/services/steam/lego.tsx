import { ActivitiesSection } from '@/components/ActivitySection';
import Footer from '@/components/Footer';
import LegoActivitiesTimeline from '@/components/LegoActivities';
import LegoActivities from '@/components/LegoActivities';
import Hero from '@/components/LegoHero';
import { Navbar } from '@/components/Navbar';
import ParentsTestimonials from '@/components/Parents';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const FirstLegoLeaguePage = () => {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
        <Hero />
      <div className="max-w-full mx-auto px-6 py-12 ">
        {/* Introduction */}

        {/* Activities Section */}
        <section className="mb-12">
          
            <LegoActivities/>
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-12 px-10 md:px-20 lg:px-36 ">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 pb-3 text-center">Learning Outcomes</h2>

          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Participants will gain foundational skills in robotics, programming, and teamwork while having fun
              building and competing with LEGO.
            </p>
            <p className="text-slate-700 leading-relaxed">
              They will leave inspired and motivated to explore STEM further, developing critical thinking,
              problem-solving, and communication skills essential for future success.
            </p>
          </div>
        </section>

      </div>

      <ParentsTestimonials />
        <Footer />
    </main>
  )
};

export default FirstLegoLeaguePage;