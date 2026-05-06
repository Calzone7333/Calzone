import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserMinus, UserCheck, Check, Plus, Minus } from 'lucide-react';

const RemoveDirector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Reasons', id: 'Reasons' },
    { name: 'Modes of Exit', id: 'Modes' },
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
          <span className="text-[#DB3269]">Removal of Director</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Removal of Director
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Legal Cessation and Statutory Compliance under Section 169 of the Companies Act, 2013
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The removal of a director is a formal legal procedure that must be conducted with strict adherence to the Companies Act, 2013. Whether it is a voluntary resignation, retirement by rotation, or a compulsory removal due to misconduct, every exit must be reported to the ROC via the DIR-12 form.
          </p>
          <p className={paragraphStyle}>
            Incorrect handling of a director's removal can lead to legal disputes, stay orders from the NCLT, and heavy penalties for non-compliance with statutory notice periods.
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
            <h2 className={sectionHeadingStyle}>Corporate Cessation Framework</h2>
            <p className={paragraphStyle}>
              A company may, by ordinary resolution, remove a director before the expiry of their period of office, after giving them a reasonable opportunity of being heard.
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The process of removal requires a special notice to be issued to the company at least 14 days before the meeting where the resolution is to be passed.
              </p>
            </div>
          </section>

          {/* Reasons */}
          <section id="Reasons" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>When can a Director be removed?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Fiduciary Breach', desc: 'Acting against company interest or personal profiteering.', icon: Gavel },
                { title: 'Statutory Default', desc: 'Failure to disclose interest or disqualification under Sec 164.', icon: Scale },
                { title: 'Unsatisfactory Perf', desc: 'Failure to meet board objectives or attending meetings.', icon: AlertCircle },
                { title: 'Legal Conviction', desc: 'If the director is convicted by a court for any offense.', icon: Landmark }
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

          {/* Modes of Exit */}
          <section id="Modes" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Common Modes of Exit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Voluntary Resignation', desc: 'Director submits resignation letter to the board.', icon: Briefcase },
                { title: 'Compulsory Removal', desc: 'Removed by shareholders via ordinary resolution.', icon: UserMinus },
                { title: 'Disqualification', desc: 'Automatic exit due to legal or statutory defaults.', icon: ShieldCheck }
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
            <h2 className={sectionHeadingStyle}>The Cessation Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Resignation / Notice', desc: 'Receipt of resignation letter or issuance of special notice for removal.' },
                { step: '2', title: 'Board Meeting', desc: 'Convene board meeting to take note of exit or propose removal.' },
                { step: '3', title: 'Shareholder Meeting', desc: 'General meeting for passing ordinary resolution (for removal cases).' },
                { step: '4', title: 'ROC Filing', desc: 'File Form DIR-12 with the Registrar of Companies within 30 days.' },
                { step: '5', title: 'Statutory Update', desc: 'Notify banks and update internal registers of the company.' }
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
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Key Artifacts:</h4>
                <ul className="space-y-3">
                  {['Resignation Letter (if voluntary)', 'Proof of dispatch of notice', 'Certified Board Resolution', 'Certified Ordinary Resolution', 'Notice of General Meeting'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Statutory Forms:</h4>
                <ul className="space-y-3">
                  {['DIR-11 (Filing by Director)', 'DIR-12 (Filing by Company)', 'MGT-14 (If required for resolutions)'].map((item, i) => (
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
                { title: 'Legal Protection', icon: ShieldCheck },
                { title: 'Compliant Notices', icon: FileText },
                { title: 'Fast ROC Filing', icon: Zap },
                { title: 'NCLT Liaisoning', icon: Landmark }
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

export default RemoveDirector;
