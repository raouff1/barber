import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}