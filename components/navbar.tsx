import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 border-b border-gray-800">
      <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-gray-300 transition-colors">
        YESM
      </Link>
      
      <div className="flex gap-6 text-sm font-medium text-gray-300">
        <Link href="/#events" className="hover:text-white transition-colors">Events</Link>
        <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
        <Link href="/team" className="hover:text-white transition-colors">Team</Link>
      </div>
      
      <Link 
        href="/register" 
        className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
      >
        Register
      </Link>
    </nav>
  );
}