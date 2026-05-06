import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, FileText, BarChart3, TrendingUp, Calculator, ShieldCheck, Search, Landmark, PieChart, Clock, AlertCircle, HelpCircle } from 'lucide-react';

const BookkeepingAccounting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Types', id: 'Types' },
    { name: 'Why Hire', id: 'WhyHire' },
    { name: 'Accounting', id: 'Accounting' },
    { name: 'Why Accountant', id: 'WhyHireAccountant' },
    { name: 'Comparison', id: 'BookkeepingAccounting' },
    { name: 'When', id: 'When' },
    { name: 'How We Help', id: 'How' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: 'When should I hire a bookkeeper?', a: 'As soon as your business starts generating financial transactions to keep records organized.' },
    { q: 'How often should financial records be updated?', a: 'Daily or weekly for bookkeeping; Monthly or quarterly for accounting reports.' },
    { q: 'What are the penalties for not maintaining financial records?', a: 'Businesses failing to maintain accounts may face legal action, penalties, or tax non-compliance issues.' },
    { q: 'Does Calzone offer both bookkeeping and accounting services?', a: 'Yes! Calzone provides complete financial management solutions, from bookkeeping to tax compliance.' },
    { q: 'How can I get started with Calzone\'s services?', a: 'Simply contact us, and our experts will set up your bookkeeping & accounting system. Ready to simplify your business finances? Contact Calzone today!' }
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
          <span className="text-[#DB3269]">Bookkeeping & Accounting</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Bookkeeping & Accounting</h1>

        {/* Hero Section */}
        <div className="mb-12">
          <h2 className={`${subHeadingStyle} mb-4 text-[#DB3269]`}>Why Bookkeeping & Accounting Matter for Your Business?</h2>
          <p className={paragraphStyle}>
            Every business is started with the goal of growth, profitability, and sustainability. But how do you measure financial success, identify unnecessary expenses, and ensure long-term stability?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-6 bg-gray-50 border-l-4 border-[#DB3269]">
              <p className="text-[14px] leading-relaxed text-gray-600 mb-0">
                <span className="font-bold text-[#222222]">Bookkeeping</span> helps businesses record daily financial transactions, providing a solid foundation for financial management.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-[#222222]">
              <p className="text-[14px] leading-relaxed text-gray-600 mb-0">
                <span className="font-bold text-[#222222]">Accounting</span> organizes and analyzes this data, helping businesses track profitability, manage cash flow, and make informed decisions.
              </p>
            </div>
          </div>
          <p className={paragraphStyle}>
            Calzone provides expert bookkeeping and accounting solutions, ensuring that your business stays financially organized, compliant, and growth-ready.
          </p>
        </div>

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
          {/* What is Bookkeeping */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is Bookkeeping?</h2>
            <p className={paragraphStyle}>
              Bookkeeping is the systematic recording of financial transactions, ensuring that all business operations are accurately tracked. It is a subset of accounting that helps businesses maintain financial transparency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h4 className="font-bold text-[16px] text-[#222222] flex items-center gap-2">
                  <FileText className="text-[#DB3269]" size={20} />
                  Key Functions
                </h4>
                <ul className="space-y-3">
                  {['Recording day-to-day financial transactions.', 'Maintaining ledgers, journals, and historical accounts.', 'Providing data for financial statements (BS, PL, Cash Flow).'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-500">
                      <div className="mt-2 w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[16px] text-[#222222] flex items-center gap-2">
                  <TrendingUp className="text-[#DB3269]" size={20} />
                  Importance
                </h4>
                <ul className="space-y-3">
                  {['Track source of financial transactions.', 'Clear picture of growth and performance.', 'Compliance with Companies Act 2013 and Tax laws.', "Calzone's services reduce compliance risks."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-500">
                      <div className="mt-2 w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Types of Bookkeeping */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Types of Bookkeeping Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Single-Entry Bookkeeping', desc: 'Suitable for small businesses with minimal transactions. Only records cash receipts, purchases, and sales. Provides a basic overview of cash flow.' },
                { title: 'Double-Entry Bookkeeping', desc: 'Used by businesses of all sizes for accurate tracking. Records both debit and credit for every transaction. Based on globally accepted duality principle.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-[18px] text-[#222222] mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-[#DB3269]">Calzone helps businesses choose the right bookkeeping system based on their size and operations.</p>
          </section>

          {/* Why Hire a Bookkeeper */}
          <section id="WhyHire" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Hire a Bookkeeper for Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Ensures accurate records and prevents errors.',
                'Tracks profits, losses, and trends.',
                'Mandatory under Companies Act 2013.',
                'Facilitates smooth tax filings.'
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#222222] text-white flex flex-col gap-4 group hover:bg-[#DB3269] transition-all duration-300">
                  <Check size={20} className="text-[#DB3269] group-hover:text-white" />
                  <p className="text-[14px] font-bold mb-0 leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[18px] font-bold italic text-[#222222]">Let Calzone handle your bookkeeping needs while you focus on business growth!</p>
          </section>

          {/* What is Accounting */}
          <section id="Accounting" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is Accounting?</h2>
            <p className={paragraphStyle}>Accounting is the process of organizing, analyzing, and summarizing financial data to help businesses make strategic financial decisions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 border border-gray-100 bg-gray-50">
                <h4 className="font-bold text-[16px] mb-4 flex items-center gap-2">
                  <Calculator className="text-[#DB3269]" size={20} />
                  Key Functions
                </h4>
                <ul className="space-y-3">
                  {['Adjusting entries for unrecorded expenses.', 'Preparing financial statements.', 'Communicating performance to stakeholders.', 'Ensuring tax compliance and planning.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-500">
                      <div className="mt-2 w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-gray-50">
                <h4 className="font-bold text-[16px] mb-4 flex items-center gap-2">
                  <PieChart className="text-[#DB3269]" size={20} />
                  Importance
                </h4>
                <ul className="space-y-3">
                  {['Insights into profitability and cash flow.', 'Data-driven financial decisions.', 'Legal and regulatory compliance.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-500">
                      <div className="mt-2 w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 font-bold text-[#DB3269] text-center">Calzone's expert accounting services help businesses streamline financial reporting, budgeting, and tax planning.</p>
          </section>

          {/* Why Hire Accountant */}
          <section id="WhyHireAccountant" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Hire an Accountant for Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Efficiency', desc: 'Helps you track income and expenses efficiently.' },
                { title: 'Strategy', desc: 'Provides strategic financial guidance for business growth.' },
                { title: 'Compliance', desc: 'Ensures compliance with tax laws and financial regulations.' },
                { title: 'Security', desc: 'Reduces errors and fraud risks.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[#F9F9F9] border-l-4 border-[#DB3269]">
                  <ShieldCheck className="text-[#DB3269] shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#222222] text-center">Calzone's professional accounting team ensures your financial records are accurate and compliant.</p>
          </section>

          {/* Comparison */}
          <section id="BookkeepingAccounting" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Bookkeeping vs. Accounting - What's the Difference?</h2>
            <div className="overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#222222] text-white">
                  <tr>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Feature</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Bookkeeping</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Accounting</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    { f: 'Purpose', b: 'Recording financial transactions', a: 'Analyzing and summarizing financial data' },
                    { f: 'Focus', b: 'Day-to-day transactions', a: 'Performance and decision-making' },
                    { f: 'Process', b: 'Data entry, maintaining ledgers', a: 'Tax planning, financial statements' },
                    { f: 'Outcome', b: 'Organized financial records', a: 'Financial insights and compliance' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 border-r border-gray-100 font-bold text-[#222222]">{row.f}</td>
                      <td className="p-4 border-r border-gray-100 text-gray-600">{row.b}</td>
                      <td className="p-4 text-gray-600">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-[15px] text-center leading-relaxed">Bookkeeping lays the foundation, while accounting helps businesses make financial decisions. <span className="font-bold text-[#DB3269]">Calzone provides both services for seamless financial management!</span></p>
          </section>

          {/* When to Hire */}
          <section id="When" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>When Should You Hire Bookkeeping & Accounting Experts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Startups & Small', desc: 'Keep financial records organized from day one.' },
                { title: 'Growing Businesses', desc: 'Ensure compliance with tax laws and scale smoothly.' },
                { title: 'Mid & Large Enterprises', desc: 'Get strategic financial planning and reporting.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3 p-8 border border-gray-100">
                  <Clock className="text-[#DB3269]" size={24} />
                  <h4 className="font-bold text-[16px] text-[#222222] uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#222222] text-center italic">Calzone offers customized bookkeeping and accounting solutions based on your business needs.</p>
          </section>

          {/* How Calzone Help */}
          <section id="How" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>How Calzone Can Help Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'End-to-End Bookkeeping & Accounting Solutions',
                'Error-Free Financial Reports',
                'Regulatory Compliance & Tax Filing',
                'Affordable & Transparent Pricing'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#222222] text-white group hover:bg-[#DB3269] transition-all duration-300">
                  <Check className="text-[#DB3269] group-hover:text-white" size={20} />
                  <span className="font-bold text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[18px] font-bold text-[#222222]">Need expert bookkeeping & accounting services? Contact Calzone today!</p>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookkeepingAccounting;
