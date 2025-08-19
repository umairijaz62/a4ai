import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function steamtour() {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
      <div className="bg-blue-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-blue-600 font-bold text-xs">
                S
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">STEM Tour: A Day at NUST</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Join us and discover the wonders of No. 1 ranked university in Pakistan through an exciting STEM exploration
            experience.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3">Tour Activities</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">STEM Talk</h3>
              <p className="text-slate-600 leading-relaxed">
                Engage with leading researchers and faculty members as they share insights into cutting-edge STEM
                research and innovations happening at NUST.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">STEM Competition</h3>
              <p className="text-slate-600 leading-relaxed">
                Participate in hands-on challenges and competitions that showcase the practical applications of science,
                technology, engineering, and mathematics.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Entertainment</h3>
              <p className="text-slate-600 leading-relaxed">
                Enjoy interactive demonstrations, lab tours, and engaging activities that make learning STEM concepts
                fun and memorable.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
