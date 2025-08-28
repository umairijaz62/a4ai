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
      <Hero image="/masscot/jolly.jpg" imageName="Jolly Phonics" heading="Jolly Phonics" text="Fun and Engaging phonice learning for kids! orksheet, video & tips to build strong reading skills," />

      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">
          <JollyActivities />
        </section>

        {/* <section className="px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 text-center">
            Learning Outcomes
          </h2>

          <div className="">
            <p className="text-slate-700 leading-relaxed">
              Students will learn how to hide and encode messages, practice breaking simple codes, explore historical techniques of secret communication, understand the basics of cryptography, and discover how these skills connect to modern cybersecurity and career opportunities.
            </p>
          </div>
        </section> */}
      </div>
      <TestimonialsSection testimonials={jollyTestimonials} />
      <Footer />
    </main>
  )
}
