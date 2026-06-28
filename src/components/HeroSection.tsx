import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";

import hero1 from "../assets/hero1.jpg"; // individual farmer
import hero2 from "../assets/hero2.png"; // man smiling at phone
import hero3 from "../assets/hero3.png"; // family picture
import hero4 from "../assets/hero4.png"; // another farmer

const images = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Farmers using AgriLink Aboki app"
            className={`absolute top-0 left-0 h-full w-full object-cover object-[center_top] transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Centered Content */}
      <div className="relative container mx-auto flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-2xl animate-fade-in mx-auto">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <Sprout className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-white">
              Farm-to-Table Marketplace
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Fresh From the Farm,{" "}
            <span className="text-green-400">Straight to You</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Connect directly with local farmers. Get the freshest produce at fair
            prices while supporting sustainable agriculture in your community.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/marketplace">
              <Button size="xl" className="gap-2 bg-green-800 hover:bg-green-700">
                Browse Marketplace
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/register">
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white bg-yellow-600 hover:text-black"
              >
                Signup  with us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-center gap-8 text-white/80">
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Local Farmers</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm">Happy Buyers</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">Regions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;