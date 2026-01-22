import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Wrench, Droplets, Square, Bath, Zap, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const productCategories = [
  { icon: Wrench, title: "Hardware Items", items: ["Locks", "Hinges", "Tools"] },
  { icon: Droplets, title: "Plumber Material", items: ["Pipes", "Fittings", "Tank"] },
  { icon: Square, title: "Tiles", items: ["Floor Tiles", "Wall Tiles", "Mosaic"] },
];

const services = [
  { icon: Droplets, title: "Plumber", type: "Hourly/Daily" },
  { icon: Zap, title: "Electrician", type: "Hourly/Daily" },
  { icon: Users, title: "Mason / Mistri", type: "Daily" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Products Preview */}
      <section className="section-padding surface-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Humari <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality construction materials at reasonable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border shadow-card card-hover text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <category.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Skilled <span className="text-primary">Workers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trained aur experienced workers for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border shadow-card card-hover text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-accent-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {service.type}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
