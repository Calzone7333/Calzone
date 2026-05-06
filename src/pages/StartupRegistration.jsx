import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Rocket, TrendingUp, Check, Plus, Minus } from 'lucide-react';

const StartupRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Schemes', id: 'Schemes' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Process', id: 'Process' },
    { name: 'Tax Benefits', id: 'TaxBenefits' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Startup Business Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Startup Business Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Accelerate Your Innovation with Government Recognition and Strategic Compliance
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business is an exciting journey that requires the right guidance, structure, and support. As entrepreneurship is booming, many individuals are taking the leap into innovation and business ownership. The Indian government actively encourages startups through various schemes, subsidies, and tax exemptions to help new businesses thrive.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the startup registration process, ensuring that entrepreneurs get the best legal, financial, and compliance support to set up and scale their businesses seamlessly.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-10 border-b border-gray-100 sticky top-[72px] bg-white z-40">
          <ul className="flex flex-wrap items-center gap-6 py-2">
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
        <div className="space-y-12">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Strategic Business Structures</h2>
            <p className={paragraphStyle}>Choosing the right legal structure is the first milestone for any startup.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'OPC', desc: 'Solopreneurs seeking corporate status and limited liability.', icon: Briefcase },
                { title: 'Private Limited', desc: 'High-growth startups looking for VC investment.', icon: Rocket },
                { title: 'LLP', desc: 'Service-based firms seeking operational flexibility.', icon: Handshake }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className={subHeadingStyle}>{item.title}</h4>
                  <p className={`${paragraphStyle} text-[12px] mb-0`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Government Schemes */}
          <section id="Schemes" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Key Government Initiatives</h2>
            <div className="space-y-6">
              {[
                { title: 'Startup India Initiative', desc: 'Offers faster patent approvals, tax holidays, and incubation support.', icon: Zap },
                { title: 'ASPIRE Scheme', desc: 'Focuses on promoting innovation in rural industries and agriculture.', icon: Landmark },
                { title: 'Udyam Registration', desc: 'Grants access to priority sector lending and lower interest loans.', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] flex items-start gap-4">
                  <div className="text-[#DB3269] shrink-0"><item.icon size={28} /></div>
                  <div>
                    <h4 className={subHeadingStyle}>{item.title}</h4>
                    <p className={`${paragraphStyle} text-[14px] mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility for Recognition</h2>
            <div className="p-8 bg-[#222222] text-white">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Entity age should not exceed 10 years from incorporation.',
                  'Annual turnover should not have exceeded ₹100 Crore.',
                  'Should be working towards innovation or scalability.',
                  'Must be a Private Ltd, LLP, or Registered Partnership.',
                  'Entity should not be formed by splitting up or reconstruction.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                    <Check size={16} className="text-[#DB3269]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>The Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Entity Incorporation', desc: 'Register your business as a Private Limited Company or LLP.' },
                { step: '2', title: 'DPIIT Application', desc: 'Apply for recognition on the Startup India portal with business details.' },
                { step: '3', title: 'Document Upload', desc: 'Submit pitch deck, video link, and proof of innovation.' },
                { step: '4', title: 'DPIIT Recognition', desc: 'Receive the DPIIT Certificate and access tax-saving benefits.' },
                { step: '5', title: 'Statutory Compliance', desc: 'Maintain annual filings to keep the startup status active.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">{item.step}</div>
                  <div>
                    <p className={subHeadingStyle}>{item.title}</p>
                    <p className={`${paragraphStyle} mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tax Benefits */}
          <section id="TaxBenefits" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Exclusive Tax Exemptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#fce7f3]">
                <h4 className={`${subHeadingStyle} mb-4 border-b border-[#DB3269] pb-2 uppercase`}>Income Tax Holiday:</h4>
                <p className={`${paragraphStyle} text-[14px] mb-4`}>Eligible startups enjoy 100% tax exemption for 3 consecutive years within a block of 10 years.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className={`${subHeadingStyle} text-[#DB3269] mb-4 border-b border-gray-800 pb-2 uppercase`}>Angel Tax Exemption:</h4>
                <p className={`${paragraphStyle} text-gray-400 mb-4`}>Investments from angel investors above Fair Market Value (FMV) are exempt from tax under Section 56(2)(viib).</p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'DPIIT Experts', icon: Rocket },
                { title: 'Tax Optimization', icon: TrendingUp },
                { title: 'Pitch Assistance', icon: FileText },
                { title: 'Fast Approvals', icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 group hover:border-[#DB3269] transition-all">
                  <div className="flex justify-center mb-3 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className={`${subHeadingStyle} text-[14px] text-center`}>{item.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupRegistration;
