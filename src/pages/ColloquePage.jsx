import { useRef } from 'react';
import ColloqueGallery from '../components/ColloqueGallery';
import { programData, speakers, projects, colloqueSubtitles } from '../data/colloqueData';

// Import new sections
import HeroSection from '../components/sections/colloque/HeroSection';
import PresentationSection from '../components/sections/colloque/PresentationSection';
import ProgramSection from '../components/sections/colloque/ProgramSection';
import SpeakersSection from '../components/sections/colloque/SpeakersSection';
import StatsSection from '../components/sections/colloque/StatsSection';
import CommunicationsSection from '../components/sections/colloque/CommunicationsSection';

export default function ColloquePage() {
    return (
        <main className="pt-20 bg-slate-50 min-h-screen">
            <HeroSection colloqueSubtitles={colloqueSubtitles} />
            <PresentationSection />
            <ProgramSection programData={programData} />
            <SpeakersSection speakers={speakers} />
            <StatsSection />
            <CommunicationsSection projects={projects} />
            <ColloqueGallery />
        </main>
    );
}
