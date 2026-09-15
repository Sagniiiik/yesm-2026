import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1818] mb-6 tracking-tight">
            YESM 2026
          </h1>
          <p className="text-lg md:text-xl text-[#4A4545] max-w-2xl mb-10 leading-relaxed">
            The annual collegiate summit bringing together top minds for a weekend of competitive events, technical challenges, and networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/register" 
              className="bg-[#732021] text-white font-bold py-3 px-8 rounded-md hover:bg-[#8A292A] transition-colors shadow-sm text-center"
            >
              Register Now
            </Link>
            <Link 
              href="#events" 
              className="bg-transparent border border-[#732021] text-[#732021] font-bold py-3 px-8 rounded-md hover:bg-[#F2E8CF] transition-colors text-center"
            >
              View Events
            </Link>
          </div>
        </section>

        {/* Events Preview Section */}
        <section id="events" className="bg-white border-y border-[#E5DFD3] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1818] mb-12 text-center">Featured Competitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Event Cards */}
              {['Kautilya', 'Colloquium', 'Ecogency', 'Pa-Writo'].map((event) => (
                <div key={event} className="bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-6 hover:border-[#732021] transition-colors">
                  <h3 className="text-xl font-bold text-[#732021] mb-2">{event}</h3>
                  <p className="text-sm text-[#5C5757]">
                    Secure your spot and showcase your expertise in the {event} challenge.
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}