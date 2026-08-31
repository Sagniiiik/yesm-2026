"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  // Set your fest date here
  const festDate = new Date("September 15, 2026 09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = festDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [festDate]);

  return (
    <div className="flex gap-4 sm:gap-8 mt-10 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-gray-900 border border-gray-800 rounded-xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-lg">
            {value < 10 ? `0${value}` : value}
          </div>
          <span className="text-gray-400 text-sm mt-3 uppercase tracking-widest font-medium">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}