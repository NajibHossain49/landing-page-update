import { Users, Globe, Shield, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Projects Delivered",
    description: "Successfully completed enterprise solutions"
  },
  {
    icon: Globe,
    number: "15+",
    label: "Countries Served",
    description: "Global reach with local expertise"
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Uptime Guaranteed",
    description: "Rock-solid reliability and performance"
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical assistance"
  }
];

const AboutSection = () => {
  return (
    <section 
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(
            ellipse farthest-side at center top,
            rgba(140, 69, 255, 0.3) 0%,
            rgba(140, 69, 255, 0.1) 50%,
            rgba(140, 69, 255, 0) 100%
          )`,
        }}
      />

      {/* Purple glow - top left */}
      <div className="absolute w-[300px] h-[300px] bg-[#8C45FF] rounded-full blur-[150px] top-[10px] left-[10px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-28">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Why Choose <span className="text-purple-400">Hexbyte</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver 
            scalable solutions that drive your business forward. Our team of experts 
            brings years of experience in building robust, secure, and intelligent systems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(13, 13, 13, 0.8), rgba(26, 26, 26, 0.8))"
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-purple-400" size={24} />
              </div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {stat.number}
              </h3>

              {/* Label */}
              <h4 className="text-lg font-medium text-gray-300 mb-2">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-3 rounded-full text-white font-medium border border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(45deg, rgba(140, 69, 255, 0.2), rgba(179, 114, 207, 0.2))"
            }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;