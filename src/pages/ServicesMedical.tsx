import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Stethoscope, Receipt, ArrowRight, ShieldCheck, FileCheck, Activity, TrendingUp, XCircle, UserCheck } from "lucide-react";

const ServicesMedical = () => (
  <Layout>
    {/* RCM Hero Section */}
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Activity size={14} /> Revenue Cycle Management
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
            End-to-End RCM for{" "}
            <span className="text-accent">Healthcare Providers</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl leading-relaxed">
            RCM is the financial backbone of healthcare — tracking every patient encounter from initial scheduling to final payment collection. We manage the entire cycle so you get paid faster with fewer denials.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: "Improved Cash Flow" },
              { icon: XCircle, label: "Fewer Denials" },
              { icon: UserCheck, label: "Better Patient Experience" },
              { icon: ShieldCheck, label: "HIPAA Compliant" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 bg-white/10 rounded-xl p-4 text-center">
                <Icon size={22} className="text-accent" />
                <span className="text-primary-foreground/80 text-xs font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* RCM Detail Section */}
    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Key Stages of the RCM Process"
          description="We handle every step of the revenue cycle — so providers can focus on patients, not paperwork."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { step: "01", title: "Registration & Scheduling", desc: "Patient demographic and insurance data is collected, and insurance eligibility is verified upfront." },
            { step: "02", title: "Charge Capture & Coding", desc: "Services are documented, coded using ICD-10/CPT, and converted into accurate billing claims." },
            { step: "03", title: "Claims Submission", desc: "Clean claims are submitted promptly to insurance payers for timely reimbursement." },
            { step: "04", title: "Remittance Processing", desc: "Payments are received, posted, and claims are reconciled against expected reimbursements." },
            { step: "05", title: "Denial Management", desc: "Denied or rejected claims are reviewed, corrected, and resubmitted to recover revenue." },
            { step: "06", title: "Patient Collections", desc: "Outstanding patient balances for services not covered by insurance are collected efficiently." },
          ].map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-display font-bold text-accent/40">{stage.step}</span>
                <h4 className="font-display font-semibold text-foreground text-sm leading-tight">{stage.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Activity size={32} className="text-accent" />
          </div>
          <div>
            <p className="font-display text-lg font-bold text-foreground mb-1">
              11% of medical claims are denied industry-wide.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our RCM specialists combine domain expertise with AI-driven analytics to improve coding accuracy, reduce denials, and accelerate collections — keeping your revenue cycle healthy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Medical Services"
          title="Additional Healthcare Solutions"
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
