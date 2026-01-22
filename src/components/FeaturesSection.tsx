import { Package, Users, Shield, Clock, Truck, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Wide Range of Products",
    description: "Hardware, Plumber Material, Tiles, Sanitary, and Electrical items – everything is available.",
  },
  {
    icon: Users,
    title: "Skilled Workers",
    description: "Trained Plumber, Electrician, Mason, and Labour – reliable and experienced.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Only genuine branded products and verified workers.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "On-time delivery and workers who keep their commitments.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Convenient home delivery available in Gorakhpur and nearby areas.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Platform",
    description: "Local customers' trust – both in quality and service.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Material Adda?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We prioritize quality products, reliable services, and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
