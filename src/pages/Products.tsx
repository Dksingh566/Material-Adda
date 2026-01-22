import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { Wrench, Droplets, Square, Bath, Zap, Package } from "lucide-react";

// Import product images
import hardwareImg from "@/assets/hardware-items.jpg";
import plumberImg from "@/assets/plumber-material.jpg";
import tilesImg from "@/assets/tiles.jpg";
import sanitaryImg from "@/assets/sanitary-items.jpg";
import electricalImg from "@/assets/electrical-items.jpg";
import otherImg from "@/assets/other-materials.jpg";

const products = [
  {
    icon: Wrench,
    title: "Hardware Items",
    description: "High quality hardware for construction and renovation",
    items: ["Door Locks & Handles", "Hinges & Fasteners", "Hand Tools", "Power Tools", "Nails & Screws", "Safety Equipment"],
    image: hardwareImg,
    priceRange: "50 - 5,000",
  },
  {
    icon: Droplets,
    title: "Plumber Material",
    description: "Complete plumbing solutions for your home",
    items: ["PVC Pipes", "CPVC Pipes", "Pipe Fittings", "Water Tanks", "Valves & Taps", "Drainage Items"],
    image: plumberImg,
    priceRange: "20 - 8,000",
  },
  {
    icon: Square,
    title: "Tiles",
    description: "Beautiful floor and wall tiles for every room",
    items: ["Ceramic Floor Tiles", "Vitrified Tiles", "Wall Tiles", "Bathroom Tiles", "Kitchen Tiles", "Mosaic Designs"],
    image: tilesImg,
    priceRange: "25 - 150/sq.ft",
  },
  {
    icon: Bath,
    title: "Sanitary Items",
    description: "Premium sanitary ware for modern bathrooms",
    items: ["Commode / WC", "Wash Basin", "Shower Set", "Bathroom Faucets", "Bathtub", "Accessories"],
    image: sanitaryImg,
    priceRange: "500 - 25,000",
  },
  {
    icon: Zap,
    title: "Electrical Items",
    description: "Safe and reliable electrical products",
    items: ["Wires & Cables", "Switches & Sockets", "MCB & Distribution Box", "Ceiling Fans", "LED Lights", "Modular Fittings"],
    image: electricalImg,
    priceRange: "30 - 3,000",
  },
  {
    icon: Package,
    title: "Other Materials",
    description: "Additional construction essentials",
    items: ["Cement", "Sand & Gravel", "Bricks", "Paint & Primer", "Adhesives", "Waterproofing"],
    image: otherImg,
    priceRange: "100 - 500/bag",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Genuine quality construction materials at reasonable prices with easy home delivery.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-accent/10 border border-accent/30 text-center">
            <p className="text-lg font-medium text-foreground">
              🛒 <span className="text-primary">Genuine quality</span>, reasonable prices, and <span className="text-primary">easy home delivery</span>.
            </p>
            <p className="text-muted-foreground mt-2">
              All products are available in Gorakhpur and nearby areas.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Products;
