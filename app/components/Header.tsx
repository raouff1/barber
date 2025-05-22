'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaCalendarAlt } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition">
          Salong Dante 
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#services" className="hover:text-amber-500 transition">Priser</Link>
          <Link href="#gallery" className="hover:text-amber-500 transition">Galleri</Link>
          <Link href="#team" className="hover:text-amber-500 transition">Våran Team</Link>
          <Link href="#testimonials" className="hover:text-amber-500 transition">Omdömen</Link>
          <Link 
            href="/boka" 
            className="flex items-center bg-amber-500 text-black px-4 py-2 rounded-md hover:bg-amber-600 transition"
          >
            <FaCalendarAlt className="mr-2" />
            Boka Nu
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <FaPhone className="text-amber-500" />
          <span className="font-semibold">0761239587</span>
        </div>
        
        {/* Mobile menu button */}

        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#services" className="hover:text-amber-500 transition py-2" onClick={() => setIsOpen(false)}>Priser</Link>
            <Link href="#gallery" className="hover:text-amber-500 transition py-2" onClick={() => setIsOpen(false)}>Galleri</Link>
            <Link href="#team" className="hover:text-amber-500 transition py-2" onClick={() => setIsOpen(false)}>Våran Team</Link>
            <Link href="#testimonials" className="hover:text-amber-500 transition py-2" onClick={() => setIsOpen(false)}>Omdömen</Link>
            <Link 
              href="/boka" 
              className="flex items-center justify-center bg-amber-500 text-black px-4 py-2 rounded-md hover:bg-amber-600 transition mt-2"
              onClick={() => setIsOpen(false)}
            >
              <FaCalendarAlt className="mr-2" />
              Boka Nu
            </Link>
          </nav>
          <div className="flex items-center mt-4 space-x-2 pt-4 border-t border-gray-800">
            <FaPhone className="text-amber-500" />
            <span className="font-semibold">0761239587</span>
          </div>
        </div>
      )}
    </header>
  )
}