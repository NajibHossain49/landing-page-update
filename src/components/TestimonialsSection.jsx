import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    content: "Hexbyte transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture and security is unmatched. The project was delivered on time and exceeded our expectations.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Engineering",
    company: "DataStream Corp",
    content: "The team's deep understanding of both frontend and backend technologies helped us build a robust application that handles millions of users seamlessly. Outstanding work!",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with Hexbyte was a game-changer. They not only delivered a high-quality solution but also provided valuable insights that improved our overall architecture.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "David Kim",
    role: "Founder & CEO",
    company: "StartupVenture",
    content: "From MVP to scale, Hexbyte has been our trusted partner. Their agile approach and technical excellence helped us secure Series A funding. Highly recommended!",
    rating: 5,
    avatar: "DK"
  }
];

const TestimonialsSection = () => {
  return (
    <section 
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(140, 69, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(179, 114, 207, 0.3) 0%, transparent 50%)
          `
        }}
      />

      {/* Floating Elements */}
      <div className="absolute w-[200px] h-[200px] bg-[#8C45FF] rounded-full blur-[120px] top-[100px] left-[100px] opacity-20 pointer-events-none" />
      <div className="absolute w-[150px] h-[150px] bg-[#B372CF] rounded-full blur-[100px] bottom-[150px] right-[150px] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-28">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            What Our <span className="text-purple-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and innovative 
            companies have to say about working with Hexbyte.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(13, 13, 13, 0.9), rgba(26, 26, 26, 0.9))"
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-30">
                <Quote className="text-purple-400" size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-yellow-400 fill-current" 
                    size={16} 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #8C45FF, #B372CF)"
                  }}
                >
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">5.0</h3>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">100%</h3>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">98%</h3>
            <p className="text-gray-400">Project Success Rate</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-3 rounded-full text-white font-medium border border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(45deg, rgba(140, 69, 255, 0.2), rgba(179, 114, 207, 0.2))"
            }}
          >
            Join Our Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;