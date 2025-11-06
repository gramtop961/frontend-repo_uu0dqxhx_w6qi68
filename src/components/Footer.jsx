export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} NIKE//NEO — HyperFlux Series</p>
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
