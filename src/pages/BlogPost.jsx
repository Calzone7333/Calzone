import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/blog" className="text-[#DB3269] hover:underline mt-4 block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section without Hero Image */}
      <div className="bg-[#F9F9F9] py-20 px-6 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#DB3269] text-white px-4 py-1 text-[12px] font-bold rounded-full uppercase tracking-wider mb-6"
          >
            {post.category}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#222222] text-[32px] md:text-[45px] lg:text-[50px] font-bold leading-tight"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-gray-500 mt-8 text-[14px]"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#DB3269] font-bold text-[13px] uppercase tracking-wider mb-12 transition-colors">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#222222] prose-p:text-gray-600 prose-p:leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-gray-500 uppercase tracking-wider">Share this post:</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#DB3269] hover:text-white transition-all">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
