import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Research from "@/components/sections/research";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";
import Awards from "@/components/sections/awards";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-dark-slate to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Skills />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 p-2 sm:p-3 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-all transform hover:scale-110 z-50 ${
          showBackToTop ? 'opacity-100' : 'opacity-0'
        }`}
        size="icon"
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
}
