import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Trash2, Ban, Check, Plus, Minus } from 'lucide-react';

const ClosureOfLlp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Legal Basis', id: 'Legal' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Conditions', id: 'Conditions' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const sectionHeadingStyle = "font-poppins font-bold text-[24px] text-[#222222] mb-4";
  const paragraphStyle = "font-poppins font-normal text-[16px] leading-[24px] text-[#585858] mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Closure of LLP</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Closure of LLP (Form 24)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Formal Strike-Off and Dissolution of Limited Liability Partnership under Rule 37
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Closure of an LLP involves the voluntary removal of its name from the Register of LLPs maintained by the ROC. This process is essential for partnerships that have either never commenced business or have been inactive for a significant period. Under Rule 37 of the LLP Rules, 2009, an LLP that has not been in operation for one year or more can apply for a strike-off.
          </p>
          <p className={paragraphStyle}>
            Simply abandoning an LLP without a formal closure can lead to massive cumulative penalties (₹100 per day) for non-filing of Form 8 and Form 11, and potential legal prosecution of the designated partners.
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
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative ${
                    activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#585858] hover:text-[#DB3269]'
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
            <h2 className={sectionHeadingStyle}>Statutory Framework</h2>
            <p className={paragraphStyle}>
              "Section 75 of the LLP Act empowers the Registrar to strike off defunct LLPs, while Rule 37 provides a voluntary application route for partners."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Voluntary closure is the most straightforward way to exit a partnership that is no longer commercially viable.
              </p>
            </div>
          </section>

          {/* Legal Basis */}
          <section id="Legal" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Grounds for Closure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Inactivity', desc: 'No business operations for at least 1 year.', icon: Trash2 },
                { title: 'Mutual Consent', desc: 'All partners agree to dissolve the partnership.', icon: Briefcase },
                { title: 'NIL Assets', desc: 'The LLP has no outstanding assets or liabilities.', icon: Ban }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Closure Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Partner Approval', desc: 'Pass a resolution for closure and authorize partners for the process.' },
                { step: '2', title: 'Asset Liquidation', desc: 'Realize all assets and settle all external debts and creditors.' },
                { step: '3', title: 'Bank Closure', desc: 'Close all bank accounts and obtain a NOC or zero balance certificate.' },
                { step: '4', title: 'ROC Filing (Form 24)', desc: 'Submit the strike-off application with a statement of assets and liabilities.' },
                { step: '5', title: 'Public Notice', desc: 'The ROC issues a public notice to invite any objections to the closure.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-bold text-[14px] shrink-0">{item.step}</div>
                  <div>
                    <p className="font-bold text-[#222222] text-[16px]">{item.title}</p>
                    <p className={paragraphStyle.replace('mb-4', 'mb-0')}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Core Filing Docs:</h4>
                <ul className="space-y-3">
                  {['Statement of Assets and Liabilities', 'Indemnity Bond signed by Partners', 'Affidavit of No Liabilities', 'Consent of all Partners'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Identity & Proofs:</h4>
                <ul className="space-y-3">
                  {['Copy of PAN Card of Partners', 'Aadhaar Card of Partners', 'Bank Closure Certificate', 'Latest Income Tax Returns'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Conditions */}
          <section id="Conditions" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Mandatory Prerequisites</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">Clean Slate Policy</p>
                <p className="text-[14px] text-[#585858]">
                  LLPs must file ALL overdue Form 8 and Form 11 returns up to the date of cessation of business before applying for closure via Form 24.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'NIL Asset Prep', icon: FileText },
                { title: 'Affidavit Drafting', icon: Scale },
                { title: 'ROC Liaisoning', icon: Landmark },
                { title: 'Fast Track Exit', icon: Zap }
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

export default ClosureOfLlp;
