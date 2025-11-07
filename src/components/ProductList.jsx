import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductList = ({ products, onSelect, onAdd }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">Produk Unggulan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <ProductCard product={p} onClick={onSelect} onAdd={onAdd} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
