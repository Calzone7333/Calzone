import React from 'react';
import { motion } from 'framer-motion';

const Agency = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Agency</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let's turn your data into actionable insights tailored solutions for your business.
          </p>
          <button className="btn-primary">Read more</button>
        </motion.div>

        {/* Right Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://img.freepik.com/free-vector/growth-analytics-concept-illustration_114360-1282.jpg" 
            alt="Agency Analytics" 
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Agency;
