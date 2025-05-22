'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaCut, FaUserTie } from 'react-icons/fa'

export default function Boka() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    message: '',
    date: '',
    time: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      alert(`Tack för din bokning hos ${formData.barber}! Vi bekräftar via email inom kort.`)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        barber: '',
        message: '',
        date: '',
        time: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Något gick fel. Försök igen senare.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Boka Tid</h1>
          <p className="text-gray-600">
            Fyll i formuläret nedan så återkommer vi med en bekräftelse.
          </p>
        </motion.div>

        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Namn*</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="Ditt namn"
                />
              </div>
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="din@email.com"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="070 123 45 67"
                />
              </div>
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Frisör*</label>
              <div className="relative">
                <FaUserTie className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  name="barber"
                  required
                  value={formData.barber}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none bg-transparent"
                >
                  <option value="">Välj frisör...</option>
                  <option value="Sami Haddad">Sami Haddad</option>
                  <option value="Farid Kambar">Farid Kambar</option>
                  <option value="Omar Naser">Omar Naser</option>
                </select>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service*</label>
              <div className="relative">
                <FaCut className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none bg-transparent"
                >
                  <option value="">Välj service...</option>
                  <option value="maskinklippning">Maskinklippning</option>
                  <option value="barnklippning">Barnklippning</option>
                  <option value="herrklippning">Herrklippning</option>
                  <option value="färga håret">Färga håret</option>
                  <option value="annat">Annat</option>
                </select>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Datum*</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tid*</label>
            <select
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
            >
              <option value="">Välj tid...</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="17:00">18:00</option>
            </select>
          </motion.div>

          <motion.div variants={item} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none"
              placeholder="Specifika önskemål..."
            />
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Skickar...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Skicka Bokning
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}
