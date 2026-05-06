import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SocietyRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', id: 'Overview' },
    { name: 'Register', id: 'Register' },
    { name: 'Step-by-Step', id: 'StepbyStep' },
    { name: 'Key Purposes', id: 'KeyPurposes' },
    { name: 'Documents', id: 'Documents' },
    { name: 'Why Choose', id: 'WhyChoose' },
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
          <span className="text-[#DB3269]">Society Registration</span>
        </nav>

        {/* Main Heading */}
        <h1 className={`${headingStyle} mb-2`}>
          Society Registration
        </h1>
        <p className={`${paragraphStyle} mb-8`}>
          Establish Your Non-Profit Organization the Right Way
        </p>

        {/* Introduction */}
        <div className="mb-10">
          <p className={paragraphStyle}>
            A society is a group of individuals who come together for a common cause—whether it's promoting education, art, culture, sports, science, charity, or any other social welfare activity. Society registration provides a legal identity to these organizations, allowing them to function transparently while enjoying various benefits.
          </p>
          <p className={paragraphStyle}>
            At Calzone, we simplify the society registration process so you can focus on your mission without getting tangled in legal formalities.
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
            <h2 className={`${headingStyle} mb-4`}>What is Society Registration?</h2>
            <p className={paragraphStyle}>
              A society is a group of individuals who come together for a common cause—whether it's promoting education, art, culture, sports, science, charity, or any other social welfare activity. Society registration provides a legal identity to these organizations, allowing them to function transparently while enjoying various benefits.
            </p>
            <p className={paragraphStyle}>
              At Calzone, we simplify the society registration process so you can focus on your mission without getting tangled in legal formalities.
            </p>
          </section>

          {/* Why Register */}
          <section id="Register" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Register a Society?</h2>
            <p className={paragraphStyle}>
              While societies can operate without registration, registering your society under the Societies Registration Act, 1860 provides several advantages:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#222222] tracking-tight">
              <li><span className="font-bold">Legal Recognition</span> - A registered society is a recognized legal entity.</li>
              <li><span className="font-bold">Property Ownership</span> - Only registered societies can own assets in their name.</li>
              <li><span className="font-bold">Better Credibility</span> - Government bodies, donors, and financial institutions prefer registered entities.</li>
              <li><span className="font-bold">Eligibility for Grants & Funds</span> - Access government and corporate grants with ease.</li>
              <li><span className="font-bold">Limited Liability for Members</span> - Protection from individual financial liability.</li>
            </ul>
            <div className="bg-[#F9F9F9] p-6">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Who Can Form a Society?</p>
              <p className="text-[16px] text-[#585858]">
                A minimum of seven individuals can form a society. Additionally, Indian citizens, businesses, foreigners, or even registered societies can apply for society registration.
              </p>
            </div>
          </section>

          {/* Step-by-Step */}
          <section id="StepbyStep" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Steps for Society Registration with Calzone</h2>
            <p className={paragraphStyle}>At Calzone, we make the process of registering a society simple and efficient:</p>
            <div className="space-y-6">
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 1: Choose a Unique Name</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>The society name must be unique and must not be similar to an existing registered society or imply government association.</li>
                  <li>Pro Tip: We conduct a name search to ensure quick approval.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 2: Draft the Memorandum of Association (MoA)</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Includes society's name, address, objectives, and details of founding members.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 3: Prepare Rules & Regulations</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Outlines membership rules, governance roles, meeting formats, and fund management.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 4: Gather Required Documents</p>
                <div className="pl-10 space-y-3">
                  <div className="mb-2">
                    <p className="font-bold text-[#585858] text-[14px]">For Members:</p>
                    <ul className="list-disc pl-5 text-[14px] text-[#585858]">
                      <li>PAN Card, ID Proof (Aadhaar/Passport), and Address Proof.</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <p className="font-bold text-[#585858] text-[14px]">For Registered Office:</p>
                    <ul className="list-disc pl-5 text-[14px] text-[#585858]">
                      <li>Utility Bill + NOC from property owner.</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <p className="font-bold text-[#585858] text-[14px]">Additional Documents:</p>
                    <ul className="list-disc pl-5 text-[14px] text-[#585858]">
                      <li>Affidavit of objectives and signed list of governing body members.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 5: Submission to the Registrar of Societies</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>We file your application with the appropriate State Registrar of Societies.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#222222] text-[16px] mb-1">• Step 6: Verification & Approval</p>
                <ul className="list-disc pl-10 space-y-1 text-[16px] text-[#585858]">
                  <li>Certificate of Registration is issued after successful review.</li>
                </ul>
              </div>
            </div>
            <p className="text-[#DB3269] font-bold text-[16px] mt-6">
              Processing Time: Typically 30-45 days, depending on the state.
            </p>
          </section>

          {/* Key Purposes */}
          <section id="KeyPurposes" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Key Purposes of Society Registration</h2>
            <p className={paragraphStyle}>Societies are primarily formed to benefit the public and serve social causes. Key purposes include:</p>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#585858]">
              <li><span className="font-bold">Education & Literacy</span> - Schools, colleges, and research institutes.</li>
              <li><span className="font-bold">Charitable Causes</span> - Support for underprivileged communities.</li>
              <li><span className="font-bold">Cultural & Artistic Development</span> - Promotion of art, music, and literature.</li>
              <li><span className="font-bold">Environmental Conservation</span> - Sustainable development initiatives.</li>
              <li><span className="font-bold">Scientific Research</span> - Innovations in healthcare, agriculture, and technology.</li>
              <li><span className="font-bold">Libraries & Museums</span> - Establishment of public knowledge centers.</li>
            </ul>
            <p className="text-[16px] text-[#585858] mt-4 font-bold">
              At Calzone, we help societies of all kinds navigate the legal process and achieve their mission.
            </p>
          </section>

          {/* Documents */}
          <section id="Documents" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Required Documents for Society Registration</h2>
            <p className={paragraphStyle}>To register your society successfully, you'll need:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">Member Documents:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>PAN Card for all founding members</li>
                  <li>Identity proof (Aadhar/Passport/Driving License)</li>
                  <li>Address proof (Utility Bill/Bank Statement)</li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] border-t-4 border-[#DB3269] p-6">
                <p className="font-bold text-[#222222] text-[16px] mb-4">Society Documents:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#585858]">
                  <li>Memorandum of Association (MoA)</li>
                  <li>Rules & Regulations</li>
                  <li>Registered Office Address Proof (Utility bill + NOC)</li>
                  <li>List of Governing Body Members with signatures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section id="WhyChoose" className="scroll-mt-32">
            <h2 className={`${headingStyle} mb-4`}>Why Choose Calzone for Society Registration?</h2>
            <p className={paragraphStyle}>At Calzone, we take the complexity out of the legal process and provide a seamless registration experience.</p>
            <ul className="space-y-3">
              {[
                { title: 'Hassle-Free Registration', desc: 'We handle all paperwork, submission, and follow-ups.' },
                { title: 'Quick Processing', desc: 'Faster approval through proper documentation.' },
                { title: 'Expert Guidance', desc: 'Dedicated consultants for personalized support.' },
                { title: 'Post-Registration Support', desc: 'Assistance with compliance and legal requirements.' }
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

export default SocietyRegistration;
