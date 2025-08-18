"use client"

import { useState, useEffect } from "react"

export function useResponsiveItems() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerSlide(3) // lg: 3 items
      } else if (width >= 768) {
        setItemsPerSlide(2) // md: 2 items
      } else {
        setItemsPerSlide(1) // sm: 1 item
      }
    }

    // Set initial value
    updateItemsPerSlide()

    // Add event listener
    window.addEventListener("resize", updateItemsPerSlide)

    // Cleanup
    return () => window.removeEventListener("resize", updateItemsPerSlide)
  }, [])

  return itemsPerSlide
}
