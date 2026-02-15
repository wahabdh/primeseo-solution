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
      video: '/videos/vlog1.mp4',
      date: 'Dec 15, 2024',
      duration: '12:45',
      views: '2.5K',
    },
    {
      id: 2,
      title: 'Keyword Research Like a Pro',
      description:
        'Learn the exact keyword research process we use to identify high-value opportunities.',
      video: '/videos/vlog2.mp4',
      date: 'Dec 08, 2024',
      duration: '15:30',
      views: '1.8K',
    },
    {
      id: 3,
      title: 'Technical SEO Audit Walkthrough',
      description:
        'Follow along as we conduct a complete technical SEO audit.',
      video: '/videos/vlog3.mp4',
      date: 'Nov 30, 2024',
      duration: '18:20',
      views: '3.2K',
    },
    {
      id: 4,
      title: 'Link Building Strategies That Work',
      description:
        'Explore proven link building strategies that improve rankings.',
      video: '/videos/vlog4.mp4',
      date: 'Nov 22, 2024',
      duration: '14:15',
      views: '2.1K',
    },
    {
      id: 5,
      title: 'Content Optimization for SEO',
      description:
        'Master the art of optimizing content for search engines.',
      video: '/videos/vlog5.mp4',
      date: 'Nov 15, 2024',
      duration: '16:50',
      views: '2.9K',
    },
    {
      id: 6,
      title: 'Local SEO for Small Business',
      description:
        'Learn how to dominate local search results.',
      video: '/videos/vlog6.mp4',
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
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            SEO Tips & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Watch our expert SEO tips, tutorials, and industry insights.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
            >
              <source src="/videos/vlog1.mp4" type="video/mp4" />
            </video>

            <div>
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm mb-4">
                Latest Release
              </span>

              <h3 className="text-3xl font-bold mb-4">
                SEO Trends 2024: What You Need to Know
              </h3>

              <p className="text-lg text-muted-foreground mb-6">
                In this comprehensive video, we break down the top SEO trends that will dominate 2024.
              </p>

              <div className="flex space-x-6 text-muted-foreground">
                <span>📅 Dec 15, 2024</span>
                <span>⏱️ 12:45</span>
                <span>👁️ 2.5K views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Videos Grid */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">All Videos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vlogs.map((vlog) => (
              <div
                key={vlog.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <video
                  controls
                  className="w-full h-48 object-cover"
                >
                  <source src={vlog.video} type="video/mp4" />
                </video>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {vlog.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {vlog.description}
                  </p>

                  <div className="flex justify-between text-sm text-muted-foreground border-t pt-4">
                    <span>📅 {vlog.date}</span>
                    <span>👁️ {vlog.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
