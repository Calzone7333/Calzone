import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ServiceLayout = ({ 
  title, 
  subtitle, 
  breadcrumb, 
  tabs, 
  introduction, 
  children,
  activeTab: externalActiveTab,
  onTabChange
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tabId, tabName) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabName);
  };

  return (
    <article className="pt-24 min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} aria-hidden="true" />
          <span className="text-[#DB3269]" aria-current="page">{breadcrumb || title}</span>
        </nav>

        <header className="mb-10">
          {/* Main Heading */}
          <h1 className="font-sans font-bold text-[30px] md:text-[40px] leading-tight text-[#222222] tracking-tight mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-[#585858] text-[16px] mb-8">
              {subtitle}
            </p>
          )}

          {/* Intro */}
          {introduction && (
            <div className="max-w-4xl">
              <h2 className="font-sans font-bold text-[24px] text-[#222222] mb-3">Introduction</h2>
              <div className="font-sans font-normal text-[15px] leading-[28px] text-[#222222] tracking-tight">
                {introduction}
              </div>
            </div>
          )}
        </header>

        {/* Tabs Navigation */}
        {tabs && tabs.length > 0 && (
          <nav className="mb-10 border-b border-gray-100 sticky top-[72px] bg-white z-40" aria-label="Page Sections">
            <ul className="flex flex-wrap items-center gap-6 py-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <a 
                    href={`#${tab.id}`}
                    onClick={() => handleTabClick(tab.id, tab.name)}
                    className={`inline-block pb-2 text-[16px] font-bold transition-all relative tracking-tight ${
                      (externalActiveTab || activeTab) === tab.id ? 'text-[#DB3269]' : 'text-[#222222] hover:text-[#DB3269]'
                    }`}
                  >
                    {tab.name}
                    {(externalActiveTab || activeTab) === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DB3269]" 
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <main className="space-y-16">
          {children}
        </main>
      </div>
    </article>
  );
};

export default ServiceLayout;
