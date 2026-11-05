import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F8F5F2] border-b border-[#E5DFD3] py-2 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Aggressively scaled up to defeat the empty whitespace in the image */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="YESM 2027 Logo" 
            className="h-20 md:h-28 w-auto object-contain mix-blend-multiply scale-[1.7] md:scale-[2] transform origin-left" 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-[#4A4545] relative z-10">
          <Link href="/" className="hover:text-[#5B2366] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#5B2366] transition-colors">About</Link>
          <Link href="/events" className="hover:text-[#5B2366] transition-colors">Events</Link>
        </div>
        
        {/* Call to Action Button */}
        <Link 
          href="/register" 
          className="bg-[#5B2366] text-white text-sm font-bold py-2.5 px-6 rounded-md hover:bg-[#43194B] transition-colors shadow-sm relative z-10"
        >
          Register Now
        </Link>
        
      </div>
    </nav>
  );
}