import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, TrendingUp, CheckCircle, Check, Plus, Minus } from 'lucide-react';

const IncreaseCapital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Importance', id: 'Importance' },
    { name: 'Process', id: 'Process' },
    { name: 'ROC Filings', id: 'Filings' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const faqData = [
    { 
      question: 'eForm MGT-14 Requirements', 
      answer: 'This form must be filed within 30 days of passing the resolution. It includes Company CIN, purpose, date of meeting notice, and the certified copy of the resolution.' 
    },
    { 
      question: 'eForm SH-7 Requirements', 
      answer: 'SH-7 is used to intimate the ROC regarding the increase in nominal capital. It requires the MGT-14 SRN and details of stamp duty paid.' 
    },
    { 
      question: 'Stamp Duty Implications', 
      answer: 'Stamp duty is payable on the additional capital amount. Rates vary by state. The registrar will not approve until stamp duty is successfully paid via the MCA portal.' 
    }
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
          <span className="text-[#DB3269]">Increase Authorized Capital</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Increase Authorized Share Capital
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Scaling Your Corporate Capacity for Fundraising and Business Expansion
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            As per Section 2(8) of the Companies Act, 2013, Authorized Capital (also known as Nominal Capital) is the maximum amount of share capital that a company is authorized by its Memorandum of Association (MOA) to issue to its shareholders.
          </p>
          <p className={paragraphStyle}>
            When a company grows and needs more funds from investors, it often finds that it has already issued shares up to its authorized limit. In such cases, the company must first increase its authorized capital before it can issue any fresh shares.
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
            <h2 className={sectionHeadingStyle}>Scaling Financial Limits</h2>
            <p className={paragraphStyle}>
              Increasing authorized capital requires an amendment to the 'Capital Clause' of the Memorandum of Association, approved by shareholders via an ordinary resolution.
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Authorized capital is the ceiling of shares a company can issue. Increasing this limit is the first step toward significant equity fundraising.
              </p>
            </div>
          </section>

          {/* Importance */}
          <section id="Importance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Increase Capital?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Equity Fundraising', desc: 'Allows the company to issue new shares to investors or venture capital.', icon: TrendingUp },
                { title: 'Debt Restructuring', desc: 'Provides flexibility for converting debt into equity if required.', icon: Scale },
                { title: 'Employee Stock Options', desc: 'Ensures there are enough unissued shares for ESOP pools.', icon: Briefcase },
                { title: 'Business Expansion', desc: 'Demonstrates financial capacity for large government or private tenders.', icon: Landmark },
                { title: 'Net Worth Boost', desc: 'Improves the financial standing and credit profile of the company.', icon: ShieldCheck },
                { title: 'Mergers & Acq', desc: 'Enables issuance of shares for stock-swap acquisitions.', icon: Zap }
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
            <h2 className={sectionHeadingStyle}>The Modification Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Board Resolution', desc: 'Convene board meeting to approve the increase and call a General Meeting.' },
                { step: '2', title: 'Ordinary Resolution', desc: 'Pass an ordinary resolution in the General Meeting to amend the MOA.' },
                { step: '3', title: 'MOA Alteration', desc: 'Update the Capital Clause of the Memorandum of Association.' },
                { step: '4', title: 'Stamp Duty Payment', desc: 'Calculate and pay the required stamp duty to the state government.' },
                { step: '5', title: 'ROC Submission', desc: 'File SH-7 and MGT-14 forms within the statutory timelines.' }
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

          {/* ROC Filings */}
          <section id="Filings" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Statutory Filings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqData.map((faq, index) => (
                <div key={index} className="p-6 border border-gray-100 bg-[#F9F9F9] hover:border-[#DB3269] transition-all">
                  <h4 className="font-bold text-[#222222] text-[15px] mb-3">{faq.question}</h4>
                  <p className="text-[12px] text-[#585858] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">Meeting Records:</h4>
                <ul className="space-y-3">
                  {['Notice of General Meeting (EGM)', 'Explanatory Statement (Sec 102)', 'Certified Board Resolution', 'Certified Ordinary Resolution'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Constitutional Docs:</h4>
                <ul className="space-y-3">
                  {['Altered MOA (Capital Clause)', 'Amended AOA (if required)', 'Stamp Duty Payment Receipt', 'Signed Form SH-7 & MGT-14'].map((item, i) => (
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
                { title: 'Stamp Duty Calc', icon: Scale },
                { title: 'Secretarial Audit', icon: Gavel },
                { title: 'Fast Approval', icon: Zap },
                { title: 'Compliance Mgmt', icon: ShieldCheck }
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

export default IncreaseCapital;
