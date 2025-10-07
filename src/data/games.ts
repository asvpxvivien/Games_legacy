export interface Game {
  id: string;
  title: string;
  year: number;
  cover: string;
  studio: string;
  publisher: string;
  description: string;
  impact: "Légendaire" | "Iconique" | "Inoubliable" | "Culte";
  genre: string[];
  platforms: string[];
  trailer?: string;
  tags: string[];
}

import witcher3Cover from "../assets/covers/witcher3.jpg";
import bloodborneCover from "../assets/covers/bloodborne.jpg";
import botwCover from "../assets/covers/botw.jpg";
import persona5Cover from "../assets/covers/persona5.jpg";
import gow2018Cover from "../assets/covers/gow2018.jpg";
import eldenringCover from "../assets/covers/eldenring.jpg";
import bg3Cover from "../assets/covers/bg3.jpg";
import hadesCover from "../assets/covers/hades.jpg";

export const games: Game[] = [
  {
    id: "witcher3",
    title: "The Witcher 3: Wild Hunt",
    year: 2015,
    cover: witcher3Cover,
    studio: "CD Projekt Red",
    publisher: "CD Projekt",
    description: "Une épopée RPG magistrale qui redéfinit les standards du genre. Incarnez Geralt de Riv dans sa quête pour retrouver Ciri à travers un monde ouvert d'une richesse inégalée. Chaque choix compte, chaque quête raconte une histoire mémorable.",
    impact: "Légendaire",
    genre: ["RPG", "Open World"],
    platforms: ["PC", "PS4", "Xbox One", "Switch"],
    trailer: "https://www.youtube.com/watch?v=c0i88t0Kacs",
    tags: ["Narratif", "Choix moraux", "Monstres", "Médiéval-Fantastique"]
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    year: 2015,
    cover: bloodborneCover,
    studio: "FromSoftware",
    publisher: "Sony",
    description: "Un chef-d'œuvre gothique horrifique de FromSoftware. Explorez Yharnam, une ville maudite peuplée de créatures cauchemardesques. L'action rapide et impitoyable redéfinit la formule Souls dans une ambiance lovecraftienne inoubliable.",
    impact: "Légendaire",
    genre: ["Action-RPG", "Souls-like"],
    platforms: ["PS4", "PS5"],
    trailer: "https://www.youtube.com/watch?v=G203e1HhixY",
    tags: ["Difficulté", "Horreur", "Boss épiques", "Victorien"]
  },
  {
    id: "overwatch",
    title: "Overwatch",
    year: 2016,
    cover: "/api/placeholder/400/600",
    studio: "Blizzard Entertainment",
    publisher: "Blizzard",
    description: "Le hero shooter qui a révolutionné le genre. 30+ héros uniques, du gameplay nerveux et accessible, et une direction artistique colorée et inspirante. Overwatch a créé une nouvelle ère pour les FPS compétitifs.",
    impact: "Iconique",
    genre: ["FPS", "Hero Shooter"],
    platforms: ["PC", "PS4", "Xbox One", "Switch"],
    trailer: "https://www.youtube.com/watch?v=FqnKB22pOC0",
    tags: ["Multijoueur", "Compétitif", "Héros", "Team-based"]
  },
  {
    id: "doom2016",
    title: "DOOM",
    year: 2016,
    cover: "/api/placeholder/400/600",
    studio: "id Software",
    publisher: "Bethesda",
    description: "Le retour magistral de la légende du FPS. Action ultra-violente, rythme effréné, et une OST metal dévastatrice. DOOM 2016 prouve que les classiques peuvent être réinventés avec brio.",
    impact: "Iconique",
    genre: ["FPS", "Action"],
    platforms: ["PC", "PS4", "Xbox One", "Switch"],
    trailer: "https://www.youtube.com/watch?v=7VK7pjNvJkw",
    tags: ["Rétro-moderne", "Action", "Violence", "Metal"]
  },
  {
    id: "botw",
    title: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    cover: botwCover,
    studio: "Nintendo",
    publisher: "Nintendo",
    description: "Une réinvention totale de la formule Zelda. Exploration absolue, liberté totale, physique interactive. BotW établit les nouveaux standards du jeu en monde ouvert avec une direction artistique intemporelle.",
    impact: "Légendaire",
    genre: ["Action-Aventure", "Open World"],
    platforms: ["Switch", "Wii U"],
    trailer: "https://www.youtube.com/watch?v=zw47_q9wbBE",
    tags: ["Exploration", "Liberté", "Puzzle", "Aventure"]
  },
  {
    id: "persona5",
    title: "Persona 5",
    year: 2017,
    cover: persona5Cover,
    studio: "Atlus",
    publisher: "Atlus",
    description: "Le JRPG le plus stylé de tous les temps. Interface audacieuse, OST jazz-funk électrisante, narration captivante sur une bande de justiciers lycéens. Un tour de force artistique et ludique.",
    impact: "Légendaire",
    genre: ["JRPG", "Social Sim"],
    platforms: ["PS3", "PS4", "PS5"],
    trailer: "https://www.youtube.com/watch?v=ViF4NsJDZfQ",
    tags: ["Style", "Narration", "Tour par tour", "Tokyo"]
  },
  {
    id: "cuphead",
    title: "Cuphead",
    year: 2017,
    cover: "/api/placeholder/400/600",
    studio: "Studio MDHR",
    publisher: "Studio MDHR",
    description: "Un run & gun dessiné à la main, inspiré des cartoons des années 30. Chaque frame est une œuvre d'art, le gameplay est exigeant mais juste. Un hommage visuel et ludique magistral.",
    impact: "Culte",
    genre: ["Run & Gun", "Boss Rush"],
    platforms: ["PC", "Xbox One", "Switch", "PS4"],
    trailer: "https://www.youtube.com/watch?v=NN-9SQXoi50",
    tags: ["Cartoon", "Difficulté", "Boss", "Vintage"]
  },
  {
    id: "gow2018",
    title: "God of War",
    year: 2018,
    cover: gow2018Cover,
    studio: "Santa Monica Studio",
    publisher: "Sony",
    description: "Kratos revient transformé dans ce soft reboot magistral. Plan-séquence, combat rapproché viscéral, relation père-fils touchante. God of War 2018 transcende l'action-aventure avec maturité et émotions.",
    impact: "Légendaire",
    genre: ["Action-Aventure", "Hack & Slash"],
    platforms: ["PS4", "PS5", "PC"],
    trailer: "https://www.youtube.com/watch?v=K0u_kAWLJOA",
    tags: ["Mythologie nordique", "Narration", "Combat", "Père-fils"]
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    year: 2018,
    cover: "/api/placeholder/400/600",
    studio: "Rockstar Games",
    publisher: "Rockstar",
    description: "L'apogée du monde ouvert immersif. Chaque détail compte dans ce Far West crépusculaire. RDR2 offre l'expérience la plus cinématographique et vivante jamais créée dans un jeu vidéo.",
    impact: "Légendaire",
    genre: ["Action-Aventure", "Open World"],
    platforms: ["PS4", "Xbox One", "PC"],
    trailer: "https://www.youtube.com/watch?v=gmA6MrX81z4",
    tags: ["Western", "Immersion", "Narration", "Détails"]
  },
  {
    id: "sekiro",
    title: "Sekiro: Shadows Die Twice",
    year: 2019,
    cover: "/api/placeholder/400/600",
    studio: "FromSoftware",
    publisher: "Activision",
    description: "FromSoftware réinvente sa formule avec un système de combat au sabre révolutionnaire. Chaque duel est une danse mortelle où le timing est roi. Un défi intense dans un Japon féodal sombre et magnifique.",
    impact: "Légendaire",
    genre: ["Action-Aventure", "Souls-like"],
    platforms: ["PC", "PS4", "Xbox One"],
    trailer: "https://www.youtube.com/watch?v=4OgoTZXPACo",
    tags: ["Samouraï", "Difficulté", "Précision", "Japon"]
  },
  {
    id: "control",
    title: "Control",
    year: 2019,
    cover: "/api/placeholder/400/600",
    studio: "Remedy Entertainment",
    publisher: "505 Games",
    description: "Un thriller surnaturel qui mélange SCP, Twin Peaks et X-Files. Pouvoirs télékynétiques, architecture brutaliste vivante, et une narration cryptique fascinante. Control est une expérience unique et audacieuse.",
    impact: "Culte",
    genre: ["Action-Aventure", "Surnaturel"],
    platforms: ["PC", "PS4", "Xbox One", "PS5", "Xbox Series"],
    trailer: "https://www.youtube.com/watch?v=PT5yMfC9LQM",
    tags: ["Surnaturel", "Pouvoirs", "Mystère", "Atmosphère"]
  },
  {
    id: "hades",
    title: "Hades",
    year: 2020,
    cover: hadesCover,
    studio: "Supergiant Games",
    publisher: "Supergiant Games",
    description: "Le roguelike qui a conquis tous les joueurs. Gameplay parfait, narration qui s'entrelace avec chaque run, personnages charismatiques, et une OST exceptionnelle. Hades redéfinit l'accessibilité du genre.",
    impact: "Légendaire",
    genre: ["Roguelike", "Action"],
    platforms: ["PC", "Switch", "PS4", "PS5", "Xbox"],
    trailer: "https://www.youtube.com/watch?v=91t0ha9x0AE",
    tags: ["Roguelike", "Mythologie grecque", "Rejouabilité", "Narration"]
  },
  {
    id: "tlou2",
    title: "The Last of Us Part II",
    year: 2020,
    cover: "/api/placeholder/400/600",
    studio: "Naughty Dog",
    publisher: "Sony",
    description: "Suite ambitieuse et polarisante qui repousse les limites narratives du jeu vidéo. Violence viscérale, thèmes matures, et une réalisation technique époustouflante. Une œuvre courageuse qui divise autant qu'elle fascine.",
    impact: "Iconique",
    genre: ["Action-Aventure", "Survival"],
    platforms: ["PS4", "PS5"],
    trailer: "https://www.youtube.com/watch?v=eOiUtRF8k28",
    tags: ["Post-apocalyptique", "Narration", "Émotions", "Violence"]
  },
  {
    id: "ittakestwo",
    title: "It Takes Two",
    year: 2021,
    cover: "/api/placeholder/400/600",
    studio: "Hazelight Studios",
    publisher: "EA",
    description: "Le meilleur jeu coopératif jamais créé. Chaque niveau réinvente le gameplay, l'imagination déborde, et l'aventure sur le divorce devient une célébration du jeu à deux. Josef Fares frappe encore.",
    impact: "Iconique",
    genre: ["Action-Aventure", "Coop"],
    platforms: ["PC", "PS4", "PS5", "Xbox"],
    trailer: "https://www.youtube.com/watch?v=GAj1DRLRa8c",
    tags: ["Coopération", "Créativité", "Narration", "Duo"]
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    year: 2022,
    cover: eldenringCover,
    studio: "FromSoftware",
    publisher: "Bandai Namco",
    description: "La fusion parfaite entre Souls et monde ouvert. Co-écrit avec George R.R. Martin, Elden Ring offre une liberté d'exploration inédite tout en conservant la difficulté signature. Un phénomène culturel du jeu vidéo moderne.",
    impact: "Légendaire",
    genre: ["Action-RPG", "Open World"],
    platforms: ["PC", "PS4", "PS5", "Xbox"],
    trailer: "https://www.youtube.com/watch?v=E3Huy2cdih0",
    tags: ["Dark Fantasy", "Exploration", "Difficulté", "Boss"]
  },
  {
    id: "bg3",
    title: "Baldur's Gate 3",
    year: 2023,
    cover: bg3Cover,
    studio: "Larian Studios",
    publisher: "Larian Studios",
    description: "Le RPG ultime qui réécrit les règles du genre. Liberté narrative absolue, systèmes D&D fidèles, romance mature, et une qualité d'écriture digne de romans. BG3 établit un nouveau standard impossible à ignorer.",
    impact: "Légendaire",
    genre: ["CRPG", "RPG"],
    platforms: ["PC", "PS5", "Xbox Series"],
    trailer: "https://www.youtube.com/watch?v=OcP0WdH7rTs",
    tags: ["D&D", "Narration", "Liberté", "Tactique"]
  },
  {
    id: "totk",
    title: "The Legend of Zelda: Tears of the Kingdom",
    year: 2023,
    cover: "/api/placeholder/400/600",
    studio: "Nintendo",
    publisher: "Nintendo",
    description: "Nintendo repousse encore les limites avec des mécaniques de construction révolutionnaires. TotK surpasse son prédécesseur en offrant une créativité sans bornes et une exploration verticale fascinante.",
    impact: "Légendaire",
    genre: ["Action-Aventure", "Open World"],
    platforms: ["Switch"],
    trailer: "https://www.youtube.com/watch?v=uHGShqcAHlQ",
    tags: ["Construction", "Exploration", "Créativité", "Puzzle"]
  },
  {
    id: "alanwake2",
    title: "Alan Wake 2",
    year: 2023,
    cover: "/api/placeholder/400/600",
    studio: "Remedy Entertainment",
    publisher: "Epic Games",
    description: "Remedy crée son chef-d'œuvre horrifique. Survival horror psychologique vertigineux qui mélange réalité et fiction. Visuellement époustouflant, narrativement audacieux, Alan Wake 2 est une expérience artistique unique.",
    impact: "Culte",
    genre: ["Survival Horror", "Thriller"],
    platforms: ["PC", "PS5", "Xbox Series"],
    trailer: "https://www.youtube.com/watch?v=dlQ3adJFx4E",
    tags: ["Horreur", "Narration", "Atmosphère", "Mystère"]
  }
];