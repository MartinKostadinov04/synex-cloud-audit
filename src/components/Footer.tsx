import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">S</span>
            </div>
            <span className="font-bold text-foreground">SynexCloud</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Simplifying EU Battery Regulation compliance for manufacturers and importers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/consulting" className="hover:text-foreground transition-colors">Consulting</Link></li>
            <li><Link to="/batteryreg" className="hover:text-foreground transition-colors">Battery Regulation</Link></li>
            <li><Link to="/platform" className="hover:text-foreground transition-colors">Platform</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link to="/imprint" className="hover:text-foreground transition-colors">Imprint</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SynexCloud. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
