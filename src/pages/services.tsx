"use client"

import Link from "next/link"
import {GraduationCap, PencilRuler, Sparkles, Users } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function WhatWeOffer() {
  const [hoveredProgram, setHoveredProgram] = useState(null)

  const programs = [
    {
      id: "steam-camps",
      title: "STEAM Camps",
      description:
        "Our Steam Camp offers a dynamic learning environment where creativity meets innovation. Explore various fields through interactive projects and collaborative challenges designed to spark curiosity and foster scientific thinking.",
      href: "/services/steam",
    },
    {
      id: "zerocodeai",
      title: "Zero Code AI",
      description:
        "Our AI training programs offer practical, no-code experience and collaborative learning, empowering professionals to design real-world AI solutions and excel in the evolving digital landscape.",
      href: "/services/zerocodeai ",
    },
    {
        id: "Joly-Phonics",
        title: "Jolly Phonics",
        description:
        "Mentoring Young Minds helps college students prepare for top universities in Pakistan and abroad. From career counselling and profile building to internships, languages, and mentorship with NUST’s top performers it equips you with skills and direction to stand out globally.",
      href: "/services/mentor ",
    },
    {
        id: "STEAM Tour",
        title: "STEAM Tour",
        description:
        "Explore Pakistan’s No. 1 ranked university through an exciting STEM experience. Meet top researchers, join hands-on competitions, and enjoy interactive lab tours that make learning fun and inspiring.",
      href: "/services/steamtour ",
    },
  ]

  return (
        <>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center flex-col">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-blue-800">What We Offer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our comprehensive range of programs designed to 
            <span className="font-semibold text-blue-800"> inspire, educate, and transform</span> young minds.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            {['Expert-Led Programs', 'Proven Results', 'Personalized Learning', 'Future-Ready Skills'].map((feature) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>

        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className={`group relative overflow-hidden  backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-blue-50`}
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoveredProgram(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative flex flex-col items-center text-center p-10 pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative flex-grow px-10 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300 text-lg">
                    {program.description}
                  </p>
                  
                </CardContent>
                
                <CardFooter className="relative p-10 pt-0">
                <Link href={program.href} className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-3 text-lg ">
                    <span>View Courses</span>
                        </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>


        <div className="mt-16 w-full max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-700/20 p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Our Programs?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
      <Footer />
      </>
  )
}
