import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react";

interface ContactInfo {
  icon: typeof Mail;
  title: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@neuron.com",
    link: "mailto:contact@neuron.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "123 AV Street, Audio City, VS 12345",
    link: "https://maps.google.com",
  },
  {
    icon: Globe,
    title: "Service Area",
    value: "Worldwide Coverage",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const ContactCard = ({ info }: { info: ContactInfo }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-[#0E0725]/20 border border-indigo-500/10 p-6"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ scale: 1.05 }}
      />
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-300">
            <info.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-indigo-200 mb-1">
              {info.title}
            </h3>
            {info.link ? (
              <a
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group/link inline-flex items-center gap-2 text-indigo-100/80 hover:text-indigo-100 transition-colors"
              >
                {info.value}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : (
              <p className="text-indigo-100/80">{info.value}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
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
            Get in Touch
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
            Ready to elevate your event? Reach out to us and let's create
            something extraordinary together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info) => (
            <ContactCard key={info.title} info={info} />
          ))}
        </div>

        <motion.div
          className="relative overflow-hidden rounded-2xl bg-[#0E0725]/20 border border-indigo-500/10 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-300">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-200 mb-3">
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center gap-4 text-indigo-100/80"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
