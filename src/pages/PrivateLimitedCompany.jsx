import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus } from 'lucide-react';

const PrivateLimitedCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Eligibility', id: 'EligibilityRequirements' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Post-Incorporation', id: 'PostIncorporation' },
    { name: 'Why Register', id: 'WhyRegister' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'FAQ\'s', id: 'FAQS' },
  ];

  const faqs = [
    {
      question: "1. Can a foreign national become a Director in a Private Limited Company in India?",
      answer: "Yes. A foreign national can be appointed as a Director in an Indian Private Limited Company, provided at least one Director is an Indian resident, the foreign director obtains a DIN, and passport/address proof are notarized & apostilled."
    },
    {
      question: "2. How much does it cost to register a Private Limited Company in India?",
      answer: "The cost varies based on authorized share capital, number of directors/shareholders, professional/govt fees, and additional services like GST or Trademark registration."
    },
    {
      question: "3. Can a Private Limited Company be converted into a Public Limited Company?",
      answer: "Yes, by increasing shareholders to 7, removing transfer restrictions, filing with MCA, and passing a special resolution in a general meeting."
    },
    {
      question: "4. Can a Private Limited Company be converted into an LLP?",
      answer: "Yes, if all shareholders agree, there are no outstanding debts, and an LLP agreement is filed with the MCA."
    },
    {
      question: "5. Is it mandatory to have a physical office for company registration?",
      answer: "Yes, a registered office address is mandatory. It can be residential or commercial, as long as you have an NOC from the owner."
    },
    {
      question: "6. Can a Private Limited Company issue shares to the public?",
      answer: "No. A Pvt Ltd company cannot issue shares to the public or be listed on a stock exchange. It must convert to a Public Limited Company first."
    },
    {
      question: "7. What are the annual compliance requirements?",
      answer: "Filing of Annual Returns (MGT-7), Financial Statements (AOC-4), conducting an AGM within 6 months of year-end, and regular tax filings."
    },
    {
      question: "8. What is the difference between Authorized Capital & Paid-up Capital?",
      answer: "Authorized Capital is the maximum share capital a company is legally allowed to issue. Paid-up Capital is the actual amount paid by shareholders."
    }
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
          <span className="text-[#DB3269]">Private Limited Company</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-4`}>
          Private Limited Company <br /> Registration in India
        </h1>
        
        {/* Intro */}
        <div className="mb-10 max-w-4xl">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business is an exciting journey, but choosing the right structure is crucial for long-term success. A Private Limited Company (Pvt Ltd) is one of the most preferred business structures in India due to its legal security, limited liability, ease of expansion, and credibility in the market.
          </p>
          <p className={paragraphStyle}>
            Whether you're an entrepreneur, a startup founder, or an established business looking to incorporate, understanding the process, benefits, and compliance requirements is essential.
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
        <div className="space-y-16">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>What is a Private Limited Company?</h2>
            <p className={paragraphStyle}>
              A Private Limited Company is a legally recognized business entity under the Companies Act, 2013, where the liability of shareholders is limited to their shareholding. It operates as a separate legal entity, ensuring business continuity regardless of ownership changes.
            </p>
            <div className="mt-8">
              <p className="font-bold text-[#222222] text-[18px] mb-4 underline decoration-[#DB3269] underline-offset-8 decoration-2">Key Features:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Limited Liability', desc: 'Personal assets of shareholders are protected.' },
                  { title: 'Separate Legal Entity', desc: 'Operates independently from its owners.' },
                  { title: 'Perpetual Succession', desc: 'Business continues even if ownership changes.' },
                  { title: 'Easy Fundraising', desc: 'Eligible for bank loans, VCs, and angel investments.' },
                  { title: 'Better Credibility', desc: 'Recognized as a trustworthy entity in India.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-[#F9F9F9]">
                    <div className="mt-1 text-[#DB3269]"><Check size={18} /></div>
                    <div>
                      <p className={subHeadingStyle}>{feature.title}</p>
                      <p className={`${paragraphStyle} text-[14px] mb-0`}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="EligibilityRequirements" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility & Requirements</h2>
            <div className="bg-[#222222] text-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#DB3269]" />
                    <span>Minimum 2 Directors (1 resident Indian)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#DB3269]" />
                    <span>Minimum 2 Shareholders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#DB3269]" />
                    <span>Registered Office Address</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#DB3269]" />
                    <span>Authorized Share Capital defined</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#DB3269]" />
                    <span>Compliance with Companies Act, 2013</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="border border-gray-100 p-6">
                <h4 className="font-bold text-[#222222] mb-4 border-b border-[#DB3269] pb-2">For Directors & Shareholders</h4>
                <ul className="list-disc pl-5 text-[14px] text-[#585858] space-y-2">
                  <li>PAN Card & Aadhaar Card</li>
                  <li>Identity Proof (Voter ID/DL/Passport)</li>
                  <li>Residential Proof (Bank Statement/Utility Bill)</li>
                  <li>Passport-sized photos</li>
                </ul>
              </div>
              <div className="border border-gray-100 p-6">
                <h4 className="font-bold text-[#222222] mb-4 border-b border-[#DB3269] pb-2">For Registered Office</h4>
                <ul className="list-disc pl-5 text-[14px] text-[#585858] space-y-2">
                  <li>Utility Bill (Electricity/Water)</li>
                  <li>NOC from property owner</li>
                  <li>Rent Agreement or Property Docs</li>
                </ul>
              </div>
              <div className="border border-gray-100 p-6">
                <h4 className="font-bold text-[#222222] mb-4 border-b border-[#DB3269] pb-2">For Foreign Nationals</h4>
                <ul className="list-disc pl-5 text-[14px] text-[#585858] space-y-2">
                  <li>Passport (Apostilled)</li>
                  <li>Foreign Bank Statement</li>
                  <li>Business Visa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Registration Process</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Obtain DSC', desc: 'All directors must have Digital Signature Certificates for electronic filing.' },
                { step: 2, title: 'Apply for DIN', desc: 'Obtain unique Director Identification Numbers through the MCA portal.' },
                { step: 3, title: 'Reserve Company Name', desc: 'Apply through RUN service; must be unique and comply with guidelines.' },
                { step: 4, title: 'Draft MOA & AOA', desc: 'Define objectives (MOA) and internal rules (AOA) electronically.' },
                { step: 5, title: 'Submit Incorporation Forms', desc: 'SPICe+ form for incorporation, PAN, TAN, and bank account opening.' },
                { step: 6, title: 'Certificate of Incorporation', desc: 'RoC issues COI with a Corporate Identification Number (CIN).' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F9F9F9] group-hover:bg-[#DB3269] group-hover:text-white transition-colors flex items-center justify-center font-sans font-bold text-[18px]">
                    0{item.step}
                  </div>
                  <div>
                    <h4 className={subHeadingStyle}>{item.title}</h4>
                    <p className={`${paragraphStyle} mb-0`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Post-Incorporation */}
          <section id="PostIncorporation" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Post-Incorporation Compliance</h2>
            <div className="bg-[#F9F9F9] p-8 border-l-4 border-[#DB3269]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  'Open Corporate Bank Account',
                  'Apply for PAN & TAN',
                  'GST Registration (if turnover > threshold)',
                  'Professional Tax Registration',
                  'Annual ROC Filings',
                  'Accounting & Tax Filings'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#585858] font-medium">
                    <Check size={16} className="text-[#DB3269]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why Register */}
          <section id="WhyRegister" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register as a Private Limited Company?</h2>
            <div className="space-y-4">
              {[
                'Attract Investors & Secure Funding',
                'Business Continuity & Growth',
                'Legal Protection for personal assets',
                'Tax Benefits & Deductions',
                'Brand Credibility & Trust'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 hover:border-[#DB3269] transition-colors">
                  <Check className="text-[#DB3269]" size={20} />
                  <span className="font-bold text-[#222222]">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'End-to-End Assistance', desc: 'From name approval to post-registration compliance.' },
                { title: 'Expert Guidance', desc: 'Legal, tax, and compliance advisory.' },
                { title: 'Quick & Hassle-Free', desc: 'Smooth filing with the MCA.' },
                { title: 'Transparent Pricing', desc: 'No hidden costs, ever.' }
              ].map((item, i) => (
                <div key={i}>
                  <p className={subHeadingStyle}>{item.title}</p>
                  <p className={paragraphStyle}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ's */}
          <section id="FAQS" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>FAQ'S</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-[#222222] hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-[#585858] border-t border-gray-100 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivateLimitedCompany;
