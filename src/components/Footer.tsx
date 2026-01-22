import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="full" size="md" showLink={true} />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Complete solution for building your home. Quality construction materials and trusted skilled workers – everything at one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>Hardware Items</li>
              <li>Plumber Material</li>
              <li>Tiles</li>
              <li>Sanitary Items</li>
              <li>Electrical Items</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Gorakhpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@materialadda.com</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Material Adda. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Made with ❤️ in Gorakhpur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
