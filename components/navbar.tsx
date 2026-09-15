"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F8F5F2] border-b border-[#E5DFD3] py-4 px-6 md:px-12 font-sans relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-2xl font-extrabold text-[#732021] tracking-tight">
          YESM 2026
        </Link>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-[#4A4545] items-center">
          <Link href="/" className="hover:text-[#732021] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#732021] transition-colors">About</Link>
          <Link href="/events" className="hover:text-[#732021] transition-colors">Events</Link>
          <Link 
            href="/register" 
            className="bg-[#732021] text-white text-sm font-bold py-2.5 px-6 rounded-md hover:bg-[#8A292A] transition-colors shadow-sm"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-[#732021] focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F5F2] border-b border-[#E5DFD3] flex flex-col items-center py-4 shadow-lg animate-in slide-in-from-top-2">
          <Link 
            href="/" 
            className="w-full text-center py-3 text-[#4A4545] font-semibold hover:text-[#732021] hover:bg-[#F2E8CF] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="w-full text-center py-3 text-[#4A4545] font-semibold hover:text-[#732021] hover:bg-[#F2E8CF] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/events" 
            className="w-full text-center py-3 text-[#4A4545] font-semibold hover:text-[#732021] hover:bg-[#F2E8CF] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            href="/register" 
            className="w-11/12 mt-4 bg-[#732021] text-white text-center text-sm font-bold py-3 rounded-md hover:bg-[#8A292A] transition-colors shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      )}
    </nav>
  );
}