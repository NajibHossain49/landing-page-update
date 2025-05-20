import { ShieldCheck, SquareCode } from "lucide-react";
import image from "../assets/icons/28769364_7456406.svg";

// Icon imports
import CloudflareIcon from "../assets/icons/2.png";
import DockerIcon from "../assets/icons/97_Docker_logo_logos-512.webp";
import githubIcon from "../assets/icons/github-mark-white.png";
import codeIcon from "../assets/icons/Screenshot.png";

// Define your feature list with corresponding icons
const features = [
  {
    title: "GitHub advanced security",
    description:
      "Vulnerability scanning, real-time CVE detection, and code dependency monitoring.",
    icon: githubIcon,
  },
  {
    title: "Cloudflare",
    description: "WAF, DDoS protection, and enhanced network security.",
    icon: CloudflareIcon,
  },
  {
    title: "GitGuardian/Gitleaks",
    description:
      "Real-time secret detection in the codebase to prevent accidental sensitive data leaks.",
    icon: codeIcon,
  },
  {
    title: "Static code analysis",
    description: "Continuous assessment of code quality.",
    icon: SquareCode,
  },
  {
    title: "Socket",
    description: "Protecting codes from malicious or vulnerable dependencies.",
    icon: ShieldCheck,
  },
  {
    title: "Docker image scanning",
    description: "Scanning for vulnerabilities in containerized environments.",
    icon: DockerIcon,
  },
];

const ServiceSection = () => {
  return (
    <section
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Elliptical vertical gradient BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          backgroundImage: `radial-gradient(
            ellipse farthest-side at center bottom,
            rgba(149, 65, 249, 0.5) 0%,
            rgba(149, 65, 249, 0.3) 45%,
            rgba(149, 65, 249, 0) 100%
          )`,
        }}
      ></div>

      <div className="relative z-10  mx-auto px-28 flex flex-col md:flex-row gap-12">
        {/* Left Part */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 pl-2 md:pl-6">
          <h4 className="text-2xl md:text-4xl font-medium text-white leading-snug -ml-2">
            Cutting-edge tools used at <br />
            Hexbyte, trusted by Fortune 500 <br />
            <span style={{ color: "#B372CF" }}>companies</span>
          </h4>

          <p className="text-gray-400 text-lg -ml-2">
            Most versatile and rigorous development process
          </p>

          <div className="w-full flex justify-start mt-6 ml-[-16px]">
            <img
              src={image}
              alt="Development process illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-1/2 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="w-full h-[1px] bg-gray-500" />

              <div className="flex items-center gap-3">
                <h3 className="text-gray-200 text-lg font-medium">
                  {feature.title}
                </h3>

                {typeof feature.icon === "string" ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <feature.icon className="text-white" size={22} />
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
