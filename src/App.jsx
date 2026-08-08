import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ManifestoSection } from './components/ManifestoSection';
import { PropertyExplorer } from './components/PropertyExplorer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MortgageCalculator } from './components/MortgageCalculator';
import { LandownerJVSection } from './components/LandownerJVSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { SiteVisitModal } from './components/SiteVisitModal';
import { AiConciergeWidget } from './components/AiConciergeWidget';
import { Sparkles } from 'lucide-react';
export default function App() {
    const [language, setLanguage] = useState('bn');
    const [currency, setCurrency] = useState('BDT');
    // Modals & Drawers
    const [selectedProject, setSelectedProject] = useState(null);
    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    const [bookingProjectId, setBookingProjectId] = useState(undefined);
    const [bookingUnitCode, setBookingUnitCode] = useState(undefined);
    const [aiConciergeOpen, setAiConciergeOpen] = useState(false);
    const handleOpenBooking = (projectId, unitCode) => {
        setBookingProjectId(projectId);
        setBookingUnitCode(unitCode);
        setBookingModalOpen(true);
    };
    const handleHeroSearch = (location, type) => {
        // Smooth scroll to projects section
        const el = document.getElementById('projects');
        if (el)
            el.scrollIntoView({ behavior: 'smooth' });
    };
    return (<div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Header language={language} setLanguage={setLanguage} currency={currency} setCurrency={setCurrency} onOpenBooking={handleOpenBooking} onOpenAiConcierge={() => setAiConciergeOpen(true)}/>

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with core Bengali Manifesto */}
        <Hero language={language} onSearch={handleHeroSearch} onOpenBooking={() => handleOpenBooking()}/>

        {/* Brand Manifesto & Trust Pillars */}
        <ManifestoSection language={language}/>

        {/* Property Explorer & Portfolio */}
        <PropertyExplorer language={language} currency={currency} onSelectProject={(proj) => setSelectedProject(proj)} onOpenBooking={handleOpenBooking}/>

        {/* Mortgage / EMI Calculator */}
        <MortgageCalculator language={language} currency={currency} onOpenBooking={() => handleOpenBooking()}/>

        {/* Landowner Joint Venture Portal */}
        <LandownerJVSection language={language}/>

        {/* Testimonials */}
        <Testimonials language={language}/>
      </main>

      {/* Footer */}
      <Footer language={language} onOpenBooking={() => handleOpenBooking()}/>

      {/* Project Detail Modal */}
      <ProjectDetailModal project={selectedProject} language={language} currency={currency} onClose={() => setSelectedProject(null)} onOpenBooking={handleOpenBooking}/>

      {/* Site Visit Booking Modal */}
      <SiteVisitModal isOpen={bookingModalOpen} language={language} selectedProjectId={bookingProjectId} selectedUnitCode={bookingUnitCode} onClose={() => setBookingModalOpen(false)}/>

      {/* Floating AI Concierge Button */}
      {!aiConciergeOpen && (<button onClick={() => setAiConciergeOpen(true)} className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-2xl shadow-amber-500/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-amber-300/40">
          <Sparkles className="w-4 h-4 fill-slate-950 animate-bounce"/>
          <span>{language === 'bn' ? 'ম্যাট্রিক্স এআই প্রপার্টি অ্যাসিস্ট্যান্ট' : 'Matrix AI Concierge'}</span>
        </button>)}

      {/* Floating AI Concierge Drawer */}
      <AiConciergeWidget isOpen={aiConciergeOpen} language={language} onClose={() => setAiConciergeOpen(false)} onOpenBooking={() => handleOpenBooking()}/>

    </div>);
}
