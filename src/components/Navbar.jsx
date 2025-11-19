import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">FK</div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Farhan Khan</p>
              <p className="text-xs text-blue-200/80">Realtor • Entrepreneur • Philanthropist</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-blue-100">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition">Home</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
            <button onClick={() => scrollTo('properties')} className="hover:text-white transition">Properties</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
          </nav>

          <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {['home','about','properties','contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left px-3 py-2 rounded-lg text-blue-100 hover:bg-white/5">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
