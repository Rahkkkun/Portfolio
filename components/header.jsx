"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-3xl font-semibold text-gray-900 tracking-tight">
          HOME
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-black transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-black transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block w-full hover:text-black transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
