import { ActivitiesSection } from '@/components/ActivitySection';
import Footer from '@/components/Footer';
import LegoActivitiesTimeline from '@/components/LegoActivities';
import LegoActivities from '@/components/LegoActivities';
import { Navbar } from '@/components/Navbar';
import ParentsTestimonials from '@/components/Parents';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const FirstLegoLeaguePage = () => {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
      {/* Header Section */}
      <div className="bg-blue-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center">
              <h1 className="text-3xl font-bold text-blue-600">FIRST LEGO League</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-6 py-12 ">
        {/* Introduction */}
        <div className="mb-12 px-10 md:px-20 lg:px-36">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            FIRST LEGO League is a renowned international STEM competition held across{" "}
            <span className="font-semibold text-blue-700">110 countries</span>. We offer our local LEGO League
            competition at your campus.
          </p>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <span className="font-medium">Age Group:</span>
            <span className="font-bold">8-14 years</span>
          </div>
        </div>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">Activities</h2>
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