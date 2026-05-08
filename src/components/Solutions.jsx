import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, PhoneCall, BarChart3, ShieldCheck, TrendingUp } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    title: 'Strategic Consultation', 
    desc: 'Personalized sessions to identify the best legal structure and growth path for your enterprise.',
    icon: PhoneCall
  },
  { 
    id: 2, 
    title: 'Process Optimization', 
    desc: 'Streamlining documentation and filings to ensure zero delays in registration and compliance.',
    icon: BarChart3
  },
  { 
    id: 3, 
    title: 'Regulatory Compliance', 
    desc: 'Comprehensive handling of GST, Income Tax, SEBI, and Companies Act regulations.',
    icon: ShieldCheck
  },
  { 
    id: 4, 
    title: 'Professional Advisory', 
    desc: 'Expert insights into fundraising, financial reporting, and sustainable business scaling.',
    icon: TrendingUp
  }
];

const Solutions = () => {
  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] text-[#222222] tracking-tight";

  return (
    <section className="py-24 bg-[#F9F9F9] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Side - Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square relative overflow-hidden group">
            <img 
              src="/Expert.png" 
              alt="Business Solutions" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Decorative Block */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#DB3269] -z-10" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${headingStyle} mb-6`}>Expert Solutions for Business Growth</h2>
          <p className="text-gray-600 mb-12 max-w-lg leading-relaxed">
            We simplify complex regulatory and financial processes, allowing you to focus on what matters most—scaling your business with confidence.
          </p>

          <div className="space-y-8 mb-12">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-100 text-[#DB3269] flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#DB3269] group-hover:text-white transition-all duration-300">
                  <step.icon size={24} />
                </div>
                <div>
                  <h3 className={`${subHeadingStyle} mb-1 group-hover:text-[#DB3269] transition-colors`}>{step.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <Link 
              to="/contact-us"
              className="bg-[#222222] text-white px-8 py-3 font-bold uppercase tracking-widest text-[12px] hover:bg-[#DB3269] transition-all"
            >
              Get Started Today
            </Link>
            <button 
              onClick={() => document.getElementById('popular_services')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 font-bold text-[12px] uppercase tracking-widest text-[#222222] hover:text-[#DB3269] transition-colors"
            >
              Our Process <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
