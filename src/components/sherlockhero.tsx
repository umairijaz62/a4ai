"use client";

import Image from "next/image";

export default function Sherlockhero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/bgsherlock.jpg" 
        alt="STEM Learning"
        fill
        className="object-center"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative md:hidden flex flex-col w-full h-full p-6 md:justify-center gap-6 md:p-24">
         <div className="flex bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-lg md:flex flex-col min-w-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            Junior Sherlock Holmes
          </h1>
          <p className="text-slate-900 text-lg">immersive adventure into the mysterious world of information security — where history, puzzles, and codes reveal the secrets of data hiding and the roots of modern cybersecurity.</p>
        </div>        
      </div>

        <div className="hidden z-100 lg:z-0 absolute animate-pulse bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-3xl md:flex flex-col min-w-auto"
        style={{
            top: '55%',
            right: '55%',
            animation: 'float5 3s ease-in-out infinite'
          }}>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            Junior Sherlock Holmes
          </h1>
          <p className="text-slate-900 text-lg">Immersive adventure into the mysterious world of information security where history, puzzles, and codes reveal the secrets of data hiding and the roots of modern cybersecurity.</p>
        </div>

      <div className="hidden md:block">
        {/* Bubble 1 */}
        <div 
          className="absolute bg-blue-300/60 rounded-full w-12 h-12 animate-pulse"
          style={{
            top: '60%',
            right: '50%',
            animation: 'float1 3s ease-in-out infinite'
          }}
        ></div>
        
        {/* Bubble 2 */}
        <div 
          className="absolute bg-blue-300/60 rounded-full w-9 h-9 animate-pulse"
          style={{
            top: '50%',
            right: '45%',
            animation: 'float2 2.5s ease-in-out infinite 0.5s'
          }}
        ></div>
        
        {/* Bubble 3 */}
        <div 
          className="absolute bg-blue-300/60 rounded-full w-7 h-7 animate-pulse"
          style={{
            top: '40%',
            right: '40%',
            animation: 'float3 2s ease-in-out infinite 1s'
          }}
        ></div>
        
        {/* Bubble 4 */}
        {/* <div 
          className="absolute bg-blue-300/60 rounded-full w-4 h-4 animate-pulse"
          style={{
            top: '35%',
            right: '35%',
            animation: 'float4 1.8s ease-in-out infinite 1.5s'
          }}
        ></div> */}
      </div>

      {/* Info Cards */}
      <div className="absolute bottom-[-40px] right-8 z-20 flex flex-col md:flex-row shadow-lg">
        <div className="bg-blue-400 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">Jr. Sherlock Holmes</h2>
          <p className="text-lg font-semibold mt-1">Age</p>
          <p className="mt-2 text-sm">8-14 years</p>
        </div>
        <div className="bg-blue-600 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">Jr. Sherlock Holmes</h2>
          <p className="text-lg font-semibold mt-1">Duration</p>
          <p className="mt-2 text-sm">6 hours</p>
        </div>
        <div className="bg-blue-900 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">Jr. Sherlock Holmes</h2>
          <p className="text-lg font-semibold mt-1">Period</p>
          <p className="mt-2 text-sm">1 Week</p>
        </div>
      </div>

      {/* CSS for floating animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
         @keyframes float5 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}