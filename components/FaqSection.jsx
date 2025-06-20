import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'What is your return policy?', answer: '30-day return with original condition and receipt.' },
  { question: 'Do you offer international shipping?', answer: 'Yes, with variable fees and times.' },
  { question: 'How can I contact customer support?', answer: 'Via contact form or phone (9am–6pm IST).' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef();

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0, y: 50, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center font-serif">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
            <button onClick={() => toggle(index)} className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition">{faq.question}</button>
            <div className={`px-4 transition-all duration-500 ease-in-out overflow-hidden text-sm text-gray-600 ${openIndex === index ? 'max-h-40 py-3' : 'max-h-0'}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}