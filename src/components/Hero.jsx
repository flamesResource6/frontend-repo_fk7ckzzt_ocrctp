export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Farhan Khan
            </h1>
            <p className="mt-3 text-xl text-blue-100">London-based Realtor, Entrepreneur, and Philanthropist</p>
            <p className="mt-6 text-blue-200/90 leading-relaxed max-w-xl">
              Specialising in prime London property with a people-first approach. From luxury homes to smart investments, Farhan blends market expertise with a commitment to community impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#properties" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">Explore Listings</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Book a Consultation</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-blue-200/80">
              <div>
                <p className="text-2xl font-semibold text-white">12+ yrs</p>
                <p className="text-sm">Property Expertise</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">£250M+</p>
                <p className="text-sm">In Transactions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="text-sm">Community Projects</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBTa3lsaW5lfGVufDB8MHx8fDE3NjM1NzUyMDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="London Skyline" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/70 backdrop-blur rounded-2xl border border-white/10 p-4 shadow-xl">
              <p className="text-white font-semibold">Prime Central London</p>
              <p className="text-blue-200 text-sm">Mayfair • Knightsbridge • Chelsea • Kensington</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
