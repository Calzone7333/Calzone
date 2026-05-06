import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Contact us', desc: 'Contact us to boost your brand visibility.' },
  { id: 2, title: 'Consult', desc: 'Always available to answer your questions.' },
  { id: 3, title: 'Place order', desc: 'Fill our package today to proceed.' },
  { id: 4, title: 'Payment', desc: 'Secure payment methods for all types of banking.' }
];

const Solutions = () => {
  return (
    <section className="section-padding bg-brand-peach relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-10 right-10 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex gap-2 mb-2">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="w-2 h-2 bg-brand-orange rounded-full" />
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://img.freepik.com/free-vector/man-sitting-sofa-with-laptop-freelance-concept_1133-393.jpg" 
            alt="Step Illustration" 
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Simple Solutions!</h2>
          <p className="text-gray-500 mb-10 max-w-md">
            We understand that no two businesses are alike. That's why we take the time to understand.
          </p>

          <div className="space-y-6 mb-12">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-orange/20 group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="btn-primary">Get Started</button>
            <button className="px-8 py-3 font-bold text-brand-dark hover:text-brand-orange transition-colors">Read more</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
