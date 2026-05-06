import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Globe, Plane, TrendingUp, Check, Plus, Minus } from 'lucide-react';

const NriIncomeTax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Status', id: 'Status' },
    { name: 'Taxable Income', id: 'Taxable' },
    { name: 'Tax Planning', id: 'Planning' },
    { name: 'Slab Rates', id: 'Slabs' },
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
          <span className="text-[#DB3269]">NRI Tax Planning & Filing</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          NRI Income Tax Planning & Filing
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Comprehensive Global Taxation Strategies for Non-Resident Indians under Section 6 of IT Act
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Non-Resident Indians (NRIs) face a unique set of tax challenges. While their global income is generally exempt from Indian taxation, any income earned or accrued <span className="font-bold">within India</span>—such as rental income, dividends, or capital gains on property—is taxable. Proper tax planning is essential to avoid double taxation and to ensure compliance with both Indian and foreign tax laws.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we specialize in NRI taxation, helping you optimize your Indian income through DTAA benefits, managing NRO/NRE accounts, and filing accurate ITRs to facilitate the repatriation of funds.
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
            <h2 className={sectionHeadingStyle}>Repatriation Ease</h2>
            <p className={paragraphStyle}>
              "Filing ITR in India is often a prerequisite for repatriating funds from NRO accounts to foreign bank accounts under the $1 Million LRS scheme."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Proper planning of residential status can save NRIs from unnecessary tax burdens on their global earnings.
              </p>
            </div>
          </section>

          {/* Status */}
          <section id="Status" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Residential Status Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">The 182-Day Rule:</h4>
                <ul className="space-y-3">
                  {['Residing < 182 days in current FY', 'Residing < 60 days AND < 365 days in 4 years', 'Indian citizens visiting: 182-day limit applies', 'Deemed Resident: Income > ₹15L and not taxed elsewhere'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white flex flex-col justify-center">
                <p className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">RNOR Status</p>
                <p className="text-gray-400 text-[14px] italic">
                  "Resident but Not Ordinarily Resident (RNOR) is a transitional status where foreign income remains tax-free in India for the first few years of return."
                </p>
              </div>
            </div>
          </section>

          {/* Taxable Income */}
          <section id="Taxable" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>What is Taxable in India?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Rental Income', desc: 'Rent from property located in India.', icon: Landmark },
                { title: 'Capital Gains', desc: 'Profit from sale of Indian shares/property.', icon: TrendingUp },
                { title: 'NRO Interest', desc: 'Interest earned on NRO Savings/FD accounts.', icon: Scale },
                { title: 'Professional Fees', desc: 'Income for services rendered in India.', icon: Briefcase }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-[#fce7f3] border-l-4 border-[#DB3269]">
              <p className="font-bold text-[#222222] text-[15px]">Tax-Free Income:</p>
              <p className="text-[14px] text-[#585858]">
                Interest earned on <span className="font-bold">NRE (Non-Resident External)</span> and <span className="font-bold">FCNR (Foreign Currency Non-Resident)</span> accounts is <span className="text-[#DB3269] font-bold">100% EXEMPT</span> from tax in India.
              </p>
            </div>
          </section>

          {/* Tax Planning */}
          <section id="Planning" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Deductions Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-center font-bold">Section</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Allowed</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">NOT Allowed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['80C', 'LIC, Tuition Fees, ELSS, Home Loan Principal', 'PPF, NSC, Post Office Savings'],
                    ['80D', 'Health Insurance Premium (Self/Parents)', '-'],
                    ['80TTA', 'Savings Interest (Up to ₹10,000)', '-']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 text-center font-bold">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#222222] font-bold">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-center text-red-500 font-bold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Slab Rates */}
          <section id="Slabs" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>NRI Tax Slab Rates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Old Tax Regime:</h4>
                <ul className="space-y-3 text-[14px]">
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Up to ₹2.5L</span> <span className="font-bold">NIL</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>₹2.5L - ₹5L</span> <span className="font-bold">5%</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>₹5L - ₹10L</span> <span className="font-bold">20%</span></li>
                  <li className="flex justify-between"><span>Above ₹10L</span> <span className="font-bold">30%</span></li>
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 uppercase">New Tax Regime:</h4>
                <ul className="space-y-3 text-[14px] text-[#585858]">
                  <li className="flex justify-between border-b border-gray-100 pb-2"><span>Up to ₹3L</span> <span className="font-bold text-[#DB3269]">NIL</span></li>
                  <li className="flex justify-between border-b border-gray-100 pb-2"><span>₹3L - ₹6L</span> <span className="font-bold text-[#DB3269]">5%</span></li>
                  <li className="flex justify-between border-b border-gray-100 pb-2"><span>₹6L - ₹9L</span> <span className="font-bold text-[#DB3269]">10%</span></li>
                  <li className="flex justify-between"><span>Above ₹15L</span> <span className="font-bold text-[#DB3269]">30%</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Filing Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'AIS/TIS Analysis', desc: 'Review your Annual Information Statement for all Indian transactions.' },
                { step: '2', title: 'Reconciliation', desc: 'Match TDS (Form 26AS) with account interest and receipts.' },
                { step: '3', title: 'DTAA Application', desc: 'Prepare TRC (Tax Residency Certificate) to claim treaty benefits.' },
                { step: '4', title: 'ITR Selection', desc: 'Choose the correct form (usually ITR-2 or ITR-3).' },
                { step: '5', title: 'Repatriation Support', desc: 'Assistance in moving taxes-paid funds to your country.' }
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
                { title: 'Global Advisory', icon: Globe },
                { title: 'DTAA Specialists', icon: Scale },
                { title: 'Repatriation Support', icon: Plane },
                { title: 'Dedicated Desk', icon: Briefcase }
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

export default NriIncomeTax;
