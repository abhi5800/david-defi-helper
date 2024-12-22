import { Shield, Zap, TrendingUp, Brain } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze market conditions to find the best staking opportunities."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Portfolio Rebalancing",
    description: "Smart rebalancing strategies to maintain optimal asset allocation and maximize returns."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Yield Optimization",
    description: "Automatically identifies and suggests the highest yielding staking options."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-time Updates",
    description: "Instant notifications about market changes and new opportunities."
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose David?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;