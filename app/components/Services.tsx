import { FaScissors, FaBrush } from 'react-icons/fa6'

import { GiBeard } from 'react-icons/gi'

export default function Services() {
  const services = [
    {
      icon: <FaScissors className="text-4xl text-amber-500" />,
      title: "Maskinklippning",
      
      price: "170 kr"
    },
    {
      icon: <GiBeard className="text-4xl text-amber-500" />,
      title: "Barnklippning",
      
      price: "180 kr"
    },
    {
      icon: <FaBrush className="text-4xl text-amber-500" />,
      title: "Herrklippning",
      
      price: "250 kr"
    },
    {
      icon: <FaBrush className="text-4xl text-amber-500" />,
      title: "Färga håret",
      
      price: "150 kr"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våran Service</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Vi är välutbildade frisörer och utför allt från korta till långa frisyrer: damklippning, herrklippning, barnklippning, Slingor, Färgning av ögonbryn, Hårfärgning 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              
              <p className="text-amber-500 font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}