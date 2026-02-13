import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-accent-foreground text-lg">
              S
            </div>
            <span className="font-display font-semibold text-lg">Sahasra Technologies</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Reliable back-office solutions helping businesses streamline operations with accuracy and security.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services/data" className="hover:text-accent transition-colors">Data Entry & Annotation</Link></li>
            <li><Link to="/services/medical" className="hover:text-accent transition-colors">Medical Transcription & Billing</Link></li>
            <li><Link to="/services/specialized" className="hover:text-accent transition-colors">Data Labelling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" />KLR Buildings, IIIrd Floor, B-Block, Gayatri Estates, Kurnool, Andhra Pradesh, India</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-accent shrink-0" /> +91-97014-76968</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-accent shrink-0" /> contact@sahasratechnos.net</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Sahasra Technologies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
