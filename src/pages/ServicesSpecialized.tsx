import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Tags, Image, Type, BarChart3, ArrowRight } from "lucide-react";

const ServicesSpecialized = () => (
  <Layout>
    <section className="py-20 bg-surface-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Specialized Services"
          title="Advanced & Specialized Solutions"
          description="Cutting-edge data labelling and backend support services that power AI/ML workflows and advanced analytics."
        />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl p-8 border border-border mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
              <Tags size={28} className="text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Data Labelling</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            High-quality data labelling services for image recognition, NLP, autonomous systems, and more. Our trained annotators ensure consistent, accurate labels that improve model performance and reduce training time.
          </p>
        </motion.div>

        <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Labelling Capabilities</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <ServiceCard icon={Image} title="Image Labelling" description="Bounding boxes, segmentation, keypoints, and classification for computer vision models." index={0} />
          <ServiceCard icon={Type} title="Text Labelling" description="Named entity recognition, sentiment analysis, intent classification for NLP models." index={1} />
          <ServiceCard icon={BarChart3} title="Dataset Labelling" description="Structured labelling of large datasets for analytics, reporting, and ML pipelines." index={2} />
        </div>
      </div>
    </section>

    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold mb-4 text-foreground">Need Specialized Services?</h2>
        <p className="text-muted-foreground mb-8">Let's discuss your project requirements.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ServicesSpecialized;
