import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, Truck, Navigation, Check, Plus, Minus } from 'lucide-react';

const GstEwayBill = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Requirements', id: 'Requirements' },
    { name: 'Parties', id: 'Parties' },
    { name: 'Validity', id: 'Validity' },
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
          <span className="text-[#DB3269]">GST E-Way Bill</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          GST E-Way Bill
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Digital Compliance for the Movement of Goods across State Borders
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            An Electronic Way Bill (E-Way Bill) is a mandatory digital document generated on the GST portal for the movement of goods of value more than ₹50,000. It replaces the erstwhile manual waybill system with a streamlined, real-time tracking mechanism that ensures every shipment in transit is accounted for under the GST regime.
          </p>
          <p className={paragraphStyle}>
            The E-Way Bill must be generated <span className="font-bold">before</span> the movement of goods commences and must accompany the consignment along with the invoice or delivery challan throughout the journey.
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
            <h2 className={sectionHeadingStyle}>Tracking & Transparency</h2>
            <p className={paragraphStyle}>
              "The system allows authorities to verify shipments at any point, significantly reducing tax evasion and preventing the illegal movement of goods without tax payment."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Failure to generate an E-Way Bill can result in a minimum penalty of ₹10,000 or the tax amount, whichever is higher, along with potential seizure of goods.
              </p>
            </div>
          </section>

          {/* Requirements */}
          <section id="Requirements" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>When is it Required?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 text-[#DB3269]">Mandatory Scenarios:</h4>
                <ul className="space-y-3">
                  {['Inter-state movement of goods', 'Intra-state movement (above threshold)', 'Consignment value exceeds ₹50,000', 'Movement for Job work or Sales Returns', 'Inward supply from unregistered person'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Exemptions:</h4>
                <ul className="space-y-3">
                  {['Goods via non-motorized conveyance', 'Specified exempt goods (LPG/Kerosene)', 'Goods under customs supervision', 'Consignment value below ₹50,000'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <AlertCircle size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Parties */}
          <section id="Parties" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Responsible Parties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'The Consignor', desc: 'Registered seller initiating the movement of goods.', icon: Landmark },
                { title: 'The Consignee', desc: 'The recipient buyer if the supplier is unregistered.', icon: Briefcase },
                { title: 'The Transporter', desc: 'Logistics provider if neither party generates it.', icon: Truck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Validity */}
          <section id="Validity" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Validity Rules</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269]">
              <div className="flex items-center gap-4 mb-4">
                <Navigation className="text-[#DB3269]" size={32} />
                <h4 className="font-bold text-[#222222] text-[18px]">Distance-Based Rules:</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-pink-100">
                  <p className="font-bold text-[14px]">Regular Cargo</p>
                  <p className="text-[12px] text-[#585858]">1 day for every <span className="font-bold text-[#DB3269]">200 km</span> or part thereof.</p>
                </div>
                <div className="p-4 bg-white border border-pink-100">
                  <p className="font-bold text-[14px]">Over Dimensional Cargo</p>
                  <p className="text-[12px] text-[#585858]">1 day for every <span className="font-bold text-[#DB3269]">20 km</span> or part thereof.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Generation Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Portal Access', desc: 'Login to the official E-Way Bill portal (ewaybillgst.gov.in).' },
                { step: '2', title: 'Part A Entry', desc: 'Input GSTIN of parties, HSN code, and Invoice details.' },
                { step: '3', title: 'Part B Entry', desc: 'Input Transporter ID and Vehicle Number.' },
                { step: '4', title: 'Validation', desc: 'System verifies GSTINs and calculates distance automatically.' },
                { step: '5', title: 'EBN Generation', desc: 'System generates the 12-digit E-Way Bill Number (EBN).' }
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
                { title: '24/7 Portal Access', icon: Zap },
                { title: 'Bulk Generation', icon: FileText },
                { title: 'Zero Error Filing', icon: ShieldCheck },
                { title: 'Compliance Audit', icon: Gavel }
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

export default GstEwayBill;
