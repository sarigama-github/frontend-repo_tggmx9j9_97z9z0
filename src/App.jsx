import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section, { Programs, Announcements, Events, Footer } from './components/Sections'

function App() {
  const [announcements, setAnnouncements] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    fetch(`${baseUrl}/api/announcements`).then(r => r.json()).then(data => {
      setAnnouncements(data.items || [])
    }).catch(() => {})

    fetch(`${baseUrl}/api/events`).then(r => r.json()).then(data => {
      setEvents(data.items || [])
    }).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Section id="profil" title="Profil Sekolah" subtitle="Sekilas tentang SMAN 1 Kertasari">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Visi</h3>
              <p className="mt-2 text-gray-600">Mewujudkan peserta didik yang beriman, berakhlak mulia, berilmu, kreatif, dan berwawasan global.</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Misi</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                <li>Meningkatkan kualitas pembelajaran dan prestasi siswa.</li>
                <li>Mengembangkan karakter dan budaya disiplin.</li>
                <li>Menciptakan lingkungan sekolah yang nyaman dan aman.</li>
                <li>Meningkatkan kompetensi guru dan tenaga kependidikan.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Programs />
        <Announcements items={announcements} />
        <Events items={events} />
      </main>
      <Footer />
    </div>
  )
}

export default App
