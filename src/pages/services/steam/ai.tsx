import AIActivities from "@/components/AIActivites";
import AIHero from "@/components/AIHero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ParentsTestimonials from "@/components/Parents";
import React from "react";

export default function aforai() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <AIHero />

      <div className="max-w-full mx-auto px-6 py-12">
        {/* Activities Section */}
        <section className="mb-12">
          <AIActivities />
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-12 px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 pb-3 text-center">
            Learning Outcomes
          </h2>

          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Students will acquire prompt engineering skills to effectively
              utilize ChatGPTs. They will gain an understanding of the three
              fundamental components of AI applications, which will help set
              realistic expectations and alleviate unnecessary fears.
              Additionally, this knowledge will enable them to build safeguards
              against AI biases and ethical challenges.
            </p>
          </div>
        </section>
      </div>
      <ParentsTestimonials />
      <Footer />
    </main>
  );
}
