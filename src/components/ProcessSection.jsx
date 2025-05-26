import { Search, Code, TestTube, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your business requirements, analyze your current infrastructure, and identify opportunities for optimization and growth.",
    phase: "01"
  },
  {
    icon: Code,
    title: "Design & Development",
    description: "Our expert team crafts scalable architectures and writes clean, maintainable code using the latest technologies and best practices.",
    phase: "02"
  },
  {
    icon: TestTube,
    title: "Testing & Security",
    description: "Rigorous testing protocols and comprehensive security audits ensure your solution is bulletproof before deployment.",
    phase: "03"
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "Seamless deployment with zero downtime and ongoing support to ensure your solution continues to perform at its peak.",
    phase: "04"
  }
];

const ProcessSection = () => {
  return (
    <section 
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(140, 69, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140, 69, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Purple glow - bottom right */}
      <div className="absolute w-[400px] h-[400px] bg-[#8C45FF] rounded-full blur-[200px] bottom-[50px] right-[50px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-28">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Our <span className="text-purple-400">Development Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we follow a proven methodology that ensures 
            quality, security, and scalability at every step of your project journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (except for last item) */}
              {index < processSteps.length - 1 && (
                <div 
                  className="absolute left-6 top-20 w-[2px] h-24 bg-gradient-to-b from-purple-500/50 to-purple-500/20"
                />
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Phase Number and Icon */}
                <div className="flex items-center gap-6">
                  {/* Phase Number */}
                  <div className="text-6xl font-bold text-purple-500/30 min-w-[100px]">
                    {step.phase}
                  </div>

                  {/* Icon Container */}
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-purple-500/50"
                    style={{
                      background: "linear-gradient(135deg, rgba(140, 69, 255, 0.2), rgba(179, 114, 207, 0.2))"
                    }}
                  >
                    <step.icon className="text-purple-400" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="hidden md:block w-32 h-32 relative">
                  <div 
                    className="w-full h-full rounded-2xl border border-gray-800"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(140, 69, 255, 0.1), 
                        rgba(13, 13, 13, 0.8)
                      )`
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center">
                        <step.icon className="text-purple-400" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;