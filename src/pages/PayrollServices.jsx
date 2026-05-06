import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, Minus, Users, Landmark, ShieldCheck, FileText, BarChart3, TrendingUp, Calculator, Clock, Zap, Monitor, Laptop, Globe, HeartPulse, UserCheck, Shield } from 'lucide-react';

const PayrollServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Why Choose', id: 'WhyChoose' },
    { name: 'Features', id: 'Features' },
    { name: 'End-to-End', id: 'EndtoEnd' },
    { name: 'Provider', id: 'HowtoChoose' },
    { name: 'Calzone Benefits', id: 'WhyChooseUs' },
    { name: 'FAQs', id: 'FAQs' },
  ];

  const faqs = [
    { q: 'What does payroll processing include?', a: 'Salary calculation, tax deductions, EPF/ESI/PT compliance, payslip generation, and direct salary payments.' },
    { q: 'Is payroll outsourcing cost-effective for small businesses?', a: 'Yes! Outsourcing payroll saves time, reduces errors, and ensures compliance—without hiring an in-house payroll team.' },
    { q: 'How does Calzone ensure payroll compliance?', a: 'We handle TDS, GST, PF, ESI, labor laws, and other statutory filings, ensuring 100% compliance.' },
    { q: 'Can Calzone handle multi-location payroll processing?', a: 'Absolutely! We offer payroll solutions for businesses with multiple locations across India.' },
    { q: 'How do I get started with Calzone\'s payroll services?', a: 'Simply contact us, and our experts will set up a payroll system tailored to your business needs.' }
  ];

  const features = [
    { title: 'Salary Processing', desc: 'Automated payroll calculation based on salary structure, deductions, and bonuses.', icon: Calculator },
    { title: 'Payslip Generation', desc: 'Secure online payslips for employees delivered instantly.', icon: FileText },
    { title: 'Tax & Compliance', desc: 'Automatic deductions for TDS, PF, ESI, and Professional Tax (PT).', icon: ShieldCheck },
    { title: 'Leave Tracking', desc: 'Integrated leave, vacation, and attendance management.', icon: Clock },
    { title: 'Payroll Reports', desc: 'Detailed reports for audits and comprehensive financial planning.', icon: BarChart3 },
    { title: 'Salary Payments', desc: 'Seamless bank transfers and online salary disbursement.', icon: Zap },
    { title: 'Reimbursements', desc: 'Manage employee benefits, travel claims, and performance bonuses.', icon: TrendingUp },
    { title: 'Employee Portal', desc: 'Self-service portal to access payslips and tax statements.', icon: Monitor },
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
          <span className="text-[#DB3269]">Payroll Services</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-4`}>Payroll Services</h1>
        <p className={`${paragraphStyle} text-[#DB3269] font-bold uppercase tracking-widest text-[13px] mb-10`}>Payroll Management Services - Simplify Salary Processing with Calzone</p>

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
          {/* What is Payroll */}
          <section id="Overview" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>What is Payroll?</h2>
            <p className={paragraphStyle}>
              Payroll is the process of calculating and distributing employee salaries, wages, bonuses, and deductions. It is an essential function for any business, ensuring that employees are compensated accurately and on time while complying with tax regulations and labor laws.
            </p>
            <div className="p-8 bg-[#222222] text-white">
              <p className="text-[18px] font-bold leading-relaxed mb-0 text-center italic">
                Calzone offers expert payroll services, ensuring timely salary disbursement, compliance with statutory regulations, and seamless payroll management for businesses of all sizes.
              </p>
            </div>
          </section>

          {/* Why Choose */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Why Choose Payroll Services?</h2>
            <p className={paragraphStyle}>Managing payroll manually can be time-consuming, error-prone, and legally complex. By outsourcing payroll services, businesses can:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                { title: 'Ensure Compliance', desc: 'Stay up to date with tax regulations, EPF, ESI, and labor laws.' },
                { title: 'Reduce Errors', desc: 'Automated payroll minimizes calculation mistakes.' },
                { title: 'Save Time & Resources', desc: 'Focus on core business operations while experts handle payroll.' },
                { title: 'Payroll Reports', desc: 'Track payroll expenses and deductions effortlessly.' },
                { title: 'Data Security', desc: 'Protect sensitive employee data with secure processing.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[#F9F9F9] border-l-4 border-[#DB3269]">
                  <Shield size={24} className="text-[#DB3269] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#222222] text-center">With Calzone, payroll becomes stress-free, accurate, and fully compliant with government regulations.</p>
          </section>

          {/* Features */}
          <section id="Features" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>Key Features of Calzone's Payroll Services</h2>
            <p className={paragraphStyle}>Calzone provides comprehensive payroll management with the following features:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {features.map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 flex flex-col items-center text-center group hover:bg-[#222222] transition-all duration-300">
                  <div className="text-[#DB3269] mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[15px] text-[#222222] group-hover:text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[12px] text-gray-500 group-hover:text-gray-400 mb-0 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-[#DB3269]">Calzone's payroll solutions are designed to be user-friendly, cost-effective, and scalable for businesses of all sizes.</p>
          </section>

          {/* End-to-End */}
          <section id="EndtoEnd" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-4`}>End-to-End Payroll Processing Services</h2>
            <p className={paragraphStyle}>An end-to-end payroll system integrates payroll with other HR functions, such as employee performance tracking, training, benefits, and compliance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-[16px] mb-6 border-b border-[#DB3269] pb-2">Why Choose End-to-End?</h4>
                <ul className="space-y-4">
                  {[
                    'Improves HR efficiency by automating payroll tasks.',
                    'Reduces compliance risks by ensuring timely tax filings.',
                    'Enhances employee satisfaction with accurate processing.',
                    'Provides comprehensive reports for financial analysis.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-600">
                      <Check size={16} className="text-[#DB3269] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-200">
                <p className="text-[20px] font-bold text-[#222222] text-center italic leading-relaxed">
                  Calzone provides tailored payroll solutions to fit your business needs—so you can focus on growth while we handle payroll!
                </p>
              </div>
            </div>
          </section>

          {/* How to Choose */}
          <section id="HowtoChoose" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>How to Choose the Right Payroll Service Provider?</h2>
            <p className={paragraphStyle}>When selecting a payroll service provider, ensure they offer:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Automatic Payslips', desc: 'Secure and timely distribution of electronic payslips.', icon: FileText },
                { title: 'Hassle-Free Processing', desc: 'Accurate salary calculation and direct disbursement.', icon: Zap },
                { title: 'Compliance Management', desc: 'Full adherence to TDS, EPF, ESI, and PT regulations.', icon: Scale ?? ShieldCheck },
                { title: 'Benefits Management', desc: 'Allowances, reimbursements, and incentive processing.', icon: HeartPulse ?? Gift },
                { title: 'Reports & Analytics', desc: 'Detailed financial reports for better decision-making.', icon: BarChart3 },
                { title: 'Cloud-Based Access', desc: 'Access your payroll data anytime, anywhere securely.', icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-6 border border-gray-100">
                  <h4 className="font-bold text-[16px] text-[#222222]">{item.title}</h4>
                  <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-bold text-[#DB3269] text-center">Calzone's payroll services offer all these features and more—ensuring seamless processing for businesses of all sizes.</p>
          </section>

          {/* Why Choose Calzone */}
          <section id="WhyChooseUs" className="scroll-mt-32">
            <h2 className={`${subHeadingStyle} mb-8`}>Why Choose Calzone for Payroll Management?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: '100% Compliance', desc: 'We handle all tax filings, deductions, and legal requirements.' },
                { title: 'Error-Free Processing', desc: 'Automated calculations eliminate payroll errors.' },
                { title: 'Secure & Confidential', desc: 'Data security is our top priority for employee records.' },
                { title: 'Transparent Pricing', desc: 'Cost-effective solutions with no hidden charges.' },
                { title: 'Dedicated Support', desc: 'Our payroll experts are always available to assist you.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-[#DB3269] text-white flex items-center justify-center font-bold">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[16px] text-[#222222] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-16 text-center text-[18px] font-bold text-[#222222] uppercase tracking-tight">Looking for expert payroll management? <span className="text-[#DB3269]">Contact Calzone today!</span></p>
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
            <p className="mt-12 text-center font-bold text-[#222222]">Want hassle-free payroll processing? <span className="text-[#DB3269] uppercase tracking-widest ml-2 underline underline-offset-4">Contact Calzone today!</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PayrollServices;
