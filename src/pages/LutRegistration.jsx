import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Globe, Ship, Check, Plus, Minus } from 'lucide-react';

const LutRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Procedure', id: 'Procedure' },
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
          <span className="text-[#DB3269]">Letter of Undertaking (LUT)</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Letter of Undertaking (LUT)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Zero-Rated Export of Goods and Services without IGST Payment
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            A Letter of Undertaking (LUT) is a statutory document filed on the GST portal that allows registered exporters to export goods or services without paying Integrated GST (IGST). Under the GST law, exports are considered "Zero-Rated Supplies." An exporter has two options: pay IGST and claim a refund later, or file an LUT and export without payment.
          </p>
          <p className={paragraphStyle}>
            Filing an LUT is highly recommended for service exporters and small-to-medium enterprises as it prevents the blocking of working capital in tax refunds, which can often take months to process.
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
            <h2 className={sectionHeadingStyle}>Export Advantage</h2>
            <p className={paragraphStyle}>
              "LUT eliminates the cash flow burden of paying tax upfront. It is a mandatory requirement for every financial year to maintain zero-rated status."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                An LUT is only valid for the financial year in which it is filed. Exporters must file a fresh LUT at the beginning of every new financial year.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Working Capital Ease', desc: 'No need to pay IGST upfront, keeping capital free for operations.', icon: Zap },
                { title: 'Simplified Export', desc: 'Avoid the long and tedious process of claiming tax refunds.', icon: Ship },
                { title: 'Global Edge', desc: 'Lower operational costs make your services more competitive abroad.', icon: Globe }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Who can apply?</h4>
                <ul className="space-y-3">
                  {['Registered GST taxpayers intending to export', 'Suppliers of goods/services to SEZ units', 'No history of tax evasion exceeding ₹2.5 Cr', 'Clean track record under GST/Customs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white flex flex-col justify-center">
                <p className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">The SEZ Link</p>
                <p className="text-gray-400 text-[14px] italic">
                  "LUT is not just for foreign exports. Any supply made to a Special Economic Zone (SEZ) Developer or Unit is also treated as a zero-rated supply."
                </p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Requirement Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2">Data Needed:</h4>
                <ul className="space-y-3">
                  {['GST Identification Number (GSTIN)', 'PAN of the entity', 'Authorized Signatory KYC', 'Names & addresses of two witnesses', 'Previous Year\'s LUT copy'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269] flex flex-col justify-center">
                <p className="font-bold text-[#222222] text-[16px] mb-2">Witness Requirement</p>
                <p className="text-[14px] text-[#585858]">
                  The online form RFD-11 requires the names and addresses of <span className="font-bold">two independent witnesses</span>. These can be partners or employees.
                </p>
              </div>
            </div>
          </section>

          {/* Procedure */}
          <section id="Procedure" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Filing Procedure</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Portal Access', desc: 'Login to the GST portal and navigate to RFD-11 section.' },
                { step: '2', title: 'Period Selection', desc: 'Choose the relevant financial year for the LUT.' },
                { step: '3', title: 'Declaration', desc: 'Select checkboxes confirming adherence to export conditions.' },
                { step: '4', title: 'Witness Entry', desc: 'Input details of two independent witnesses.' },
                { step: '5', title: 'Verification', desc: 'File using DSC or EVC (OTP on registered mobile).' }
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
                { title: 'Renewal Tracking', icon: Scale },
                { title: 'Statutory Docs', icon: FileText },
                { title: 'Zero Error Filing', icon: ShieldCheck },
                { title: 'Expert Support', icon: Landmark }
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

export default LutRegistration;
