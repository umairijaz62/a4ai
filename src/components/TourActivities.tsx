"use client"

import { Activity, Award, Lightbulb, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { SiStudyverse } from "react-icons/si"
import { MdScience } from "react-icons/md"
import { GiMaterialsScience } from "react-icons/gi"
import { BiMovie } from "react-icons/bi"

export default function TourActivities() {
  const activities = [
    {
      id: "1",
      title: "Inquisitive Talk",
      icon: Lightbulb,
      image: "/tour/inquisitivetalk.jpg",
      bgColor:"bg-blue-300"
    },
    {
      id: "2",
      title: "STEM Competition",
      icon: GiMaterialsScience,
      image: "/tour/comp.jpg",
      bgColor:"bg-blue-600"
    },
    {
      id: "3",
      title: "Prizes",
      icon: Award,
      image: "/tour/prize.jpg",
      bgColor:"bg-blue-900"
    },
    {
      id: "4",
      title: "Entertrainment",
      icon: BiMovie,
      image: "/tour/entertainment.jpg",
      bgColor:"bg-blue-300"
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <Card 
            key={activity.id} 
            className={`group overflow-hidden ${activity.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl p-0`}
            >
              <h1 className="text-2xl text-white font-bold text-center mt-5">{activity.title}</h1>
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 aspect-square object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=LEGO+Activity"
                  }}
                />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
