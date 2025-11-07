import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { products as seedProducts } from './components/data';

const App = () => {
  const [route, setRoute] = useState('home');
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('');

  const products = useMemo(() => {
    return seedProducts.filter((p) => {
      const matchSearch = search ? (p.name.toLowerCase().includes(search.toLowerCase())) : true;
      const matchCat = filterCat ? p.category === filterCat : true;
      return matchSearch && matchCat;
    });
  }, [search, filterCat]);

  const handleAdd = (p) => setCart((c) => [...c, p]);

  const onSelectProduct = (p) => {
    setSelected(p);
    setRoute('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (r) => {
    setRoute(r);
    if (r === 'home') setSelected(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-inter">
      <Navbar onNavigate={navigate} cartCount={cart.length} onSearch={setSearch} />

      {route === 'home' && (
        <>
          <Hero onCTAClick={(key)=> key==='shop' ? document.getElementById('products')?.scrollIntoView({ behavior:'smooth' }) : document.getElementById('categories')?.scrollIntoView({ behavior:'smooth' })} />
          <div id="categories">
            <CategorySection onSelect={(cat)=>{ setFilterCat(cat); document.getElementById('products')?.scrollIntoView({ behavior:'smooth' }); }} />
          </div>
          <div id="products">
            <ProductList products={products} onSelect={onSelectProduct} onAdd={handleAdd} />
          </div>
        </>
      )}

      {route === 'detail' && (
        <ProductDetail product={selected} onBack={()=>navigate('home')} onBuy={(p)=>{ handleAdd(p); navigate('checkout'); }} />
      )}

      {route === 'checkout' && (
        <Checkout cart={cart} onBack={()=>navigate('home')} />
      )}

      <Footer />
    </div>
  );
};

export default App;
