
"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect } from "react";

export default function Rulebook() {
  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(hash) as HTMLDetailsElement;
        if (targetElement) {
          targetElement.open = true;
          const y = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
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
              <div className="flex items-center gap-4 flex-wrap">
                <span>Pa-writo (Essay Writing)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:-</strong> It's often said that true impact requires only a few meticulously chosen words, woven with creativity to frame an idea in its most compelling form, and now is your chance to prove it. Pa-Writo is not just an essay writing contest; it is a dedicated arena where the power of your intellect meets the precision of your prose, welcoming every meticulously researched, well-crafted idea you possess. We invite you to elevate your concepts, transforming them into a fine, persuasive fabric of words that captivates and commands attention, making certain your distinct voice and vision find the definitive space they deserve.</p>
              
              <p><strong>TOPICS:</strong><br />
              Green Transition vs. Growth: Can India Build a Developed Economy Without Repeating the Carbon-Intensive Path?<br />
              Chips, Critical Minerals and Cloud: Is Technology the New Currency of Geopolitics and Where does India Stand?<br />
              Her Rupee vs His Rupee: Does Digital Finance Empower Women or Only Digitise Existing Inequalities?</p>

              <p><strong>Mode :-</strong> Online<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>Important dates</strong><br />
              Registration Deadline:12th January 2027<br />
              Submission Deadline:15th January 2027</p>

              <p><strong>RULES AND REGULATIONS:</strong></p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</li>
                <li>Only individual participation is allowed.</li>
                <li>The event will be held online.</li>
                <li>The essay must be written in English.</li>
                <li>Participants must write an essay on any one of the given topics.</li>
                <li>Each participant is allowed to submit only one essay. Multiple submissions from the same participant are strictly prohibited.</li>
                <li>Any plagiarism shall lead to immediate disqualification.</li>
                <li>Usage of AI is prohibited.</li>
                <li>The last date of registration is 12th January 2027, 11:59 p.m. Registration form will close after this.</li>
                <li>Please submit all essays by 15th January 2027, 11:59 p.m. Any submissions after this will not be considered.</li>
                <li>Entries will be evaluated on creativity, originality, humour, theme relevance and presentation. The 1st , 2nd and 3rd prize winners will be announced through the official WhatsApp group.</li>
              </ol>

              <p><strong>ESSAY FORMAT:</strong></p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>The essay must not exceed a word count of 1600 words (including in-text citations but excluding cover page, footnotes, diagram or image captions, tables if any, and end-text citations).</li>
                <li>Participants will receive a participant registration no. via email upon registering. Therefore, at the time of submission, they should clearly mention their participation registration no., topic title along with topic letter, School/ College/ University name, Year of study on the cover page/first page of the essay.</li>
                <li>Participants should submit the essay via email to the designated email address yesm2027pawrito@gmail.com with the subject as ‘Pawrito_Participant’sRegistrationNo._TopicLetter(Eg:- TopicB)’</li>
                <li>Participants should name the pdf as ‘TopicLetter_Participant’sRegistrationNo.’</li>
                <li>Participants should use the APA referencing style to cite other papers and articles.</li>
                <li>The essay must follow the mentioned format: Font – Times New Roman, Font size – 12, Alignment – Justified, Line spacing – 1.5</li>
                <li>Submission should be in .pdf format only.</li>
                <li>The size of the .pdf file should not exceed 5MB.</li>
              </ol>

              <p><strong>Contact:</strong><br />
              Sreejoyee Banerjee +91 98367 24650</p>
            </div>
          </details>

          <details id="artflation" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Artflation (poster making)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description :</strong> Can one poster say what a thousand words cannot? Here, your ideas don't just speak, they shout in colour. No long speeches, no second chances. Just one blank sheet and your imagination.Turn a complex idea into a single visual that stops everyone in their tracks.This is not just art. It is thinking boldly, designing smartly, and making people feel at first glance. Will your poster be the one everyone remembers?</p>
              
              <p><strong>Topics:-</strong><br />
              A. Redefining Humanity in the Age of AI: The changing relationship between humans, machines, creativity and intelligence<br />
              B.The Unfinished Generation : Youth aspirations, uncertainty, opportunity and the changing idea of adulthood.</p>

              <p><strong>Mode :-</strong> Online<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>Important dates</strong><br />
              Registration Deadline: 23rd January 2027<br />
              Submission Deadline: 25th January 2027</p>

              <p><strong>RULES AND GUIDELINES FOR POSTER MAKING</strong><br />
              1. Originality and Creativity<br />All posters must be original and independently created by the participants using digital tools. Plagiarism or copying of existing artwork is strictly prohibited.<br />
              2. Prohibition of AI Tools<br />The use of Artificial Intelligence (AI) tools for generating, designing, editing, or creating any part of the poster is strictly prohibited. All creative work must be done independently by the participant.<br />
              3. Freedom of Software<br />Participants are free to use any digital application or designing software of their choice.<br />
              4. Submission Format and Quality<br />Posters must be submitted in digital format (JPEG, PNG, or PDF) with a minimum resolution of 300 DPI to ensure good visual quality.<br />
              5. Poster Dimensions<br />The poster must follow any ONE of the following standard dimensions: - A3 - A4 - 16:9 aspect ratio<br />
              6. Anonymity and Watermarks<br />Participants must not include their names, signatures, watermarks, or any other identifying information anywhere on the poster.<br />
              7. Content and Theme Appropriateness<br />All submissions must be relevant to the given theme. Any poster containing offensive, inappropriate, discriminatory, or objectionable content will be disqualified.<br />
              8. Thematic Text and Messaging<br />Every poster must include a short textual message or tagline, in any language, that clearly communicates and reflects the given theme.<br />
              9. Written Description<br />Each submission must be accompanied by a brief description of 50–100 words explaining the concept, creative idea, and its connection to the given theme.<br />
              10. Verification of Originality and Editing Process<br />Participants may be asked to provide screenshots of their work-in-progress in the designing software, clearly showing the editing workspace, layers, and other relevant elements. These may be requested by the organisers at any stage to verify the authenticity and originality of the submitted artwork. Participants are therefore advised to retain their project files and intermediate versions until the competition results are declared.<br />
              11.JUDGING & RESULTS: Entries will be evaluated on creativity, originality, humour, theme relevance and presentation. The 1st, 2nd and 3rd prize winners will be announced through the official WhatsApp group.<br />
              12. COPYRIGHT & FINAL DECISION: The organisers reserve the right to use submitted memes for fest-related promotional purposes, with due credit to the creators. The decision of the judges and organising committee will be final.</p>

              <p><strong>Submission Guideline</strong><br />
              The final poster has to be mailed at artflation2027@gmail.com within 25th January.<br />
              The email subject line and file name must strictly follow the format: artflation_NameOfParticipant_Name of the institution</p>

              <p><strong>Contact:</strong><br />
              Kaninika Roy +91 79801 77052<br />
              Souvik Roy +91 81589 57529</p>
            </div>
          </details>

          <details id="memesis" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Memesis (meme making)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:-</strong>Think a meme is just a joke? Think again. Welcome to the Meme Event, where humour meets sharp thinking. No long essays, no boring slides. Just one perfect image and a punchline that hits.Turn a trending moment, a classroom struggle, or a world issue into a meme everyone gets instantly. This is not just laughing. It is thinking fast, observing sharply, and roasting smartly. Will your meme be the one everyone shares?</p>

              <p><strong>Themes :-</strong><br />A.The last minute economy<br />B.The placement paradox<br />C. Attendance vs academic survival<br />D. The Election economy<br />E. Dilemma of Exams</p>

              <p><strong>MODE:</strong> Online<br />
              <strong>ELIGIBILITY & REGISTRATION:</strong> Open to undergraduate and postgraduate students of all disciplines. Participants must complete the official Google Form, which will serve as both the registration and meme submission platform.</p>

              <p><strong>Important dates</strong><br />
              Registration and Submission Deadline: 25th January 2027</p>

              <p><strong>Rules and Regulations</strong><br />
              <strong>SUBMISSION GUIDELINES:</strong> Each participant may submit a maximum of 2 original memes through the Google Form on or before 10 January 2027. Late submissions will not be accepted. Entries must be in JPG, JPEG or PNG format and include the participant's name, college name and contact number. Participants must also provide a short description explaining the idea or context behind each meme.<br />
              <strong>THEMES & CONTENT:</strong> Participants may choose other topics related to Economics. However entries relevant to the given themes will carry extra marks. Entries must contain original creative content. Existing meme templates are permitted with original captions. Obscene, hateful, discriminatory, defamatory or inappropriate content is prohibited.<br />
              <strong>PROHIBITION OF AI TOOLS:-</strong>The use of Artificial Intelligence (AI) tools for generating, designing, editing, or creating any part of the poster is strictly prohibited. All creative work must be done independently by the participant.<br />
              <strong>JUDGING & RESULTS:</strong> Entries will be evaluated on creativity, originality, humour, theme relevance and presentation. The 1st, 2nd and 3rd prize winners will be announced through the official WhatsApp group.<br />
              <strong>COPYRIGHT & FINAL DECISION:</strong> The organisers reserve the right to use submitted memes for fest-related promotional purposes, with due credit to the creators. The decision of the judges and organising committee will be final.</p>

              <p><strong>Contact:</strong><br />
              Sneha Chatterjee +91 90734 91245</p>
            </div>
          </details>

          <details id="econmotion" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Econmotion (Reel Making)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description :</strong>Got just a few seconds to make the whole room stop scrolling? Welcome to the Reel Event, where your idea has to hook, hit, and stay in just one reel. No second takes for attention. Just your camera, your creativity, and your story. Turn an everyday moment into a viral-worthy reel that everyone wants to replay. This is not just filming. It is thinking fast, editing smartly, and entertaining boldly. Will your reel be the one everyone can't stop watching?</p>

              <p><strong>Mode :-</strong> Online<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>Important dates</strong><br />
              Registration Deadline: 23rd January 2027<br />
              Submission Deadline: 25th January 2027</p>

              <p><strong>TOPICS</strong><br />
              1.​ FOMO as a Market Driver : Manufactured urgency, when the fear of missing out sets the market price.<br />
              2.SAME SALARIES,DIFFERENT LIVES : Earning the same paycheck doesn't mean the same lifestyle in two different locations.<br />
              3.A GENERATION ON RENT : When buying permanent asset becomes inaccessible people end up living on EMIs.<br />
              4.ILLUSION OF FREE :How businesses use zero pricing to capture markets, influence purchasing behaviour of consumers.</p>

              <p><strong>Video requirement :</strong><br />
              1.Duration :30-120 seconds<br />
              2.Format:vertical video(9:16) in mp4 format<br />
              3.Recommended Resolution: 1080p or higher.</p>

              <p><strong>RULES AND REGULATIONS</strong><br />
              1.Eligibility :High-school(+2),undergraduate and postgraduate students from all streams,amateur,professionals.<br />
              2.Participation : individual or in teams of up to 3 members. Each Participant/team must submit only one entry.<br />
              3.Registration :Participants need to register themselves first through the google forms.<br />
              4.Submission :The submission files are to be uploaded in the registration form.<br />
              5.Naming Convention: Submission file must follow the format:Econmotion_theme_nameoftheparticipant_universityname<br />
              6. Written Description : Each submission must be accompanied by a brief description of 50–100 words explaining the concept, creative idea, and its connection to the given theme.</p>

              <p><strong>IMPORTANT INFORMATION</strong><br />
              1.Content Guidelines :All submissions must be original and not infringe on any third party rights. Offensive,sensitive,or inappropriate language and copied content are strictly prohibited. Use of any AI tools are strictly prohibited.<br />
              2.Copyright Usage Rights :Participants grant organisers permission to use work for promotional purposes.(With Credit)<br />
              3.Judging Criteria :Entries will be judged on creativity,adherence to theme,technical skill and overall impact.<br />
              4.Evaluation Criteria: Submissions on other economics-related topics are welcome; however, submissions aligned with the listed themes will be accorded higher priority.</p>

              <p><strong>Contact:</strong><br />
              Sashwati Saha +91 81005 33947<br />Email: sashsaha21@gmail.com</p>
            </div>
          </details>

          <details id="fiscal-pix" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Fiscal -Pix ( Photography)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong>  Do you think a picture is worth a thousand words? What if it's a poster, a reel or maybe a short film? Can you become the ultimate storyteller of the society? The one whose words flow through pixels? Our event Fiscal-pix is just for you then; come join us and show us your skill. Let us see how good you are at capturing life with your eyes, thoughts and screens.</p>

              <p><strong>Mode :-</strong> Online<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>Theme:</strong><br />
              A. Two Indias, One Future :The contrast between traditional India and modern India. Capture urbanisation, infrastructure, rural development and changing lifestyles.<br />
              B. The Unequal Journey ,Growth and Its Gaps : Visually explore income inequality, wealth disparities, access to education, employment and unequal opportunities.</p>

              <p><strong>Important dates</strong><br />
              Registration Deadline: 23rd January 2027<br />
              Submission Deadline: 25th January 2027</p>

              <p><strong>RULES AND REGULATIONS</strong><br />
              ELIGIBILITY: OPEN TO ALL (HIGHSCHOOL (+2), UG, PG, AMATEUR, PROFESSIONAL).<br />
              - REGISTRATION: MUST REGISTER FIRST VIA GOOGLE FORMS.<br />
              - SUBMISSION: STRICTLY THROUGH THE OFFICIAL EMAIL at fiscalpix2027@gmail.com A CONFIRMATION MAIL WILL FOLLOW.<br />
              - FORMAT: HIGH-RESOLUTION JPEG/JPG FORMAT.<br />
              - DATA: MUST INCLUDE EXIF DATA.<br />
              - EDITING: MINOR EDITS ONLY (BRIGHTNESS, CONTRAST, COLOR CORRECTION). NO HEAVY MANIPULATION OR COMPOSITES.<br />
              - CAPTION: INCLUDE A SHORT DESCRIPTION EXPLAINING THE CONTEXT/CONNECTION TO THE THEME IN THE SUBMISSION MAIL.<br />
              - ORIGINALITY: ENTRIES MUST BE 100% ORIGINAL AND NOT INFRINGE ON ANY THIRD-PARTY RIGHTS. NO USE OF AI.<br />
              - CONTENT: NO OFFENSIVE, VIOLENT, OR ILLEGAL MATERIAL (DISQUALIFICATION RISK).<br />
              - JUDGING CRITERIA: CREATIVITY, ADHERENCE TO THE THEME, TECHNICAL SKILL, AND OVERALL IMPACT.<br />
              - USAGE RIGHTS: PARTICIPANTS GRANT ORGANIZERS PERMISSION TO USE WORK FOR PROMOTIONAL PURPOSES (WITH CREDIT).</p>

              <p><strong>Contact:</strong><br />
              Shawanee Dutta +91 94744 43938</p>
            </div>
          </details>

          <details id="focalibre" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Focalibre ( Short Film Making )</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong> Can a few minutes change how someone sees the world? Welcome to the Short Film Event, where every frame tells a story and every second matters.No big budgets, no long runtimes. Just your vision, your characters, and your voice.Turn a simple idea into a powerful film that makes people laugh, think, or feel something real.This is not just shooting video. It is storytelling boldly, directing smartly, and moving hearts. Will your film be the one everyone keeps talking about?</p>

              <p><strong>Mode :-</strong> Online<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>Topic</strong><br />
              1.How others shape our own decision making.<br />
              2.The survival gig we do not look closely enough.<br />
              3.The more you have, the less it feels like enough.<br />
              4.Born on the wrong side of the starting line<br />
              5.Everything is one click away, yet something is missing</p>

              <p><strong>Important dates</strong><br />
              Registration Deadline: 23rd January 2027<br />
              Submission Deadline: 25th January 2027</p>

              <p><strong>Rules and regulations</strong><br />
              1.Format - horizontal video(1920-1080 resolution) as a mp4 file. Submission details: The film is to be uploaded in a drive link , in the following format: Name of the film_Name of the participants_Name of the institute<br />
              2.Duration - must be between 3 to 5 minutes in length<br />
              3.Script/Dialogue - language must be clear and appropriate.<br />
              4.Subtitles - English/ regional language subtitles are mandatory for every film irrespective of its language<br />
              5.Submission on other economics related topics are also welcomed but we request everyone to follow the given topics as doing so carries additional points.<br />
              6.USAGE RIGHTS: PARTICIPANTS GRANT ORGANIZERS PERMISSION TO USE WORK FOR PROMOTIONAL PURPOSES (WITH CREDIT).<br />
              7.ORIGINALITY: ENTRIES MUST BE 100% ORIGINAL AND NOT INFRINGE ON ANY THIRD-PARTY RIGHTS. NO USE OF AI.<br />
              8 .CAPTION: INCLUDE A SHORT DESCRIPTION EXPLAINING THE core concept of the film and it's connection to the given topic.<br />
              8.JUDGING CRITERIA: CREATIVITY, ADHERENCE TO THE THEME, TECHNICAL SKILL, AND OVERALL IMPACT.</p>

              <p><strong>Contact:</strong><br />
              Hrishav Chakraborty +91 93302 91758</p>
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
              <div className="flex items-center gap-4 flex-wrap">
                <span>Colloquium ( Paper Presentation)</span>
                <span className="bg-[#D4C391] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Fees Apply</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:-</strong>  Welcome to Colloquium, where ideas take centre stage and young economists make their mark. This paper-presentation forum of YESM invites sharp minds to showcase original research, challenge conventional thinking, and spark meaningful debate. Colloquium isn't just an academic event, it's a space for curiosity, creativity, and courageous inquiry. Here, every analysis matters, every insight counts, and every voice shapes the conversation. Let your ideas lead.</p>

              <p><strong>Mode :-</strong> Hybrid<br />
              <strong>Eligibility:-</strong> The event is open to enrolled undergraduate and postgraduate students of any discipline.</p>

              <p><strong>TOPICS:</strong><br />
              1. Is Economic Nationalism Self-defeating: Shrinkage in Global Trading Relations<br />
              2. Balancing the Needs of an Expanding Labour Force with Productivity Gains: India's AI Dilemma<br />
              3. India's Passport to Gender Equality: The Flexible Gig Economy</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 28th December, 2026<br />
              2. Abstract Submission Deadline: 28th December, 2026<br />
              3. Registration Fee Payment (upon selection) Deadline: 19th January , 2027<br />
              4. Paper and PPT Submission Deadline : 3rd February, 2027<br />
              5. Final Presentation: 5th February, 2027</p>

              <p><strong>Rules and Regulations:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The event is open to undergraduate/graduate students of all disciplines.</li>
                <li>Cross-college/university teams are allowed.</li>
                <li>Each team can have a maximum of 3 participants.</li>
                <li>Registrations and submissions(both abstract and paper) will be done online. Registration needs to be completed via this Google Form prior to abstract submission.</li>
                <li>Participants will be selected based on a written abstract on the chosen topic.</li>
                <li>The abstract needs to be submitted by 28th December 2026.</li>
                <li>The abstract needs to be within 1000 words.</li>
                <li>Selected participants will be informed via mail by 4th January 2027. They will have to pay a registration fee of Rs 100 per team between 5th January and 19th January 2027.</li>
                <li>The completed paper and presentations need to be submitted by 3rd February 2027.</li>
                <li>The paper needs to be in either .pdf or .docx format.</li>
                <li>The paper has to be within 5000 words.</li>
                <li>The maximum slide limit for the presentation is 25 and it should be sent in either .pdf or .pptx format.</li>
                <li>All submissions must be via mail to colloquium.yesm27@gmail.com . The mails should have the following in the subject: Abstract_Colloquium_Topic_Team Name for abstract submission and Paper_Colloquium_Topic_Team Name for the Paper and PPT submission.</li>
                <li>The participant(s) will be allowed 10 minutes to present their paper which will be followed by 2 minutes for a question and answer session.</li>
                <li>The finals will be held in person at the Jadavpur University campus.</li>
              </ul>
              
              <p><strong>Contact:</strong><br />
              Adrijeeta Majumder +91 90731 86563<br />
              Saimili Banerjee +91 74391 25473</p>
            </div>
          </details>

          <details id="proffing-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Mock Classroom (Proffing-It)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description :</strong> Have you ever been consumed by an idea, one that demands to be shared—a concept so vital it compels you to trade your seat for the podium? If you're ready to seize control, to move decisively to the 'other side of the table' and truly dictate the conversation, then 'Proffing It' is your high-impact launchpad. Forget simply teaching; this is your challenge to preach and persuade an audience, requiring you to confidently step up and "take a class" on a pre-assigned topic. This opportunity is designed to transform you from a spectator into the ultimate thought leader. Unleash your expertise and experience the power of the room—it's pure, exhilarating fun!</p>
              
              <p><strong>Mode :-</strong> Hybrid<br />
              <strong>Eligibility:-</strong> The event is open to enrolled undergraduate and postgraduate students of any discipline.</p>

              <p><strong>PRELIMINARY ROUND</strong><br />
              1.TOPICS FOR THE PRELIMS SHALL BE MAILED TO THE PARTICIPANTS 48 HOURS BEFORE THE EVENT.<br />
              2. THERE WILL BE 4 SUCH TOPICS FROM UNDERGRADUATE-LEVEL ECONOMICS. THE PARTICIPANT WILL HAVE TO CHOOSE A TOPIC AND DELIVER A LECTURE ON THE SAME.<br />
              3. PARTICIPANT SHALL BE GIVEN 6 MINUTES TO PRESENT THEIR LECTURES, FOLLOWED BY A 4 MINUTE Q&A SESSION BY THE JUDGES AND THE MOCK STUDENTS BASED ON WHAT HAS BEEN TAUGHT<br />
              4. THE PARTICIPANTS MUST MAIL US THEIR TEACHING AIDS (IF USING) AT proffingityesm27@gmail.com 24 HOURS BEFORE THE PRELIMS FOR A PLAGIARISM CHECK. FAILING TO DO SO MAY LEAD TO DISQUALIFICATION. THE DECISION OF THE JUDGES SHALL BE FINAL AND BINDING.</p>

              <p><strong>FINAL ROUND</strong><br />
              1. TOPICS FOR THE FINALS SHALL BE MAILED TO THE QUALIFYING PARTICIPANTS 36 HOURS BEFORE THE EVENT.<br />
              2. THERE WILL BE 2 SUCH TOPICS FROM UNDERGRADUATE-LEVEL ECONOMICS. THE PARTICIPANT WILL HAVE TO CHOOSE A TOPIC AND DELIVER A LECTUREON THE SAME.<br />
              3. EACH PARTICIPANT SHALL BE GIVEN 10 MINUTES TO PRESENT THEIR LECTURES, FOLLOWED BY A 5 MINUTEQ&A SESSION BY THE JUDGES AND MOCK STUDENTS BASED ON WHAT HAS BEEN TAUGHT.<br />
              4. THE PARTICIPANTS MUST MAIL US THEIR TEACHING AIDS (IF USING) AT proffingityesm27@gmail.com 12 HOURS BEFORE THE FINAL FOR A PLAGIARISM CHECK. FAILING TO DO SO MAY LEAD TO DISQUALIFICATION. THE DECISION OF THE JUDGES SHALL BE FINAL AND BINDING.</p>

              <p><strong>RULES AND REGULATIONS</strong><br />
              1. THIS EVENT IS OPEN TO ENROLLED UNDERGRADUATE STUDENTS OF ECONOMICS.<br />
              2. ONLY INDIVIDUAL PARTICIPANTS ARE ALLOWED<br />
              3. THE PRELIMINARY ROUND SHALL BE CONDUCTED ONLINE AND WILL BE HOSTED ON GOOGLE MEET.<br />
              4. EACH PARTICIPANT SHALL BE REQUIRED TO KEEP THEIR VIDEO ON DURING THEIR PRESENTATION.<br />
              5. PARTICIPANTS MAY TAKE THE HELP OF A BLACKBOARD OR ONLINE JAMBOARD, IF THEY WISH.<br />
              6. THE FINAL ROUND SHALL BE CONDUCTED IN-PERSON IN THE JADAVPUR UNIVERSITY CAMPUS. IN THE FINAL ROUND, PARTICIPANTS MAY TAKE THE HELP OF THE PROVIDED BLACKBOARD.IF THEY WISH.<br />
              7. PARTICIPANTS SHALL ALSO BE ALLOWED TO USE TEACHING AIDS LIKE PPTS.WORD DOCUMENTS SCANNED COPIES OF HANDWRITTEN NOTES ETC. DURING BOTH ROUNDS PROVIDED THAT THEY ARE SELF-PREPARED ANY PLAGIARISM SHALL LEAD TO IMMEDIATE DISQUALIFICATION.<br />
              8. THE LAST DATE FOR REGISTRATION IS 31ST JANUARY, 2027.</p>

              <p><strong>Contact:</strong><br />
              Krishnendu Ghosh +91 6295 193 364<br />
              Shirshajit Mukherjee +91 90516 70058</p>
            </div>
          </details>

          <details id="resolving-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Resolving It ( Case Study Analysis)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong> When problems arise out of thin air, there's always a mind ready to tackle them with logic, creativity and strategy. Whether it's a business dilemma or a real world challenge, can you analyse the situation, think beyond conventional solutions and present an effective way forward? If so, RESOLVING IT is the perfect event to put your problem solving abilities to the test.</p>

              <p><strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled undergraduate and postgraduate students of any discipline.</p>

              <p><strong>ROUND 1 CASE STUDY SUBMISSION</strong><br />
              Participants will be provided with a case study prompt and will be required to analyse the given problem, identify its underlying challenges and develop a structured solution. Teams must submit their case analysis in the prescribed format within the stipulated deadline. The top 8 teams will qualify for the final round.</p>

              <p><strong>ROUND 2 FINAL CASE PRESENTATION</strong><br />
              The shortlisted teams will present their proposed solutions before a panel of judges at Jadavpur University.<br />
              1. Each team will get 10 minutes to present their analysis and proposed solution.<br />
              2. This will be followed by a 3-minute Q&A session, during which judges will evaluate the participants' understanding of the case and their ability to defend their recommendations.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 23rd January, 2027<br />
              2. Case Study Release: 25th January, 2027<br />
              3. Case Study Submission Deadline: 27th January, 2027<br />
              4. Final Presentation: 5th February, 2027</p>

              <p><strong>IMPORTANT INFORMATION</strong><br />
              1. Participants must register through Unstop or the official Google Form to be eligible for the competition.<br />
              2. All submissions must be made in either PPTX or PDF format.<br />
              3. The maximum number of slides permitted is 4, including the title slide and participant details.<br />
              4. All case study submissions must be made within the stipulated deadline.<br />
              5. The final presentation round will be conducted offline at the Jadavpur University Main Campus.</p>

              <p><strong>RULES & REGULATIONS</strong><br />
              1. The event is open to undergraduate and postgraduate students of any discipline.<br />
              2. Teams must comprise a minimum of 2 and a maximum of 4 participants. Individual participation will not be permitted.<br />
              3. Cross-college teams are allowed to participate.<br />
              4. Each participant may register and participate in only one team.<br />
              5. The top 8 teams selected from the submission round will qualify for the final presentation round.<br />
              6. The decision of the organising committee and judging panel will be final.<br />
              7. Additional guidelines will be communicated to participants upon registration.</p>

              <p><strong>Contact:</strong><br />
              Oyshi Mukherjee +91 89109 59991<br />
              Kingshuk Bhandary +91 62911 08578</p>
            </div>
          </details>

          <details id="pitching-it" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Pitching It (Shark Tank)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong> Got a groundbreaking startup idea, a unique product, or a service that can disrupt the market? Whether you are building the next big venture or a sustainable social enterprise, can you pitch your vision with conviction and win over the investors? If so, SHARK TANK is the ultimate platform to showcase your entrepreneurial spirit and business acumen.</p>

              <p><strong>Mode :-</strong> Hybrid<br />
              <strong>Eligibility:-</strong> The event is open to enrolled undergraduate and postgraduate students of any discipline.</p>

              <p><strong>ROUND 1 PRELIMS</strong><br />
              Participants are free to present startup ideas on any topic, domain, or sector of their choice, provided it aligns with the Content Guidelines.Teams must submit their ideas in the prescribed format within the stipulated deadline.Teams that qualify for the final round will be notified via email.</p>

              <p><strong>ROUND 2 FINAL PITCH PRESENTATION</strong><br />
              1.The shortlisted teams will pitch the same idea submitted in the Prelims before a panel of judges.<br />
              2. Each team will get a 5+1 minute presentation window, followed by a 3-minute Q&A session. Presentations can include prototypes, digital presentations, or other creative methods.<br />
              3.Exceeding the allotted time while presenting will result in negative marking.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 25th January , 2027<br />
              2. Prelims Submission Deadline: 27th January, 2027<br />
              3. Final Presentation: 4th February, 2027</p>

              <p><strong>IMPORTANT INFORMATION</strong><br />
              1. Participants must register through the official Google Form to be eligible for the competition.<br />
              2.All submissions must be made in PPTX format.<br />
              3.The maximum number of slides permitted is 10.<br />
              4. Participants need to mail their presentations by the 27th January to pitchingitju@gmail.com in the format : participant’s name _name of the institution. A confirmation mail will follow.<br />
              5.The final presentation round will be conducted offline at the Jadavpur University Main Campus.</p>

              <p><strong>RULES & REGULATIONS</strong><br />
              1.The event is open to undergraduate and postgraduate students from any stream or discipline.<br />
              2.Participation can be individual or in a team of up to 3 people. Cross-college teams are allowed.<br />
              3. Each participant may register and participate in only one team.<br />
              4.Ideas can belong to any domain or sector and can be either product or service-based. All ideas must be the original, practical, and implementable work of the participants; any form of plagiarism or misrepresentation will lead to immediate disqualification.<br />
              5.Entries will be evaluated based on the novelty and market viability of the idea, presentation clarity and engagement, and how effectively the team addresses judges' queries during the Q&A.<br />
              6. The organizers reserve the right to modify rules with prior notification. The decision of the organizing committee and judging panel will be final and binding.</p>

              <p><strong>Contact:</strong><br />
              Sumedha Kar +91 93302 96249<br />
              Anshuman Barick +91 70443 57105</p>
            </div>
          </details>

          <details id="equizilibrium" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Equizilibrium Quiz Competition</span>
                <span className="bg-[#D4C391] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">₹150 / team</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:-</strong><br />
              EQUIZILIBRIUM, presented by the Department of Economics, is a U-25 General Quiz that celebrates the spirit of knowledge, wit and intellectual curiosity. A quiz is more than just a contest of questions and answers; it is a delightful interplay of wisdom, trivia and analytical thinking. It challenges the mind, sharpens memory, tests awareness and celebrates the art of thinking on one's feet. From fascinating facts to intriguing mysteries, every question sparks curiosity and every answer unfolds a new discovery. Ultimately, it is a celebration of knowledge, quick thinking and the spirit of healthy competition.</p>

              <p><strong>Entry Fee:</strong> Rs 150 per team<br />
              <strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 31st January , 2027<br />
              2. Preliminary Event: 4th February, 2027<br />
              3. Final Event : 5th February,2027</p>

              <p><strong>QUIZ FORMAT</strong><br />
              1. The quiz will consist of two rounds- the preliminary round and final round<br />
              2. The preliminary round will be in written format. Questions will appear on the screen and teams will have to write the answers on a given white paper.<br />
              3. The Preliminary Round will consist of 16 questions, including 4 Star Questions.<br />
              4. In the event of a tie, the number of starred questions answered correctly will be used to break the tie.<br />
              5. If the tie persists, then we check spellings.<br />
              6. If all the above two fail to conclude finalists then some extra questions will be incorporated as the ultimate tie-breaker instrument.<br />
              7. The top 6 teams will qualify for the final stage.<br />
              8. All the standard rules including the pounce-bounce format will be followed in the final round.</p>

              <p><strong>Rules & Regulations:</strong><br />
              1. The event is a U-25 general quiz.<br />
              2. Each team can have a maximum of 3 members. Lone wolves are also allowed to participate.<br />
              3. Cross college/university teams are allowed.<br />
              4. No restrictions on the number of teams from one college/university/institution.<br />
              5. The entire event will be conducted in-person at the Jadavpur University main campus.<br />
              6. The decision of the quizmaster is final with regard to the questions and scoring.<br />
              7. Anyone who resorts to unfair means during the quiz will have their team disqualified.<br />
              8. Last date of registration is 31st January 2027, 11:59pm. Registration form will close after this.</p>

              <p><strong>Contact:</strong><br />
              Souptik Mondal +91 84369 20336<br />
              Bibhu Prasad Rakshit +91 93397 98776</p>
            </div>
          </details>

          <details id="bid-o-nomics" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Bid-o-nomics: Trade City (Mock IPL auction)</span>
                <span className="bg-[#D4C391] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">₹200 / team</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong> Think you know cricket? Think you can trade smarter than the rest? Here's your chance to prove it! From a quick-fire cricket quiz to building your dream IPL squad with a ₹80 crore purse- it's brains, bids, and bold moves all the way. Quiz. Bid. Conquer. The pitch is yours!</p>

              <p><strong>Participation Fees :</strong> ₹200 per team<br />
              <strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2),undergraduate and postgraduate students of any discipline.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 31st January , 2027<br />
              2. Final Event: 4th February, 2027</p>

              <p><strong>PRELIMINARY ROUND</strong><br />
              1. The Preliminary Round will be conducted if the total number of participating teams exceeds eight (8).<br />
              2. A total of 15 questions will be provided, with five (5) star-marked questions carrying additional importance.<br />
              3. The quiz will comprehensively cover various formats and events of cricket.<br />
              4. In the event of a tie, accuracy in the star-marked questions will be considered to judge. If a tie still persists, a quick-fire round will be conducted on the spot among the tied teams.<br />
              5. Each team must consist of maximum three players and minimum one player. Last date for registration is 31st January.Registration form will close after this.<br />
              6. Cross-college teams are allowed.<br />
              7. The top 8 teams with the highest scores in the Preliminary Round will qualify for the Auction Round.<br />
              8. Electronic devices such as mobile phones, Bluetooth devices, or laptops are strictly prohibited during the Preliminary Round. If any usage of such devices comes to notice, the particular team will be disqualified immediately.<br />
              9. Based on their ranking in the Preliminary Round, teams will have the liberty to select their preferred IPL franchises for the next stage.<br />
              10. The decision of the Organizing Committee shall be final and binding on all participants.</p>

              <p><strong>AUCTION ROUND</strong><br />
              1. Each qualified team will be allocated a virtual budget of ₹80 crores.<br />
              2. Every team must include at least 3 batsmen, 3 bowlers, 3 all-rounders, and 1 wicketkeeper in the Playing XI.<br />
              3. Teams must build a squad of a minimum of 12 and a maximum of 15 players.<br />
              4. The Playing XI can include a maximum of 4 overseas players, while the overall squad can have up to 5 overseas players.<br />
              5. Failure to adhere to the above criteria will result in disqualification.<br />
              6. Each player in the auction will carry a pre-assigned rating out of 10.<br />
              7. The team whose Playing XI achieves the highest total rating will be declared the Winner.<br />
              8. Other auction-related rules will be disclosed on the day of the event.</p>

              <p><strong>Contact:</strong><br />
              Abhinabha Paul +91 74390 82934<br />
              Ankit Das +91 74393 05156<br />
              Tiasa Kundu +91 93300 17485</p>
            </div>
          </details>

          <details id="ecogency" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Ecogency (Oxford Style Debate)</span>
                <span className="bg-[#D4C391] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">₹150/person | ₹300/team</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description :</strong> Do you believe one argument can change an entire room? In the Oxford Style Debate, there is no middle ground - you are either For the motion, or Against it. Here, words are weapons and logic is your armour.You must think on your feet, dismantle your opponent in seconds, and build a case no one can ignore. This is not just speaking well. It is thinking faster, arguing smarter, and owning the room. Will you stand your ground, or will you be swayed?</p>

              <p><strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 31st January , 2027<br />
              2. Preliminary Event: 4th February, 2027<br />
              3. Final Event : 5th February,2027</p>

              <p><strong>Participation Fees:</strong> ₹150 per person and ₹300 per team</p>

              <p><strong>Rules and regulations</strong><br />
              1. Each team must have two members, one speaking for the motion and one against the motion. Participants can register either individually or as a team.<br />
              2. The registration fee is ₹150 per person for individual registrations and ₹300 per person for team registrations. Individuals who register will be randomly paired with another competitor.<br />
                 * Participants may be from any department or institute.<br />
                 * Cross-departmental or cross-institute teams are allowed.<br />
                 * Participants should be enrolled in a UG or PG course.<br />
              3. The last date of registration is 31st January,2027.<br />
              4. Speakers may choose to deliver their speeches in Bengali, Hindi, or English. However, changing the language in the middle of a round or during a speech is strictly prohibited.<br />
              5. The use of any unparliamentary words, derogatory remarks, or racist comments is strictly forbidden.<br />
              6. The judges' decision will be final and binding.<br />
              7. The event will follow Oxford style debate rules. Detailed rules will be communicated via email after registration.<br />
              8. Participants may refer to notes occasionally but they are not allowed to read out everything from their notes. Participants are not allowed to refer to any digital devices, like smartphones, tabs, etc.while delivering their speech. However, the use of flashcards is allowed.<br />
              9. The time limit should be strictly adhered to, and any breach of the same will lead to negative marking.</p>

              <p><strong>Contact:</strong><br />
              Adwitiyo Bandyopadhyay +91 74392 58182<br />
              Rannvijay Roy +91 87775 89805<br />
              Shiladitya Banerjee +91 97486 18583</p>
            </div>
          </details>

          <details id="conferencia" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Conferencia (MUN Committee stimulation)</span>
                <span className="bg-[#D4C391] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Fees Apply</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description :</strong> Drawing inspiration from the MUN formats you know, Conferencia brings you a dynamic committee-style simulation, but with the freedom to go far beyond traditional UN committees. If sharp research, persuasive diplomacy, and powerful speaking excite you, then Conferencia is exactly where you'll want to be!</p>

              <p><strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Early Bird Registration Deadlines: 31st January , 2027<br />
              2. Dates of Event: 4th and 5th February, 2027</p>
              
              <p><strong>Committee: World Trade Organisation (WTO)</strong><br />
              The World Trade Organization (WTO) is the only international organization dealing with the rules of trade between nations. At its heart are the WTO agreements, negotiated and signed by the bulk of the world’s trading nations and ratified in their parliaments. The fundamental goal of the WTO, as set out in the organization's founding agreement, is to use trade as a means to improve people's living standards, create better jobs and promote sustainable development.</p>

              <p><strong>Rules and Regulations</strong><br />
              1. It will be a two day event<br />
              2. Eligibility: High School(+2), undergraduate, and postgraduate students of any discipline<br />
              3. Registration fees: <br />
              Early Bird Registration: Rs 550(single delegation) and Rs 1000(double delegation)<br />
              Round 1 Registration: ₹ 650(single delegation) and ₹1200(double delegation)<br />
              4. Early bird registration ends on the 8th of January<br />
              5. Allotment will be on a first-come, first-served basis<br />
              6. English will be used as the official medium of communication<br />
              7. There will be no preliminary round for this event<br />
              8. A basic study guide/ background guide will be given to all the participants for their perusal. The executive board will explain the rules of procedure on the first day of the event, or over an online meeting prior to the days of the event.<br />
              9. Formal wear for the first day, ethnic wear for the second day<br />
              10. Participants can participate in other online events.</p>

              <p><strong>Contact:</strong><br />
              Abhirupak Chattopadhyay +91 91473 17924<br />
              Jaita Bhowmik +91 93304 27674</p>
            </div>
          </details>

          <details id="chaturanga" className="group bg-white rounded-xl border border-[#E5DFD3] shadow-sm overflow-hidden scroll-mt-24">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-[#5B2366] hover:bg-[#F8F5F2] transition-colors">
              <div className="flex items-center gap-4 flex-wrap">
                <span>Chaturanga (Flagship Events)</span>
                <span className="bg-[#E5DFD3] text-[#5B2366] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Free</span>
              </div>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-[#E5DFD3] text-[#4A4545] space-y-6 text-sm bg-[#F8F5F2]/50">
              <p><strong>Description:</strong>   The stage is set for you to express the witty and strategic side that you use to navigate daily life. Prepare to unlock the vault of your mind to untangle intricate logic driven puzzles and activities. Here, every move you make; every decision you take is crucial. The game's secrets remain hidden until the ultimate showdown, challenging you to channel your inner thrill and curiosity. Will you emerge victorious?</p>

              <p><strong>Mode :-</strong> Offline<br />
              <strong>Eligibility:-</strong> The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.</p>

              <p><strong>IMPORTANT DATES</strong><br />
              1. Registration Deadline: 31st January , 2027<br />
              2. Preliminary Event: 4th February, 2027<br />
              3. Final Event : 5th February,2027</p>

              <p><strong>Rules:</strong><br />
              1. The event is open to enrolled high school (+2), undergraduate and postgraduate students of any discipline.<br />
              2. Each team should have a minimum of 2 and a maximum of 3 members. A team can comprise from different schools and colleges.<br />
              3. Usage of mobile phones is strictly prohibited.<br />
              4. It will be a two-day event with all participants playing in the preliminary round on the first day. The qualifying teams will play the final round on the final day. No prior preparation required.<br />
              5. There is no limit to the number of teams enrolling from a particular institution.<br />
              6. Finalists will be required to provide the organizers with valid proof of their present qualification.<br />
              Note: Further details will be given prior to the event.</p>

              <p><strong>Contact:</strong><br />
              Shounak Saha +91 79804 82242<br />
              Arkaprabha Deb +91 90739 74967<br />
              Shantanu Das +91 62908 42770</p>
            </div>
          </details>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}