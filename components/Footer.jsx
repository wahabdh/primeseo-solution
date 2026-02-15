'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Prime</span>
              <span className="text-accent">SEO Solutions</span>
            </h3>
            <p className="text-gray-400">
              Elevate your online presence with our expert SEO solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vlogs" className="text-gray-400 hover:text-primary transition">
                  Vlogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Keyword Research</li>
              <li className="text-gray-400">On-Page SEO</li>
              <li className="text-gray-400">Link Building</li>
              <li className="text-gray-400">Technical SEO</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: solutionsprime.seo@gmail.com</li>
              <li>Phone: +92 (303) 5736160</li>
              <li>Address: Sector I-12 IJP Road, Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 PrimeSEO Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/abdul-wahab-72a702238"
			target="_blank" 
			className="text-gray-400 hover:text-primary transition">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              Twitter
            </a>
            <a 	href="https://www.linkedin.com/in/abdul-wahab-72a702238" 
				target="_blank" 
				rel="noopener noreferrer"
				className="text-gray-400 hover:text-primary transition"
			>
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/abdul-wahab-72a702238"
			target="_blank" 
			className="text-gray-400 hover:text-primary transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}