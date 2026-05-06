import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Edit, Check, Plus, Minus } from 'lucide-react';

const LlpNameChange = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Reasons', id: 'Reasons' },
    { name: 'Legal Effects', id: 'Effects' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
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
          <span className="text-[#DB3269]">LLP Name Change</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          LLP Name Change
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Rebranding and Statutory Identity Modification under the LLP Act, 2008
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The name of a Limited Liability Partnership (LLP) is its primary brand and legal identifier. As businesses scale, pivot, or rebrand, changing the LLP name becomes a strategic necessity. This process involves a formal application to the Registrar of Companies (ROC) to ensure the new name is unique and compliant with naming guidelines.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we manage the entire lifecycle of an LLP name change—from availability checks using RUN-LLP to the drafting of the supplementary agreement and final filing of Form 3 and Form 5.
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
            <h2 className={sectionHeadingStyle}>Statutory Continuity</h2>
            <p className={paragraphStyle}>
              "A name change does not create a new legal entity. All existing contracts, liabilities, and legal proceedings remain valid and continue under the new name."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The transition requires updating the LLP agreement and notifying all stakeholders, including banks, tax authorities, and vendors.
              </p>
            </div>
          </section>

          {/* Reasons */}
          <section id="Reasons" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Change the Name?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Voluntary Reasons:</h4>
                <ul className="space-y-3">
                  {['Business model pivot or expansion', 'Reflecting change in ownership', 'Modernizing brand identity', 'Aligning with parent company name'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Compulsory Reasons:</h4>
                <p className="text-gray-400 text-[14px] italic">
                  "The Central Government may direct an LLP to change its name if it is identical to or too similar to an existing name or trademark."
                </p>
              </div>
            </div>
          </section>

          {/* Legal Effects */}
          <section id="Effects" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Statutory Obligations Post-Change</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'New Certificate', desc: 'Receipt of fresh COI from the ROC under the new name.', icon: ShieldCheck },
                { title: 'Agreement Update', desc: 'Drafting and filing a supplementary LLP agreement.', icon: FileText },
                { title: 'Tax & Bank Update', desc: 'Updating PAN, TAN, GSTIN, and bank account records.', icon: Landmark }
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
            <h2 className={sectionHeadingStyle}>The Rebranding Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Name Reservation', desc: 'Check availability and reserve name via the RUN-LLP portal.' },
                { step: '2', title: 'Partner Approval', desc: 'Pass a resolution in accordance with the existing LLP agreement.' },
                { step: '3', title: 'Form 5 Filing', desc: 'Submit notice of name change to the ROC within 30 days.' },
                { step: '4', title: 'Supplementary Agreement', desc: 'Draft and stamp the amended agreement within 30 days of name change.' },
                { step: '5', title: 'Form 3 Filing', desc: 'File the supplementary agreement with the ROC for final record update.' }
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
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Core Requirements:</h4>
                <ul className="space-y-3">
                  {['Copy of existing LLP Agreement', 'Resolution for name change', 'Notice of reservation of name (RUN)', 'Supplementary LLP Agreement'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Partner Consent:</h4>
                <ul className="space-y-3">
                  {['Consent letter from all partners', 'Authority letter for filing', 'Digital Signature of Designated Partner', 'Identity proof of signatory'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'RUN-LLP Experts', icon: Edit },
                { title: 'Agreement Drafting', icon: FileText },
                { title: 'ROC Liaisoning', icon: Landmark },
                { title: 'Fast Approval', icon: Zap }
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

export default LlpNameChange;
