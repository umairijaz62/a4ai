"use client";

import Image from "next/image";

interface HeroProps {
  image: string;
  imageName: string;
  heading: string;
  text: string;
}

export default function SteamHero() {
  return (
    <section className="w-full h-[600px] relative flex items-center justify-center">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/steambg.jpg"
        alt="STEAM Background"
        fill
        className="object-contian"
        priority
      />
      
      {/* Background overlay for better text readability (optional) */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-20 z-10"></div>
      
      {/* Mascot + Name */}
      <div className="p-8 flex flex-col items-center z-20">
        <div>
        <Image
          src="" // Add your mascot image path here
          alt=""
          height={300}
          width={300}
          className="-scale-x-100 opacity-0"
        />
        </div>
      </div>

      <div className="flex-1 self-start relative flex items-center justify-center z-20">
        <Image
          src="/vectors/message.png"
          alt="Message Bubble"
          height={500}
          width={500}
          className="h-96 w-full object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-36 gap-2">
          <h1 className="text-4xl font-bold text-blue-900">STEAM Tour: A day at Nust</h1>
          <p className="mt-2 text-sm text-white">Join us and discover the wonders of No. 1 ranked university in Pakistan</p>
        </div>
      </div>
    </section>
  );
}