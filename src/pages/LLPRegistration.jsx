import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const LLPRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Advantages & Disadvantages', id: 'AdvantagesDisadvantages' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Cost of LLP', id: 'CostofLLP' },
  ];

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">LLP Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          LLP Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          LLP Registration with Calzone - A Smart Choice for Business Owners
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business is an exciting journey, but choosing the right structure is essential for success. A Limited Liability Partnership (LLP) is an ideal business model for entrepreneurs who want the flexibility of a partnership while enjoying limited liability protection like a private limited company.
          </p>
          <p className={paragraphStyle}>
            With minimum compliance, no compulsory audits, and no restriction on the number of partners, LLPs have become a popular choice for small businesses, consultants, service providers, and professionals.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the LLP registration process, ensuring quick approvals and hassle-free compliance.
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
        <div className="space-y-12">
          {/* Overview */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>What is an LLP?</h2>
            <p className={paragraphStyle}>
              A Limited Liability Partnership (LLP) is a business structure that combines the advantages of both a traditional partnership and a private limited company.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">It provides:</p>
              <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
                <li><span className="font-bold">Limited Liability Protection</span> - Partners are not personally liable for business debts.</li>
                <li><span className="font-bold">Separate Legal Entity</span> - The LLP exists separately from its owners.</li>
                <li><span className="font-bold">Flexible Management</span> - Less compliance compared to companies.</li>
                <li><span className="font-bold">Perpetual Succession</span> - LLP continues to exist even if partners change.</li>
              </ul>
            </div>
            <p className={paragraphStyle}>
              Unlike traditional partnerships, where partners are personally liable for business obligations, an LLP limits each partner's liability to the amount they invest in the business.
            </p>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose an LLP with Calzone?</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Ideal for Professionals & Service-Based Businesses</span> - Suitable for consultants, agencies, IT firms, and law/accounting firms.</li>
              <li><span className="font-bold">No Minimum Capital Requirement</span> - LLPs can be formed with low investment.</li>
              <li><span className="font-bold">Less Compliance Than a Private Limited Company</span> - No mandatory audits if turnover is below ₹40 lakh.</li>
              <li><span className="font-bold">Limited Liability Protection</span> - Partners are not personally responsible for company debts.</li>
              <li><span className="font-bold">Flexible Business Structure</span> - Partners can define their roles and rights in an LLP Agreement.</li>
              <li><span className="font-bold">Faster Registration with Calzone</span> - We handle everything from documentation to compliance.</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Eligibility for LLP Registration</h2>
            <p className={paragraphStyle}>A Limited Liability Partnership (LLP) can be formed by:</p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li>Minimum 2 Partners (no limit on the maximum number).</li>
              <li>At least one partner must be a resident of India.</li>
              <li>A legal agreement defining the partnership terms must be created.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 italic">
              If a company is a partner in an LLP, it must appoint a natural person as a nominee.
            </p>
          </section>

          {/* Advantages & Disadvantages */}
          <section id="AdvantagesDisadvantages" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Advantages of Registering an LLP with Calzone</h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858] mb-8">
              <li><span className="font-bold">No Minimum Capital Requirement</span> - Start with any amount.</li>
              <li><span className="font-bold">Tax Benefits</span> - LLPs are taxed at a flat 30% with no dividend distribution tax.</li>
              <li><span className="font-bold">Less Compliance</span> - No need for annual audits if turnover is below ₹40 lakh.</li>
              <li><span className="font-bold">Separate Legal Entity</span> - Can enter contracts, own property, and sue in its own name.</li>
              <li><span className="font-bold">No Limit on Number of Partners</span> - Expand your business without restrictions.</li>
              <li><span className="font-bold">Seamless Registration</span> - Calzone ensures fast, efficient, and compliant LLP incorporation.</li>
            </ul>
            <h2 className={`${headingStyle} mb-4`}>Disadvantages of LLP</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Higher Tax Rate</span> - LLPs are taxed at 30%, which is higher than companies taxed at 25% (for turnover up to ₹400 crores).</li>
              <li><span className="font-bold">Cannot Raise Equity Capital</span> - LLPs cannot issue shares like private limited companies.</li>
              <li><span className="font-bold">Difficult Ownership Transfer</span> - Requires approval from all partners.</li>
              <li><span className="font-bold">Strict Penalties for Non-Compliance</span> - ₹100 per day fine for delayed filings.</li>
            </ul>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for LLP Registration with Calzone</h2>
            <div className="space-y-6">
              <div className="mb-4 flex gap-4">
                <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">1</div>
                <div>
                  <p className={subHeadingStyle}>Obtain Digital Signature Certificate (DSC)</p>
                  <p className={paragraphStyle}>All designated partners need a DSC to sign documents digitally. Calzone assists in obtaining DSC from authorized certifying authorities.</p>
                </div>
              </div>
              <div className="mb-4 flex gap-4">
                <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">2</div>
                <div>
                  <p className={subHeadingStyle}>Apply for Designated Partner Identification Number (DPIN/DIN)</p>
                  <p className={paragraphStyle}>DPIN (Designated Partner Identification Number) is required for each partner. Calzone handles the entire DPIN/DIN application process.</p>
                </div>
              </div>
              <div className="mb-4 flex gap-4">
                <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">3</div>
                <div>
                  <p className={subHeadingStyle}>Name Reservation for LLP</p>
                  <p className={paragraphStyle}>Select a unique business name and submit two preferences to the MCA. Calzone ensures quick name approval and compliance with MCA norms.</p>
                </div>
              </div>
              <div className="mb-4 flex gap-4">
                <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">4</div>
                <div>
                  <p className={subHeadingStyle}>File Incorporation Application (FiLLiP Form)</p>
                  <p className={paragraphStyle}>Submit incorporation documents via FiLLiP along with partner details and office address. Once approved, the Certificate of Incorporation is issued.</p>
                </div>
              </div>
              <div className="mb-4 flex gap-4">
                <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-sans font-bold text-[15px] shrink-0">5</div>
                <div>
                  <p className={subHeadingStyle}>Draft & File LLP Agreement</p>
                  <p className={paragraphStyle}>Defines roles, responsibilities, profit-sharing, and exit clauses. Must be filed within 30 days of incorporation using Form-3. Calzone ensures a legally sound agreement, drafted by experts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for LLP Registration</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-[#222222] text-[16px] mb-2">• For Partners:</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>PAN Card & Aadhaar Card.</li>
                  <li>Address Proof (Voter ID, Driving License, Passport).</li>
                  <li>Residence Proof (Latest Utility Bill or Bank Statement - not older than 2 months).</li>
                  <li>Passport (for NRIs or Foreign Nationals).</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[#222222] text-[16px] mb-2">• For LLP Registration:</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Registered Office Proof (Electricity/Water Bill - not older than 2 months).</li>
                  <li>Rental Agreement & NOC from the Owner (if applicable).</li>
                  <li>LLP Agreement (to be filed within 30 days of incorporation).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Compliance Requirements for LLPs</h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858] mb-4">
              <li><span className="font-bold">Annual Return Filing (Form 11)</span> - Due within 60 days from the end of the financial year.</li>
              <li><span className="font-bold">Statement of Accounts & Solvency (Form 8)</span> - Due within 30 days after 6 months of the financial year-end.</li>
              <li><span className="font-bold">Income Tax Returns</span> - LLPs must file tax returns annually.</li>
              <li><span className="font-bold">GST Returns</span> - Mandatory for LLPs with GST registration.</li>
            </ul>
            <p className="text-[16px] text-[#585858] font-bold">
              Late filing results in a penalty of ₹100 per day until compliance is completed.
            </p>
          </section>

          {/* Cost Table */}
          <section id="CostofLLP" className="scroll-mt-32 overflow-x-auto">
            <h2 className={`${headingStyle} mb-4`}>Cost of LLP Registration with Calzone</h2>
            <table className="w-full border border-gray-200 text-[14px]">
              <thead>
                <tr className="bg-[#DB3269] text-white">
                  <th className="border border-gray-200 p-4 text-left font-bold uppercase">Service</th>
                  <th className="border border-gray-200 p-4 text-left font-bold uppercase">Estimated Fees (₹)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Digital Signature Certificate (DSC) for 2 Partners', '2,000 - 2,500'],
                  ['Designated Partner Identification Number (DPIN/DIN)', '1,500'],
                  ['Name Reservation', '200'],
                  ['Government Registration Fee', '500 - 5,000 (Varies by contribution amount)'],
                  ['LLP Agreement Stamp Duty', 'Varies by state']
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                    <td className="border border-gray-200 p-4 font-bold text-[#222222]">{row[0]}</td>
                    <td className="border border-gray-200 p-4 text-[#585858]">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Why Choose us section */}
          <section className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for LLP Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'End-to-End Assistance', desc: 'From DSC to LLP Agreement, we handle everything.' },
                { title: 'Expert Business Consultation', desc: 'Guidance on compliance, tax benefits, and growth strategies.' },
                { title: 'Quick Processing', desc: 'Fast registration with minimal hassle.' },
                { title: 'Affordable Pricing', desc: 'Transparent and competitive fees.' }
              ].map((item, i) => (
                <li key={i} className={`${paragraphStyle} mb-2`}>
                  • <span className={subHeadingStyle}>{item.title}</span> – {item.desc}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LLPRegistration;
