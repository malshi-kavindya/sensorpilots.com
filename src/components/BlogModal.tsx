import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  useEffect(() => {
    if (post) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [post]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-soft-industrial-gray hover:text-text-primary transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-industrial-copper px-2 py-1 rounded bg-industrial-copper/10">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-soft-industrial-gray">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>

            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
              {post.title}
            </h2>

            <div className="flex items-center gap-1 text-sm text-soft-industrial-gray mb-6">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>

            <div className="h-px bg-white/10 mb-6" />

            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-sm text-text-primary/80 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
