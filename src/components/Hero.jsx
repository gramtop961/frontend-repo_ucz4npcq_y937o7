import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Temukan Produk Terbaik untuk Kebutuhanmu
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
              Marketplace modern dengan pengalaman belanja cepat, aman, dan elegan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => onCTAClick?.('shop')} className="px-5 py-3 rounded-xl bg-blue-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Belanja Sekarang
              </button>
              <button onClick={() => onCTAClick?.('categories')} className="px-5 py-3 rounded-xl bg-neutral-900/5 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-neutral-900/10 dark:hover:bg-white/20 transition-all">
                Jelajahi Kategori
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl" />
            <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_40%)] pointer-events-none rounded-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
