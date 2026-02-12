import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Database,
  FileText,
  ClipboardList,
  Stethoscope,
  Receipt,
  Tags,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Database, title: "Data Entry", description: "Accurate, scalable data management for businesses of all sizes.", link: "/services/data" },
  { icon: Tags, title: "Data Annotation", description: "Structured data labelling for AI/ML training datasets.", link: "/services/data" },
  { icon: ClipboardList, title: "Form Processing", description: "Efficient digital and physical form handling.", link: "/services/data" },
  { icon: Stethoscope, title: "Medical Transcription", description: "Precise medical documentation and transcription services.", link: "/services/medical" },
  { icon: Receipt, title: "Medical Billing", description: "Streamlined billing and coding for healthcare providers.", link: "/services/medical" },
  { icon: FileText, title: "Data Labelling", description: "Image, text and dataset labelling for advanced analytics.", link: "/services/specialized" },
];

const whyChoose = [
  { icon: CheckCircle, title: "99.9% Accuracy", description: "Multi-tier quality checks ensure near-perfect output." },
  { icon: Shield, title: "Data Security", description: "Enterprise-grade encryption and strict confidentiality protocols." },
  { icon: Clock, title: "Quick Turnaround", description: "Streamlined workflows for on-time or early delivery." },
  { icon: Users, title: "Trained Team", description: "Skilled professionals with domain-specific expertise." },
];

const aboutPoints = [
  { icon: Target, title: "Our Vision", description: "To be the most trusted back-office partner for businesses worldwide, driving efficiency through technology and precision." },
  { icon: Eye, title: "Our Mission", description: "Empower organizations to focus on growth by handling their backend operations with accuracy, security, and speed." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Back-Office Excellence
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Streamline Your Operations,{" "}
              <span className="text-gradient-accent">Amplify Your Growth</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg leading-relaxed">
              Sahasra Technologies delivers reliable, accurate back-office solutions so you can focus on what matters most — your core business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services/data">Our Services <ArrowRight size={18} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-surface-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="About Us"
            title="Your Trusted Back-Office Partner"
            description="Based in Andhra Pradesh, Sahasra Technologies is a service-oriented company specializing in reliable and efficient operational support for businesses across industries."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {aboutPoints.map((point, i) => (
              <ServiceCard key={point.title} icon={point.icon} title={point.title} description={point.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Back-Office Solutions"
            description="From data entry to medical billing, we offer a full spectrum of services tailored to your business needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link to={service.link} key={service.title} className="block">
                <ServiceCard icon={service.icon} title={service.title} description={service.description} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Built on Trust & Precision"
            description="Our commitment to quality, security, and efficiency sets us apart."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's discuss how Sahasra Technologies can support your business goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
