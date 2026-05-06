import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Calendar, TrendingUp, Check, Plus, Minus } from 'lucide-react';

const LlpCompliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'ROC Checklist', id: 'ROC' },
    { name: 'Non-ROC Compliance', id: 'NonROC' },
    { name: 'Audit Rules', id: 'Audit' },
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
          <span className="text-[#DB3269]">LLP Annual Compliance</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          LLP Annual Compliance
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Statutory Reporting, Financial Solvency, and Tax Audits for Limited Liability Partnerships
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Limited Liability Partnerships (LLPs) are required to maintain a set of annual compliances to remain in "Active" status on the Ministry of Corporate Affairs (MCA) portal. While LLPs enjoy fewer regulatory burdens compared to private limited companies, they are strictly monitored for financial solvency and annual reporting.
          </p>
          <p className={paragraphStyle}>
            Annual compliance for an LLP primarily involves two key ROC filings (Form 8 and Form 11) and the filing of Income Tax Returns. Timely submission is crucial as LLPs face heavy per-day penalties for delays.
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
            <h2 className={sectionHeadingStyle}>Statutory Goal</h2>
            <p className={paragraphStyle}>
              "Compliance ensures financial transparency, avoids cumulative penalties, and maintains the LLP’s legal eligibility to bid for government tenders or secure bank funding."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Every LLP incorporated between April 1 and December 31 must file its returns for that financial year.
              </p>
            </div>
          </section>

          {/* ROC Checklist */}
          <section id="ROC" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Annual ROC Filings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#DB3269] text-white rounded"><Calendar size={20} /></div>
                  <h4 className="font-bold text-[#222222] text-[18px]">Form 11: Annual Return</h4>
                </div>
                <p className="text-[14px] text-[#585858] mb-4">Details of partners and contributions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[14px] text-[#222222] font-bold"><Check size={16} className="text-[#DB3269]" /> Due by May 30th</li>
                  <li className="flex items-center gap-2 text-[14px] text-[#222222] font-bold"><Check size={16} className="text-[#DB3269]" /> Mandatory even for zero business</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#DB3269] text-white rounded"><FileText size={20} /></div>
                  <h4 className="font-bold text-[#DB3269] text-[18px]">Form 8: Statement of Account</h4>
                </div>
                <p className="text-[14px] text-gray-400 mb-4">Financial solvency and balance sheet data.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[14px] text-white font-bold"><Check size={16} className="text-[#DB3269]" /> Due by October 30th</li>
                  <li className="flex items-center gap-2 text-[14px] text-white font-bold"><Check size={16} className="text-[#DB3269]" /> Must be certified by Professional</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Non-ROC Compliance */}
          <section id="NonROC" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Tax & Statutory Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Income Tax Return', desc: 'Filing ITR-5 via the Income Tax portal.', icon: Scale },
                { title: 'GST Returns', icon: Zap, desc: 'Monthly/Quarterly GSTR-1 and GSTR-3B filings.' },
                { title: 'TDS Returns', desc: 'Quarterly filing for tax deducted at source.', icon: ShieldCheck },
                { title: 'DIR-3 KYC', desc: 'Annual KYC for all designated partners.', icon: Gavel },
                { title: 'Accounting', desc: 'Maintenance of books as per accrual or cash basis.', icon: Landmark },
                { title: 'ESI & PF', desc: 'Monthly deposits if employee thresholds are met.', icon: Briefcase }
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

          {/* Audit Rules */}
          <section id="Audit" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Audit Thresholds</h2>
            <div className="p-8 bg-[#EEEEEE] border-t-4 border-[#DB3269]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-[#222222] text-[20px] mb-2">Turnover Based</h4>
                  <p className="text-[#585858] text-[16px]">Mandatory if turnover exceeds <span className="font-bold text-[#DB3269]">₹40 Lakhs</span></p>
                </div>
                <div className="border-l border-gray-300">
                  <h4 className="font-bold text-[#222222] text-[20px] mb-2">Contribution Based</h4>
                  <p className="text-[#585858] text-[16px]">Mandatory if capital exceeds <span className="font-bold text-[#DB3269]">₹25 Lakhs</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section id="Penalties" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Non-Compliance Impact</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">Per Day Penalty</p>
                <p className="text-[14px] text-[#585858]">
                  Small LLPs face a penalty of <span className="font-bold text-[#DB3269]">₹100 per day</span> for late filing, which can accumulate to significant amounts without a ceiling for certain forms.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Auto-Deadlines', icon: Zap },
                { title: 'Tax Optimization', icon: TrendingUp },
                { title: 'ROC Liaisoning', icon: Landmark },
                { title: 'Dedicated Support', icon: ShieldCheck }
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

export default LlpCompliance;
