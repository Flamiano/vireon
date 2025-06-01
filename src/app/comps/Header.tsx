'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-vireon-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-vireon-primaryGreen">
              VIREON
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-vireon-charcoal hover:text-vireon-primaryGreen transition">Start Here</Link>
            <Link href="/about" className="text-vireon-charcoal hover:text-vireon-primaryGreen transition">Who We Are</Link>
            <Link href="/expertise" className="text-vireon-charcoal hover:text-vireon-primaryGreen transition">Our Expertise</Link>
            <Link href="/services" className="text-vireon-charcoal hover:text-vireon-primaryGreen transition">Plans & Packages</Link>
            <Link href="/contact" className="text-vireon-charcoal hover:text-vireon-primaryGreen transition">Connect With Us</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-vireon-charcoal focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-vireon-white shadow-md">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-vireon-charcoal hover:text-vireon-primaryGreen">Start Here</Link>
            <Link href="/about" className="block text-vireon-charcoal hover:text-vireon-primaryGreen">Who We Are</Link>
            <Link href="/expertise" className="block text-vireon-charcoal hover:text-vireon-primaryGreen">Our Expertise</Link>
            <Link href="/services" className="block text-vireon-charcoal hover:text-vireon-primaryGreen">Plans & Packages</Link>
            <Link href="/contact" className="block text-vireon-charcoal hover:text-vireon-primaryGreen">Connect With Us</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
