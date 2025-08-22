"use client";

import Image from "next/image";

export default function AIHero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/aibg.jpg" 
        alt="STEM Learning"
        fill
        className="object-center"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative md:hidden flex flex-col w-full h-full p-6 md:justify-center gap-6 md:p-24">
         <div className="flex bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-lg md:flex flex-col min-w-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            A Is For AI
          </h1>
          <p className="text-slate-900 text-lg">As AI integrates into every facet of our children's lives,
            particularly among Generation Alpha, they are often regarded as AI
            natives. These AI natives tend to place excessive trust in and rely
            heavily on AI applications such as ChatGPT. It is essential to
            provide guidance and support to help them navigate biases and
            ethical issues associated with AI, ensuring they develop a balanced
            and realistic understanding of the AI revolution.</p>
        </div>        
      </div>

      {/* <div className="relative flex flex-col w-full h-full p-6 md:justify-center gap-6 md:p-24"> */}
        <div className="hidden z-100 lg:z-0 absolute animate-pulse bg-blue-300/60 rounded-full p-8 top-35  items-center text-center max-w-3xl md:flex flex-col min-w-auto"
        style={{
            top: '45%',
            right: '55%',
            animation: 'float5 3s ease-in-out infinite'
          }}>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            A Is For AI
          </h1>
          <p className="text-slate-900 text-lg">As AI integrates into every facet of our children's lives,
            particularly among Generation Alpha, they are often regarded as AI
            natives. These AI natives tend to place excessive trust in and rely
            heavily on AI applications such as ChatGPT. It is essential to
            provide guidance and support to help them navigate biases and
            ethical issues associated with AI, ensuring they develop a balanced
            and realistic understanding of the AI revolution.</p>
        </div>
      {/* </div> */}

      {/* Floating Bubbles - Hidden on mobile */}
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
        <div 
          className="absolute bg-blue-300/60 rounded-full w-4 h-4 animate-pulse"
          style={{
            top: '35%',
            right: '35%',
            animation: 'float4 1.8s ease-in-out infinite 1.5s'
          }}
        ></div>
      </div>

      {/* Info Cards */}
      <div className="absolute bottom-[-40px] right-8 z-20 flex flex-col md:flex-row shadow-lg">
        <div className="bg-blue-400 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">A Is For AI</h2>
          <p className="text-lg font-semibold mt-1">Age</p>
          <p className="mt-2 text-sm">8-14 years</p>
        </div>
        <div className="bg-blue-600 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">A Is For AI</h2>
          <p className="text-lg font-semibold mt-1">Duration</p>
          <p className="mt-2 text-sm">6 hours</p>
        </div>
        <div className="bg-blue-900 text-white p-6 w-52 text-center">
          <h2 className="text-sm font-bold">A Is For AI</h2>
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