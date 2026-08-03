import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import LocationPanel from './components/LocationPanel'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen font-body text-ink">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <LocationPanel />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
