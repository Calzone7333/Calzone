import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Trash2, Ban, Check, Plus, Minus } from 'lucide-react';

const ClosureOfPrivateLimited = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Restrictions', id: 'Restrictions' },
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
          <span className="text-[#DB3269]">Closure of Private Limited</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Closure of Private Limited Company
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Voluntary Strike-Off (Form STK-2) and Formal Dissolution under the Companies Act, 2013
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Closing a Private Limited Company is as formal a process as starting one. If a company has ceased operations or never commenced business, it is vital to legally strike it off the ROC records to avoid the compounding of annual penalties, director disqualification, and heavy late fees on financial statement filings.
          </p>
          <p className={paragraphStyle}>
            The MCA allows for a "Fast Track Exit" via the STK-2 form, provided the company has no liabilities and has either not started business within one year or has been inactive for the last two financial years.
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
              "Defaulting on annual filings (AOC-4/MGT-7) even for an inactive company can lead to the freezing of directors' PAN/DIN and a daily penalty of ₹100 per form."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Voluntary strike-off is a cost-effective way to dissolve a company without going through the lengthy process of winding up or liquidation.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Eligibility for Strike-Off</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'No Commencement', desc: 'Company failed to start business within 1 year of incorporation.', icon: Ban },
                { title: 'Inactivity', desc: 'No business activity for the last 2 financial years.', icon: Trash2 },
                { title: 'Subscription Default', desc: 'Subscribers failed to pay share capital within 180 days.', icon: AlertCircle }
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
            <h2 className={sectionHeadingStyle}>Closure Procedure</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Board Approval', desc: 'Convene board meeting to approve strike-off and authorize directors.' },
                { step: '2', title: 'Liability Clearance', desc: 'Ensure all bank accounts are closed and all external liabilities are settled.' },
                { step: '3', title: 'Shareholder Approval', desc: 'Obtain 75% shareholder approval via Special Resolution or Consent.' },
                { step: '4', title: 'Form STK-2 Filing', desc: 'Prepare and file the strike-off application with supporting affidavits.' },
                { step: '5', title: 'MCA Publication', desc: 'The ROC publishes the notice of strike-off in the Gazette for objections.' }
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
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Statutory Docs:</h4>
                <ul className="space-y-3">
                  {['Indemnity Bond (Form STK-3)', 'Affidavit of No Liabilities (STK-4)', 'Certified Statement of Accounts', 'Special Resolution Copy'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Company Records:</h4>
                <ul className="space-y-3">
                  {['Bank Account Closure Certificate', 'Latest Income Tax Returns', 'Consent from all Shareholders', 'Signed eForm STK-2'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Restrictions */}
          <section id="Restrictions" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Negative List for STK-2</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">Non-Eligible Cases</p>
                <p className="text-[14px] text-[#585858]">
                  Companies cannot apply for strike-off if they have changed name, shifted office between states, or disposed of assets for value in the last 3 months.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Statement Prep', icon: FileText },
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

export default ClosureOfPrivateLimited;
