import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users2 } from 'lucide-react';

const Agency = () => {
  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] text-[#222222] tracking-tight";

  return (
    <section className="py-24 bg-white relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${headingStyle} mb-8`}>Institutional Excellence in Business Advisory</h2>
          <p className="text-gray-600 mb-10 leading-[28px] text-[15px]">
            At Calzone, we bridge the gap between complex legal requirements and seamless business execution. Our team of seasoned experts provides end-to-end support for corporate registrations, statutory compliances, and strategic financial planning. We ensure your enterprise remains resilient, fully compliant, and positioned for long-term success.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Shield, title: 'Trusted Compliance', desc: 'Zero-error filing and statutory adherence.' },
              { icon: Target, title: 'Strategic Growth', desc: 'Data-driven financial insights for scaling.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 text-[#DB3269]">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-[#222222] uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#DB3269] text-white px-8 py-3 font-bold uppercase tracking-widest text-[12px] hover:bg-[#222222] transition-all">Learn More About Us</button>
        </motion.div>

        {/* Right Side - Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="/Institutional.png" 
              alt="Institutional Excellence" 
              className="w-full h-auto"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-50 -z-10 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#DB3269] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Agency;
