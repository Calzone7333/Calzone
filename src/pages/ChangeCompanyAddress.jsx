import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, MapPin, Building, Globe, Check, Plus, Minus } from 'lucide-react';

const ChangeCompanyAddress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Important', id: 'Importance' },
    { name: 'Types of Change', id: 'Types' },
    { name: 'Procedure', id: 'Procedure' },
    { name: 'Compliance', id: 'Compliance' },
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
          <span className="text-[#DB3269]">Change Company Address</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Change Company Address
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Formal Relocation and Statutory Address Modification for Registered Entities
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The Registered Office of a company is its official domicile where all government notices, court summons, and legal documents are served. Under Section 12 of the Companies Act, 2013, any change in this address must be notified to the Registrar of Companies (ROC) within 30 days.
          </p>
          <p className={paragraphStyle}>
            Whether you are moving next door or to a different state, the procedure involves specific board resolutions, shareholder approvals, and in some cases, approval from the Regional Director (RD).
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
            <h2 className={sectionHeadingStyle}>Statutory Domicile</h2>
            <p className={paragraphStyle}>
              "Every company shall, on and from the 15th day of its incorporation and at all times thereafter, have a registered office capable of receiving and acknowledging all communications."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Failure to maintain a functional registered office can lead to severe penalties and even the striking off of the company's name.
              </p>
            </div>
          </section>

          {/* Importance */}
          <section id="Importance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why is Address Update Critical?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Legal Service', desc: 'Ensures all legal notices and summons reach the company correctly.', icon: Gavel },
                { title: 'ROC Compliance', desc: 'Avoids heavy penalties for late filing of address change forms.', icon: ShieldCheck },
                { title: 'Banking Operations', desc: 'Updates KYC for bank accounts to prevent operational freezes.', icon: Landmark },
                { title: 'GST Uniformity', desc: 'Synchronizes the address across MCA and GST portals.', icon: Briefcase },
                { title: 'Public Record', desc: 'Maintains transparency for creditors, shareholders, and clients.', icon: Globe },
                { title: 'Audit Readiness', desc: 'Ensures the registered address matches physical operations for audits.', icon: Zap }
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

          {/* Types of Change */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Types of Relocation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Same City/Town', desc: 'Requires only a board resolution and Form INC-22 filing.', icon: MapPin },
                { title: 'Different ROC (Same State)', desc: 'Requires Special Resolution and RD approval.', icon: Building },
                { title: 'Different State', desc: 'The most complex; requires MOA alteration and RD sanction.', icon: Globe },
                { title: 'Inter-Jurisdiction', desc: 'Changing between states like Maharashtra (Mumbai) and Maharashtra (Pune).', icon: Landmark }
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

          {/* Procedure */}
          <section id="Procedure" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Relocation Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Board Approval', desc: 'Hold a board meeting to approve the relocation and authorize a director.' },
                { step: '2', title: 'Shareholder Meeting', desc: 'Required for changes outside the city or between states.' },
                { step: '3', title: 'Notice to RD', desc: 'For state-to-state changes, file a petition with the Regional Director.' },
                { step: '4', title: 'Newspaper Ad', desc: 'Publish a notice in local and national newspapers (for state-to-state).' },
                { step: '5', title: 'Form INC-22 Filing', desc: 'Notify the ROC with proof of the new address within 30 days.' }
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

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Compliance Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Proof of New Address:</h4>
                <ul className="space-y-3">
                  {['Rental Agreement / Lease Deed', 'NOC from the Property Owner', 'Latest Utility Bill (EB/Water/Gas)', 'Rent Receipt (Not older than 1 month)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Company Records:</h4>
                <ul className="space-y-3">
                  {['Certified Board Resolution', 'Certified Special Resolution (MGT-14)', 'Regional Director Order (if applicable)', 'Amended MOA (for state change)'].map((item, i) => (
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
                { title: 'State Change Experts', icon: Globe },
                { title: 'Precise Resolution', icon: FileText },
                { title: 'RD Liaisoning', icon: Landmark },
                { title: 'Zero Delay Filing', icon: Zap }
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

export default ChangeCompanyAddress;
