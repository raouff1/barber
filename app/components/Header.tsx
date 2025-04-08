'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-500">
          Salong Dante 
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-amber-500 transition">Services</Link>
          <Link href="#gallery" className="hover:text-amber-500 transition">Gallery</Link>
          <Link href="#team" className="hover:text-amber-500 transition">Our Team</Link>
          <Link href="#testimonials" className="hover:text-amber-500 transition">Testimonials</Link>
          <Link href="#contact" className="hover:text-amber-500 transition">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <FaPhone className="text-amber-500" />
          <span className="font-semibold">(555) 123-4567</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#services" className="hover:text-amber-500 transition" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#gallery" className="hover:text-amber-500 transition" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="#team" className="hover:text-amber-500 transition" onClick={() => setIsOpen(false)}>Our Team</Link>
            <Link href="#testimonials" className="hover:text-amber-500 transition" onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link href="#contact" className="hover:text-amber-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          <div className="flex items-center mt-4 space-x-2">
            <FaPhone className="text-amber-500" />
            <span className="font-semibold">(555) 123-4567</span>
          </div>
        </div>
      )}
    </header>
  )
}