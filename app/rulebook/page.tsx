"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect } from "react";

export default function Rulebook() {
  
  // This hook detects the #hash in the URL and auto-opens the targeted accordion
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(hash) as HTMLDetailsElement;
        if (targetElement) {
          targetElement.open = true;
          // Offset scrolling slightly so the header doesn't cover the title
          const y = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // Slight delay ensures DOM is fully painted before scrolling
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5B2366] tracking-tight mb-4">
            Official Rulebook
          </h1>
          <div className="w-24 h-1.5 bg-[#D4C391] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4A4545] text-lg max-w-3xl mx-auto">
            Comprehensive guidelines, submission procedures, and deadlines for all YESM 2027 events as published in the official brochure.
          </p>
        </div>

        {/* ONLINE EVENTS SECTION */}
        <h2 className="text-3xl font-extrabold text-[#5B2366] mb-8 flex items-center gap-3 border-b-2 border-[#D4C391] pb-4">
          <span className="text-3xl">💻</span> Online Events
        </h2>
        
        <div className="space-y-4 mb-20">
          <details id="pawrito" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Pa-Writo (Essay Writing)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p className="italic">"It's often said that true impact requires only a few meticulously chosen words, woven with creativity to frame an idea in its most compelling form, and now is your chance to prove it. Pa-Writo is not just an essay writing contest; it is a dedicated arena where the power of your intellect meets the precision of your prose..."</p>
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Topics:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>Green Transition vs. Growth: Can India Build a Developed Economy Without Repeating the Carbon-Intensive Path?</li>
                  <li>Chips, Critical Minerals and Cloud: Is Technology the New Currency of Geopolitics and Where does India Stand?</li>
                  <li>Her Rupee vs His Rupee: Does Digital Finance Empower Women or Only Digitise Existing Inequalities?</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Deadlines:</h4>
                <p>Registration Deadline: 12th January 2027, 11:59 p.m.<br/>Submission Deadline: 15th January 2027, 11:59 p.m.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Open to enrolled high school (+2), UG, and PG students. Individual participation only.</li>
                  <li>Essay must be in English. Word count: max 1600 words (including in-text citations, excluding cover page/footnotes).</li>
                  <li>Usage of AI is strictly prohibited. Plagiarism leads to immediate disqualification.</li>
                  <li>Format: Times New Roman, Size 12, Justified alignment, 1.5 Line spacing.</li>
                  <li>APA referencing style must be used to cite other papers and articles.</li>
                  <li>Cover page must include: participation registration no., topic title/letter, School/College name, Year of study.</li>
                  <li><strong>Submission:</strong> Email PDF (max 5MB) to <a href="mailto:yesm2027pawrito@gmail.com" className="text-[#7A5F1C] underline">yesm2027pawrito@gmail.com</a>. Subject: ‘Pawrito_Participant’sRegistrationNo._TopicLetter’. File name: ‘TopicLetter_Participant’sRegistrationNo.’.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="artflation" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Artflation (Poster Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p className="italic">"Can one poster say what a thousand words cannot? Here, your ideas don't just speak, they shout in colour. No long speeches, no second chances. Just one blank sheet and your imagination..."</p>
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Topics:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>Redefining Humanity in the Age of AI: The changing relationship between humans, machines, creativity and intelligence.</li>
                  <li>The Unfinished Generation: Youth aspirations, uncertainty, opportunity and the changing idea of adulthood.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Deadlines:</h4>
                <p>Registration Deadline: 23rd January 2027<br/>Submission Deadline: 25th January 2027</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Digital format (JPEG, PNG, or PDF) with a minimum resolution of 300 DPI. Dimensions: A3, A4, or 16:9 aspect ratio.</li>
                  <li>The use of Artificial Intelligence (AI) tools is strictly prohibited. Freedom of software is allowed.</li>
                  <li>Participants must not include names, watermarks, or identifying info on the poster.</li>
                  <li>Must include a short textual message/tagline in any language communicating the theme.</li>
                  <li>Must include a written description (50–100 words) explaining the concept.</li>
                  <li>Organizers may request screenshots of the work-in-progress workspace to verify originality.</li>
                  <li><strong>Submission:</strong> Email to <a href="mailto:artflation2027@gmail.com" className="text-[#7A5F1C] underline">artflation2027@gmail.com</a>. Subject and file name format: artflation_NameOfParticipant_Name of the institution.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="memesis" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Memesis (Meme Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p className="italic">"Think a meme is just a joke? Think again. Welcome to the Meme Event, where humour meets sharp thinking. No long essays, no boring slides. Just one perfect image and a punchline that hits..."</p>
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Themes:</h4>
                <p className="font-medium">A. The last minute economy | B. The placement paradox | C. Attendance vs academic survival | D. The Election economy | E. Dilemma of Exams</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Open to UG and PG students. Registration and Submission Deadline: 25th January 2027.</li>
                  <li>Max 2 original memes per participant submitted via Google Form (JPG, JPEG, PNG).</li>
                  <li>Existing meme templates permitted with original captions. AI tools strictly prohibited.</li>
                  <li>Must include participant's name, college, contact number, and a short description explaining the idea.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="econmotion" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Econmotion (Reel Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p className="italic">"Got just a few seconds to make the whole room stop scrolling? Welcome to the Reel Event, where your idea has to hook, hit, and stay in just one reel..."</p>
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Topics:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>FOMO as a Market Driver: Manufactured urgency, when fear sets the price.</li>
                  <li>Same Salaries, Different Lives: Same paycheck, different lifestyle across locations.</li>
                  <li>A Generation on Rent: Living on EMIs when permanent assets are inaccessible.</li>
                  <li>Illusion of Free: How businesses use zero pricing to capture markets.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Registration Deadline: 23rd Jan | Submission: 25th Jan 2027 via Registration Google Form.</li>
                  <li>Duration: 30-120 seconds. Format: vertical video (9:16) in mp4. Resolution: 1080p or higher.</li>
                  <li>Individual or teams up to 3 members. One entry per team. AI tools strictly prohibited.</li>
                  <li>Must include a written description (50–100 words).</li>
                  <li>Naming Convention: Econmotion_theme_nameoftheparticipant_universityname</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="fiscal-pix" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Fiscal-Pix (Photography)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Themes:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>Two Indias, One Future: The contrast between traditional and modern India. Urbanisation, infrastructure, rural development.</li>
                  <li>The Unequal Journey, Growth and Its Gaps: Visually explore income inequality, wealth disparities, and unequal opportunities.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Registration Deadline: 23rd Jan | Submission: 25th Jan 2027.</li>
                  <li>High-resolution JPEG/JPG format with EXIF data included.</li>
                  <li>Minor edits only (brightness, contrast, color correction). No heavy manipulation, composites, or AI.</li>
                  <li>Include a short description explaining context in the submission mail.</li>
                  <li><strong>Submission:</strong> Strictly through official email at <a href="mailto:fiscalpix2027@gmail.com" className="text-[#7A5F1C] underline">fiscalpix2027@gmail.com</a>.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="focalibre" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Focalibre (Short Film Making)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Topics:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>How others shape our own decision making.</li>
                  <li>The survival gig we do not look closely enough.</li>
                  <li>The more you have, the less it feels like enough.</li>
                  <li>Born on the wrong side of the starting line.</li>
                  <li>Everything is one click away, yet something is missing.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Registration by Jan 23 | Submission by Jan 25, 2027.</li>
                  <li>Format: horizontal video (1920x1080) as an mp4 file. Duration: 3 to 5 minutes.</li>
                  <li>English/regional language subtitles are mandatory for every film irrespective of language. NO AI use.</li>
                  <li>Include a short caption explaining the core concept.</li>
                  <li><strong>Submission:</strong> Uploaded via Drive link. Naming format: Name of the film_Name of the participants_Name of the institute.</li>
                </ul>
              </div>
            </div>
          </details>

        </div>

        {/* OFFLINE EVENTS SECTION */}
        <h2 className="text-3xl font-extrabold text-[#5B2366] mb-8 flex items-center gap-3 border-b-2 border-[#D4C391] pb-4">
          <span className="text-3xl">📍</span> Offline / Hybrid Events
        </h2>
        
        <div className="space-y-4">
          
          <details id="colloquium" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Colloquium (Paper Presentation)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Topics:</h4>
                <ul className="list-decimal pl-5 space-y-2 font-medium">
                  <li>Is Economic Nationalism Self-defeating: Shrinkage in Global Trading Relations</li>
                  <li>Balancing the Needs of an Expanding Labour Force with Productivity Gains: India's AI Dilemma</li>
                  <li>India's Passport to Gender Equality: The Flexible Gig Economy</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Deadlines & Fees:</h4>
                <p>Registration & Abstract: Dec 28, 2026<br/>Fee Payment (Rs 100/team) upon selection: Jan 19, 2027<br/>Paper and PPT Submission: Feb 3, 2027<br/>Final Presentation (Offline): Feb 5, 2027</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Max 3 participants per team. Cross-college allowed.</li>
                  <li>Abstract must be within 1000 words. Final Paper must be within 5000 words (.pdf or .docx).</li>
                  <li>Max slide limit for presentation is 25 (.pdf or .pptx).</li>
                  <li>10 minutes to present followed by 2 minutes Q&A.</li>
                  <li><strong>Submission:</strong> Email to <a href="mailto:colloquium.yesm27@gmail.com" className="text-[#7A5F1C] underline">colloquium.yesm27@gmail.com</a>. Subject: Abstract_Colloquium_Topic_Team Name (or Paper_Colloquium_Topic_Team Name for final).</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="proffing-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Proffing-It (Mock Classroom)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Open to enrolled Undergraduate students of Economics. Individual participation only.</li>
                  <li>Registration Deadline: 31st January 2027.</li>
                  <li><strong>Prelims (Online on Google Meet):</strong> Topics mailed 48 hours before. 6 minutes to present, 4 minutes Q&A. Must email teaching aids 24 hours prior.</li>
                  <li><strong>Finals (Offline at JU Campus):</strong> Topics mailed 36 hours before. 10 minutes to present, 5 minutes Q&A. Must email teaching aids 12 hours prior.</li>
                  <li>Teaching aids (PPTs, handwritten notes) must be self-prepared. Plagiarism leads to disqualification.</li>
                  <li><strong>Email:</strong> <a href="mailto:proffingityesm27@gmail.com" className="text-[#7A5F1C] underline">proffingityesm27@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </details>

          <details id="resolving-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Resolving It (Case Study Analysis)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Deadlines:</h4>
                <p>Registration: Jan 23 | Case Study Release: Jan 25 | Submission: Jan 27 | Final Presentation: Feb 5, 2027.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Teams must comprise 2 to 4 participants. Cross-college allowed.</li>
                  <li>Submissions in PPTX or PDF format. Max 4 slides permitted, including title and details.</li>
                  <li>Top 8 teams qualify for the final offline presentation (10 min presentation + 3 min Q&A).</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="pitching-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Pitching It (Shark Tank)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Deadlines:</h4>
                <p>Registration: Jan 25 | Prelims Submission: Jan 27 | Final Presentation: Feb 4, 2027.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Rules & Format:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Individual or team up to 3 people. Cross-college allowed.</li>
                  <li>Submissions must be in PPTX format. Max 10 slides.</li>
                  <li>Final offline pitch is 5+1 minutes presentation, followed by 3 minutes Q&A. Negative marking for exceeding time.</li>
                  <li><strong>Submission:</strong> Mail presentations to <a href="mailto:pitchingitju@gmail.com" className="text-[#7A5F1C] underline">pitchingitju@gmail.com</a>. Format: participant’s name _name of the institution.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="equizilibrium" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Equizilibrium (Quiz Competition)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Details & Rules:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Entry Fee: Rs 150 per team. Registration Deadline: Jan 31, 2027.</li>
                  <li>U-25 General Quiz. Max 3 members per team. Lone wolves allowed.</li>
                  <li>Prelims (Feb 4): Written format, 16 questions including 4 Star Questions. Top 6 teams qualify.</li>
                  <li>Finals (Feb 5): Standard rules including pounce-bounce format.</li>
                  <li>Use of unfair means leads to immediate disqualification.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="bid-o-nomics" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Bid-o-nomics: Trade City (Mock IPL Auction)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Details & Rules:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Entry Fee: Rs 200 per team. Registration Deadline: Jan 31, 2027. Final Event: Feb 4.</li>
                  <li>Max 3 players, min 1 player per team.</li>
                  <li><strong>Prelims:</strong> 15 questions written quiz. Top 8 teams qualify. Electronic devices strictly prohibited.</li>
                  <li><strong>Auction:</strong> Virtual budget of ₹80 crores. Squad size: min 12, max 15.</li>
                  <li>Playing XI must include: 3 batsmen, 3 bowlers, 3 all-rounders, 1 wicketkeeper. Max 4 overseas in XI (max 5 overall).</li>
                  <li>Winner decided by highest total pre-assigned rating of the Playing XI.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="ecogency" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Ecogency (Oxford Style Debate)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Details & Rules:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fee: ₹150 per person / ₹300 per team. Registration Deadline: Jan 31, 2027.</li>
                  <li>Teams of two: one For, one Against. Individual registrants randomly paired.</li>
                  <li>Language: Bengali, Hindi, or English. Cannot change mid-round or mid-speech.</li>
                  <li>May refer to notes occasionally, but cannot read everything. Flashcards allowed, digital devices prohibited.</li>
                  <li>Time limits strictly enforced with negative marking for breaches.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="conferencia" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Conferencia (Committee Simulation)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Details & Rules:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Committee: World Trade Organisation (WTO). Official medium: English.</li>
                  <li>Early Bird Fees (ends Jan 8): Rs 550 single / Rs 1000 double.</li>
                  <li>Round 1 Fees: Rs 650 single / Rs 1200 double.</li>
                  <li>Two-day event (Feb 4-5). Dress code: Formal wear for Day 1, Ethnic wear for Day 2.</li>
                  <li>No preliminary round. Allotment on first-come, first-served basis.</li>
                </ul>
              </div>
            </div>
          </details>

          <details id="chaturanga" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <span>Chaturanga (Flagship Event)</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <div>
                <h4 className="font-bold text-[#5B2366] mb-2">Details & Rules:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Registration Deadline: Jan 31, 2027. Prelims: Feb 4 | Finals: Feb 5.</li>
                  <li>Teams of 2 to 3 members. Cross-college allowed.</li>
                  <li>Logic driven puzzles and activities. No prior preparation required.</li>
                  <li>Usage of mobile phones is strictly prohibited. Finalists must provide valid proof of present qualification.</li>
                </ul>
              </div>
            </div>
          </details>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}