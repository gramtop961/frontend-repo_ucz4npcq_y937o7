import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { formatRupiah } from './data';

const steps = ['Alamat Pengiriman', 'Metode Pembayaran', 'Konfirmasi'];

const Checkout = ({ cart = [], onBack }) => {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ nama: '', telp: '', alamat: '', kota: '', kodepos: '' });
  const [method, setMethod] = useState('transfer');

  const subtotal = cart.reduce((a, b) => a + b.price, 0);
  const shipping = cart.length ? 15000 : 0;
  const total = subtotal + shipping;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="text-sm text-blue-600 hover:underline">← Kembali</button>
        <h1 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">Checkout</h1>

        <div className="mt-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s} className="flex-1 flex items-center">
                  <div className={`flex items-center gap-2 ${i <= active ? 'text-blue-600' : 'text-neutral-400'}`}>
                    <div className={`h-7 w-7 rounded-full grid place-items-center border ${i <= active ? 'bg-blue-600 text-white border-blue-600' : ''}`}>{i + 1}</div>
                    <span className="text-sm font-medium hidden sm:block">{s}</span>
                  </div>
                  {i < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${i < active ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-800'}`} />}
                </div>
              ))}
            </div>

            {active === 0 && (
              <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                <div className="grid sm:grid-cols-2 gap-4">
                  {['nama','telp','alamat','kota','kodepos'].map((k) => (
                    <div key={k} className={k==='alamat' ? 'sm:col-span-2' : ''}>
                      <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1 capitalize">{k}</label>
                      <input value={form[k]} onChange={(e)=>setForm({ ...form, [k]: e.target.value })} className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button onClick={()=>setActive(1)} className="px-5 py-2 rounded-xl bg-blue-600 text-white">Lanjut</button>
                </div>
              </div>
            )}

            {active === 1 && (
              <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                <div className="space-y-3">
                  {[
                    { id:'transfer', label:'Transfer Bank (Virtual Account)' },
                    { id:'ewallet', label:'E-Wallet' },
                    { id:'cod', label:'Bayar di Tempat (COD)' },
                  ].map((m)=> (
                    <label key={m.id} className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800">
                      <input type="radio" name="pay" checked={method===m.id} onChange={()=>setMethod(m.id)} />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <button onClick={()=>setActive(0)} className="px-5 py-2 rounded-xl bg-neutral-200 dark:bg-neutral-800">Kembali</button>
                  <button onClick={()=>setActive(2)} className="px-5 py-2 rounded-xl bg-blue-600 text-white">Lanjut</button>
                </div>
              </div>
            )}

            {active === 2 && (
              <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Pesanan Siap Diproses</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Periksa kembali detail alamat dan metode pembayaran sebelum konfirmasi.</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <button onClick={()=>setActive(1)} className="px-5 py-2 rounded-xl bg-neutral-200 dark:bg-neutral-800">Kembali</button>
                  <button className="px-5 py-2 rounded-xl bg-blue-600 text-white">Konfirmasi Pesanan</button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-24 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <div className="font-semibold mb-3">Ringkasan Pesanan</div>
              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {cart.length === 0 && <div className="py-6 text-sm text-neutral-500">Keranjang kosong</div>}
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="text-sm font-medium line-clamp-1">{item.name}</div>
                      <div className="text-xs text-neutral-500">{formatRupiah(item.price)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatRupiah(subtotal)}</span></div>
                <div className="flex justify-between"><span>Pengiriman</span><span>{formatRupiah(shipping)}</span></div>
                <div className="flex justify-between font-semibold pt-2 border-t border-neutral-200 dark:border-neutral-800"><span>Total</span><span>{formatRupiah(total)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
