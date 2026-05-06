import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Social Icons since they are removed from Lucide
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const Footer = () => {
  const [showMore, setShowMore] = useState({
    newBusiness: false,
    compliance: false,
    virtualCFO: false
  });

  const toggleShowMore = (section) => {
    setShowMore(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const footerSections = [
    {
      title: 'New Business',
      key: 'newBusiness',
      links: [
        { name: 'Sole Proprietorship Registration', href: '/sole-proprietorship' },
        { name: 'Partnership Firm Registration', href: '/partnership-firm-registration' },
        { name: 'LLP Registration', href: '/llp-registration' },
        { name: 'Private Limited Company', href: '/private-limited-company' },
        { name: 'Public Limited Company', href: '/public-limited-company' },
        { name: 'One Person Company', href: '/one-person-company' },
      ],
      moreLinks: [
        { name: 'Startup Business Registration', href: '/startup-business-registration' },
        { name: 'Section 8 Company Registration', href: '/section-8-company-registration' },
        { name: 'Producer Company Registration', href: '/producer-company' },
        { name: 'Indian Subsidiary Registration', href: '/indian-subsidiary' },
        { name: 'Branch Office Registration', href: '/branch-office-registration' },
        { name: 'Foreign Subsidiary', href: '/foreign-subsidiary' },
        { name: '80G & 12A Registration', href: '/80g-12a-registration' },
        { name: 'Society Registration', href: '/society-registration' },
        { name: 'Trust Registration', href: '/trust-registration' },
      ]
    },
    {
      title: 'Compliance',
      key: 'compliance',
      links: [
        { name: 'Add Director', href: '#' },
        { name: 'Removal of Director', href: '#' },
        { name: 'Increase Authorized Share Capital', href: '#' },
        { name: 'Change Company Address', href: '#' },
        { name: 'MOM & AOA Amendments', href: '#' },
        { name: 'DIN Validation (Dir 3 KYC)', href: '#' },
      ],
      moreLinks: [
        { name: 'DIN Surrender', href: '#' },
        { name: 'Closure of Private Limited Company', href: '#' },
        { name: 'LLP Name Change', href: '#' },
        { name: 'LLP Adding a Designated Partner', href: '#' },
        { name: 'Changes in LLP Agreement', href: '#' },
        { name: 'LLP Roc Compliance', href: '#' },
        { name: 'Closure of LLP', href: '#' },
      ]
    },
    {
      title: 'GST & Income Tax',
      links: [
        { name: 'GST Registration', href: '#' },
        { name: 'GST Return Filing', href: '#' },
        { name: 'Letter of Undertaking (LUT)', href: '#' },
        { name: 'GST E-Way Bill', href: '#' },
        { name: 'GST Registration Surrender/Cancellation', href: '#' },
        { name: 'GST Registration Modification', href: '#' },
      ]
    },
    {
      title: 'Income Tax Return Filing',
      links: [
        { name: 'Income Tax Return', href: '#' },
        { name: 'Form 15CA & Form 15CB Filing', href: '#' },
        { name: 'NRI Income Tax Planning and Filing', href: '#' },
      ]
    },
    {
      title: 'Virtual CFO',
      key: 'virtualCFO',
      links: [
        { name: 'Bookkeeping and Accounting', href: '#' },
        { name: 'Payroll Services', href: '#' },
        { name: 'Virtual CFO Services', href: '#' },
        { name: 'CMA Report Preparation', href: '#' },
        { name: 'Business Plan Preparation', href: '#' },
        { name: 'IND-AS', href: '#' },
      ],
      moreLinks: [
        { name: 'Valuation for Mergers & Acquisitions', href: '#' },
        { name: 'Taxation for Mergers & Acquisitions', href: '#' },
      ]
    },
    {
      title: 'Useful Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Careers', href: '#' },
        { name: 'Query', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'Terms & Condition', href: '#' },
        { name: 'Disclaimer', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-0 font-poppins">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="bg-white p-2 rounded-none">
            <img src="/web-logo.png" alt="Clazone Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/calzone-financial-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB3269] transition-colors"><LinkedinIcon size={20} /></a>
            <a href="https://www.instagram.com/calzone_financialsolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB3269] transition-colors"><InstagramIcon size={20} /></a>
            <a href="https://www.facebook.com/CalzoneFinancialSolution/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB3269] transition-colors"><FacebookIcon size={20} /></a>
            <a href="https://x.com/calzonestartup" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB3269] transition-colors"><TwitterIcon size={20} /></a>
            <a href="https://www.youtube.com/@CalzoneFin" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB3269] transition-colors"><YoutubeIcon size={20} /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-[14px] font-bold mb-6 tracking-wide text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 group">
                    <div className="w-1 h-1 bg-gray-500 mt-2 shrink-0 group-hover:bg-[#DB3269]" />
                    <Link to={link.href} className="text-[13px] text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
                
                {/* Expandable Section */}
                {section.moreLinks && (
                  <>
                    {showMore[section.key] && section.moreLinks.map((link, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2 group">
                        <div className="w-1 h-1 bg-gray-500 mt-2 shrink-0 group-hover:bg-[#DB3269]" />
                        <Link to={link.href} className="text-[13px] text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                      </li>
                    ))}
                    <button 
                      onClick={() => toggleShowMore(section.key)}
                      className="text-[#DB3269] text-[13px] font-medium mt-2 hover:underline text-left"
                    >
                      {showMore[section.key] ? 'show less -' : 'show more +'}
                    </button>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#DB3269] py-6 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-1">
          <p className="text-white text-[14px]">© 2025 calzone.co.in. All Rights Reserved</p>
          <p className="text-white/80 text-[11px]">
            powered by <a href="https://webtel.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">Webtel Electrosoft Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
