import { Milestone } from "lucide-react";

const roadmapItems = [
  {
    title: "Staking into LST/LRT",
    description: "Enable direct staking into Liquid Staking Tokens and Liquid Restaking Tokens"
  },
  {
    title: "Portfolio Rebalancing",
    description: "Smart rebalancing strategies to maintain optimal asset allocation"
  },
  {
    title: "Advanced DeFi Strategies",
    description: "Implement sophisticated strategies like Looping for enhanced yields"
  },
  {
    title: "LP Pool Staking",
    description: "Stake into Liquidity Provider pools across multiple protocols"
  },
  {
    title: "Cross Chain Bridging",
    description: "Seamlessly bridge assets across different blockchain networks"
  },
  {
    title: "LRT/LST ETF Creation",
    description: "Create diversified ETF-like portfolios of liquid staking tokens"
  }
];

const Roadmap = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-3 -left-3 bg-blue-600 rounded-full p-2">
                <Milestone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;