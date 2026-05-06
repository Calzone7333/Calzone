import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, Landmark, ShieldCheck, FileText, BarChart3, TrendingUp, Calculator, PieChart, Scale, Search, Shield, Activity, FileCheck, Info, HelpCircle } from 'lucide-react';

const CmaReport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Important', id: 'Why' },
    { name: 'Loan Types', id: 'Types' },
    { name: 'Statements', id: 'KeyStatements' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'HowCalzoneHelps' },
    { name: 'Why Us', id: 'WhyChoose' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: 'What is the purpose of a CMA Report?', a: 'A CMA Report helps banks assess a company\'s financial stability, loan repayment capacity, and working capital needs.' },
    { q: 'When is a CMA Report required?', a: 'A CMA report is mandatory for applying for term loans, working capital loans, and large credit facilities from banks.' },
    { q: 'What financial information is included in a CMA Report?', a: 'Income statements, balance sheets, cash flow, financial ratios, and projected performance over the next five years.' },
    { q: 'How does a CMA Report affect my loan approval?', a: 'A well-prepared CMA report improves your loan approval chances by demonstrating your business’s financial strength and repayment ability.' },
    { q: 'How long does it take to prepare a CMA Report?', a: 'With Calzone, we can prepare your CMA report within 3-5 business days, ensuring timely submission for your loan application.' }
  ];

  const loanTypes = [
    { title: 'Term Loan', desc: 'Financing for acquiring fixed assets like land, buildings, machinery, etc.' },
    { title: 'Working Capital Loan', desc: 'Credit facility to manage daily operations and short-term needs.' },
    { title: 'Letter of Credit (LC)', desc: 'Bank-backed guarantee for secure international and domestic trade.' },
    { title: 'Bank Guarantee (BG)', desc: 'Security assurance from a bank for financial obligations.' },
    { title: 'Mortgage Loan', desc: 'Loan backed by real estate assets for expansion and funding.' }
  ];

  const statements = [
    { title: 'Current & Proposed Credit Limits', desc: 'Provides details of existing and proposed loans, credit utilization, and borrowing history.' },
    { title: 'Operating Statement', desc: 'Includes sales, expenses, profit margins, and financial projections for revenue analysis.' },
    { title: 'Balance Sheet Analysis', desc: 'Offers a holistic view of assets, liabilities, and financial health over past and projected years.' },
    { title: 'Comparative Analysis', desc: 'Assessing the working capital cycle and liquidity position of the business.' },
    { title: 'MPBF Calculation', desc: 'Determines maximum borrowing capacity based on financial statements.' },
    { title: 'Fund Flow Statement', desc: 'Tracks cash inflows and outflows to analyze financial liquidity.' },
    { title: 'Ratio Analysis', desc: 'Key financial ratios like debt-equity, profitability, and liquidity for in-depth analysis.' }
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
          <span className="text-[#DB3269]">CMA Report Preparation</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>CMA Report Preparation</h1>

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
        <div className="space-y-16">
          {/* What is a CMA Report */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is a CMA Report?</h2>
            <p className={paragraphStyle}>
              A Credit Monitoring Arrangement (CMA) Report is a crucial financial document that outlines both the historical and projected financial performance of a business. It is primarily prepared for banks and financial institutions during the loan application and approval process.
            </p>
            <p className={paragraphStyle}>
              With Calzone's expert CMA Report preparation services, businesses can increase their chances of loan approval by presenting structured, accurate, and bank-compliant financial reports.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                'Required for Term Loans and Working Capital Loans',
                'Mandatory as per RBI Guidelines for Large Borrowers',
                'Shows Financial Stability & Repayment Capacity',
                'Essential for Securing Business Loans'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border-l-4 border-[#DB3269]">
                  <Check size={18} className="text-[#DB3269]" />
                  <span className="text-[14px] font-bold text-[#222222]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#222222] italic text-center">Let Calzone handle your CMA data preparation, ensuring accuracy and a higher probability of loan approval.</p>
          </section>

          {/* Why Important */}
          <section id="Why" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why is a CMA Report Important?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Loan Approval', desc: 'Banks use CMA reports to assess fund utilization and repayment capacity.' },
                { title: 'RBI Compliance', desc: 'Mandatory for large loans as per RBI regulations.' },
                { title: 'Planning Tool', desc: 'Helps understand projections and working capital needs.' },
                { title: 'Creditworthiness', desc: 'Demonstrates financial strength and stability to lenders.' },
                { title: 'Higher Limits', desc: 'Well-prepared data can help secure higher loan amounts.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] flex flex-col gap-3">
                  <h4 className="font-bold text-[16px] text-[#222222] border-b-2 border-[#DB3269] pb-2 w-fit">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Loan Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Types of Business Loans Requiring a CMA Report</h2>
            <div className="space-y-4">
              {loanTypes.map((loan, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#222222] text-white flex items-center justify-center shrink-0">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] text-[#222222] mb-1">{loan.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{loan.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#DB3269] text-center">Calzone ensures that your CMA Report aligns perfectly with institutional requirements.</p>
          </section>

          {/* Key Statements */}
          <section id="KeyStatements" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Key Statements Included in a CMA Report</h2>
            <p className={paragraphStyle}>A CMA Report consists of detailed financial statements and projections that give lenders a comprehensive view.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
              {statements.map((stmt, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[24px] font-bold text-[#DB3269] opacity-20">0{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-2">{stmt.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{stmt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Required */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Documents Required for CMA Report Preparation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Income Tax Returns (ITR) of business and owner.',
                'Audited Financial Statements of the last two years.',
                'Provisional Financial Statements for ongoing year.',
                'Projected Financial Statements for the next five years.',
                'Cost Sheet detailing direct and indirect expenses.',
                'Business Plan or Assumptions to support projections.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#222222] text-white">
                  <FileText className="text-[#DB3269]" size={20} />
                  <span className="text-[15px] font-bold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-500 font-medium">With Calzone's expert preparation, you ensure a well-documented and compliant financial report.</p>
          </section>

          {/* Process */}
          <section id="HowCalzoneHelps" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>How Calzone Helps You Prepare a CMA Report?</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-100 overflow-hidden">
              {[
                { step: 'Step 1', title: 'Requirements', desc: 'Assess loan needs.' },
                { step: 'Step 2', title: 'Gathering Data', desc: 'Collect statements.' },
                { step: 'Step 3', title: 'Structuring', desc: 'Bank-approved format.' },
                { step: 'Step 4', title: 'Validation', desc: 'Review accuracy.' },
                { step: 'Step 5', title: 'Submission', desc: 'Loan assistance.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border-r last:border-r-0 border-gray-100 hover:bg-[#F9F9F9] transition-colors text-center">
                  <span className="text-[11px] font-bold text-[#DB3269] uppercase tracking-widest">{item.step}</span>
                  <h4 className="font-bold text-[14px] text-[#222222] mt-2 mb-4">{item.title}</h4>
                  <p className="text-[12px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-[#222222]">Need a bank-compliant CMA Report? <span className="text-[#DB3269]">Contact Calzone today!</span></p>
          </section>

          {/* Why Choose Us */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for CMA Report Preparation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Experienced Financial Experts - Specializing in bank loan documentation.',
                '100% Compliance with Banking Norms - Error-free and RBI-compliant reports.',
                'Tailored Reports for Every Business - Custom for startups, MSMEs, and more.',
                'Quick & Hassle-Free Processing - Fast turnaround to meet deadlines.',
                'Dedicated Support - Assistance in submission and approval queries.'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-gray-50 border border-gray-100 items-center">
                  <div className="w-2 h-2 bg-[#DB3269] rounded-full shrink-0" />
                  <p className="text-[15px] mb-0 text-[#222222]">
                    <span className="font-bold">{item.split(' - ')[0]}</span> - {item.split(' - ')[1]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[18px] font-bold uppercase tracking-tighter">Looking for professional CMA report preparation? <span className="text-[#DB3269]">Contact Calzone today!</span></p>
          </section>

          {/* FAQs */}
          <section id="FAQs" className="scroll-mt-32 pb-20">
            <h2 className={`${subHeadingStyle} mb-8`}>Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[16px] text-[#222222]">{i + 1}. {faq.q}</span>
                    {openFaq === i ? <Minus size={18} className="text-[#DB3269]" /> : <Plus size={18} className="text-[#DB3269]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-[14px] text-gray-500 leading-relaxed border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center font-bold text-[#222222]">Need a professionally prepared CMA Report? <span className="text-[#DB3269] uppercase tracking-widest ml-2 underline underline-offset-4">Contact Calzone today!</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CmaReport;
