import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, center = true, light = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}
  >
    {label && (
      <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
        {label}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
