import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserCheck, Smartphone, Check, Plus, Minus } from 'lucide-react';

const DinValidation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'DIR-3 KYC', id: 'DIR3' },
    { name: 'Requirements', id: 'Requirements' },
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
          <span className="text-[#DB3269]">DIN Validation (DIR-3 KYC)</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          DIN Validation (DIR-3 KYC)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Annual Compliance to Keep Your Director Identification Number Active and Compliant
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Director Identification Number (DIN) and Designated Partner Identification Number (DPIN) are unique 8-digit numbers issued to individuals who are directors of a company or designated partners of an LLP.
          </p>
          <p className={paragraphStyle}>
            Under the Companies Act, 2013, it is mandatory for every person holding an active DIN to file their KYC details annually via the DIR-3 KYC form. Failure to do so leads to the deactivation of the DIN, rendering the individual ineligible to sign any statutory documents.
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
            <h2 className={sectionHeadingStyle}>The Annual Deadline</h2>
            <p className={paragraphStyle}>
              Every individual who holds a DIN as of 31st March of a financial year must submit their DIR-3 KYC by <span className="text-[#DB3269] font-bold">30th September</span> of the following year.
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                DIN KYC is a self-declaration of your current personal details to the Ministry of Corporate Affairs (MCA).
              </p>
            </div>
          </section>

          {/* DIR-3 KYC */}
          <section id="DIR3" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Modes of Filing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-2 uppercase">eForm DIR-3 KYC</h4>
                <p className="text-[14px] text-[#585858] mb-4">Mandatory if you are filing for the first time OR if there is any change in your mobile, email, or address.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[14px] text-[#222222] font-bold"><Check size={16} className="text-[#DB3269]" /> Requires DSC Certification</li>
                  <li className="flex items-center gap-2 text-[14px] text-[#222222] font-bold"><Check size={16} className="text-[#DB3269]" /> Professional Certification required</li>
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-2 uppercase">DIR-3 KYC Web</h4>
                <p className="text-[14px] text-gray-400 mb-4">Applicable only if there are NO changes in your details since the previous year's filing.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[14px] text-white font-bold"><Zap size={16} className="text-[#DB3269]" /> OTP based verification only</li>
                  <li className="flex items-center gap-2 text-[14px] text-white font-bold"><Zap size={16} className="text-[#DB3269]" /> No DSC or Professional needed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section id="Requirements" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Information Needed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Personal Mobile', desc: 'Used for OTP verification (Indian/Foreign).', icon: Smartphone },
                { title: 'Personal Email', desc: 'Used for OTP verification.', icon: Zap },
                { title: 'KYC Documents', desc: 'Self-attested PAN and Aadhaar copies.', icon: FileText },
                { title: 'Digital Signature', desc: 'Valid Class 3 DSC for eForm filing.', icon: UserCheck }
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
            <h2 className={sectionHeadingStyle}>The Filing Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Data Gathering', desc: 'Review current profile on MCA and gather updated identity proofs.' },
                { step: '2', title: 'Drafting eForm', desc: 'Input details in the DIR-3 KYC form (for eForm mode).' },
                { step: '3', title: 'Professional Cert', desc: 'Certification by a practicing CA, CS, or Cost Accountant.' },
                { step: '4', title: 'OTP Verification', desc: 'Submit mobile and email OTPs generated on the portal.' },
                { step: '5', title: 'Submission', desc: 'Upload the form with DSC and generate the SRN.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-bold text-[14px] shrink-0">{item.step}</div>
                  <div>
                    <p className="font-bold text-[#222222] text-[16px]">{item.title}</p>
                    <p className={paragraphStyle.replace('mb-4', 'mb-0')}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Penalties */}
          <section id="Penalties" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Cost of Non-Compliance</h2>
            <div className="p-8 bg-[#fce7f3] border-l-4 border-[#DB3269] flex items-center gap-6">
              <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
              <div>
                <p className="font-bold text-[#222222] text-[18px] mb-1">Deactivation & Penalty</p>
                <p className="text-[14px] text-[#585858]">
                  Filing after the deadline leads to deactivation of DIN. Reactivation requires a late fee of <span className="font-bold text-[#DB3269]">₹5,000</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Auto-Reminders', icon: Zap },
                { title: 'DSC Management', icon: UserCheck },
                { title: 'Pro Certification', icon: Gavel },
                { title: 'DIN Reactivation', icon: ShieldCheck }
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

export default DinValidation;
