import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Target, TrendingUp, Users, Zap, Briefcase, FileText, Landmark, ShieldCheck, PieChart, Coins, Scale, Search, Handshake, Monitor, BarChart3, Rocket, Settings, Building, FilePieChart, Globe, Factory, ShoppingCart, Laptop, IndianRupee, Lightbulb, FileCheck, Info, HelpCircle, HeartPulse } from 'lucide-react';

const DetailedProjectReport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'Why-Choose' },
    { name: 'Documents', id: 'Documents-Required' },
    { name: 'Services', id: 'DPR-Services' },
    { name: 'Industries', id: 'Industries' },
    { name: 'How We Help', id: 'Calzone-Helps' },
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
          <span className="text-[#DB3269]">Detailed Project Report</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Detailed Project Report</h1>

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
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>DPR (Detailed Project Report) Service - Powered by Calzone</h2>
            <p className={paragraphStyle}>
              A <span className="font-bold">Detailed Project Report (DPR)</span> is a comprehensive document that outlines every aspect of a proposed project, from conception to execution. It serves as a critical document for <span className="font-bold">investors, lenders, and government agencies,</span> helping them assess the feasibility and viability of a project.
            </p>
            <p className={paragraphStyle}>
              At <span className="font-bold">Calzone,</span> we specialize in preparing <span className="font-bold text-[#DB3269]">high-quality DPRs</span> that enhance your chances of securing financial assistance, especially for <span className="font-bold">bank loans, grants, and investment proposals.</span> Whether you're a <span className="font-bold">startup, entrepreneur, or an established business,</span> a well-prepared DPR can significantly impact your project's success.
            </p>
          </section>

          {/* Why Choose */}
          <section id="Why-Choose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for Your DPR?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Higher Loan Approval', desc: 'Our comprehensive and compliant DPRs increase the probability of securing necessary funding.', icon: Landmark },
                { title: 'Time & Cost Savings', desc: 'Our experienced team streamlines the DPR process, saving valuable time and reducing costs.', icon: Zap },
                { title: 'Professionalism', desc: 'A well-structured DPR showcases your professionalism and commitment to your project.', icon: Award },
                { title: 'Customized Solutions', desc: 'Every project is unique; we tailor our DPRs to meet the specific needs of your business.', icon: Settings },
                { title: 'Expert Guidance', desc: 'Benefit from industry insights, financial expertise, and strategic recommendations.', icon: Lightbulb }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-white hover:border-[#DB3269] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#DB3269]/10 flex items-center justify-center text-[#DB3269] mb-4">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[16px] text-[#222222] mb-2">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Required */}
          <section id="Documents-Required" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Documents Required for DPR</h2>
            <p className={paragraphStyle}>The documents required for a DPR vary based on the nature of the project and specific lender or investor requirements. However, some common documents include:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { title: 'Business Documents', items: ['Project concept note', 'Business plan', 'Executive summary', 'Letters of intent from customers/suppliers'] },
                { title: 'Market & Financial', items: ['Feasibility study', 'Market research report', 'Financial projections (BS, PL, Cash Flow)', 'Risk assessment'] },
                { title: 'Technical & Compliance', items: ['Technical specifications', 'Environmental & social impact assessment', 'Land acquisition documents', 'Construction permits', 'Regulatory compliance assessment'] }
              ].map((section, i) => (
                <div key={i} className="p-6 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[16px] text-[#222222] mb-4 uppercase tracking-wider border-b border-[#DB3269] pb-2">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-gray-600">
                        <Check size={14} className="text-[#DB3269] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-[#DB3269]">At Calzone, we craft DPRs that are clear, concise, and visually appealing to captivate stakeholders.</p>
          </section>

          {/* DPR Services */}
          <section id="DPR-Services" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Our DPR Services Include</h2>
            <div className="space-y-8">
              {[
                { title: 'Project Assessment', desc: 'We conduct a detailed analysis of your project\'s scope, objectives, financial needs, and growth potential.', icon: Search },
                { title: 'Market Research & Feasibility', desc: 'Competitor analysis, industry trends, demand forecasts, and evaluation of market risks.', icon: Globe },
                { title: 'Financial Projections', desc: 'Revenue model, expense analysis, profitability estimation, and preparation of full financial statements.', icon: BarChart3 },
                { title: 'Technical & Engineering', desc: 'For technical projects, we include detailed specifications, schematics, and feasibility analysis.', icon: Settings },
                { title: 'Risk Analysis', desc: 'We assess potential business, financial, operational, and market risks with effective mitigation strategies.', icon: ShieldCheck },
                { title: 'Legal & Regulatory Compliance', desc: 'Ensuring your DPR aligns with government regulations and all necessary compliance requirements.', icon: Scale },
                { title: 'Executive Summary & Pitch', desc: 'Assistance in pitching your DPR to lenders, investors, and grant authorities with a compelling summary.', icon: Target },
                { title: 'Presentation & Consultation', desc: 'Expert consultation & coaching to help you effectively communicate your proposal.', icon: Users }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 hover:bg-[#F9F9F9] transition-colors border-b border-gray-100 last:border-b-0 group">
                  <div className="w-12 h-12 bg-[#222222] text-white flex items-center justify-center shrink-0 group-hover:bg-[#DB3269] transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries We Serve */}
          <section id="Industries" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Industries We Serve</h2>
            <p className={paragraphStyle}>Calzone provides <span className="font-bold">DPR preparation services</span> for various industries, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { name: 'Manufacturing', icon: Factory },
                { name: 'Startups', icon: Rocket },
                { name: 'Real Estate', icon: Building },
                { name: 'Agriculture', icon: Briefcase },
                { name: 'Renewable Energy', icon: Zap },
                { name: 'Healthcare', icon: HeartPulse },
                { name: 'IT & Tech', icon: Laptop },
                { name: 'Retail & E-Com', icon: ShoppingCart }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 flex flex-col items-center gap-3 bg-white hover:shadow-md transition-shadow">
                  <item.icon className="text-[#DB3269]" size={28} />
                  <span className="font-bold text-[14px] text-[#222222] text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How Calzone Helps */}
          <section id="Calzone-Helps" className="scroll-mt-32 pb-20">
            <h2 className={`${subHeadingStyle} mb-8`}>How Calzone Can Help You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'End-to-End DPR Preparation', desc: 'We create a complete, investor-ready report from scratch.' },
                { title: 'Lender & Investor Compliance', desc: 'We align the DPR with the specific requirements of banks, NBFCs, and investors.' },
                { title: 'Data-Driven Research', desc: 'Our reports are backed by detailed market analysis and financial forecasting.' },
                { title: 'Faster Processing & Approval Support', desc: 'Increase your chances of approval with a well-structured DPR.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-[#222222] text-white">
                  <FileCheck className="text-[#DB3269] shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-[16px] mb-1">{item.title}</h4>
                    <p className="text-[14px] opacity-70 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectReport;
