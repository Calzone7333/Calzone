import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, Landmark, ShieldCheck, FileText, BarChart3, TrendingUp, Calculator, PieChart, Users, Zap, Briefcase, Target, Scale, Search, Shield, Activity, TrendingDown } from 'lucide-react';

const VirtualCFO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'How Can Help', id: 'HowCanHelp' },
    { name: 'Advantages', id: 'Advantages' },
    { name: 'Key Services', id: 'KeyVirtualCFO' },
    { name: 'Who Benefits', id: 'WhoCanBenefit' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: 'What is a Virtual CFO?', a: 'A Virtual CFO provides financial planning, reporting, tax compliance, and risk management without the need for a full-time in-house CFO.' },
    { q: 'How does a Virtual CFO help small businesses?', a: 'By managing bookkeeping, tax filings, budgeting, cash flow, and financial compliance, allowing business owners to focus on growth.' },
    { q: 'Is a Virtual CFO cost-effective?', a: 'Yes! Hiring a Virtual CFO is significantly more affordable than hiring a full-time CFO, making it ideal for startups and SMEs.' },
    { q: 'How does Calzone ensure financial compliance?', a: 'We ensure 100% compliance with GST, TDS, RoC, Income Tax laws, and other regulatory requirements.' },
    { q: 'Can Virtual CFO services be customized?', a: 'Absolutely! Calzone offers flexible Virtual CFO solutions tailored to your business needs.' }
  ];

  const keyServices = [
    { title: 'Budgeting & Forecasting', icon: BarChart3 },
    { title: 'GST & TDS Compliance', icon: Scale },
    { title: 'Income Tax Return Filing', icon: FileText },
    { title: 'MIS Reporting', icon: Activity },
    { title: 'Bookkeeping & Accounting', icon: Calculator },
    { title: 'Tax Planning & Optimization', icon: Target },
    { title: 'Risk Management', icon: Shield },
    { title: 'Corporate Governance', icon: Briefcase },
    { title: 'Debt Planning', icon: TrendingDown },
    { title: 'Auditing Support', icon: Search },
    { title: 'Break-Even Analysis', icon: PieChart },
    { title: 'Cash Flow Forecasting', icon: Zap },
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
          <span className="text-[#DB3269]">Virtual CFO Services</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-4`}>Virtual CFO Services</h1>
        <p className={`${paragraphStyle} text-[#DB3269] font-bold uppercase tracking-widest text-[13px] mb-10`}>Expert Financial Management with Calzone</p>

        {/* Hero Section */}
        <div className="mb-12">
          <h2 className={`${subHeadingStyle} mb-4`}>Transform Your Business Finances with Virtual CFO Services</h2>
          <p className={paragraphStyle}>
            Managing business finances effectively is crucial for success, yet hiring a full-time Chief Financial Officer (CFO) can be costly, especially for startups and small businesses.
          </p>
          <p className={paragraphStyle}>
            Calzone's Virtual CFO Services offer a cost-effective solution, providing expert financial guidance without the overhead cost of a full-time CFO.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
            {[
              { label: 'Bookkeeping', icon: Calculator },
              { label: 'Budgeting', icon: BarChart3 },
              { label: 'Tax Planning', icon: Target },
              { label: 'Cash Flow', icon: Zap },
              { label: 'Reporting', icon: Activity }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 border border-gray-100 bg-gray-50 group hover:bg-[#DB3269] transition-colors duration-300">
                <item.icon className="text-[#DB3269] group-hover:text-white" size={24} />
                <span className="text-[12px] font-bold group-hover:text-white">{item.label}</span>
              </div>
            ))}
          </div>
          <p className={`${paragraphStyle} font-bold text-center`}>With Calzone's expert Virtual CFO Services, businesses can focus on growth while we handle financial complexities.</p>
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
          {/* What is a Virtual CFO */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is a Virtual CFO?</h2>
            <p className={paragraphStyle}>
              A Virtual CFO is an outsourced financial expert who provides the same strategic financial management as a traditional CFO but at a fraction of the cost. Unlike an in-house CFO, a Virtual CFO works remotely and offers customized financial solutions tailored to your business needs.
            </p>
          </section>

          {/* Why Choose Virtual CFO */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Virtual CFO Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Cost-Effective', desc: 'Get CFO-level expertise without hiring a full-time executive.' },
                { title: 'Scalability', desc: 'Scale CFO services as your business grows or changes.' },
                { title: 'Expert Guidance', desc: 'Access top financial professionals with diverse experience.' },
                { title: 'Data-Driven', desc: 'Make informed financial choices based on real-time insights.' },
                { title: 'Compliance', desc: 'Ensure adherence to tax laws, GST, RoC, and regulations.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] flex flex-col gap-3">
                  <div className="w-10 h-10 bg-[#DB3269] text-white flex items-center justify-center font-bold">0{i + 1}</div>
                  <h4 className="font-bold text-[16px] text-[#222222] uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#DB3269] text-center">Calzone's Virtual CFO solutions provide businesses with financial intelligence to drive profitability.</p>
          </section>

          {/* How Can Help */}
          <section id="HowCanHelp" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>How a Virtual CFO Can Help Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Strategic Budgeting', items: ['Plan business finances efficiently.', 'Allocate resources effectively.'], icon: BarChart3 },
                { title: 'Growth Planning', items: ['Expert advice for hiring and scaling.', 'Expansion strategy development.'], icon: PieChart },
                { title: 'Cash Flow Management', items: ['Track, analyze, and optimize cash flow.', 'Prevent financial strain.'], icon: Zap },
                { title: 'Tax & Compliance', items: ['Ensure smooth GST, TDS, and IT filings.', 'Identify tax saving opportunities.'], icon: Scale },
                { title: 'Bookkeeping & Accounting', items: ['Manage payroll, ledger, and inventory.', 'Ensure accurate financial records.'], icon: Calculator },
                { title: 'Risk Management', items: ['Minimize financial risks strategically.', 'Ensure compliance with RoC and laws.'], icon: Shield }
              ].map((section, i) => (
                <div key={i} className="flex gap-6 p-6 border-b border-gray-100 group">
                  <div className="text-[#DB3269] group-hover:scale-110 transition-transform shrink-0">
                    <section.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] text-[#222222] mb-2">{section.title}</h4>
                    <ul className="space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-[14px] text-gray-500 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#DB3269] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section id="Advantages" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Advantages of Having a Virtual CFO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Competitive Advantage - Gain expert financial insights to stay ahead.',
                'Focus on Core Operations - Leave financial management to experts.',
                'Maximize Profits & Minimize Risks - Improve decision-making.',
                'Solve Cash Flow Problems - Manage working capital efficiently.',
                'Scale Financial Operations - Adapt as your business grows.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#222222] text-white">
                  <Check className="text-[#DB3269]" size={20} />
                  <span className="font-bold text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold italic">Let Calzone's Virtual CFO services take care of your financial operations!</p>
          </section>

          {/* Key Services Grid */}
          <section id="KeyVirtualCFO" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Key Virtual CFO Services by Calzone</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyServices.map((service, i) => (
                <div key={i} className="p-6 border border-gray-100 flex flex-col items-center gap-3 text-center bg-white hover:border-[#DB3269] transition-colors group">
                  <service.icon className="text-[#DB3269] group-hover:scale-110 transition-transform" size={28} />
                  <span className="font-bold text-[13px] text-[#222222] uppercase tracking-tight">{service.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Who Benefits */}
          <section id="WhoCanBenefit" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Who Can Benefit from Virtual CFO Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Startups & Small', desc: 'Expert advice without the cost of a full-time executive.' },
                { title: 'Growing Companies', desc: 'Optimize financial planning and ensure compliance.' },
                { title: 'E-Commerce Firms', desc: 'Manage finances efficiently for digital transactions.' },
                { title: 'Manufacturing', desc: 'Improve cost management and tax planning.' },
                { title: 'Service Businesses', desc: 'Streamline payroll, tax filings, and bookkeeping.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[16px] text-[#222222] mb-2">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[20px] font-bold text-[#DB3269] uppercase tracking-widest">Want to elevate your business finances? Contact Calzone today!</p>
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
            <p className="mt-12 text-center font-bold text-[#222222]">Want stress-free financial management? <span className="text-[#DB3269] uppercase tracking-widest ml-2 underline underline-offset-4">Contact Calzone today!</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VirtualCFO;
