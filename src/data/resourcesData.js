import { FileText, GraduationCap, FileCheck, BookOpen } from 'lucide-react';

import CalendarIcon from '../components/icons/CalendarIcon';


export const resources = [
    {
        id: 1,
        title: "Guide de l'Étudiant Moustarchide",
        type: "document",
        category: "Administrative",
        size: "2.4 MB",
        downloads: 1240,
        icon: FileText,
        color: "bg-blue-50 text-blue-600",
        description: "Tout ce qu'il faut savoir pour bien démarrer son année universitaire."
    },
    {
        id: 2,
        title: "Publications Scientifiques",
        type: "document",
        category: "Académique",
        size: "3.5 MB",
        downloads: 850,
        icon: FileText,
        color: "bg-emerald-50 text-emerald-600",
        description: "Articles et travaux de recherche produits par nos membres."
    },
    {
        id: 3,
        title: "Calendrier Universitaire 2024-2025",
        type: "document",
        category: "Administrative",
        size: "1.1 MB",
        downloads: 3200,
        icon: CalendarIcon,
        color: "bg-purple-50 text-purple-600",
        description: "Les dates clés des examens et vacances pour toutes les universités."
    },
    {
        id: 4,
        title: "Discours de Mame Cheikh Ahmet Tidiane Sy Capitaine",
        type: "document",
        category: "Académique",
        size: "2.1 MB",
        downloads: 1200,
        icon: BookOpen,
        color: "bg-rose-50 text-rose-600",
        description: "Analyses et commentaires des textes de référence."
    },
    {
        id: 5,
        title: "Méthodologie de la Recherche",
        type: "document",
        category: "Académique",
        size: "3.2 MB",
        downloads: 980,
        icon: GraduationCap,
        color: "bg-amber-50 text-amber-600",
        description: "Guide pratique pour la rédaction de mémoires et thèses."
    },
    {
        id: 6,
        title: "Statuts et Règlement Intérieur",
        type: "document",
        category: "Administrative",
        size: "0.8 MB",
        downloads: 450,
        icon: FileCheck,
        color: "bg-slate-50 text-slate-600",
        description: "Les textes régissant le fonctionnement du Comité Inter-Universitaire."
    }
];

export const categories = ["Tout", "Académique", "Spirituelle", "Administrative"];
