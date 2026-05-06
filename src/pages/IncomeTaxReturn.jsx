import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Calendar, TrendingUp, Globe, Check, Plus, Minus } from 'lucide-react';

const IncomeTaxReturn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Who Should File', id: 'WhoShouldFile' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'ITR Forms', id: 'Forms' },
    { name: 'Process', id: 'Process' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const itrForms = [
    { form: 'ITR 1 (Sahaj)', use: 'Salaried income up to ₹50 Lakhs.', who: 'Employees, Pensioners' },
    { form: 'ITR 2', use: 'No business income, Capital gains.', who: 'Stock Traders, Multiple Properties' },
    { form: 'ITR 3', use: 'Income from business or profession.', who: 'Freelancers, Consultants, Professionals' },
    { form: 'ITR 4 (Sugam)', use: 'Presumptive taxation (Sec 44AD).', who: 'Small Businesses & Professionals' },
    { form: 'ITR 5', use: 'Firms, LLPs, AOPs, BOIs.', who: 'Partnerships, Societies' },
    { form: 'ITR 6', use: 'Companies not claiming exemption.', who: 'Private & Public Ltd Companies' }
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
          <span className="text-[#DB3269]">Income Tax Return Filing</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Income Tax Return Filing
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Declaration of Annual Income, Deductions, and Final Tax Liability under the Income Tax Act, 1961
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            An Income Tax Return (ITR) is a formal document submitted to the Income Tax Department that declares your total income, deductions claimed, and taxes paid for a financial year. Filing an ITR is not just a statutory obligation for those above the exemption limit, but also a vital financial record for securing loans, processing visas, and claiming tax refunds.
          </p>
          <p className={paragraphStyle}>
            The process involves categorizing income into five heads: Salary, House Property, Business/Profession, Capital Gains, and Other Sources. Calzone ensures that you utilize every available deduction to optimize your tax outflow legally.
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
            <h2 className={sectionHeadingStyle}>Financial Pillar</h2>
            <p className={paragraphStyle}>
              "ITR is the most authentic proof of income for any individual or business. It reflects financial discipline and helps in building a robust credit profile."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Filing before the July 31st deadline is crucial to avoid late fees and interest on unpaid tax amounts.
              </p>
            </div>
          </section>

          {/* Who Should File */}
          <section id="WhoShouldFile" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Mandatory Filing Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Who Must File?</h4>
                <ul className="space-y-3">
                  {['Individuals earning above basic exemption limit', 'All Companies & Partnership Firms (Mandatory)', 'Residents with foreign assets/signing authority', 'Anyone seeking a refund of excess TDS', 'Individuals with high-value transactions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white flex flex-col justify-center">
                <p className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">New vs Old Regime</p>
                <p className="text-gray-400 text-[14px] italic">
                  "From FY 2023-24, the New Tax Regime is the default. Taxpayers must actively choose the Old Regime to claim traditional deductions like LIC and PF."
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Tax Refund', desc: 'Get back excess tax deducted (TDS) from income.', icon: Zap },
                { title: 'Loan Processing', desc: 'Mandatory for Home, Car, and Business loans.', icon: Landmark },
                { title: 'Visa Application', desc: 'Authentic proof of financial standing for travel.', icon: Globe },
                { title: 'Loss Carry Forward', desc: 'Carry forward losses to offset against future profits.', icon: TrendingUp },
                { title: 'Avoid Penalties', desc: 'Stay compliant and avoid high late fees/interest.', icon: Scale },
                { title: 'Tender Eligibility', desc: 'Required for bidding for govt and private tenders.', icon: FileText }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Forms */}
          <section id="Forms" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The ITR Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itrForms.map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] hover:border-[#DB3269] transition-all">
                  <h4 className="font-bold text-[#222222] text-[16px] mb-1">{item.form}</h4>
                  <p className="text-[13px] font-bold text-[#DB3269] mb-3 uppercase tracking-tighter">{item.who}</p>
                  <p className="text-[12px] text-[#585858] leading-relaxed">{item.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Filing Procedure</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Document Collection', desc: 'Gather Form 16, Bank Statements, and Investment Proofs.' },
                { step: '2', title: 'Data Reconciliation', desc: 'Match your records with AIS (Annual Information Statement).' },
                { step: '3', title: 'Form Selection', desc: 'Choose the correct ITR form based on your income sources.' },
                { step: '4', title: 'Computation', desc: 'Draft your income statement and optimize deductions.' },
                { step: '5', title: 'Filing & E-Verify', desc: 'Upload to portal and e-verify via Aadhaar OTP.' }
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
                { title: 'Tax Optimization', icon: TrendingUp },
                { title: 'AIS Reconciliation', icon: ShieldCheck },
                { title: 'Expert Rep', icon: Gavel },
                { title: 'Zero Rejection', icon: Zap }
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

export default IncomeTaxReturn;
