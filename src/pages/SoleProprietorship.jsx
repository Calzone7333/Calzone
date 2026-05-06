import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Receipt, Factory, Check, Plus, Minus, TrendingUp } from 'lucide-react';

const SoleProprietorship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Registration', id: 'Registration' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Comparison', id: 'Comparison' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6 tracking-tight">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Sole Proprietorship Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Sole Proprietorship Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          The Simplest Path to Launching and Controlling Your Independent Business Venture
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business is an exciting journey, and choosing the right structure is crucial. A Sole Proprietorship is the simplest and most widely chosen business model, especially for freelancers, small traders, retail shop owners, and independent professionals.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we help entrepreneurs set up their Sole Proprietorship effortlessly, ensuring compliance with tax regulations, GST, and business registrations. With minimal paperwork and absolute control, it is the ideal vehicle for lean startups and solo founders.
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
        <div className="space-y-12">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>What is a Sole Proprietorship?</h2>
            <p className={paragraphStyle}>
              A Sole Proprietorship is a business owned, managed, and controlled by one individual. Unlike companies or LLPs, a Sole Proprietorship has no legal distinction between the owner and the business, meaning the owner is personally responsible for all profits and liabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { title: 'Full Control', desc: 'The owner makes all decisions and retains 100% of the profits.', icon: Zap },
                { title: 'Tax Benefits', desc: 'Taxed at individual rates, avoiding heavy corporate tax burdens.', icon: ShieldCheck },
                { title: 'Easy Setup', desc: 'Minimum legal formalities and low registration costs.', icon: Briefcase },
                { title: 'Direct Access', desc: 'Easy and fast closure or conversion if the business pivots.', icon: TrendingUp }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] flex items-start gap-4">
                  <div className="text-[#DB3269] shrink-0"><item.icon size={28} /></div>
                  <div>
                    <h4 className={subHeadingStyle}>{item.title}</h4>
                    <p className={`${paragraphStyle} mb-0 mt-1`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Registration */}
          <section id="Registration" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>How to Register?</h2>
            <p className={paragraphStyle}>
              While there is no single mandatory registration for a proprietorship, business credibility requires several statutory registrations depending on your turnover and location.
            </p>
            <div className="space-y-4 mt-6">
              {[
                { step: '1', title: 'PAN & Aadhaar Alignment', desc: 'Ensure your personal PAN and Aadhaar are updated as they serve as the business ID.' },
                { step: '2', title: 'Business Name Selection', desc: 'Select a unique trading name and verify if trademark registration is needed.' },
                { step: '3', title: 'MSME / Udyam Registration', desc: 'Recommended for accessing government subsidies and priority sector lending.' },
                { step: '4', title: 'GST Registration', desc: 'Mandatory for interstate trade or turnover above the statutory limit.' },
                { step: '5', title: 'Shops & Establishment', desc: 'Mandatory license from the local municipality for physical outlets or offices.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">
                    {item.step}
                  </div>
                  <p className={`${paragraphStyle} mb-0`}>
                    <span className={subHeadingStyle}>{item.title}</span> – {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className={`${subHeadingStyle} mb-6 border-b border-[#DB3269] pb-2 uppercase`}>Owner Documents:</h4>
                <ul className="space-y-4">
                  {['PAN Card Copy', 'Aadhaar Card Copy', 'Passport Size Photograph', 'Personal Bank Statement'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-[#222222] tracking-tight">
                      <div className="w-1.5 h-1.5 bg-[#DB3269] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className={`${subHeadingStyle} !text-[#DB3269] mb-6 border-b border-gray-800 pb-2 uppercase`}>Business Proofs:</h4>
                <ul className="space-y-4">
                  {['Electricity/Water Bill', 'Rental Agreement / Lease Deed', 'NOC from Property Owner', 'Business Letterhead Draft'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-300 tracking-tight">
                      <div className="w-1.5 h-1.5 bg-[#DB3269] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Annual Compliance</h2>
            <p className={paragraphStyle}>While low-compliance, a proprietorship must still adhere to periodic filings.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'ITR Filing', desc: 'Business income is reported in the owner’s individual ITR-3 or ITR-4.', icon: FileText },
                { title: 'GST Returns', desc: 'Monthly or quarterly filing depending on the scheme opted.', icon: Zap },
                { title: 'Audit Rules', desc: 'Mandatory if turnover exceeds ₹1 Crore (or ₹10 Crore with digital rules).', icon: Gavel }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className={subHeadingStyle}>{item.title}</h4>
                  <p className={`${paragraphStyle} text-center mb-0 mt-2`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section id="Comparison" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Proprietorship vs Pvt Ltd</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-left font-bold">Feature</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">Sole Proprietorship</th>
                    <th className="border border-gray-200 p-3 text-left font-bold">Private Limited</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Liability', 'Unlimited (Owner is liable)', 'Limited to Share Capital'],
                    ['Compliance', 'Minimal / Individual', 'High / Annual Audits'],
                    ['Taxation', 'Individual Slab Rates', 'Flat Corporate Tax'],
                    ['Fundraising', 'Only via Personal Debt', 'Venture Capital / Equity'],
                    ['Setup Cost', 'Very Low', 'Medium to High']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9] hover:bg-[#F0F0F0] transition-colors'}>
                      <td className="border border-gray-200 p-4 font-extrabold text-[#222222] tracking-tight">{row[0]}</td>
                      <td className="border border-gray-200 p-4 text-[#DB3269] tracking-tight font-medium">{row[1]}</td>
                      <td className="border border-gray-200 p-4 text-[#222222] tracking-tight">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Zero Hassle', icon: Zap },
                { title: 'Expert Advice', icon: Gavel },
                { title: 'MSME Support', icon: Landmark },
                { title: 'GST Ready', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 group hover:border-[#DB3269] transition-all bg-white hover:shadow-md">
                  <div className="flex justify-center mb-3 text-[#DB3269] group-hover:scale-110 transition-transform"><item.icon size={32} /></div>
                  <h4 className={`${subHeadingStyle} text-[15px] uppercase tracking-wider`}>{item.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SoleProprietorship;
