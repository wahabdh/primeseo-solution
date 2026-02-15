'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                Dominate Search Results with{' '}
                <span className="text-primary">Prime SEO</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expert SEO solutions help your business rank higher, drive more traffic, and convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Get Your Free Audit
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-first md:order-last">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Choose Prime SEO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-secondary/50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Data-Driven Strategies
              </h3>
              <p className="text-muted-foreground">
                We use advanced analytics and keyword research to develop SEO strategies that drive real results for your business.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-secondary/50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fast Implementation
              </h3>
              <p className="text-muted-foreground">
                Our proven processes and expert team ensure quick turnaround times and measurable improvements in your rankings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-secondary/50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Transparent Reporting
              </h3>
              <p className="text-muted-foreground">
                Track your progress with detailed monthly reports showing keyword rankings, traffic growth, and ROI metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10M+</div>
              <p className="text-gray-400">Organic Traffic Generated</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">8+</div>
              <p className="text-gray-400">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's work together to build a custom SEO strategy that drives measurable results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
