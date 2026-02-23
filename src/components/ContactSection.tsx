"use client";
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="bg-[#06141B] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#ffffff] border border-[#1e2a1e] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
       
        <div className="flex-1">
          <p className="text-[#777e8f] text-xs tracking-widest mb-2 font-semibold">Contact us Today</p>
          <h2 className="text-black text-xl font-bold leading-snug">
            Have questions about our services or ready to start your project?
          </h2>
        </div>

       
        <div className="flex-1 flex flex-col gap-3 w-full">
          <input
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#ffffff] border border-[#1e2a1e] text-black text-sm px-4 py-3 rounded-xl outline-none focus:border-black transition-colors placeholder:text-gray-600"
          />
          <button
            className="w-full bg-[#232b20] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#232b20] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}