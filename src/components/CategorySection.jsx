import React from 'react';
import { categories } from './data';
import { Shirt, Monitor, Home, Dumbbell, Smartphone, Sparkles, Car, Blocks } from 'lucide-react';

const iconMap = { Shirt, Monitor, Home, Dumbbell, Smartphone, Sparkles, Car, Blocks };

const CategorySection = ({ onSelect }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">Kategori Pilihan</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Home;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect?.(cat.id)}
                className="flex-shrink-0 w-40 sm:w-44 md:w-48 group"
              >
                <div className="rounded-2xl p-5 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-md hover:shadow-lg transition-all grid place-items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 grid place-items-center group-hover:scale-105 transition">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 font-medium text-neutral-900 dark:text-white">{cat.name}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
