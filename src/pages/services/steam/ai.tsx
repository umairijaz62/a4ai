import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function aforai() {
   return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="bg-blue-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-blue-600 font-bold text-xs">
                AI
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">A is for AI</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            As AI integrates into every facet of our children's lives, particularly among Generation Alpha, they are
            often regarded as AI natives. These AI natives tend to place excessive trust in and rely heavily on AI
            applications such as ChatGPT. It is essential to provide guidance and support to help them navigate biases
            and ethical issues associated with AI, ensuring they develop a balanced and realistic understanding of the
            AI revolution.
          </p>

          <div className="flex gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="font-medium">Age Group:</span>
              <span className="font-bold">8-14 years</span>
            </div>
           
          </div>
        </div>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3">Activities</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Bringing Stories to Life</h3>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Building Your First AI Program</h3>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How To Stop Robots Taking Over The World?</h3>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI and The Ugly Duckling Challenge</h3>
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">Learning Outcomes</h2>

          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Students will acquire prompt engineering skills to effectively utilize ChatGPTs. They will gain an understanding of the three fundamental components of AI applications, which will help set realistic expectations and alleviate unnecessary fears. Additionally, this knowledge will enable them to build safeguards against AI biases and ethical challenges.

            </p>
            <p className="text-slate-700 leading-relaxed">
            </p>
          </div>
        </section>

      </div>
        <Footer />
    </main>
  )
}
