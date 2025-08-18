import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Patners() {
  return (
     <Marquee play pauseOnHover>        
        <Image src={"/partners/truid.png"} className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100" alt=''width={200} height={200}/>
        <div className='h-[200px] w-[200px]'></div>
        <Image src={"/partners/pdc.png"} className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100" alt=''width={200} height={200}/>
        <div className='h-[200px] w-[200px]'></div>
        <Image src={`/partners/sentinalAI.png`} className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100" alt=''width={200} height={200}/>
        <div className='h-[200px] w-[200px]'></div>
        <Image src="/partners/inf.png" className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100" alt='' width={200} height={200}/>
  </Marquee>
  )
}
