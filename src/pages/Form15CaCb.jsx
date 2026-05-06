import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Globe, CreditCard, Check, Plus, Minus } from 'lucide-react';

const Form15CaCb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Form 15CB', id: 'Form15CB' },
    { name: 'Requirement', id: 'Requirement' },
    { name: 'CA Parts', id: 'CAParts' },
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
          <span className="text-[#DB3269]">Form 15CA & 15CB</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Form 15CA & 15CB Filing
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Statutory Compliance for Foreign Remittances and Tax Deductions on International Payments
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Form 15CA is an online declaration made by a remitter before making payments to a non-resident or a foreign company. It serves as a tool for the Income Tax Department to track foreign exchange transactions and ensure that the appropriate tax (TDS) has been deducted as per the Income Tax Act and DTAA (Double Taxation Avoidance Agreement).
          </p>
          <p className={paragraphStyle}>
            For certain high-value or taxable transactions, Form 15CA must be accompanied by a 15CB certificate, which is a formal audit report signed by a practicing Chartered Accountant.
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
            <h2 className={sectionHeadingStyle}>Regulatory Mandate</h2>
            <p className={paragraphStyle}>
              "No bank or authorized dealer can process a foreign remittance without obtaining the 15CA acknowledgment and 15CB certificate where applicable."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                A CA ensures that you don't overpay tax. By applying DTAA provisions, the TDS rate can often be reduced significantly.
              </p>
            </div>
          </section>

          {/* Form 15CB */}
          <section id="Form15CB" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The CA Audit (Form 15CB)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">CA Verification:</h4>
                <ul className="space-y-3">
                  {['Nature of payment (Royalties, Fees, etc.)', 'Applicability of TDS under Section 195', 'Rate of TDS as per DTAA of country', 'Compliance with Income Tax Act, 1961'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white flex flex-col justify-center">
                <p className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">The DTAA Benefit</p>
                <p className="text-gray-400 text-[14px] italic">
                  "DTAA treaties prevent double taxation of the same income in two countries, providing significant tax relief to remitters."
                </p>
              </div>
            </div>
          </section>

          {/* Requirement */}
          <section id="Requirement" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Decision Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-center font-bold">Remittance Scenario</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Form 15CA</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Form 15CB</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Taxable and exceeds ₹5 Lakhs/year', 'YES', 'YES'],
                    ['Taxable but below ₹5 Lakhs/year', 'YES', 'NO'],
                    ['Not Chargeable to Tax (Personal Gift)', 'YES', 'NO'],
                    ['Specified Exempt Items (Imports)', 'NO', 'NO']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 text-center font-bold">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#DB3269] font-bold">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#222222] font-bold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CA Parts */}
          <section id="CAParts" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Four Parts of 15CA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Part A', desc: 'When remittance is taxable and below ₹5 Lakhs.' },
                { title: 'Part B', desc: 'When an order from the AO has been obtained.' },
                { title: 'Part C', desc: 'When taxable and exceeds ₹5 Lakhs (Requires 15CB).' },
                { title: 'Part D', desc: 'When remittance is not taxable under the IT Act.' }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9]">
                  <h4 className="font-bold text-[#DB3269] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Filing Procedure</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'CA Engagement', desc: 'Add a practicing CA as an authorized partner on the portal.' },
                { step: '2', title: '15CB Drafting', desc: 'CA prepares computation and signs using Class 3 DSC.' },
                { step: '3', title: 'Taxpayer Approval', desc: 'Review and approve the 15CB form submitted by your CA.' },
                { step: '4', title: '15CA Data Entry', desc: 'Fill in remitter, recipient, and remittance details.' },
                { step: '5', title: 'Bank Submission', desc: 'Provide 15CA and 15CB to the bank to release funds.' }
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
                { title: 'Treaty Analysis', icon: Scale },
                { title: 'Certified 15CB', icon: ShieldCheck },
                { title: 'TRC Verification', icon: FileText },
                { title: 'Global Planning', icon: Globe }
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

export default Form15CaCb;
