import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      const split = new SplitType('.intro-text', { types: 'words' });
      gsap.from(split.words, {
        opacity: 0.3,
        y: 10,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold font-serif">Welcome to Luxury Living</h1>
      <p className="intro-text mt-4 text-gray-700 text-lg max-w-xl font-light font-sans">
        Discover a carefully curated selection of premium items that redefine luxury.
      </p>
    </section>
  );
}