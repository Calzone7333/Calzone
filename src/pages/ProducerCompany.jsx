import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const ProducerCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Key Features', id: 'KeyFeatures' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Post-Registration', id: 'PostRegistration' },
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
          <span className="text-[#DB3269]">Producer Company Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Producer Company Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Producer Company Registration with Calzone - Empowering Farmers & Producers
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            India's economy is deeply rooted in agriculture, with over 60% of the population relying on farming and allied sectors for their livelihood. However, individual farmers and small-scale producers often struggle due to market inefficiencies, price fluctuations, and lack of organized infrastructure.
          </p>
          <p className={paragraphStyle}>
            To support agricultural communities and enhance rural entrepreneurship, the government introduced the Producer Company model in 2002 under the Companies Act. This initiative enables farmers, producers, and agricultural entrepreneurs to form a collective entity, allowing them to pool resources, access better market opportunities, and improve their financial security.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we assist farmers, agripreneurs, and producer groups in seamlessly registering their Producer Company, ensuring compliance with legal requirements while unlocking various government benefits and financial incentives.
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
            <h2 className={`${headingStyle} mb-4`}>What is a Producer Company?</h2>
            <p className={paragraphStyle}>
              A Producer Company is a legally registered entity under the Companies Act, 2013, created by farmers, producers, or agricultural entrepreneurs to engage in:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858] mb-4">
              <li><span className="font-bold">Production & Harvesting</span> - Enhancing efficiency in agriculture and allied sectors.</li>
              <li><span className="font-bold">Processing & Grading</span> - Standardizing the quality of produce for better market value.</li>
              <li><span className="font-bold">Marketing & Sales</span> - Providing direct market access to farmers, eliminating middlemen.</li>
              <li><span className="font-bold">Storage & Distribution</span> - Setting up warehouses and distribution channels for supply chain efficiency.</li>
              <li><span className="font-bold">Exporting Agricultural Products</span> - Enabling global market access for farmers.</li>
              <li><span className="font-bold">Providing Financial & Technical Support</span> - Facilitating loans, grants, and technical training.</li>
            </ul>
            <p className={paragraphStyle}>
              A Producer Company is designed to empower primary producers and ensure fair pricing, market accessibility, and better business opportunities.
            </p>
          </section>

          {/* Key Features */}
          <section id="KeyFeatures" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Key Features of a Producer Company</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Registered under the Companies Act, 2013</span> - Operates like a private limited company but is exclusively for producers.</li>
              <li><span className="font-bold">Only active producers can be members</span> - Shareholding is limited to those actively involved in the production process.</li>
              <li><span className="font-bold">One Person, One Vote System</span> - Every member has equal voting rights, ensuring democratic decision-making.</li>
              <li><span className="font-bold">Shares are not publicly Tradable</span> - However, they can be transferred among members.</li>
              <li><span className="font-bold">Mandatory Reserve Fund Creation</span> - A portion of annual profit must be allocated to the reserve fund.</li>
              <li><span className="font-bold">Dispute Resolution Through Arbitration</span> - Ensures smooth conflict resolution among members.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures that your Producer Company is structured efficiently, maximizing benefits for all members.
            </p>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Benefits of Registering a Producer Company</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Increased Market Access & Collective Bargaining Power</span> - Farmers can negotiate better prices, eliminate middlemen, and expand sales channels.</li>
              <li><span className="font-bold">Financial Assistance & Subsidies</span> - Eligible for government loans, grants, and credit support schemes.</li>
              <li><span className="font-bold">Technical & Educational Support</span> - Access to modern farming techniques, training programs, and R&D facilities.</li>
              <li><span className="font-bold">Risk Mitigation & Cost Reduction</span> - Members can pool resources for bulk purchases, reducing input costs.</li>
              <li><span className="font-bold">Tax Benefits</span> - Certain tax exemptions and lower tax rates for agricultural operations.</li>
              <li><span className="font-bold">Sustainable Growth & Employment</span> - Supports rural economies by creating jobs and stabilizing incomes.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures that your Producer Company takes full advantage of financial and operational benefits.
            </p>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility Criteria for Producer Company Registration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Minimum of 10 Individual Farmers/Producers</span> - Or at least 2 producer institutions/entities.</li>
              <li><span className="font-bold">Minimum 5 Directors Required</span> - Directors must be individuals and actively involved in production activities.</li>
              <li><span className="font-bold">Must Engage in Primary Production Activities</span> - Such as farming, livestock, fishing, forestry, or related sectors.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone simplifies the eligibility assessment and ensures a hassle-free registration process.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for Producer Company Registration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Identity & Address Proof</span> - PAN, Aadhaar, Voter ID, or Passport.</li>
              <li><span className="font-bold">Proof of Business Premises</span> - Rental agreement, electricity bill, or ownership document.</li>
              <li><span className="font-bold">Director Identification Number (DIN) & Digital Signature Certificate (DSC)</span> - Mandatory for directors.</li>
              <li><span className="font-bold">Producer Certification</span> - Issued by the local agricultural authority.</li>
              <li><span className="font-bold">Memorandum of Association (MoA) & Articles of Association (AoA)</span> - Governing documents of the company.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone assists in preparing and submitting all necessary documents to avoid delays.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for Producer Company Registration with Calzone</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Gather Required Members & Directors</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Minimum 10 producer members or 2 producer entities.</li>
                  <li>At least 5 directors must be appointed.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Name Reservation for Producer Company</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Name must include “Producer Company Limited”.</li>
                  <li>Must comply with MCA & Trademark regulations.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Obtain Digital Signature Certificate (DSC) & Director Identification Number (DIN)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Directors must obtain a DSC & DIN before proceeding with registration.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 4: Prepare & File Incorporation Documents (SPICe+ Form)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Submit MoA, AoA, producer certification, and business objectives through SPICe+ Form on the MCA portal.</li>
                  <li>Attach required documents & pay processing fees.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 5: Register for GST, EPFO, and ESIC (if applicable)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Complete the AGILE PRO form to obtain GST, EPF, and ESIC registrations.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 6: Submission & Approval from the Registrar of Companies (RoC)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Upon verification, the RoC issues the Certificate of Incorporation, granting legal status to the Producer Company.</li>
                </ul>
              </div>
            </div>
            <p className="font-bold text-[#222222] text-[16px] mt-6">
              Calzone ensures quick and smooth registration, minimizing paperwork and bureaucratic delays.
            </p>
          </section>

          {/* Post-Registration */}
          <section id="PostRegistration" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Post-Registration Compliance for Producer Companies</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Maintain Financial Records & File Annual Returns</span> - Submit profit and loss statements, balance sheets, and tax filings.</li>
              <li><span className="font-bold">Conduct Regular Board Meetings</span> - Required for governance and strategic decision-making.</li>
              <li><span className="font-bold">Create & Maintain a Reserve Fund</span> - A portion of annual profits must be allocated.</li>
              <li><span className="font-bold">Issue Member Benefits & Share Profits</span> - Can distribute dividends and financial support to members.</li>
              <li><span className="font-bold">File GST & Tax Returns (if applicable)</span> - Ensure compliance with financial regulations.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone provides ongoing compliance support to ensure smooth operations.
            </p>
          </section>

          {/* Why Choose Section */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for Producer Company Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'Expert Assistance from Start to Finish', desc: 'We handle everything from documentation to approvals.' },
                { title: 'Hassle-Free Process', desc: 'No more complex legal formalities or regulatory confusion.' },
                { title: 'Government Scheme Guidance', desc: 'Helping you access financial assistance, loans, and subsidies.' },
                { title: 'Affordable & Transparent Pricing', desc: 'No hidden fees, only straightforward services.' },
                { title: 'Ongoing Compliance Support', desc: 'Ensuring that your company remains compliant with all regulations.' }
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

export default ProducerCompany;
