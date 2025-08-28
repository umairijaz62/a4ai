import Footer from '@/components/Footer'
import HomeNews from '@/components/HomeNews'
import MissionVision from '@/components/MissionVision'
import { Navbar } from '@/components/Navbar'
import Patners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='bg-white'>
      <Navbar />
      <MissionVision />
      <HomeNews />
      <Testimonials />
      <Patners />
      </div>
      <Footer />      
    </div>
  )
}
