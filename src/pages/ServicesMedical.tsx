import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Stethoscope, Receipt, ArrowRight, ShieldCheck, FileCheck } from "lucide-react";

const ServicesMedical = () => (
  <Layout>
    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Medical Services"
          title="Healthcare Back-Office Solutions"
          description="Specialized transcription and billing services designed for the healthcare industry, ensuring accuracy and HIPAA-grade confidentiality."
        />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {[
          {
            icon: Stethoscope,
            title: "Medical Transcription",
            description:
              "Our certified medical transcriptionists convert physician dictations, clinical notes, and patient records into accurate, structured digital documents. We support multiple specialties and turnaround requirements, maintaining full HIPAA compliance throughout.",
            features: ["Multi-specialty support", "24-48 hour turnaround", "HIPAA compliant processes", "Quality audits on every file"],
          },
          {
            icon: Receipt,
            title: "Medical Billing",
            description:
              "We streamline revenue cycle management with end-to-end medical billing services — from patient registration and insurance verification to claims submission, denial management, and payment posting. Reduce claim rejections and accelerate reimbursements.",
            features: ["Claims submission & tracking", "Denial management", "Insurance verification", "Revenue cycle optimization"],
          },
        ].map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <service.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{service.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <FileCheck size={16} className="text-accent shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <ShieldCheck size={32} className="text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Compliance & Security</h2>
        </div>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          All medical data is handled with enterprise-grade security, strict access controls, and full regulatory compliance.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Enquire Now <ArrowRight size={18} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ServicesMedical;
