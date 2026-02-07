import { getAssetPath } from '../utils/assets';

export const articles = [
    {
        id: 1,
        title: "COLLOQUE INTER-UNIVERSITAIRE 2025",
        excerpt: "Premier colloque interuniversitaire organisé par le CIU du 21-23 février 2025 à l'UIDT Thiès. Un événement majeur regroupant l'élite universitaire autour des défis contemporains.",
        author: "Commission d'Intelligence et de Perception Spirituelle",
        date: new Date(2025, 1, 21),
        category: "Événement",
        image: getAssetPath("/colloque-optimized/banniere_colloque.jpg"),
        link: "/colloque",
        readTime: "8 min",
        featured: true
    },
    {
        id: 2,
        title: "Amphi de Rentrée 2026",
        excerpt: "À l'heure où les défis éducatifs, intellectuels et citoyens interpellent la jeunesse africaine, le CIU organise l'Amphi de Rentrée Universitaire 2026. \n",
        author: "Commission d'Intelligence et de Perception Spirituelle",
        date: new Date(2026, 1, 7), // 7 Février 2026
        category: "Événement",
        image: getAssetPath("/amphi.jpeg"),
        link: "/amphi-rentree",
        readTime: "3 min",
        featured: false
    }
];

export const categories = ["Tout", "Événement"];
export const dateFilters = ["Tout", "À venir", "Passés"];
