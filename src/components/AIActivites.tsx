"use client"

import { Activity, Navigation, Mountain, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function AIActivities() {
  const activities = [
    {
      id: "1",
      title: "Bringing Stories to Life",
      icon: Zap,
      flipbook: true, 
      bgColor:"bg-blue-300"
    },
    {
      id: "2",
      title: "Building Your First AI Program",
      icon: Navigation,
      image: "/ai/firstai.jpg",
      bgColor:"bg-blue-600"
    },
    {
      id: "3",
      title: "How To Stop Robots Taking Over The World?",
      icon: Activity,
      image: "/ai/manvsrobot.jpg",
      bgColor:"bg-blue-900"
    },
    {
      id: "4",
      title: "AI and The Ugly Duckling Challenge",
      icon: Mountain,
      image: "/ai/puzzel.jpg",
      bgColor:"bg-blue-300"
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-8 border-b border-slate-200 pb-3">
          Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity) => (
            
            <Card 
            key={activity.id} 
            className={`group overflow-hidden ${activity.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl p-0`}
            >
              <h1 className="text-2xl text-white font-bold text-center flex items-center justify-center mt-5">{activity.title}</h1>
              {activity.flipbook ?(
                <div className="overflow-y-hidden h-96">
                    <iframe
                      src="https://www.flipbookpdf.net/web/site/ee4a856840d84d60b4a2463843a9176519a08ddd202508.pdf.html#page/1"
                      width="100%"
                      height="100%"
                      className="border-0 overflow-hidden"
                      style={{ border: "none" }}
                      // allowFullScreen
                    />
                   </div>
              ):(
                  
                  <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 aspect-video object-fill"
                  onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=LEGO+Activity"
                }}
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
