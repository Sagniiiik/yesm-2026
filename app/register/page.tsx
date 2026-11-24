// "use client";

// import { useState } from "react";
// import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";

// export default function Register() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
//       <Navbar />
      
//       <main className="flex-1 flex items-center justify-center p-6 mt-12 mb-12">
//         <div className="w-full max-w-md bg-white border border-[#E5DFD3] shadow-sm rounded-md p-8">
//           <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1818] mb-2">Register for YESM 2026</h1>
//           <p className="text-[#5C5757] mb-8 text-sm">Complete the form below to secure your spot in the events.</p>
          
//           {submitted ? (
//             <div className="bg-[#F2E8CF] border border-[#D4C391] text-[#7A5F1C] p-4 rounded-md mb-6 text-center font-medium shadow-sm">
//               Registration submitted successfully. Please check your inbox for confirmation.
//             </div>
//           ) : null}

//           {/* Hidden iframe prevents the ugly Google Forms redirect */}
//           <iframe name="hiddenConfirm" id="hiddenConfirm" style={{ display: "none" }}></iframe>

//           <form 
//             action="https://docs.google.com/forms/d/e/1FAIpQLSfst03o2f47K_-5Dvh69l6E3vjtZjEg4HsBdFosRk3OI22nsg/formResponse" 
//             method="POST" 
//             target="hiddenConfirm"
//             onSubmit={() => setSubmitted(true)}
//             className={submitted ? "hidden" : "flex flex-col gap-6"}
//           >
//             <div>
//               <label className="block text-sm font-semibold text-[#4A4545] mb-1">Full Name</label>
//               <input 
//                 type="text" 
//                 name="entry.281254158"
//                 required
//                 className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
//                 placeholder="John Doe"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-[#4A4545] mb-1">Email Address</label>
//               <input 
//                 type="email" 
//                 name="entry.954768459"
//                 required
//                 className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
//                 placeholder="student@college.edu"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-[#4A4545] mb-1">College</label>
//               <input 
//                 type="text" 
//                 name="entry.463104863"
//                 required
//                 className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
//                 placeholder="Your Institute Name"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-[#4A4545] mb-1">Select Event</label>
//               <select 
//                 name="entry.1266878257"
//                 className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors appearance-none"
//               >
//                 <option value="Kautilya">Kautilya</option>
//                 <option value="Colloquium">Colloquium</option>
//                 <option value="Ecogency">Ecogency</option>
//                 <option value="Pa-Writo">Pa-Writo</option>
//               </select>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full bg-[#732021] text-white font-bold py-3 rounded-md mt-2 hover:bg-[#8A292A] transition-colors shadow-sm"
//             >
//               Submit Registration
//             </button>
//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const registrationEvents = [
  { id: "colloquium", mode: "ONLINE", title: "Colloquium", subtitle: "Paper Presentation", cost: "Free", formUrl: "https://forms.gle/xiFF6mHYc4R93SuQ9" }, 
  { id: "pa-writo", mode: "ONLINE", title: "Pa-Writo", subtitle: "Article Writing", cost: "Free", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfc8_xgJ4Zm7XZzj0XScu7M8YVP3Vt-R9ilQ3eE7CljkOFixg/viewform?usp=preview" }, 
  { id: "fiscal-pix", mode: "ONLINE", title: "Fiscal-Pix", subtitle: "Photography", cost: "Free", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVBbILhPMKjkRUvib7lkYqXzNLmQJfWPTgxB44jMsnelxIkg/viewform?usp=header" },
  { id: "focalibre", mode: "ONLINE", title: "Focalibre", subtitle: "Short Film Making", cost: "Free", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSciIfMAWOXf5Q7vIOi5BaWAuYNJsFSI841JbSRISp8AwXoGcw/viewform?usp=publish-editor" },
  { id: "artflation", mode: "ONLINE", title: "Artflation", subtitle: "Poster Making", cost: "Free", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdaHAJQvwMA6-ysAOwgxSThjWeAu0rdHl2inqRB9gtrisaIZw/viewform?usp=publish-editor" },
  { id: "econmotion", mode: "ONLINE", title: "Econmotion", subtitle: "Reel Making", cost: "Free", formUrl: "https://forms.gle/hBf9dPugc7ipzs4R9" },
  { id: "memesis", mode: "ONLINE", title: "Memesis", subtitle: "Meme Making", cost: "Free", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScAiWBFJQfdOydkB5hh44pgwnhQPdSbH3FkozitVichYpqNIA/viewform?usp=header" },
  { id: "equizilibrium", mode: "OFFLINE", title: "Equizilibrium", subtitle: "Quiz Competition", cost: "₹150 / team", formUrl: "https://forms.gle/tc3X3Sx5GNEhPkPRA" },
  { id: "ecogency", mode: "OFFLINE", title: "Ecogency", subtitle: "Oxford Style Debate", cost: "₹150/p | ₹300/team", formUrl: "https://docs.google.com/forms/d/1TwkM-_o1gYBB_bJdC1SJuqhSZeoaysdqh65fcX4C3H4/edit" },
  { id: "conferencia", mode: "OFFLINE", title: "Conferencia", subtitle: "Committee Simulation", cost: "Fees Apply", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeccjgRP6Re0bSkpYGzYTSETqgi05J3jbbKE4QDNi-9OYCfiA/viewform?usp=publish-editor" },
  { id: "pitching-it", mode: "OFFLINE", title: "Pitching It", subtitle: "Shark Tank", cost: "Free", formUrl: "https://forms.gle/NibqJtaYLGA4WDGJ7" },
  { id: "resolving-it", mode: "OFFLINE", title: "Resolving It", subtitle: "Case Study", cost: "Free", formUrl: "https://forms.gle/5j3P6ADGWxVZGHbe9" },
  { id: "proffing-it", mode: "HYBRID", title: "Proffing-It", subtitle: "Mock Classroom", cost: "Free", formUrl: "https://forms.gle/t5kwivrFQ6qebFh58" },
  { id: "bid-o-nomics", mode: "OFFLINE", title: "Bid-o-nomics", subtitle: "The Eco-Nomic Auction", cost: "₹200 / team", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSey0VxoU0l8LVkRguguAD7XSCENEm_cO2FYl25iaCGf13iTgw/viewform?usp=publish-editor" },
  { id: "chaturanga", mode: "OFFLINE", title: "Chaturanga", subtitle: "Chess Tournament", cost: "₹100 / player", formUrl: "https://forms.cloud.microsoft/r/uqJeAxxJNv?embed=true" },
];

export default function Register() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16 md:py-24">
        {/* Header & Big Explore Events CTA */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block bg-[#F2E8CF] border border-[#D4C391] text-[#7A5F1C] px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            YESM 2027 • Registrations Open
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1818] mb-4 tracking-tight">
            Event Registration
          </h1>
          <p className="text-[#4A4545] leading-relaxed mb-8">
            Not sure which event fits you best? Check out the rules, deadlines, and formats first—or jump straight into registering below.
          </p>

          {/* Big Top Button -> Leads to Events Section */}
          <Link
            href="/#events"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-[#1A1818] text-[#F8F5F2] hover:bg-[#332F2F] font-bold text-base md:text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
          >
            <span>Explore Events &amp; Rules</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-[#E2DDD7] flex-1" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#6E6868]">
            Direct Registration Links (15 Events)
          </span>
          <div className="h-px bg-[#E2DDD7] flex-1" />
        </div>

        {/* All Events Grid as Direct Form Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {registrationEvents.map((event) => (
            <a
              key={event.id}
              href={event.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 bg-white border border-[#E5E0D8] hover:border-[#1A1818] rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                      event.mode === "ONLINE"
                        ? "bg-emerald-100 text-emerald-800"
                        : event.mode === "HYBRID"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-stone-200 text-stone-800"
                    }`}
                  >
                    {event.mode}
                  </span>
                  <span className="text-xs font-semibold text-[#6E6868]">
                    {event.cost}
                  </span>
                </div>

                <h2 className="text-lg font-extrabold text-[#1A1818] group-hover:underline">
                  {event.title}
                </h2>
                <p className="text-sm text-[#5A5454] mt-0.5">
                  {event.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0ECE6] flex items-center justify-between text-sm font-bold text-[#1A1818]">
                <span>Register Now</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}