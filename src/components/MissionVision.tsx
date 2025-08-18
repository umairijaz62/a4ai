"use client"

import { useEffect, useState } from "react"
export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      
      <section
        className={`w-full py-20 px-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-gradient-to-r from-blue-50 to-blue-100`}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900">Our Vision</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            To democratize disruptive technologies by making them accessible and comprehensible to all, fostering innovation and inclusive growth.
          </p>
        </div>
      </section>

      <section
        className={`w-full py-20 px-6 transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-gradient-to-r from-blue-100 to-blue-200`}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900">Our Mission</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full mx-auto"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            To empower innovators with the knowledge and skills needed to lead and excel in the age of disruptive technologies through simplified, practical, and cutting-edge professional training.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-12 bg-white">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
