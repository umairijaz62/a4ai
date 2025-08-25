import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ParentsTestimonials from "@/components/Parents";
import PieChart from "@/components/PieChart";
import SteamHero from "@/components/SteamHero";
import TourActivities from "@/components/TourActivities";
import React from "react";

export default function steamtour() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <SteamHero />

      <div className="max-w-full mx-auto px-6">
        <section className="mb-12 py-12">
          <TourActivities />
        </section>
      </div>
      <ParentsTestimonials />
          <PieChart />
      <Footer />
    </main>
  );
}
