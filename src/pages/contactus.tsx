import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Link } from 'lucide-react'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'

export default function contactus() {
  return (
      <>
        <Navbar />
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 md:gap-8 p-12">
      {/* Phone Card */}
      <div className="w-full sm:w-[22rem] h-auto bg-blue-600 text-white flex flex-col justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/70 shadow-gray-800/30 transition duration-500">
        <div className="h-32 w-32 mb-4 flex justify-center items-center">
          <FaPhone className="text-blue-500" size={80} />
        </div>
        <div className="text-base">+92 333 1555665</div>
        <div className="text-2xl font-extrabold text-center">Phone Number</div>
      </div>

      {/* Map Card */}
      <div className="w-full sm:w-[22rem] h-auto bg-blue-500 text-white flex flex-col justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/60 shadow-gray-800/30 transition duration-500">
        <div className="h-32 w-32 mb-4 flex justify-center items-center">
          <MdLocationPin className="text-blue-300" size={80} />
        </div>
        <div className="w-full h-48">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5492627384683!2d72.98710087446295!3d33.64292723923467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df967428c00001%3A0xe707dee59011b73!2sSEECS%20Parking!5e0!3m2!1sen!2s!4v1753773460100!5m2!1sen!2s"
            className="w-full h-full rounded border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-2xl font-extrabold text-center">Our Location</div>
      </div>

      {/* Email Card */}
      <div className="w-full sm:w-[22rem] h-auto bg-gray-200 flex flex-col text-blue-600 justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/30 shadow-gray-800/10 transition duration-500">
        <div className="h-32 w-32 mb-4 flex justify-center items-center">
          <FaEnvelope className="text-blue-600" size={80} />
        </div>
        <Link href="mailto:murabbi.socials@gmail.com" className="underline text-base">
          murabbi.socials@gmail.com
        </Link>
        <div className="text-2xl font-extrabold text-center">Send Us Email</div>
      </div>
    </div>
      <Footer />

            </>
  )
}
