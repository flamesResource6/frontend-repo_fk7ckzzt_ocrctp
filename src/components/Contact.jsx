import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', property_ref: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash.includes('ref=')) {
      const ref = new URLSearchParams(hash.split('?')[1]).get('ref')
      setForm((f) => ({ ...f, property_ref: ref || '' }))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', property_ref: '' })
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h2>
            <p className="mt-2 text-blue-200/90">Book a private consultation or request details on a listing.</p>
            <div className="mt-6 space-y-3 text-blue-200/90">
              <p>Based in: London, United Kingdom</p>
              <p>Service areas: Mayfair, Knightsbridge, Chelsea, Kensington, Belgravia, City</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200 mb-1">Full name</label>
                <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Phone</label>
                <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Property reference</label>
                <input value={form.property_ref} onChange={(e)=>setForm({...form, property_ref:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200 mb-1">Subject</label>
                <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200 mb-1">Message</label>
                <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required rows={5} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition disabled:opacity-60" disabled={status==='loading'}>
              {status==='loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
            {status==='success' && <p className="mt-3 text-green-400">Thanks! We will be in touch shortly.</p>}
            {status && status!=='loading' && status!=='success' && <p className="mt-3 text-red-400">{String(status)}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
