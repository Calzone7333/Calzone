import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, Receipt, FileText, Factory, Pencil, Building, File } from 'lucide-react';

const PublicLimitedCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Timelines', id: 'Timelines' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Checklist', id: 'Checklist' },
    { name: 'Public vs Private', id: 'PublicPrivate' },
    { name: 'Why Chooses Us', id: 'WhyChoosesus' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Public Limited Company</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Public Limited Company Registration <br /> in 10 working days
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Public Limited Company Registration with Calzone - Unlocking Growth & Transparency
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            A Public Limited Company (PLC) is a business entity that allows public investment and limited liability for its shareholders. It is ideal for entrepreneurs looking to scale their business, raise capital from investors, and list on the stock exchange.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the Public Limited Company registration process, ensuring compliance with government regulations while allowing businesses to expand with ease.
          </p>
          <p className={paragraphStyle}>
            A Public Limited Company operates under the Companies Act, 2013, and must adhere to strict corporate governance and disclosure norms to protect investors.
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
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative tracking-tight ${activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#222222] hover:text-[#DB3269]'
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
            <h2 className={`${headingStyle} mb-4`}>What is a Public Limited Company?</h2>
            <p className={paragraphStyle}>
              A Public Limited Company (PLC) is a type of business entity where:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight mb-4">
              <li><span className="font-bold">Shares can be traded publicly</span> - Allows raising capital through an IPO (Initial Public Offering).</li>
              <li><span className="font-bold">Shareholder Liability is Limited</span> - Shareholders are only liable up to their investment.</li>
              <li><span className="font-bold">More Compliance, More Trust</span> - As a listed or unlisted entity, a PLC must adhere to regulatory filings and transparency standards.</li>
              <li><span className="font-bold">Minimum 3 Directors & 7 Shareholders</span> - Can have unlimited shareholders.</li>
              <li><span className="font-bold">Minimum Capital Requirement of ₹5 Lakh</span> - Ensures credibility and business expansion potential.</li>
            </ul>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Best suited for:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li>Large businesses with expansion goals.</li>
                <li>Companies looking to raise public funding.</li>
                <li>Enterprises planning to list on the stock exchange.</li>
              </ul>
            </div>
            <p className={paragraphStyle}>
              At Calzone, we ensure your Public Limited Company registration is seamless and legally compliant.
            </p>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose a Public Limited Company?</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Access to Public Capital</span> - Easier to raise funds from investors, institutions, and the stock market.</li>
              <li><span className="font-bold">Business Growth & Credibility</span> - PLCs attract more investors and have higher market credibility.</li>
              <li><span className="font-bold">Share Transferability</span> - Shareholders can easily buy and sell shares, increasing liquidity.</li>
              <li><span className="font-bold">Limited Liability</span> - Shareholders are not personally responsible for business debts.</li>
              <li><span className="font-bold">Perpetual Succession</span> - Business continues even if directors or shareholders change.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone simplifies the process of setting up a Public Limited Company, ensuring hassle-free registration and compliance.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for Public Limited Company Registration.</h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li>Identity Proof of Directors & Shareholders (PAN, Aadhaar, Passport).</li>
              <li>Address Proof of Directors & Shareholders (Utility Bills, Voter ID, Passport).</li>
              <li>Proof of Registered Office Address (Electricity Bill, Rent Agreement, No Objection Certificate from Landlord).</li>
              <li>Director Identification Number (DIN) for Directors.</li>
              <li>Digital Signature Certificate (DSC) for Directors.</li>
              <li>Memorandum of Association (MOA) - Defines business objectives.</li>
              <li>Articles of Association (AOA) - Governs company operations.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures your documentation is complete and error-free for fast approvals.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for Public Limited Company Registration with Calzone</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Apply for Digital Signature Certificate (DSC)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Directors need a DSC to sign documents digitally.</li>
                  <li>Calzone helps in obtaining DSC from authorized certifying authorities.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Apply for Director Identification Number (DIN)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>DIN is mandatory for all directors.</li>
                  <li>Calzone manages the DIN application process through the MCA (Ministry of Corporate Affairs) portal.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Reserve a Unique Business Name</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Proposed company name should comply with naming guidelines.</li>
                  <li>Can be applied through SPICe+ Form or RUN (Reserve Unique Name) service.</li>
                  <li>The name must end with "Limited" to indicate a Public Limited Company.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 4: File SPICe+ Form for Incorporation</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Once the name is approved, apply for company incorporation.</li>
                  <li>Submit all required documents, including MOA & AOA.</li>
                  <li>After verification, the Registrar of Companies (ROC) issues the Certificate of Incorporation.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 5: Obtain Certificate of Commencement</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Within 180 days of incorporation, apply for Form INC-20A to obtain the Certificate of Commencement.</li>
                  <li>Failure to obtain this certificate prevents business operations.</li>
                </ul>
              </div>
            </div>
            <p className="font-bold text-[#222222] text-[16px] mt-6">
              Calzone ensures a smooth and timely registration process so you can focus on business growth.
            </p>
          </section>

          {/* Timelines */}
          <section id="Timelines" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Timeline for Public Limited Company Registration</h2>
            <div className="space-y-4">
              {[
                { icon: Pencil, label: 'Digital Signature & DIN Application -', time: '1-2 working days.' },
                { icon: Building, label: 'Company Name Reservation -', time: '3-5 working days.' },
                { icon: File, label: 'Submission of SPICe+ Form & Approval -', time: '5-7 working days.' },
                { icon: FileText, label: 'Certificate of Incorporation Issuance -', time: '10-15 working days.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DB3269] flex items-center justify-center text-white shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div className="pt-1">
                    <span className={subHeadingStyle}>{item.label}</span>
                    <p className={`${paragraphStyle} mb-0`}>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#585858] mt-6">
              With Calzone, you get fast-tracked approvals and expert compliance support.
            </p>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Compliance Requirements for Public Limited Companies</h2>
            <p className={paragraphStyle}>As a Public Limited Company, regular compliance is mandatory to ensure transparency and maintain investor confidence.</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li><span className="font-bold">Board Meetings</span> - Must be conducted within 30 days of incorporation.</li>
              <li><span className="font-bold">Annual Financial Statements</span> - Balance Sheet, Director's Report, and Auditor's Report must be filed.</li>
              <li><span className="font-bold">Annual Return Filing (MGT-7 & AOC-4)</span> - Must be submitted within 30 days of AGM.</li>
              <li><span className="font-bold">Income Tax & GST Filings</span> - Returns must be filed as per applicable tax regulations.</li>
              <li><span className="font-bold">Secretarial Audit</span> - Mandatory if paid-up capital exceeds ₹10 crore or turnover crosses ₹50 crore.</li>
              <li><span className="font-bold">SEBI Compliances</span> - If the company is listed on the stock exchange.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone offers end-to-end compliance management to keep your company legally secure.
            </p>
          </section>

          {/* Checklist */}
          <section id="Checklist" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Checklist for Public Limited Company Registration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li>Minimum 3 Directors & 7 Shareholders.</li>
              <li>Minimum Capital of ₹5 Lakh.</li>
              <li>Company Name Approval from ROC.</li>
              <li>MOA & AOA Drafting.</li>
              <li>Registered Office Address Proof.</li>
              <li>GST & Tax Registrations (if applicable).</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures your business meets all legal and compliance requirements effortlessly.
            </p>
          </section>

          {/* Public vs Private */}
          <section id="PublicPrivate" className="scroll-mt-32 overflow-x-auto">
            <h2 className={`${headingStyle} mb-4`}>Public Limited Company vs Private Limited Company - Which One to Choose?</h2>
            <table className="w-full border border-gray-200 text-[14px]">
              <thead>
                <tr className="bg-[#EEEEEE] text-[#222222]">
                  <th className="border border-gray-200 p-3 text-center font-bold">Feature</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Public Limited Company</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Private Limited Company</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Shareholders', 'Minimum 7 (No Maximum)', 'Minimum 2, Maximum 200'],
                  ['Public Investment', 'Allowed via IPO', 'Not allowed'],
                  ['Share Trading', 'Shares traded publicly', 'Shares privately held'],
                  ['Compliance Requirements', 'High', 'Moderate'],
                  ['Liability Protection', 'Limited', 'Limited'],
                  ['Listing on Stock Exchange', 'Yes', 'No']
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                    <td className="border border-gray-200 p-3 text-center font-bold text-[#222222]">{row[0]}</td>
                    <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[1]}</td>
                    <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 space-y-1">
              <p className="text-[14px] text-[#585858]">• Choose a Public Limited Company if: You want to raise public capital and expand at scale.</p>
              <p className="text-[14px] text-[#585858]">• Choose a Private Limited Company if: You want limited compliance with controlled ownership.</p>
            </div>
            <p className="text-[14px] text-[#585858] mt-4">
              At Calzone, we help businesses choose the right structure based on their goals.
            </p>
          </section>

          {/* Why Chooses Us */}
          <section id="WhyChoosesus" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for Public Limited Company Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'Expert Guidance', desc: 'End-to-end registration and compliance management.' },
                { title: 'Quick & Hassle-Free Processing', desc: 'Fast-track approvals for incorporation.' },
                { title: 'Affordable & Transparent Pricing', desc: 'No hidden costs, just straightforward solutions.' },
                { title: 'Compliance & Legal Support', desc: 'From tax filings to SEBI regulations, we handle everything.' }
              ].map((item, i) => (
                <li key={i} className={`${paragraphStyle} mb-2`}>
                  • <span className={subHeadingStyle}>{item.title}</span> – {item.desc}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublicLimitedCompany;
