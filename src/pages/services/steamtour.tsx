import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import ParentsTestimonials from '@/components/Parents'
import TourActivities from '@/components/TourActivities'
import React from 'react'

export default function steamtour() {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
       <div className="bg-blue-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-blue-600">STEM Tour: A Day at NUST</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12 px-10 md:px-20 lg:px-36">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Join us and discover the wonders of No. 1 ranked university in Pakistan.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Why STEM?</h3>
              <p className="text-slate-700">
                <span className="font-bold text-2xl text-blue-600">96%</span> of jobs are generated from STEM
                technologies
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Why a STEM Tour?</h3>
              <p className="text-slate-700">
                A short three hour tour of NUST labs transformed the opinion of{" "}
                <span className="font-bold text-2xl text-blue-600">45%</span> of grade 5 students
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="/piechart.jpg"
              alt="STEM Career Distribution Pie Chart"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Activities Section */}
        <section className="mb-12">
                  <h2 className="text-4xl font-bold text-blue-600 mb-8 border-b border-slate-200 pb-3 text-center">
                    Activities
                  </h2>
                  <TourActivities />
                </section>
            {/* <p className='text-slate-600 leading-relaxed'>Join us for an exciting day at NUST</p> */}
      </div>
      <ParentsTestimonials />
      <Footer />
    </main>
  )
}
