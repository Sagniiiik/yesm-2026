"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import { useState } from "react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const allEvents = [
    { 
      id: 'colloquium', mode: 'HYBRID', title: 'Colloquium (Paper Presentation)', cost: '₹100 / team', deadline: 'Dec 28, 2026',
      desc: 'Showcase original research, challenge conventional thinking, and spark debate.', 
      rules: '1000-word abstract for prelims. Final paper max 5000 words. Max 25 presentation slides. 10 mins to present + 2 min Q&A.',
      topics: ["Economic Nationalism", "India's AI Dilemma", "India's Passport to Gender Equality (Gig Economy)"]
    },
    { 
      id: 'pawrito', mode: 'ONLINE', title: 'Pa-Writo (Essay Writing)', cost: 'Free', deadline: 'Jan 12, 2027',
      desc: 'Transform your concepts into a persuasive fabric of words.',
      rules: 'Max 1600 words. APA referencing style. Submitted as a PDF (max 5MB). AI usage is strictly prohibited and will lead to disqualification. Individual participation only.',
      topics: ["Green Transition vs. Growth", "Chips, Critical Minerals and Cloud", "Her Rupee vs His Rupee"]
    },
    { 
      id: 'fiscal-pix', mode: 'ONLINE', title: 'Fiscal-Pix (Photography)', cost: 'Free', deadline: 'Jan 23, 2027',
      desc: 'Capture life, economics, and society through the lens of your camera.',
      rules: 'High-res JPEG/JPG format. EXIF data is mandatory. Minor edits only (brightness/contrast); no heavy manipulation or AI. Must include a short caption explaining context.',
      topics: ["Two Indias - One Future", "The Unequal Journey (Growth and Its Gaps)"]
    },
    { 
      id: 'focalibre', mode: 'ONLINE', title: 'Focalibre (Short Film Making)', cost: 'Free', deadline: 'Jan 23, 2027',
      desc: 'Tell a powerful story that makes people laugh, think, or feel something real.',
      rules: '3 to 5 minutes duration. Horizontal 1920x1080 MP4 format. Subtitles are mandatory regardless of language. Submitted via Drive link.'
    },
    { 
      id: 'artflation', mode: 'ONLINE', title: 'Artflation (Poster Making)', cost: 'Free', deadline: 'Jan 23, 2027',
      desc: 'Turn a complex idea into a single visual that stops everyone in their tracks.',
      rules: 'Digital format (JPEG, PNG, PDF) at 300 DPI. Dimensions must be A3, A4, or 16:9. No AI generation, templates, or watermarks. Must include a 50-100 word description of the concept.',
      topics: ["Redefining Humanity in the Age of AI", "The Unfinished Generation"]
    },
    { 
      id: 'econmotion', mode: 'ONLINE', title: 'Econmotion (Reel Making)', cost: 'Free', deadline: 'Jan 23, 2027',
      desc: 'Turn an everyday moment into a viral-worthy reel that demands a replay.',
      rules: '30-120 seconds duration. Vertical 9:16 format (MP4, 1080p). Up to 3 members per team. AI is strictly prohibited. Must include a 50-100 word description.',
      topics: ["FOMO as a Market Driver", "Same Salaries/Different Lives", "A Generation on Rent", "Illusion of Free"]
    },
    { 
      id: 'memesis', mode: 'ONLINE', title: 'Memesis (Meme Making)', cost: 'Free', deadline: 'Jan 25, 2027',
      desc: 'Where humour meets sharp thinking. Just one perfect image and a punchline.',
      rules: 'Max 2 original memes per participant. Existing templates permitted with original captions. No AI tools allowed. Submitted via Google Form.',
      topics: ["The Last Minute Economy", "The Placement Paradox", "Attendance vs Academic Survival", "The Election Economy", "Dilemma of Exams"]
    },
    { 
      id: 'equizilibrium', mode: 'OFFLINE', title: 'Equizilibrium (Quiz Competition)', cost: '₹150 / team', deadline: 'Jan 31, 2027',
      desc: 'U-25 General Quiz. A delightful interplay of wisdom, trivia, and analytical thinking.', 
      rules: 'U-25 General Quiz. Max 3 members per team (Lone wolves permitted). Prelims will be a written test. Top 6 teams qualify for the final pounce-bounce format stage.'
    },
    { 
      id: 'ecogency', mode: 'OFFLINE', title: 'Ecogency (Oxford Style Debate)', cost: '₹150/p | ₹300/team', deadline: 'Jan 31, 2027',
      desc: 'Words are weapons and logic is your armor. No middle ground allowed.', 
      rules: 'Teams of 2 (one speaking for, one against). Individual registrants will be randomly paired. Language chosen (Bengali, Hindi, or English) cannot be changed mid-speech.'
    },
    { 
      id: 'conferencia', mode: 'OFFLINE', title: 'Conferencia (Committee Simulation)', cost: 'Fees Apply', deadline: 'Jan 31, 2027',
      desc: 'Committee Simulation (WTO). Sharp research, persuasive diplomacy, and powerful speaking.', 
      rules: 'World Trade Organization committee simulation. English is the official language. Formal wear for Day 1, Ethnic wear for Day 2. Fees: ₹650 Single / ₹1200 Double.'
    },
    { 
      id: 'pitching-it', mode: 'OFFLINE', title: 'Pitching It (Shark Tank)', cost: 'Free', deadline: 'Jan 25, 2027',
      desc: 'Shark Tank simulation. Pitch your groundbreaking startup idea or product to a panel of investors.', 
      rules: 'Submit pitch deck (max 10 slides). Final offline pitch is 5+1 minutes followed by a 3 min Q&A. Exceeding time limits results in negative marking.'
    },
    { 
      id: 'resolving-it', mode: 'OFFLINE', title: 'Resolving It (Case Study Analysis)', cost: 'Free', deadline: 'Jan 23, 2027',
      desc: 'Identify underlying challenges and develop structured, effective solutions.', 
      rules: 'Teams of 2-4 members. Max 4 slides in PPT/PDF format. Top 8 teams qualify for offline finals featuring a 10 min presentation and 3 min Q&A.'
    },
    { 
      id: 'proffing-it', mode: 'HYBRID', title: 'Proffing-It (Mock Classroom)', cost: 'Free', deadline: 'Jan 31, 2027',
      desc: 'Move to the other side of the table and deliver a compelling academic lecture.', 
      rules: 'Open exclusively to enrolled UG Economics students. Individual participation. Prelims (Online): 6 min lecture + 4 min Q&A. Finals (Offline): 10 min lecture + 5 min Q&A. Topics mailed 36-48 hrs prior.'
    },
    { 
      id: 'bid-o-nomics', mode: 'OFFLINE', title: 'Bid-o-nomics (Mock IPL Auction)', cost: '₹200 / team', deadline: 'Jan 31, 2027',
      desc: 'Build your dream squad with an ₹80 crore purse. Brains, bids, and bold moves.', 
      rules: 'Written cricket quiz prelims. Auction purse of ₹80 crore. Squads must maintain minimums: 3 batsmen, 3 bowlers, 3 all-rounders, 1 wicketkeeper. Max 4 overseas players in Playing XI.'
    },
    { 
      id: 'chaturanga', mode: 'OFFLINE', title: 'Chaturanga (Flagship Event)', cost: 'Free', deadline: 'Jan 31, 2027',
      desc: 'Untangle intricate logic-driven puzzles and activities in the ultimate showdown.', 
      rules: 'A logic-driven challenge where every decision counts. Usage of mobile phones is strictly prohibited. No prior preparation required.'
    },
  ];

  // Helper function to color-code event tags
  const getBadgeColor = (mode: string) => {
    if (mode === 'ONLINE') return 'text-[#C42079]'; // Magenta Pink
    if (mode === 'HYBRID') return 'text-[#D4C391]'; // Gold
    return 'text-[#5B2366]'; // Deep Purple
  };

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
              #BeyondTheParadigm <span className="mx-2 text-[#C42079]">|</span> February 4th - 5th, 2027
            </p>
            {/* 3-Color Gradient Line */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#5B2366] via-[#C42079] to-[#D4C391] mx-auto rounded-full mb-10"></div>
            
            <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#D4C391]/50 shadow-xl max-w-4xl mx-auto text-left overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#F2E8CF] rounded-full opacity-60 blur-3xl group-hover:bg-[#E5DFD3] transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#7A5F1C] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C42079]"></span> YESM 2027 Theme
                </h2>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#5B2366] mb-4 leading-snug">
                  Reimagining India's Development Trajectory
                </h3>
                <p className="text-[#4A4545] text-base leading-relaxed mb-4">
                  Navigating Geopolitical Transitions, Emerging Technologies, and the New Trade Order. India's development journey is being shaped by a rapidly changing world.
                </p>
                <p className="text-[#4A4545] text-base leading-relaxed font-medium">
                  Click on any event below for an overview, or read the full Rulebook for submission details.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#5B2366] mb-8 flex items-center gap-3">
              {/* Gradient Icon Badge */}
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B2366] to-[#C42079] shadow-md text-white flex items-center justify-center text-lg">📅</span>
              Complete Event Roster
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map((event, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedEvent(event)}
                  // Added Magenta hover border and subtle pink shadow
                  className="group bg-white p-6 rounded-xl border border-[#E5DFD3] border-b-4 border-b-[#5B2366] hover:border-b-[#C42079] shadow-sm hover:shadow-xl hover:shadow-[#C42079]/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-left w-full cursor-pointer flex flex-col"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#F8F5F2_1px,transparent_1px),linear-gradient(to_bottom,#F8F5F2_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <div className={`text-xs font-bold tracking-wider ${getBadgeColor(event.mode)}`}>{event.mode}</div>
                      <svg className="w-5 h-5 text-[#C42079] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#5B2366] mb-2">{event.title}</h3>
                    <p className="text-[#7A7575] text-sm mb-6 leading-relaxed flex-1">{event.desc}</p>
                    
                    <div className="flex justify-between items-center text-xs font-semibold text-[#4A4545] bg-[#F8F5F2] px-3 py-2 rounded-md mt-auto">
                      <span>{event.deadline}</span>
                      <span className={`${event.cost === 'Free' ? 'text-[#5B2366]' : 'text-[#C42079]'} font-bold`}>{event.cost}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/register" 
              // Upgraded to a Purple-to-Magenta gradient button
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#5B2366] to-[#C42079] text-white text-lg font-bold py-4 px-12 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C42079]/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative">Register for Events</span>
            </Link>
          </div>

        </main>
        <Footer />
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}></div>
          
          <div className="bg-[#F8F5F2] w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden border-t-8 border-t-[#C42079] animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 md:p-8 border-b border-[#E5DFD3] flex justify-between items-start bg-white">
              <div>
                <h3 className="text-3xl font-extrabold text-[#5B2366]">{selectedEvent.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[#7A5F1C] font-bold text-sm tracking-widest uppercase">
                    Deadline: {selectedEvent.deadline}
                  </p>
                  <span className="text-[#E5DFD3]">|</span>
                  <p className="text-[#C42079] font-bold text-sm tracking-widest uppercase">
                    {selectedEvent.cost}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-[#7A7575] hover:text-[#C42079] hover:bg-[#E5DFD3] p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
              <div>
                <h4 className="text-sm font-bold text-[#C42079] uppercase tracking-widest mb-2">Description</h4>
                <p className="text-[#4A4545] leading-relaxed">{selectedEvent.desc}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-[#C42079] uppercase tracking-widest mb-2">Basic Rules</h4>
                <p className="text-[#4A4545] leading-relaxed bg-white p-4 rounded-lg border border-[#E5DFD3]">{selectedEvent.rules}</p>
              </div>

              {selectedEvent.topics && (
                <div>
                  <h4 className="text-sm font-bold text-[#C42079] uppercase tracking-widest mb-2">Event Topics / Themes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#4A4545] bg-white p-4 rounded-lg border border-[#E5DFD3]">
                    {selectedEvent.topics.map((topic: string, index: number) => (
                      <li key={index} className="leading-snug">{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-[#E5DFD3] bg-white flex flex-col sm:flex-row justify-between gap-4">
              <Link 
                href={`/rulebook#${selectedEvent.id}`} 
                className="text-[#C42079] font-bold py-3 px-6 rounded-full border-2 border-[#C42079] hover:bg-[#F8F5F2] transition-colors text-center w-full sm:w-auto"
              >
                Read Full Rules
              </Link>
              <Link 
                href="/register" 
                className="bg-gradient-to-r from-[#5B2366] to-[#C42079] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-colors text-center w-full sm:w-auto"
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