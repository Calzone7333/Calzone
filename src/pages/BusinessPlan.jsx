import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, Landmark, ShieldCheck, FileText, BarChart3, TrendingUp, Calculator, PieChart, Scale, Search, Shield, Activity, FileCheck, Info, HelpCircle, Rocket, Globe, Building, Target, Zap, Users, Monitor, Briefcase, Layout, FilePieChart, Layers } from 'lucide-react';

const BusinessPlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Important', id: 'Why' },
    { name: 'Plan Types', id: 'Types' },
    { name: 'Services', id: 'BusinessPlan' },
    { name: 'Components', id: 'KeyComponents' },
    { name: 'Process', id: 'HowCalzoneHelps' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: 'Why do I need a business plan?', a: 'A business plan helps in raising funds, setting clear goals, and guiding long-term business growth.' },
    { q: 'How long does it take to prepare a business plan?', a: 'With Calzone, we deliver a professional business plan within 7-10 business days.' },
    { q: 'Can I use the same business plan for investors and banks?', a: 'Yes! We ensure your business plan meets the requirements of both investors and financial institutions.' },
    { q: 'What industries do you cover?', a: 'We create business plans for startups, SMEs, manufacturers, service providers, e-commerce businesses, and more.' }
  ];

  const planTypes = [
    { title: 'Startup Business Plan', desc: 'Designed for entrepreneurs launching new businesses. Essential for investor pitching and securing venture capital funding.', icon: Rocket },
    { title: 'Internal Business Plan', desc: 'Focuses on specific departments (marketing, HR, operations) to optimize internal processes and resources.', icon: Users },
    { title: 'Strategic Business Plan', desc: 'Provides a long-term roadmap for expansion. Includes SWOT analysis to guide strategic growth.', icon: Target },
    { title: 'Feasibility Business Plan', desc: 'Determines whether a new project, product, or expansion is viable before investing capital.', icon: Activity },
    { title: 'Operations Business Plan', desc: 'Focuses on day-to-day operations, staffing, and resource allocation to streamline workflow.', icon: Zap },
    { title: 'Expansion Business Plan', desc: 'Used for expanding into new markets, launching new products, or acquiring businesses.', icon: Globe }
  ];

  const components = [
    { title: 'Executive Summary', desc: 'Concise overview of business vision, mission, and problem-solution fit.' },
    { title: 'Business Description', desc: 'Industry details, ownership structure, and operational scope.' },
    { title: 'Products & Services', desc: 'Detailed description of USP and future expansion strategies.' },
    { title: 'Market Analysis', desc: 'Target audience insights, industry trends, and competitive landscape.' },
    { title: 'Strategy & Implementation', desc: 'Marketing, sales, and operational action plans to achieve goals.' },
    { title: 'Financial Projections', desc: 'Revenue, cost, and profit forecasts for 3-5 years including break-even.' },
    { title: 'Funding Requirements', desc: 'Specifies capital needs, investment breakdown, and return expectations.' },
    { title: 'Appendix', desc: 'Supporting legal documents, contracts, and business licenses.' }
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6 tracking-tight">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Business Plan Preparation</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Business Plan Preparation</h1>

        {/* Tabs Navigation */}
        <div className="mb-10 border-b border-gray-100 sticky top-[72px] bg-white z-40 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex items-center gap-6 py-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a 
                  href={`#${tab.id}`}
                  onClick={() => setActiveTab(tab.name)}
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative tracking-tight ${
                    activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#222222] hover:text-[#DB3269]'
                  }`}
                >
                  {tab.name}
                  {activeTab === tab.name && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DB3269]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections Content */}
        <div className="space-y-16">
          {/* What is a Business Plan */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is a Business Plan?</h2>
            <p className={paragraphStyle}>
              A business plan is the foundation of any successful business. Whether you’re launching a startup or looking to scale an existing business, a well-prepared business plan provides:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                'A clear roadmap for business growth.',
                'Financial and operational strategies to achieve goals.',
                'Market insights and competitive positioning.',
                'Investor and bank-ready documentation.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border-l-4 border-[#DB3269]">
                  <Check size={18} className="text-[#DB3269]" />
                  <span className="text-[14px] font-bold text-[#222222]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#222222] text-center">At Calzone, we specialize in preparing structured, investor-friendly business plans.</p>
          </section>

          {/* Why Important */}
          <section id="Why" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why is a Business Plan Important?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Feasibility', desc: 'Evaluate if a business idea is viable before investing capital.' },
                { title: 'Decision-Making', desc: 'Guides strategic objectives and helps track progress over time.' },
                { title: 'Funding Attraction', desc: 'Builds confidence among investors and financial institutions.' },
                { title: 'Market Insights', desc: 'Analyze industry trends, competition, and customer preferences.' },
                { title: 'Financial Planning', desc: 'Forecast revenues and expenses to ensure long-term stability.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] flex flex-col gap-3">
                  <h4 className="font-bold text-[16px] text-[#222222] uppercase tracking-tighter border-b-2 border-[#DB3269] pb-2 w-fit">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Types of Plans */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Types of Business Plans We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {planTypes.map((plan, i) => (
                <div key={i} className="p-10 border border-gray-100 bg-white hover:bg-gray-50 transition-colors group">
                  <plan.icon className="text-[#DB3269] mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-bold text-[18px] text-[#222222] mb-3">{plan.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{plan.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Development Services */}
          <section id="BusinessPlan" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Calzone's Business Plan Development Services</h2>
            <div className="space-y-4">
              {[
                { title: 'Comprehensive Preparation', desc: 'We create detailed, customized business plans tailored to your objectives.' },
                { title: 'Market Research', desc: 'Gain deep insights into trends, customer behavior, and positioning.' },
                { title: 'Financial Projections', desc: 'Realistic revenue, expense, and profit forecasts aligned with expectations.' },
                { title: 'Investor & Bank-Ready', desc: 'Formatted to meet standards of lenders and funding agencies.' },
                { title: 'Review & Optimization', desc: 'Analyze and enhance your existing plans for better impact.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[#222222] text-white">
                  <div className="shrink-0 w-8 h-8 bg-[#DB3269] flex items-center justify-center font-bold">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[16px] mb-1">{item.title}</h4>
                    <p className="text-[14px] opacity-70 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Components */}
          <section id="KeyComponents" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Key Components of a Business Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {components.map((comp, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-[30px] font-bold text-[#DB3269] opacity-10 group-hover:opacity-30 transition-opacity leading-none">0{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-2">{comp.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="HowCalzoneHelps" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>How Calzone Helps You Prepare a Business Plan?</h2>
            <div className="flex flex-col gap-6">
              {[
                { step: 'Step 1', title: 'Goals Assessment', desc: 'Consultation to understand your vision and requirements.' },
                { step: 'Step 2', title: 'Market Research', desc: 'Analyze trends, competitors, and customer insights.' },
                { step: 'Step 3', title: 'Financial Modeling', desc: 'Develop realistic income statements and cash flow projections.' },
                { step: 'Step 4', title: 'Drafting', desc: 'Prepare a professional, structured plan tailored to your needs.' },
                { step: 'Step 5', title: 'Finalization', desc: 'Review for clarity, compliance, and strategic effectiveness.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 border-b border-gray-100 last:border-b-0">
                  <div className="font-bold text-[#DB3269] text-[20px] shrink-0">0{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[18px] font-bold italic">Ready to take your business to the next level? <span className="text-[#DB3269]">Contact Calzone today!</span></p>
          </section>

          {/* Why Choose Us */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for Business Plan Preparation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Expert Consultants - Professionals specializing in strategy and finance.',
                'Customized Plans - Tailored to your specific industry and goals.',
                'Investor Approved - Formats that meet lender and VC requirements.',
                'Quick Turnaround - Get your professional plan in 7-10 business days.',
                'Affordable Pricing - High-quality plans at competitive transparent rates.',
                'Dedicated Support - Ongoing consultation for your success story.'
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] hover:bg-white transition-all duration-300">
                  <p className="text-[14px] leading-relaxed mb-0 text-[#222222]">
                    <span className="font-bold">{item.split(' - ')[0]}</span> - {item.split(' - ')[1]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section id="FAQs" className="scroll-mt-32 pb-20">
            <h2 className={`${subHeadingStyle} mb-8`}>Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[16px] text-[#222222]">{i + 1}. {faq.q}</span>
                    {openFaq === i ? <Minus size={18} className="text-[#DB3269]" /> : <Plus size={18} className="text-[#DB3269]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-[14px] text-gray-500 leading-relaxed border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center font-bold text-[#222222]">Looking for a professional business plan? <span className="text-[#DB3269] uppercase tracking-widest ml-2 underline underline-offset-4 font-extrabold">Contact Calzone today!</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
