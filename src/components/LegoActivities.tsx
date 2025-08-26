"use client"

import { Activity, Award, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function LegoActivities() {
  const activities = [
    {
      id: "robot-bot",
      title: "5-Minute Robot Bot",
      icon: Zap,
      image: "/lego/day1.jpg",
    },
    {
      id: "obstacle-avoidance",
      title: "Obstacle Avoidance",
      icon: Navigation,
      image: "/lego/opticals.jpg",
    },
    {
      id: "slope-climbing",
      title: "Slope Climbing",
      icon: Mountain,
      image: "/lego/slop.jpg",
    },
    {
      id: "speed-racing-2",
      title: "Speed Racing Advanced",
      icon: Trophy,
      image: "/lego/speed.jpg",
    },
    {
      id: "line-follower-1",
      title: "Line Follower",
      icon: Activity,
      image: "/lego/line.jpg",
    },
    {
      id: "sumo-wrestling-1",
      title: "Ideal Bots Design",
      icon: Sparkles,
      image: "/lego/ideal.jpg",
    },
    {
      id: "sumo-wrestling-2",
      title: "Sumo Wrestling Training",
      icon: Users,
      image: "/lego/presumo.jpg",
    },
    {
      id: "sumo-competition",
      title: "Sumo Wrestling Championship",
      icon: Award,
      image: "/lego/sumot.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {activities.map((activity) => (
            <Card 
              key={activity.id} 
              className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-70 object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=LEGO+Activity"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {(() => {
                      const IconComponent = activity.icon
                      return <IconComponent className="h-6 w-6 text-blue-700" />
                    })()}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                  {activity.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
