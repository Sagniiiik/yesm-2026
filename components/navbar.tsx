"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F5F2] border-b border-[#E5DFD3] py-4 px-6 md:px-12 font-sans relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Added overflow-hidden container to slice off the extra white padding */}
        <Link href="/" className="flex items-center h-16 md:h-20 w-40 md:w-56 overflow-hidden relative">
          <img 
            src="/logo.png" 
            alt="YESM 2027 Logo" 
            className="w-full h-full object-contain mix-blend-multiply scale-[1.8] md:scale-[2.2] transform origin-left absolute top-1/2 left-0 -translate-y-1/2" 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm md:text-base font-extrabold uppercase tracking-widest text-[#4A4545]">
            <Link href="/" className="hover:text-[#5B2366] hover:scale-105 transition-all duration-200">Home</Link>
            <Link href="/about" className="hover:text-[#5B2366] hover:scale-105 transition-all duration-200">About</Link>
            <Link href="/events" className="hover:text-[#5B2366] hover:scale-105 transition-all duration-200">Events</Link>
          </div>
          
          {/* Call to Action Button */}
          <Link 
            href="/register" 
            className="bg-[#5B2366] text-white text-sm md:text-base font-bold py-3 px-8 rounded-full hover:bg-[#43194B] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-[#5B2366] hover:bg-[#E5DFD3] rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#F8F5F2] border-b border-[#E5DFD3] shadow-2xl flex flex-col py-8 px-8 gap-6 z-40 transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-extrabold uppercase tracking-widest text-[#4A4545] hover:text-[#5B2366]">Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-extrabold uppercase tracking-widest text-[#4A4545] hover:text-[#5B2366]">About</Link>
        <Link href="/events" onClick={() => setIsOpen(false)} className="text-xl font-extrabold uppercase tracking-widest text-[#4A4545] hover:text-[#5B2366]">Events</Link>
        
        <Link 
          href="/register" 
          onClick={() => setIsOpen(false)}
          className="bg-[#5B2366] text-white text-center text-lg font-bold py-4 px-6 rounded-full hover:bg-[#43194B] shadow-md mt-4 transition-colors"
        >
          Register Now
        </Link>
      </div>
    </nav>
  );
}