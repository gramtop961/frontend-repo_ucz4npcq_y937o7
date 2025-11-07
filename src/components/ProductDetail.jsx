import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { formatRupiah } from './data';

const tabs = [
  { id: 'desc', label: 'Deskripsi' },
  { id: 'reviews', label: 'Ulasan' },
  { id: 'specs', label: 'Spesifikasi' },
];

const ProductDetail = ({ product, onBack, onBuy }) => {
  const [active, setActive] = useState('desc');

  if (!product) return null;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="text-sm text-blue-600 hover:underline">← Kembali</button>
        <div className="mt-4 grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'text-neutral-300 dark:text-neutral-600'}`} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-neutral-500">{product.rating.toFixed(1)} • Stok {product.stock}</span>
            </div>
            <div className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">{formatRupiah(product.price)}</div>
            <div className="mt-4 text-neutral-600 dark:text-neutral-300">{product.description}</div>

            <div className="mt-6 flex gap-3">
              <button onClick={() => onBuy?.(product)} className="px-5 py-3 rounded-xl bg-blue-600 text-white shadow-md hover:shadow-lg transition">Beli Sekarang</button>
              <button className="px-5 py-3 rounded-xl bg-neutral-900/5 dark:bg-white/10 text-neutral-900 dark:text-white">Tambah ke Keranjang</button>
            </div>

            <div className="mt-8">
              <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`px-4 py-2 text-sm rounded-t-md ${
                      active === t.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="pt-4 text-sm text-neutral-700 dark:text-neutral-300">
                {active === 'desc' && <p>{product.description}</p>}
                {active === 'reviews' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                      <div className="font-medium">Nadia</div>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">Produk bagus, pengiriman cepat!</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                      <div className="font-medium">Rizky</div>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">Sesuai deskripsi, recommended.</p>
                    </div>
                  </div>
                )}
                {active === 'specs' && (
                  <ul className="list-disc pl-5 space-y-1">
                    {product.specs?.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
