"use client";

import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tabakly Model", href: "#model" },
  { name: "Impact", href: "#impact" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/80 px-8 py-4 shadow-lg backdrop-blur-xl">

        {/* Logo - could be later changed to an image*/}
        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
            T
          </div>

          <span className="text-2xl font-bold text-gray-900">
            Tabakly
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition duration-200 hover:text-orange-500 hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#surveys"
          className="rounded-full bg-green-900 px-6 py-3 font-medium text-white transition duration-300 hover:bg-green-700 hover:shadow-lg"
        >
          Take Survey
        </a>

      </nav>
    </header>
  );
}