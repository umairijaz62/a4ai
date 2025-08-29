import Footer from '@/components/Footer'
import JollyActivities from '@/components/JollyActivities'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { jollyTestimonials, TestimonialsSection } from '@/components/Parents'
import React from 'react'

export default function jolly() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero image="/masscot/jolly.jpg" imageName="Jolly Phonics" heading="Jolly Phonics" text="Fun and Engaging phonice learning for kids! orksheet, video & tips to build strong reading skills." />

      <div className="max-w-full mx-auto px-x ">
        <section className="pt-12">
          <JollyActivities />
        </section>
      <TestimonialsSection testimonials={jollyTestimonials} />
      </div>
      <Footer />
    </main>
  )
}
