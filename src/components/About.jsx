export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Farhan</h2>
            <p className="mt-4 text-blue-200/90 leading-relaxed">
              Farhan Khan is a London-based real estate agent and entrepreneur known for building long-term relationships and delivering exceptional results. His philanthropic initiatives focus on education, housing, and youth empowerment across the UK.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                {label: 'Areas of Focus', value: 'Prime sales • Investments • New builds'},
                {label: 'Credentials', value: 'ARLA, NAEA, RICS-affiliated network'},
                {label: 'Networks', value: 'Family offices • Developers • Global buyers'},
                {label: 'Philanthropy', value: 'Scholarships • Community centres • Mentorship'},
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-blue-200/80">{item.label}</p>
                  <p className="mt-1 text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg">Mission</h3>
            <p className="mt-2 text-blue-200/90">
              To connect people with extraordinary homes while creating social value for London communities.
            </p>
            <h3 className="mt-6 text-white font-semibold text-lg">Approach</h3>
            <ul className="mt-2 space-y-2 text-blue-200/90 list-disc list-inside">
              <li>Discreet and data-driven advisory</li>
              <li>Global reach with local insight</li>
              <li>Transparent communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
