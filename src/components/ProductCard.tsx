import { LucideIcon, IndianRupee } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  image: string;
  priceRange: string;
}

const ProductCard = ({ icon: Icon, title, description, items, image, priceRange }: ProductCardProps) => {
  return (
    <div className="group rounded-2xl bg-card border border-border shadow-card card-hover overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-card">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Price Range Badge */}
        <div className="flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground w-fit">
          <IndianRupee className="h-3.5 w-3.5" />
          <span className="text-sm font-semibold">{priceRange}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
