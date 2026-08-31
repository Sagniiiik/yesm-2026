import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Schedule() {
  const scheduleData = [
    {
      day: "Day 1 - March 15",
      events: [
        { time: "09:00 AM", name: "Inauguration Ceremony", location: "Main Auditorium" },
        { time: "11:00 AM", name: "Colloquium (Round 1)", location: "Room 302" },
        { time: "02:00 PM", name: "Pa-Writo (Essay Writing)", location: "Library Hall" },
      ]
    },
    {
      day: "Day 2 - March 16",
      events: [
        { time: "10:00 AM", name: "Ecogency (Debate)", location: "Seminar Hall" },
        { time: "01:30 PM", name: "Proffing It", location: "Room 105" },
        { time: "05:00 PM", name: "Kautilya (Finals)", location: "Main Auditorium" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-4xl mx-auto p-6 mt-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Event Schedule</h1>
          <p className="text-gray-400 text-lg">Plan your fest experience.</p>
        </div>

        <div className="flex flex-col gap-12">
          {scheduleData.map((dayPlan, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-400 border-b border-gray-800 pb-4">
                {dayPlan.day}
              </h2>
              
              <div className="flex flex-col gap-6">
                {dayPlan.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="flex flex-col sm:flex-row sm:items-center justify-between group cursor-default">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold group-hover:text-white text-gray-200 transition-colors">
                        {event.name}
                      </span>
                      <span className="text-sm text-gray-500 mt-1">
                        {event.location}
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-0 px-4 py-2 bg-black border border-gray-700 rounded-lg text-sm font-medium text-gray-300 w-fit">
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}