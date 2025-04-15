const testimonials = [
    {
      id: 1,
      name: "Robert Isaksson",
      role: "Vanlig kund",
      content: "Bästa barbershopen i stan! Låt alltid gå därifrån med att se fräsch ut och kännas fräsch. Den varma handduksrakningen är ett måste att prova.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Santos",
      role: "Ny kund",
      content: "Första gången här och jag är imponerad. Stor uppmärksamhet på detaljer och vänlig atmosfär. Kommer definitivt tillbaka.",
      rating: 5
    },
    {
      id: 3,
      name: "David Halmgren",
      role: "Långvarig kund",
      content: "Har kommit hit i flera år. Jämn kvalitet och professionell service varje gång.",
      rating: 5
    }
  ]
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kundomdömen</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Ta inte bara vårt ord för det - lyssna på vad våra kunder har att säga.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }