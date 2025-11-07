import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { formatRupiah } from './data';

const ProductCard = ({ product, onClick, onAdd }) => {
  return (
    <div
      onClick={() => onClick?.(product)}
      className="group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="h-12 text-sm font-medium text-neutral-900 dark:text-white line-clamp-2">
          {product.name}
        </div>
        <div className="flex items-center gap-1 text-amber-500 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'text-neutral-300 dark:text-neutral-600'}`} fill="currentColor" />
          ))}
          <span className="ml-1 text-xs text-neutral-500">{product.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">{formatRupiah(product.price)}</div>
        <button
          onClick={(e) => { e.stopPropagation(); onAdd?.(product); }}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <ShoppingCart className="h-5 w-5" /> Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
