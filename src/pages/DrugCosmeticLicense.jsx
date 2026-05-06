import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Microscope, ShoppingBag, ShieldCheck, FileText, Landmark, Gavel, AlertCircle, ThermometerSnowflake, Check, Plus, Minus, Zap } from 'lucide-react';

const DrugCosmeticLicense = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'License Types', id: 'Types' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
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
          <span className="text-[#DB3269]">Drug & Cosmetic License</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Drug & Cosmetic License
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Regulatory Compliance under the Drugs and Cosmetics Act, 1940
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The Drug & Cosmetic License is a mandatory requirement for any business involved in the manufacturing, wholesale, distribution, or retail sale of pharmaceutical drugs and cosmetic products in India. Regulated by the CDSCO (Central Drugs Standard Control Organization), this license ensures that public health is protected by enforcing strict quality and safety standards.
          </p>
          <p className={paragraphStyle}>
            Whether you are starting a pharmacy (Retail), a distribution agency (Wholesale), or a beauty brand (Manufacturing), obtaining the correct license is the first step toward legal operations.
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
            <h2 className={sectionHeadingStyle}>Statutory Body</h2>
            <p className={paragraphStyle}>
              "All pharmaceutical activities are governed by the State Drug Control Departments and the CDSCO to maintain the integrity of the supply chain."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Licenses are now perpetual in nature as long as the retention fee is paid every 5 years, ensuring long-term operational continuity for food and pharma businesses.
              </p>
            </div>
          </section>

          {/* License Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Common License Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Manufacturing', desc: 'For units producing drugs/cosmetics. GMP compliant.', icon: Microscope },
                { title: 'Wholesale', desc: 'For distributors selling to pharmacies or hospitals.', icon: ShoppingBag },
                { title: 'Retail', desc: 'For pharmacies and chemists selling to patients.', icon: ShieldCheck },
                { title: 'Loan License', desc: 'For brands using third-party licensed facilities.', icon: FileText },
                { title: 'Import License', desc: 'For bringing foreign drugs or cosmetics into India.', icon: Landmark },
                { title: 'Restricted License', desc: 'For stores selling specific household medicines.', icon: Gavel }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-6 border-b border-gray-800 pb-2 uppercase">Technical Staff:</h4>
                <ul className="space-y-4">
                  {['Registered Pharmacist (State Council)', 'Graduate with 1yr experience in drugs', 'Competent person with 4yrs experience', 'Compliance with Pharmacopoeia standards'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-gray-400 font-bold"><Check size={18} className="text-[#DB3269]" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-6 border-b border-[#DB3269] pb-2 uppercase">Infrastructure:</h4>
                <ul className="space-y-4">
                  {['Min 10-15 Sq. Mtrs area for retail', 'Independent premises for wholesale', 'Refrigerators & Coolers installed', 'Hygiene & ventilation controls'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-[#585858] font-bold"><ThermometerSnowflake size={18} className="text-[#DB3269]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Site Records', desc: 'Layout plan, blueprint, and ownership proof.' },
                { title: 'Identity Docs', desc: 'PAN, Aadhaar, and Photos of stakeholders.' },
                { title: 'Technical Docs', desc: 'Pharmacist Registration and Qual proofs.' },
                { title: 'Equipment', desc: 'Invoices for Fridge/AC units.' },
                { title: 'Affidavits', desc: 'Self-declaration on non-conviction.' },
                { title: 'Constitutional', desc: 'MOA/AOA or Partnership Deed.' }
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-100 bg-[#F9F9F9]">
                  <h4 className="font-bold text-[#222222] text-[14px] mb-2">{item.title}</h4>
                  <p className="text-[12px] text-[#585858]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Licensing Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Online Application', desc: 'Submission on the CDSCO or State Drug Control portal.' },
                { step: '2', title: 'Document Audit', desc: 'Initial scrutiny of proofs and technical staff qualifications.' },
                { step: '3', title: 'Physical Inspection', desc: 'Drug Inspector (DI) visits the site for infra verification.' },
                { step: '4', title: 'Grant of License', desc: 'Issuance of the license (Initial validity of 5 Years).' },
                { step: '5', title: 'Retention Filing', desc: 'Periodic retention fee payment to keep the license perpetual.' }
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

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Technical Liaison', icon: Microscope },
                { title: 'DI Inspection Prep', icon: ShieldCheck },
                { title: 'Zero Data Errors', icon: FileText },
                { title: 'Retention Alerts', icon: AlertCircle }
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

export default DrugCosmeticLicense;
