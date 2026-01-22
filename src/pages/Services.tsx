import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Droplets, Zap, Square, Hammer, Users, Clock } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Plumber",
    description: "Expert plumbing services for pipe fitting, repairs, tank installation, and bathroom work.",
    availability: "Hourly & Daily Available",
    hourlyRate: "150-250",
    dailyRate: "800-1,200",
  },
  {
    icon: Zap,
    title: "Electrician",
    description: "Professional electrical work including wiring, repairs, fan installation, and modular fitting.",
    availability: "Hourly & Daily Available",
    hourlyRate: "150-300",
    dailyRate: "900-1,500",
  },
  {
    icon: Square,
    title: "Tile Fitter",
    description: "Skilled tile fitting for floors, walls, bathroom, and kitchen – neat and perfect finish.",
    availability: "Daily Available",
    dailyRate: "700-1,000",
  },
  {
    icon: Hammer,
    title: "Mason / Mistri",
    description: "Experienced mason for construction, plastering, brick work, and renovation projects.",
    availability: "Daily Available",
    dailyRate: "800-1,200",
  },
  {
    icon: Users,
    title: "Labour / Helper",
    description: "Hardworking helpers for loading, unloading, cleaning, and general construction assistance.",
    availability: "Hourly & Daily Available",
    hourlyRate: "80-120",
    dailyRate: "400-600",
  },
  {
    icon: Clock,
    title: "Painter",
    description: "Professional painting services for interior, exterior, texture, and polish work.",
    availability: "Daily Available",
    dailyRate: "600-1,000",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Skilled Workers
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Trained and experienced workers for all your construction and home improvement needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-secondary/5 border border-secondary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  👷 Workers Available on Hourly & Daily Basis
                </h3>
                <p className="text-muted-foreground">
                  Trained workers who complete their work on time with quality. Background verified and experienced professionals.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Skilled Workers</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Jobs Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
