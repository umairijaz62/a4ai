"use client"

import { useState, useEffect } from "react"

export function useResponsiveItems() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerSlide(4) 
      } else if (width >= 768) {
        setItemsPerSlide(2) 
      } else {
        setItemsPerSlide(1) 
      }
    }

    updateItemsPerSlide()

    window.addEventListener("resize", updateItemsPerSlide)

    return () => window.removeEventListener("resize", updateItemsPerSlide)
  }, [])

  return itemsPerSlide
}
