import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const categories = ['All', 'Industrial AI', 'Architecture', 'Strategy', 'Analytics', 'AI Research', 'Integration', 'Technology', 'Operations', 'Energy', 'Automotive', 'Engineering', 'Research'];

export default function BlogContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
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
    </section>
  );
}
