const listings = [
  {
    id: 'FK-001',
    title: 'Mayfair Penthouse',
    location: 'Mayfair, W1',
    price: '£8,950,000',
    beds: 4,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1640&auto=format&fit=crop',
    features: ['Terrace', 'Private lift', 'Concierge'],
  },
  {
    id: 'FK-002',
    title: 'Chelsea Townhouse',
    location: 'Chelsea, SW3',
    price: '£4,250,000',
    beds: 5,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1442181530688-d812138618b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVsc2VhJTIwVG93bmhvdXNlfGVufDB8MHx8fDE3NjM1NzUyMDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    features: ['Garden', 'High ceilings', 'Renovated'],
  },
  {
    id: 'FK-003',
    title: 'Kensington Apartment',
    location: 'Kensington, W8',
    price: '£2,150,000',
    beds: 3,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1640&auto=format&fit=crop',
    features: ['Balcony', 'Portered building', 'Parking'],
  },
]

export default function Properties() {
  return (
    <section id="properties" className="py-20 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Listings</h2>
            <p className="mt-2 text-blue-200/90">A selection of current opportunities in prime London.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Request full brochure</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((home) => (
            <div key={home.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg font-semibold">{home.title}</h3>
                  <span className="text-white/90 font-medium">{home.price}</span>
                </div>
                <p className="mt-1 text-blue-200/90">{home.location}</p>
                <p className="mt-2 text-blue-200/80 text-sm">{home.beds} beds • {home.baths} baths</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {home.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-200 text-xs border border-blue-400/20">{f}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-blue-300">Ref: {home.id}</span>
                  <a href={`#contact?ref=${home.id}`} className="text-blue-300 hover:text-white text-sm">Enquire →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
