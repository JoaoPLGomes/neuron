import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            x: { duration: 0.5, ease: "linear" },
            y: { duration: 0.5, ease: "linear" },
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/95 via-[#0E0725]/98 to-[#030014]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"
          style={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
          transition={{
            x: { duration: 0.5, ease: "linear" },
            y: { duration: 0.5, ease: "linear" },
          }}
        />
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-12 gap-0.5 opacity-10">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-full bg-white/[0.02] backdrop-blur-sm border-t border-white/[0.02]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          className="relative inline-block mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200">
            Crafting Visual
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl"
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{
              x: { duration: 0.5, ease: "linear" },
              y: { duration: 0.5, ease: "linear" },
            }}
          />
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-indigo-100/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We bring your events to life through cutting-edge audiovisual
          solutions, creating unforgettable experiences that captivate and
          inspire.
        </motion.p>
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#services"
            className="group relative px-8 py-4 overflow-hidden rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
              }}
            />
            <span className="relative z-10 text-indigo-100 font-medium">
              Our Services
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 overflow-hidden rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
              }}
            />
            <span className="relative z-10 text-indigo-100 font-medium">
              Get in Touch
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-indigo-200/50 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-indigo-200/50 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
