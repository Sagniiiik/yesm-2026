import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5B2366] tracking-tight mb-4">
            Event Schedule
          </h1>
          <p className="text-lg text-[#4A4545] max-w-2xl mx-auto mb-6">
            #BeyondTheParadigm • February 4th - 5th, 2027
          </p>
          <div className="w-24 h-1 bg-[#D4C391] mx-auto rounded-full mb-8"></div>
          
          {/* Central Theme Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5DFD3] shadow-sm max-w-4xl mx-auto text-left">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#7A5F1C] mb-2">YESM 2027 Theme</h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#5B2366] mb-4">Reimagining India's Development Trajectory</h3>
            <p className="text-[#4A4545] text-sm leading-relaxed mb-4">
              Navigating Geopolitical Transitions, Emerging Technologies, and the New Trade Order. India's development journey is being shaped by a rapidly changing world. Shifts in global politics, advancements in technology, and changes in international trade are creating new opportunities as well as challenges for the Indian economy.
            </p>
            <p className="text-[#4A4545] text-sm leading-relaxed">
              This theme explores how India can respond to these changes, adapt to new realities, and make the most of emerging opportunities.
            </p>
          </div>
        </div>

        {/* Offline Events Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#5B2366] mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#5B2366] text-white flex items-center justify-center text-sm">📍</span>
            On-Campus Events (Jadavpur University)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Event Cards */}
            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Chaturanga</h3>
              <p className="text-[#7A7575] text-sm mb-4">The Flagship Event. Untangle intricate logic-driven puzzles and activities in the ultimate showdown.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Team Size:</strong> 2-3 members</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">HYBRID</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Colloquium</h3>
              <p className="text-[#7A7575] text-sm mb-4">Paper Presentation. Showcase original research, challenge conventional thinking, and spark debate.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Abstract Deadline:</strong> Dec 28, 2026</p>
                <p><strong>Team Size:</strong> Max 3 members</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Pitching It</h3>
              <p className="text-[#7A7575] text-sm mb-4">Shark Tank simulation. Pitch your groundbreaking startup idea or product to a panel of investors.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 25, 2027</p>
                <p><strong>Team Size:</strong> Max 3 members</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Bid-o-nomics: Trade City</h3>
              <p className="text-[#7A7575] text-sm mb-4">Mock IPL Auction. Build your dream squad with an ₹80 crore purse. Brains, bids, and bold moves.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Fee:</strong> ₹200 / team</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Conferencia</h3>
              <p className="text-[#7A7575] text-sm mb-4">Committee Simulation (WTO). Sharp research, persuasive diplomacy, and powerful speaking.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Format:</strong> Single/Double Delegation</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Ecogency</h3>
              <p className="text-[#7A7575] text-sm mb-4">Oxford Style Debate. Words are weapons and logic is your armor. No middle ground allowed.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Fee:</strong> ₹150 / person</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Equizilibrium</h3>
              <p className="text-[#7A7575] text-sm mb-4">U-25 General Quiz. A delightful interplay of wisdom, trivia, and analytical thinking.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Fee:</strong> ₹150 / team</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">OFFLINE</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Resolving It</h3>
              <p className="text-[#7A7575] text-sm mb-4">Case Study Analysis. Identify underlying challenges and develop structured, effective solutions.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 23, 2027</p>
                <p><strong>Team Size:</strong> 2-4 members</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold tracking-wider text-[#D4C391] mb-2">HYBRID</div>
              <h3 className="text-lg font-bold text-[#5B2366] mb-2">Proffing-It</h3>
              <p className="text-[#7A7575] text-sm mb-4">Mock Classroom. Move to the other side of the table and deliver a compelling academic lecture.</p>
              <div className="text-xs text-[#4A4545] space-y-1">
                <p><strong>Deadline:</strong> Jan 31, 2027</p>
                <p><strong>Eligibility:</strong> UG Economics</p>
              </div>
            </div>

          </div>
        </div>

        {/* Online Events Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#5B2366] mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#D4C391] text-white flex items-center justify-center text-sm">💻</span>
            Online Events (Pre-Fest)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Pa-Writo</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Essay Writing. Transform your concepts into a persuasive fabric of words.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 12, 2027</p>
            </div>

            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Artflation</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Poster Making. Turn a complex idea into a single visual that stops everyone in their tracks.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 23, 2027</p>
            </div>

            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Memesis</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Meme Making. Where humour meets sharp thinking. Just one perfect image and a punchline.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 25, 2027</p>
            </div>

            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Econmotion</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Reel Making. Turn an everyday moment into a viral-worthy reel that demands a replay.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 23, 2027</p>
            </div>

            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Fiscal-Pix</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Photography. Capture life, economics, and society through the lens of your camera.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 23, 2027</p>
            </div>

            <div className="bg-[#5B2366] p-6 rounded-xl shadow-md border border-[#43194B]">
              <h3 className="text-lg font-bold text-white mb-2">Focalibre</h3>
              <p className="text-[#E5DFD3] text-sm mb-4">Short Film Making. Tell a powerful story that makes people laugh, think, or feel something real.</p>
              <p className="text-xs text-[#D4C391]">Deadline: Jan 23, 2027</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/register" 
            className="inline-block bg-[#5B2366] text-white text-lg font-bold py-4 px-10 rounded-md hover:bg-[#43194B] transition-colors shadow-lg"
          >
            Register for Events
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}