import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1818] mb-4 tracking-tight">
            About YESM 2026
          </h1>
          <div className="inline-block bg-[#F2E8CF] border border-[#D4C391] text-[#7A5F1C] px-4 py-1.5 rounded-md text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            Coming Soon
          </div>
          <p className="text-[#4A4545] max-w-md mx-auto leading-relaxed">
            We are finalizing the details and history for this year's collegiate summit. Check back shortly for comprehensive information about the fest.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}