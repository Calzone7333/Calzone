import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, Zap, UserPlus, UserCheck, Check, Plus, Minus } from 'lucide-react';

const LlpDesignatedPartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Role', id: 'Role' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Process', id: 'Process' },
    { name: 'Documents', id: 'Documents' },
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
          <span className="text-[#DB3269]">Adding a Designated Partner</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          LLP Adding a Designated Partner
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Scaling Your LLP Leadership and Statutory Compliance Management
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            A Designated Partner in a Limited Liability Partnership (LLP) is equivalent to a Director in a Company. They are responsible for all administrative and legal compliances of the LLP. According to the LLP Act, 2008, every LLP must have at least two Designated Partners, of which one must be a resident of India.
          </p>
          <p className={paragraphStyle}>
            Adding a new partner involves obtaining a DPIN, amending the LLP agreement, and filing Form 4 with the MCA. Calzone streamlines this process to ensure your new leadership is integrated without any regulatory gaps.
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
            <h2 className={sectionHeadingStyle}>Statutory Management</h2>
            <p className={paragraphStyle}>
              "Designated Partners are personally liable for any non-compliance or penalties imposed on the LLP for failure to file annual returns or financial statements."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                At least two designated partners must be individuals, and at least one of them shall be a resident in India.
              </p>
            </div>
          </section>

          {/* Role */}
          <section id="Role" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Role of Designated Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Legal Compliance', desc: 'Responsible for filing annual returns and financial statements.', icon: Gavel },
                { title: 'Operational Authority', desc: 'Signatory authority for contracts and bank operations.', icon: UserCheck },
                { title: 'Statutory Responsibility', desc: 'Personally liable for defaults under the LLP Act.', icon: AlertCircle },
                { title: 'Capital Contribution', desc: 'Managing the equity and contribution structure of the LLP.', icon: Scale },
                { title: 'Board Meetings', desc: 'Convening and participating in partner decision-making.', icon: Landmark },
                { title: 'Brand Representation', desc: 'Acting as the face of the LLP for regulatory purposes.', icon: Zap }
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

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Who can become a Partner?</h2>
            <div className="p-8 bg-[#222222] text-white">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Any individual (Indian or Foreign National).',
                  'A body corporate (Company or another LLP).',
                  'Individual must hold a valid DPIN/DIN.',
                  'Must not be an undischarged insolvent.',
                  'Must not have been declared as of unsound mind.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                    <Check size={16} className="text-[#DB3269]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Addition Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'DPIN & DSC', desc: 'Obtain Digital Signature and Partner Identification Number for the candidate.' },
                { step: '2', title: 'Consent Letter', desc: 'Obtain formal consent from the incoming partner to act as Designated Partner.' },
                { step: '3', title: 'Resolution', desc: 'Pass a resolution in accordance with the existing LLP agreement.' },
                { step: '4', title: 'ROC Filing (Form 4)', desc: 'Notify the ROC about the change in partners within 30 days.' },
                { step: '5', title: 'Agreement Update', desc: 'Draft and file a supplementary LLP agreement (Form 3) with the new partner details.' }
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

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2 uppercase">From Candidate:</h4>
                <ul className="space-y-3">
                  {['PAN Card (Self-Attested)', 'Aadhaar / Passport / Voter ID', 'Passport Size Photograph', 'Digital Signature (DSC)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">LLP Records:</h4>
                <ul className="space-y-3">
                  {['Resolution for Addition', 'Supplementary LLP Agreement', 'Consent Letter of Partner', 'Existing LLP Agreement Copy'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Expert Drafting', icon: FileText },
                { title: 'DPIN Assistance', icon: UserPlus },
                { title: 'ROC Liaisoning', icon: Landmark },
                { title: 'Compliance Mgmt', icon: ShieldCheck }
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

export default LlpDesignatedPartner;
