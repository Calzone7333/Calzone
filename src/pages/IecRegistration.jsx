import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Landmark, Zap, ShoppingBag, Check, Plus, Minus } from 'lucide-react';

const IecRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
    { name: 'Who Needs It', id: 'WhoNeedsIt' },
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
          <span className="text-[#DB3269]">IEC Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Importer Exporter Code (IEC)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Your Mandatory 10-Digit Passport for Global Trade and Foreign Remittances
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The Importer-Exporter Code (IEC) is a 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for any person or business entity looking to import goods into India or export products and services outside the country.
          </p>
          <p className={paragraphStyle}>
            Unlike other tax registrations, IEC is a one-time registration with <span className="font-bold">lifetime validity</span>, meaning you don't need to renew it annually, making it one of the most cost-effective business certifications.
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
            <h2 className={sectionHeadingStyle}>Mandatory Rule</h2>
            <p className={paragraphStyle}>
              "No import or export shall be made by any person without an IEC number unless specifically exempted."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The IEC number is essential for customs clearance and for receiving/sending money in foreign currency through banks.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why IEC Registration Matters?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Global Exposure', desc: 'Ability to sell products and services internationally.', icon: Globe },
                { title: 'Customs Clearance', desc: 'Mandatory for clearing shipments through EDI.', icon: ShieldCheck },
                { title: 'Export Subsidies', desc: 'Eligible for MEIS/SEIS and other incentives.', icon: Landmark },
                { title: 'Lifetime Validity', desc: 'One-time registration. No annual renewal fees.', icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Simple Document Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-6 border-b border-gray-800 pb-2">Business Proofs:</h4>
                <ul className="space-y-4">
                  {['Business PAN Card copy', 'Digital Signature (Class 3)', 'Incorporation Certificate', 'Cancelled Cheque (Business Account)'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-gray-400 font-bold"><Check size={18} className="text-[#DB3269]" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-6 border-b border-[#DB3269] pb-2">Personal Identity:</h4>
                <ul className="space-y-4">
                  {['Applicant Aadhaar Card', 'Passport Size Photo', 'Address Proof (EB/Rent)', 'Mobile Number & Email ID'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-[#585858] font-bold"><Check size={18} className="text-[#DB3269]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Online Application', desc: 'Filing the ANF-2A form on the official DGFT portal.' },
                { step: '2', title: 'PAN Integration', desc: 'Automatic verification of entity via the CBDT database.' },
                { step: '3', title: 'Document Upload', desc: 'Attaching the cancelled cheque and address proofs.' },
                { step: '4', title: 'Digital Signing', desc: 'Verification of the application using Class 3 DSC.' },
                { step: '5', title: 'Certificate Issuance', desc: 'DGFT reviews the details and issues the IEC in e-format.' }
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

          {/* Who Needs It */}
          <section id="WhoNeedsIt" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Who Needs IEC?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Global E-Commerce', desc: 'Selling on Amazon Global, eBay, or Etsy.', icon: ShoppingBag },
                { title: 'Exporters', desc: 'Manufacturers sending goods abroad.', icon: Scale },
                { title: 'Importers', desc: 'Purchasing raw materials from abroad.', icon: Landmark },
                { title: 'Service Firms', desc: 'Firms receiving foreign remittances.', icon: Globe },
                { title: 'Custom Brokers', desc: 'Facilitating shipments for clients.', icon: ShieldCheck },
                { title: 'Freelancers', desc: 'Contractors dealing with overseas clients.', icon: FileText }
              ].map((item, i) => (
                <div key={i} className="p-4 border-l-4 border-[#222222] bg-[#F9F9F9] flex items-center gap-4">
                  <div className="text-[#DB3269]"><item.icon size={20} /></div>
                  <div>
                    <h4 className="font-bold text-[#222222] text-[14px]">{item.title}</h4>
                    <p className="text-[11px] text-[#585858]">{item.desc}</p>
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
                { title: 'Fast Processing', icon: Zap },
                { title: 'Expert Guidance', icon: Gavel },
                { title: 'DGFT Liaison', icon: Landmark },
                { title: 'Zero Rejection', icon: ShieldCheck }
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

export default IecRegistration;
