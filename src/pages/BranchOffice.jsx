import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const BranchOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Register', id: 'WhyRegister' },
    { name: 'Permitted Activities', id: 'PermittedActivities' },
    { name: 'Taxation', id: 'Taxation' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Why Choose', id: 'WhyChoose' },
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
          <span className="text-[#DB3269]">Branch Office Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Branch Office <br /> Registration
        </h1>
        <p className={`${paragraphStyle} mb-8 italic`}>
          Expand Your Business Presence in India with Ease
        </p>

        {/* Introduction */}
        <div className="mb-10 max-w-4xl">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            As businesses grow and seek new markets, establishing a branch office in India is an excellent way to expand operations while maintaining a direct presence. A branch office allows a foreign company to conduct business activities in India without setting up a separate legal entity.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we specialize in seamless branch office registration, ensuring that businesses comply with Indian laws and regulatory requirements while enjoying the benefits of an established local presence.
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
            <h2 className={`${headingStyle} mb-4`}>What is a Branch Office?</h2>
            <p className={paragraphStyle}>
              A branch office is an extension of a foreign company that operates in India under the same name and brand. Unlike a subsidiary, a branch office is not a separate legal entity—it remains connected to its parent company.
            </p>
            <div className="bg-[#F9F9F9] p-6 mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-3">Key Features of a Branch Office:</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
                <li>Operates in the same name as the parent company.</li>
                <li>Permitted to conduct similar business activities as the parent company.</li>
                <li>Cannot engage in manufacturing or retail trading.</li>
                <li>Liabilities of the branch remain with the parent company.</li>
                <li>Subject to Foreign Exchange Management Act (FEMA) regulations.</li>
              </ul>
            </div>
            <p className={paragraphStyle}>
              Calzone ensures that your branch office setup aligns with Indian regulations and industry standards.
            </p>
          </section>

          {/* Why Register */}
          <section id="WhyRegister" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register a Branch Office in India?</h2>
            <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#585858]">
              <li><span className="font-bold text-[#222222]">Expand Business Presence</span> – Establish a direct footprint in India while staying connected to the parent company.</li>
              <li><span className="font-bold text-[#222222]">Tax & Regulatory Benefits</span> – A branch office can operate legally, access financial services, and enter contracts.</li>
              <li><span className="font-bold text-[#222222]">Access to Indian Markets</span> – Leverage India's growing consumer base and business ecosystem.</li>
              <li><span className="font-bold text-[#222222]">Ease of Business Operations</span> – Conduct commercial activities, technical services, and liaison work efficiently.</li>
              <li><span className="font-bold text-[#222222]">Brand Recognition</span> – Operate under the same name as the parent company, strengthening brand value.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-6 font-bold">
              Calzone ensures that your branch office complies with RBI and MCA guidelines while offering hassle-free setup services.
            </p>
          </section>

          {/* Permitted Activities */}
          <section id="PermittedActivities" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Permitted Activities for a Branch Office in India</h2>
            <p className={paragraphStyle}>A branch office in India is allowed to conduct the following activities:</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858] mb-8">
              <li><span className="font-bold text-[#222222]">Market Research & Promotional Activities</span> – Conduct surveys and explore business opportunities.</li>
              <li><span className="font-bold text-[#222222]">Technical & Consultancy Services</span> – Offer expertise in engineering, IT, finance, and consulting sectors.</li>
              <li><span className="font-bold text-[#222222]">Import & Export of Goods</span> – Engage in global trade while managing local operations.</li>
              <li><span className="font-bold text-[#222222]">Liaison Work</span> – Act as a point of contact for parent company dealings.</li>
              <li><span className="font-bold text-[#222222]">Financial & Investment Support</span> – Assist in managing parent company investments in India.</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-[#DB3269] p-6">
              <p className="font-bold text-[#DB3269] text-[16px] mb-2 uppercase">Not Allowed:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li>Cannot engage in manufacturing or retail trading in India.</li>
                <li>Cannot undertake direct revenue-generating business without RBI approval.</li>
              </ul>
            </div>
          </section>

          {/* Taxation */}
          <section id="Taxation" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Taxation for a Branch Office in India</h2>
            <p className={paragraphStyle}>
              A branch office in India is considered a foreign entity, and its profits are taxed at <span className="font-bold">40% plus applicable surcharges and cess</span>.
            </p>
            <div className="space-y-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Additional Taxes & Compliances:</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
                <li><span className="font-bold">GST Registration</span> – Required if turnover exceeds the threshold limit.</li>
                <li><span className="font-bold">TAN</span> – For withholding tax collection and deduction.</li>
                <li><span className="font-bold">Annual Income Tax Filing</span> – Comply with Indian tax laws and reporting requirements.</li>
              </ul>
            </div>
            <p className="text-[16px] text-[#585858] mt-6 italic">
              Calzone offers complete tax advisory services to help optimize compliance and minimize liabilities.
            </p>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Annual Compliance Requirements for a Branch Office</h2>
            <p className={paragraphStyle}>Mandatory Filings:</p>
            <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#585858]">
              <li><span className="font-bold text-[#222222]">Annual Activity Certificate (AAC)</span> – Certified by a Chartered Accountant, submitted to RBI.</li>
              <li><span className="font-bold text-[#222222]">Audited Financial Statements</span> – Filing with Registrar of Companies (RoC).</li>
              <li><span className="font-bold text-[#222222]">Income Tax & GST Returns</span> – Compliance with Indian tax regulations.</li>
              <li><span className="font-bold text-[#222222]">Regulatory Reporting</span> – Any changes in branch structure must be reported to RBI & MCA.</li>
            </ul>
            <p className="text-[16px] text-[#DB3269] mt-6 font-bold">
              Calzone ensures seamless compliance, avoiding penalties and regulatory issues.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for Branch Office Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">From the Parent Company:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Certificate of Incorporation</li>
                  <li>MoA & AoA</li>
                  <li>List of Directors & Key Executives</li>
                  <li>Details of Shareholders</li>
                  <li>Audited Financial Statements</li>
                  <li>Banker's Report from Home Country</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">For Indian Address:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Utility Bills (Elec/Water/Tel)</li>
                  <li>NOC from Property Owner</li>
                  <li>Rental Agreement (if applicable)</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">For Representatives:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Passport Copies</li>
                  <li>Valid Business Visa</li>
                  <li>Address Proof (Utility Bills, Bank Statements)</li>
                </ul>
              </div>
            </div>
            <p className="text-[16px] text-[#585858] mt-6 italic">
              Calzone simplifies document processing, ensuring a smooth approval process.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for Branch Office Registration in India</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Filing Application with RBI (via AD Bank)', desc: 'Submit Form FNC and documents to an Authorized Dealer Bank for preliminary approval.' },
                { step: 2, title: 'RBI Approval & Unique Identification Number (UIN)', desc: 'The AD Bank forwards the application to RBI for formal UIN allocation and registration.' },
                { step: 3, title: 'Register with Ministry of Corporate Affairs (MCA)', desc: 'File Form FC-1 with MCA within 30 days of approval and obtain DIN/DSC.' },
                { step: 4, title: 'Tax & Financial Setup', desc: 'Apply for PAN/TAN and open a corporate bank account for branch transactions.' },
                { step: 5, title: 'Import-Export Compliance', desc: 'Obtain Import-Export Code (IEC) if involved in international trade operations.' }
              ].map((item) => (
                <div key={item.step} className="mb-6 flex gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">{item.step}</div>
                  <div>
                    <p className={subHeadingStyle}>{item.title}</p>
                    <p className={`${paragraphStyle} mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#585858] mt-6 font-bold">
              Calzone manages the entire process, ensuring quick approvals and smooth operations.
            </p>
          </section>

          {/* Why Choose section */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for Branch Office Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'Expert Regulatory Compliance', desc: 'We ensure 100% compliance with RBI, MCA, and tax regulations.' },
                { title: 'Faster Processing & Documentation', desc: 'No delays, no errors—just smooth approvals.' },
                { title: 'End-to-End Assistance', desc: 'From registration to annual compliance, we handle everything.' },
                { title: 'Foreign Business Support', desc: 'We specialize in helping international companies enter the Indian market.' },
                { title: 'Transparent & Affordable Pricing', desc: 'No hidden fees, just cost-effective solutions.' }
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

export default BranchOffice;
