"use client"

import { Activity, Award, Clock, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function LegoActivities() {
  const programData = {
    1: {
      period: "Day 1",
      title: "Robot Foundation & Speed",
      activities: [
        {
          id: "robot-boot",
          title: "5-Minute Robot Boot",
          description:
            "Quick introduction to LEGO EV3 robots. Learn basic controls and get your robot up and running in record time.",
          icon: Zap,
          image: "/lego/day1.jpg",
        },
      ],
    },
    2: {
      period: "Day 2",
      title: "Navigation & Sensors",
      activities: [
        {
          id: "obstacle-avoidance",
          title: "Obstacle Avoidance",
          description: "Program your robot to navigate around obstacles using sensors and smart algorithms.",
          icon: Navigation,
          image: "/lego/opticals.jpg",
        },
        {
          id: "line-follower-1",
          title: "Line Follower",
          description: "Program your robot to follow complex paths using line-following sensors and algorithms.",
          icon: Activity,
          image: "/lego/line.jpg",
        },
      ],
    },
    3: {
      period: "Day 3",
      title: "Speed & Climbing Challenges",
      activities: [
        {
          id: "slope-climbing",
          title: "Slope Climbing",
          description: "Challenge your robot to climb steep slopes. Master motor control and mechanical advantage.",
          icon: Mountain,
          image: "/lego/slop.jpg",
        },
        {
          id: "speed-racing-2",
          title: "Speed Racing Advanced",
          description: "Master advanced speed techniques and compete in timed races with precision control.",
          icon: Trophy,
          image: "/lego/speed.jpg",
        },
      ],
    },
    4: {
      period: "Day 4",
      title: "Combat Preparation",
      activities: [
        {
          id: "sumo-wrestling-1",
          title: "Ideal Bots Design",
          description:
            "Learn to design and program your own Ideal Combat Bot. Explore the principles of strategic movement, durable engineering, and intelligent design to build a bot ready for battle.",
          icon: Sparkles,
          image: "/lego/ideal.jpeg",
        },
        {
          id: "sumo-wrestling-2",
          title: "Sumo Wrestling Training",
          description:
            "Build and program combat robots for sumo wrestling. Learn strategy and robust design principles.",
          icon: Users,
          image: "/lego/presumo.jpg",
        },
      ],
    },
    5: {
      period: "Day 5",
      title: "Championship Day",
      activities: [
        {
          id: "sumo-competition",
          title: "Sumo Wrestling Championship",
          description: "The ultimate showdown! Compete in the grand sumo wrestling tournament and claim victory.",
          icon: Award,
          image: "/lego/sumo.jpg",
        },
      ],
    },
  }

  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3 | 4 | 5>(1)

  const getGridClasses = (activitiesLength: number): string => {
    if (activitiesLength === 1) return "grid-cols-1 max-w-2xl mx-auto"
    if (activitiesLength === 2) return "grid-cols-1 lg:grid-cols-2"
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Advanced":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200"
      case "Tournament":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(programData).map((day) => {
            const dayNumber = Number.parseInt(day) as 1 | 2 | 3 | 4 | 5
            return (
              <Button
                key={day}
                onClick={() => setSelectedDay(dayNumber)}
                variant={selectedDay === dayNumber ? "default" : "outline"}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDay === dayNumber
                    ? "bg-blue-700 text-white shadow-lg hover:bg-blue-800"
                    : "bg-white text-blue-800 border-blue-200 hover:bg-blue-50"
                }`}
              >
                {programData[dayNumber].period}
              </Button>
            )
          })}
        </div>

        {/* Selected Day Activities */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">{programData[selectedDay].title}</h3>
          </div>

          <div className={`grid gap-8 ${getGridClasses(programData[selectedDay].activities.length)}`}>
            {programData[selectedDay].activities.map((activity, index) => (
              <Card
                key={activity.id}
                className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >

               <div className="relative min-h-[250px] max-h-[350px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTgwIiByPSI1MCIgZmlsbD0iI2Q1ZDlkZiIgb3BhY2l0eT0iMC44Ii8+PHBhdGggZD0ibTI3NSAxNjUgNTAgNTAtNTAgNTB6IiBmaWxsPSIjYTdiMmMzIiBvcGFjaXR5PSIwLjYiLz48dGV4dCB4PSIzMDAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYTdiMmMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNTAwIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

                <CardHeader className="relative flex flex-col items-center text-center p-6 pb-4">
                  <div className="p-3 rounded-2xl bg-blue-100 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                    <activity.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors duration-300 mb-3">
                    {activity.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center mb-4">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
