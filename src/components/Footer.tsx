import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">FarmLink</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70">
              Connecting local farmers directly with buyers. Fresh produce, fair prices, stronger communities.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/70">
              <Link to="/marketplace" className="hover:text-primary-foreground transition-colors">Marketplace</Link>
              <Link to="/farmers" className="hover:text-primary-foreground transition-colors">Our Farmers</Link>
              <Link to="/dashboard" className="hover:text-primary-foreground transition-colors">Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-lg font-semibold">Support</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Seller Guide</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@farmlink.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +233 20 123 4567</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Accra, Ghana</div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center font-body text-sm text-primary-foreground/50">
          © 2026 FarmLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
