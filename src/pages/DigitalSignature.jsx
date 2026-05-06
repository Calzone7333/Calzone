import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Key, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Landmark, UserCheck, RefreshCw, Smartphone, Video, Check, Plus, Minus } from 'lucide-react';

const DigitalSignature = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Importance', id: 'Importance' },
    { name: 'DSC Classes', id: 'Classes' },
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
          <span className="text-[#DB3269]">Digital Signature Certificates</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Digital Signature Certificates (DSC)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Secure, Legally Binding Electronic Signatures for Global Compliance
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            A Digital Signature Certificate (DSC) is a secure digital key issued by certifying authorities (CA) for the purpose of validating and certifying the identity of the person holding this certificate. It is the electronic equivalent of a physical signature or a passport.
          </p>
          <p className={paragraphStyle}>
            DSCs are legally recognized under the Information Technology Act, 2000, making them valid for all government filings, tax returns, and corporate registrations in India.
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
            <h2 className={sectionHeadingStyle}>Legal Status</h2>
            <p className={paragraphStyle}>
              "A digitally signed document is admissible in a court of law as primary evidence, carrying the same weight as a physically signed paper."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                DSC ensures non-repudiation, meaning the signer cannot deny having signed the document, providing high-level security for online transactions.
              </p>
            </div>
          </section>

          {/* Importance */}
          <section id="Importance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why is DSC Crucial?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Data Integrity', desc: 'Ensures the document remains unchanged after signing.', icon: ShieldCheck },
                { title: 'Authentication', desc: 'Validates the identity of the sender globally.', icon: UserCheck },
                { title: 'Cost Efficient', desc: 'Saves on logistics, printing, and paper costs.', icon: Landmark },
                { title: 'Fast Filing', desc: 'Instant submission of returns on government portals.', icon: Smartphone }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DSC Classes */}
          <section id="Classes" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>DSC Classes & Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase tracking-widest">Class 3 DSC</h4>
                <p className={paragraphStyle}>The highest level of security, mandatory for:</p>
                <ul className="space-y-3">
                  {['MCA Portal (Company/LLP Registration)', 'Income Tax & GST Filings', 'E-Tendering & E-Procurement', 'Trademark & Patent Filings'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-[#585858] font-bold">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269] flex flex-col justify-center">
                <p className="font-bold text-[18px] mb-2">DGFT DSC</p>
                <p className="text-gray-400 text-[14px]">
                  Specially issued for Export-Import (EXIM) organizations to sign documents on the DGFT portal. It is required for applying for IEC, licenses, and other trade benefits.
                </p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Required Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 text-[#DB3269]">Indian Nationals:</h4>
                <ul className="space-y-3">
                  {['PAN Card copy', 'Aadhaar Card / Voter ID / Passport', 'Recent Passport size photograph', 'Active Mobile Number & Email ID'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 text-[#DB3269]">Foreign Nationals:</h4>
                <ul className="space-y-3">
                  {['Passport (Apostilled/Consularized)', 'Foreign Address Proof', 'Recent Passport size photograph', 'Authorized Identity Proof'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Verification Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Data Submission', desc: 'Upload clear scans of your PAN, Aadhaar, and Photo.' },
                { step: '2', title: 'OTP Verification', desc: 'Real-time authentication on your registered mobile and email.' },
                { step: '3', title: 'Video Verification', desc: 'A quick 30-second live video recording for identity proof.' },
                { step: '4', title: 'Certificate Issuance', desc: 'System-generated certificate approved by the Certifying Authority.' },
                { step: '5', title: 'USB Token Dispatch', desc: 'Secure Class 3 DSC token shipped to your registered address.' }
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
                { title: 'Pan-India Delivery', icon: Landmark },
                { title: 'Video Assistance', icon: Video },
                { title: '24-Hour Approval', icon: Zap },
                { title: 'Secure USB Tokens', icon: Key }
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

export default DigitalSignature;
