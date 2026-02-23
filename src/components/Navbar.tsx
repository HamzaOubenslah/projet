"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Company", href: "" },
  { label: "Industry", href: "" },
  { label: "Services", href: "" },
  { label: "Career", href: "" },
  { label: "Finance", href: "" },
  { label: "Support", href: "" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06141B] border-b border-[#1e2a1e] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-[#4ADE80] text-xl font-bold">⚡</span>
          <span className="text-white font-bold text-lg tracking-tight">
            eaneer
          </span>
        </Link>

        {/* Burger button (mobile < sm) */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu (≥ sm / 640px) */}
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <span className="text-gray-400 text-sm cursor-not-allowed opacity-60 select-none">
                {link.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-gray-400 text-sm cursor-not-allowed opacity-60 select-none">
            Login
          </span>
          <span className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full cursor-not-allowed opacity-90 select-none">
            Get Started
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4 space-y-3 bg-[#06141B] border-t border-[#1e2a1e]">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <span className="block text-gray-400 text-sm cursor-not-allowed opacity-60 select-none">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 pt-2">
            <span className="text-gray-400 text-sm cursor-not-allowed opacity-60 select-none">
              Login
            </span>
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full text-center cursor-not-allowed opacity-90 select-none">
              Get Started
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}