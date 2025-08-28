import { ActivitiesSection } from '@/components/ActivitySection';
import Footer from '@/components/Footer';
import LegoActivitiesTimeline from '@/components/LegoActivities';
import LegoActivities from '@/components/LegoActivities';
import Hero from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { legoTestimonials, TestimonialsSection } from '@/components/Parents';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const FirstLegoLeaguePage = () => {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
        <Hero image='/masscot/bytebuddyR.jpg' imageName='Byte Buddy' heading='First LEGO League' text='First LEGO League is a renowned international STEM competition held across 110 countries. We offer our local LEGO League competition at your campus.' />


      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">  
            <LegoActivities/>
        </section>

        <section className="px-10 md:px-20 lg:px-36 ">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 p-3 text-center">Learning Outcomes</h2>
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

      <TestimonialsSection testimonials={legoTestimonials} />
        <Footer />
    </main>
  )
};

export default FirstLegoLeaguePage;