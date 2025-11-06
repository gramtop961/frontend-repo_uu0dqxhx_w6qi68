import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300/80">
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              Limited Drop
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
              Nike HyperFlux
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">Cyber Edition</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Built for speed in the real world and the metaverse. Adaptive cushioning, breathable nanomesh, and luminous threads that react to your motion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#collection" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg shadow-purple-500/25 hover:opacity-90 transition">Shop Collection</a>
              <a href="#tech" className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition">Explore Tech</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  );
}
