import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans relative overflow-hidden">
      
      {/* GLOBAL BACKGROUND TEXTURE: Subtle Dot Matrix */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#5B2366 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
          
          {/* Page Header */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#5B2366] tracking-tight mb-4 drop-shadow-sm">
              Event Schedule
            </h1>
            <p className="text-lg text-[#4A4545] font-medium max-w-2xl mx-auto mb-6 tracking-wide uppercase">
              #BeyondTheParadigm <span className="mx-2 text-[#D4C391]">|</span> February 4th - 5th, 2027
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2366] to-[#D4C391] mx-auto rounded-full mb-10"></div>
            
            {/* Central Theme Card with Gradients & Glow */}
            <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#D4C391]/50 shadow-xl max-w-4xl mx-auto text-left overflow-hidden group">
              {/* Decorative Blur Blob */}
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#F2E8CF] rounded-full opacity-60 blur-3xl group-hover:bg-[#E5DFD3] transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#7A5F1C] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4C391]"></span> YESM 2027 Theme
                </h2>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#5B2366] mb-4 leading-snug">
                  Reimagining India's Development Trajectory
                </h3>
                <p className="text-[#4A4545] text-base leading-relaxed mb-4">
                  Navigating Geopolitical Transitions, Emerging Technologies, and the New Trade Order. India's development journey is being shaped by a rapidly changing world. Shifts in global politics, advancements in technology, and changes in international trade are creating new opportunities as well as challenges for the Indian economy.
                </p>
                <p className="text-[#4A4545] text-base leading-relaxed font-medium">
                  This theme explores how India can respond to these changes, adapt to new realities, and make the most of emerging opportunities.
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
              {/* Event Cards - Light Theme with Bottom Border Accent */}
              {[
                { type: 'OFFLINE', title: 'Chaturanga', desc: 'The Flagship Event. Untangle intricate logic-driven puzzles and activities in the ultimate showdown.', deadline: 'Jan 31, 2027', stat: '2-3 members' },
                { type: 'HYBRID', title: 'Colloquium', desc: 'Paper Presentation. Showcase original research, challenge conventional thinking, and spark debate.', deadline: 'Dec 28, 2026', stat: 'Max 3 members' },
                { type: 'OFFLINE', title: 'Pitching It', desc: 'Shark Tank simulation. Pitch your groundbreaking startup idea or product to a panel of investors.', deadline: 'Jan 25, 2027', stat: 'Max 3 members' },
                { type: 'OFFLINE', title: 'Bid-o-nomics: Trade City', desc: 'Mock IPL Auction. Build your dream squad with an ₹80 crore purse. Brains, bids, and bold moves.', deadline: 'Jan 31, 2027', stat: '₹200 / team' },
                { type: 'OFFLINE', title: 'Conferencia', desc: 'Committee Simulation (WTO). Sharp research, persuasive diplomacy, and powerful speaking.', deadline: 'Jan 31, 2027', stat: 'Single/Double Del.' },
                { type: 'OFFLINE', title: 'Ecogency', desc: 'Oxford Style Debate. Words are weapons and logic is your armor. No middle ground allowed.', deadline: 'Jan 31, 2027', stat: '₹150 / person' },
                { type: 'OFFLINE', title: 'Equizilibrium', desc: 'U-25 General Quiz. A delightful interplay of wisdom, trivia, and analytical thinking.', deadline: 'Jan 31, 2027', stat: '₹150 / team' },
                { type: 'OFFLINE', title: 'Resolving It', desc: 'Case Study Analysis. Identify underlying challenges and develop structured, effective solutions.', deadline: 'Jan 23, 2027', stat: '2-4 members' },
                { type: 'HYBRID', title: 'Proffing-It', desc: 'Mock Classroom. Move to the other side of the table and deliver a compelling academic lecture.', deadline: 'Jan 31, 2027', stat: 'UG Economics' },
              ].map((event, i) => (
                <div key={i} className="group bg-white p-6 rounded-xl border border-[#E5DFD3] border-b-4 border-b-[#5B2366] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle inner grid texture on hover */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#F8F5F2_1px,transparent_1px),linear-gradient(to_bottom,#F8F5F2_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">{event.type}</div>
                    <h3 className="text-xl font-extrabold text-[#5B2366] mb-2">{event.title}</h3>
                    <p className="text-[#7A7575] text-sm mb-5 leading-relaxed">{event.desc}</p>
                    <div className="flex justify-between items-center text-xs font-semibold text-[#4A4545] bg-[#F8F5F2] px-3 py-2 rounded-md">
                      <span>{event.deadline}</span>
                      <span className="text-[#5B2366]">{event.stat}</span>
                    </div>
                  </div>
                </div>
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
              {/* Event Cards - Dark Theme with Diagonal Stripe Texture */}
              {[
                { title: 'Pa-Writo', desc: 'Essay Writing. Transform your concepts into a persuasive fabric of words.', date: 'Jan 12, 2027' },
                { title: 'Artflation', desc: 'Poster Making. Turn a complex idea into a single visual that stops everyone in their tracks.', date: 'Jan 23, 2027' },
                { title: 'Memesis', desc: 'Meme Making. Where humour meets sharp thinking. Just one perfect image and a punchline.', date: 'Jan 25, 2027' },
                { title: 'Econmotion', desc: 'Reel Making. Turn an everyday moment into a viral-worthy reel that demands a replay.', date: 'Jan 23, 2027' },
                { title: 'Fiscal-Pix', desc: 'Photography. Capture life, economics, and society through the lens of your camera.', date: 'Jan 23, 2027' },
                { title: 'Focalibre', desc: 'Short Film Making. Tell a powerful story that makes people laugh, think, or feel something real.', date: 'Jan 23, 2027' },
              ].map((event, i) => (
                <div key={i} className="group bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B] hover:shadow-2xl hover:shadow-[#5B2366]/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Diagonal Stripe Texture */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_20px)] group-hover:opacity-[0.08] transition-opacity duration-300"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4C391] rounded-full opacity-0 blur-2xl group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold text-white mb-2">{event.title}</h3>
                    <p className="text-[#E5DFD3] text-sm mb-5 leading-relaxed">{event.desc}</p>
                    <div className="inline-block border border-[#D4C391]/40 text-[#D4C391] text-xs font-bold px-3 py-1.5 rounded-full">
                      Deadline: {event.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
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
    </div>
  );
}