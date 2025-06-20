import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import HeroSection from '../components/HeroSection';
import BestSellingProducts from '../components/BestSellingProducts';
import FaqSection from '../components/FaqSection';

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  return (
    <>
      {!showMain && <LoadingScreen onComplete={() => setShowMain(true)} />}
      {showMain && (
        <main>
          <HeroSection />
          <BestSellingProducts />
          <FaqSection />
        </main>
      )}
    </>
  );
}