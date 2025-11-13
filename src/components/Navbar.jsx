import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-content-center font-bold">S1</div>
            <div>
              <p className="text-sm leading-4 text-gray-500">SMA Negeri 1</p>
              <p className="text-base font-semibold text-gray-900">Kertasari</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#profil" className="hover:text-blue-600">Profil</a>
            <a href="#program" className="hover:text-blue-600">Program</a>
            <a href="#pengumuman" className="hover:text-blue-600">Pengumuman</a>
            <a href="#agenda" className="hover:text-blue-600">Agenda</a>
            <a href="#kontak" className="hover:text-blue-600">Kontak</a>
            <a href="#ppdb" className="inline-flex items-center bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700">PPDB</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 grid gap-2 text-gray-700">
            <a href="#profil" className="py-2">Profil</a>
            <a href="#program" className="py-2">Program</a>
            <a href="#pengumuman" className="py-2">Pengumuman</a>
            <a href="#agenda" className="py-2">Agenda</a>
            <a href="#kontak" className="py-2">Kontak</a>
            <a href="#ppdb" className="py-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-md">PPDB</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar