import AIActivities from "@/components/AIActivites";
import AIHero from "@/components/AIHero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ParentsTestimonials from "@/components/Parents";
import SherlockActivities from "@/components/SherlockActivities";
import Sherlockhero from "@/components/sherlockhero";
import React from "react";

export default function jrsherlock() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <Sherlockhero />

      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">
          <SherlockActivities />
        </section>

        <section className="px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 text-center">
            Learning Outcomes
          </h2>

          <div className="">
            <p className="text-slate-700 leading-relaxed">
              Students will learn how to hide and encode messages, practice breaking simple codes, explore historical techniques of secret communication, understand the basics of cryptography, and discover how these skills connect to modern cybersecurity and career opportunities.
            </p>
          </div>
        </section>
      </div>
      <ParentsTestimonials />
      <Footer />
    </main>
  );
}
