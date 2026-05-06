import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Trash2, RotateCcw, Check, Plus, Minus, TrendingUp } from 'lucide-react';

const GstCancellation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Reasons', id: 'Reasons' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Revocation', id: 'Revocation' },
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
          <span className="text-[#DB3269]">GST Cancellation & Surrender</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          GST Cancellation & Surrender
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Formal Deactivation of GSTIN and Final Compliance Settlement
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Cancellation or surrender of GST registration refers to the formal process of deactivating a registered taxpayer's GSTIN. Once the cancellation is approved, the taxpayer is no longer required to collect or pay GST, nor file any periodic returns. This is essential for businesses that have ceased operations, undergone a change in PAN, or fall below the mandatory threshold.
          </p>
          <p className={paragraphStyle}>
            It is critical to note that the taxpayer remains liable for any tax, interest, or penalties due for the period <span className="font-bold">prior</span> to the date of cancellation.
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
            <h2 className={sectionHeadingStyle}>Final Return (GSTR-10)</h2>
            <p className={paragraphStyle}>
              "Every person whose registration is cancelled must file a Final Return in Form GSTR-10 within 3 months of the date of cancellation to settle stock-related tax credits."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The cancellation of registration does not affect the liability of the person to pay tax and other dues under this Act or of the rules made thereunder.
              </p>
            </div>
          </section>

          {/* Reasons */}
          <section id="Reasons" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Cancel GSTIN?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Business Closure', desc: 'The business has been discontinued or ceased permanently.', icon: Trash2 },
                { title: 'Change in PAN', desc: 'Converting from Partnership to Pvt Ltd or Proprietorship.', icon: Scale },
                { title: 'Turnover Drop', desc: 'Aggregate turnover fell below mandatory threshold.', icon: Landmark },
                { title: 'Death of Proprietor', desc: 'Legal heirs applying for cancellation of sole business.', icon: AlertCircle },
                { title: 'Ownership Transfer', desc: 'Business is sold, merged, or demerged.', icon: Briefcase },
                { title: 'Voluntary Opt-out', desc: 'No longer required for inter-state sales.', icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Cancellation Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Portal Access', desc: 'Login to portal and navigate to Registration > Cancellation.' },
                { step: '2', title: 'Reasoning', desc: 'Specify reason (Closure, PAN change) and effective date.' },
                { step: '3', title: 'Stock Disclosure', desc: 'Provide details of stock held and tax payable on them.' },
                { step: '4', title: 'Application Review', desc: 'Tax officer reviews and may issue a show-cause notice.' },
                { step: '5', title: 'Order Issuance', desc: 'Receipt of GST REG-19 confirming formal cancellation.' }
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
            <h2 className={sectionHeadingStyle}>Documentation Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-6 border-b border-gray-800 pb-2 uppercase">Submission Kit:</h4>
                <ul className="space-y-4">
                  {['Latest GST Return (GSTR-1/3B) details', 'Stock Statement with value of inputs', 'Proof of Closure or PAN Change', 'Latest Bank Statement', 'Authority letter for filing'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-gray-400 font-bold"><Check size={18} className="text-[#DB3269]" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269] flex flex-col justify-center">
                <p className="font-bold text-[#222222] text-[18px] mb-2">ITC Reversal</p>
                <p className="text-[14px] text-[#585858]">
                  If you have <span className="font-bold">Unused Stock</span> at cancellation, you must pay back the ITC taken on those goods via GSTR-10.
                </p>
              </div>
            </div>
          </section>

          {/* Revocation */}
          <section id="Revocation" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Revocation of Cancellation</h2>
            <div className="p-8 bg-[#222222] text-white flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><RotateCcw size={48} /></div>
              <div>
                <p className="font-bold text-[18px] mb-1 text-[#DB3269]">Suo-Moto Cancellation?</p>
                <p className="text-gray-400 text-[14px]">
                  If cancelled due to non-filing, you can apply for <span className="text-white font-bold">Revocation (Form REG-21)</span> within 30 days after filing pending returns and paying all dues.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'GSTR-10 Help', icon: FileText },
                { title: 'ITC Reversal Audit', icon: TrendingUp },
                { title: 'Dept Liaisoning', icon: Landmark },
                { title: 'Revocation Help', icon: RotateCcw }
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

export default GstCancellation;
