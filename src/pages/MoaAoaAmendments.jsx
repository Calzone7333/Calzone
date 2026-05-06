import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, ListChecks, ArrowRightLeft, Check, Plus, Minus } from 'lucide-react';

const MoaAoaAmendments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'MOA Clauses', id: 'MOA' },
    { name: 'AOA Rules', id: 'AOA' },
    { name: 'Process', id: 'Process' },
    { name: 'Differences', id: 'Differences' },
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
          <span className="text-[#DB3269]">MOA & AOA Amendments</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          MOA & AOA Amendments
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Adapt Your Corporate Charter to Evolving Business Needs with Legal Precision
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The Memorandum of Association (MOA) and Articles of Association (AOA) are the two fundamental pillars of a company. While the MOA defines the company's constitution and relationship with the outside world, the AOA contains internal rules and regulations.
          </p>
          <p className={paragraphStyle}>
            As a business grows, it may need to change its name, registered office, business objects, or internal management structure. These changes require formal amendments through shareholder resolutions and ROC filings.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">Memorandum (MOA)</h4>
                <p className="text-[#585858] text-[14px]">
                  Defines the company's purpose and operational boundaries. It dictates what the company can and cannot do.
                </p>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">Articles (AOA)</h4>
                <p className="text-gray-400 text-[14px]">
                  Governs internal management, rights of members, and the relationship between the company and its board.
                </p>
              </div>
            </div>
          </section>

          {/* MOA Clauses */}
          <section id="MOA" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Common MOA Amendments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Name Clause', desc: 'Changing the brand name or corporate identity.', icon: Zap },
                { title: 'Object Clause', desc: 'Adding new business activities or sectors.', icon: ListChecks },
                { title: 'Capital Clause', desc: 'Increasing or restructuring authorized capital.', icon: Scale },
                { title: 'Situation Clause', desc: 'Shifting the registered office between states.', icon: Landmark },
                { title: 'Liability Clause', desc: 'Modifying the extent of shareholder liability.', icon: ShieldCheck }
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

          {/* AOA Rules */}
          <section id="AOA" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Common AOA Amendments</h2>
            <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Changes in voting rights of members.',
                  'Alteration in dividend distribution rules.',
                  'Modifying board powers and appointment terms.',
                  'Entrenchment of certain critical clauses.',
                  'Conversion of company type (e.g., Private to Public).'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-[#222222] font-bold">
                    <Check size={16} className="text-[#DB3269]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Amendment Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Drafting', desc: 'Prepare the altered version of the MOA or AOA.' },
                { step: '2', title: 'Board Approval', desc: 'Pass a board resolution to approve the changes and call a GM.' },
                { step: '3', title: 'Special Resolution', desc: 'Pass a special resolution in the General Meeting with 75% majority.' },
                { step: '4', title: 'ROC Filing', desc: 'File Form MGT-14 with the Registrar of Companies within 30 days.' },
                { step: '5', title: 'Confirmation', desc: 'Obtain approval from the ROC and update company stationary.' }
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

          {/* Differences */}
          <section id="Differences" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>MOA vs AOA</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-left font-bold">Feature</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">MOA</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">AOA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Definition', 'Company Constitution', 'Internal Regulations'],
                    ['Relationship', 'External Stakeholders', 'Internal Management'],
                    ['Status', 'Fundamental Document', 'Subordinate to MOA'],
                    ['Alteration', 'Complex (Needs RD in some cases)', 'Simple (Special Resolution)']
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
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Legal Drafting', icon: FileText },
                { title: 'Meeting Coordination', icon: Briefcase },
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

export default MoaAoaAmendments;
