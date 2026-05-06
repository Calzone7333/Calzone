import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Target, TrendingUp, Users, Zap, Briefcase, FileText, Landmark, ShieldCheck, PieChart, Coins, Scale, Search, Handshake, Monitor, BarChart3, Rocket, Settings, Building, FilePieChart, Globe } from 'lucide-react';

const InvestmentPitchDeck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Matters', id: 'Why-Matters' },
    { name: 'What Contains', id: 'What-Contain' },
    { name: 'Process', id: 'Attract-Investors' },
    { name: 'Paperwork', id: 'Paperwork-Necessary' },
    { name: 'How We Help', id: 'Calzone-Helps' },
    { name: 'Timeline', id: 'Building-Process' },
    { name: 'Services', id: 'Services' },
    { name: 'Why Choose', id: 'Why-Choose' },
  ];

  const contentItems = [
    { title: 'Elevator Pitch', desc: "A crisp summary of your startup's vision & mission.", icon: Rocket },
    { title: 'Solution', desc: 'How your business solves a real-world problem.', icon: Settings },
    { title: 'Market Analysis', desc: 'The opportunity and demand for your product/service.', icon: Globe },
    { title: 'USP', desc: 'Unique Selling Proposition - why your business is different.', icon: Target },
    { title: 'Business Model', desc: 'How your startup will generate revenue.', icon: Building },
    { title: 'GTM Strategy', desc: 'Go-To-Market roadmap for acquiring customers.', icon: TrendingUp },
    { title: 'Current Traction', desc: 'Metrics that validate your business progress.', icon: BarChart3 },
    { title: 'Founding Team', desc: 'Experience & expertise of your leadership team.', icon: Users },
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
          <span className="text-[#DB3269]">Investment Pitch Deck</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Investment Pitch Deck</h1>

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
              An <span className="font-bold">investment pitch deck</span> is a presentation used by startups to raise capital from investors. It typically includes <span className="font-bold">10-15 slides</span> outlining the company's problem, solution, market opportunity, team, traction, financials, and funding needs.
            </p>
            <p className={paragraphStyle}>
              At <span className="font-bold">Calzone,</span> we help startups craft compelling and investor-ready pitch decks that stand out. Whether you're pitching to angel investors or venture capitalists, our expertly designed pitch decks ensure your business gets the attention it deserves.
            </p>
          </section>

          {/* Why Matters */}
          <section id="Why-Matters" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why an Investor Pitch Deck Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Convince Investors', desc: 'A well-structured business pitch allows startups to showcase potential to banks, private equity, and VCs. Calzone ensures increased confidence and clarity.' },
                { title: 'Equity Funding', desc: "If you're a technologist struggling to articulate business vision, we craft investor decks tailored for funding rounds and marketing strategies." },
                { title: 'Business Roadmap', desc: 'Your pitch deck serves as an internal guide, setting benchmarks and tracking progress over time. We align it with your long-term goals.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 border border-gray-100 flex flex-col gap-3">
                  <h4 className="font-bold text-[16px] text-[#222222] uppercase tracking-tight border-b-2 border-[#DB3269] pb-2 w-fit">{item.title}</h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Contains */}
          <section id="What-Contain" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What Does a Business Pitch Contain?</h2>
            <p className={paragraphStyle}>Raising funds is crucial for startups to grow, innovate, and scale operations. Here's why startup fundraising through <span className="font-bold text-[#DB3269]">Calzone</span> is a game-changer:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {contentItems.map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 flex flex-col items-center text-center group hover:bg-[#222222] transition-all duration-300">
                  <item.icon className="text-[#DB3269] mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="font-bold text-[14px] text-[#222222] group-hover:text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 group-hover:text-gray-400 mb-0 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-[#DB3269]">At Calzone, we craft pitch decks that are clear, concise, and visually appealing to captivate investors.</p>
          </section>

          {/* Attract Investors / Process */}
          <section id="Attract-Investors" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Attract Investors, Secure Funding & Scale Your Startup</h2>
            <p className={paragraphStyle}>With <span className="font-bold text-[#DB3269]">Calzone,</span> we follow a strategic process to build your <span className="font-bold">investment pitch deck:</span></p>
            <div className="space-y-4 mt-8">
              {[
                { title: 'Define Your Business & Model', desc: "Clearly articulate your company's purpose & revenue generation strategy." },
                { title: 'Identify Your Market Size & Target Audience', desc: 'Showcase growth potential and revenue opportunities.' },
                { title: 'Present Your Team\'s Expertise', desc: 'Highlight the strength of your leadership team and their experience.' },
                { title: 'Showcase Traction & Milestones', desc: 'Demonstrate key partnerships, revenue growth, or user acquisition.' },
                { title: 'Project Financial Performance & Funding Needs', desc: 'Provide realistic financial projections and funding utilization plans.' },
                { title: 'Craft a Compelling Narrative & Design', desc: 'Structure your pitch with a clear flow using charts, graphs, and visuals.' },
                { title: 'Seek Expert Guidance & Feedback', desc: 'Work with our specialists to refine and perfect your presentation.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-50 bg-[#F9F9F9]">
                  <div className="font-bold text-[#DB3269] text-[18px]">0{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222]">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Paperwork */}
          <section id="Paperwork-Necessary" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>What Paperwork Is Necessary for an Investor Pitch Deck?</h2>
            <p className={paragraphStyle}>After securing funds, startups must fulfill legal and regulatory obligations. <span className="font-bold">Calzone</span> ensures compliance in the following areas:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Business Plan', desc: 'A structured document outlining goals & strategies.', icon: Building },
                { title: 'Technical Documents', desc: 'Relevant reports for tech-based or medical ventures.', icon: Settings },
                { title: 'Financial Forecasts', desc: 'Detailed projections of revenue & expenses.', icon: BarChart3 },
                { title: 'Operational Costs', desc: 'Plans for hiring, R&D, marketing, and payroll.', icon: FileText },
                { title: 'Market Research Data', desc: 'Industry trends, competition analysis & customer insights.', icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border border-gray-100 bg-white">
                  <div className="w-12 h-12 bg-[#DB3269] text-white flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#DB3269]">Calzone helps compile and organize these documents to ensure a seamless investor pitch.</p>
          </section>

          {/* How We Help */}
          <section id="Calzone-Helps" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-6`}>How Calzone Helps with Business Pitch Preparation</h2>
            <p className={paragraphStyle}>We create <span className="font-bold italic">investor-ready</span> business pitches in just <span className="font-bold text-[#DB3269]">15-20 days:</span></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { step: 'Step 1', title: 'Understanding Your Business', desc: 'Our financial experts work closely with you to analyze your business, funding needs, and growth strategy.' },
                { step: 'Step 2', title: 'Crafting Your Pitch Deck', desc: 'Using insights from your business, we develop a professional and compelling investor pitch.' },
                { step: 'Step 3', title: 'Review & Finalization', desc: 'We refine the deck based on your feedback and prepare the final version for investors.' }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 flex flex-col gap-3">
                  <span className="text-[#DB3269] font-bold text-[13px] uppercase tracking-widest">{item.step}</span>
                  <h4 className="font-bold text-[16px] text-[#222222]">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Building Process / Timeline */}
          <section id="Building-Process" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Investment Pitch Deck Building Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100">
              {[
                { phase: 'Phase 1', title: 'Data Collection', days: '5 Days', desc: 'Startups provide business data such as vision, financials, customer acquisition cost, and revenue models.' },
                { phase: 'Phase 2', title: 'Drafting & Design', days: '10 Days', desc: 'A rough draft is created in text format, followed by the full visual pitch deck design.' },
                { phase: 'Phase 3', title: 'Review & Refinements', days: '4 Days', desc: 'Iterations & final adjustments to ensure perfection.' }
              ].map((item, i) => (
                <div key={i} className="p-10 border-r last:border-r-0 border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#222222] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-widest">{item.phase}</span>
                    <span className="text-[#DB3269] font-bold text-[16px]">{item.days}</span>
                  </div>
                  <h4 className="font-bold text-[18px] text-[#222222] mb-3">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section id="Services" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Our Services at Calzone</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Pitch Deck Creation', desc: 'We design professional pitch decks that capture investor attention and clearly communicate your startup\'s value.', icon: Monitor },
                { title: 'Investor Pitch Coaching', desc: 'Even with a great pitch deck, delivery matters. We provide coaching to help you confidently present your pitch.', icon: Users },
                { title: 'Investor Connect', desc: 'We introduce you to investors including venture capitalists, angel investors, and private equity firms.', icon: Handshake }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-[#F9F9F9] flex flex-col items-center text-center gap-4">
                  <item.icon className="text-[#DB3269]" size={40} strokeWidth={1.5} />
                  <h4 className="font-bold text-[18px] text-[#222222]">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section id="Why-Choose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for Your Investment Pitch Deck?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Unmatched Expertise - Positioning your startup for funding success.',
                'Tailored Pitch Decks - Customizing for specific industry and investor type.',
                'Proven Track Record - Helping multiple startups successfully raise capital.',
                'Investor Coaching & Support - Preparing you to deliver a powerful pitch.',
                'End-to-End Fundraising Support - From business plans to financial modeling.'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222] list-none p-4 bg-gray-50 border border-gray-100">
                  <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                  <span className="font-bold">{item.split(' - ')[0]}</span> - {item.split(' - ')[1]}
                </li>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-[20px] font-bold text-[#222222] tracking-tight italic mb-4">Ready to Secure Funding? Let Calzone Build Your Pitch Deck!</p>
              <p className="text-[18px] font-bold text-[#DB3269] uppercase tracking-widest">With Calzone, you don't just get a pitch deck—you get a strategic partner in your startup’s success</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPitchDeck;
