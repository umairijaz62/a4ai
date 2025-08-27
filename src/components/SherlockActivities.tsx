"use client"

import { Activity, Award, Lightbulb, Mountain, Navigation, Pen, Ruler, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { SiStudyverse } from "react-icons/si"
import { MdScience } from "react-icons/md"
import { GiMaterialsScience } from "react-icons/gi"
import { BiMovie } from "react-icons/bi"

export default function SherlockActivities() {
  const activities = [
    {
      id: "1",
      title: "Data Hiding",
      icon: Pen,
      image: "/sherlock/4.jpg",
      bgColor:"bg-blue-300"
    },
    {
      id: "2",
      title: "Historical encryption techniques",
      icon: Ruler,
      image: "/sherlock/3.jpg",
      bgColor:"bg-blue-600"
    },
    {
      id: "3",
      title: " Ciphers ",
      icon: Ruler,
      image: "/sherlock/1.jpg",
      bgColor:"bg-blue-600"
    }
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
           <Card 
            key={activity.id} 
            className={`group overflow-hidden ${activity.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl p-0`}
            >
              <h1 className="text-lg text-white font-bold text-center py-3">{activity.title}</h1>
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 aspect-video object-cover"
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
