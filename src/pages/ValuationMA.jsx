import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, TrendingUp, Landmark, ShieldCheck, FileText, BarChart3, LineChart, Search, Briefcase, Factory, Handshake, Users, Eye, PieChart, Coins, Calculator, Laptop, Zap } from 'lucide-react';

const ValuationMA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Types', id: 'Types' },
    { name: 'Valuation', id: 'Valuation' },
    { name: 'Key Methods', id: 'KeyValuation' },
    { name: 'When Do', id: 'WhenDo' },
    { name: 'How We Help', id: 'HowCalzoneHelps' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: "1. Why is valuation critical in an M&A transaction?", a: "Valuation determines fair pricing, financial feasibility, and strategic benefits of a merger or acquisition." },
    { q: "2. How does a company determine which valuation method to use?", a: "The best valuation method depends on the company’s industry, financial health, and deal objectives. Calzone helps identify the right approach." },
    { q: "3. What factors affect M&A valuation?", a: "Key factors include financial performance, growth potential, market conditions, industry benchmarks, and synergy benefits." },
    { q: "4. How long does a valuation process take?", a: "The timeline varies based on complexity, but Calzone ensures efficient delivery within agreed timelines." },
    { q: "5. What regulatory compliances must be met for M&A valuation?", a: "Valuation must comply with Indian accounting standards (Ind-AS), SEBI regulations, RBI guidelines, and Companies Act, 2013." }
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
          <span className="text-[#DB3269]">Valuation for Mergers & Acquisitions</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Valuation for Mergers & Acquisitions - Expert Insights by Calzone</h1>

        <div className="mb-8">
            <p className={paragraphStyle}>Mergers and Acquisitions (M&A) are powerful strategies that corporations use to expand, gain competitive advantage, eliminate market competition, or diversify their operations. However, M&A transactions are highly complex, requiring extensive due diligence and precise valuation to ensure a fair and strategic deal.</p>
            <p className={paragraphStyle}>At Calzone, we provide expert M&A valuation services, ensuring businesses make data-driven, informed decisions while maximizing deal value.</p>
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
        <div className="space-y-12">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What Are Mergers & Acquisitions?</h2>
            <p className={paragraphStyle}>While often used interchangeably, Mergers and Acquisitions are distinct:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-[#F9F9F9] border-l-4 border-[#DB3269]">
                    <h4 className="font-bold text-[16px] mb-2 uppercase tracking-tight">Merger</h4>
                    <p className="text-[14px] text-gray-600 mb-0">When two or more companies combine to form a new entity, creating synergies and economies of scale.</p>
                </div>
                <div className="p-6 bg-[#F9F9F9] border-l-4 border-[#222222]">
                    <h4 className="font-bold text-[16px] mb-2 uppercase tracking-tight">Acquisition</h4>
                    <p className="text-[14px] text-gray-600 mb-0">When one company acquires another, either through purchasing assets, shares, or absorbing the business operations of the acquired entity.</p>
                </div>
            </div>
            <p className={`${paragraphStyle} mt-6`}>Both require thorough valuation to determine the fair market value of the businesses involved and structure a deal that aligns with strategic goals.</p>
          </section>

          {/* Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Types of Mergers in Business Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                    { bold: 'Conglomerate Merger -', text: 'Companies from completely unrelated industries merge to diversify their businesses and expand market reach.' },
                    { bold: 'Congeneric Merger -', text: 'Companies in similar industries but with different product lines merge to expand their offerings.' },
                    { bold: 'Market Extension Merger -', text: 'Companies in the same industry but different markets merge to increase market reach.' },
                    { bold: 'Horizontal Merger -', text: 'Companies offering similar products/services at the same level in the supply chain merge to reduce competition and increase market share.' },
                    { bold: 'Vertical Merger -', text: 'A supplier merges with its buyer, or vice versa, to control the supply chain and reduce operational costs.' }
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222]">
                        <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                        <span><span className="font-bold">{item.bold}</span> {item.text}</span>
                    </li>
                ))}
            </div>
            <p className={`${paragraphStyle} mt-6 font-bold text-[#DB3269]`}>Need assistance in structuring your M&A deal? Contact Calzone for expert M&A consulting today!</p>
          </section>

          {/* Valuation Crucial */}
          <section id="Valuation" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Why Valuation is Crucial in Mergers & Acquisitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {[
                { title: 'Determines Fair Purchase Price', icon: Coins, text: 'Ensures neither party overpays nor undersells the company.' },
                { title: 'Justifies the Deal to Stakeholders', icon: Users, text: 'Provides transparency and confidence to investors, management, and regulatory bodies.' },
                { title: 'Assesses Financial Viability', icon: Eye, text: 'Helps determine if the M&A transaction will create actual value for the business.' },
                { title: 'Evaluates Synergy Gains', icon: PieChart, text: 'Helps in quantifying the financial benefits of merging operations.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-gray-100 hover:bg-[#F9F9F9] transition-colors">
                  <div className="text-[#DB3269] shrink-0 mt-1"><item.icon size={24} /></div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={`${paragraphStyle} mt-8`}>Calzone ensures compliance with the latest MCA amendments, helping businesses adapt seamlessly.</p>
          </section>

          {/* Key Methods */}
          <section id="KeyValuation" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Key Valuation Methods for Mergers & Acquisitions</h2>
            <p className={paragraphStyle}>At Calzone, we employ globally recognized valuation methodologies to ensure accuracy and compliance.</p>
            <div className="space-y-8 mt-8">
                {[
                    { 
                        title: 'Discounted Cash Flow (DCF) Method', 
                        desc: "Estimates a company's future cash flows and discounts them to present value.",
                        points: ['Discount Rate (WACC) – Measures the cost of capital.', 'Projected Future Cashflows – Forecasted net cash inflows and outflows.', 'Terminal Value – Estimates value beyond the projection period.'],
                        best: 'Companies with stable cash flows and long-term growth potential.'
                    },
                    { 
                        title: 'Comparable Company Analysis (CCA)', 
                        desc: 'Uses financial multiples (e.g., P/E Ratio, EBITDA Multiple) to compare similar companies.',
                        example: 'If the industry P/E ratio is 7x and the company’s EPS is ₹100, the valuation is ₹700 Lakhs (₹100 × 1 Lakh shares × 7x).',
                        best: 'Companies in industries with readily available financial benchmarks.'
                    },
                    { 
                        title: 'Net Asset Valuation (NAV) Method', 
                        desc: 'Evaluates net assets by subtracting liabilities from total assets.',
                        best: 'Asset-heavy businesses such as real estate firms, manufacturing units, and infrastructure companies.'
                    },
                    { 
                        title: 'Dividend Discount Model (DDM)', 
                        desc: "Calculates the company's value based on future dividends and discounting them to present value.",
                        best: 'Dividend-paying companies with consistent payout history.'
                    },
                    { 
                        title: 'Leveraged Buyout (LBO) Analysis', 
                        desc: 'Used by private equity firms and investors looking to acquire companies through debt financing.',
                        note: 'The investor raises debt to finance the acquisition, intending to sell the company later at a higher valuation.',
                        best: 'High-growth companies targeted by investment firms and private equity players.'
                    }
                ].map((item, i) => (
                    <div key={i} className="p-8 border border-gray-100 bg-white">
                        <h4 className="text-[18px] font-bold text-[#222222] mb-4 flex items-center gap-3">
                            <span className="bg-[#DB3269] text-white w-8 h-8 rounded-full flex items-center justify-center text-[14px]">{i+1}</span>
                            {item.title}
                        </h4>
                        <p className="text-[15px] text-gray-700 mb-4">{item.desc}</p>
                        {item.points && (
                            <ul className="mb-4 space-y-2">
                                {item.points.map((p, j) => (
                                    <li key={j} className="text-[14px] text-gray-500 flex gap-2">
                                        <div className="mt-2 w-1 h-1 bg-[#DB3269] rounded-full shrink-0" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {item.example && (
                            <div className="p-4 bg-gray-50 border border-gray-100 mb-4 italic text-[14px]">
                                <span className="font-bold text-[#222222]">Example:</span> {item.example}
                            </div>
                        )}
                        <p className="text-[14px] font-bold mb-0">Best for: <span className="font-normal text-gray-600">{item.best}</span></p>
                    </div>
                ))}
            </div>
            <p className="mt-8 text-center font-bold text-[16px] text-[#DB3269]">Unsure which valuation method suits your M&A deal? Let Calzone guide you!</p>
          </section>

          {/* When Do You Need */}
          <section id="WhenDo" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>When Do You Need a Business Valuation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mt-6">
                {[
                    { bold: 'Mergers & Acquisitions -', text: 'Buying, selling, or merging businesses.' },
                    { bold: 'Fundraising & Investment -', text: 'Raising capital from investors or banks.' },
                    { bold: 'Corporate Restructuring -', text: 'Business expansion, spin-offs, or divestitures.' },
                    { bold: 'Employee Stock Option Plans (ESOPs) -', text: 'Issuing stock options to employees.' },
                    { bold: 'Liquidation & Insolvency -', text: 'Determining fair value during business closure.' },
                    { bold: 'Intellectual Property Valuation -', text: 'Assessing patents, trademarks, copyrights.' }
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-[24px] text-gray-700">
                        <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                        <span><span className="font-bold text-[#222222]">{item.bold}</span> {item.text}</span>
                    </li>
                ))}
            </div>
            <p className={`${paragraphStyle} mt-8`}>Calzone provides comprehensive valuation reports for every business need.</p>
          </section>

          {/* How We Help */}
          <section id="HowCalzoneHelps" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>How Calzone Helps You with M&A Valuation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Expert Reports', desc: 'In-depth, compliant, and customized financial models.' },
                { title: 'Accurate Pricing', desc: 'Prevent overpayment or undervaluation in deals.' },
                { title: 'Due Diligence', desc: 'Analyzing risks, synergy benefits, and growth potential.' },
                { title: 'Compliance', desc: 'Ensuring adherence to SEBI, RBI, and corporate finance guidelines.' },
                { title: 'Structuring Support', desc: 'Assisting in negotiations, financing, and closing transactions.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#222222] text-white flex flex-col items-center text-center">
                    <Check size={24} className="text-[#DB3269] mb-4" />
                    <h5 className="font-bold text-[14px] uppercase tracking-widest mb-2">{item.title}</h5>
                    <p className="text-[12px] opacity-60 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-10 bg-[#DB3269] text-center text-white">
                <p className="text-[22px] font-extrabold mb-6 tracking-tight">Maximize value in your M&A transaction with Calzone's expert valuation services!</p>
                <button className="bg-white text-[#DB3269] px-10 py-4 font-bold uppercase tracking-widest text-[13px] hover:bg-[#222222] hover:text-white transition-all shadow-xl">Get Started Now</button>
            </div>
          </section>

          {/* FAQs */}
          <section id="FAQs" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8 uppercase tracking-widest`}>Frequently Asked Questions (FAQs)</h2>
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
            <p className="mt-8 font-bold text-[16px] text-center italic">Ready to structure your M&A deal? Contact Calzone today for expert valuation services!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ValuationMA;
