import React, { useState } from 'react';
import { AppLayout, SectionId } from './components/AppLayout';
import { HeroBanner } from './components/HeroBanner';
import { InstitutionalSection } from './components/InstitutionalSection';
import { ActionPlanSection } from './components/ActionPlanSection';
import { SolarAndServicesSection } from './components/SolarAndServicesSection';
import { AffiliateRegistrationForm } from './components/AffiliateRegistrationForm';
import { DocumentsAndStatutesSection } from './components/DocumentsAndStatutesSection';
import { HistorySection } from './components/HistorySection';
import { LocationSection } from './components/LocationSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { ColombiaSolarModal } from './components/ColombiaSolarModal';
import { OFFICIAL_DOCUMENTS } from './data/jacData';
import { OfficialDocumentItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [activeDocModal, setActiveDocModal] = useState<OfficialDocumentItem | null>(null);
  const [isSolarModalOpen, setIsSolarModalOpen] = useState<boolean>(false);

  const handleOpenDocById = (docId: string) => {
    const found = OFFICIAL_DOCUMENTS.find((d) => d.id === docId);
    if (found) {
      setActiveDocModal(found);
    }
  };

  const handleScrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppLayout
      activeSection={activeSection}
      onSelectSection={handleScrollToSection}
      onOpenSolarModal={() => setIsSolarModalOpen(true)}
      onOpenDocModal={handleOpenDocById}
    >
      <div className="w-full">
        
        {/* 1. Hero Banner with Variation 3 Header, Brutalist Data Grid & Photo Spotlight */}
        <HeroBanner
          onOpenRegister={() => handleScrollToSection('beneficiarios')}
          onOpenSolar={() => setIsSolarModalOpen(true)}
          onOpenDoc={handleOpenDocById}
        />

        {/* 2. Información Institucional & Legal */}
        <InstitutionalSection
          onOpenRegister={() => handleScrollToSection('beneficiarios')}
        />

        {/* 3. Plan de Acción Cuatrienal 2024 - 2028 */}
        <ActionPlanSection
          onOpenSolar={() => setIsSolarModalOpen(true)}
          onOpenDoc={handleOpenDocById}
        />

        {/* 4. Transición Energética & Gas Domiciliario */}
        <SolarAndServicesSection
          onOpenDoc={handleOpenDocById}
          onOpenSolarModal={() => setIsSolarModalOpen(true)}
        />

        {/* 5. Carga de Datos / Formulario de Afiliación & Libro Digital */}
        <AffiliateRegistrationForm />

        {/* 6. Expedientes Oficiales & Visor de Estatutos (132 Artículos) */}
        <DocumentsAndStatutesSection
          onOpenDocModal={(doc) => setActiveDocModal(doc)}
        />

        {/* 7. Reseña Histórica & Cronista de Achí */}
        <HistorySection />

        {/* 8. Ubicación Geográfica & Coordenadas */}
        <LocationSection />

      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modal for viewing and downloading authentic documents */}
      <DocumentViewerModal
        document={activeDocModal}
        onClose={() => setActiveDocModal(null)}
      />

      {/* Modal for Colombia Solar Program guidelines & eligibility */}
      <ColombiaSolarModal
        isOpen={isSolarModalOpen}
        onClose={() => setIsSolarModalOpen(false)}
        onOpenRegister={() => {
          setIsSolarModalOpen(false);
          handleScrollToSection('beneficiarios');
        }}
      />
    </AppLayout>
  );
}
