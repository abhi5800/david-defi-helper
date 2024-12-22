const stats = [
  { value: "$100K+", label: "Total Value Locked" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "Active Users" },
  { value: "15%", label: "Average APY" }
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;