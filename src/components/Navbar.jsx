import HandDrowIcon from "../assets/icons/Hand-drawn pen scribble.png";

export default function HeroSection() {
  return (
    <div
      style={{
        background: "#000000",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-3.5 text-white border-b border-white/20 pl-32 pr-24">
        <div className="text-2xl font-bold">HexByte</div>
        <div className="flex items-center space-x-12 ml-auto relative">
          <div className="flex flex-col items-start relative">
            <a href="#" className="text-white">
              Startup program
            </a>
            <img
              src={HandDrowIcon}
              alt="scribble decoration"
              className="absolute top-full mt-1 left-2.5 w-24 pointer-events-none"
            />
          </div>
          <div className="pr-5">
            <button className="bg-[#632CA5] text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
