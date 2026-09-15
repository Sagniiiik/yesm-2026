"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2A2626] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6 mt-12 mb-12">
        <div className="w-full max-w-md bg-white border border-[#E5DFD3] shadow-sm rounded-md p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1818] mb-2">Register for YESM 2026</h1>
          <p className="text-[#5C5757] mb-8 text-sm">Complete the form below to secure your spot in the events.</p>
          
          {submitted ? (
            <div className="bg-[#F2E8CF] border border-[#D4C391] text-[#7A5F1C] p-4 rounded-md mb-6 text-center font-medium shadow-sm">
              Registration submitted successfully. Please check your inbox for confirmation.
            </div>
          ) : null}

          {/* Hidden iframe prevents the ugly Google Forms redirect */}
          <iframe name="hiddenConfirm" id="hiddenConfirm" style={{ display: "none" }}></iframe>

          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSfst03o2f47K_-5Dvh69l6E3vjtZjEg4HsBdFosRk3OI22nsg/formResponse" 
            method="POST" 
            target="hiddenConfirm"
            onSubmit={() => setSubmitted(true)}
            className={submitted ? "hidden" : "flex flex-col gap-6"}
          >
            <div>
              <label className="block text-sm font-semibold text-[#4A4545] mb-1">Full Name</label>
              <input 
                type="text" 
                name="entry.281254158"
                required
                className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4A4545] mb-1">Email Address</label>
              <input 
                type="email" 
                name="entry.954768459"
                required
                className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
                placeholder="student@college.edu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#4A4545] mb-1">College</label>
              <input 
                type="text" 
                name="entry.463104863"
                required
                className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors"
                placeholder="Your Institute Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4A4545] mb-1">Select Event</label>
              <select 
                name="entry.1266878257"
                className="w-full bg-[#F8F5F2] border border-[#D9D2C5] rounded-md p-3 text-[#2A2626] focus:outline-none focus:border-[#732021] focus:ring-1 focus:ring-[#732021] transition-colors appearance-none"
              >
                <option value="Kautilya">Kautilya</option>
                <option value="Colloquium">Colloquium</option>
                <option value="Ecogency">Ecogency</option>
                <option value="Pa-Writo">Pa-Writo</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#732021] text-white font-bold py-3 rounded-md mt-2 hover:bg-[#8A292A] transition-colors shadow-sm"
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