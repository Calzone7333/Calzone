import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, Landmark, ShieldCheck, FileText, BarChart3, TrendingUp, Calculator, Wallet, Zap, Coins, Search, Briefcase, Factory, ShoppingCart, Laptop, IndianRupee } from 'lucide-react';

const BusinessLoans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Types', id: 'Types' },
    { name: 'Govt Schemes', id: 'GovernmentBusinessLoan' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Grants', id: 'BusinessGrants' },
    { name: 'Grant Benefits', id: 'BenefitsofGrants' },
    { name: 'How We Help', id: 'HowCalzoneHelp' },
  ];

  const loanTypes = [
    { title: 'Cash Credit Loan', best: 'Short-term working capital.', points: ['Flexible loan facility with predetermined limit.', 'Interest charged only on used amount.', 'Requires collateral like inventory or receivables.'], icon: Wallet },
    { title: 'Loan Against Property (LAP)', best: 'High-value funding with low interest rates.', points: ['Secured loan where property is mortgaged.', 'Loan amount based on property valuation (up to 60-70%).', 'Lower interest rates compared to unsecured loans.'], icon: Landmark },
    { title: 'Machinery Loan', best: 'Purchasing machinery or upgrading equipment.', points: ['Financing for new or used machinery.', '80-90% financing available on machinery cost.'], icon: Factory },
    { title: 'Working Capital Loan', best: 'Temporary cash flow issues.', points: ['Short-term loans for operational expenses (salaries, rent).', 'Bridges gap between receivables and payables.'], icon: Calculator },
    { title: 'Term Loan', best: 'Expansion, purchasing land, or high-value investments.', points: ['Short-term (1-5 years) or long-term (up to 20 years).', 'Secured or unsecured depending on creditworthiness.'], icon: BarChart3 },
    { title: 'Overdraft Facility', best: 'Managing short-term cash crunches.', points: ['Withdraw more than available balance.', 'Interest charged only on overdrawn amount.'], icon: Zap },
    { title: 'Invoice Financing', best: 'Immediate cash against unpaid invoices.', points: ['Advances on outstanding invoices.', 'Maintain cash flow without waiting for payments.'], icon: FileText },
    { title: 'Business Credit Line', best: 'Startups & SMEs requiring flexible credit.', points: ['Works like a credit card with pre-approved limit.', 'Interest paid only on used amount.'], icon: Coins },
  ];

  const govtSchemes = [
    { name: 'MUDRA Loan', amount: '10 Lakh', type: 'Loan/Working Capital' },
    { name: 'UYEGP', amount: '15 Lakh', type: 'Loan' },
    { name: 'PMEGP (Manufacturing)', amount: '50 Lakh', type: 'Loan' },
    { name: 'PMEGP (Services)', amount: '20 Lakh', type: 'Loan' },
    { name: 'PMFME', amount: '1 Crore', type: 'Loan' },
    { name: 'AABCS', amount: '2 Crore', type: 'Loan' },
    { name: 'Capital Subsidy', amount: '1.5 Crore', type: 'Loan' },
    { name: 'NAIF', amount: '2 Crore', type: 'Loan' },
    { name: 'NEEDS', amount: '5 Crore', type: 'Loan' },
    { name: 'CGTMSE', amount: '5 Crore', type: 'Loan' },
    { name: 'AHIDF', amount: '50 Crore', type: 'Loan' },
    { name: 'Startup India Fund Scheme', amount: '50 Lakh', type: 'Loan' },
    { name: 'Financial Assistance for SC, ST & OBC', amount: '10 Lakh - 15 Crore', type: 'Loan' },
  ];

  const grants = [
    { name: 'Seed Fund', amount: '20 Lakh', type: 'Grant' },
    { name: 'Global Impact Fund', amount: '1.64 Crore', type: 'Grant' },
    { name: 'MSME Design', amount: '40 Lakh', type: 'Grant' },
    { name: 'RKVY RAFTAAR', amount: '25 Lakh', type: 'Grant' },
    { name: 'TIDE', amount: '7 Lakh', type: 'Grant' },
    { name: 'Nidhi Prayas', amount: '10 Lakh', type: 'Grant' },
    { name: 'Product Development Grant', amount: '5 Lakh', type: 'Grant' },
    { name: 'Grant for Textile', amount: '50 Lakh', type: 'Grant' },
    { name: 'Young Innovators Grant', amount: '20 Lakh', type: 'Grant' },
    { name: 'Grant for Defense and Aerospace', amount: '1.5 Crore', type: 'Grant' },
    { name: 'Pitch-Pilot-Program (3P)', amount: '20 Lakh', type: 'Grant' },
    { name: 'NGO Growth Fund', amount: '60 Lakh', type: 'Grant' },
    { name: 'Pathfinder Grant', amount: '12 Lakh', type: 'Grant' },
    { name: 'Innovation Grant', amount: '2 Lakh - 30 Lakh', type: 'Grant' },
    { name: 'Samastha Wash Tech', amount: '20 Lakh', type: 'Grant' },
    { name: 'Animal Barn Challenge', amount: '15 Lakh', type: 'Grant' },
    { name: 'Womenpreneur Initiative', amount: '3 Crore', type: 'Grant' },
    { name: 'Business for Impact Grant', amount: '1.5 Crore', type: 'Grant' },
    { name: 'AI Challenge', amount: '5 Lakh', type: 'Grant' },
    { name: 'Health Tech Scheme', amount: '1 Crore', type: 'Grant' },
    { name: 'MSW-2024', amount: '15 Lakh', type: 'Grant' },
    { name: 'Inspire Her', amount: '16 Lakh', type: 'Grant' },
    { name: 'DLI Scheme', amount: '30 Crore', type: 'Grant' },
    { name: 'Agri-Preneur Cohort', amount: '5 Lakh', type: 'Grant' },
    { name: 'Grant for NGO', amount: '5 Crore', type: 'Grant' },
    { name: 'GIC', amount: '8 Lakh', type: 'Grant' },
    { name: 'Grant for Automate', amount: '11 Lakh', type: 'Grant' },
    { name: 'Agri-Business Grant', amount: '1 Crore', type: 'Grant' },
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
          <span className="text-[#DB3269]">Business Loans</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Business Loans</h1>

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
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Overview</h2>
            <p className={paragraphStyle}>Business loans are financial products that allow companies to borrow money from banks, NBFCs, or government-backed schemes to finance their operations.</p>
            <p className={paragraphStyle}>At Calzone, we facilitate seamless access to various business funding options, ensuring that your business has the capital it needs to thrive and grow.</p>
          </section>

          {/* Types of Business Loans */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Types of Business Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {loanTypes.map((loan, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-[#F9F9F9] hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-[#DB3269] mb-4"><loan.icon size={32} strokeWidth={1.5} /></div>
                  <h4 className="font-bold text-[18px] text-[#222222] mb-2 uppercase tracking-tight">{loan.title}</h4>
                  <p className="text-[13px] text-[#DB3269] font-bold mb-4 uppercase tracking-wider">Best For: <span className="text-gray-600 lowercase capitalize">{loan.best}</span></p>
                  <ul className="space-y-2">
                    {loan.points.map((p, j) => (
                      <li key={j} className="text-[14px] text-gray-500 leading-relaxed flex gap-2">
                        <div className="mt-2 w-1 h-1 bg-[#DB3269] rounded-full shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Government Business Loan Schemes */}
          <section id="GovernmentBusinessLoan" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Government Business Loan Schemes in India</h2>
            <p className={paragraphStyle}>The Government of India offers various business loan schemes to support MSMEs, startups, and large-scale businesses. Calzone helps businesses apply for and secure government-backed loans with ease.</p>
            
            <div className="mt-8 overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#222222] text-white">
                  <tr>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700 w-16 text-center">S.No</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Scheme Name</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Funding Up to</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Funding Type</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {govtSchemes.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 border-r border-gray-100 text-center font-bold text-gray-400">{i + 1}</td>
                      <td className="p-4 border-r border-gray-100 font-bold text-[#222222]">{s.name}</td>
                      <td className="p-4 border-r border-gray-100 font-bold text-[#DB3269]">₹ {s.amount}</td>
                      <td className="p-4 text-gray-600">{s.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Benefits of Govt Loans */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-6`}>Benefits of Government Business Loan Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Low Interest Rates', desc: 'Significantly lower compared to private loans.' },
                { title: 'Collateral-Free Options', desc: 'Many schemes do not require security or assets.' },
                { title: 'Subsidized Loans', desc: 'Partial grants and subsidies are available for eligible entities.' },
                { title: 'Tailored for MSMEs & Startups', desc: 'Special provisions to support new and small businesses.' }
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
          </section>

          {/* Business Grants & Subsidies */}
          <section id="BusinessGrants" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Business Grants & Subsidies in India</h2>
            <p className={paragraphStyle}>Unlike loans, grants & subsidies do not require repayment. These funds are provided by the government, NGOs, and corporate programs to encourage innovation and business growth. Calzone helps businesses identify and apply for grants relevant to their industry.</p>
            
            <div className="mt-8 overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#222222] text-white">
                  <tr>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700 w-16 text-center">S.No</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Scheme Name</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest border-r border-gray-700">Funding Up to</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Funding Type</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {grants.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 border-r border-gray-100 text-center font-bold text-gray-400">{i + 1}</td>
                      <td className="p-4 border-r border-gray-100 font-bold text-[#222222]">{s.name}</td>
                      <td className="p-4 border-r border-gray-100 font-bold text-[#DB3269]">₹ {s.amount}</td>
                      <td className="p-4 text-gray-600">{s.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Benefits of Grants */}
          <section id="BenefitsofGrants" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-6`}>Benefits of Grants & Subsidies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { bold: 'No Repayment Required -', text: "Unlike loans, grants don't need to be repaid." },
                { bold: 'Boosts Innovation & Research -', text: 'Encourages R&D in various industries.' },
                { bold: 'Women & SC/ST Support -', text: 'Many grants focus on supporting marginalized communities.' },
                { bold: 'Industry-Specific -', text: 'Available for textile, tech, agriculture, healthcare, and more.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222] list-none">
                  <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                  <span><span className="font-bold">{item.bold}</span> {item.text}</span>
                </li>
              ))}
            </div>
          </section>

          {/* How Calzone Help */}
          <section id="HowCalzoneHelp" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-6`}>How Calzone Can Help You Get Business Funding?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Loan Application Support', desc: 'We assist in applying for bank & government loans.' },
                { title: 'Grant & Subsidy Assistance', desc: 'Helping you secure non-repayable funds.' },
                { title: 'Financial Planning', desc: 'Expert guidance in choosing the right funding options.' },
                { title: 'Document Preparation', desc: 'Ensuring all paperwork is in place for approvals.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-[#222222] text-white">
                  <Check className="text-[#DB3269] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-[16px] mb-1">{item.title}</h4>
                    <p className="text-[14px] opacity-70 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-10 border-2 border-dashed border-gray-200 text-center">
              <p className="text-[20px] font-bold text-[#222222] mb-2 tracking-tight italic">Contact Calzone today to explore the best financing options for your business!</p>
              <p className="text-[18px] font-bold text-[#DB3269] uppercase tracking-widest">Let's Fuel Your Business Growth with the Right Funding!</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoans;
