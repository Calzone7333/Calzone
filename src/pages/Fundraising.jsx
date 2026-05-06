import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Target, TrendingUp, Users, Zap, Briefcase, FileText, Landmark, ShieldCheck, PieChart, Coins, Scale, Search, Handshake, Share2, Award, Archive, CalendarCheck } from 'lucide-react';

const Fundraising = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'How It Works', id: 'How-Works' },
    { name: 'Importance', id: 'Importance' },
    { name: 'Types', id: 'Types' },
    { name: 'Post-Fundraising', id: 'Post-Fundraising' },
    { name: 'Why Choose', id: 'Why-Choose' },
  ];

  const seriesFunding = [
    { round: 'Series A', desc: 'Scaling operations after initial success', progress: 'Early-stage growth', investors: 'Venture capitalists, Angel Investors', range: '₹10-15', valuation: '₹10-15' },
    { round: 'Series B', desc: 'Expansion into new markets', progress: 'Rapid growth & scaling', investors: 'Venture capital firms', range: '₹7-10', valuation: '₹30-60' },
    { round: 'Series C', desc: 'Entering new product lines or geographies', progress: 'Market expansion', investors: 'Private equity, banks, hedge funds', range: '₹26', valuation: '₹100-120' },
    { round: 'Series D & E', desc: 'Later-stage funding before IPO', progress: 'Large-scale expansion', investors: 'Venture capitalists', range: 'Varies', valuation: 'Varies' }
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
          <span className="text-[#DB3269]">Fundraising</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Fundraising</h1>

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
            <p className={paragraphStyle}>
              Preparing your business for funding isn't easy. It demands a detailed review of your company, a professional appraisal, and a strong pitch to earn investors' trust in fundraising for startups. Investors carry out a thorough evaluation of your business before they provide funds. Thus, it's critical to have all financial records and future forecasts ready before pitching.
            </p>
            <p className={paragraphStyle}>
              <span className="font-bold">Calzone</span> offers a full-service solution for this. Our expert team ensures your business is ready for startup fundraising, guiding you through every step to secure the capital you need.
            </p>
          </section>

          {/* How It Works */}
          <section id="How-Works" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>How Startup Fundraising Works with <span className="text-[#DB3269]">Calzone</span></h2>
            <p className={paragraphStyle}>
              <span className="font-bold text-[#DB3269]">Calzone</span> can take your fundraising efforts to new heights. Our comprehensive solutions and expert guidance empower you to navigate the complex world of startup fundraising with confidence. With <span className="font-bold text-[#DB3269]">Calzone,</span> you get legal, financial, and business experts under a single roof.
            </p>
            <p className="font-bold text-[16px] mb-6">Here's how we make it possible:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Pitch Desk Design', desc: "A compelling pitch deck is essential to convey your business's value proposition, market opportunity, and financial projections. Calzone ensures your pitch deck grabs attention and effectively communicates your vision to investors." },
                { title: 'Reviewing the Pitch', desc: "Our experts analyze your pitch for clarity, structure, and engagement. We refine your messaging to increase investor interest and enhance your fundraising success." },
                { title: 'Merchant Banker valuation certificate', desc: "A professionally certified valuation from Calzone helps establish the credibility of your business, ensuring investors see the real worth of your startup." },
                { title: 'CMA Report', desc: "Lenders evaluate financial statements, cash flow, and liabilities before funding. Calzone prepares a precise CMA report to simplify this process and maximize funding potential." },
                { title: 'Detailed Project Report', desc: "We create a professional, in-depth report outlining your project's scope, execution plan, and financial projections to instill confidence in investors." },
                { title: 'Investor Connect', desc: "With an extensive network of angel investors, venture capitalists, and private equity firms, Calzone helps you connect with the right investors for your startup." },
                { title: 'Valuation Report by Registered Valuer', desc: "Calzone provides an independent, expert valuation to help investors understand your startup’s potential and make informed funding decisions." }
              ].map((item, i) => (
                <div key={i} className="p-6 border-l-4 border-[#DB3269] bg-gray-50 flex flex-col gap-2">
                  <h4 className="font-bold text-[16px] text-[#222222]">{item.title}</h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Importance */}
          <section id="Importance" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Importance of Startup Fundraising</h2>
            <p className={paragraphStyle}>Raising funds is crucial for startups to grow, innovate, and scale operations. Here's why startup fundraising through <span className="font-bold text-[#DB3269]">Calzone</span> is a game-changer:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { title: 'Capital for Growth', desc: 'Secure funding to develop products, expand teams, and enter new markets.' },
                { title: 'Validation & Credibility', desc: 'Investors backing your startup adds credibility and market confidence.' },
                { title: 'Attracting Top Talent', desc: 'Fundraising allows you to offer competitive salaries and benefits.' },
                { title: 'R&D & Innovation', desc: 'Invest in cutting-edge technology and stay ahead of competitors.' },
                { title: 'Market Expansion', desc: 'Scale operations and acquire new customers efficiently.' },
                { title: 'Business Development & Partnerships', desc: 'Strengthen strategic collaborations with additional funding.' },
                { title: 'Risk Mitigation', desc: 'Secure financial stability to navigate market fluctuations.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#DB3269]/10 flex items-center justify-center text-[#DB3269]">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-[#222222] text-white">
              <h3 className="text-[18px] font-bold mb-6 flex items-center gap-3">
                <Target className="text-[#DB3269]" />
                Startup Fundraising Checklist
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {[
                  'Define your business plan', 'Build a minimum viable product (MVP)', 'Create a compelling pitch deck', 
                  'Identify potential investors', 'Network and attend startup events', 'Conduct due diligence', 
                  'Determine your valuation', 'Decide on the fundraising route', 'Prepare legal documentation', 
                  'Pitch to investors', 'Negotiate investment terms', 'Complete legal and financial formalities'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-gray-300">
                    <div className="mt-2 w-1.5 h-1.5 bg-[#DB3269] rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[#DB3269] font-bold italic tracking-tight text-center">Missing a few steps? No worries! Calzone will handle it all for you.</p>
            </div>
          </section>

          {/* Types */}
          <section id="Types" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Types of Startup Fundraising</h2>
            <h3 className="text-[16px] font-bold mb-4 mt-8">Series Funding</h3>
            <p className={paragraphStyle}>Startups raise funds in different rounds:</p>
            <div className="overflow-x-auto border border-gray-100 mt-6">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#F9F9F9] border-b border-gray-100">
                  <tr>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Round</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Description</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Progress</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest">Investors</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">₹ Million</th>
                    <th className="p-4 text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">Valuation</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {seriesFunding.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-[#DB3269] whitespace-nowrap">{s.round}</td>
                      <td className="p-4 text-gray-600 min-w-[150px]">{s.desc}</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">{s.progress}</td>
                      <td className="p-4 text-gray-600 min-w-[150px]">{s.investors}</td>
                      <td className="p-4 font-bold text-[#222222]">{s.range}</td>
                      <td className="p-4 font-bold text-[#222222]">{s.valuation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-[16px] mb-4 flex items-center gap-2">
                  <Landmark className="text-[#DB3269]" size={20} />
                  Bank Loans & Other Funding Options
                </h4>
                <ul className="space-y-4">
                  <li><span className="font-bold">SBA Loans</span> - Government-backed loans for small businesses.</li>
                  <li><span className="font-bold">Business Credit Cards</span> - Short-term financing with flexible repayment.</li>
                  <li><span className="font-bold">Short-Term Loans</span> - Quick funding solutions for cash flow needs.</li>
                  <li><span className="font-bold">Friends & Family</span> - Personal investments with informal agreements.</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-[16px] mb-4 flex items-center gap-2">
                  <Users className="text-[#DB3269]" size={20} />
                  Venture Capital & Angel Investors
                </h4>
                <ul className="space-y-4">
                  <li><span className="font-bold">Venture Capital</span> - Large investments from firms focusing on high-growth startups.</li>
                  <li><span className="font-bold">Angel Investors</span> - High-net-worth individuals investing in early-stage startups.</li>
                  <li><span className="font-bold">Calzone Investor Network</span> - We connect you with trusted VCs and angel investors.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Post-Fundraising Compliance */}
          <section id="Post-Fundraising" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Post-Fundraising Compliance with Calzone</h2>
            <p className={paragraphStyle}>After securing funds, startups must fulfill legal and regulatory obligations. <span className="font-bold">Calzone</span> ensures compliance in the following areas:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { title: 'Allotment of Shares', desc: 'Within 60 days of funding.', icon: Share2 },
                { title: 'Share Certificates', desc: 'Confirming shareholder ownership.', icon: Award },
                { title: 'ROC Filings', desc: 'Timely submission of financial records.', icon: Archive },
                { title: 'Regulatory Compliance', desc: 'Adherence to RBI and tax regulations.', icon: CalendarCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F9F9F9] text-center flex flex-col items-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#DB3269] text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-[15px] text-[#222222] mb-2">{item.title}</h4>
                  <p className="text-[13px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section id="Why-Choose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for Startup Fundraising?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Expert Guidance', desc: 'Years of experience in startup fundraising.' },
                { title: 'Extensive Investor Network', desc: 'Connect with top VCs & angels.' },
                { title: 'Strategic Support', desc: 'Pitch decks, business plans, and financial modeling.' },
                { title: 'Valuation & Negotiation', desc: 'Get the best terms for your funding.' },
                { title: 'Resource Optimization', desc: 'Focus on your business, we handle the fundraising.' },
                { title: 'Risk Mitigation', desc: 'Ensure compliance and reduce regulatory risks.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-8 h-1 bg-[#DB3269] mb-2" />
                  <h4 className="font-bold text-[16px] text-[#222222]">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-[20px] font-bold text-[#222222] tracking-tight italic">With Calzone, you don't just raise funds—you build long-term success. Let's take your startup to the next level!</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;
