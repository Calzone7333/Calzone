import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserPlus, UserCheck, Check, Plus, Minus } from 'lucide-react';

const AddDirector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Director Types', id: 'DirectorTypes' },
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
          <span className="text-[#DB3269]">Adding a Director</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Adding a Director
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Strategic Board Expansion and Statutory Compliance for Corporate Entities
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Adding a director to your company board is a significant corporate action that requires adherence to the Companies Act, 2013. Whether you are scaling operations, bringing in specialized expertise, or meeting regulatory quotas (like appointing a Woman Director), the process must be documented with precision to avoid ROC penalties.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we facilitate the end-to-end appointment process—from checking AOA (Articles of Association) provisions to filing the final DIR-12 form with the Ministry of Corporate Affairs.
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
            <h2 className={sectionHeadingStyle}>Board Expansion Strategy</h2>
            <p className={paragraphStyle}>
              A Private Limited Company must have at least 2 directors, while a Public Limited Company requires a minimum of 3. The maximum limit is 15, unless a special resolution is passed.
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Board expansion is not just a compliance task; it's a strategic move to bring diverse perspectives and expertise to your corporate governance.
              </p>
            </div>
          </section>

          {/* Director Types */}
          <section id="DirectorTypes" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Types of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Executive Director', desc: 'Actively involved in day-to-day management (CEO, CFO, MD).', icon: UserPlus },
                { title: 'Independent Director', desc: 'Non-executive directors who provide unbiased oversight.', icon: Scale },
                { title: 'Nominee Director', desc: 'Appointed by financial institutions or stakeholders to protect interests.', icon: Landmark },
                { title: 'Woman Director', desc: 'Statutory requirement for certain classes of public companies.', icon: UserCheck }
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
            <h2 className={sectionHeadingStyle}>The Appointment Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'DIN & DSC Application', desc: 'Obtain Director Identification Number and Digital Signature for the candidate.' },
                { step: '2', title: 'Board Meeting', desc: 'Convene a board meeting to pass a resolution for the appointment.' },
                { step: '3', title: 'Consent & Declaration', desc: 'Obtain consent (DIR-2) and disqualification disclosure (DIR-8) from the director.' },
                { step: '4', title: 'ROC Filing', desc: 'File Form DIR-12 with the Registrar of Companies within 30 days.' },
                { step: '5', title: 'Statutory Update', desc: 'Update the Register of Directors and notify relevant banks/authorities.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-bold text-[14px] shrink-0">{item.step}</div>
                  <div>
                    <p className="font-bold text-[#222222] text-[16px]">{item.title}</p>
                    <p className="text-[15px] text-[#585858]">{item.desc}</p>
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
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">From the Candidate:</h4>
                <ul className="space-y-3">
                  {['PAN Card (Self-Attested)', 'Aadhaar / Passport / Voter ID', 'Passport Size Photograph', 'Digital Signature (DSC)', 'Consent Form (DIR-2)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">From the Company:</h4>
                <ul className="space-y-3">
                  {['Certified Board Resolution', 'Form DIR-8 (Disqualification)', 'MBP-1 (Disclosure of Interest)', 'Amended AOA (if required)'].map((item, i) => (
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
                { title: 'Expert Drafting', icon: FileText },
                { title: 'Fast-Track DIN', icon: Zap },
                { title: 'End-to-End Filing', icon: ShieldCheck },
                { title: 'ROC Liaisoning', icon: Landmark }
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

export default AddDirector;
