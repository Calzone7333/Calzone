import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserMinus, Check, Plus, Minus } from 'lucide-react';

const DinSurrender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Grounds', id: 'Grounds' },
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
          <span className="text-[#DB3269]">DIN Surrender</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          DIN Surrender (Form DIR-5)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Voluntary or Statutory Cessation of Director Identification Number
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            DIN Surrender is the formal process of canceling a Director Identification Number issued by the MCA. This is typically required in cases of duplication (where an individual inadvertently obtained two DINs) or when an individual who never became a director wishes to clean their regulatory records.
          </p>
          <p className={paragraphStyle}>
            The process is governed by Rule 11 of the Companies (Appointment and Qualification of Directors) Rules, 2014, and is executed through the submission of e-Form DIR-5.
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
            <h2 className={sectionHeadingStyle}>The Surrender Framework</h2>
            <p className={paragraphStyle}>
              "If a DIN has been used for any statutory filing, it cannot be surrendered voluntarily. It remains part of the company's permanent history."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Holding multiple DINs is a punishable offense under Section 155 of the Companies Act. Surrendering duplicate DINs is essential for compliance.
              </p>
            </div>
          </section>

          {/* Grounds */}
          <section id="Grounds" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Valid Grounds for Surrender</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Multiple DINs', desc: 'Inadvertently obtaining more than one DIN for the same person.', icon: AlertCircle },
                { title: 'Voluntary Opt-out', desc: 'Individual who was never appointed and never used the DIN.', icon: UserMinus },
                { title: 'Death of Director', desc: 'Statutory cancellation upon demise of the DIN holder.', icon: Landmark },
                { title: 'Unsound Mind', desc: 'Individual declared of unsound mind by a competent court.', icon: Scale },
                { title: 'Insolvency', desc: 'If the individual is adjudicated as an insolvent.', icon: Briefcase },
                { title: 'False Identity', desc: 'If the DIN was obtained by furnishing false information.', icon: Gavel }
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
            <h2 className={sectionHeadingStyle}>The Surrender Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Grounds Check', desc: 'Verify if the DIN has ever been used for any MCA filings.' },
                { step: '2', title: 'Affidavit Prep', desc: 'Draft a formal affidavit of surrender declaring no misuse of DIN.' },
                { step: '3', title: 'Form DIR-5 Prep', desc: 'Input personal details and reason for surrender in the eForm.' },
                { step: '4', title: 'Professional Cert', desc: 'Certification by a practicing CA, CS, or Cost Accountant.' },
                { step: '5', title: 'MCA Approval', desc: 'The Registrar reviews the application and cancels the DIN.' }
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
                  {['Notarized Affidavit for Surrender', 'Indemnity Bond for DIN Cancellation', 'Self-attested PAN and Aadhaar Card', 'Copy of Death Certificate (if applicable)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Filing Records:</h4>
                <ul className="space-y-3">
                  {['Signed eForm DIR-5', 'Digital Signature (DSC) of Holder', 'Professional Certification', 'Proof of reason for surrender'].map((item, i) => (
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
                { title: 'Affidavit Drafting', icon: FileText },
                { title: 'Compliance Check', icon: ShieldCheck },
                { title: 'Fast Processing', icon: Zap },
                { title: 'Statutory Support', icon: Landmark }
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

export default DinSurrender;
