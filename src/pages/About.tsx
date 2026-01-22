import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, CheckCircle, Users, Award } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "Only genuine branded products and verified skilled workers.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Customer satisfaction is our top priority.",
  },
  {
    icon: Heart,
    title: "Trust & Reliability",
    description: "Honest pricing and reliable service commitment.",
  },
  {
    icon: Award,
    title: "Local Expertise",
    description: "We understand the construction needs of Gorakhpur and nearby areas.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Learn about Material Adda's story and our vision.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Complete <span className="text-primary">Solution</span> for Building Your Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Material Adda is a trusted local platform that connects construction materials and skilled manpower at one place. We provide quality products and reliable services to customers in Gorakhpur and nearby areas, helping them realize their dreams of building a home.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing quality materials and reliable services at the right price. We want every customer to have easy access to the best products and trusted workers.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-accent/10 border border-accent/30">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Gorakhpur's No. 1 construction material and service platform. A place where every customer looking to build their home can fulfill all their needs.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Our <span className="text-primary">Values</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-card">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl surface-warm">
              {[
                { number: "1000+", label: "Happy Customers" },
                { number: "50+", label: "Skilled Workers" },
                { number: "500+", label: "Products Available" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
