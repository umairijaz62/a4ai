"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const activities = [
  {
    id: 1,
    image: "/aidiploma/1.jpg",
  },
  {
    id: 2,
    image: "/aidiploma/1.jpg",
  },
  {
    id: 3,
    image: "/aidiploma/3.jpg",
  },
  {
    id: 4,
    image: "/aidiploma/4.jpg",
  },
]

export function ActivitiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-blue-900 mb-4">Activities</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Participants engaging in hands-on sessions, group activities, and certificate distribution as part of the AI training program.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {activities.map((activity) => (
              <div key={activity.id} className="w-full flex-shrink-0">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={""}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {activities.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === currentSlide ? "ring-2 ring-blue-500 ring-offset-2" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
