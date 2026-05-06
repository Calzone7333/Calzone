import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Handshake, Users, Check, Plus, Minus } from 'lucide-react';

const PartnershipFirm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Deed Clauses', id: 'Deed' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Comparison', id: 'Comparison' },
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
          <span className="text-[#DB3269]">Partnership Firm Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Partnership Firm Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Collaborative Business Growth through Structured Partnership Agreements
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business with like-minded partners can be an excellent way to build a strong, collaborative, and scalable enterprise. A Partnership Firm allows two or more individuals to come together, share responsibilities, and divide profits based on a mutual agreement.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we help entrepreneurs set up their Partnership Firms legally and seamlessly, ensuring proper documentation, registration, and compliance to protect business interests.
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
            <h2 className={`${headingStyle} mb-4`}>What is a Partnership Firm?</h2>
            <p className={paragraphStyle}>
              A Partnership Firm is a business entity formed when two or more people agree to manage and operate a business while sharing profits and responsibilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { title: 'Shared Responsibility', desc: 'Distribute management and financial duties among partners.', icon: Handshake },
                { title: 'Easy Setup', desc: 'Minimal legal formalities compared to a company structure.', icon: Zap },
                { title: 'Cost Effective', desc: 'Lower registration costs and maintenance compliance.', icon: Landmark },
                { title: 'Flexible Terms', desc: 'Operating rules are dictated by a mutually agreed deed.', icon: Scale }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] flex items-start gap-4">
                  <div className="text-[#DB3269] shrink-0"><item.icon size={28} /></div>
                  <div>
                    <h4 className={subHeadingStyle}>{item.title}</h4>
                    <p className={`${paragraphStyle} text-[12px] mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deed Clauses */}
          <section id="Deed" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>The Partnership Deed</h2>
            <p className={paragraphStyle}>A well-drafted deed is the foundation of a successful partnership, preventing future disputes.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Financial Clauses:</h4>
                <ul className="space-y-3">
                  {['Capital Contribution per Partner', 'Profit & Loss Sharing Ratio', 'Interest on Capital/Drawings', 'Partner Salaries & Commissions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Governance Clauses:</h4>
                <ul className="space-y-3">
                  {['Roles & Decision Making Authority', 'Dispute Resolution Mechanism', 'Retirement & Death Provisions', 'Dissolution Procedures'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Name Selection', desc: 'Select a unique name that does not conflict with trademarks.' },
                { step: '2', title: 'Deed Drafting', desc: 'Draft the legal agreement and print on stamp paper of appropriate value.' },
                { step: '3', title: 'PAN & TAN Application', desc: 'Obtain statutory tax identifiers for the firm entity.' },
                { step: '4', title: 'Registrar Filing', desc: 'Submit the deed and Form 1 to the Registrar of Firms (ROF).' },
                { step: '5', title: 'Bank Opening', desc: 'Open a business bank account using the registration certificate.' }
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

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">From Partners:</h4>
                <ul className="space-y-3">
                  {['PAN & Aadhaar of all Partners', 'Passport Size Photographs', 'Voter ID / Driving License', 'Personal Bank Statement'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">From Firm:</h4>
                <ul className="space-y-3">
                  {['Notarized Partnership Deed', 'Rent Agreement / Property Proof', 'Utility Bill of Business Address', 'NOC from Property Owner'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section id="Comparison" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Partnership vs Pvt Ltd</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-left font-bold">Feature</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">Partnership Firm</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">Private Limited</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Legal Status', 'Not a separate entity', 'Separate Legal Entity'],
                    ['Liability', 'Unlimited (Partners personally liable)', 'Limited to Share Capital'],
                    ['Compliance', 'Minimal', 'Higher / Annual Audits'],
                    ['Fundraising', 'Via Partner Capital only', 'Equity / Venture Capital'],
                    ['Taxation', 'Flat 30% on Firm Profits', '25% for small companies']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 font-bold">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-[#DB3269]">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-[#222222]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Custom Deeds', icon: FileText },
                { title: 'Tax Strategy', icon: Zap },
                { title: 'Fast ROF Filing', icon: Landmark },
                { title: 'Dispute Mgmt', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 group hover:border-[#DB3269] transition-all">
                  <div className="flex justify-center mb-3 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[14px]">{item.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PartnershipFirm;
