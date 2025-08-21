"use client"

import { Activity, Award, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function TourActivities() {
  const activities = [
    {
      id: "1",
      title: "SINES Tour",
      icon: Zap,
      image: "/tour/1.jpg",
    },
    {
      id: "2",
      title: "SINES Tour",
      icon: Navigation,
      image: "/tour/2.jpg",
    },
    {
      id: "3",
      title: "Aerial Lab Visit",
      icon: Activity,
      image: "/tour/3.jpg",
    },
    {
      id: "4",
      title: "NBS Tour",
      icon: Mountain,
      image: "/tour/4.jpg",
    },
    {
      id: "5",
      title: "Sport Complex",
      icon: Trophy,
      image: "/tour/6.jpg",
    },
    {
      id: "6",
      title: "Sport Complex",
      icon: Sparkles,
      image: "/tour/5.jpg",
    },
  ]

  const activityPairs = []
  for (let i = 0; i < activities.length; i += 2) {
    activityPairs.push({
      left: activities[i],
      right: activities[i + 1] || null,
    })
  }

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-700 rounded-full shadow-sm"></div>

          {activityPairs.map((pair, index) => (
            <div key={`pair-${index}`} className="relative mb-20 last:mb-0">
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-600 shadow-lg z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>

              <div className="ml-20 md:ml-0 md:grid md:grid-cols-2 md:gap-16 md:items-start">
                {/* Left Activity */}
                <div className="mb-8 md:mb-0 md:text-right md:pr-8">
                  <div className="max-w-full">
                    <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl">
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <img
                          src={pair.left.image || "/placeholder.svg"}
                          alt={pair.left.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          style={{ minHeight: "200px", maxHeight: "300px" }}
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/320x240/e5e7eb/6b7280?text=LEGO+Activity"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          {(() => {
                            const IconComponent = pair.left.icon
                            return <IconComponent className="h-4 w-4 text-blue-600" />
                          })()}
                        </div>
                      </div>
                      <CardHeader className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            {(() => {
                              const IconComponent = pair.left.icon
                              return <IconComponent className="h-6 w-6 text-blue-700" />
                            })()}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                          {pair.left.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                {/* Right Activity */}
                {pair.right && (
                  <div className="md:text-left md:pl-8">
                    <div className="max-w-full">
                      <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl">
                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                          <img
                            src={pair.right.image || "/placeholder.svg"}
                            alt={pair.right.title}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            style={{ minHeight: "200px", maxHeight: "300px" }}
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://via.placeholder.com/320x240/e5e7eb/6b7280?text=LEGO+Activity"
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {(() => {
                              const IconComponent = pair.right.icon
                              return <IconComponent className="h-4 w-4 text-blue-600" />
                            })()}
                          </div>
                        </div>
                        <CardHeader className="p-6 text-center">
                          <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              {(() => {
                                const IconComponent = pair.right.icon
                                return <IconComponent className="h-6 w-6 text-blue-700" />
                              })()}
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                            {pair.right.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
