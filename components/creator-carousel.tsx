"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram, Youtube, Twitter } from "lucide-react"
import Link from "next/link"

// Dummy data for creators
const creators = [
  {
    id: 1,
    name: "Creator One",
    image: "/placeholder.svg?height=600&width=600",
    gradient: "from-purple-500/20 to-purple-900/80",
  },
  {
    id: 2,
    name: "Creator Two",
    image: "/placeholder.svg?height=600&width=600",
    gradient: "from-teal-500/20 to-teal-900/80",
  },
  {
    id: 3,
    name: "Creator Three",
    image: "/placeholder.svg?height=600&width=600",
    gradient: "from-green-500/20 to-green-900/80",
  },
  {
    id: 4,
    name: "Creator Four",
    image: "/placeholder.svg?height=600&width=600",
    gradient: "from-blue-500/20 to-blue-900/80",
  },
  {
    id: 5,
    name: "Creator Five",
    image: "/placeholder.svg?height=600&width=600",
    gradient: "from-pink-500/20 to-pink-900/80",
  },
]

export function CreatorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= creators.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? creators.length - 3 : prevIndex - 1))
  }

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Creators</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We set the standard for innovative content creation, something, and community engagement
          </p>
          <Button className="mt-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 rounded-full">
            View full roster
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full p-4 text-white"
            aria-label="Previous creator"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full p-4 text-white"
            aria-label="Next creator"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="flex-none w-full md:w-1/3 relative aspect-[3/4] rounded-3xl overflow-hidden"
                >
                  <Image src={creator.image || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${creator.gradient}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{creator.name}</h3>
                    <div className="flex gap-4">
                      <Link href="#" className="text-white hover:text-gray-300 transition">
                        <Instagram className="w-6 h-6" />
                      </Link>
                      <Link href="#" className="text-white hover:text-gray-300 transition">
                        <Youtube className="w-6 h-6" />
                      </Link>
                      <Link href="#" className="text-white hover:text-gray-300 transition">
                        <Twitter className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

