import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const Section8Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('KeyFeatures');

  const tabs = [
    { name: 'Key Features', id: 'KeyFeatures' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Timeline', id: 'Timeline' },
    { name: 'Fees', id: 'Section8Company' },
    { name: 'Why Trust', id: 'WhyTrust' },
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
          <span className="text-[#DB3269]">Section 8 Company Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Section 8 Company <br /> Registration
        </h1>
        <p className={`${paragraphStyle} mb-8 italic`}>
          Section 8 Company Registration - A Comprehensive Guide by Calzone
        </p>

        {/* Intro */}
        <div className="mb-10 max-w-5xl">
          <h3 className={`${headingStyle} mb-3`}>Understanding Section 8 Company Registration</h3>
          <p className={paragraphStyle}>
            A Section 8 Company is a type of entity formed to promote charitable objectives such as commerce, arts, science, education, research, sports, social welfare, environmental protection, and other similar causes. Unlike profit-driven companies, Section 8 companies do not distribute dividends to their members but instead reinvest their profits into their mission.
          </p>
          <p className={paragraphStyle}>
            Calzone offers expert guidance in registering Section 8 companies, ensuring full compliance with government regulations and seamless incorporation.
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
          {/* Key Features */}
          <section id="KeyFeatures" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Key Features of a Section 8 Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Non-Profit Nature', desc: 'Income must be used exclusively for promoting objectives.' },
                { title: 'No Minimum Share Capital', desc: 'No prescribed capital requirement, making it cost-effective.' },
                { title: 'Limited Liability', desc: 'Members\' liability is limited to their shareholding.' },
                { title: 'Government Licensing', desc: 'License from the Central Government is mandatory.' },
                { title: 'Tax Benefits', desc: 'Avail tax exemptions under Section 80G and 12AA.' },
                { title: 'Use of Names', desc: 'No requirement for \'Private Limited\' in the name.' },
                { title: 'Increased Credibility', desc: 'Higher credibility over trusts and societies.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-100">
                  <div className="mt-1"><Check size={18} className="text-[#DB3269]" /></div>
                  <div>
                    <p className={subHeadingStyle}>{feature.title}</p>
                    <p className={`${paragraphStyle} text-[14px] mb-0`}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone?</h2>
            <ul className="space-y-4">
              {[
                { title: 'End-to-End Assistance', desc: 'From documentation to final approval, we handle everything.' },
                { title: 'Expert Consultation', desc: 'Guidance from professionals experienced in NGO setups.' },
                { title: 'Compliance Support', desc: 'Ensuring smooth legal compliance and annual reporting.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-[#DB3269] mt-2.5 flex-shrink-0" />
                  <div>
                    <p className={subHeadingStyle}>{item.title}</p>
                    <p className={`${paragraphStyle} mb-0`}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility Criteria</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#222222] text-[15px] tracking-tight">
              <li>Minimum two directors are required.</li>
              <li>At least one director must be a resident of India.</li>
              <li>The company should have a clear charitable objective.</li>
              <li>No dividend distribution to members.</li>
              <li>Profits must be utilized solely for the advancement of its objectives.</li>
            </ul>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'For Directors & Shareholders', 
                  items: ['Self-attested PAN & Aadhaar', 'Recent bank statement/bill', 'Passport-size photos'] 
                },
                { 
                  title: 'For Registered Office', 
                  items: ['Ownership docs or rental agreement', 'Utility bill for verification', 'NOC from the owner'] 
                },
                { 
                  title: 'Other Documents', 
                  items: ['MoA and AoA', 'INC-9 Affidavit from each director', 'INC-15 Declaration'] 
                }
              ].map((group, i) => (
                <div key={i} className="bg-[#DB3269] text-white p-6">
                  <p className="font-bold text-[18px] mb-4 border-b border-white/20 pb-2">{group.title}</p>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-[14px] flex items-start gap-2">
                        <Check size={14} className="mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Registration Process</h2>
            <div className="space-y-8">
              {[
                { step: 1, title: 'Obtain DSC', desc: 'Obtain DSCs for all proposed directors through certified agencies.' },
                { step: 2, title: 'Apply for DIN', desc: 'Submit Form DIR-3 with the Registrar of Companies (RoC).' },
                { step: 3, title: 'Name Reservation', desc: 'Reserve a unique name by filing Form INC-1 with RoC.' },
                { step: 4, title: 'Apply for License', desc: 'File Form INC-12 including supporting docs like MoA, AoA.' },
                { step: 5, title: 'Incorporation', desc: 'File incorporation documents using SPICe+ forms with RoC.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border-2 border-[#DB3269] text-[#DB3269] flex items-center justify-center font-sans font-bold">
                    {item.step}
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
            <h2 className={`${headingStyle} mb-4`}>Mandatory Compliance</h2>
            <div className="space-y-6">
              {[
                { title: 'Annual Financial Filings', desc: 'AOC-4 (within 30 days of AGM) and MGT-7 (within 60 days of AGM).' },
                { title: 'Tax Filings', desc: 'Income Tax Returns (before Sept 30th) and GST filings if applicable.' },
                { title: 'Board & General Meetings', desc: 'One board meeting every six months and AGM before Sept 30th.' },
                { title: 'Auditor Appointment', desc: 'Appointment within 15 days of incorporation (Form ADT-1).' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F9F9F9] border-t-2 border-[#DB3269]">
                  <p className={subHeadingStyle}>{item.title}</p>
                  <p className={`${paragraphStyle} text-[14px] mb-0`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section id="Timeline" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Timeline</h2>
            <p className={paragraphStyle}>
              The entire registration process takes approximately <span className="font-bold text-[#DB3269]">20-30 days</span>, depending on government approvals and timely submission of documents.
            </p>
          </section>

          {/* Fees */}
          <section id="Section8Company" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Section 8 Company Registration Fees</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-[#222222] text-white">
                    <th className="p-4 text-left font-bold border border-gray-700">Service</th>
                    <th className="p-4 text-center font-bold border border-gray-700">Estimated Cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['DSC & DIN', '3,000'],
                    ['Name Reservation', '1,000'],
                    ['Government & Incorporation Fees', '6,000 - 8,000'],
                    ['Notary & Stamp Charges', '2,000']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="p-4 border border-gray-200 text-[#222222] font-medium">{row[0]}</td>
                      <td className="p-4 border border-gray-200 text-center text-[#DB3269] font-bold">₹{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-red-500 text-[14px] mt-4 italic font-bold">Note: Prices may vary based on regulatory changes and additional services required.</p>
          </section>

          {/* Why Trust */}
          <section id="WhyTrust" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Trust Calzone?</h2>
            <div className="bg-[#F9F9F9] p-8 text-center border border-gray-100">
              <p className={paragraphStyle}>
                Let Calzone assist you in making a difference. Start your Section 8 Company today! Contact us for expert consultation and registration support.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {['Hassle-Free Documentation', 'Quick & Transparent', 'Expert Guidance', 'Affordable Pricing'].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#DB3269] font-bold">
                    <Check size={16} />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Section8Company;
