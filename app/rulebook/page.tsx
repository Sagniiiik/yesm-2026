import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Rulebook() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5B2366] tracking-tight mb-4">
            Official Rulebook
          </h1>
          <div className="w-24 h-1.5 bg-[#D4C391] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4A4545] text-lg max-w-2xl mx-auto">
            Comprehensive guidelines, topics, and deadlines for all YESM 2027 events. Please read carefully before registering.
          </p>
        </div>

        {/* ONLINE EVENTS SECTION */}
        <h2 className="text-2xl font-bold text-[#5B2366] mb-6 flex items-center gap-3 border-b border-[#E5DFD3] pb-4">
          <span className="text-2xl">💻</span> Online Pre-Fest Events
        </h2>
        <div className="space-y-4 mb-16">
          
          {/* Pa-Writo */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Pa-Writo (Essay Writing)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 12, 2027 | Submission by Jan 15, 2027</p>
              <p><strong>Rules:</strong> Max 1600 words. APA referencing style. Submitted as a PDF (max 5MB). AI usage is strictly prohibited and will lead to disqualification. Individual participation only.</p>
              <p><strong>Topics (Choose One):</strong></p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Green Transition vs. Growth: Can India Build a Developed Economy Without Repeating the Carbon-Intensive Path?</li>
                <li>Chips, Critical Minerals and Cloud: Is Technology the New Currency of Geopolitics and Where does India Stand?</li>
                <li>Her Rupee vs His Rupee: Does Digital Finance Empower Women or Only Digitise Existing Inequalities?</li>
              </ul>
            </div>
          </details>

          {/* Artflation */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Artflation (Poster Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 23, 2027 | Submission by Jan 25, 2027</p>
              <p><strong>Rules:</strong> Digital format (JPEG, PNG, PDF) at 300 DPI. Dimensions must be A3, A4, or 16:9. No AI generation, templates, or watermarks. Must include a 50-100 word description of the concept.</p>
              <p><strong>Topics:</strong></p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Redefining Humanity in the Age of AI</li>
                <li>The Unfinished Generation: Youth aspirations, uncertainty, and opportunity</li>
              </ul>
            </div>
          </details>

          {/* Memesis */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Memesis (Meme Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadline:</strong> Registration & Submission by Jan 25, 2027</p>
              <p><strong>Rules:</strong> Max 2 original memes per participant. Existing templates permitted with original captions. No AI tools allowed. Submitted via Google Form.</p>
              <p><strong>Themes:</strong> The Last Minute Economy, The Placement Paradox, Attendance vs Academic Survival, The Election Economy, Dilemma of Exams.</p>
            </div>
          </details>

          {/* Econmotion */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Econmotion (Reel Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 23, 2027 | Submission by Jan 25, 2027</p>
              <p><strong>Rules:</strong> 30-120 seconds duration. Vertical 9:16 format (MP4, 1080p). Up to 3 members per team. AI is strictly prohibited. Must include a 50-100 word description.</p>
              <p><strong>Topics:</strong> FOMO as a Market Driver, Same Salaries/Different Lives, A Generation on Rent, Illusion of Free.</p>
            </div>
          </details>

          {/* Fiscal-Pix */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Fiscal-Pix (Photography)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 23, 2027 | Submission by Jan 25, 2027</p>
              <p><strong>Rules:</strong> High-res JPEG/JPG format. EXIF data is mandatory. Minor edits only (brightness/contrast); no heavy manipulation or AI. Must include a short caption explaining context.</p>
              <p><strong>Themes:</strong> Two Indias - One Future, The Unequal Journey (Growth and Its Gaps).</p>
            </div>
          </details>

          {/* Focalibre */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Focalibre (Short Film Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 23, 2027 | Submission by Jan 25, 2027</p>
              <p><strong>Rules:</strong> 3 to 5 minutes duration. Horizontal 1920x1080 MP4 format. Subtitles are mandatory regardless of language. Submitted via Drive link.</p>
            </div>
          </details>

        </div>

        {/* OFFLINE EVENTS SECTION */}
        <h2 className="text-2xl font-bold text-[#5B2366] mb-6 flex items-center gap-3 border-b border-[#E5DFD3] pb-4">
          <span className="text-2xl">📍</span> Offline / Hybrid Events
        </h2>
        <div className="space-y-4">
          
          {/* Colloquium */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Colloquium (Paper Presentation)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Abstract by Dec 28, 2026 | Fee Payment by Jan 19 | Paper/PPT by Feb 3</p>
              <p><strong>Rules:</strong> Max 3 members. 1000-word abstract for prelims. Final paper max 5000 words. Max 25 presentation slides. 10 mins to present + 2 min Q&A.</p>
              <p><strong>Topics:</strong> Economic Nationalism, India's AI Dilemma, India's Passport to Gender Equality (Gig Economy).</p>
            </div>
          </details>

          {/* Proffing It */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Proffing-It (Mock Classroom)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadline:</strong> Jan 31, 2027</p>
              <p><strong>Rules:</strong> Open exclusively to enrolled UG Economics students. Individual participation. Prelims (Online): 6 min lecture + 4 min Q&A. Finals (Offline): 10 min lecture + 5 min Q&A. Topics mailed 36-48 hrs prior.</p>
            </div>
          </details>

          {/* Resolving It */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Resolving It (Case Study)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 23 | Case Release Jan 25 | Submission Jan 27</p>
              <p><strong>Rules:</strong> Teams of 2-4 members. Max 4 slides in PPT/PDF format. Top 8 teams qualify for offline finals featuring a 10 min presentation and 3 min Q&A.</p>
            </div>
          </details>

          {/* Pitching It */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Pitching It (Shark Tank)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Deadlines:</strong> Registration by Jan 25 | Prelim Submission Jan 27</p>
              <p><strong>Rules:</strong> Teams of up to 3 members. Submit pitch deck (max 10 slides). Final offline pitch is 5+1 minutes followed by a 3 min Q&A. Exceeding time limits results in negative marking.</p>
            </div>
          </details>

          {/* Equizilibrium */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Equizilibrium (Quiz)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadline:</strong> Jan 31, 2027</p>
              <p><strong>Fee:</strong> ₹150 per team</p>
              <p><strong>Rules:</strong> U-25 General Quiz. Max 3 members per team (Lone wolves permitted). Prelims will be a written test. Top 6 teams qualify for the final pounce-bounce format stage.</p>
            </div>
          </details>

          {/* Bid-o-nomics */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Bid-o-nomics: Trade City (IPL Auction)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadline:</strong> Jan 31, 2027</p>
              <p><strong>Fee:</strong> ₹200 per team</p>
              <p><strong>Rules:</strong> Max 3 members. Written cricket quiz prelims. Auction purse of ₹80 crore. Squads must maintain minimums: 3 batsmen, 3 bowlers, 3 all-rounders, 1 wicketkeeper. Max 4 overseas players in Playing XI.</p>
            </div>
          </details>

          {/* Ecogency */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Ecogency (Oxford Style Debate)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadline:</strong> Jan 31, 2027</p>
              <p><strong>Fee:</strong> ₹150 per individual, ₹300 per team</p>
              <p><strong>Rules:</strong> Teams of 2 (one speaking for, one against). Individual registrants will be randomly paired. Language chosen (Bengali, Hindi, or English) cannot be changed mid-speech.</p>
            </div>
          </details>

          {/* Conferencia */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Conferencia (WTO Simulation)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadlines:</strong> Early Bird Jan 8 | Final Jan 31, 2027</p>
              <p><strong>Fee:</strong> Single Delegate: ₹650 | Double Delegation: ₹1200</p>
              <p><strong>Rules:</strong> World Trade Organization committee simulation. English is the official language. Formal wear for Day 1, Ethnic wear for Day 2.</p>
            </div>
          </details>

          {/* Chaturanga */}
          <details className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Chaturanga (Flagship Event)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-4 text-sm bg-white">
              <p><strong>Registration Deadline:</strong> Jan 31, 2027</p>
              <p><strong>Rules:</strong> 2 to 3 members per team. A logic-driven challenge where every decision counts. Usage of mobile phones is strictly prohibited. No prior preparation required.</p>
            </div>
          </details>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}