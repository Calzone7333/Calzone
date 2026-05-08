import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Register a Private Limited Company in Chennai',
      excerpt: 'A step-by-step guide for founders to register their startup in Chennai with the latest MCA guidelines.',
      date: 'May 05, 2024',
      author: 'Expert CA Team',
      category: 'Registration',
      image: 'https://images.unsplash.com/photo-1454165833767-131f72a6a9d8?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'GST Filing Deadlines: What Small Businesses Need to Know',
      excerpt: 'Stay compliant and avoid penalties by keeping track of these essential GST return filing dates.',
      date: 'May 02, 2024',
      author: 'Tax Consultant',
      category: 'GST',
      image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'The Benefits of Hiring a Virtual CFO for Your Startup',
      excerpt: 'Learn how virtual CFO services can help your business manage finances, payroll, and scaling effectively.',
      date: 'April 28, 2024',
      author: 'Finance Expert',
      category: 'Virtual CFO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#DB3269] font-bold text-[14px] uppercase tracking-[3px]"
          >
            Our Insights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-sans font-bold text-[35px] leading-[45px] text-[#222222] mt-4"
          >
            Latest News & Business Tips
          </motion.h2>
          <div className="w-20 h-1 bg-[#DB3269] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#F9F9F9] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#DB3269] text-white px-4 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8">
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
                
                <h3 className="font-sans font-bold text-[20px] leading-tight text-[#222222] mb-4 group-hover:text-[#DB3269] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#DB3269] font-bold text-[13px] uppercase tracking-wider group/link"
                >
                  Read More 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
