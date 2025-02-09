import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            <div className="space-y-4">
              <Link href="/careers" className="text-white hover:text-gray-300 block">
                Careers
              </Link>
              <Link href="/privacy" className="text-white hover:text-gray-300 block">
                Privacy
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/about" className="text-white hover:text-gray-300 block">
                About
              </Link>
              <Link href="/creators" className="text-white hover:text-gray-300 block">
                Creators
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/contact" className="text-white hover:text-gray-300 block">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800">
          <Link href="/brands-developers" className="text-gray-400 hover:text-gray-300 mb-4 md:mb-0">
            For Brands & Developers
          </Link>
          <p className="text-gray-600">2025 RWND INC.</p>
        </div>
      </div>
    </footer>
  )
}

