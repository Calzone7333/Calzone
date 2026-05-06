import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Pencil, Building, File, FileText } from 'lucide-react';

const OnePersonCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Timelines', id: 'Timelines' },
    { name: 'Compliance', id: 'Compliance' },
    { name: 'Checklist', id: 'Checklist' },
    { name: 'Person vs Private', id: 'PersonPrivate' },
    { name: 'Why Chooses Us', id: 'WhyChoosesus' },
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
          <span className="text-[#DB3269]">One Person Company</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          One Person Company <br /> Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          One Person Company (OPC) Registration with Calzone - Empowering Solo Entrepreneurs
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className={`${headingStyle} mb-3`}>Introduction</h2>
          <p className={paragraphStyle}>
            Starting a business as a solo entrepreneur can be challenging, but a One Person Company (OPC) offers a perfect balance between independence, limited liability, and business growth potential.
          </p>
          <p className={paragraphStyle}>
            A One Person Company (OPC) is a type of private limited company, designed for individuals who want to run a business on their own while enjoying the legal benefits of a corporate structure. It allows a single individual to be the director and shareholder, ensuring full control and decision-making power.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the OPC registration process, ensuring that your business is legally compliant and ready to scale.
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
            <h2 className={`${headingStyle} mb-4`}>What is a One Person Company (OPC)?</h2>
            <p className={paragraphStyle}>
              An OPC is a legally recognized business structure under the Companies Act, 2013, designed to empower sole entrepreneurs with the benefits of a Private Limited Company.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Key Features of OPC:</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
                <li><span className="font-bold">Single Owner & Director</span> - One individual controls 100% of the company.</li>
                <li><span className="font-bold">Separate Legal Entity</span> - Business and personal assets are treated separately.</li>
                <li><span className="font-bold">Limited Liability</span> - Personal assets remain protected from business liabilities.</li>
                <li><span className="font-bold">Perpetual Succession</span> - The business continues even after the owner's demise (subject to nominee approval).</li>
                <li><span className="font-bold">No Minimum Capital Requirement</span> - Start with any capital amount.</li>
                <li><span className="font-bold">No Mandatory AGM or Board Meetings</span> - Compliance is simpler than a traditional private limited company.</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Best suited for:</p>
              <ul className="list-disc pl-5 space-y-1 text-[16px] text-[#585858]">
                <li>Solo entrepreneurs who want a corporate structure.</li>
                <li>Freelancers, consultants, and small business owners.</li>
                <li>Individuals looking to raise funds in the future while maintaining ownership.</li>
              </ul>
            </div>
            <p className={paragraphStyle}>
              At Calzone, we help you seamlessly incorporate an OPC, so you can focus on growing your business.
            </p>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose an OPC with Calzone?</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Full Ownership & Control</span> - No need for multiple partners or investors.</li>
              <li><span className="font-bold">Tax & Compliance Benefits</span> - Avoid complex annual compliance requirements of a Private Limited Company.</li>
              <li><span className="font-bold">Easy to Incorporate & Manage</span> - Requires minimal documentation and legal formalities.</li>
              <li><span className="font-bold">Higher Credibility & Business Growth</span> - Having a registered company boosts customer and investor trust.</li>
              <li><span className="font-bold">Better Loan & Funding Opportunities</span> - Easier access to business loans and investment options.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures a smooth and efficient registration process with expert guidance.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Documents Required for OPC Registration.</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li>Identity Proof of Director & Nominee (PAN, Aadhaar, Passport).</li>
              <li>Address Proof of Director & Nominee (Utility Bills, Voter ID, Passport).</li>
              <li>Registered Office Address Proof (Electricity Bill, Rent Agreement, NOC from Landlord).</li>
              <li>Director Identification Number (DIN) for Director.</li>
              <li>Digital Signature Certificate (DSC) for Director.</li>
              <li>Memorandum of Association (MOA) - Defines business objectives.</li>
              <li>Articles of Association (AOA) - Governs company operations.</li>
              <li>Nominee Consent Form (INC-3) - The nominee takes over in case of the owner's demise.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 font-bold">
              Calzone ensures that your documentation is complete and error-free for quick approvals.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Step-by-Step Process for OPC Registration with Calzone</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Apply for Digital Signature Certificate (DSC)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Required for digitally signing official documents.</li>
                  <li>Calzone helps in obtaining a DSC from authorized certifying authorities.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Apply for Director Identification Number (DIN)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>DIN is mandatory for the director of the OPC.</li>
                  <li>Calzone manages the DIN application process through the MCA portal.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Reserve a Unique Business Name</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>The company name must be unique and comply with MCA guidelines.</li>
                  <li>Must include “(OPC) Private Limited” at the end of the company name.</li>
                  <li>Name reservation is done via SPICe+ Part A Form.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 4: Prepare & File Incorporation Documents</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Draft and file MOA & AOA, specifying company objectives and rules.</li>
                  <li>Obtain nominee consent via Form INC-3.</li>
                  <li>Calzone ensures that all documents are professionally drafted for hassle-free approval.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 5: Submit Incorporation Application</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Apply through SPICe+ Part B Form along with all required documents.</li>
                  <li>Submit AGILE Form to register for GST, EPF, and open a bank account.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 6: Certificate of Incorporation Issuance</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>After successful verification, Registrar of Companies (ROC) issues the Certificate of Incorporation.</li>
                  <li>Company PAN & TAN are also generated automatically.</li>
                </ul>
              </div>
            </div>
            <p className="text-[16px] text-[#585858] mt-6 font-bold">
              Calzone ensures a smooth and timely registration process, so you can launch your business faster.
            </p>
          </section>

          {/* Timelines */}
          <section id="Timelines" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Timeline for OPC Registration</h2>
            <div className="space-y-4">
              {[
                { icon: Pencil, label: 'Digital Signature & DIN Application -', time: '1-2 working days.' },
                { icon: Building, label: 'Company Name Reservation -', time: '3-5 working days.' },
                { icon: File, label: 'Submission of SPICe+ Form & Approval -', time: '5-7 working days.' },
                { icon: FileText, label: 'Certificate of Incorporation Issuance -', time: '10-12 working days.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DB3269] flex items-center justify-center text-white shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div className="pt-1">
                    <span className={subHeadingStyle}>{item.label}</span>
                    <p className={`${paragraphStyle} mb-0`}>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#585858] mt-6">
              With Calzone, you get fast-tracked approvals and expert compliance support.
            </p>
          </section>

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Compliance Requirements for OPCs</h2>
            <p className={paragraphStyle}>While an OPC has fewer compliance obligations than a Private Limited Company, certain requirements must be met:</p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Annual Financial Statements</span> - Balance Sheet & Profit and Loss Account must be filed.</li>
              <li><span className="font-bold">Annual Return Filing (Form MGT-7A & AOC-4)</span> - Must be submitted yearly.</li>
              <li><span className="font-bold">Income Tax & GST Filings</span> - Must file returns as per tax regulations.</li>
              <li><span className="font-bold">Board Meetings</span> - At least one meeting every six months.</li>
              <li><span className="font-bold">Audit Requirements</span> - Mandatory if turnover exceeds ₹2 crore.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 font-bold">
              Calzone provides comprehensive compliance services to keep your OPC legally secure.
            </p>
          </section>

          {/* Checklist */}
          <section id="Checklist" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Checklist for OPC Registration</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li>One Director & One Nominee.</li>
              <li>Minimum Authorized Capital of ₹1 Lakh.</li>
              <li>Unique Business Name Approval.</li>
              <li>Memorandum & Articles of Association Drafting.</li>
              <li>Registered Office Address Proof.</li>
              <li>GST & Tax Registrations (if applicable).</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4">
              Calzone ensures a hassle-free registration experience with expert assistance.
            </p>
          </section>

          {/* Person vs Private */}
          <section id="PersonPrivate" className="scroll-mt-32 overflow-x-auto">
            <h2 className={`${headingStyle} mb-4`}>One Person Company vs Private Limited Company - Which One to Choose?</h2>
            <table className="w-full border border-gray-200 text-[14px]">
              <thead>
                <tr className="bg-[#EEEEEE] text-[#222222]">
                  <th className="border border-gray-200 p-3 text-center font-bold">Feature</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">One Person Company (OPC)</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Private Limited Company</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Shareholders', 'Only 1', 'Minimum 2, Maximum 200'],
                  ['Public Investment', 'Not Allowed', 'Allowed'],
                  ['Compliance Requirements', 'Low', 'Moderate'],
                  ['Liability Protection', 'Limited', 'Limited'],
                  ['Scalability', 'Limited', 'High'],
                  ['Mandatory Board Meetings', 'Once every 6 months', 'Frequent Meetings Required']
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                    <td className="border border-gray-200 p-3 text-center font-bold text-[#222222]">{row[0]}</td>
                    <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[1]}</td>
                    <td className="border border-gray-200 p-3 text-center text-[#585858]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 space-y-1">
              <p className="text-[14px] text-[#585858]">• Choose an OPC if: You want full control, limited liability, and easy compliance.</p>
              <p className="text-[14px] text-[#585858]">• Choose a Private Limited Company if: You plan to scale, raise capital, or attract investors.</p>
            </div>
            <p className="text-[14px] text-[#585858] mt-4">
              At Calzone, we help businesses choose the right structure based on their goals.
            </p>
          </section>

          {/* Why Chooses Us Section */}
          <section id="WhyChoosesus" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for OPC Registration?</h2>
            <ul className="space-y-3">
              {[
                { title: 'End-to-End Assistance', desc: 'From documentation to filing with the ROC.' },
                { title: 'Expert Business Consultation', desc: 'Guidance on compliance, taxation, and structuring.' },
                { title: 'Quick Processing', desc: 'Fast registration within 10-12 days.' },
                { title: 'Affordable & Transparent Pricing', desc: 'No hidden fees, only straightforward solutions.' }
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

export default OnePersonCompany;
