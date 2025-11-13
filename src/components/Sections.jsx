function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

export function Programs() {
  const items = [
    { title: 'Program Unggulan', desc: 'Kegiatan pembinaan akademik dan non-akademik untuk mencetak generasi berprestasi.' },
    { title: 'Ekstrakurikuler', desc: 'Pilihan ekskul beragam: Pramuka, Paskibra, KIR, Musik, Olahraga, dan lainnya.' },
    { title: 'Fasilitas', desc: 'Ruang kelas nyaman, laboratorium, perpustakaan, lapangan olahraga, dan jaringan internet.' },
  ]
  return (
    <Section id="program" title="Program Sekolah">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
            <p className="mt-2 text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Announcements({ items }) {
  return (
    <Section id="pengumuman" title="Pengumuman Terbaru">
      {items?.length ? (
        <div className="grid gap-4">
          {items.map((a) => (
            <article key={a.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{a.title}</h3>
              <p className="mt-2 text-gray-600 whitespace-pre-line">{a.content}</p>
              <div className="mt-4 text-sm text-gray-500 flex items-center gap-3">
                <span className="inline-flex items-center rounded bg-blue-50 text-blue-700 px-2 py-0.5">{a.category || 'Umum'}</span>
                {a.date && <span>{new Date(a.date).toLocaleDateString('id-ID')}</span>}
                {a.author && <span>Oleh {a.author}</span>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada pengumuman.</p>
      )}
    </Section>
  )
}

export function Events({ items }) {
  return (
    <Section id="agenda" title="Agenda & Kegiatan">
      {items?.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((e) => (
            <div key={e.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
              {e.start_date && (
                <p className="mt-1 text-sm text-gray-500">{new Date(e.start_date).toLocaleString('id-ID')}</p>
              )}
              {e.location && <p className="mt-1 text-sm text-gray-500">{e.location}</p>}
              {e.description && <p className="mt-3 text-gray-600">{e.description}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada agenda.</p>
      )}
    </Section>
  )
}

export function Footer() {
  return (
    <footer id="kontak" className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="text-gray-900 font-semibold">SMAN 1 Kertasari</h4>
          <p className="mt-2">Jl. Raya Kertasari No. 1, Kertasari</p>
          <p>Bandung, Jawa Barat</p>
          <p className="mt-2">Email: info@sman1kertasari.sch.id</p>
          <p>Telp: (022) 1234-5678</p>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold">Navigasi</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#profil" className="hover:text-blue-600">Profil</a></li>
            <li><a href="#program" className="hover:text-blue-600">Program</a></li>
            <li><a href="#pengumuman" className="hover:text-blue-600">Pengumuman</a></li>
            <li><a href="#agenda" className="hover:text-blue-600">Agenda</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold">Media Sosial</h4>
          <div className="mt-2 flex gap-3">
            <a className="hover:text-blue-600" href="#">Facebook</a>
            <a className="hover:text-blue-600" href="#">Instagram</a>
            <a className="hover:text-blue-600" href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} SMAN 1 Kertasari. All rights reserved.</div>
    </footer>
  )
}

export default Section
