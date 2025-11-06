import { useState } from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
            <span className="text-white font-semibold tracking-wide">NIKE//NEO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#collection" className="hover:text-white transition">Collection</a>
            <a href="#tech" className="hover:text-white transition">Tech</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition">
              <Search size={18} />
            </button>
            <button aria-label="Cart" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition">
              <ShoppingCart size={18} />
            </button>
            <button
              aria-label="Menu"
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition"
              onClick={() => setOpen(!open)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-white/10 text-white/80">
            <a href="#collection" className="block py-2">Collection</a>
            <a href="#tech" className="block py-2">Tech</a>
            <a href="#about" className="block py-2">About</a>
          </div>
        )}
      </div>
    </header>
  );
}
