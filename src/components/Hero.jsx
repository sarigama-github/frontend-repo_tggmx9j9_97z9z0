function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              SMA Negeri 1 Kertasari
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Sekolah unggulan dengan lingkungan belajar yang nyaman, disiplin, dan berprestasi. Kami membimbing siswa untuk siap menghadapi masa depan.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#ppdb" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Daftar PPDB</a>
              <a href="#profil" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">Lihat Profil</a>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200/30 blur-2xl rounded-3xl"></div>
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop" alt="Sekolah" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero