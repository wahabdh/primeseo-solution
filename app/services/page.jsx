'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Keyword Research & Strategy',
      description:
        'Deep dive into market research to identify high-value keywords and develop a winning keyword strategy for your industry.',
      icon: '🔍',
      features: ['Competitor Analysis', 'Trend Analysis', 'Intent Mapping'],
    },
    {
      id: 2,
      title: 'On-Page SEO Optimization',
      description:
        'Optimize every page of your website with best practices including meta tags, content optimization, and internal linking.',
      icon: '📄',
      features: ['Meta Optimization', 'Content Enhancement', 'Schema Markup'],
    },
    {
      id: 3,
      title: 'Technical SEO',
      description:
        'Fix technical issues that prevent search engines from crawling and indexing your website effectively.',
      icon: '⚙️',
      features: ['Site Speed', 'Mobile Optimization', 'Crawlability Fix'],
    },
    {
      id: 4,
      title: 'Link Building & Outreach',
      description:
        'Build high-quality backlinks from authoritative websites to increase domain authority and rankings.',
      icon: '🔗',
      features: ['Guest Posting', 'Broken Link Building', 'PR Outreach'],
    },
    {
      id: 5,
      title: 'Content Strategy',
      description:
        'Create compelling, SEO-optimized content that ranks well and converts visitors into customers.',
      icon: '✍️',
      features: ['Blog Planning', 'Content Creation', 'SEO Copywriting'],
    },
    {
      id: 6,
      title: 'Local SEO',
      description:
        'Dominate local search results with optimized Google Business Profile and local citations.',
      icon: '📍',
      features: ['Local Citations', 'Google Business Profile', 'Review Management'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Our SEO Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive SEO solutions designed to maximize your online visibility and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-foreground">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:text-accent transition"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">For small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$499</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Keyword research
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  On-page SEO
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Monthly reports
                </li>
              </ul>
              <button className="w-full border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 md:scale-105">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl text-sm font-semibold -translate-y-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Link building
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Content strategy
                </li>
              </ul>
              <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For large enterprises</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-accent mr-3">✓</span>
                  Custom solutions
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full block text-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
