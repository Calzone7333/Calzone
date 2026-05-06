import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, ShieldCheck, FileText, BarChart3, Scale, Gavel, Coins, Landmark, Zap, Handshake, Users, Eye, PieChart, Calculator, Laptop, AlertCircle, Percent, TrendingDown } from 'lucide-react';

const TaxationMA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Key Tax');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Key Tax', id: 'KeyTaxConsideration' },
    { name: 'Income Tax Act', id: 'IncomeTaxAct' },
    { name: 'Capital Gains', id: 'CapitalGains' },
    { name: 'Tax Relief', id: 'TaxRelief' },
    { name: 'Expenditure', id: 'BusinessExpenditure' },
    { name: 'GST', id: 'GSTImplications' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: "1. How can capital gains tax be avoided in mergers?", a: "If the merger meets conditions under Section 47(vi) & (vii), no capital gains tax is applicable." },
    { q: "2. Can accumulated losses be carried forward after an M&A transaction?", a: "Yes, under Section 72A, accumulated losses and unabsorbed depreciation can be carried forward by the amalgamated company." },
    { q: "3. What are the GST implications for M&A transactions?", a: "The transferor company must file ITC-02 to transfer unutilized Input Tax Credit to the new entity." },
    { q: "4. How is the purchase consideration taxed in an acquisition?", a: "If structured correctly, an acquisition can avoid capital gains tax for both companies involved." },
    { q: "5. Can a foreign company benefit from tax exemptions in cross-border M&As?", a: "Yes, under Section 47(via) & (viab), cross-border mergers can qualify for tax exemptions if certain conditions are met." }
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
          <span className="text-[#DB3269]">Taxation for Mergers & Acquisitions</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-6`}>Taxation for Mergers & Acquisitions</h1>

        <div className="mb-8">
            <p className={paragraphStyle}>Mergers & Acquisitions (M&A) are strategic moves that enable businesses to expand, optimize resources, reduce competition, and enhance profitability. However, one of the most critical and complex aspects of any M&A transaction is taxation. Understanding the tax implications can maximize benefits, reduce liabilities, and ensure compliance with tax laws.</p>
            <p className={paragraphStyle}>At Calzone, we specialize in M&A tax planning and advisory, ensuring that your deal structure is tax-efficient, legally compliant, and financially optimized.</p>
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
          {/* Key Tax Consideration */}
          <section id="KeyTaxConsideration" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Key Tax Consideration in Mergers & Acquisitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                    'Income Tax Implications',
                    'Capital Gains Tax Treatment',
                    'Tax Reliefs on Losses & Depreciation',
                    'Deductions for Business Expenditures',
                    'GST Implications on M&A Transactions',
                    'Transfer of Input Tax Credit (ITC) under GST'
                ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-[14px] leading-[24px] text-gray-700 bg-gray-50 p-4 border border-gray-100">
                        <Check size={18} className="text-[#DB3269] shrink-0" />
                        <span className="font-bold text-[#222222]">{item}</span>
                    </div>
                ))}
            </div>
            <p className={`${paragraphStyle} mt-6 font-bold text-[#DB3269]`}>Need expert tax guidance for your M&A deal? Contact Calzone today!</p>
          </section>

          {/* Income Tax Act */}
          <section id="IncomeTaxAct" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Income Tax Act, 1961: Key Tax Provisions for M&A Transactions</h2>
            <p className={paragraphStyle}>The Income Tax Act, 1961, defines "Amalgamation" under Section 2(1B) and provides tax relief for certain transactions.</p>
            <p className="font-bold text-[16px] mb-4 uppercase tracking-widest text-[#DB3269]">Definitions to Understand Before Proceeding</p>
            <div className="space-y-6">
                {[
                    { title: 'Amalgamation', desc: 'The merger of one or more companies into another company or the formation of a new company, where all assets/liabilities become those of the amalgamated company and at least 75% of shareholders remain.' },
                    { title: 'Amalgamating Company', desc: 'The company being merged or acquired.' },
                    { title: 'Amalgamated Company', desc: 'The company that acquires or absorbs the amalgamating company.' },
                    { title: 'Capital Asset', desc: 'Any property held by an assessee, except stock-in-trade, personal effects, and specific exclusions under Section 2(14).' }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1 text-[#DB3269]"><Check size={20} /></div>
                        <div>
                            <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                            <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className={`${paragraphStyle} mt-8`}>Calzone ensures your M&A transaction is structured to minimize tax liability while ensuring full compliance with tax laws.</p>
          </section>

          {/* Capital Gains */}
          <section id="CapitalGains" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Capital Gains Tax in Mergers & Acquisitions</h2>
            <p className={paragraphStyle}>Section 47 of the Income Tax Act provides tax exemptions for certain capital asset transfers during M&A transactions.</p>
            <div className="mt-6 overflow-hidden border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#222222] text-white">
                        <tr>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest border-r border-gray-700">Section</th>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest">Exemption</th>
                        </tr>
                    </thead>
                    <tbody className="text-[14px]">
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 47(vi)</td>
                            <td className="p-4">No capital gains tax on asset transfer by the <span className="font-bold">amalgamating company to the amalgamated company</span>, if the latter is an <span className="font-bold">Indian company</span>.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-[#F9F9F9] hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 47(via)</td>
                            <td className="p-4">No capital gains tax for <span className="font-bold">cross-border mergers</span> where at least <span className="font-bold">25% of shareholders</span> of the amalgamating foreign company remain in the new entity.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 47(vii)</td>
                            <td className="p-4">No tax on transfer of shares by shareholders of the amalgamating company if they receive shares of the amalgamated Indian company in return.</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-[#F9F9F9]">
                            <td className="p-4 font-bold border-r border-gray-100">Section 47(viaa)</td>
                            <td className="p-4">No capital gains tax on the transfer of assets from <span className="font-bold">a banking company to another banking institution</span> during an amalgamation.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-6 p-4 bg-[#DB3269]/5 border-l-4 border-[#DB3269] text-[15px] italic">
                <span className="font-bold">Tax Saving Tip:</span> Ensure your merger or acquisition meets the eligibility criteria under Section 47 to avoid unnecessary capital gains tax. Calzone can help structure your transaction tax-efficiently.
            </p>
          </section>

          {/* Tax Relief */}
          <section id="TaxRelief" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Tax Relief for Losses & Depreciation (Section 72A & 72AA)</h2>
            <p className={paragraphStyle}>M&A deals often involve companies carrying accumulated losses and unabsorbed depreciation. The tax laws provide relief for such losses when the merger meets certain conditions.</p>
            <div className="mt-6 overflow-hidden border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#222222] text-white">
                        <tr>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest border-r border-gray-700">Section</th>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest">Tax Relief</th>
                        </tr>
                    </thead>
                    <tbody className="text-[14px]">
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 72A</td>
                            <td className="p-4">Allows <span className="font-bold">carry forward & set off</span> of <span className="font-bold">accumulated losses and unabsorbed depreciation</span> of the amalgamating company by the amalgamated company.</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-[#F9F9F9]">
                            <td className="p-4 font-bold border-r border-gray-100">Section 72AA</td>
                            <td className="p-4">Similar to <span className="font-bold">72A</span>, but applicable specifically to mergers of <span className="font-bold">banking institutions and government companies</span>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className={`${paragraphStyle} mt-6`}>Ensure your M&A deal qualifies under Sections 72A & 72AA to leverage tax benefits on past losses. Calzone’s tax experts can help you structure the deal strategically.</p>
          </section>

          {/* Business Expenditure */}
          <section id="BusinessExpenditure" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Business Expenditure Deductions for M&A Transactions</h2>
            <div className="mt-6 overflow-hidden border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#222222] text-white">
                        <tr>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest border-r border-gray-700">Section</th>
                            <th className="p-4 text-[14px] font-bold uppercase tracking-widest">Tax Deduction</th>
                        </tr>
                    </thead>
                    <tbody className="text-[14px]">
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 35(5)</td>
                            <td className="p-4">Allows deduction for capital expenses on scientific research transferred during the merger.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-[#F9F9F9] hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 35DD</td>
                            <td className="p-4">Allows <span className="font-bold">1/5th deduction of amalgamation expenses</span> for 5 years.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-bold border-r border-gray-100">Section 35D(5)</td>
                            <td className="p-4">Unused preliminary expense deductions from the amalgamating company can be <span className="font-bold">claimed by the amalgamated company</span>.</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-[#F9F9F9]">
                            <td className="p-4 font-bold border-r border-gray-100">Section 36(1)(vii)</td>
                            <td className="p-4">Deduction allowed for <span className="font-bold">bad debts of the amalgamating company</span> taken over in the merger.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className={`${paragraphStyle} mt-8 font-bold`}>Optimize your tax benefits by strategically planning your merger. Calzone ensures you take full advantage of all deductions!</p>
          </section>

          {/* GST Implications */}
          <section id="GSTImplications" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>GST Implications on Mergers & Acquisitions</h2>
            <p className={paragraphStyle}>Under the GST Act, 2017, businesses must transfer unutilized Input Tax Credit (ITC) when merging or acquiring another entity.</p>
            <h3 className="font-bold text-[16px] mb-4 text-[#DB3269] uppercase tracking-widest">How to Transfer Input Tax Credit (ITC)?</h3>
            <div className="space-y-4">
                {[
                    'Section 18(4) of CGST Act allows ITC transfer only if liabilities are also transferred.',
                    'File Form ITC-02 to transfer ITC.',
                    'Submit a Chartered Accountant (CA) Certificate confirming that liabilities are transferred.',
                    'Transferee must accept the details on the GST portal.'
                ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-[14px] leading-[24px] text-gray-700">
                        <div className="mt-2.5 w-1.5 h-1.5 bg-[#DB3269] rounded-full shrink-0" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <p className={`${paragraphStyle} mt-8`}>Ensure seamless GST compliance in your M&A deal with Calzone’s expert tax advisory.</p>
          </section>

          {/* Why Choose Us */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Why Choose Calzone for M&A Taxation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                    { bold: 'Tax-Efficient Deal Structuring -', text: 'We optimize mergers & acquisitions to minimize tax liabilities.' },
                    { bold: 'Regulatory Compliance -', text: 'We ensure compliance with Income Tax, GST, SEBI, RBI, and Companies Act regulations.' },
                    { bold: 'Expert Capital Gains Tax Planning -', text: 'Helping businesses avoid unnecessary tax burdens.' },
                    { bold: 'Seamless ITC Transfer Support -', text: 'Ensuring smooth transition of unutilized tax credits.' },
                    { bold: 'Full-Spectrum M&A Advisory -', text: 'From due diligence to execution, we handle it all!' }
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-[28px] text-[#222222]">
                        <div className="mt-[10px] w-1.5 h-1.5 bg-[#DB3269] shrink-0" />
                        <span><span className="font-bold">{item.bold}</span> {item.text}</span>
                    </li>
                ))}
            </div>
            <div className="mt-12 p-10 bg-[#222222] text-white text-center">
                <p className="text-[20px] font-bold mb-6 tracking-tight">Optimize your M&A deal with expert tax planning by Calzone!</p>
                <div className="space-y-4 text-left inline-block max-w-2xl mx-auto opacity-80 mb-8">
                    <p className="text-[14px]">Mergers & Acquisitions demand careful tax planning to maximize financial gains. Whether you're acquiring a company or merging operations, Calzone ensures your deal is tax-efficient and fully compliant.</p>
                    <p className="text-[14px] font-bold">Let's make your M&A transaction smooth, profitable, and legally sound!</p>
                </div>
                <br />
                <button className="bg-[#DB3269] text-white px-8 py-3 font-bold uppercase tracking-widest text-[12px] hover:bg-white hover:text-[#DB3269] transition-all">Consult Our Experts</button>
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
            <p className="mt-8 font-bold text-[16px] text-center italic">Have more questions? Contact Calzone for expert M&A tax guidance today!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TaxationMA;
