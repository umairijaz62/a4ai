"use client";

import Image from "next/image";

export default function SteamHero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/steambgf.jpg" 
        alt="STEM Learning"
        fill
        className="object-center"
      />

      <div className="absolute inset-0 bg-slate-9text-zinc-900/10"></div>

      <div className="relative md:hidden flex flex-col w-full h-full p-6 md:justify-center gap-6 md:p-24">
         <div className="flex bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-lg md:flex flex-col min-w-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            STEAM Tour: A Day at Nust
          </h1>
          <p className="text-blue-900 font-bold text-lg">Join us discover the wonders of No.1 ranked university in Pakistan</p>
        </div> 
        <div className="flex flex-col md:hidden gap-2">

        <div className="flex bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-lg md:flex flex-col min-w-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            Why STEM?
          </h1>
          <p className="text-blue-900 font-bold text-lg">96% of jobs are generated from STEM</p>
        </div> 
        <div className="flex bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-lg md:flex flex-col min-w-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            Why STEM?
          </h1>
          <p className="text-blue-900 font-bold text-lg">A short three hour tour of NUST labs transformed the opinion of</p>
        </div> 

        </div>
      </div>


      <div className="relative flex flex-col w-full h-full md:justify-center ">
        <div className="hidden absolute animate-pulse bg-blue-300/60 rounded-full p-8 items-center text-center max-w-3xl md:flex flex-col min-w-auto"
        style={{
            // top: '40%',
            // right: '30%',
            animation: 'float5 3s ease-in-out infinite'
          }}>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            STEAM Tour: A day at Nust
          </h1>
          <p className="text-zinc-900 font-bold text-lg">Join us and discover the wonders of No. 1 ranked university in Pakistan</p>
        </div>
        <div className="hidden md:flex gap-2 mt-10">
          <div className="z-100 lg:z-0 relative bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-3xl md:flex flex-col min-w-auto text-zinc-900 font-bold" style={{
            animation: "float5 3s ease-in-out infinite"
          }}>
        <h1 className="text-blue-900">Why STEM?</h1>
        <p>96% of jobs are generated from STEM</p>
        </div>
        <div className="z-100 lg:z-0 relative bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-3xl md:flex flex-col min-w-auto text-zinc-900 font-bold" style={{
          animation: "float5 3s ease-in-out infinite"
        }}>
        <h1 className="text-blue-900">Why STEM?</h1>
        <p>96% of jobs are generated from STEM</p>
        </div>
        </div>
        
      </div>

      {/* <div className="hidden md:block">
        <div 
          className="absolute bg-blue-300/60 rounded-full w-12 h-12 animate-pulse"
          style={{
            top: '60%',
            right: '50%',
            animation: 'float1 3s ease-in-out infinite'
          }}
        ></div>
        
        <div 
          className="absolute bg-blue-300/60 rounded-full w-9 h-9 animate-pulse"
          style={{
            top: '50%',
            right: '45%',
            animation: 'float2 2.5s ease-in-out infinite 0.5s'
          }}
        ></div>
        
        <div 
          className="absolute bg-blue-300/60 rounded-full w-7 h-7 animate-pulse"
          style={{
            top: '40%',
            right: '40%',
            animation: 'float3 2s ease-in-out infinite 1s'
          }}
        ></div>
        
        <div 
          className="absolute bg-blue-300/60 rounded-full w-4 h-4 animate-pulse"
          style={{
            top: '35%',
            right: '35%',
            animation: 'float4 1.8s ease-in-out infinite 1.5s'
          }}
        ></div>
      </div> */}

      {/* Info Cards */}
      <div className="hidden absolute bottom-[-40px] right-8 z-20 sm:flex flex-col md:flex-row shadow-lg text-white">
        <div className="bg-blue-400 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">STEAM Tour</h2>
          <p className="text-lg font-semibold mt-1">Age</p>
          <p className="mt-2 text-sm">8-14 years</p>
        </div>
        <div className="bg-blue-600 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">STEAM Tour</h2>
          <p className="text-lg font-semibold mt-1">Duration</p>
          <p className="mt-2 text-sm">6 hours</p>
        </div>
        <div className="bg-blue-900 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">STEAM Tour</h2>
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