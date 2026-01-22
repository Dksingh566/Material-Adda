import { LucideIcon, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  availability: string;
  hourlyRate?: string;
  dailyRate?: string;
}

const ServiceCard = ({ icon: Icon, title, description, availability, hourlyRate, dailyRate }: ServiceCardProps) => {
  return (
    <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card card-hover text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      {/* Pricing */}
      <div className="flex justify-center gap-3 mb-4">
        {hourlyRate && (
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary">
            <IndianRupee className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">{hourlyRate}</span>
            <span className="text-xs text-muted-foreground">/hr</span>
          </div>
        )}
        {dailyRate && (
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent/20 text-accent-foreground">
            <IndianRupee className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">{dailyRate}</span>
            <span className="text-xs text-muted-foreground">/day</span>
          </div>
        )}
      </div>
      
      <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
        {availability}
      </span>
      <Button className="w-full mt-2" variant="outline">
        Book Now
      </Button>
    </div>
  );
};

export default ServiceCard;
