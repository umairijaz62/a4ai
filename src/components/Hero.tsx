"use client";

import Image from "next/image";

interface HeroProps {
  image: string;
  imageName: string;
  heading: string;
  text: string;
}

export default function Hero({image, imageName, heading, text}:HeroProps) {
  return (
    <section className="w-full h-[600px] bg-white flex flex-col md:flex-row items-center justify-center">
      {/* Mascot + Name */}
      <div className="p-8 flex flex-col items-center">
        <Image
          src={image}
          alt="Byte Buddy Mascot"
          height={500}
          width={500}
          className="-scale-x-100"
        />
        <span className="text-xl text-white font-semibold rounded-md mt-4 bg-blue-900 px-4 py-2">
          {imageName}
        </span>
      </div>

        <div className="mb-12 bg-blue-300 inset-0 flex p-6 flex-col items-center justify-center text-center md:hidden gap-2">
          <h1 className="text-4xl font-bold text-blue-900">{heading}</h1>
          <p className="mt-2 text-sm">{text}</p>
      </div>

      <div className=" hidden flex-1 self-start relative md:flex items-center justify-center">
        <Image
          src="/vectors/message.png"
          alt="Message Bubble"
          height={500}
          width={500}
          className="h-96 w-full "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:px-20 lg:px-28 xl:px-36 gap-2">
          <h1 className="text-4xl font-bold text-blue-900">{heading}</h1>
          <p className="mt-2 text-sm">{text}</p>
        </div>
      </div>
    </section>
  );
}
