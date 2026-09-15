"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6 mt-12 mb-12">
        <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Register for YESM 2026</h1>
          <p className="text-slate-500 mb-8 text-base">Complete the form below to secure your spot in the events.</p>
          
          {submitted ? (
            <div className="bg-[#E2F0CB] border border-[#C5D8A4] text-[#4A5D23] p-4 rounded-md mb-6 text-center font-medium">
              Registration submitted successfully. Please check your inbox for confirmation.
            </div>
          ) : null}

          {/* Using the direct HTML POST so you can see Google's exact error message on submit */}
          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSfst03o2f47K_-5Dvh69l6E3vjtZjEg4HsBdFosRk3OI22nsg/formResponse" 
            method="POST" 
            className="flex flex-col gap-6"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="entry.281254158"
                required
                className="w-full bg-[#FDFBF7] border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:border-[#AEC8CA] focus:ring-1 focus:ring-[#AEC8CA] transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="entry.954768459"
                required
                className="w-full bg-[#FDFBF7] border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:border-[#AEC8CA] focus:ring-1 focus:ring-[#AEC8CA] transition-colors"
                placeholder="student@college.edu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">College</label>
              <input 
                type="text" 
                name="entry.463104863"
                required
                className="w-full bg-[#FDFBF7] border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:border-[#AEC8CA] focus:ring-1 focus:ring-[#AEC8CA] transition-colors"
                placeholder="Narula Institute of Technology"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Select Event</label>
              <select 
                name="entry.1266878257"
                className="w-full bg-[#FDFBF7] border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:border-[#AEC8CA] focus:ring-1 focus:ring-[#AEC8CA] transition-colors appearance-none"
              >
                <option value="Kautilya">Kautilya</option>
                <option value="Colloquium">Colloquium</option>
                <option value="Ecogency">Ecogency</option>
                <option value="Pa-Writo">Pa-Writo</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#D4E4E6] text-slate-800 font-bold py-3 rounded-md mt-2 hover:bg-[#C2D6D8] transition-colors border border-[#B8CED0]"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}