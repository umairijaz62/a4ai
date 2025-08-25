"use client"

import { Activity, Navigation, Mountain, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function AIActivities() {
  const activities = [
    {
      id: "1",
      title: "Bringing Stories to Life",
      icon: Zap,
      flipbook: true, // 👈 yeh flag
    },
    {
      id: "2",
      title: "Building Your First AI Program",
      icon: Navigation,
      image: "/ai/alexa.jpg",
    },
    {
      id: "3",
      title: "How To Stop Robots Taking Over The World?",
      icon: Activity,
      image: "/ai/face.jpg",
    },
    {
      id: "4",
      title: "AI and The Ugly Duckling Challenge",
      icon: Mountain,
      image: "/ai/puzzel.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">
          Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden ">
                {activity.flipbook ? (
                  <div className="w-full h-80 overflow-hidden">
                    <iframe
                      src="https://www.flipbookpdf.net/web/site/ee4a856840d84d60b4a2463843a9176519a08ddd202508.pdf.html#page/1"
                      width="100%"
                      height="100%"
                      className="border-0"
                      style={{ border: "none" }}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=LEGO+Activity"
                      }}
                    />
                    {/* Overlay sirf image cards ke liye */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </>
                )}
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
