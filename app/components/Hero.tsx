'use client'

import Image from 'next/image'
import { FaScissors } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-gray-900 text-white">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black/60">
        <Image 
          src="/barbershop-hero.jpg" 
          alt="Barbershop interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <FaScissors className="text-amber-500 text-5xl mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
          Salong Dante
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-black">
          Välkommen till oss på drop-in eller bokat besök.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/boka" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Boka Nu
          </a>
          <a 
            href="#services" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Våran Service
          </a>
        </div>
      </div>
    </section>
  )
}

