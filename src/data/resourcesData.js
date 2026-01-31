import { FileText, Video, Heart, GraduationCap, FileCheck } from 'lucide-react';

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
        title: "Conférence: L'Excellence en Islam",
        type: "video",
        category: "Spirituelle",
        duration: "45 min",
        views: 850,
        icon: Video,
        color: "bg-emerald-50 text-emerald-600",
        description: "Une intervention marquante sur l'importance de la quête du savoir."
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
        title: "Recueil de Qasidas",
        type: "document",
        category: "Spirituelle",
        size: "5.6 MB",
        downloads: 5600,
        icon: Heart,
        color: "bg-rose-50 text-rose-600",
        description: "Les textes essentiels pour les séances de Zikr du jeudi soir."
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
