import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Ready to Start Your DeFi Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of investors who trust David to optimize their DeFi staking strategy.
        </p>
        <Button size="lg" className="hover:scale-105 transition-transform">
          Get Started Now
        </Button>
      </div>
    </div>
  );
};

export default CTA;