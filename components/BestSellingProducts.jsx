import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: 'Luxury Sofa', image: '/images/sofa.jpeg', price: '₹25,000' },
  { id: 2, name: 'Elegant Lamp', image: '/images/lamp.jpeg', price: '₹5,499' },
  { id: 3, name: 'Modern Coffee Table', image: '/images/coffee-table.jpeg', price: '₹12,000' },
  { id: 4, name: 'Classic Wall Art', image: '/images/wall-art.jpeg', price: '₹3,200' },
];

export default function BestSellingProducts() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0, y: 50, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center font-serif">Best Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <Image src={product.image} alt={product.name} width={400} height={200} className="w-full object-cover rounded mb-2" />
            <p className="text-center font-semibold">{product.name}</p>
            <p className="text-center text-gray-600 text-sm">{product.price}</p>
            <button className="mt-2 w-full py-2 px-4 bg-black text-white text-sm rounded hover:bg-gray-800 transition">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}