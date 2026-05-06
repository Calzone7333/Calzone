import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Edit, Users, TrendingUp, Check, Plus, Minus } from 'lucide-react';

const LlpAgreementChanges = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Modifications', id: 'Modifications' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Deadlines', id: 'Deadlines' },
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
          <span className="text-[#DB3269]">Changes in LLP Agreement</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Changes in LLP Agreement
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Formal Amendment of the Partnership Charter and Statutory Reporting (Form 3)
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The LLP Agreement is the foundational contract that governs the relationship between partners and the LLP entity. As business needs evolve—whether through capital infusion, a shift in management roles, or a change in profit-sharing—the agreement must be updated through a <span className="font-bold">Supplementary Deed</span>.
          </p>
          <p className={paragraphStyle}>
            Unlike a traditional partnership, an LLP must report every modification in its agreement to the Registrar of Companies (ROC). Failure to update the agreement on the MCA portal within the statutory timeframe can lead to significant daily penalties.
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
            <h2 className={sectionHeadingStyle}>Statutory Mandate</h2>
            <p className={paragraphStyle}>
              "Any change in the information contained in the LLP Agreement must be filed with the Registrar in Form 3 within 30 days of the change."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The supplementary deed must be properly stamped as per the state stamp act to be legally valid and acceptable by the ROC.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section id="Modifications" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Common Modifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Capital Infusion', desc: 'Increase or decrease in the capital contribution of partners.', icon: TrendingUp },
                { title: 'Profit Ratio Change', desc: 'Restructuring the profit/loss sharing percentages.', icon: Scale },
                { title: 'Role Redefinition', desc: 'Changing duties, powers, and restrictions of partners.', icon: Gavel },
                { title: 'Business Activities', desc: 'Adding or modifying the nature of business operations.', icon: Edit },
                { title: 'Remuneration', desc: 'Updating the salary or commission structure for partners.', icon: Briefcase },
                { title: 'Partner Admission', desc: 'Updating rights and obligations for newly added partners.', icon: Users }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] flex items-start gap-4">
                  <div className="text-[#DB3269] shrink-0"><item.icon size={28} /></div>
                  <div>
                    <h4 className="font-bold text-[#222222] text-[16px] mb-1">{item.title}</h4>
                    <p className="text-[#585858] text-[12px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Modification Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Partner Consent', desc: 'Obtain mutual consent from all partners for the proposed changes.' },
                { step: '2', title: 'Supplementary Deed', desc: 'Draft the amended clauses in a supplementary LLP agreement.' },
                { step: '3', title: 'Stamping & Signing', desc: 'Execute the deed on non-judicial stamp paper of appropriate value.' },
                { step: '4', title: 'ROC Filing (Form 3)', desc: 'File the notice of change and the deed with the ROC within 30 days.' },
                { step: '5', title: 'Record Update', desc: 'Maintain the updated agreement in the LLP records for future reference.' }
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
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">The Deed Kit:</h4>
                <ul className="space-y-3">
                  {['Original LLP Agreement Copy', 'Supplementary LLP Agreement (Draft)', 'Resolution signed by Partners', 'Authority letter for filing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Compliance Docs:</h4>
                <ul className="space-y-3">
                  {['Proof of Stamp Duty payment', 'Identity proof of signing Partner', 'DSC of the Designated Partner', 'Latest Financial Statements (if capital change)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Deadlines */}
          <section id="Deadlines" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Statutory Timelines</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">The 30-Day Rule</p>
                <p className="text-[14px] text-[#585858]">
                  Failure to file the updated agreement within <span className="font-bold">30 days</span> attracts a penalty of <span className="font-bold text-[#DB3269]">₹100 per day</span>, with no upper limit.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Deed Drafting', icon: FileText },
                { title: 'Stamp Duty Guidance', icon: Scale },
                { title: 'ROC Submission', icon: Zap },
                { title: 'Compliance Audit', icon: ShieldCheck }
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

export default LlpAgreementChanges;
