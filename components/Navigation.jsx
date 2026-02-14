'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Prime</span>
            <span className="text-2xl font-bold text-accent">SEO Solutions</span>
		</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition font-medium"
            >
              Services
            </Link>
            <Link
              href="/vlogs"
              className="text-foreground hover:text-primary transition font-medium"
            >
              Vlogs
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/vlogs"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Vlogs
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
