import AIActivities from "@/components/AIActivites";
import AIHero from "@/components/AIHero";
import Footer from "@/components/Footer";
import Hero from "@/components/LegoHero";
import { Navbar } from "@/components/Navbar";
import { aiTestimonials,  TestimonialsSection } from "@/components/Parents";
import React from "react";

export default function aforai() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero image="/masscot/agentvirtual.jpg" imageName="Agent Virtual" heading="A is for AI" text="As AI integrates into every facet of our children's lives, particularly among Generation Alpha, they are often regarded as AI natives. These AI natives tend to place excessive trust in and rely heavily on AI applications such as ChatGPT. It is essential to provide guidance and support to help them navigate biases and ethical issues associated with AI, ensuring they develop a balanced and realistic understanding of the AI revolution." />

      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">
          <AIActivities />
        </section>

        <section className="px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 text-center">
            Learning Outcomes
          </h2>

          <div className="">
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
      <TestimonialsSection testimonials={aiTestimonials} />
      <Footer />
    </main>
  );
}
