import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Check, Landmark, Users, Zap, Building, Target, Scale, ShieldCheck } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('New Business');

  const tabs = [
    { name: 'New Business', id: 'new-business' },
    { name: 'Compliance', id: 'compliance' },
    { name: 'GST & Income Tax', id: 'gst-income-tax' },
  ];

  const serviceData = {
    'New Business': [
      {
        title: 'Sole Proprietorship Registration',
        docsTitle: 'Documents Required for Sole Proprietorship Registration:',
        docs: [
          'PAN Card & Aadhaar Card of the Proprietor.',
          'Business Name & Address Proof.',
          'GST Registration Certificate.',
          'Udyam Registration Certificate.',
          'Bank Account in Business Name.',
        ],
        link: '/sole-proprietorship',
        icon: Building,
        image: '/Sole.png',
      },
      {
        title: 'Partnership Firm Registration',
        docsTitle: 'Documents Required for Partnership Firm Registration:',
        docs: [
          'Application for registration of the partnership firm.',
          'Certified copy of the Partnership Deed.',
          'Affidavit confirming the accuracy of details in the Partnership Deed.',
          'PAN Card & Address Proof of all partners.',
          'Proof of the principal place of business.',
        ],
        link: '/partnership-firm-registration',
        icon: Users,
        image: '/Partnership.png',
        reverse: true,
      },
      {
        title: 'LLP Registration',
        docsTitle: 'Documents Required for LLP Registration:',
        subtitle: 'For Partners:',
        docs: [
          'PAN Card & Aadhaar Card.',
          'Address Proof.',
          'Residence Proof.',
          'Passport.',
        ],
        link: '/llp-registration',
        icon: Landmark,
        image: '/LLP.png',
      },
    ],
    'Compliance': [
      {
        title: 'Add Director',
        docsTitle: 'Documents Required for Appointing a Director:',
        docs: [
          'PAN Card of the director',
          'Identification Proof',
          'Proof of Residence',
          'Passport-Size Photograph',
          'Digital Signature Certificate (DSC)',
          'Form DIR-2',
        ],
        link: '/add-director',
        icon: Zap,
        image: '/Add.png',
      },
      {
        title: 'Removal of Director',
        docsTitle: 'A company may need to remove a director due to various reasons, including:',
        docs: [
          'Breach of fiduciary duties or misconduct',
          'Non-compliance with statutory obligations',
          'Shareholder dissatisfaction',
          'Long-term absenteeism from board meetings',
          'Voluntary resignation',
          'Court or Tribunal orders',
        ],
        link: '/remove-director',
        icon: Target,
        reverse: true,
        image: '/Removal.png',
      },
      {
        title: 'Increase Authorized Share Capital',
        docsTitle: 'Documents Required to Increase Authorized Share Capital:',
        docs: [
          'Digital Signature Certificate (DSC)',
          'Memorandum of Association (MoA)',
          'Articles of Association (AoA)',
          'Certificate of Incorporation',
          'Company PAN Card',
        ],
        link: '/increase-authorized-share-capital',
        icon: Scale,
        image: '/Increase.png',
      },
    ],
    'GST & Income Tax': [
      {
        title: 'GST Registration',
        docsTitle: 'Documents Required for GST Registration:',
        subtitle: 'For Proprietorship Firm',
        docs: [
          'PAN Card of the owner',
          'Aadhaar Card',
          'Business address proof (Electricity bill, rent agreement, etc.)',
          'Bank account details (Cancelled cheque or bank statement)',
        ],
        link: '/gst-registration',
        icon: ShieldCheck,
        image: '/GST.png',
      },
      {
        title: 'GST Return Filing',
        docsTitle: 'Documents Required for GST Return Filing:',
        docs: [
          'GSTIN',
          'Sales and Purchase Invoices',
          'Debit and Credit Notes',
          'HSN/SAC Codes',
          'Tax Payment Challans',
          'Bank Account Statements',
        ],
        link: '/gst-return-filing',
        icon: FileText,
        reverse: true,
        image: '/Partnership.png',
      },
      {
        title: 'Letter of Undertaking (LUT)',
        docsTitle: 'Documents Required for LUT:',
        docs: [
          'GST Registration Certificate',
          'PAN Card',
          'Authorized Signatory Information',
          'Witness Information',
        ],
        link: '/letter-of-undertaking',
        icon: Landmark,
        image: '/LLP.png',
      },
    ],
  };

  const headingStyle = "font-sans font-bold text-[30px] leading-[45px] text-[#222222] tracking-tight";
  const subHeadingStyle = "font-sans font-extrabold text-[18px] leading-[21.6px] text-[#222222] tracking-tight";
  const paragraphStyle = "font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight mb-4";

  return (
    <section id="popular_services" className="py-16 bg-[#F9F9F9] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={headingStyle}
          >
            We Provide The Best Services
          </motion.h2>
          <div className="w-20 h-1 bg-[#DB3269] mx-auto mt-4" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16 border-b border-gray-100">
          <div className="flex gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.name)}
                className={`pb-4 text-[16px] font-bold transition-all relative tracking-tight ${
                  activeTab === tab.name 
                    ? 'text-[#DB3269]' 
                    : 'text-[#222222] hover:text-[#DB3269]'
                }`}
              >
                {tab.name}
                {activeTab === tab.name && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 w-full h-[4px] bg-[#DB3269]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-12"
            >
              {serviceData[activeTab].map((service, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-6 md:py-8 px-10 bg-white border border-gray-100 rounded-2xl relative group transition-all duration-500 hover:shadow-2xl hover:border-[#DB3269]/20`}
                >
                  {/* Tag */}
                  <div className={`absolute top-0 ${service.reverse ? 'right-0' : 'left-0'} bg-[#DB3269] text-white px-6 py-2 text-[11px] font-bold uppercase tracking-widest rounded-br-2xl ${service.reverse ? 'rounded-bl-2xl rounded-br-none' : 'rounded-br-2xl rounded-bl-none'}`}>
                    Popular Service
                  </div>

                  {/* Icon/Image Placeholder */}
                  <div className="w-full md:w-1/2 flex items-center justify-center p-4 rounded-xl group-hover:scale-110 transition-transform duration-700 h-[400px] overflow-hidden">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <service.icon size={120} strokeWidth={1} className="text-[#DB3269]/20 group-hover:text-[#DB3269] transition-colors duration-500" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-1/2">
                    <h3 className={`${headingStyle} mb-6 text-[24px] md:text-[30px] group-hover:text-[#DB3269] transition-colors duration-500`}>
                      {service.title}
                    </h3>
                    <div className="space-y-4">
                      <p className="font-bold text-[16px] text-[#222222] opacity-80">{service.docsTitle}</p>
                      {service.subtitle && (
                        <p className="font-bold text-[#DB3269] text-[14px] uppercase tracking-wider">{service.subtitle}</p>
                      )}
                      <ul className="grid grid-cols-1 gap-3">
                        {service.docs.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed">
                            <Check size={16} className="text-[#DB3269] mt-1 shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.a 
                      href={service.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-3 mt-10 text-[#DB3269] font-bold uppercase tracking-widest text-[13px] border-b-2 border-[#DB3269] pb-1 hover:text-[#222222] hover:border-[#222222] transition-colors"
                    >
                      Learn More <ChevronRight size={16} />
                    </motion.a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
