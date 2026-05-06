import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShoppingCart, Globe, ShieldCheck, FileText, Gavel, AlertCircle, Zap, Check, Plus, Minus, Landmark, Scale } from 'lucide-react';

const GstRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Who Needs It', id: 'WhoNeedsIt' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
    { name: 'Returns', id: 'Returns' },
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
          <span className="text-[#DB3269]">GST Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          GST Registration
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Single Unified Indirect Tax System for Pan-India Business Operations
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            GST (Goods and Services Tax) registration is a mandatory process for businesses in India that cross specific turnover thresholds. It integrates multiple indirect taxes—Excise, VAT, Service Tax—into a single destination-based tax system. Obtaining a GSTIN (GST Identification Number) is the first step toward formalizing your business and unlocking the ability to claim Input Tax Credits.
          </p>
          <p className={paragraphStyle}>
            Whether you are a startup or an established enterprise, GST registration ensures that you can sell products/services legally across state borders and through digital e-commerce platforms.
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
            <h2 className={sectionHeadingStyle}>Tax Authority</h2>
            <p className={paragraphStyle}>
              "GST is a destination-based tax on consumption of goods and services. Registration provides legal recognition as a supplier of goods or services."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Registration allows you to collect tax from your customers and pass on the credit of taxes paid on your purchases to your buyers.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Input Tax Credit', desc: 'Claim credit for taxes paid on business purchases.', icon: Zap },
                { title: 'E-Commerce Access', desc: 'Mandatory for selling on Amazon, Flipkart, etc.', icon: ShoppingCart },
                { title: 'Interstate Sales', desc: 'Legally sell goods and services across state borders.', icon: Globe },
                { title: 'Credibility', desc: 'Enhances trust with B2B clients and govt tenders.', icon: ShieldCheck },
                { title: 'Simplified Filing', desc: 'Replaces multiple returns with a unified system.', icon: FileText },
                { title: 'Legal Status', desc: 'Formalizes your business under Indian tax laws.', icon: Gavel }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who Needs It */}
          <section id="WhoNeedsIt" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Who Must Register?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Turnover Thresholds:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[14px] text-gray-400 font-bold">
                    <Check size={18} className="text-[#DB3269] mt-1" /> Goods Suppliers: Aggregate turnover &gt; ₹40 Lakhs
                  </li>
                  <li className="flex items-start gap-3 text-[14px] text-gray-400 font-bold">
                    <Check size={18} className="text-[#DB3269] mt-1" /> Service Providers: Aggregate turnover &gt; ₹20 Lakhs
                  </li>
                  <li className="flex items-start gap-3 text-[14px] text-gray-400 font-bold">
                    <Check size={18} className="text-[#DB3269] mt-1" /> North Eastern States: Threshold is ₹10 Lakhs
                  </li>
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Mandatory For:</h4>
                <ul className="space-y-3">
                  {['Inter-state sellers of goods', 'E-commerce operators & sellers', 'Casual taxable persons', 'Non-resident taxable persons', 'Input Service Distributors'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <AlertCircle size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Proprietorship', docs: ['PAN Card of Owner', 'Aadhaar Card', 'Photo of Owner', 'EB Bill / Rent Proof'] },
                { title: 'Partnership / LLP', docs: ['PAN of Firm', 'Partnership Deed', 'Aadhaar of Partners', 'Office Address Proof'] },
                { title: 'Private Limited', docs: ['PAN of Company', 'COI / MOA / AOA', 'Board Resolution', 'Director KYC'] }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9]">
                  <h4 className="font-bold text-[#222222] mb-4 border-b border-[#DB3269] pb-2 uppercase text-[14px]">{item.title}</h4>
                  <ul className="space-y-3">
                    {item.docs.map((doc, j) => (
                      <li key={j} className="flex items-center gap-2 text-[13px] text-[#585858]">
                        <div className="w-1.5 h-1.5 bg-[#DB3269]" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'TRN Generation', desc: 'Submit PAN, Mobile, and Email on the GST Portal via OTP.' },
                { step: '2', title: 'Form Filing', desc: 'Fill business details, stakeholder info, and place of business.' },
                { step: '3', title: 'Document Upload', desc: 'Upload digital copies of address proof and KYC documents.' },
                { step: '4', title: 'Officer Verification', desc: 'Verification of application by the jurisdictional GST officer.' },
                { step: '5', title: 'GSTIN Issuance', desc: 'Generation of the 15-digit GSTIN and Registration Certificate.' }
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

          {/* Returns */}
          <section id="Returns" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Post-Registration Returns</h2>
            <div className="p-6 bg-[#222222] text-white flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><FileText size={48} /></div>
              <div>
                <p className="font-bold text-[18px] mb-1">Compliance Obligations</p>
                <p className="text-gray-400 text-[15px]">
                  Registered GST holders must file <span className="text-white font-bold">GSTR-1</span> (Sales) and <span className="text-white font-bold">GSTR-3B</span> (Summary) monthly or quarterly, even for NIL business.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'HSN Mapping', icon: Scale },
                { title: 'Zero Error Filing', icon: ShieldCheck },
                { title: 'Dept Liaisoning', icon: Landmark },
                { title: 'Fast Approval', icon: Zap }
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

export default GstRegistration;
