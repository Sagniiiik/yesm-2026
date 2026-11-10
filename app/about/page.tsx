// import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";

// export default function Team() {
//   const convenors = [
//     { name: "Arya Dutta", role: "Convenor", phone: "+91 xxxxx xxxxx" },
//     { name: "Meghdoot Saha", role: "Convenor", phone: "+91 xxxxx xxxxx" },
//     { name: "Uponita Debnath", role: "Convenor", phone: "+91 xxxxx xxxxx" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
//       <Navbar />
      
//       <main className="flex-1 w-full max-w-6xl mx-auto p-6 mt-12 mb-12">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold tracking-tight text-[#1A1818] mb-4">Meet the Team</h1>
//           <p className="text-[#5C5757] text-lg">The minds behind YESM 2026.</p>
//         </div>

//         <h2 className="text-3xl font-bold text-[#1A1818] mb-8 border-b border-[#E5DFD3] pb-4">Core Convenors</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {convenors.map((member, index) => (
//             <div key={index} className="bg-white border border-[#E5DFD3] p-8 rounded-md flex flex-col items-center text-center hover:border-[#732021] transition-colors shadow-sm">
//               {/* Placeholder for Profile Picture */}
//               <div className="w-24 h-24 bg-[#F8F5F2] border border-[#D9D2C5] rounded-full mb-6"></div>
              
//               <h3 className="text-xl font-bold text-[#1A1818]">{member.name}</h3>
//               <span className="text-sm text-[#732021] font-bold mt-1 mb-4 uppercase tracking-wider">{member.role}</span>
//               <p className="text-[#4A4545] text-sm">{member.phone}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5B2366] tracking-tight mb-4">
            About YESM
          </h1>
          <div className="w-24 h-1 bg-[#D4C391] mx-auto rounded-full"></div>
        </div>

        {/* YESM Section */}
        <section className="mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E5DFD3]">
          <h2 className="text-2xl font-bold text-[#5B2366] mb-4">The Young Economist Students' Meet</h2>
          <p className="text-[#4A4545] leading-relaxed mb-6">
            First conceptualized in 2007, the Young Economist Students' Meet has grown to become a platform for the economists, policymakers, entrepreneurs and leaders of tomorrow to come together and discuss the pressing issues of the world economy, while envisioning an equitable and industrious future for all.
          </p>
          <p className="text-[#4A4545] leading-relaxed mb-8">
            The meet features exciting events for school and college students of all levels and disciplines to compete in, while learning and arguing about the myriad ways and techniques of thinking about and applying economics research. It also hosts guest lectures and panel discussions by eminent academicians, policymakers and business leaders associated with various prestigious institutions across the country and abroad.
          </p>
          
          <div className="bg-[#F8F5F2] p-6 rounded-xl border border-[#E5DFD3]">
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#7A5F1C] mb-4">Notable Past Speakers</h3>
            <ul className="space-y-4 text-sm text-[#4A4545]">
              <li className="flex items-start">
                <span className="text-[#5B2366] font-bold mr-2">•</span>
                <span><strong>Mr. Chandra Shekhar Ghosh:</strong> Founder, chairman, and managing director of Bandhan, the first microfinance institution in India to be granted a banking license.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5B2366] font-bold mr-2">•</span>
                <span><strong>Dr. Kaushik Basu:</strong> Professor of Economics at Cornell University, former Chief Economist at the World Bank, and former Chief Economic Advisor to the Government of India.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5B2366] font-bold mr-2">•</span>
                <span><strong>Dr. Debraj Ray:</strong> Professor of Economics at New York University, Co-Editor of the American Economic Review, and former Professor at Stanford, ISI, Harvard, and Columbia.</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Department Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5DFD3]">
            <h2 className="text-2xl font-bold text-[#5B2366] mb-4">The Department of Economics</h2>
            <p className="text-[#4A4545] leading-relaxed text-sm">
              Started in 1956 with Prof. Amartya Kumar Sen, the Welfare Economist and Nobel Laureate as the first Head, the Department of Economics of Jadavpur University is recognized nationwide for its importance in teaching excellence and prospective research activities. 
            </p>
            <p className="text-[#4A4545] leading-relaxed text-sm mt-4">
              In 2005 the Department became the 4th Centre for Advanced Studies (CAS) in Economics in India and successfully completed CAS phase III (2016-21). Our research scholars are engaged in cutting-edge research and frequently contribute to major academic publications.
            </p>
          </section>

          {/* University Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5DFD3]">
            <h2 className="text-2xl font-bold text-[#5B2366] mb-4">Jadavpur University</h2>
            <p className="text-[#4A4545] leading-relaxed text-sm">
              Established in 1955 as an institution to propagate scientific, literary and technical thought in the newly independent India, Jadavpur University has its root in the Swadeshi Movement. 
            </p>
            <p className="text-[#4A4545] leading-relaxed text-sm mt-4">
              Today, it stands as a premier institute of eminence, highly regarded nationwide for its comprehensive education and pioneering research across the arts, sciences, and engineering disciplines.
            </p>
          </section>
        </div>

      </main>

      <Footer />
    </div>
  );
}