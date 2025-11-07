import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white text-lg font-semibold">ShopNest</div>
            <p className="mt-2 text-sm text-neutral-400">Marketplace modern untuk pengalaman belanja yang elegan dan cepat.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Bantuan</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a className="hover:text-white" href="#">FAQ</a></li>
              <li><a className="hover:text-white" href="#">Pengiriman</a></li>
              <li><a className="hover:text-white" href="#">Pengembalian</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Sosial Media</div>
            <div className="flex gap-3">
              <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10" href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10" href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10" href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Newsletter</div>
            <div className="flex gap-2">
              <input placeholder="Email kamu" className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-white placeholder-neutral-500 outline-none border border-white/10 focus:border-white/30" />
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Kirim</button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-neutral-500">
          © {new Date().getFullYear()} ShopNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
