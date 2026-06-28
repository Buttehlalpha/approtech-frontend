import { Star, MapPin, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Farmer } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

interface FarmerCardProps {
  farmer: Farmer;
}

const FarmerCard = ({ farmer }: FarmerCardProps) => {
  return (
    <Link to={`/farmers/${farmer.id}`}>
      <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
        <div className="relative h-40 overflow-hidden">
          <img
            src={farmerPortrait}
            alt={farmer.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <h3 className="font-display text-lg font-bold text-primary-foreground">{farmer.name}</h3>
            {farmer.verified && (
              <CheckCircle className="h-5 w-5 text-harvest" />
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-body">{farmer.location}</span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-harvest text-harvest" />
            <span className="font-body text-sm font-medium">{farmer.rating}</span>
            <span className="font-body text-xs text-muted-foreground">• {farmer.totalSales} sales</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {farmer.specialties.map((s) => (
              <Badge key={s} variant="secondary" className="font-body text-xs bg-leaf-light text-primary">
                {s}
              </Badge>
            ))}
          </div>
          <p className="mt-3 font-body text-sm text-muted-foreground line-clamp-2">{farmer.bio}</p>
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
