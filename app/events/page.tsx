"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import { useState } from "react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Consolidated Event Data
  const offlineEvents = [
    { 
      type: 'OFFLINE', title: 'Chaturanga', stat: '2-3 members', deadline: 'Jan 31, 2027',
      desc: 'The Flagship Event. Untangle intricate logic-driven puzzles and activities in the ultimate showdown.', 
      rules: 'A logic-driven challenge where every decision counts. Usage of mobile phones is strictly prohibited. No prior preparation required.'
    },
    { 
      type: 'HYBRID', title: 'Colloquium', stat: 'Max 3 members', deadline: 'Dec 28, 2026',
      desc: 'Paper Presentation. Showcase original research, challenge conventional thinking, and spark debate.', 
      rules: '1000-word abstract for prelims. Final paper max 5000 words. Max 25 presentation slides. 10 mins to present + 2 min Q&A.',
      topics: ["Economic Nationalism", "India's AI Dilemma", "India's Passport to Gender Equality (Gig Economy)"]
    },
    { 
      type: 'OFFLINE', title: 'Pitching It', stat: 'Max 3 members', deadline: 'Jan 25, 2027',
      desc: 'Shark Tank simulation. Pitch your groundbreaking startup idea or product to a panel of investors.', 
      rules: 'Submit pitch deck (max 10 slides). Final offline pitch is 5+1 minutes followed by a 3 min Q&A. Exceeding time limits results in negative marking.'
    },
    { 
      type: 'OFFLINE', title: 'Bid-o-nomics: Trade City', stat: '₹200 / team', deadline: 'Jan 31, 2027',
      desc: 'Mock IPL Auction. Build your dream squad with an ₹80 crore purse. Brains, bids, and bold moves.', 
      rules: 'Written cricket quiz prelims. Auction purse of ₹80 crore. Squads must maintain minimums: 3 batsmen, 3 bowlers, 3 all-rounders, 1 wicketkeeper. Max 4 overseas players in Playing XI.'
    },
    { 
      type: 'OFFLINE', title: 'Conferencia', stat: 'Single/Double Del.', deadline: 'Jan 31, 2027',
      desc: 'Committee Simulation (WTO). Sharp research, persuasive diplomacy, and powerful speaking.', 
      rules: 'World Trade Organization committee simulation. English is the official language. Formal wear for Day 1, Ethnic wear for Day 2. Fees: ₹650 Single / ₹1200 Double.'
    },
    { 
      type: 'OFFLINE', title: 'Ecogency', stat: '₹150 / person', deadline: 'Jan 31, 2027',
      desc: 'Oxford Style Debate. Words are weapons and logic is your armor. No middle ground allowed.', 
      rules: 'Teams of 2 (one speaking for, one against). Individual registrants will be randomly paired. Language chosen (Bengali, Hindi, or English) cannot be changed mid-speech.'
    },
    { 
      type: 'OFFLINE', title: 'Equizilibrium', stat: '₹150 / team', deadline: 'Jan 31, 2027',
      desc: 'U-25 General Quiz. A delightful interplay of wisdom, trivia, and analytical thinking.', 
      rules: 'U-25 General Quiz. Max 3 members per team (Lone wolves permitted). Prelims will be a written test. Top 6 teams qualify for the final pounce-bounce format stage.'
    },
    { 
      type: 'OFFLINE', title: 'Resolving It', stat: '2-4 members', deadline: 'Jan 23, 2027',
      desc: 'Case Study Analysis. Identify underlying challenges and develop structured, effective solutions.', 
      rules: 'Teams of 2-4 members. Max 4 slides in PPT/PDF format. Top 8 teams qualify for offline finals featuring a 10 min presentation and 3 min Q&A.'
    },
    { 
      type: 'HYBRID', title: 'Proffing-It', stat: 'UG Economics', deadline: 'Jan 31, 2027',
      desc: 'Mock Classroom. Move to the other side of the table and deliver a compelling academic lecture.', 
      rules: 'Open exclusively to enrolled UG Economics students. Individual participation. Prelims (Online): 6 min lecture + 4 min Q&A. Finals (Offline): 10 min lecture + 5 min Q&A. Topics mailed 36-48 hrs prior.'
    },
  ];

  const onlineEvents = [
    { 
      title: 'Pa-Writo', date: 'Jan 12, 2027',
      desc: 'Essay Writing. Transform your concepts into a persuasive fabric of words.',
      rules: 'Max 1600 words. APA referencing style. Submitted as a PDF (max 5MB). AI usage is strictly prohibited and will lead to disqualification. Individual participation only.',
      topics: ["Green Transition vs. Growth", "Chips, Critical Minerals and Cloud", "Her Rupee vs His Rupee"]
    },
    { 
      title: 'Artflation', date: 'Jan 23, 2027',
      desc: 'Poster Making. Turn a complex idea into a single visual that stops everyone in their tracks.',
      rules: 'Digital format (JPEG, PNG, PDF) at 300 DPI. Dimensions must be A3, A4, or 16:9. No AI generation, templates, or watermarks. Must include a 50-100 word description of the concept.',
      topics: ["Redefining Humanity in the Age of AI", "The Unfinished Generation"]
    },
    { 
      title: 'Memesis', date: 'Jan 25, 2027',
      desc: 'Meme Making. Where humour meets sharp thinking. Just one perfect image and a punchline.',
      rules: 'Max 2 original memes per participant. Existing templates permitted with original captions. No AI tools allowed. Submitted via Google Form.',
      topics: ["The Last Minute Economy", "The Placement Paradox", "Attendance vs Academic Survival", "The Election Economy", "Dilemma of Exams"]
    },
    { 
      title: 'Econmotion', date: 'Jan 23, 2027',
      desc: 'Reel Making. Turn an everyday moment into a viral-worthy reel that demands a replay.',
      rules: '30-120 seconds duration. Vertical 9:16 format (MP4, 1080p). Up to 3 members per team. AI is strictly prohibited. Must include a 50-100 word description.',
      topics: ["FOMO as a Market Driver", "Same Salaries/Different Lives", "A Generation on Rent", "Illusion of Free"]
    },
    { 
      title: 'Fiscal-Pix', date: 'Jan 23, 2027',
      desc: 'Photography. Capture life, economics, and society through the lens of your camera.',
      rules: 'High-res JPEG/JPG format. EXIF data is mandatory. Minor edits only (brightness/contrast); no heavy manipulation or AI. Must include a short caption explaining context.',
      topics: ["Two Indias - One Future", "The Unequal Journey (Growth and Its Gaps)"]
    },
    { 
      title: 'Focalibre', date: 'Jan 23, 2027',
      desc: 'Short Film Making. Tell a powerful story that makes people laugh, think, or feel something real.',
      rules: '3 to 5 minutes duration. Horizontal 1920x1080 MP4 format. Subtitles are mandatory regardless of language. Submitted via Drive link.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans relative overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#5B2366 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
          
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#5B2366] tracking-tight mb-4 drop-shadow-sm">
              Event Schedule
            </h1>
            <p className="text-lg text-[#4A4545] font-medium max-w-2xl mx-auto mb-6 tracking-wide uppercase">
              #BeyondTheParadigm <span className="mx-2 text-[#D4C391]">|</span> February 4th - 5th, 2027
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2366] to-[#D4C391] mx-auto rounded-full mb-10"></div>
            
            <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#D4C391]/50 shadow-xl max-w-4xl mx-auto text-left overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#F2E8CF] rounded-full opacity-60 blur-3xl group-hover:bg-[#E5DFD3] transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#7A5F1C] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4C391]"></span> YESM 2027 Theme
                </h2>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#5B2366] mb-4 leading-snug">
                  Reimagining India's Development Trajectory
                </h3>
                <p className="text-[#4A4545] text-base leading-relaxed mb-4">
                  Navigating Geopolitical Transitions, Emerging Technologies, and the New Trade Order. India's development journey is being shaped by a rapidly changing world.
                </p>
                <p className="text-[#4A4545] text-base leading-relaxed font-medium">
                  Click on any event below to view its specific guidelines, topics, and deadlines.
                </p>
              </div>
            </div>
          </div>

          {/* Offline Events Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#5B2366] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B2366] to-[#43194B] shadow-md text-white flex items-center justify-center text-lg">📍</span>
              On-Campus Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offlineEvents.map((event, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedEvent(event)}
                  className="group bg-white p-6 rounded-xl border border-[#E5DFD3] border-b-4 border-b-[#5B2366] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-left w-full cursor-pointer"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#F8F5F2_1px,transparent_1px),linear-gradient(to_bottom,#F8F5F2_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-bold tracking-wider text-[#D4C391]">{event.type}</div>
                      <svg className="w-5 h-5 text-[#5B2366] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#5B2366] mb-2">{event.title}</h3>
                    <p className="text-[#7A7575] text-sm mb-5 leading-relaxed">{event.desc}</p>
                    <div className="flex justify-between items-center text-xs font-semibold text-[#4A4545] bg-[#F8F5F2] px-3 py-2 rounded-md">
                      <span>{event.deadline}</span>
                      <span className="text-[#5B2366]">{event.stat}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Online Events Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#5B2366] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4C391] to-[#B8A369] shadow-md text-white flex items-center justify-center text-lg">💻</span>
              Online Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineEvents.map((event, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedEvent(event)}
                  className="group bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B] hover:shadow-2xl hover:shadow-[#5B2366]/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-left w-full cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_20px)] group-hover:opacity-[0.08] transition-opacity duration-300"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4C391] rounded-full opacity-0 blur-2xl group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-extrabold text-white">{event.title}</h3>
                      <svg className="w-5 h-5 text-[#D4C391] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                    <p className="text-[#E5DFD3] text-sm mb-5 leading-relaxed">{event.desc}</p>
                    <div className="inline-block border border-[#D4C391]/40 text-[#D4C391] text-xs font-bold px-3 py-1.5 rounded-full">
                      Deadline: {event.date}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/register" 
              className="group relative inline-flex items-center justify-center bg-[#5B2366] text-white text-lg font-bold py-4 px-12 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative">Register for Events</span>
            </Link>
          </div>

        </main>
        <Footer />
      </div>

      {/* POPUP MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}></div>
          
          <div className="bg-[#F8F5F2] w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden border-t-8 border-t-[#5B2366] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#E5DFD3] flex justify-between items-start bg-white">
              <div>
                <h3 className="text-3xl font-extrabold text-[#5B2366]">{selectedEvent.title}</h3>
                <p className="text-[#7A5F1C] font-bold text-sm tracking-widest uppercase mt-2">
                  Deadline: {selectedEvent.deadline || selectedEvent.date}
                </p>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-[#7A7575] hover:text-[#5B2366] hover:bg-[#E5DFD3] p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-sm font-bold text-[#D4C391] uppercase tracking-widest mb-2">Description</h4>
                <p className="text-[#4A4545] leading-relaxed">{selectedEvent.desc}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-[#D4C391] uppercase tracking-widest mb-2">Rules & Guidelines</h4>
                <p className="text-[#4A4545] leading-relaxed bg-white p-4 rounded-lg border border-[#E5DFD3]">{selectedEvent.rules}</p>
              </div>

              {selectedEvent.topics && (
                <div>
                  <h4 className="text-sm font-bold text-[#D4C391] uppercase tracking-widest mb-2">Event Topics / Themes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#4A4545] bg-white p-4 rounded-lg border border-[#E5DFD3]">
                    {selectedEvent.topics.map((topic: string, index: number) => (
                      <li key={index} className="leading-snug">{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[#E5DFD3] bg-white flex justify-end">
              <Link 
                href="/register" 
                className="bg-[#5B2366] text-white font-bold py-3 px-8 rounded-full hover:bg-[#43194B] transition-colors shadow-md"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}