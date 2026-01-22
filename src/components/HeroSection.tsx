import { Link } from "react-router-dom";
import { MapPin, ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: ShieldCheck, text: "Quality Guaranteed" },
  { icon: Truck, text: "Home Delivery" },
  { icon: Clock, text: "Fast Service" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M54.627%200l.83.828-1.415%201.415L51.8%200h2.827zM5.373%200l-.83.828L5.96%202.243%208.2%200H5.374zM48.97%200l3.657%203.657-1.414%201.414L46.143%200h2.828zM11.03%200L7.372%203.657%208.787%205.07%2013.857%200H11.03zm32.284%200L49.8%206.485%2048.384%207.9l-7.9-7.9h2.83zM16.686%200L10.2%206.485%2011.616%207.9l7.9-7.9h-2.83zm20.97%200l9.315%209.314-1.414%201.414L34.828%200h2.83zM22.344%200L13.03%209.314l1.414%201.414L25.172%200h-2.83zM32%200l12.142%2012.142-1.414%201.414L30%200.828%2017.272%2013.556l-1.414-1.414L28%200h4zM.284%200l28%2028-1.414%201.414L0%202.544V0h.284zM0%205.373l25.456%2025.455-1.414%201.415L0%208.2V5.374zm0%205.656l22.627%2022.627-1.414%201.414L0%2013.86v-2.83zm0%205.656l19.8%2019.8-1.415%201.413L0%2019.514v-2.83zm0%205.657l16.97%2016.97-1.414%201.415L0%2025.172v-2.83zM0%2028l14.142%2014.142-1.414%201.414L0%2030.828V28z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="relative container-custom py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6 animate-fade-in">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Serving Gorakhpur & Nearby Areas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-up leading-tight">
            Material Adda – <br className="hidden md:block" />
            <span className="text-accent">Ghar Banane Ka Complete Solution</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Hardware, Tiles, Sanitary, Electrical Material aur Skilled Workers – <span className="font-semibold">Sab Kuch Ek Jagah!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 btn-shadow">
              <Link to="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8">
              <Link to="/services">
                Book Services
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90"
              >
                <feature.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
