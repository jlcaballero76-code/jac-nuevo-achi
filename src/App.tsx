import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { InstitutionalSection } from './components/InstitutionalSection';
import { ActionPlanSection } from './components/ActionPlanSection';
import { SolarAndServicesSection } from './components/SolarAndServicesSection';
import { AffiliateRegistrationForm } from './components/AffiliateRegistrationForm';
import { DocumentsAndStatutesSection } from './components/DocumentsAndStatutesSection';
import { HistorySection } from './components/HistorySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { ColombiaSolarModal } from './components/ColombiaSolarModal';
import { OFFICIAL_DOCUMENTS } from './data/jacData';
import { OfficialDocumentItem } from './types';

export default function App() {
  const [activeDocModal, setActiveDocModal] = useState<OfficialDocumentItem | null>(null);
  const [isSolarModalOpen, setIsSolarModalOpen] = useState<boolean>(false);

  const handleOpenDocById = (docId: string) => {
    const found = OFFICIAL_DOCUMENTS.find((d) => d.id === docId);
    if (found) {
      setActiveDocModal(found);
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6] text-[#2c3e50] font-sans antialiased selection:bg-amber-300 selection:text-slate-900">
      
      {/* Sticky Official Header & Navigation */}
      <Header
        onOpenRegister={() => handleScrollToSection('beneficiarios')}
        onOpenSolar={() => setIsSolarModalOpen(true)}
      />

      {/* Hero Banner with Community Indicators */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10 sm:space-y-12">
        
        {/* Hero Section */}
        <HeroBanner
          onOpenRegister={() => handleScrollToSection('beneficiarios')}
          onOpenSolar={() => setIsSolarModalOpen(true)}
        />

        {/* 1. Información Institucional & Órganos Directivos */}
        <InstitutionalSection
          onOpenRegister={() => handleScrollToSection('beneficiarios')}
        />

        {/* 2. Plan de Acción Cuatrienal (Proyectos a Gestionar) */}
        <ActionPlanSection
          onOpenSolar={() => setIsSolarModalOpen(true)}
          onOpenDoc={handleOpenDocById}
        />

        {/* 3. Transición Energética & Gas Domiciliario (Informe Técnico 2026) */}
        <SolarAndServicesSection
          onOpenDoc={handleOpenDocById}
          onOpenSolarModal={() => setIsSolarModalOpen(true)}
        />

        {/* 4. Formulario de Actualización de Beneficiarios & Libro de Afiliados */}
        <AffiliateRegistrationForm />

        {/* 5. Documentos Oficiales & Visor de Estatutos (132 Artículos) */}
        <DocumentsAndStatutesSection
          onOpenDocModal={(doc) => setActiveDocModal(doc)}
        />

        {/* 6. Reseña Histórica de Achí & Origen de Nuevo Achí */}
        <HistorySection />

        {/* 7. Ubicación Geográfica & Coordenadas */}
        <LocationSection />

      </main>

      {/* Official Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modal for viewing and printing documents */}
      <DocumentViewerModal
        document={activeDocModal}
        onClose={() => setActiveDocModal(null)}
      />

      {/* Modal for Colombia Solar Program guidelines */}
      <ColombiaSolarModal
        isOpen={isSolarModalOpen}
        onClose={() => setIsSolarModalOpen(false)}
        onOpenRegister={() => {
          setIsSolarModalOpen(false);
          handleScrollToSection('beneficiarios');
        }}
      />

    </div>
  );
}
