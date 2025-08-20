import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function mentor() {
   return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-blue-600 font-bold text-xs">
                M
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Mentoring Young Minds</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This holistic program is designed to benefit college students aiming to join top ranked universities in
            Pakistan and abroad.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-slate-700 italic text-lg">
              "When asking for directions, don't ask passersby; ask those who have entered the forest."
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="font-medium">Faculty:</span>
              <span className="font-bold">100+ Qualified</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="font-medium">Countries:</span>
              <span className="font-bold">20+</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="font-medium">Alumni:</span>
              <span className="font-bold">Top Ranked Universities</span>
            </div>
          </div> */}
        </div>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3"> </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Career Counselling</h3>
              <p className="text-slate-600 leading-relaxed">
                What to decide which country/university to choose for higher education?
              </p>
              <ul className='text-slate-600 leading-relaxed list-disc p-5'>
                <li>100+ Internally Qualified Faculty</li>
                <li>20 Countries</li>
                <li>Top Ranked University Alumni</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Profile Building Bootcamps</h3>
              <p className="text-slate-600 leading-relaxed">
                Make your application stand out from your peers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Internships at Research Labs</h3>
              <p className="text-slate-600 leading-relaxed">
                Consolidate your resume with solid experience at the top research labs in the country.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Foreign Language Course</h3>
              <p className="text-slate-600 leading-relaxed">
                Invest in your financial independence abroad in addition to increasing your chances of securing fully
                funded scholarships.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lunch with a NUSTIAN</h3>
              <p className="text-slate-600 leading-relaxed">
                Want to join the best university in the country? Meet the highest performing NUSTian. Discuss how to
                plan before joining NUST. If you have already joined, benefit from top performers for excelling in a competitive environment.

              </p>
            </div>
          </div>
        </section>



      </div>
      <Footer />
    </main>
  )
}
