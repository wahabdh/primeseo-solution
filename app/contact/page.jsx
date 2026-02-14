'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log('[v0] Response status:', response.status);
      console.log('[v0] Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to take your SEO to the next level? Contact us today for a free consultation and SEO audit.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-800">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                    <div className="text-5xl mb-4">❌</div>
                    <h3 className="text-2xl font-bold text-red-900 mb-2">
                      Error Submitting Form
                    </h3>
                    <p className="text-red-800 mb-4">
                      {error}
                    </p>
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your project and what you're looking for..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground">
                  <a href="tel:+15551234567" className="hover:text-primary transition">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon-Fri, 9am-6pm EST
                </p>
              </div>

              {/* Email */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:info@primeseo.com"
                    className="hover:text-primary transition"
                  >
                    info@primeseo.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Response within 24 hours
                </p>
              </div>

              {/* Location */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  123 SEO Street
                  <br />
                  Tech City, TC 12345
                  <br />
                  United States
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-primary hover:underline transition">
                      Back to Home
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-primary hover:underline transition">
                      View Services
                    </a>
                  </li>
                  <li>
                    <a href="/vlogs" className="text-primary hover:underline transition">
                      Watch Vlogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to see SEO results?',
                a: 'SEO is a long-term strategy. Most clients start seeing improvements within 3-6 months, with significant results typically appearing within 6-12 months.',
              },
              {
                q: 'Do you offer a free SEO audit?',
                a: 'Yes! We offer a free SEO audit for new clients. Contact us to schedule your free consultation and audit.',
              },
              {
                q: 'What\'s your success rate?',
                a: 'We have a 98% client satisfaction rate with an average ranking improvement of 40+ positions for key terms.',
              },
              {
                q: 'Do you work with businesses of all sizes?',
                a: 'Absolutely! We work with startups, small businesses, mid-sized companies, and enterprises. We have flexible pricing for all budgets.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
