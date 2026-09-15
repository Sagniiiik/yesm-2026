"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

function EventCard({ event }: { event: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      // Removed h-full so the card only grows as much as its own content
      className={`bg-[#F8F5F2] border ${isOpen ? 'border-[#732021] shadow-md' : 'border-[#D9D2C5]'} rounded-md p-6 hover:border-[#732021] transition-all duration-300 cursor-pointer flex flex-col`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <h3 className="text-xl font-bold text-[#732021] mb-2">{event.name}</h3>
        <p className="text-sm text-[#5C5757] mb-4">
          {event.short}
        </p>
      </div>
      
      {isOpen ? (
        <div className="pt-4 border-t border-[#D9D2C5] mt-auto">
          <p className="text-sm text-[#4A4545] mb-5 leading-relaxed">
            {event.details}
          </p>
          <div className="flex gap-3">
            <Link 
              href="/register"
              onClick={(e) => e.stopPropagation()} 
              className="flex-1 bg-[#732021] text-white text-center text-sm font-bold py-2.5 rounded-md hover:bg-[#8A292A] transition-colors"
            >
              Register Now
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="px-4 bg-transparent border border-[#732021] text-[#732021] font-bold rounded-md hover:bg-[#F2E8CF] transition-colors"
            >
              Less
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-auto text-[#732021] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
          Click for details <span className="text-lg leading-none">+</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const eventsList = [
    {
      name: "Kautilya",
      short: "Showcase your strategic expertise and problem-solving skills.",
      details: "Kautilya is our flagship strategy competition. Test your analytical acumen, present innovative solutions, and outsmart the competition to claim the top prize."
    },
    {
      name: "Colloquium",
      short: "Engage in high-level technical discourse and debate.",
      details: "A premier platform for brilliant minds to present papers, debate cutting-edge technological advancements, and network with industry professionals."
    },
    {
      name: "Ecogency",
      short: "Tackle real-world environmental and sustainability problems.",
      details: "Develop innovative, sustainable solutions to pressing ecological challenges. Pitch your green tech ideas to a panel of expert judges."
    },
    {
      name: "Pa-Writo",
      short: "Unleash your creativity in our premier expression event.",
      details: "From creative writing to precise reporting, Pa-Writo challenges your ability to articulate complex thoughts and captivate a critical audience."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
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

        <section id="events" className="bg-white border-y border-[#E5DFD3] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1818] mb-12 text-center">Featured Competitions</h2>
            
            {/* Added items-start here to prevent grid cards from stretching to match the tallest one */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              
              {eventsList.map((event) => (
                <EventCard key={event.name} event={event} />
              ))}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}