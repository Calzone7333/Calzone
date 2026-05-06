import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserCheck, Check, Plus, Minus } from 'lucide-react';

const UdyamRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
    { name: 'Classification', id: 'Classification' },
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
          <span className="text-[#DB3269]">Udyam Registration (MSME)</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Udyam Registration
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Empowering Micro, Small, and Medium Enterprises with Formal Recognition
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Udyam Registration is the new process for registering MSMEs (Micro, Small, and Medium Enterprises) in India, replacing the old Udyog Aadhaar. It is a fully digital, paperless, and self-declaration based portal that integrates with the Income Tax and GST systems.
          </p>
          <p className={paragraphStyle}>
            Registering your business under Udyam unlocks a massive suite of government subsidies, priority lending schemes, and legal protections that are exclusive to the MSME sector.
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
            <h2 className={sectionHeadingStyle}>Economic Impact</h2>
            <p className={paragraphStyle}>
              "MSMEs contribute nearly 30% to India's GDP and 45% to overall exports. Udyam is your ticket to being part of this formal economy."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                The Udyam certificate is a permanent ID for your business and never expires, though it should be updated annually with turnover and investment data.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Udyam Registration Matters?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Collateral-Free Loans', desc: 'Access to credit via CGTMSE guarantee.', icon: Landmark },
                { title: 'Subsidy Benefits', desc: 'Subsidies on technology and patents.', icon: Zap },
                { title: 'Priority Tenders', desc: 'Reservation in govt procurements.', icon: Briefcase },
                { title: 'Interest Relief', desc: 'Lower interest rates on CC/OD limits.', icon: ShieldCheck }
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
            <h2 className={sectionHeadingStyle}>Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Mandatory Checklist:</h4>
                <ul className="space-y-3">
                  {['Aadhaar Card (Linked to Mobile)', 'PAN Card of Business/Owner', 'Bank Account & IFSC Code', 'Plant & Machinery Investment details', 'Annual Turnover details'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269] flex flex-col justify-center">
                <p className="font-bold text-[#222222] text-[16px] mb-2">Payment Protection</p>
                <p className="text-[14px] text-[#585858]">
                  MSMEs are protected against delayed payments. Buyers must pay within <span className="font-bold">45 days</span> or pay compound interest at 3x the bank rate.
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Aadhaar Validation', desc: 'OTP verification for the entrepreneur or authorized person.' },
                { step: '2', title: 'PAN Integration', desc: 'System fetches business entity type and ITR status automatically.' },
                { step: '3', title: 'Data Entry', desc: 'Provide NIC codes for your industry and location details.' },
                { step: '4', title: 'Self-Declaration', desc: 'Confirm workforce size and investment values without documents.' },
                { step: '5', title: 'URN Generation', desc: 'Instant issuance of the permanent Udyam Registration Number.' }
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

          {/* Classification */}
          <section id="Classification" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>MSME Classification</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-center font-bold">Category</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Investment</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Turnover</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Micro', 'Up to ₹1 Crore', 'Up to ₹5 Crore'],
                    ['Small', 'Up to ₹10 Crore', 'Up to ₹50 Crore'],
                    ['Medium', 'Up to ₹50 Crore', 'Up to ₹250 Crore']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 text-center font-bold text-[#DB3269]">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'NIC Selection', icon: Gavel },
                { title: 'Zero Data Errors', icon: ShieldCheck },
                { title: 'Instant Issuance', icon: Zap },
                { title: 'Post-Reg Advisory', icon: UserCheck }
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

export default UdyamRegistration;
