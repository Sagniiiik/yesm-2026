"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    { 
      name: "Kautilya", 
      category: "Flagship", 
      prize: "₹10,000", 
      description: "The ultimate flagship event testing economic acumen, strategic thinking, and corporate intuition.",
      rules: "Teams of 2-3 members. Preliminary quiz round followed by a case presentation.",
      time: "Day 2 - 05:00 PM",
      venue: "Main Auditorium"
    },
    { 
      name: "Colloquium", 
      category: "Paper Presentation", 
      prize: "₹5,000", 
      description: "Present your research papers on contemporary global economic challenges.",
      rules: "Max 2 members per team. 8 minutes for presentation followed by 2 minutes of Q&A.",
      time: "Day 1 - 11:00 AM",
      venue: "Room 302"
    },
    { 
      name: "Ecogency", 
      category: "Debate", 
      prize: "₹7,500", 
      description: "Oxford-style debate tackling high-stakes public policy and economic trade-offs.",
      rules: "Individual participation. Cross-questioning rounds included.",
      time: "Day 2 - 10:00 AM",
      venue: "Seminar Hall"
    },
    { 
      name: "Pa-Writo", 
      category: "Essay Writing", 
      prize: "₹3,000", 
      description: "Put pen to paper and articulate sharp arguments on modern economic trends.",
      rules: "On-the-spot topic disclosure. Word limit: 1000 words.",
      time: "Day 1 - 02:00 PM",
      venue: "Library Hall"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 p-6">
      <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Major Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={() => setSelectedEvent(event)}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-white transition-colors cursor-pointer flex flex-col justify-between"
          >
            <div>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{event.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{event.name}</h3>
            </div>
            <div className="text-green-400 font-bold mt-4">Prize Pool: {event.prize}</div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-lg w-full p-8 relative">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
            
            <span className="text-sm text-green-400 font-semibold uppercase tracking-wider">{selectedEvent.category}</span>
            <h3 className="text-3xl font-extrabold mt-1 mb-4">{selectedEvent.name}</h3>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{selectedEvent.description}</p>
            
            <div className="bg-black border border-gray-800 rounded-xl p-4 mb-6 flex flex-col gap-2 text-sm">
              <div><strong className="text-gray-400">Rules:</strong> {selectedEvent.rules}</div>
              <div><strong className="text-gray-400">Time:</strong> {selectedEvent.time}</div>
              <div><strong className="text-gray-400">Venue:</strong> {selectedEvent.venue}</div>
              <div><strong className="text-gray-400">Prize Pool:</strong> <span className="text-green-400 font-bold">{selectedEvent.prize}</span></div>
            </div>

            <button 
              onClick={() => setSelectedEvent(null)}
              className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}