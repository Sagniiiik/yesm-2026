import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E5DFD3] py-12 px-6 md:px-12 font-sans border-t border-[#333]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* Branding */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">YESM 2027</h3>
          <p className="text-sm text-[#A39D93] leading-relaxed pr-4">
            The premier collegiate event of the year. Join us for a weekend of innovation, competition, and excellence.
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Navigation</h3>
          <div className="flex flex-col gap-3 text-sm text-[#A39D93]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About the Fest</Link>
            <Link href="/register" className="hover:text-white transition-colors">Registration</Link>
          </div>
        </div>
        
        {/* Contact with active mailto link */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Contact</h3>
          <div className="flex flex-col gap-3 text-sm text-[#A39D93]">
            {/* This href="mailto:..." makes the email clickable! */}
            <a href="mailto:contact@yesm.in" className="hover:text-white transition-colors">
              Email: contact@yesm.in
            </a>
            <p>Location: Main Campus</p>
          </div>
        </div>
        
      </div>
      
      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#333] text-center text-xs text-[#7A7575]">
        © 2027 YESM. All rights reserved.
      </div>
    </footer>
  );
}