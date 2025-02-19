import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, X, ArrowRight } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "image" | "video";
  videoUrl?: string;
  stats?: {
    attendees?: string;
    duration?: string;
    equipment?: string;
  };
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Corporate Conference",
    description:
      "Full AV setup with immersive displays and crystal-clear audio systems",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    type: "image",
    stats: {
      attendees: "500+",
      duration: "3 Days",
      equipment: "12+ Systems",
    },
  },
  {
    id: 2,
    title: "Music Festival",
    description:
      "State-of-the-art stage and sound management for an unforgettable experience",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    type: "video",
    videoUrl: "/experiences/festival.mp4",
    stats: {
      attendees: "10,000+",
      duration: "4 Days",
      equipment: "50+ Systems",
    },
  },
  {
    id: 3,
    title: "Product Launch",
    description:
      "Cutting-edge product presentation with stunning visual effects",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    type: "image",
    stats: {
      attendees: "300+",
      duration: "1 Day",
      equipment: "8+ Systems",
    },
  },
  {
    id: 4,
    title: "Wedding Ceremony",
    description: "Elegant audio and lighting setup for your special moment",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    type: "image",
    stats: {
      attendees: "200+",
      duration: "1 Day",
      equipment: "6+ Systems",
    },
  },
];

const ExperienceCard = ({
  exp,
  onClick,
}: {
  exp: Experience;
  onClick: () => void;
  mousePosition: { x: number; y: number };
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer bg-[#0E0725]/20 border border-indigo-500/10"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCardPosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-75 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          x: cardPosition.x * 0.5,
          y: cardPosition.y * 0.5,
        }}
      >
        <motion.img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover transition-transform duration-300"
          initial={{ scale: 1.2 }}
          animate={{ scale: isHovered ? 1.15 : 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]/95"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 0.8 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-end"
        style={{
          x: cardPosition.x * -0.5,
          y: cardPosition.y * -0.5,
        }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.h3
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200 mb-3"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {exp.title}
          </motion.h3>
          <motion.p
            className="text-indigo-200/80 mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {exp.description}
          </motion.p>

          {exp.stats && (
            <motion.div
              className="grid grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exp.stats.attendees && (
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Attendees</p>
                  <p className="text-white font-semibold">
                    {exp.stats.attendees}
                  </p>
                </div>
              )}
              {exp.stats.duration && (
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Duration</p>
                  <p className="text-white font-semibold">
                    {exp.stats.duration}
                  </p>
                </div>
              )}
              {exp.stats.equipment && (
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Equipment</p>
                  <p className="text-white font-semibold">
                    {exp.stats.equipment}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            className="inline-flex items-center gap-2 text-indigo-300 group/link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </motion.div>
        </motion.div>
      </motion.div>

      {exp.type === "video" && (
        <motion.div
          className="absolute top-6 right-6 bg-indigo-500/90 p-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Play className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

const Modal = ({
  experience,
  onClose,
}: {
  experience: Experience;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.button
        className="absolute top-6 right-6 text-white/80 hover:text-white z-50 bg-white/10 p-2 rounded-full backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </motion.button>

      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl w-full">
          {experience.type === "video" ? (
            <video
              src={experience.videoUrl}
              controls
              className="w-full rounded-2xl shadow-2xl border border-indigo-500/20"
              autoPlay
            />
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]/95" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {experience.title}
                </h3>
                <p className="text-indigo-200/80 text-lg max-w-2xl">
                  {experience.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    <section id="experiences" className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Experiences
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-indigo-200/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover our portfolio of successful events where we've delivered
            exceptional audiovisual experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              onClick={() => setSelectedExperience(exp)}
              mousePosition={mousePosition}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <Modal
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experiences;
