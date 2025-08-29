"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { newsitems } from "@/constant/newsitem"
import { useResponsiveItems } from "@/hooks/responsiveslider"

const HomeNews = () => {
  const itemsPerSlide = useResponsiveItems()

  const groupedItems = React.useMemo(() => {
    const groups = []
    for (let i = 0; i < newsitems.length; i += itemsPerSlide) {
      groups.push(newsitems.slice(i, i + itemsPerSlide))
    }
    return groups
  }, [itemsPerSlide])

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-blue-900 text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Latest News & Updates
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay informed with our latest stories, achievements, and industry insights
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full mx-auto mt-8"></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <Link href={"/news"}>
          <CarouselContent className="-ml-4">
            {groupedItems.map((group, slideIndex) => (
              <CarouselItem key={slideIndex} className="pl-4">
                <div
                  className={`grid gap-4 ${
                    itemsPerSlide === 1
                      ? "grid-cols-1"
                      : itemsPerSlide === 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {group.map((item, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={item.image || "/placeholder.svg?height=300&width=400&query=modern news article"}
                          alt={""}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                          }}
                        />
                      </div>

                      <CardContent className="p-8">
                        <p className="font-sans text-muted-foreground text-base leading-relaxed line-clamp-3 mb-6">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Link>
        <div className="lg:opacity-0">
          <CarouselPrevious className="left-0 bg-blue-500 text-white hover:bg-primary hover:text-primary-foreground shadow-xl border-0 w-12 h-12 transition-all duration-300" />
          <CarouselNext className="right-0 bg-blue-500 text-white hover:bg-primary hover:text-primary-foreground shadow-xl border-0 w-12 h-12 transition-all duration-300" />
        </div>
        </Carousel>
      </div>
    </div>
  )
}

export default HomeNews
