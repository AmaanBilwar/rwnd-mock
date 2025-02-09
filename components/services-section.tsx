"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const animatedElements = document.querySelectorAll(".reveal")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 reveal">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Creator content"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Creator content"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Creator content"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Creator content"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white reveal">
              S-Tier Talent,
              <br />
              S-Tier Support
            </h2>
            <ul className="space-y-4">
              {[
                "World Class Talent Management",
                "Platform and Content Monetization",
                "Brand & Game Dev Partnership Strategy",
                "Licensing, Merchandising, and Live Events",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-center space-x-3 reveal"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex-shrink-0" />
                  <span className="text-lg text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

