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
        <div className="relative max-w-4xl mx-auto">
          {/* Progressive line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'ml-0' : 'ml-8 md:ml-16'
                }`}
              >
                {/* Milestone dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <Milestone className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-full h-1 w-8 bg-blue-200 -translate-y-1/2" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;