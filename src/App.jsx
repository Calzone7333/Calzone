import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Agency from './components/Agency';

import Footer from './components/Footer';

// Pages
import SoleProprietorship from './pages/SoleProprietorship';
import PublicLimitedCompany from './pages/PublicLimitedCompany';
import ProducerCompany from './pages/ProducerCompany';
import NGORegistration from './pages/NGORegistration';
import PartnershipFirm from './pages/PartnershipFirm';
import OnePersonCompany from './pages/OnePersonCompany';
import IndianSubsidiary from './pages/IndianSubsidiary';
import SocietyRegistration from './pages/SocietyRegistration';
import LLPRegistration from './pages/LLPRegistration';
import StartupRegistration from './pages/StartupRegistration';
import BranchOffice from './pages/BranchOffice';
import TrustRegistration from './pages/TrustRegistration';
import PrivateLimitedCompany from './pages/PrivateLimitedCompany';
import Section8Company from './pages/Section8Company';
import ForeignSubsidiary from './pages/ForeignSubsidiary';

// Compliance & Registration Pages
import DigitalSignature from './pages/DigitalSignature';
import UdyamRegistration from './pages/UdyamRegistration';
import FssaiRegistration from './pages/FssaiRegistration';
import IecRegistration from './pages/IecRegistration';
import DrugCosmeticLicense from './pages/DrugCosmeticLicense';
import PfRegistration from './pages/PfRegistration';
import EsiRegistration from './pages/EsiRegistration';
import AddDirector from './pages/AddDirector';
import RemoveDirector from './pages/RemoveDirector';
import IncreaseCapital from './pages/IncreaseCapital';
import ChangeCompanyAddress from './pages/ChangeCompanyAddress';
import MoaAoaAmendments from './pages/MoaAoaAmendments';
import DinValidation from './pages/DinValidation';
import DinSurrender from './pages/DinSurrender';
import ClosureOfPrivateLimited from './pages/ClosureOfPrivateLimited';
import LlpNameChange from './pages/LlpNameChange';
import LlpDesignatedPartner from './pages/LlpDesignatedPartner';
import LlpAgreementChanges from './pages/LlpAgreementChanges';
import LlpCompliance from './pages/LlpCompliance';
import ClosureOfLlp from './pages/ClosureOfLlp';

// GST & Income Tax Pages
import GstRegistration from './pages/GstRegistration';
import GstReturnFiling from './pages/GstReturnFiling';
import LutRegistration from './pages/LutRegistration';
import GstEwayBill from './pages/GstEwayBill';
import GstCancellation from './pages/GstCancellation';
import GstModification from './pages/GstModification';
import IncomeTaxReturn from './pages/IncomeTaxReturn';
import Form15CaCb from './pages/Form15CaCb';
import NriIncomeTax from './pages/NriIncomeTax';
import BusinessLoans from './pages/BusinessLoans';
import Fundraising from './pages/Fundraising';
import InvestmentPitchDeck from './pages/InvestmentPitchDeck';
import DetailedProjectReport from './pages/DetailedProjectReport';
import BookkeepingAccounting from './pages/BookkeepingAccounting';
import PayrollServices from './pages/PayrollServices';
import VirtualCFO from './pages/VirtualCFO';
import CmaReport from './pages/CmaReport';
import BusinessPlan from './pages/BusinessPlan';
import IndAs from './pages/IndAs';
import ValuationMA from './pages/ValuationMA';
import TaxationMA from './pages/TaxationMA';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Solutions />
    <Agency />

  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sole-proprietorship" element={<SoleProprietorship />} />
          <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/producer-company" element={<ProducerCompany />} />
          <Route path="/80g-12a-registration" element={<NGORegistration />} />
          <Route path="/partnership-firm-registration" element={<PartnershipFirm />} />
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
          <Route path="/society-registration" element={<SocietyRegistration />} />
          <Route path="/llp-registration" element={<LLPRegistration />} />
          <Route path="/startup-business-registration" element={<StartupRegistration />} />
          <Route path="/branch-office-registration" element={<BranchOffice />} />
          <Route path="/trust-registration" element={<TrustRegistration />} />
          <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/section-8-company-registration" element={<Section8Company />} />
          <Route path="/foreign-subsidiary" element={<ForeignSubsidiary />} />

          {/* New Compliance Routes */}
          <Route path="/dsc" element={<DigitalSignature />} />
          <Route path="/udyam-registration" element={<UdyamRegistration />} />
          <Route path="/fssai-registration" element={<FssaiRegistration />} />
          <Route path="/iec-registration" element={<IecRegistration />} />
          <Route path="/drug-cosmetic-license" element={<DrugCosmeticLicense />} />
          <Route path="/pf-registration" element={<PfRegistration />} />
          <Route path="/esi-registration" element={<EsiRegistration />} />
          <Route path="/add-director" element={<AddDirector />} />
          <Route path="/remove-director" element={<RemoveDirector />} />
          <Route path="/increase-authorized-share-capital" element={<IncreaseCapital />} />
          <Route path="/change-company-address" element={<ChangeCompanyAddress />} />
          <Route path="/moa-aoa-amendments" element={<MoaAoaAmendments />} />
          <Route path="/din-validation-dir-3-kyc" element={<DinValidation />} />
          <Route path="/din-surrender" element={<DinSurrender />} />
          <Route path="/closure-of-private-limited-company" element={<ClosureOfPrivateLimited />} />
          <Route path="/llp-name-change" element={<LlpNameChange />} />
          <Route path="/llp-adding-designated-partner" element={<LlpDesignatedPartner />} />
          <Route path="/changes-in-llp-agreement" element={<LlpAgreementChanges />} />
          <Route path="/llp-roc-compliance" element={<LlpCompliance />} />
          <Route path="/closure-of-llp" element={<ClosureOfLlp />} />

          {/* GST & Income Tax Routes */}
          <Route path="/gst-registration" element={<GstRegistration />} />
          <Route path="/gst-return-filing" element={<GstReturnFiling />} />
          <Route path="/letter-of-undertaking" element={<LutRegistration />} />
          <Route path="/gst-e-way-bill" element={<GstEwayBill />} />
          <Route path="/gst-registration-cancellation-surrender" element={<GstCancellation />} />
          <Route path="/gst-registration-modification" element={<GstModification />} />
          <Route path="/income-tax-return-filing" element={<IncomeTaxReturn />} />
          <Route path="/form-15ca-form-15cb-filing" element={<Form15CaCb />} />
          <Route path="/nri-income-tax-planning-filing" element={<NriIncomeTax />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/investment-pitch-deck" element={<InvestmentPitchDeck />} />
          <Route path="/detailed-project-report" element={<DetailedProjectReport />} />
          <Route path="/bookkeeping-accounting" element={<BookkeepingAccounting />} />
          <Route path="/payroll-services" element={<PayrollServices />} />
          <Route path="/virtual-cfo-services" element={<VirtualCFO />} />
          <Route path="/cma-report-preparation" element={<CmaReport />} />
          <Route path="/business-plan-preparation" element={<BusinessPlan />} />
          <Route path="/ind-as" element={<IndAs />} />
          <Route path="/valuation-mergers-acquisitions" element={<ValuationMA />} />
          <Route path="/taxation-mergers-acquisitions" element={<TaxationMA />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
