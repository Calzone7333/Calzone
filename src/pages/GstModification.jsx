import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Edit, MapPin, Users, Check, Plus, Minus } from 'lucide-react';

const GstModification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Amendment Types', id: 'Types' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Important Notes', id: 'Notes' },
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
          <span className="text-[#DB3269]">GST Modification</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          GST Registration Modification
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Amending Business Details, Addresses, and Stakeholder Profiles on the GST Portal
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            GST Registration is not a static process. As your business grows, you may need to change your registered trade name, shift your office to a new location, add new branches, or update your authorized signatories. Under the GST Law, any change in the information provided during registration must be updated on the GST portal within 15 days of such change.
          </p>
          <p className={paragraphStyle}>
            Modifications are split into "Core" and "Non-Core" fields. While non-core changes are updated instantly, core field amendments require the approval of the Jurisdictional Tax Officer.
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
            <h2 className={sectionHeadingStyle}>Statutory Deadline</h2>
            <p className={paragraphStyle}>
              "Failure to update GST registration details within 15 days of a change may result in non-compliance notices and potential blocking of E-Way Bill generation."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Always ensure your GST certificate reflects current information to avoid mismatches during audits or vendor registrations.
              </p>
            </div>
          </section>

          {/* Amendment Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Core vs. Non-Core Fields</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[16px] mb-2 uppercase tracking-widest">Core Field Amendments</h4>
                <p className="text-[12px] text-[#585858] mb-4">Requires Tax Officer approval (~15 working days).</p>
                <ul className="space-y-3">
                  {['Legal / Trade Name Change', 'Principal Place of Business (Address)', 'Add/Delete Stakeholders (Directors)', 'Authorized Signatory changes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#222222] font-bold">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[16px] mb-2 uppercase tracking-widest">Non-Core Field Amendments</h4>
                <p className="text-[12px] text-gray-400 mb-4">Auto-approved instantly upon submission.</p>
                <ul className="space-y-3">
                  {['Additional Places of Business (Branches)', 'Bank Account details modification', 'Contact details (Phone/Email)', 'Nature of business / HSN codes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-white font-bold">
                      <Zap size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Modification Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Portal Login', desc: 'Access your profile on the official GST portal.' },
                { step: '2', title: 'Category Selection', desc: 'Navigate to Amendment of Registration (Core or Non-Core).' },
                { step: '3', title: 'Data Entry', desc: 'Update fields with new information (Name, Address, etc.).' },
                { step: '4', title: 'Evidence Upload', desc: 'Attach proof of change (Rent Deed, Board Resolution).' },
                { step: '5', title: 'Verification', desc: 'Sign the application using Class 3 DSC or EVC.' }
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
            <h2 className={sectionHeadingStyle}>Requirement Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Address Change', icon: MapPin, items: ['New Rent Deed / NOC', 'Latest EB Bill', 'Board Resolution'] },
                { title: 'Name Change', icon: Edit, items: ['Amended COI', 'MOA/AOA copy', 'Partnership Deed'] },
                { title: 'Partner Change', icon: Users, items: ['Resignation/Appt Letter', 'KYC of new member', 'Consent Letter'] }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-3">{item.title}</h4>
                  <ul className="text-[12px] text-[#585858] space-y-2">
                    {item.items.map((doc, j) => (
                      <li key={j} className="flex items-center gap-2 justify-center">
                        <div className="w-1 h-1 bg-[#DB3269]" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section id="Notes" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Crucial Constraints</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">PAN & State Restrictions</p>
                <p className="text-[14px] text-[#585858]">
                  You <span className="font-bold">CANNOT</span> modify your PAN or your State in an existing registration. Any such change requires a fresh GST registration.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Data Validation', icon: ShieldCheck },
                { title: 'Deed Drafting', icon: FileText },
                { title: 'Dept Liaisoning', icon: Landmark },
                { title: 'Zero Delay', icon: Zap }
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

export default GstModification;
