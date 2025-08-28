import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Blocks,
  BookText,
  Brain,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SteamCamp() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const courses = [
    {
      id: "lego-league",
      title: "LEGO League",
      description:
        "Dive into the world of robotics and innovation with LEGO bricks. Learn problem-solving, teamwork, and engineering principles.",
      icon: Blocks,
      link: "./steam/lego",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800",
    },
    {
      id: "a-is-for-ai",
      title: "A is for AI",
      description:
        "Explore the fundamentals of Artificial Intelligence. Understand how AI works and its applications in the modern world.",
      icon: Brain,
      link: "./steam/ai",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-800",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
    },
    // {
    //   id: "jolly-phonics",
    //   title: "Jolly Phonics",
    //   description:
    //     "A fun and engaging program to master reading and writing skills through synthetic phonics. Perfect for young learners.",
    //   icon: BookText,
    //   link: "./steam/jolly",
    //   bgColor: "bg-blue-50",
    //   iconColor: "text-blue-700",
    //   buttonColor: "bg-blue-700 hover:bg-blue-800",
    //   skills: ["Reading", "Writing", "Communication"],
    // },
    {
      id: "cyber-security",
      title: "Junior Sherlock Holmes",
      description:
        "Learn essential skills to protect digital information and systems from cyber threats. Understand online safety and ethical hacking basics.",
      icon: ShieldCheck,
      link: "./steam/jrsherlock",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-800",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />

      <main className="relative flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-20 relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-blue-800">Welcome to Steam Camp </span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Discover our meticulously designed steam that inspire curiosity and
            foster innovation across.
          </p>
        </div>

        {/* steam Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${course.bgColor}/50`}
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative flex flex-col items-center text-center p-8 pb-4">
                  <div
                    className={`p-4 rounded-2xl ${course.bgColor} group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg`}
                  >
                    <course.icon className={`h-8 w-8 ${course.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative flex-grow px-8 pb-4">
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {course.description}
                  </p>
                </CardContent>

                <CardFooter className="relative p-8 pt-0">
                  <Link
                    href={course.link}
                    className={`w-full ${course.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2`}
                  >
                    Explore Course
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        hoveredCard === course.id ? "translate-x-1" : ""
                      }`}
                    />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
