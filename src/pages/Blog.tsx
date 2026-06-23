import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogModal from '../components/BlogModal';

const categories = ['All', 'Industrial AI', 'Architecture', 'Strategy', 'Analytics', 'AI Research', 'Integration', 'Technology', 'Operations', 'Energy', 'Automotive', 'Engineering', 'Research'];

function BlogHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <BookOpen className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Industrial Intelligence Blog</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Insights from the
            <br />
            <span className="text-gradient-teal">Front Lines of Industry</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            Research, best practices, and technical deep-dives on predictive maintenance, sensor analytics, and industrial AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[number] | null>(null);

  const filtered = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search & Filters */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-industrial-gray" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-dark-teal text-text-primary'
                    : 'bg-white/5 text-soft-industrial-gray border border-white/10 hover:bg-white/10 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedPost(post)}
              className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-industrial-copper px-2 py-1 rounded bg-industrial-copper/10">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-soft-industrial-gray">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3 group-hover:text-industrial-copper transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-soft-industrial-gray">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1 text-sm text-industrial-copper font-medium">
                  Read
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-soft-industrial-gray text-lg">No articles found matching your search.</p>
          </div>
        )}
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <BlogContent />
    </div>
  );
}
