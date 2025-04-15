import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: "Sami Haddad",
    role: "",
    bio: "Sami är vår expert på skäggvård, känd för sin uppmärksamhet på detaljer och vänliga service.",
    image: "/profile1.jpg"
  },
  {
    id: 2,
    name: "Farid Kambar",
    role: "",
    bio: "Med över 15 års erfarenhet specialiserar sig Farid på klassiska snitt och rakhyvlar.",
    image: "/profile2.jpg"
  },
  {
    id: 3,
    name: "Omar Naser",
    role: "",
    bio: "Omar tar med sig moderna stylingtekniker till vår traditionella barbershop för en fräsch look.",
    image: "/profile3.jpg"
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våran Team</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Våra skickliga barberare är utbildade i både traditionella och moderna tekniker.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-amber-500">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-amber-500 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}