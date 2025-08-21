"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/legobg.jpg" 
        alt="STEM Learning"
        fill
        className="object-center"
      />

      <div className="absolute inset-0 "></div>

      <div className="relative flex flex-col w-full h-full justify-center gap-6 p-24">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-300">
          First Lego League
        </h1>
        <p className="text-blue-50 text-lg pr-[50%]">FIRST LEGO League is a renowned international STEM competition held across 110 countries. We offer our local LEGO League competition at your campus.</p>
      </div>

      <div className="absolute bottom-[-40px] right-8 z-20 flex flex-col md:flex-row shadow-lg">
        <div className="bg-blue-400 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">FIRST LEGO LEAGUE</h2>
          <p className="text-lg font-semibold mt-1">Age</p>
          <p className="mt-2 text-sm">4-16</p>
        </div>
        <div className="bg-blue-600 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">FIRST LEGO LEAGUE</h2>
          <p className="text-lg font-semibold mt-1">Duration</p>
          <p className="mt-2 text-sm">6 hours</p>
        </div>
        <div className="bg-blue-900 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">FIRST LEGO LEAGUE</h2>
          <p className="text-lg font-semibold mt-1">Period </p>
          <p className="mt-2 text-sm">3 Eeeks</p>
        </div>
      </div>
    </section>
  );
}
