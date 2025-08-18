import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const FirstLegoLeaguePage = () => {
   return (
    <main className="min-h-screen bg-blue-50">
        <Navbar />
      {/* Header Section */}
      <div className="bg-blue-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">FIRST LEGO League</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3">Activities</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Robot Building</h3>
              <p className="text-slate-600 leading-relaxed">
                Students design and construct robots using LEGO Mindstorms technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Programming</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn to code robots using intuitive programming interfaces.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Competition Challenges</h3>
              <p className="text-slate-600 leading-relaxed">
                Participate in exciting robot missions and timed challenges.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Research Project</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore real-world problems and present innovative solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Collaboration</h3>
              <p className="text-slate-600 leading-relaxed">
                Work together to solve challenges and develop core values.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">Learning Outcomes</h2>

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
        <Footer />
    </main>
  )
};

export default FirstLegoLeaguePage;