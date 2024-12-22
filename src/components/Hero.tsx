import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 opacity-95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Meet David, Your AI DeFi Staking Assistant
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Maximize your crypto yields with intelligent staking strategies powered by advanced AI. David helps you navigate the DeFi landscape with confidence.
          </p>
          <Button size="lg" className="animate-fade-in hover:scale-105 transition-transform">
            Start Staking <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;