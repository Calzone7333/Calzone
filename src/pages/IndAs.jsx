import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, ShieldCheck, Landmark, FileText, Settings, BarChart3, PieChart, Users, Zap, Search, Target, Briefcase } from 'lucide-react';

const IndAs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Phased Implementation', id: 'PhasedImplementation' },
    { name: 'Applicable', id: 'Applicable' },
    { name: 'Key Considerations', id: 'KeyConsiderations' },
    { name: 'How Calzone Helps', id: 'HowCalzoneHelps' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: "1. Is Ind-AS mandatory for my business?", a: "Ind-AS is mandatory for listed companies, large unlisted companies, NBFCs, and holding/subsidiary entities exceeding specified net worth thresholds." },
    { q: "2. Can a company voluntarily adopt Ind-AS?", a: "Yes, but once adopted, it must be followed for all subsequent financial years." },
    { q: "3. How does Ind-AS differ from traditional Accounting Standards?", a: "Ind-AS aligns with IFRS, ensuring global comparability, transparency, and better financial decision-making." },
    { q: "4. What are the penalties for non-compliance?", a: "Non-compliance may result in regulatory fines, rejection of financial statements, and legal consequences." },
    { q: "5. How can Calzone assist with Ind-AS transition?", a: "Calzone provides end-to-end Ind-AS services, including implementation, training, financial statement preparation, and compliance audits." }
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6 tracking-tight">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">IND-AS</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>IND-AS</h1>
        <p className={`${paragraphStyle} text-gray-500 italic`}>Everything You Need to Know About Ind-AS Compliance with Calzone</p>

        {/* Tabs Navigation */}
        <div className="mb-10 border-b border-gray-100 sticky top-[72px] bg-white z-40 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex items-center gap-6 py-2">
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
            <h2 className={`${subHeadingStyle} mb-4`}>What is Ind-AS?</h2>
            <p className={paragraphStyle}>
              Indian Accounting Standards (Ind-AS) are the Indian adaptation of International Financial Reporting Standards (IFRS), designed to align India's financial reporting framework with global standards.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Enhances transparency and comparability of financial statements.',
                'Mandatory for listed companies and large corporations to ensure international compliance.',
                'Implemented in phases to accommodate various industries and company sizes.'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222]">
                  <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={paragraphStyle}>
              Calzone offers expert Ind-AS compliance services to help businesses transition smoothly and stay compliant.
            </p>
          </section>

          {/* Phased Implementation */}
          <section id="PhasedImplementation" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Phased Implementation of Ind-AS in India</h2>
            
            <div className="space-y-8">
              {/* Companies Roadmap */}
              <div>
                <h3 className="font-bold text-[16px] text-[#DB3269] mb-4 uppercase tracking-wider">1. Ind-AS for Companies</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[14px] text-[#222222]">Phase I (From April 1, 2016)</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                      <li className="text-[14px] leading-[24px] text-gray-600 font-bold">Mandatory for:</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Companies (listed/unlisted) with net worth ≥ ₹500 Crores.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Holding, subsidiary, joint ventures, and associates of these companies.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#222222]">Phase II (From April 1, 2017)</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                      <li className="text-[14px] leading-[24px] text-gray-600 font-bold">Mandatory for:</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• All listed companies not covered in Phase I.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Unlisted companies with net worth between ₹250 - ₹500 Crores.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Holding, subsidiary, joint ventures, and associates of these companies.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 text-[13px] text-gray-500 space-y-1 italic">
                  <p>• Companies meeting the net worth threshold in any accounting year must comply from the immediate next financial year.</p>
                  <p>• SME-listed companies are not required to follow Ind-AS.</p>
                  <p>• Once a company adopts Ind-AS, it must follow it in all subsequent years, even if it no longer meets the criteria.</p>
                </div>
              </div>

              {/* NBFCs Roadmap */}
              <div>
                <h3 className="font-bold text-[16px] text-[#DB3269] mb-4 uppercase tracking-wider">2. Ind-AS for NBFCs, Banks, and Insurance Companies</h3>
                <p className="font-bold text-[14px] text-[#222222] mb-3">Non-Banking Financial Companies (NBFCs)</p>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[14px] text-[#222222]">Phase I (From April 1, 2018)</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                      <li className="text-[14px] leading-[24px] text-gray-600 font-bold">Mandatory for:</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• NBFCs (listed/unlisted) with net worth ≥ ₹500 Crores.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Holding, subsidiary, joint ventures, and associates (not already covered under corporate roadmap).</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#222222]">Phase II (From April 1, 2019)</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                      <li className="text-[14px] leading-[24px] text-gray-600 font-bold">Mandatory for:</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Listed NBFCs or those in the process of listing with net worth &lt; ₹500 Crores.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Unlisted NBFCs with net worth ₹250 - ₹500 Crores.</li>
                      <li className="text-[14px] leading-[24px] text-gray-600">• Holding, subsidiary, joint ventures, and associates (not already covered under corporate roadmap).</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#DB3269]/5 text-[13px] text-[#222222] space-y-1 font-bold">
                  <p>Key Considerations for NBFCs:</p>
                  <p className="font-normal">• NBFCs with net worth &lt; ₹250 Crores are NOT required to apply Ind-AS (even voluntarily).</p>
                  <p className="font-normal">• Ind-AS must be applied to both standalone and consolidated financial statements.</p>
                </div>
              </div>

              {/* Banks & Insurance */}
              <div>
                <p className="font-bold text-[14px] text-[#222222] mb-3">Ind-AS for Banks & Insurance Companies</p>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-100">
                    <p className="font-bold text-[14px] text-[#222222]">Scheduled Commercial Banks (Excluding RRBs):</p>
                    <p className="text-[13px] text-gray-600 mt-1">Initially planned for April 1, 2018, then deferred to April 1, 2019. Further deferred until further notice by the RBI.</p>
                  </div>
                  <div className="p-4 border border-gray-100">
                    <p className="font-bold text-[14px] text-[#222222]">Insurers and Insurance Companies:</p>
                    <p className="text-[13px] text-gray-600 mt-1">Ind-AS implementation postponed indefinitely by IRDAI.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applicable Formats */}
          <section id="Applicable" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Applicable Financial Statement Formats Under Ind-AS</h2>
            <p className={paragraphStyle}>The Ministry of Corporate Affairs (MCA) introduced divisions under Schedule III of the Companies Act, 2013:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Division I', desc: 'Applicable to companies following traditional Accounting Standards.' },
                { title: 'Division II', desc: 'Applicable to companies following Ind-AS.' },
                { title: 'Division III', desc: 'Applicable to NBFCs following Ind-AS.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#222222] text-white">
                  <h4 className="text-[#DB3269] font-bold text-[16px] mb-2 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[13px] opacity-80 mb-0 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className={`${paragraphStyle} mt-6`}>Calzone ensures compliance with the latest MCA amendments, helping businesses adapt seamlessly.</p>
          </section>

          {/* Key Considerations */}
          <section id="KeyConsiderations" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Key Considerations for Ind-AS Compliance</h2>
            <ul className="space-y-3">
              {[
                'Companies governed by other acts (e.g., Electricity Companies, Insurance Companies) are exempt from Schedule III unless no specific format exists.',
                'Entities following Ind-AS must adhere to Schedule III (Division II or III) and MCA guidelines.',
                'Financial statements must follow standardized Ind-AS formats to ensure consistency.'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222]">
                  <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`${paragraphStyle} mt-4`}>Need Ind-AS compliance assistance? Contact Calzone today for expert guidance!</p>
          </section>

          {/* How Calzone Helps */}
          <section id="HowCalzoneHelps" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>How Calzone Helps Businesses with Ind-AS Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Ind-AS Transition & Implementation', points: ['We assess your business structure to determine Ind-AS applicability.', 'Smooth transition process from existing Accounting Standards to Ind-AS.'] },
                { title: 'Ind-AS Financial Statement Preparation', points: ['Preparation of Ind-AS compliant balance sheets, profit & loss statements, and cash flow statements.', 'Ensuring compliance with Schedule III and relevant industry-specific requirements.'] },
                { title: 'Ind-AS Training & Advisory', points: ['Conducting training sessions for finance teams to understand Ind-AS implications.', 'Ongoing advisory support for new Ind-AS amendments and updates.'] },
                { title: 'Ind-AS Audit & Review Assistance', points: ['Prepares businesses for external audits by ensuring accurate Ind-AS financial reporting.', 'Bridges the gap between accounting teams and auditors to streamline the audit process.'] }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-[16px] text-[#222222] mb-3 uppercase tracking-tight">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-[14px] leading-[24px] text-gray-600">
                        <div className="mt-[9px] w-1 h-1 bg-[#DB3269] rounded-full shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={`${paragraphStyle} mt-6`}>Looking for Ind-AS compliance support? Contact Calzone today and get expert assistance!</p>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Why Choose Calzone for Ind-AS Compliance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Expert Guidance', desc: 'Our team of Ind-AS professionals ensures seamless compliance and reporting.' },
                { title: 'Customized Solutions', desc: 'We offer tailored Ind-AS implementation strategies for your business.' },
                { title: 'End-to-End Support', desc: 'From initial assessment to final reporting, we handle everything.' },
                { title: 'MCA & RBI Compliance', desc: 'Stay updated with regulatory changes and avoid penalties.' },
                { title: 'Cost-Effective', desc: 'High-quality compliance solutions at affordable pricing.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#DB3269] text-white flex items-center justify-center font-bold">
                    {i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[13px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={`${paragraphStyle} mt-8 font-bold text-center border-t border-gray-100 pt-8`}>Stay Ind-AS compliant with Calzone - Your trusted accounting partner!</p>
          </section>

          {/* FAQs */}
          <section id="FAQs" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[16px] text-[#222222] tracking-tight">{faq.q}</span>
                    {openFaq === i ? <Minus size={18} className="text-[#DB3269]" /> : <Plus size={18} className="text-[#DB3269]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-[#F9F9F9]"
                      >
                        <div className="p-6 pt-0 text-[15px] leading-[26px] text-[#222222] opacity-80 tracking-tight">
                          {faq.a}
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

export default IndAs;
