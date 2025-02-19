import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/sections/Hero";
import Experiences from "./components/sections/Experiences";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Navbar from "./components/ui/Navbar";
import CustomCursor from "./components/ui/CustomCursor";

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Animate sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add("animate-fade-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#030014]">
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0E0725] to-[#030014]"></div>
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Experiences />
              <Services />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default App;
