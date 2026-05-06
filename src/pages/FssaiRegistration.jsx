import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Utensils, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Landmark, ShoppingCart, Truck, Check, Plus, Minus, Zap } from 'lucide-react';

const FssaiRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Importance', id: 'Importance' },
    { name: 'License Types', id: 'Types' },
    { name: 'Documents', id: 'Documents' },
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
          <span className="text-[#DB3269]">FSSAI Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          FSSAI Food License
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Ensuring Food Safety, Hygiene, and Legal Compliance for Your Business
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            FSSAI (Food Safety and Standards Authority of India) is the apex body responsible for regulating and supervising food safety in India. Every food business operator (FBO), from petty retailers to large-scale manufacturers, is legally required to obtain an FSSAI license or registration.
          </p>
          <p className={paragraphStyle}>
            The FSSAI logo and registration number on food products signify that the food is safe for human consumption and has passed the hygiene standards set by the government.
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
            <h2 className={sectionHeadingStyle}>Mandatory Compliance</h2>
            <p className={paragraphStyle}>
              "Operating a food business without a valid FSSAI license is a punishable offense with heavy fines and potential closure of premises."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                FSSAI registration ensures that your food business adheres to the highest standards of safety and hygiene, protecting both your customers and your brand.
              </p>
            </div>
          </section>

          {/* Importance */}
          <section id="Importance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why FSSAI is Essential?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Legal Validity', desc: 'Avoid lawsuits and heavy penalties during safety inspections.', icon: Gavel },
                { title: 'Consumer Trust', desc: 'The FSSAI mark is the ultimate trust signal for quality.', icon: ShieldCheck },
                { title: 'Market Expansion', desc: 'Required for selling on Swiggy, Zomato, and Amazon.', icon: ShoppingCart },
                { title: 'Brand Credibility', desc: 'Enhances reputation and helps in securing investments.', icon: Landmark },
                { title: 'Hygiene Benchmark', desc: 'Ensures standard sanitary and hygiene protocols.', icon: Utensils },
                { title: 'Export Readiness', desc: 'Prerequisite for exporting food products from India.', icon: Scale }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* License Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Types of FSSAI Licenses</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-center font-bold">Category</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Annual Turnover</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Basic Registration', 'Below ₹12 Lakh', 'Petty retailers, Home-based kitchens'],
                    ['State License', '₹12 Lakh to ₹20 Crore', 'Restaurants, Medium manufacturers'],
                    ['Central License', 'Above ₹20 Crore', 'Import/Export, E-commerce, Large scale']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 text-center font-bold text-[#DB3269]">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#585858] font-bold">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 text-[#DB3269]">Individual/Proprietor:</h4>
                <ul className="space-y-3">
                  {['PAN & Aadhaar Card', 'Passport Size Photo', 'Electricity Bill / Rent Agreement', 'NOC from Property Owner'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">State/Central License:</h4>
                <ul className="space-y-3">
                  {['Blueprint of the facility', 'List of Machinery with Capacity', 'List of Food Categories', 'Water Test Report', 'Board Resolution'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Eligibility Check', desc: 'Identify if you need Basic, State, or Central license.' },
                { step: '2', title: 'Data Compilation', desc: 'Compile technical documents and self-declaration forms.' },
                { step: '3', title: 'FoSCoS Filing', desc: 'Submit the application on the official FSSAI portal.' },
                { step: '4', title: 'Fee Payment', desc: 'Pay govt fees for the chosen tenure (1 to 5 years).' },
                { step: '5', title: 'Issuance', desc: 'Receive the 14-digit FSSAI number and e-Certificate.' }
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
                { title: 'Expert Guidance', icon: Gavel },
                { title: 'Zero Rejection', icon: ShieldCheck },
                { title: 'Renewal Alerts', icon: AlertCircle },
                { title: 'Fast Processing', icon: Zap }
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

export default FssaiRegistration;
