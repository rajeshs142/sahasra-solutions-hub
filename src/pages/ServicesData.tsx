import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Database, Tags, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";

const ServicesData = () => (
  <Layout>
    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Data Services"
          title="Accurate & Scalable Data Solutions"
          description="Our data services help organizations manage, process, and enrich their data with precision and speed."
        />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {[
          {
            icon: Database,
            title: "Data Entry",
            description:
              "We provide high-volume, accurate data entry services covering both structured and unstructured data. Our team ensures error-free input across spreadsheets, databases, CRM systems, and custom platforms. With multi-tier quality checks, we deliver consistent results at scale.",
          },
          {
            icon: Tags,
            title: "Data Annotation",
            description:
              "Our data annotation services support AI and machine learning initiatives with high-quality structured labelling. From image classification and NER to sentiment tagging, our trained annotators deliver reliable training data that powers smarter models.",
          },
          {
            icon: ClipboardList,
            title: "Form Processing",
            description:
              "We handle both digital and physical forms — scanning, data extraction, validation, and structured storage. Whether it's insurance claims, surveys, or registration forms, we digitize and process them efficiently with full compliance.",
          },
        ].map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <service.icon size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Quality Assurance */}
    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Quality Assurance"
          title="Rigorous Validation at Every Step"
          description="Every record passes through automated checks and manual review to ensure accuracy and compliance."
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {["Automated Error Detection", "Manual Quality Review", "Compliance Audits"].map((item, i) => (
            <ServiceCard
              key={item}
              icon={CheckCircle}
              title={item}
              description="Our multi-layer validation ensures your data meets the highest standards before delivery."
              index={i}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold mb-4 text-foreground">Need Data Services?</h2>
        <p className="text-muted-foreground mb-8">Get in touch to discuss your requirements.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Enquire Now <ArrowRight size={18} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ServicesData;
