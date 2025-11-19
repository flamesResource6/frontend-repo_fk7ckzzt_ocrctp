import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Properties from './components/Properties'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Properties />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-blue-300/80">
        <p>© {new Date().getFullYear()} Farhan Khan Realty • London, UK</p>
      </footer>
    </div>
  )
}

export default App
