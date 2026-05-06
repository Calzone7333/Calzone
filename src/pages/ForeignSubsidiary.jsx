import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const ForeignSubsidiary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Register', id: 'WhyRegister' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Foreign Subsidiary Incorporation</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Foreign Subsidiary <br /> Incorporation
        </h1>
        <p className={`${paragraphStyle} mb-8 italic`}>
          Seamless Business Expansion into India with Calzone
        </p>

        {/* Intro */}
        <div className="mb-10 max-w-5xl">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Expanding into India offers immense business opportunities due to its rapidly growing economy and consumer base. However, managing operations from abroad can be challenging, making the incorporation of a foreign subsidiary a strategic move.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we specialize in providing end-to-end solutions for foreign companies looking to establish a presence in India. From regulatory approvals to compliance management, we ensure a smooth transition into the Indian market.
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
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative tracking-tight ${
                    activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#222222] hover:text-[#DB3269]'
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
        <div className="space-y-16">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>What is a Foreign Subsidiary?</h2>
            <p className={paragraphStyle}>
              A foreign subsidiary is a company in which a foreign entity holds more than 50% of the share capital. In many cases, foreign businesses establish a Wholly Owned Subsidiary (WOS) in India, meaning 100% ownership is retained by the parent company.
            </p>
            <div className="mt-8">
              <p className="font-bold text-[#222222] text-[18px] mb-4">Key Features in India:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Separate Legal Entity', desc: 'Operates independently while being controlled by the parent company.' },
                  { title: 'Limited Liability', desc: 'Foreign company\'s liability is limited to its investment.' },
                  { title: 'Market Expansion', desc: 'Allows direct access to Indian consumers.' },
                  { title: 'Tax Benefits', desc: 'Subject to Indian corporate tax laws.' },
                  { title: 'Regulatory Compliance', desc: 'Must adhere to Companies Act, FEMA, RBI, and MCA guidelines.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-[#F9F9F9] border-t-2 border-[#DB3269]">
                    <div className="mt-1"><Check size={18} className="text-[#DB3269]" /></div>
                    <div>
                      <p className={subHeadingStyle}>{feature.title}</p>
                      <p className={`${paragraphStyle} text-[14px] mb-0`}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Register */}
          <section id="WhyRegister" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register a Foreign Subsidiary in India?</h2>
            <div className="space-y-4">
              {[
                { title: 'Strategic Market Expansion', desc: 'Establish a local presence while maintaining global control.' },
                { title: 'Reduced Tax Liabilities', desc: 'Optimize tax structures through local corporate compliance.' },
                { title: 'Ease of Operations', desc: 'Conduct business directly without intermediaries.' },
                { title: 'Global Brand Recognition', desc: 'Leverage parent company\'s reputation locally.' },
                { title: 'Attract Investment', desc: 'Eligible for Indian government schemes and funding.' }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-gray-100">
                  <div className="w-1.5 h-1.5 bg-[#DB3269] mt-2 flex-shrink-0" />
                  <div>
                    <span className={subHeadingStyle}>{benefit.title}</span> – <span className={paragraphStyle}>{benefit.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility Criteria</h2>
            <div className="bg-[#222222] text-white p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex gap-3">
                  <Check className="text-[#DB3269] flex-shrink-0" />
                  <span>At least two shareholders (including parent company)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-[#DB3269] flex-shrink-0" />
                  <span>Minimum two directors (1 resident Indian)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-[#DB3269] flex-shrink-0" />
                  <span>No minimum capital requirement</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-[#DB3269] flex-shrink-0" />
                  <span>Must comply with FEMA and RBI regulations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#DB3269] text-white p-8">
                <h4 className="font-bold text-[20px] mb-6 border-b border-white/20 pb-2">From Foreign Parent Company</h4>
                <ul className="space-y-4 text-[14px]">
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> Certificate of Incorporation (Apostilled)</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> Memorandum & Articles of Association (Apostilled)</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> Resolution approving subsidiary incorporation (Apostilled)</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> ID proof of authorized representative (Apostilled)</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> List of directors and shareholders</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-8 border border-gray-100">
                <h4 className="font-bold text-[20px] text-[#222222] mb-6 border-b border-[#DB3269] pb-2">For Indian Subsidiary</h4>
                <ul className="space-y-4 text-[14px] text-[#585858]">
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0 text-[#DB3269]" /> Proposed Name (MCA compliant)</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0 text-[#DB3269]" /> DIN and DSC for directors</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0 text-[#DB3269]" /> Registered Office Address Proof</li>
                  <li className="flex gap-3"><Check size={16} className="mt-1 flex-shrink-0 text-[#DB3269]" /> Identity & Address Proof of Directors</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Incorporation Process</h2>
            <div className="space-y-10 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
              {[
                { 
                  title: 'Name Approval (SPICe+ Part A)', 
                  desc: 'Reserve company name. If using parent name, submit NOC, Apostilled Charter and Resolution.' 
                },
                { 
                  title: 'Filing SPICe+ Part B', 
                  desc: 'Submit incorporation details including Director info, Registered Office details, and Physical copies of MOA/AOA.' 
                },
                { 
                  title: 'Submission of Linked Forms', 
                  desc: 'File AGILE-PRO-S for GST, EPFO, ESIC, and Bank Account opening.' 
                },
                { 
                  title: 'Obtain COI', 
                  desc: 'ROC issues Certificate of Incorporation along with CIN, PAN, and TAN.' 
                },
                { 
                  title: 'Post-Incorporation Compliance', 
                  desc: 'File INC-20A, receive FIRC, issue Share Certificates, and file FC-GPR with RBI.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-[#DB3269] rounded-full flex items-center justify-center font-sans font-bold text-[#DB3269]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className={subHeadingStyle}>{item.title}</h4>
                    <p className={`${paragraphStyle} mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Compliance Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Annual General Meetings (AGM)',
                'Minimum 4 Board Meetings per year',
                'Filing of Audited Financials (AOC-4)',
                'Annual Return (MGT-7) Filing',
                'Tax Compliance (Corporate, GST, TDS)',
                'Report Related Party Transactions'
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F9F9F9] flex items-center gap-3 text-[#585858] font-bold">
                  <div className="w-2 h-2 bg-[#DB3269]" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Regulatory Expertise', desc: 'Navigate FEMA, RBI, and MCA regulations with ease.' },
                { title: 'Fast Processing', desc: 'Streamlined documentation and approval process.' },
                { title: 'End-to-End Service', desc: 'From registration to post-incorporation compliance.' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 bg-[#F9F9F9] group-hover:bg-[#DB3269] group-hover:text-white transition-colors flex items-center justify-center mx-auto mb-4 rounded-full font-bold">
                    0{i+1}
                  </div>
                  <p className="font-bold text-[#222222] mb-2">{item.title}</p>
                  <p className="text-[14px] text-[#585858]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForeignSubsidiary;
