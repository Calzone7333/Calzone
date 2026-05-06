import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, HeartPulse, UserCheck, Check, Plus, Minus, Zap } from 'lucide-react';

const PfRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
    { name: 'Structure', id: 'Structure' },
    { name: 'Why Choose', id: 'WhyChoose' },
  ];

  const sectionHeadingStyle = "font-poppins font-bold text-[24px] text-[#222222] mb-4";
  const paragraphStyle = "font-poppins font-normal text-[16px] leading-[24px] text-[#585858] mb-4";

  return (
    <div className="pt-24 min-h-screen bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">PF Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Provident Fund (PF) Registration
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Ensuring Financial Security and Retirement Benefits for Your Workforce
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            The Employees' Provident Fund (EPF) is a social security scheme introduced under the EPF & MP Act, 1952. It is a mandatory contribution-based retirement saving scheme where both the employer and the employee contribute a fixed percentage of the salary every month.
          </p>
          <p className={paragraphStyle}>
            Managed by the EPFO (Employees' Provident Fund Organization), this fund provides a lump sum amount (with interest) to employees at the time of retirement or in special circumstances like illness or housing.
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
                  className={`inline-block pb-2 text-[16px] font-bold transition-all relative ${
                    activeTab === tab.name ? 'text-[#DB3269]' : 'text-[#585858] hover:text-[#DB3269]'
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
            <h2 className={sectionHeadingStyle}>Mandatory Threshold</h2>
            <p className={paragraphStyle}>
              "Every establishment employing 20 or more persons is legally bound to register for PF within 30 days of reaching the threshold."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                Failure to register or deposit contributions on time can lead to heavy penalties and even imprisonment for the employer.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Benefits to Employees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Retirement Corpus', desc: 'Lump sum savings for post-career independence.', icon: Landmark },
                { title: 'Pension Benefits', desc: 'Lifelong monthly pension after age 58.', icon: ShieldCheck },
                { title: 'Tax-Free Interest', desc: 'Withdrawals are largely exempt from income tax.', icon: Scale },
                { title: 'Emergency Fund', desc: 'Partial withdrawals for marriage or medical.', icon: HeartPulse }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Registration Eligibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4">Compulsory Registration:</h4>
                <p className="text-[14px] text-gray-400 mb-4">Applies to any establishment with <span className="text-white font-bold">20 or more employees</span>.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[12px] font-bold text-white"><Check size={16} className="text-[#DB3269]" /> Mandatory for employees earning &lt; ₹15,000/month</li>
                  <li className="flex items-center gap-2 text-[12px] font-bold text-white"><Check size={16} className="text-[#DB3269]" /> Once registered, always registered rule applies</li>
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Voluntary Registration:</h4>
                <p className="text-[14px] text-[#585858] mb-4">Establishments with <span className="font-bold">less than 20 employees</span> can register voluntarily.</p>
                <div className="flex items-center gap-2 text-[12px] font-bold text-[#222222]"><Check size={16} className="text-[#DB3269]" /> Boosts employer branding and trust</div>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Document Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2">Employer Proofs:</h4>
                <ul className="space-y-3">
                  {['PAN Card of Business Entity', 'COI / Partnership Deed', 'Address Proof (EB/Rent Bill)', 'Cancelled Cheque', 'Class 3 DSC of Signatory'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2">Employee Details:</h4>
                <ul className="space-y-3">
                  {['Aadhaar Card (Linked to UAN)', 'Bank Account & IFSC', 'PAN Card copy', 'Nominee Details', 'Joining Date & Salary Structure'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Shram Suvidha Registration', desc: 'Create a primary account on the Unified portal.' },
                { step: '2', title: 'Data Submission', desc: 'Fill online application with owner and business data.' },
                { step: '3', title: 'Digital Signing', desc: 'Verify and sign the application using Class 3 DSC.' },
                { step: '4', title: 'UAN Generation', desc: 'Create Universal Account Numbers for initial employees.' },
                { step: '5', title: 'Credential Grant', desc: 'Receipt of Establishment Code and PF login credentials.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#222222] text-white flex items-center justify-center font-bold text-[14px] shrink-0">{item.step}</div>
                  <div>
                    <p className="font-bold text-[#222222] text-[16px]">{item.title}</p>
                    <p className="text-[15px] text-[#585858]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Structure */}
          <section id="Structure" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Contribution Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-[14px]">
                <thead>
                  <tr className="bg-[#EEEEEE] text-[#222222]">
                    <th className="border border-gray-200 p-3 text-center font-bold">Component</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Employee</th>
                    <th className="border border-gray-200 p-3 text-center font-bold">Employer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Provident Fund (EPF)', '12%', '3.67%'],
                    ['Pension Scheme (EPS)', 'NIL', '8.33%'],
                    ['Insurance (EDLI)', 'NIL', '0.50%'],
                    ['Admin Charges', 'NIL', '0.50%']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                      <td className="border border-gray-200 p-3 text-center font-bold">{row[0]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#DB3269] font-bold">{row[1]}</td>
                      <td className="border border-gray-200 p-3 text-center text-[#222222] font-bold">{row[2]}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#fce7f3]">
                    <td className="border border-gray-200 p-3 text-center font-bold text-[#DB3269]">TOTAL</td>
                    <td className="border border-gray-200 p-3 text-center font-bold text-[#DB3269]">12%</td>
                    <td className="border border-gray-200 p-3 text-center font-bold text-[#DB3269]">13%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Automated Payroll', icon: Zap },
                { title: 'Zero Compliance Risk', icon: ShieldCheck },
                { title: 'Monthly Returns', icon: FileText },
                { title: 'KYC Verification', icon: UserCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 group hover:border-[#DB3269] transition-all">
                  <div className="flex justify-center mb-3 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[14px]">{item.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PfRegistration;
