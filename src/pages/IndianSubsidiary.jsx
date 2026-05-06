import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const IndianSubsidiary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Register', id: 'WhyRegister' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Post-Registration', id: 'PostRegistration' },
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
          <span className="text-[#DB3269]">Indian Subsidiary Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Indian Subsidiary <br /> Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Indian Subsidiary Registration with Calzone - Expand Your Business in India with Ease
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            As businesses seek to expand and tap into new markets, forming a subsidiary company is one of the most effective ways to establish a strong presence. A subsidiary company allows a foreign or domestic parent company to set up an independent entity while maintaining operational control.
          </p>
          <p className={paragraphStyle}>
            India, with its booming economy, vast consumer base, and supportive government policies, has become a hotspot for global businesses. Whether you are a foreign company looking to establish operations in India or a domestic company expanding into new sectors, registering a subsidiary company is the ideal approach.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the entire subsidiary registration process, ensuring that your business is legally compliant, tax-efficient, and ready to operate.
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
            <h2 className={`${headingStyle} mb-4`}>What is an Indian Subsidiary?</h2>
            <p className={paragraphStyle}>
              An Indian subsidiary is a company incorporated under Indian law where more than 50% of the shareholding is controlled by another company (parent company). The parent company can be a domestic or foreign entity, but the subsidiary operates as an independent company in India.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Types of Indian Subsidiaries:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li><span className="font-bold">Wholly Owned Subsidiary (WOS)</span> - The parent company owns 100% of the shares.</li>
                <li><span className="font-bold">Partially Owned Subsidiary</span> - The parent company owns more than 50% but less than 100% of the shares.</li>
              </ul>
            </div>
          </section>

          {/* Why Register */}
          <section id="WhyRegister" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register a Subsidiary in India?</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Market Expansion</span> - Gain direct access to India's massive consumer base.</li>
              <li><span className="font-bold">Brand Independence</span> - Operate under a separate brand identity while retaining parent company control.</li>
              <li><span className="font-bold">Operational Control</span> - The parent company controls decision-making and management.</li>
              <li><span className="font-bold">Tax & Financial Benefits</span> - Subsidiaries can avail tax incentives, funding opportunities, and government subsidies.</li>
              <li><span className="font-bold">Separate Legal Identity</span> - A subsidiary is legally independent, ensuring limited liability protection.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 font-bold">
              Calzone ensures that your subsidiary setup is smooth, efficient, and fully compliant with Indian regulations.
            </p>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility Criteria for Indian Subsidiary Registration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Minimum 2 Directors</span> - At least one director must be a resident of India.</li>
              <li><span className="font-bold">Minimum 2 Shareholders</span> - The parent company must own at least 50% of shares.</li>
              <li><span className="font-bold">No Minimum Capital Requirement</span> - You can start with any amount of capital.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone guides you through eligibility checks and ensures all legal formalities are met.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for Indian Subsidiary Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">For Directors & Shareholders</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Passport-size photographs.</li>
                  <li>PAN Card & Aadhaar Card.</li>
                  <li>Valid ID proof (Voter ID, Driving License, or Passport).</li>
                  <li>Residential proof (Utility bill, Bank statement).</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">For Parent Company (if applicable)</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Certificate of Incorporation.</li>
                  <li>Board resolution authorizing the investment.</li>
                  <li>Notarized/Apostilled charter documents (MoA & AoA).</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">For Registered Office in India</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Utility bill of the business premises (Electricity, Gas, Water).</li>
                  <li>Rental agreement & No Objection Certificate from the owner (if rented).</li>
                </ul>
              </div>
            </div>
            <p className="text-[16px] text-[#585858] mt-6">
              Calzone assists in preparing and verifying all necessary documents to avoid delays.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for Subsidiary Company Registration with Calzone.</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Digital Signature Certificate (DSC) for Directors</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Directors must obtain a DSC to sign electronic documents.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Director Identification Number (DIN) Application</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>A unique DIN is issued to directors, allowing them to hold a legal position in the company.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Name Reservation on MCA Portal</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>The subsidiary's name must be unique and approved by the Ministry of Corporate Affairs (MCA).</li>
                  <li>Can be reserved through SPICe+ Part-A form.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 4: Filing Incorporation Documents (SPICe+ Part-B)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>File incorporation documents, including MoA & AoA.</li>
                  <li>Apply for PAN, TAN, EPFO, ESIC, and Professional Tax.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 5: Submission & Approval from the Registrar of Companies (RoC)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>The RoC verifies documents and issues the Certificate of Incorporation.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 6: Open a Bank Account & Start Operations</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Once incorporated, the subsidiary must open a bank account and deposit the investment capital.</li>
                </ul>
              </div>
            </div>
            <p className="text-[16px] text-[#585858] mt-6 font-bold">
              Calzone handles everything, from document filing to final approval, ensuring a hassle-free experience.
            </p>
          </section>

          {/* Post-Registration */}
          <section id="PostRegistration" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Post-Registration Compliance for Indian Subsidiaries</h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li><span className="font-bold">Annual General Meetings (AGM)</span> - Must be held within 9 months of the financial year-end.</li>
              <li><span className="font-bold">Board Meetings</span> - Minimum 4 meetings per year (one every 120 days).</li>
              <li><span className="font-bold">Filing Financial Statements (AOC-4)</span> - Submit annual financial reports to the RoC.</li>
              <li><span className="font-bold">Filing Annual Returns (MGT-7)</span> - Mandatory compliance filing for all companies.</li>
              <li><span className="font-bold">Statutory Registers & Tax Filings</span> - Maintain registers of members, debenture holders, and related party transactions.</li>
              <li><span className="font-bold">GST & Income Tax Returns</span> - File periodic GST & tax returns to remain compliant.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 font-bold">
              Calzone offers ongoing compliance support to keep your subsidiary in good legal standing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndianSubsidiary;
