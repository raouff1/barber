import Image from 'next/image'

const images = [
  { id: 1, src: '/bibi.jpg', alt: '' },
  { id: 2, src: '/gallery2.jpg', alt: '' },
  { id: 3, src: '/didi.jpg', alt: '' },
  { id: 4, src: '/coco.jpg', alt: '' },
  { id: 5, src: '/gallery5.jpg', alt: '' },
  { id: 6, src: '/gallery6.jpg', alt: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Välkommen</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Tillsammans skapar vi en (kort eller lång) frisyr efter Ditt hårs förutsättningar och Dina egna önskemål.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="aspect-w-4 aspect-h-3">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}