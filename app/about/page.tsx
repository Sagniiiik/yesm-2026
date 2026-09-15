import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Team() {
  const convenors = [
    { name: "Arya Dutta", role: "Convenor", phone: "+91 xxxxx xxxxx" },
    { name: "Sagnik Bhattacharjee", role: "Convenor", phone: "+91 xxxxx xxxxx" },
    { name: "Srijan Koner", role: "Convenor", phone: "+91 xxxxx xxxxx" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto p-6 mt-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Meet the Team</h1>
          <p className="text-gray-400 text-lg">The minds behind YESM 2026.</p>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Core Convenors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {convenors.map((member, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-white transition-colors">
              {/* Placeholder for Profile Picture */}
              <div className="w-24 h-24 bg-gray-800 rounded-full mb-6"></div>
              
              <h3 className="text-xl font-bold">{member.name}</h3>
              <span className="text-sm text-green-400 font-medium mt-1 mb-4">{member.role}</span>
              <p className="text-gray-400 text-sm">{member.phone}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}