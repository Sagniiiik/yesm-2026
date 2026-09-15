import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1818] text-[#D9D2C5] py-12 px-6 border-t border-[#3A3535] font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div>
          <h2 className="text-xl font-bold text-[#F8F5F2] mb-4 tracking-tight">YESM 2026</h2>
          <p className="text-sm leading-relaxed text-[#A39C9C]">
            The premier collegiate event of the year. Join us for a weekend of innovation, competition, and excellence.
          </p>
        </div>
        
        {/* Navigation Column */}
        <div>
          <h3 className="text-sm font-bold text-[#F8F5F2] mb-4 uppercase tracking-wider">Navigation</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About the Fest</Link></li>
            <li><Link href="/register" className="hover:text-white transition-colors">Registration</Link></li>
          </ul>
        </div>
        
        {/* Contact Column */}
        <div>
          <h3 className="text-sm font-bold text-[#F8F5F2] mb-4 uppercase tracking-wider">Contact</h3>
          <p className="text-sm mb-2 text-[#A39C9C]">Email: contact@yesm.in</p>
          <p className="text-sm text-[#A39C9C]">Location: Main Campus</p>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#3A3535] text-xs text-center text-[#7A7575]">
        &copy; 2026 YESM. All rights reserved.
      </div>
    </footer>
  );
}