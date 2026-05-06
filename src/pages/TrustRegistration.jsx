import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const TrustRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why & Who', id: 'WhyWho' },
    { name: 'Types', id: 'Types' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Key Benefits', id: 'KeyBenefits' },
    { name: 'Post-Registration', id: 'PostRegistration' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Trust Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Trust Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Establish Your Trust with Confidence and Legal Protection
        </p>

        {/* Tabs Navigation */}
        <div className="mb-10 border-b border-gray-100 sticky top-[72px] bg-white z-40">
          <ul className="flex flex-wrap items-center gap-6 py-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a 
                  href={`#${tab.id}`}
                  onClick={() => setActiveTab(tab.name)}
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative tracking-tight ${
                    activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#222222] hover:text-[#DB3269]'
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
            <h2 className={`${headingStyle} mb-4`}>What is Trust Registration?</h2>
            <p className={paragraphStyle}>
              A trust is a legal entity created when an individual or organization (Settlor) transfers property to another individual or entity (Trustee) to manage it for the benefit of a third party (Beneficiary). Trusts serve a range of purposes, from charitable activities to private wealth management, and registration ensures legal recognition, financial security, and compliance with tax regulations.
            </p>
            <p className={paragraphStyle}>
              At Calzone, we simplify the trust registration process, ensuring seamless compliance while you focus on making an impact.
            </p>
          </section>

          {/* Why & Who */}
          <section id="WhyWho" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register a Trust?</h2>
            <p className={paragraphStyle}>
              While trusts can operate without registration, formally registering your trust offers significant legal and financial advantages:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold text-[#222222]">Legal Recognition</span> - A registered trust becomes a separate legal entity.</li>
              <li><span className="font-bold text-[#222222]">Tax Benefits</span> - Eligible for tax exemptions under the Income Tax Act.</li>
              <li><span className="font-bold text-[#222222]">Trust Property Protection</span> - Prevents misuse or unauthorized claims.</li>
              <li><span className="font-bold text-[#222222]">Structured Governance</span> - Clearly defines roles, duties, and rights.</li>
              <li><span className="font-bold text-[#222222]">Public Credibility</span> - Builds trust with donors, beneficiaries, and stakeholders.</li>
              <li><span className="font-bold text-[#222222]">No Need for Probate</span> - Simplifies inheritance planning and wealth transfer.</li>
            </ul>

            <h2 className={`${headingStyle} mb-4`}>Who Can Create a Trust?</h2>
            <p className={paragraphStyle}>Any individual, group, or organization can establish a trust, provided:</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li>The intent to create a trust is clear.</li>
              <li>The purpose of the trust is lawful.</li>
              <li>The trustee is capable of managing trust affairs.</li>
              <li>The trust deed is properly drafted and executed.</li>
            </ul>
          </section>

          {/* Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Types of Trusts in India</h2>
            <div className="space-y-6">
              <div className="bg-[#F9F9F9] p-6 border-l-4 border-[#DB3269]">
                <h3 className={`${subHeadingStyle} mb-2`}>1. Public Trust</h3>
                <p className={paragraphStyle}>
                  A Public Trust is set up for the benefit of society, focusing on charitable, educational, religious, or public welfare activities. Examples include:
                </p>
                <ul className="list-disc pl-10 space-y-1 text-[15px] text-[#222222] tracking-tight">
                  <li>Educational institutions</li>
                  <li>Healthcare & medical facilities</li>
                  <li>Religious organizations</li>
                  <li>Environmental & social welfare initiatives</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-6 border-l-4 border-[#DB3269]">
                <h3 className={`${subHeadingStyle} mb-2`}>2. Private Trust</h3>
                <p className={paragraphStyle}>
                  A Private Trust is created for the benefit of specific individuals or groups, such as family members or organizations. These are commonly used for:
                </p>
                <ul className="list-disc pl-10 space-y-1 text-[15px] text-[#222222] tracking-tight">
                  <li><span className="font-bold">Wealth & Estate Planning</span> - Protecting family assets.</li>
                  <li><span className="font-bold">Corporate Trusts</span> - Managing business succession.</li>
                  <li><span className="font-bold">Employee Benefit Trusts</span> - Incentivizing employees with financial security.</li>
                </ul>
              </div>
            </div>
            <p className="text-[16px] text-[#585858] mt-6 italic">
              At Calzone, we guide you in selecting the best structure for your trust, ensuring compliance and smooth execution.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Trust Registration Process with Calzone</h2>
            <div className="space-y-8">
              <div>
                <p className={`${subHeadingStyle} mb-2`}>Step 1: Define Your Trust's Purpose & Name</p>
                <p className={paragraphStyle}>
                  Choose a unique name that aligns with your trust’s objectives and is distinctive (not similar to existing trademarks) and legally compliant.
                </p>
                <p className="text-[#DB3269] font-bold text-[14px] tracking-tight">Pro Tip: We conduct a trust name search to ensure hassle-free approval.</p>
              </div>
              
              <div>
                <p className={`${subHeadingStyle} mb-2`}>Step 2: Draft a Trust Deed</p>
                <p className={paragraphStyle}>A Trust Deed is a legal document outlining essential info like objectives, trustee details, governance terms, and fund management rules.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white border border-gray-100 p-4">
                    <p className="font-bold mb-2 text-[#222222]">Essential Information:</p>
                    <ul className="list-disc pl-5 text-[14px] text-[#585858] space-y-1">
                      <li>Name and objectives of the trust</li>
                      <li>Names & addresses of settlor, trustees, and beneficiaries</li>
                      <li>Terms of governance and succession</li>
                      <li>Rules regarding fund management</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-100 p-4">
                    <p className="font-bold mb-2 text-[#222222]">Key Legal Clauses:</p>
                    <ul className="list-disc pl-5 text-[14px] text-[#585858] space-y-1">
                      <li>Appointment & resignation of trustees</li>
                      <li>Powers and responsibilities</li>
                      <li>Asset management</li>
                      <li>Conflict resolution mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p className={`${subHeadingStyle} mb-2`}>Step 3: Execute the Trust Deed</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Print on stamp paper of appropriate value.</li>
                  <li>Sign by settlor and trustees with two witnesses.</li>
                  <li>Submit self-attested ID proofs and photos.</li>
                </ul>
              </div>

              <div>
                <p className={`${subHeadingStyle} mb-2`}>Step 4: Submit for Registration</p>
                <p className={paragraphStyle}>Visit the local sub-registrar's office with the original deed, registered office proof, trustee IDs, and witnesses.</p>
                <p className="text-[#DB3269] font-bold text-[14px]">Processing Time: 7-14 days, depending on state-specific guidelines.</p>
              </div>

              <div>
                <p className={`${subHeadingStyle} mb-2`}>Step 5: Receive Certificate</p>
                <p className={paragraphStyle}>Once verified, the Registrar's Office issues the Trust Registration Certificate, officially recognizing your trust as a legal entity.</p>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section id="KeyBenefits" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Key Benefits of Trust Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Legal Safeguards', items: ['Protects Trust Property', 'Ensures Compliance'] },
                { title: 'Tax Benefits', items: ['Exemptions under 12A & 80G', 'Wealth Tax Benefits'] },
                { title: 'Operational Transparency', items: ['Ensures Proper Governance', 'Increases Donor Trust'] },
                { title: 'Efficient Wealth Transfer', items: ['No Probate Required', 'Immediate Benefit to Heirs'] }
              ].map((benefit, i) => (
                <div key={i} className="bg-[#DB3269] text-white p-6 h-full">
                  <p className="font-bold text-[18px] mb-4 border-b border-white/20 pb-2">{benefit.title}</p>
                  <ul className="space-y-2">
                    {benefit.items.map((item, j) => (
                      <li key={j} className="text-[14px] flex items-start gap-2">
                        <Check size={14} className="mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Post-Registration */}
          <section id="PostRegistration" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Post-Registration Compliance for Trusts</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Obtain PAN Card for Trust',
                'Maintain Proper Financial Records',
                'File Annual Income Tax Returns',
                'GST Registration (If applicable)',
                'Audit Reports for Large Trusts',
                'Apply for 80G & 12A Exemption'
              ].map((item, i) => (
                <li key={i} className="bg-[#F9F9F9] p-4 flex items-center gap-3 text-[#585858] font-bold">
                  <div className="w-2 h-2 bg-[#DB3269]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for Trust Registration?</h2>
            <div className="space-y-4">
              {[
                { title: 'Expert Legal Guidance', desc: 'Professional trust deed drafting & documentation' },
                { title: 'Quick Registration Processing', desc: 'End-to-end assistance & follow-ups' },
                { title: 'Tax Planning & Compliance Support', desc: 'Maximize your trust\'s benefits' },
                { title: 'Transparent & Affordable Services', desc: 'No hidden costs, no delays' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><Check size={20} className="text-[#DB3269]" /></div>
                  <div>
                    <p className={subHeadingStyle}>{item.title}</p>
                    <p className={paragraphStyle}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrustRegistration;
