import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Calendar, TrendingUp, Check, Plus, Minus } from 'lucide-react';

const GstReturnFiling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Types', id: 'Types' },
    { name: 'Process', id: 'Process' },
    { name: 'Penalties', id: 'Penalties' },
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
          <span className="text-[#DB3269]">GST Return Filing</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          GST Return Filing
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Periodic Statutory Reporting of Sales, Purchases, and Tax Liabilities
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            GST Return filing is a mandatory process where a taxpayer registered under GST must report their sales, purchases, and tax collected/paid to the government. This data is used to calculate the net tax liability or claim Input Tax Credit (ITC). Failure to file returns leads to the deactivation of the GSTIN and blocks the generation of E-Way Bills.
          </p>
          <p className={paragraphStyle}>
            Even if there is no business activity during a specific period, a "NIL Return" must be filed to maintain compliance and avoid accumulating daily late fees.
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
            <h2 className={sectionHeadingStyle}>Filing Frequency</h2>
            <p className={paragraphStyle}>
              "Depending on turnover and scheme selection, filing can be Monthly or Quarterly (QRMP Scheme). Accuracy is key to avoiding mismatches (GSTR-2B vs 3B)."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Proper GST filing ensures that your buyers can claim ITC on the taxes they paid you, maintaining a healthy business relationship.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why File on Time?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Claim ITC', desc: 'Unlock eligibility to claim tax credit on purchases.', icon: Zap },
                { title: 'Avoid Penalties', desc: 'Prevent accumulation of daily late fees.', icon: Scale },
                { title: 'Better Compliance', desc: 'Maintain clean records for loans and tenders.', icon: ShieldCheck },
                { title: 'Buyer Trust', desc: 'Buyers can claim ITC on taxes paid to you.', icon: Briefcase }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>GST Return Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-[#DB3269]" />
                  <h4 className="font-bold text-[#DB3269] uppercase tracking-widest text-[14px]">Primary Filings</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[16px] mb-1">GSTR-1 (Sales Return)</p>
                    <p className="text-[13px] text-gray-400">Due: 11th of next month (Monthly) or 13th (Quarterly).</p>
                  </div>
                  <div>
                    <p className="font-bold text-[16px] mb-1">GSTR-3B (Summary Return)</p>
                    <p className="text-[13px] text-gray-400">Due: 20th of next month. Used for tax payment.</p>
                  </div>
                </div>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-[#DB3269]" />
                  <h4 className="font-bold text-[#222222] uppercase tracking-widest text-[14px]">Annual & Special</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[16px] mb-1">GSTR-9 (Annual Return)</p>
                    <p className="text-[13px] text-[#585858]">Due: 31st Dec following the financial year.</p>
                  </div>
                  <div>
                    <p className="font-bold text-[16px] mb-1">GSTR-4 (Composition)</p>
                    <p className="text-[13px] text-[#585858]">Annual return for Composition Scheme dealers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Filing Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Data Reconciliation', desc: 'Match sales and purchase books with GST portal data.' },
                { step: '2', title: 'GSTR-1 Submission', desc: 'Upload outward supply invoices and HSN summaries.' },
                { step: '3', title: 'ITC Verification', desc: 'Reconcile GSTR-2B to verify eligible tax credits.' },
                { step: '4', title: 'Tax Computation', desc: 'Calculate final liability after adjusting Input Tax Credit.' },
                { step: '5', title: 'GSTR-3B Filing', desc: 'Submit summary return and pay tax via Challan if required.' }
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

          {/* Penalties */}
          <section id="Penalties" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Cost of Delay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-2">Late Fees:</h4>
                <p className="text-[14px] text-[#585858]">₹50 per day (₹25 CGST + ₹25 SGST). For NIL returns, it is ₹20 per day.</p>
              </div>
              <div className="p-6 bg-[#222222] text-white flex items-center gap-6">
                <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
                <div>
                  <p className="font-bold text-[16px] mb-1 text-[#DB3269]">Interest</p>
                  <p className="text-gray-400 text-[13px]">
                    Interest of <span className="text-white font-bold">18% per annum</span> is charged on the unpaid tax amount from the due date.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'ITC Matching', icon: TrendingUp },
                { title: 'Zero Rejection', icon: ShieldCheck },
                { title: 'Expert Audit', icon: Gavel },
                { title: 'Compliance Mgr', icon: Briefcase }
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

export default GstReturnFiling;
