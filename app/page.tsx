import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TestimonialsCarousel />
    </main>
  );
}
