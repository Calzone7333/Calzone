import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F9F9]">
      {/* Hero Section */}
      <div className="bg-[#1a1a1a] py-24 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#DB3269] font-bold text-[14px] uppercase tracking-[3px]"
        >
          Insights & Updates
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans font-bold text-[45px] lg:text-[55px] leading-tight text-white mt-4"
        >
          Our Blog
        </motion.h1>
        <div className="w-20 h-1 bg-[#DB3269] mx-auto mt-8" />
        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-[16px] leading-relaxed">
          Stay updated with the latest news, business tips, and regulatory changes in the financial world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative bg-[#F9F9F9] flex items-center justify-center p-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#DB3269] text-white px-4 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[13px] text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#DB3269]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-[#DB3269]" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="font-sans font-bold text-[22px] leading-tight text-[#222222] mb-4 group-hover:text-[#DB3269] transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 text-[14px] leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#DB3269] font-bold text-[13px] uppercase tracking-wider group/link"
                  >
                    Read Full Article
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
