import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Salong Dante</h3>
            <p className="text-gray-400">
              Traditionell barbering med modern stil. Upplev den perfekta frisyren varje gång.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabba Länkar</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-amber-500 transition">Priser</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-amber-500 transition">Galleri</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-amber-500 transition">Våran Team</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-amber-500 transition">Omdömen</Link></li>
              <li><Link href="/boka" className="text-gray-400 hover:text-amber-500 transition">Boka Nu</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Nygatan 20, 311 30 Falkenberg</li>
              <li>0761239587</li>
              <li>salongdante@live.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Följ Oss</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition text-xl">
                <FaInstagram />
              </a>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-4">Öppet Tider</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Måndag - Fredag: 09:00 - 18:00</li>
              <li>Lördag: 10:00 - 17:00</li>
              <li>Söndag: Stängt</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Salong Dante. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}