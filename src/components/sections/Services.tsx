import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mic2,
  Camera,
  Lightbulb,
  Music4,
  MonitorPlay,
  Clapperboard,
} from "lucide-react";

const services = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Sound Systems",
    description:
      "Professional audio solutions for crystal-clear sound at any venue size",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Video Production",
    description:
      "High-quality video capture and live streaming for your events",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Lighting Design",
    description:
      "Creative lighting solutions to set the perfect mood and atmosphere",
  },
  {
    icon: <Music4 className="w-8 h-8" />,
    title: "DJ Equipment",
    description:
      "Top-of-the-line DJ gear and setup for unforgettable performances",
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Display Solutions",
    description:
      "LED walls, projectors, and screens for impactful visual presentations",
  },
  {
    icon: <Clapperboard className="w-8 h-8" />,
    title: "Event Production",
    description: "Full-service event production and technical direction",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="group relative bg-[#0E0725]/20 backdrop-blur-sm border border-indigo-500/10 p-8 rounded-xl transition-all duration-300"
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] to-purple-500/[0.07] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10">
          <motion.div
            className="mb-6 text-indigo-300 transform transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {service.icon}
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-100"
            initial={false}
            whileHover={{ scale: 1.05 }}
          >
            {service.title}
          </motion.h3>
          <p className="text-indigo-200/60">{service.description}</p>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-b-xl"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.p
            className="mt-6 text-indigo-200/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Elevate your events with our comprehensive range of professional
            audiovisual solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-0.5 opacity-[0.15]">
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-full bg-white/[0.01] backdrop-blur-sm border-t border-white/[0.02]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
