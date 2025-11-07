export const categories = [
  { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
  { id: 'electronics', name: 'Elektronik', icon: 'Monitor' },
  { id: 'home', name: 'Rumah Tangga', icon: 'Home' },
  { id: 'sports', name: 'Olahraga', icon: 'Dumbbell' },
  { id: 'gadget', name: 'Gadget', icon: 'Smartphone' },
  { id: 'beauty', name: 'Kecantikan', icon: 'Sparkles' },
  { id: 'automotive', name: 'Otomotif', icon: 'Car' },
  { id: 'kids', name: 'Anak', icon: 'Blocks' },
];

export const products = [
  {
    id: 'p1',
    name: 'Headphone Nirkabel Noise Cancelling',
    price: 1250000,
    rating: 4.6,
    stock: 23,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1631586552668-b31039d4921d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFkcGhvbmUlMjBOaXJrYWJlbCUyME5vaXNlJTIwQ2FuY2VsbGluZ3xlbnwwfDB8fHwxNzYyNTE2NzA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Headphone premium dengan noise cancelling aktif, baterai tahan hingga 30 jam, dan kualitas audio jernih untuk pengalaman mendengarkan terbaik.',
    specs: [
      'Bluetooth 5.3',
      'Driver 40mm',
      'ANC 3 level',
      'USB-C Charging',
    ],
  },
  {
    id: 'p2',
    name: 'Sneakers Lightweight Breathable',
    price: 689000,
    rating: 4.4,
    stock: 12,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    description:
      'Sepatu ringan dan breathable untuk aktivitas harian dan olahraga ringan. Desain minimalis dengan cushion empuk.',
    specs: ['Mesh upper', 'Eva foam', 'Anti-slip outsole'],
  },
  {
    id: 'p3',
    name: 'Smartwatch Fitness Tracker',
    price: 955000,
    rating: 4.2,
    stock: 34,
    category: 'gadget',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1200&auto=format&fit=crop',
    description:
      'Smartwatch dengan pelacak kesehatan lengkap: detak jantung, SpO2, sleep tracking, dan GPS built-in.',
    specs: ['GPS', 'Heart-rate', 'Water resistant 5ATM'],
  },
  {
    id: 'p4',
    name: 'Blender Serbaguna 1.5L',
    price: 425000,
    rating: 4.1,
    stock: 17,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop',
    description:
      'Blender serbaguna untuk jus dan bumbu. Jar kaca 1.5L dengan motor 500W dan 3 tingkat kecepatan.',
    specs: ['Jar 1.5L', 'Motor 500W', 'Pisau stainless'],
  },
  {
    id: 'p5',
    name: 'Matras Yoga Anti-Slip',
    price: 199000,
    rating: 4.5,
    stock: 48,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1540205570762-38fc2fe09afc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRyYXMlMjBZb2dhJTIwQW50aS1TbGlwfGVufDB8MHx8fDE3NjI1MTY3MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Matras yoga anti-slip dengan ketebalan 6mm untuk kenyamanan maksimal saat latihan.',
    specs: ['Tebal 6mm', 'Anti-slip', 'Ringan'],
  },
  {
    id: 'p6',
    name: 'Serum Wajah Vitamin C',
    price: 149000,
    rating: 4.0,
    stock: 60,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
    description:
      'Serum wajah dengan Vitamin C untuk mencerahkan kulit dan meratakan warna kulit.',
    specs: ['Vitamin C 10%', 'Hyaluronic acid', 'No paraben'],
  },
  {
    id: 'p7',
    name: 'Dash Cam 1080p Wide Angle',
    price: 379000,
    rating: 4.3,
    stock: 28,
    category: 'automotive',
    image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200&auto=format&fit=crop',
    description:
      'Kamera dashboard mobil 1080p dengan wide angle 170°, loop recording, dan G-sensor.',
    specs: ['1080p', '170°', 'Loop record'],
  },
  {
    id: 'p8',
    name: 'Mainan Blok Bangun Edukatif',
    price: 99000,
    rating: 4.7,
    stock: 75,
    category: 'kids',
    image: 'https://images.unsplash.com/photo-1705877954979-4cc09aa9ab6b?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1MTY3MDV8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Mainan edukatif untuk melatih kreativitas dan motorik halus anak. Aman dan bebas BPA.',
    specs: ['BPA Free', '100 pcs', 'Usia 3+'],
  },
];

export const formatRupiah = (num) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num);
