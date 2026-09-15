import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Team() {
  const convenors = [
    { name: "Arya Dutta", role: "Convenor", phone: "+91 xxxxx xxxxx" },
    { name: "Meghdoot Saha", role: "Convenor", phone: "+91 xxxxx xxxxx" },
    { name: "Uponita Debnath", role: "Convenor", phone: "+91 xxxxx xxxxx" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto p-6 mt-12 mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#1A1818] mb-4">Meet the Team</h1>
          <p className="text-[#5C5757] text-lg">The minds behind YESM 2026.</p>
        </div>

        <h2 className="text-3xl font-bold text-[#1A1818] mb-8 border-b border-[#E5DFD3] pb-4">Core Convenors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {convenors.map((member, index) => (
            <div key={index} className="bg-white border border-[#E5DFD3] p-8 rounded-md flex flex-col items-center text-center hover:border-[#732021] transition-colors shadow-sm">
              {/* Placeholder for Profile Picture */}
              <div className="w-24 h-24 bg-[#F8F5F2] border border-[#D9D2C5] rounded-full mb-6"></div>
              
              <h3 className="text-xl font-bold text-[#1A1818]">{member.name}</h3>
              <span className="text-sm text-[#732021] font-bold mt-1 mb-4 uppercase tracking-wider">{member.role}</span>
              <p className="text-[#4A4545] text-sm">{member.phone}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}