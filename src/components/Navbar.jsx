import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const menuData = [
    {
      name: 'New Business',
      type: 'mega',
      width: 'w-[900px]',
      sections: [
        {
          heading: 'New Business',
          fullWidth: true,
          columns: [
            {
              links: [
                { name: 'Sole Proprietorship Registration', href: '/sole-proprietorship' },
                { name: 'Partnership Firm Registration', href: '/partnership-firm-registration' },
                { name: 'LLP Registration', href: '/llp-registration' },
                { name: 'Private Limited Company', href: '/private-limited-company' },
              ]
            },
            {
              links: [
                { name: 'Public Limited Company', href: '/public-limited-company' },
                { name: 'One Person Company', href: '/one-person-company' },
                { name: 'Startup Business Registration', href: '/startup-business-registration' },
                { name: 'Section 8 Company Registration', href: '/section-8-company-registration' },
              ]
            },
            {
              links: [
                { name: 'Producer Company Registration', href: '/producer-company' },
                { name: 'Indian Subsidiary Registration', href: '/indian-subsidiary' },
                { name: 'Branch office Registration', href: '/branch-office-registration' },
                { name: 'Foreign Subsidiary', href: '/foreign-subsidiary' },
              ]
            },
            {
              links: [
                { name: '80G & 12A Registration', href: '/80g-12a-registration' },
                { name: 'Society Registration', href: '/society-registration' },
                { name: 'Trust Registration', href: '/trust-registration' },
              ]
            }
          ]
        },
        {
          heading: 'Government Registration & Licenses',
          fullWidth: true,
          columns: [
            {
              links: [
                { name: 'DSC', href: '/dsc' },
                { name: 'Udyam Registration', href: '/udyam-registration' },
                { name: 'FSSAI Registration', href: '/fssai-registration' },
                { name: 'IEC Registration', href: '/iec-registration' },
              ]
            },
            {
              links: [
                { name: 'Drug & Cosmetic License Registration', href: '/drug-cosmetic-license' },
                { name: 'PF Registration', href: '/pf-registration' },
                { name: 'ESI Registration', href: '/esi-registration' },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Compliance',
      type: 'dropdown',
      links: [
        { name: 'Adding Director', href: '/add-director' },
        { name: 'Removal of Director', href: '/remove-director' },
        { name: 'Increase Authorized Share Capital', href: '/increase-authorized-share-capital' },
        { name: 'Change Company Address', href: '/change-company-address' },
        { name: 'MOM & AOA Amendments', href: '/moa-aoa-amendments' },
        { name: 'DIN Validation (Dir 3 KYC)', href: '/din-validation-dir-3-kyc' },
        { name: 'DIN surrender', href: '/din-surrender' },
        { name: 'Closure of Private Limited Company', href: '/closure-of-private-limited-company' },
        { name: 'LLP Name Change', href: '/llp-name-change' },
        { name: 'LLP Adding a Designated Partner', href: '/llp-adding-designated-partner' },
        { name: 'Changes in LLP Agreement', href: '/changes-in-llp-agreement' },
        { name: 'LLP Roc Compliance', href: '/llp-roc-compliance' },
        { name: 'Closure of LLP', href: '/closure-of-llp' },
      ]
    },
    {
      name: 'GST & Income Tax',
      type: 'mega',
      width: 'w-[550px]',
      combinedHeader: true,
      sections: [
        {
          heading: 'GST',
          columns: [
            {
              links: [
                { name: 'GST Registration', href: '/gst-registration' },
                { name: 'GST Return Filing', href: '/gst-return-filing' },
                { name: 'Letter of Undertaking', href: '/letter-of-undertaking' },
                { name: 'GST E-Way Bill', href: '/gst-e-way-bill' },
                { name: 'GST Registration Cancellation/Surrender', href: '/gst-registration-cancellation-surrender' },
                { name: 'GST Registration Modification', href: '/gst-registration-modification' },
              ]
            }
          ]
        },
        {
          heading: 'Income Tax Return',
          columns: [
            {
              links: [
                { name: 'Income Tax Return Filing', href: '/income-tax-return-filing' },
                { name: 'Form 15CA & Form 15CB Filing', href: '/form-15ca-form-15cb-filing' },
                { name: 'NRI Income Tax Planning & Filing', href: '/nri-income-tax-planning-filing' },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Virtual CFO',
      type: 'dropdown',
      links: [
        { name: 'Bookkeeping & Accounting', href: '/bookkeeping-accounting' },
        { name: 'Payroll Services', href: '/payroll-services' },
        { name: 'Virtual CFO Service', href: '/virtual-cfo-services' },
        { name: 'CMA Report Preparation', href: '/cma-report-preparation' },
        { name: 'Business Plan Preparation', href: '/business-plan-preparation' },
        { name: 'IND-AS', href: '/ind-as' },
        { name: 'Valuation for Mergers & Acquisitions', href: '/valuation-mergers-acquisitions' },
        { name: 'Taxation for Mergers & Acquisitions', href: '/taxation-mergers-acquisitions' },
      ]
    },
    {
      name: 'Fundraising',
      type: 'dropdown',
      links: [
        { name: 'Fundraising', href: '/fundraising' },
        { name: 'Investment Pitch Deck', href: '/investment-pitch-deck' },
        { name: 'Detailed Project Report', href: '/detailed-project-report' },
      ]
    },
    {
      name: 'Business Loan',
      type: 'dropdown',
      links: [
        { name: 'Business Loans', href: '/business-loans' },
      ]
    },
    {
      name: 'Blog',
      type: 'link',
      href: '/blog'
    },
    {
      name: 'Contact Us',
      type: 'link',
      href: '/contact-us'
    }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/web-logo.png" alt="Clazone Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {menuData.map((item) => (
              <div 
                key={item.name}
                className="relative group h-14 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.type === 'link' ? (
                  <Link 
                    to={item.href}
                    className="px-2 py-2 nav-link-style hover:text-[#DB3269] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="px-2 py-2 flex items-center gap-1.5 nav-link-style hover:text-[#DB3269] transition-colors group">
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Dropdown Content */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.type !== 'link' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-2xl border border-gray-100 overflow-hidden rounded-none ${
                        item.type === 'mega' ? item.width : 'w-72 p-4 max-h-[calc(100vh-100px)] overflow-y-auto'
                      }`}
                    >
                      <div className="p-0">
                        {item.type === 'mega' ? (
                          <div className="flex flex-col bg-white">
                            {item.combinedHeader ? (
                              <>
                                <div className="bg-black text-white px-6 py-2.5 text-[14px] font-bold tracking-wide grid grid-cols-2">
                                  {item.sections.map((section, idx) => (
                                    <div key={idx}>{section.heading}</div>
                                  ))}
                                </div>
                                <div className="grid grid-cols-2">
                                  {item.sections.map((section, sIdx) => (
                                    <div key={sIdx} className="px-3 py-4">
                                      {section.columns.map((col, cIdx) => (
                                        <div key={cIdx} className="flex flex-col gap-0">
                                          {col.links.map((link, lIdx) => (
                                            <Link 
                                              key={lIdx} 
                                              to={link.href}
                                              className="dropdown-link-style hover:bg-[#DB3269] hover:text-white transition-all block py-1.5 px-3 border-b border-[#fce7f3] last:border-b-0 rounded-none"
                                            >
                                              {link.name}
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : (
                              item.sections.map((section, sIdx) => (
                                <div key={sIdx} className="w-full">
                                  <div className="bg-black text-white px-6 py-2.5 text-[14px] font-bold tracking-wide">
                                    {section.heading}
                                  </div>
                                  <div className={`grid ${section.fullWidth ? 'grid-cols-4' : 'grid-cols-1'} gap-x-4 gap-y-0 p-6`}>
                                    {section.columns.map((col, cIdx) => (
                                      <div key={cIdx} className="flex flex-col gap-0">
                                        {col.links.map((link, lIdx) => (
                                          <Link 
                                            key={lIdx} 
                                            to={link.href}
                                            className="dropdown-link-style hover:bg-[#DB3269] hover:text-white transition-all block py-1.5 px-3 border-b border-[#fce7f3] last:border-b rounded-none"
                                          >
                                            {link.name}
                                          </Link>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col bg-white">
                            {item.links.map((link) => (
                              <Link 
                                key={link.name} 
                                to={link.href}
                                className="dropdown-link-style hover:bg-[#DB3269] hover:text-white transition-all block py-1.5 px-4 rounded-none"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[72px] bg-white z-[90] overflow-y-auto xl:hidden"
          >
            <div className="p-0 pb-20">
              {menuData.map((item) => (
                <div key={item.name} className="border-b border-gray-100">
                  {item.type === 'link' ? (
                    <Link to={item.href} className="nav-link-style font-bold text-[15px] px-6 py-4 block">{item.name}</Link>
                  ) : (
                    <div>
                      <button 
                        className="flex justify-between items-center w-full nav-link-style font-bold text-[15px] px-6 py-4"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown size={18} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50/50"
                          >
                            {item.type === 'mega' ? (
                              item.sections.map((section, idx) => (
                                <div key={idx} className="w-full">
                                  <h4 className="bg-black text-white px-6 py-2 text-[12px] font-bold uppercase tracking-wider">{section.heading}</h4>
                                  <div className="px-6 pb-4 flex flex-col gap-0">
                                    {section.columns.flatMap(col => col.links).map((link, lIdx) => (
                                      <Link key={lIdx} to={link.href} className="dropdown-link-style pt-3 pb-1 px-3 border-b border-[#fce7f3] hover:bg-[#DB3269] hover:text-white transition-all rounded-none">{link.name}</Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="px-6 pb-4 flex flex-col gap-0">
                                {item.links.map((link, lIdx) => (
                                  <Link key={lIdx} to={link.href} className="dropdown-link-style py-3 px-3 hover:bg-[#DB3269] hover:text-white transition-all rounded-none">{link.name}</Link>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
