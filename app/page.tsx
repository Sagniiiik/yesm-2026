import Navbar from "../components/navbar";
import Events from "../components/events";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Countdown from "../components/countdown";
import FaqContact from "../components/faqContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center p-24 text-center mt-12">
        <h1 className="text-7xl font-extrabold tracking-tight">
          YESM 2026
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          The ultimate college fest experience. Competitions, debates, and memories waiting to be made.
        </p>
        
        <Countdown />
        
      </main>
      
      <Events />
      <Sponsors />
      <FaqContact />  
      <Footer />
    </div>
  );
}