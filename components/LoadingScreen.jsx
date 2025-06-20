import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const loaderRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });
    tl.fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .to(loaderRef.current, { y: '-100%', duration: 1.2, delay: 1.2, onComplete });
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="fixed top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center z-50">
      <div className="text-center">
        <div ref={textRef} className="text-4xl font-serif tracking-wide animate-pulse mb-4">Welcome to Luxury Living</div>
        <div className="w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
}