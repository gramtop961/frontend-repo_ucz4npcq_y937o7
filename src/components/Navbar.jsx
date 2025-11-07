import React, { useEffect, useState } from 'react';
import { ShoppingCart, User, LogIn, UserPlus, Menu, X, Search, ChevronDown, Sun, Moon } from 'lucide-react';

const Navbar = ({ onNavigate, cartCount = 0, onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 ${
      scrolled ? 'shadow-md' : ''
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">S</div>
              <span className="font-semibold tracking-tight text-lg text-neutral-900 dark:text-white">ShopNest</span>
            </button>
          </div>

          {/* Center: Search */}
          <div className="hidden md:block flex-1 max-w-2xl mx-6">
            <form onSubmit={submit} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-900 outline-none border border-transparent focus:border-blue-500 transition-all text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400"
                placeholder="Cari produk atau kategori..."
              />
              <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm">Cari</button>
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              {dark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-neutral-700" />}
            </button>
            <div className="relative">
              <button onClick={() => setProfileOpen((o) => !o)} className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                <User className="h-5 w-5" />
                <span className="text-sm">Profil</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-neutral-100 dark:border-neutral-800 overflow-hidden">
                  <button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</button>
                  <button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-2"><UserPlus className="h-4 w-4" /> Register</button>
                </div>
              )}
            </div>
            <button onClick={() => onNavigate('checkout')} className="relative px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <form onSubmit={submit} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-900 outline-none border border-transparent focus:border-blue-500 transition-all text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400"
              placeholder="Cari produk atau kategori..."
            />
            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm">Cari</button>
          </form>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-xl p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">S</div>
                <span className="font-semibold">ShopNest</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"><X className="h-5 w-5" /></button>
            </div>
            <button className="w-full px-3 py-2 text-left rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</button>
            <button className="w-full px-3 py-2 text-left rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"><UserPlus className="h-4 w-4" /> Register</button>
            <button onClick={() => { onNavigate('checkout'); setOpen(false); }} className="w-full px-3 py-2 text-left rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> Keranjang</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
