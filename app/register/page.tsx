"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw4g0KnXBoEIgN-xV9w6rjAgOLNt-K6Vdr6k3UuPUGaGoSeNn801oeFfDw-Gjceqb7Z/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6 mt-12 mb-12">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2">Register for YESM</h1>
          <p className="text-gray-400 mb-8 text-sm">Secure your spot in the events.</p>
          
          {success ? (
            <div className="bg-green-900 border border-green-500 text-green-200 p-4 rounded-lg mb-6 text-center font-bold">
              Successfully registered! Check your email for confirmation.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input 
                type="text" 
                name="Full Name"
                required
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input 
                type="email" 
                name="Email"
                required
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="student@college.edu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">College</label>
              <input 
                type="text" 
                name="College"
                required
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="Your Institute Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Select Event</label>
              <select 
                name="Event"
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
              >
                <option value="Kautilya">Kautilya</option>
                <option value="Colloquium">Colloquium</option>
                <option value="Ecogency">Ecogency</option>
                <option value="Pa-Writo">Pa-Writo</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black font-bold py-3 rounded-lg mt-4 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

