"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import A4AILogo from "./Logo"

type NavOptionProps = {
  text: string
  link: string
  children?: React.ReactNode
  clamp?: "left" | "right"
}

type NestedNavOptionProps = {
  text: string
  link: string
  children?: React.ReactNode
}

const LinkClassName = `transition-colors duration-500 border-b-2 hover:border-blue-900 border-transparent`

const NestedNavOption: React.FC<NestedNavOptionProps> = ({ text, link, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href={link} 
        className="flex items-center justify-between px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors w-full"
      >
        {text}
        {children && (
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-90'}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path d="M10,17L15,12L10,7V17Z" fill="currentColor"/>
          </svg>
        )}
      </Link>
      
      {children && (
        <div className={`absolute z-60 left-full top-0 ml-2 
          ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'}
          transition-all duration-300 ease-out`}>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[200px]">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

const NavOption: React.FC<NavOptionProps> = ({ text, link, children, clamp = "left" }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!children) {
    return (
      <Link href={link} className={LinkClassName}>
        {text}
      </Link>
    )
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center cursor-pointer">
        <Link href={link} className={LinkClassName}>
          {text}
        </Link>
        <svg 
          className={`w-5 h-5 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M10,17L15,12L10,7V17Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className={`absolute z-50 top-full mt-2 ${clamp === 'right' ? 'right-0' : 'left-0'} 
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        transition-all duration-300 ease-out`}>
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[200px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const [opened, setOpened] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY
      
      // Don't hide navbar if mobile menu is open
      if (opened) return
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY, opened]) // Add 'opened' to dependency array

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (opened && !(event.target as Element).closest('nav')) {
        setOpened(false)
      }
    }

    if (opened) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [opened])

  // Show navbar when mobile menu is opened
  useEffect(() => {
    if (opened) {
      setIsVisible(true)
    }
  }, [opened])

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`hidden lg:flex z-30 bg-white w-full justify-center py-4 px-6 xl:px-20 
        border-b-2 border-blue-900 sticky top-0 transition-transform duration-300 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full max-w-7xl flex justify-between items-center">
          <Link href="/" className="flex items-center">
           <A4AILogo variant="navbar" />
          </Link>
          
          <div className="flex gap-8 items-center text-black text-base">
            <NavOption text="Home" link="/" />
            <NavOption text="About Us" link="/aboutus" />
            
            <NavOption text="What We Offer" link="/services" clamp="right">
            {/* <NestedNavOption text="Zero Code AI" link="/services/zerocodeai" /> */}
              <NestedNavOption text="STEAM Camps" link="/services/steam">
                <Link 
                  href="/services/steam/lego" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  LEGO League
                </Link>
                <Link 
                  href="/services/steam/ai" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  A is for AI
                </Link>
                <Link 
                  href="/services/steam/jrsherlock" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  Jr. Sherlock Holmes
                </Link>
                 
              </NestedNavOption>
              {/* <NestedNavOption text="Mentor Program" link="/services/mentor" /> */}
              <NestedNavOption text="NUST STEM Tour" link="/services/stemtour" />
              <NestedNavOption text="Jolly Phonics" link="/services/jolly" />


              
              {/* <NestedNavOption text="Mentor Program for O/A Level" link="/services/mentor">
                <Link 
                  href="/services/mentor/aiworkshops" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  Artificial Intelligence
                </Link>
                <Link 
                  href="/services/mentor/gamedev" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  Game Development
                </Link>
                <Link 
                  href="/services/mentor/robotics" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                >
                  Robotics
                </Link>
              </NestedNavOption> */}
            </NavOption>
            
            <NavOption text="News" link="/news" />
            <NavOption text="Contact Us" link="/contactus" />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`flex lg:hidden flex-col w-full bg-white border-b-2 border-blue-900 
        sticky top-0 z-30 transition-transform duration-300 
        ${(isVisible || opened) ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <div className="flex justify-between items-center py-4 px-6">
          <Link href="/" className="flex items-center">
            <A4AILogo />
          </Link>
          
          <button 
            className="w-6 h-6 flex flex-col justify-center gap-1 relative z-40"
            onClick={() => setOpened(!opened)}
            aria-label="Toggle menu"
            aria-expanded={opened}
          >
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 
              ${opened ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 
              ${opened ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 
              ${opened ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${opened ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4">
               <Link 
                href="/" 
                className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-100"
                onClick={() => setOpened(false)}
              >
                Home
              </Link>              
              <Link 
                href="/aboutus" 
                className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-100"
                onClick={() => setOpened(false)}
              >
                About Us
              </Link>
              
              <div className="py-2 border-b border-gray-100">
                <Link 
                  href="/services" 
                  className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors block mb-3"
                  onClick={() => setOpened(false)}
                >
                  What We Offer
                </Link>
                
              </div>
              
              <Link 
                href="/news" 
                className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-100"
                onClick={() => setOpened(false)}
              >
                News
              </Link>
              
              <Link 
                href="/contactus" 
                className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setOpened(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}