import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const NGORegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: '12A Registration', id: 'Registration' },
    { name: '80G & 12A', id: 'WhyGet' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Validity & Renewal', id: 'ValidityRenewal' },
    { name: 'Documents', id: 'Documents' },
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
          <span className="text-[#DB3269]">80G and 12A Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Get Your 80G & 12A Registration with Calzone
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Unlock Tax Benefits & Boost Donations for Your Non-Profit Organization
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            For non-profit organizations, gaining trust and financial support is crucial. The 80G & 12A registration not only establishes credibility but also enables donors to claim tax deductions, making your NGO more attractive for donations.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
            <li>Section 80G allows donors to claim deductions on their taxable income for donations made.</li>
            <li>Section 12A exempts the income of your organization from taxation, ensuring that funds received are used entirely for charitable purposes.</li>
          </ul>
          <p className={paragraphStyle}>
            At Calzone, we help non-profits streamline the registration process, ensuring compliance with tax regulations and maximizing funding opportunities.
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
            <h2 className={`${headingStyle} mb-4`}>What is 80G Registration?</h2>
            <p className={paragraphStyle}>
              80G registration is a certification issued by the Income Tax Department, allowing donors to claim tax deductions on their donations to your organization. This significantly enhances your fundraising potential, as both individuals and corporations are more likely to contribute when they receive tax benefits.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Key Benefits of 80G Registration:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li>Encourages larger donations from individuals and businesses</li>
                <li>Enhances credibility and attracts more funding</li>
                <li>Applicable for domestic and corporate donations</li>
                <li>Provides a competitive edge over non-registered organizations</li>
              </ul>
            </div>
          </section>

          {/* 12A Registration */}
          <section id="Registration" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>What is 12A Registration?</h2>
            <p className={paragraphStyle}>
              12A registration is essential for any NGO or non-profit organization to be recognized as a charitable entity under Indian tax laws. With this registration, your organization will not have to pay income tax on funds received, ensuring that donations and grants are used effectively.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Key Benefits of 12A Registration:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li>Complete tax exemption on NGO income</li>
                <li>Enhances eligibility for government & CSR funding</li>
                <li>Builds trust & accountability with donors</li>
                <li>Helps in securing foreign grants & international collaborations</li>
              </ul>
            </div>
          </section>

          {/* Why Get */}
          <section id="WhyGet" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Get 80G & 12A Registration with Calzone?</h2>
            <p className={paragraphStyle}>
              At Calzone, we specialize in helping non-profits, trusts, and Section 8 companies seamlessly register under 80G & 12A. Our expert team ensures that your organization meets all legal requirements and submits a flawless application.
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Hassle-Free Process', desc: 'We handle all the paperwork so you can focus on your mission.' },
                { title: 'Quick Turnaround', desc: 'Get your registration completed in the shortest time possible.' },
                { title: 'Ongoing Compliance Support', desc: 'We help you renew your certification every 5 years as per the latest rules.' },
                { title: 'Expert Guidance', desc: 'Personalized assistance for smooth registration.' }
              ].map((item, i) => (
                <li key={i} className={`${paragraphStyle} mb-2`}>
                  • <span className={subHeadingStyle}>{item.title}</span> – {item.desc}
                </li>
              ))}
            </ul>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Registration Process</h2>
            <p className={paragraphStyle}>At Calzone, we ensure a seamless and efficient 80G & 12A registration process for your NGO:</p>
            <div className="space-y-4">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Application Submission</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>File Form 10A with the Commissioner of Income Tax (Exemptions).</li>
                  <li>Attach all supporting documents.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Document Verification</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>The Commissioner reviews your application.</li>
                  <li>Additional information may be requested for clarity.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Approval & Certification</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Upon successful verification, the registration certificate is issued.</li>
                  <li>If rejected, the application can be resubmitted with modifications.</li>
                </ul>
              </div>
            </div>
            <p className="text-[#DB3269] font-bold text-[16px] mt-6">
              Processing Time: Typically 30-45 days, depending on the complexity of your case.
            </p>
          </section>

          {/* Validity & Renewal */}
          <section id="ValidityRenewal" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Validity & Renewal of 80G & 12A Registration</h2>
            <p className={paragraphStyle}>Previously, 80G & 12A registrations were permanent. However, as per recent government regulations:</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li>Validity is now limited to 5 years.</li>
              <li>Renewal is mandatory before expiration.</li>
              <li>NGOs must revalidate their status online through the Income Tax e-filing portal.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures you never miss a deadline by handling all revalidation procedures on time.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for 80G & 12A Registration</h2>
            <p className={paragraphStyle}>To register under 80G & 12A, you will need:</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li>NGO Registration Certificate (Trust Deed / Section 8 Incorporation Certificate)</li>
              <li>PAN Card of the NGO</li>
              <li>Audited Financial Statements (last 3 years, if applicable)</li>
              <li>FCRA Registration ID (if accepting foreign donations)</li>
              <li>NGO Darpan ID (if available)</li>
              <li>Details of Charitable Activities undertaken by the NGO</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Don't worry! If you're unsure about any documents, Calzone will assist you in organizing and filing them correctly.
            </p>
          </section>

          {/* Why Choose Section */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for 80G & 12A Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'Zero Hassles', desc: 'We handle the legalities while you focus on your cause.' },
                { title: 'Expert Team', desc: 'Professional support from tax & compliance specialists.' },
                { title: 'Affordable Pricing', desc: 'No hidden charges, only transparent pricing.' },
                { title: 'End-to-End Support', desc: 'From initial application to renewal reminders, we\'ve got you covered.' }
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

export default NGORegistration;
