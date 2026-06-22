import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const categories = ['All', 'Industrial AI', 'Architecture', 'Strategy', 'Analytics', 'AI Research', 'Integration', 'Technology', 'Operations', 'Energy', 'Automotive', 'Engineering', 'Research'];

export default function BlogContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // First post is featured
  const [featured, ...rest] = filtered;

  return (
    <section id="blog" ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-primary-dark-teal/6 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-industrial-copper/4 blur-[120px] rounded-full" />
      </div>

      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,16vw,14rem)] font-black tracking-tighter leading-none text-white/[0.02] whitespace-nowrap">
          INSIGHTS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark-teal font-semibold mb-3">
            Knowledge Base
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary leading-tight">
              Industrial intelligence,
              <br />
              <span className="text-primary-dark-teal">published weekly.</span>
            </h2>

            {/* Search */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-soft-industrial-gray" />
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-primary placeholder-soft-industrial-gray/50 text-sm focus:outline-none focus:border-primary-dark-teal/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-soft-industrial-gray hover:text-text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-text-primary'
                  : 'text-soft-industrial-gray border border-white/[0.08] hover:text-text-primary hover:border-white/20 bg-white/[0.03]'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="catPill"
                  className="absolute inset-0 rounded-full bg-primary-dark-teal"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
            >
              <p className="text-soft-industrial-gray/60 text-sm">No articles found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-xs text-primary-dark-teal hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

              {/* Featured post */}
              {featured && (
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="group relative mb-px rounded-t-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/60 to-transparent" />

                  <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-bold bg-primary-dark-teal/20 text-primary-dark-teal border border-primary-dark-teal/20">
                          {featured.category}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.12em] text-soft-industrial-gray/50 font-medium">Featured</span>
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-primary leading-snug mb-4 group-hover:text-primary-dark-teal transition-colors duration-300">
                        {featured.title}
                      </h3>
                      <p className="text-sm text-soft-industrial-gray leading-relaxed line-clamp-3">
                        {featured.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-6">
                      <div className="h-32 md:h-40 rounded-xl bg-gradient-to-br from-primary-dark-teal/10 to-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                        <span className="text-5xl font-black text-primary-dark-teal/20 font-heading tracking-tighter">
                          {featured.category.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-soft-industrial-gray">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />{featured.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />{featured.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1.5 text-sm text-primary-dark-teal font-semibold">
                          Read article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* Rest of posts */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-b-2xl overflow-hidden border border-t-0 border-white/[0.06]">
                  {rest.map((post, i) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                      className="group relative flex flex-col bg-deep-machine-shadow/50 hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer p-7 overflow-hidden"
                    >
                      {/* Hover top line */}
                      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-industrial-copper/0 to-transparent group-hover:via-industrial-copper/50 transition-all duration-500" />

                      {/* Category + read time */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.16em] font-bold bg-industrial-copper/10 text-industrial-copper border border-industrial-copper/15">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-soft-industrial-gray/50">
                          <Clock className="w-3 h-3" />{post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-semibold text-base text-text-primary leading-snug mb-3 line-clamp-2 group-hover:text-industrial-copper transition-colors duration-300 flex-1">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-soft-industrial-gray/60 leading-relaxed line-clamp-2 mb-6">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="flex items-center gap-1.5 text-[10px] text-soft-industrial-gray/40">
                          <Calendar className="w-3 h-3" />{post.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-industrial-copper font-semibold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}