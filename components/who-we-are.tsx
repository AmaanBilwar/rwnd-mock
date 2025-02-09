"use client"

import { Users, Monitor, DollarSign, Briefcase, ShoppingBag, Handshake, Trophy, Gamepad } from "lucide-react"
import React, { useEffect } from 'react';

const services = [
  { icon: Users, title: "Talent Management" },
  { icon: Monitor, title: "Content Management" },
  { icon: DollarSign, title: "Platform Monetization" },
  { icon: Briefcase, title: "Creator Brand Strategy" },
  { icon: ShoppingBag, title: "Licensing and Merchandise" },
  { icon: Handshake, title: "Brand Partnerships" },
  { icon: Trophy, title: "Team / Org Partnerships" },
  { icon: Gamepad, title: "Game Dev Partnerships" },
]

export const WhoWeAre = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-16">
          We are a group of gaming, data, and marketing industry leaders working to support the growth of the most
          impactful and innovative creators in gaming. We partner with, manage, and nurture creators whose brands and
          communities move the culture of gaming forward.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex flex-col items-center space-y-4 fade-in">
                <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-gray-300 text-sm md:text-base font-medium">{service.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

