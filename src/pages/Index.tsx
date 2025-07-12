import Hero from '@/components/Hero';
import About from '@/components/About';
import CourseModules from '@/components/CourseModules';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Hero />
      <About />
      <CourseModules />
      <Features />
      <Screenshots />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
