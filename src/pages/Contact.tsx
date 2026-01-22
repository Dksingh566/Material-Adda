import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Gorakhpur, Uttar Pradesh", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@materialadda.com", "support@materialadda.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Have a question? Contact us – we're ready to help you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input placeholder="Enter your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="What is this about?" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Write your message here..." 
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether it's an inquiry about products, service booking, or any question – feel free to reach out. We'll respond as quickly as possible!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <MessageCircle className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Message Us on WhatsApp</h4>
                    <p className="text-sm text-muted-foreground mb-2">Use WhatsApp for quick response!</p>
                    <Button variant="outline" size="sm" className="font-medium">
                      +91 XXXXX XXXXX
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="h-64 md:h-96 rounded-2xl bg-muted flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Map integration coming soon!
              </p>
              <p className="text-sm text-muted-foreground">
                Gorakhpur, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
