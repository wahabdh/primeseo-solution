'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Vlogs() {
  const vlogs = [
    {
      id: 1,
      title: 'SEO Trends 2024: What You Need to Know',
      description:
        'Discover the latest SEO trends and algorithm updates that will shape your digital strategy in 2024.',
      thumbnail: '🎥',
      date: 'Dec 15, 2024',
      duration: '12:45',
      views: '2.5K',
    },
    {
      id: 2,
      title: 'Keyword Research Like a Pro',
      description:
        'Learn the exact keyword research process we use to identify high-value opportunities for our clients.',
      thumbnail: '📊',
      date: 'Dec 08, 2024',
      duration: '15:30',
      views: '1.8K',
    },
    {
      id: 3,
      title: 'Technical SEO Audit Walkthrough',
      description:
        'Follow along as we conduct a complete technical SEO audit and show you how to fix common issues.',
      thumbnail: '⚙️',
      date: 'Nov 30, 2024',
      duration: '18:20',
      views: '3.2K',
    },
    {
      id: 4,
      title: 'Link Building Strategies That Work',
      description:
        'Explore proven link building strategies that improve domain authority and boost your rankings.',
      thumbnail: '🔗',
      date: 'Nov 22, 2024',
      duration: '14:15',
      views: '2.1K',
    },
    {
      id: 5,
      title: 'Content Optimization for SEO',
      description:
        'Master the art of optimizing content for both search engines and users to maximize conversions.',
      thumbnail: '✍️',
      date: 'Nov 15, 2024',
      duration: '16:50',
      views: '2.9K',
    },
    {
      id: 6,
      title: 'Local SEO for Small Business',
      description:
        'Small business owners - learn how to dominate local search results in your area.',
      thumbnail: '📍',
      date: 'Nov 08, 2024',
      duration: '13:40',
      views: '1.6K',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            SEO Tips & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Watch our expert SEO tips, tutorials, and industry insights to stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Featured Vlog */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-primary/10 rounded-lg p-16 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="text-8xl mb-4">▶️</div>
                <p className="text-foreground font-semibold">Watch Video</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Latest Release
              </span>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                SEO Trends 2024: What You Need to Know
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                In this comprehensive video, we break down the top SEO trends that will dominate 2024. From AI-powered search to E-E-A-T signals, learn exactly what you need to focus on to maintain and improve your rankings.
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <span>📅 Dec 15, 2024</span>
                <span>⏱️ 12:45</span>
                <span>👁️ 2.5K views</span>
              </div>
              <button className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vlogs Grid */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">All Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vlogs.map((vlog) => (
              <div
                key={vlog.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="bg-primary/10 h-48 flex items-center justify-center text-6xl relative group">
                  {vlog.thumbnail}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <span className="text-4xl opacity-0 group-hover:opacity-100 transition">
                      ▶️
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                    {vlog.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {vlog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {vlog.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex space-x-4">
                      <span>📅 {vlog.date}</span>
                      <span>👁️ {vlog.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don't Miss New Videos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our channel and get notified whenever we release new SEO content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}