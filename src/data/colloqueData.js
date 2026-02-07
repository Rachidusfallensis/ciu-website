export const programData = [
    {
        day: "Vendredi",
        fullDate: "21 Février",
        sessions: [
            { time: "16h00-17h00", title: "Mise en place & Accueil", type: "setup" },
            { time: "17h00-18h00", title: "Discours de bienvenue", type: "speech" },
            { time: "18h00-18h30", title: "Ouverture officielle", type: "ceremony" },
            { time: "19h30-20h30", title: "Conférence inaugurale: Face aux défis de l'heure", type: "conference" },
            { time: "20h30-21h00", title: "Discours du Capitaine", type: "keynote" }
        ]
    },
    {
        day: "Samedi",
        fullDate: "22 Février",
        sessions: [
            { time: "9h00-10h30", title: "Panel 1: Gouvernance inclusive", type: "panel" },
            { time: "10h45-12h15", title: "Panel 2: Transformation numérique", type: "panel" },
            { time: "12h30-14h00", title: "Communications scientifiques", type: "presentation" },
            { time: "15h30-17h00", title: "Panel 3: Convergence formation-emploi", type: "panel" },
            { time: "17h15-18h30", title: "Concours de projets", type: "competition" }
        ]
    },
    {
        day: "Dimanche",
        fullDate: "23 Février",
        sessions: [
            { time: "9h00-12h30", title: "4 Ateliers thématiques", type: "workshop" },
            { time: "12h45-15h00", title: "Cérémonie de clôture", type: "ceremony" }
        ]
    }
];

export const speakers = [
    {
        name: "Mame Cheikh Ahmed Tidiane SY",
        role: "Invité d'honneur",
        type: "keynote",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/capitaine_gallery.jpg"
    },
    {
        name: "Professeur Djiby DIAKHATÉ",
        role: "Conférencier - Sociologue",
        type: "keynote",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/djiby_diakhate_gallery.jpg"
    },
    {
        name: "M. Babacar DIOP",
        role: "Maire Thiès-Ouest",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/babacar_diop_maire_gallery.jpg"
    },
    {
        name: "Dr Mamadou DJITTÉ",
        role: "Maire Thiès-Est",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/dr_mamadou_djite_maire_gallery.jpg"
    },
    {
        name: "Responsables DMWM",
        role: "Autorités Religieuses",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/responsables_dmwm_gallery.jpg"
    }
];

export const projects = [
    { author: "Coumba THIAW", title: "Production de plantes aromatiques", position: "1er Prix", color: "text-amber-500 bg-amber-50 border-amber-200" },
    { author: "Harouna DIA", title: "Conception de séchoirs solaires", position: "2ème Prix", color: "text-slate-500 bg-slate-100 border-slate-200" },
    { author: "Mamadou NDIAYE", title: "Espace maraîcher intelligent", position: "3ème Prix", color: "text-orange-700 bg-orange-50 border-orange-200" }
];

export const colloqueSubtitles = [
    "Synergie Pluridisciplinaire, Horizons Multiples...",
    "Comment Bâtir un Avenir Meilleur ?"
];
