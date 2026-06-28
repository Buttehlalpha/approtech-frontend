import FarmerCard from "@/components/FarmerCard";
import { farmers } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const Farmers = () => {
  const [search, setSearch] = useState("");
  const filtered = farmers.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Our Farmers</h1>
          <p className="mt-2 font-body text-primary-foreground/80">Meet the people growing your food</p>
          <div className="relative mt-6 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search farmers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-primary-foreground/95 border-0"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((farmer) => (
            <FarmerCard key={farmer.id} farmer={farmer} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-20 text-center font-display text-xl text-muted-foreground">No farmers found</p>
        )}
      </div>
    </div>
  );
};

export default Farmers;