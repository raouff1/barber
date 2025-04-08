import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Classic Cuts</h3>
            <p className="text-gray-400">
              Traditional barbering with modern style. Experience the perfect haircut every time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-amber-500 transition">Services</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-amber-500 transition">Gallery</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-amber-500 transition">Our Team</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-amber-500 transition">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-amber-500 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Barber Street</li>
              <li>Downtown, City</li>
              <li>(555) 123-4567</li>
              <li>info@classiccuts.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition text-xl">
                <FaInstagram />
              </a>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-4">Hours</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Mon-Fri: 9am - 7pm</li>
              <li>Sat: 9am - 5pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Classic Cuts Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}