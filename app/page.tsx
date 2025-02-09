import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CreatorCarousel } from "@/components/creator-carousel"
import { ServicesSection } from "@/components/services-section"
import { WhoWeAre } from "@/components/who-we-are"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"
import React, { useEffect } from 'react'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-2xl">
              RWND
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/creators" className="text-white hover:text-gray-300 transition">
                Creators
              </Link>
              <Link href="/our-work" className="text-white hover:text-gray-300 transition">
                Our Work
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition">
                About
              </Link>
              <Link href="/brands-developers" className="text-white hover:text-gray-300 transition">
                Brands + Developers
              </Link>
              <Link href="/careers" className="text-white hover:text-gray-300 transition">
                Careers
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-purple-900/90 to-slate-900">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                CREATORS ARE
                <br />
                THE FUTURE OF
                <br />
                CONTENT
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Since 2016, RWND has supported best-in-class content creators with full-service management, helping
                them build compelling brands and businesses that push gaming forward.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/creators">View Our Creators</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Add Who We Are section right after the hero */}
        <WhoWeAre />

        {/* Creator Carousel Section */}
        <CreatorCarousel />

        {/* Services Section */}
        <ServicesSection />

        {/* Add Contact Us section */}
        <ContactUs />
      </main>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}

