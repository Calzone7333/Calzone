import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, ShieldCheck, FileText, Scale, Gavel, AlertCircle, Briefcase, HeartPulse, UserCheck, Stethoscope, Check, Plus, Minus, Zap } from 'lucide-react';

const EsiRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Eligibility', id: 'Eligibility' },
    { name: 'Benefits', id: 'Benefits' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Process', id: 'Process' },
    { name: 'Compliance', id: 'Compliance' },
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
          <span className="text-[#DB3269]">ESI Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className="font-poppins font-bold text-[40px] text-[#222222] leading-tight mb-2">
          Employee State Insurance (ESI)
        </h1>
        <p className="text-[#585858] text-[16px] mb-8">
          Comprehensive Medical and Social Security for the Indian Workforce
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-poppins font-bold text-[20px] text-[#222222] mb-3">Introduction</h2>
          <p className={paragraphStyle}>
            Employee State Insurance (ESI) is a self-financing social security and health insurance scheme for Indian workers. Managed by the ESIC (Employee State Insurance Corporation), it provides medical care, sickness benefits, and maternity support to employees earning a modest wage.
          </p>
          <p className={paragraphStyle}>
            The scheme acts as a safety net for employees and their families during medical emergencies or occupational hazards, ensuring that the burden of healthcare costs does not fall entirely on the individual worker.
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
            <h2 className={sectionHeadingStyle}>Statutory Threshold</h2>
            <p className={paragraphStyle}>
              "Mandatory for all establishments employing 10 or more people (20 in some regions) where any employee earns up to ₹21,000 per month."
            </p>
            <div className="p-6 bg-[#222222] text-white border-l-4 border-[#DB3269]">
              <p className="italic text-[15px]">
                ESI registration provides employees with full medical coverage and financial assistance during periods of sickness or injury.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Who Needs Registration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4">Applicable Entities:</h4>
                <ul className="space-y-3">
                  {['Factories & Manufacturing Units', 'Shops & Commercial Establishments', 'Hotels & Restaurants', 'Cinemas & Educational Institutions', 'Newspaper Establishments'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 uppercase">Wage Limits:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-bold text-[22px]">₹21,000 / Month</p>
                    <p className="text-gray-400 text-[13px]">Gross salary limit for regular employees.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[22px]">₹25,000 / Month</p>
                    <p className="text-gray-400 text-[13px]">Gross salary limit for persons with disabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="Benefits" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Benefits under ESIC</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Full Medical Care', desc: 'Unlimited coverage for employee and family from day one.', icon: Stethoscope },
                { title: 'Sickness Benefit', desc: '70% of wages during certified medical leave.', icon: HeartPulse },
                { title: 'Maternity Benefit', desc: 'Fully paid leave for 26 weeks for female employees.', icon: Check },
                { title: 'Disability Benefit', desc: 'Continuous financial aid for work injuries.', icon: ShieldCheck },
                { title: 'Dependent Benefit', desc: 'Monthly pension for family in case of death.', icon: Landmark },
                { title: 'Unemployment', desc: 'Cash allowance for up to 24 months for job loss.', icon: Briefcase }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-[#F9F9F9] text-center">
                  <div className="flex justify-center mb-4 text-[#DB3269]"><item.icon size={32} /></div>
                  <h4 className="font-bold text-[#222222] text-[16px] mb-2">{item.title}</h4>
                  <p className="text-[#585858] text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Checklist of Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#F9F9F9]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-4 border-b border-[#DB3269] pb-2">Entity Proofs:</h4>
                <ul className="space-y-3">
                  {['Registration Certificate (GST/Shops Act)', 'MOA & AOA / Partnership Deed', 'Business PAN Card copy', 'Address Proof (EB/Rent Bill)', 'Cancelled Cheque'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#585858]">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-gray-100 bg-[#222222] text-white">
                <h4 className="font-bold text-[#DB3269] text-[18px] mb-4 border-b border-gray-800 pb-2 uppercase">Employee Data:</h4>
                <ul className="space-y-3">
                  {['List of employees with joining dates', 'Salary breakup for every worker', 'Aadhaar & PAN details', 'Nominee details & photos', 'Contact mobile for each worker'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <Check size={16} className="text-[#DB3269]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="Process" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>The Registration Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Online Signup', desc: 'Registration on the ESIC portal using valid email and mobile.' },
                { step: '2', title: 'Form-1 Submission', desc: 'Fill out details about owner and infrastructure.' },
                { step: '3', title: 'Data Validation', desc: 'Verification of employee threshold and wage limits.' },
                { step: '4', title: 'Code Generation', desc: 'Issuance of the 17-digit unique ESI Identification Number.' },
                { step: '5', title: 'Monthly Compliance', desc: 'Pay contributions by the 15th of the following month.' }
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

          {/* Compliance */}
          <section id="Compliance" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Compliance & Penalties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#fce7f3] border-l-4 border-[#DB3269]">
                <h4 className="font-bold text-[#222222] text-[18px] mb-2">Contribution Rates:</h4>
                <p className="text-[15px] text-[#585858]"><span className="font-bold">Employer:</span> 3.25% of gross wages</p>
                <p className="text-[15px] text-[#585858]"><span className="font-bold">Employee:</span> 0.75% of gross wages</p>
                <p className="text-[12px] text-gray-500 italic mt-3">*Due on or before the 15th of every month.</p>
              </div>
              <div className="p-6 bg-[#222222] text-white flex items-center gap-6">
                <div className="text-[#DB3269] shrink-0"><AlertCircle size={48} /></div>
                <div>
                  <p className="font-bold text-[16px] mb-1 text-[#DB3269]">Penalties</p>
                  <p className="text-gray-400 text-[13px]">
                    Delayed payments attract <span className="text-white font-bold">12% per annum</span> interest. Consistent failure can lead to imprisonment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={sectionHeadingStyle}>Why Choose Calzone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { title: 'Zero Error Filing', icon: ShieldCheck },
                { title: 'Medical Liaison', icon: Stethoscope },
                { title: 'Monthly Returns', icon: FileText },
                { title: 'Audit Readiness', icon: Gavel }
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

export default EsiRegistration;
