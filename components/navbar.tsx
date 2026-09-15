import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F8F5F2] border-b border-[#E5DFD3] py-4 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-2xl font-extrabold text-[#732021] tracking-tight">
          YESM 2026
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-[#4A4545]">
          <Link href="/" className="hover:text-[#732021] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#732021] transition-colors">About</Link>
          <Link href="/events" className="hover:text-[#732021] transition-colors">Events</Link>
        </div>
        
        {/* Call to Action Button */}
        <Link 
          href="/register" 
          className="bg-[#732021] text-white text-sm font-bold py-2.5 px-6 rounded-md hover:bg-[#8A292A] transition-colors shadow-sm"
        >
          Register Now
        </Link>
        
      </div>
    </nav>
  );
}