export interface RelatedSource {
  id: number;
  title: string;
  source: string;
  date: string;
  score: number;
}

export interface EvaluationMetrics {
  sourcesAnalyzed: number;
  expertsReviewed: number;
  factChecks: number;
  crossSourceAgreement: number;
  informationConsistency: number;
  sourceQuality: number;
  expertVerification: number;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  source: string;
  score: number;
  date: string;
  category: string;
  author?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  isVerified?: boolean;
  relatedSources: RelatedSource[];
  evaluationMetrics: EvaluationMetrics;
}

export const articles: Record<number, Article> = {
  1: {
    id: 1,
    title: 'Nouvelle avancée en IA générative',
    description: 'Des chercheurs ont annoncé une avancée majeure dans les modèles de langage multi-modaux, ouvrant de nouvelles possibilités pour l\'analyse d\'images et de texte simultanément.',
    fullContent: `Des chercheurs ont annoncé une avancée majeure dans les modèles de langage multi-modaux, ouvrant de nouvelles possibilités pour l'analyse d'images et de texte simultanément. Cette percée représente un pas significatif dans l'évolution de l'intelligence artificielle générative.

Selon les experts du domaine, cette nouvelle génération de modèles sera capable de traiter et d'analyser des informations visuelles et textuelles de manière plus précise et efficace que jamais. Les applications potentielles sont nombreuses, allant de la traduction automatique à la recherche scientifique.

Cette avancée a été possible grâce aux collaborations entre plusieurs instituts de recherche de premier plan et aux progrès réalisés dans l'optimisation des algorithmes d'apprentissage profond.`,
    source: 'TechNews Daily',
    score: 82,
    date: '2 janvier 2025',
    category: 'Technologie',
    author: 'Marie Dupont',
    mediaUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 101,
        title: 'AI Breakthroughs: Multi-modal Models Transform Tech',
        source: 'Tech Review Weekly',
        date: '2 janvier 2025',
        score: 85,
      },
      {
        id: 102,
        title: 'Prochaine génération de modèles d\'IA',
        source: 'Science et Innovation',
        date: '1 janvier 2025',
        score: 80,
      },
      {
        id: 103,
        title: 'Les défis de l\'IA générative en 2025',
        source: 'Digital Future',
        date: '31 décembre 2024',
        score: 75,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 12,
      expertsReviewed: 8,
      factChecks: 15,
      crossSourceAgreement: 87,
      informationConsistency: 92,
      sourceQuality: 88,
      expertVerification: 85,
    },
  },
  2: {
    id: 2,
    title: 'Les défis de la transition énergétique',
    description: 'Une étude menée par l\'Institut Mondial d\'Énergie analyse les obstacles majeurs à la transition vers les énergies renouvelables et propose des solutions innovantes.',
    fullContent: `Une étude menée par l'Institut Mondial d'Énergie analyse les obstacles majeurs à la transition vers les énergies renouvelables et propose des solutions innovantes.

L'étude révèle que malgré les avancées technologiques significatives, plusieurs défis restent à surmonter pour accélérer la transition énergétique mondiale. Les experts soulignent l'importance d'une approche multidimensionnelle impliquant gouvernements, entreprises et citoyens.

Les solutions proposées incluent des investissements massifs dans les infrastructures, le développement de nouvelles technologies de stockage d'énergie, et la mise en place de politiques incitatives pour encourager l'adoption des énergies renouvelables.`,
    source: 'Éco Observer',
    score: 78,
    date: '1 janvier 2025',
    category: 'Environnement',
    author: 'Jean Martin',
    mediaUrl: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 201,
        title: 'Renewable Energy: Progress and Challenges',
        source: 'Global Energy Review',
        date: '1 janvier 2025',
        score: 80,
      },
      {
        id: 202,
        title: 'Transition énergétique: les enjeux de 2025',
        source: 'Énergie Verte Magazine',
        date: '31 décembre 2024',
        score: 76,
      },
      {
        id: 203,
        title: 'Innovation et durabilité énergétique',
        source: 'Sustainable Tech',
        date: '30 décembre 2024',
        score: 74,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 10,
      expertsReviewed: 6,
      factChecks: 12,
      crossSourceAgreement: 82,
      informationConsistency: 88,
      sourceQuality: 85,
      expertVerification: 80,
    },
  },
  3: {
    id: 3,
    title: 'Innovation médicale: nouveau traitement approuvé',
    description: 'Un nouveau traitement pour une maladie génétique rare a reçu l\'approbation des autorités sanitaires après des essais cliniques concluants.',
    fullContent: `Un nouveau traitement pour une maladie génétique rare a reçu l'approbation des autorités sanitaires après des essais cliniques concluants. Cette approbation représente un moment crucial pour les patients atteints de cette condition.

Les essais cliniques ont démontré une efficacité remarquable, avec plus de 85% des patients montrant des améliorations significatives de leurs symptômes. Le traitement utilise une approche révolutionnaire basée sur la thérapie génique.

Les chercheurs estiment que ce précédent pourrait ouvrir la voie à de nouveaux traitements pour d'autres maladies génétiques rares, offrant de l'espoir à des millions de patients dans le monde.`,
    source: 'Health Science Review',
    score: 88,
    date: '31 décembre 2024',
    category: 'Santé',
    author: 'Dr. Sophie Leclerc',
    mediaUrl: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 301,
        title: 'Gene Therapy Breakthrough: FDA Approval',
        source: 'Medical Times',
        date: '31 décembre 2024',
        score: 90,
      },
      {
        id: 302,
        title: 'Nouvelle thérapie génique approuvée',
        source: 'Médecine Moderne',
        date: '31 décembre 2024',
        score: 87,
      },
      {
        id: 303,
        title: 'L\'avenir des traitements génétiques',
        source: 'Science Santé',
        date: '30 décembre 2024',
        score: 82,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 15,
      expertsReviewed: 10,
      factChecks: 18,
      crossSourceAgreement: 91,
      informationConsistency: 94,
      sourceQuality: 92,
      expertVerification: 90,
    },
  },
  4: {
    id: 4,
    title: 'Économie mondiale: perspectives 2025',
    description: 'Les analystes économiques partagent leurs prévisions pour l\'année à venir, avec des estimations de croissance et des risques identifiés.',
    fullContent: `Les analystes économiques partagent leurs prévisions pour l'année à venir, avec des estimations de croissance et des risques identifiés.

Les perspectives pour 2025 sont mitigées, avec une croissance économique mondiale attendue autour de 2.5%, selon les prévisions des principales institutions financières. Cependant, plusieurs facteurs géopolitiques et économiques pourraient influencer ces prévisions.

Les analystes soulignent l'importance de surveiller de près l'évolution des taux d'intérêt, les tensions commerciales internationales, et l'impact de la transition énergétique sur les économies mondiales.`,
    source: 'Global Finance Weekly',
    score: 65,
    date: '30 décembre 2024',
    category: 'Économie',
    author: 'Pierre Blanc',
    mediaUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    mediaType: 'image',
    isVerified: false,
    relatedSources: [
      {
        id: 401,
        title: 'World Economic Outlook 2025',
        source: 'IMF Analytics',
        date: '30 décembre 2024',
        score: 68,
      },
      {
        id: 402,
        title: 'Perspectives économiques mondiales',
        source: 'Analyse Économique',
        date: '29 décembre 2024',
        score: 66,
      },
      {
        id: 403,
        title: 'Risques économiques en 2025',
        source: 'Finance Observer',
        date: '28 décembre 2024',
        score: 62,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 8,
      expertsReviewed: 5,
      factChecks: 10,
      crossSourceAgreement: 75,
      informationConsistency: 78,
      sourceQuality: 72,
      expertVerification: 70,
    },
  },
  5: {
    id: 5,
    title: 'Blockchain et crypto-monnaies: révolution financière',
    description: 'L\'adoption croissante de la technologie blockchain transforme le secteur financier avec de nouvelles opportunités et défis réglementaires.',
    fullContent: `L'adoption croissante de la technologie blockchain transforme le secteur financier avec de nouvelles opportunités et défis réglementaires.

Les institutions financières traditionnelles commencent à intégrer la technologie blockchain dans leurs opérations, reconnaissant son potentiel pour améliorer la transparence, réduire les coûts et accélérer les transactions.

Cependant, les régulateurs du monde entier travaillent à établir des cadres juridiques appropriés pour encadrer cette technologie émergente tout en protégeant les consommateurs et en maintenant la stabilité financière.`,
    source: 'Crypto Finance Today',
    score: 72,
    date: '3 janvier 2025',
    category: 'Technologie',
    author: 'Alexandre Rousseau',
    mediaUrl: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 501,
        title: 'Blockchain Adoption in Banking Sector',
        source: 'FinTech Review',
        date: '3 janvier 2025',
        score: 75,
      },
      {
        id: 502,
        title: 'Régulation des crypto-monnaies en Europe',
        source: 'Finance Digitale',
        date: '2 janvier 2025',
        score: 70,
      },
      {
        id: 503,
        title: 'L\'avenir de la finance décentralisée',
        source: 'Blockchain Magazine',
        date: '1 janvier 2025',
        score: 68,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 11,
      expertsReviewed: 7,
      factChecks: 13,
      crossSourceAgreement: 80,
      informationConsistency: 84,
      sourceQuality: 78,
      expertVerification: 76,
    },
  },
  6: {
    id: 6,
    title: 'Changement climatique: rapport alarmant de l\'ONU',
    description: 'Le dernier rapport des Nations Unies sur le climat révèle une accélération du réchauffement climatique et appelle à des actions urgentes.',
    fullContent: `Le dernier rapport des Nations Unies sur le climat révèle une accélération du réchauffement climatique et appelle à des actions urgentes.

Les données scientifiques montrent que la température mondiale a augmenté plus rapidement que prévu, avec des conséquences déjà visibles sur les écosystèmes et les populations humaines. Les événements climatiques extrêmes deviennent plus fréquents et plus intenses.

Les experts recommandent une réduction drastique des émissions de gaz à effet de serre d'ici 2030 pour limiter le réchauffement à 1.5°C et éviter les impacts les plus catastrophiques du changement climatique.`,
    source: 'Climate Action News',
    score: 92,
    date: '4 janvier 2025',
    category: 'Environnement',
    author: 'Émilie Verdier',
    mediaUrl: 'https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 601,
        title: 'UN Climate Report: Urgent Action Needed',
        source: 'Global Climate Watch',
        date: '4 janvier 2025',
        score: 94,
      },
      {
        id: 602,
        title: 'Réchauffement climatique: les dernières données',
        source: 'Science Climat',
        date: '3 janvier 2025',
        score: 90,
      },
      {
        id: 603,
        title: 'Solutions pour limiter le réchauffement',
        source: 'Éco Solutions',
        date: '3 janvier 2025',
        score: 86,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 18,
      expertsReviewed: 12,
      factChecks: 22,
      crossSourceAgreement: 95,
      informationConsistency: 96,
      sourceQuality: 94,
      expertVerification: 93,
    },
  },
  7: {
    id: 7,
    title: 'Cybersécurité: nouvelle vague d\'attaques sophistiquées',
    description: 'Les experts en sécurité informatique alertent sur une augmentation des cyberattaques ciblant les infrastructures critiques et les entreprises.',
    fullContent: `Les experts en sécurité informatique alertent sur une augmentation des cyberattaques ciblant les infrastructures critiques et les entreprises.

Les attaquants utilisent des techniques de plus en plus sophistiquées, notamment l'intelligence artificielle et l'apprentissage automatique, pour contourner les systèmes de défense traditionnels. Les ransomwares restent une menace majeure pour les organisations de toutes tailles.

Les spécialistes recommandent une approche de sécurité multicouche, incluant la formation des employés, la mise à jour régulière des systèmes, et l'adoption de solutions de détection avancées basées sur l'IA.`,
    source: 'CyberSec Daily',
    score: 85,
    date: '5 janvier 2025',
    category: 'Technologie',
    author: 'Thomas Bernard',
    mediaUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 701,
        title: 'Rise in Sophisticated Cyber Attacks',
        source: 'Security Tech Review',
        date: '5 janvier 2025',
        score: 88,
      },
      {
        id: 702,
        title: 'Ransomware: menace croissante en 2025',
        source: 'InfoSec Magazine',
        date: '4 janvier 2025',
        score: 84,
      },
      {
        id: 703,
        title: 'IA et cybersécurité: arme à double tranchant',
        source: 'Tech Security',
        date: '4 janvier 2025',
        score: 81,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 14,
      expertsReviewed: 9,
      factChecks: 16,
      crossSourceAgreement: 89,
      informationConsistency: 91,
      sourceQuality: 87,
      expertVerification: 86,
    },
  },
  8: {
    id: 8,
    title: 'Exploration spatiale: mission réussie vers Mars',
    description: 'Une nouvelle mission spatiale internationale a réussi à poser un rover avancé sur Mars, ouvrant de nouvelles perspectives pour la recherche scientifique.',
    fullContent: `Une nouvelle mission spatiale internationale a réussi à poser un rover avancé sur Mars, ouvrant de nouvelles perspectives pour la recherche scientifique.

Le rover, équipé d'instruments scientifiques de pointe, a pour mission de rechercher des traces de vie passée et d'étudier la géologie martienne. Cette mission représente une collaboration sans précédent entre plusieurs agences spatiales.

Les premières images transmises par le rover révèlent des formations géologiques fascinantes qui pourraient fournir des indices sur l'histoire de l'eau sur Mars et la possibilité d'une vie microbienne ancienne.`,
    source: 'Space Exploration Today',
    score: 90,
    date: '6 janvier 2025',
    category: 'Science',
    author: 'Dr. Claire Fontaine',
    mediaUrl: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 801,
        title: 'Mars Rover Landing: Historic Achievement',
        source: 'Space Science Journal',
        date: '6 janvier 2025',
        score: 92,
      },
      {
        id: 802,
        title: 'Mission Mars: premiers résultats',
        source: 'Astronomie Moderne',
        date: '6 janvier 2025',
        score: 89,
      },
      {
        id: 803,
        title: 'Recherche de vie sur Mars: nouvelles pistes',
        source: 'Science Espace',
        date: '5 janvier 2025',
        score: 87,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 16,
      expertsReviewed: 11,
      factChecks: 20,
      crossSourceAgreement: 93,
      informationConsistency: 95,
      sourceQuality: 91,
      expertVerification: 89,
    },
  },
  9: {
    id: 9,
    title: 'Santé numérique: applications médicales révolutionnaires',
    description: 'Les applications de santé numérique transforment la façon dont les patients gèrent leur santé et interagissent avec les professionnels médicaux.',
    fullContent: `Les applications de santé numérique transforment la façon dont les patients gèrent leur santé et interagissent avec les professionnels médicaux.

De nouvelles applications utilisent l'intelligence artificielle pour fournir des diagnostics préliminaires, surveiller les conditions chroniques, et personnaliser les plans de traitement. La télémédecine continue de se développer, offrant un accès aux soins dans les zones rurales.

Les experts soulignent l'importance de la protection des données de santé et de la validation clinique rigoureuse de ces technologies avant leur déploiement à grande échelle.`,
    source: 'Digital Health Review',
    score: 80,
    date: '7 janvier 2025',
    category: 'Santé',
    author: 'Dr. Marc Dubois',
    mediaUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 901,
        title: 'AI in Healthcare: Revolutionary Apps',
        source: 'MedTech Innovation',
        date: '7 janvier 2025',
        score: 83,
      },
      {
        id: 902,
        title: 'Télémédecine: bilan et perspectives',
        source: 'Santé Connectée',
        date: '6 janvier 2025',
        score: 79,
      },
      {
        id: 903,
        title: 'Protection des données de santé',
        source: 'Privacy Health',
        date: '6 janvier 2025',
        score: 76,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 13,
      expertsReviewed: 8,
      factChecks: 14,
      crossSourceAgreement: 85,
      informationConsistency: 87,
      sourceQuality: 83,
      expertVerification: 81,
    },
  },
  10: {
    id: 10,
    title: 'Éducation en ligne: l\'avenir de l\'apprentissage',
    description: 'Les plateformes d\'éducation en ligne connaissent une croissance explosive, redéfinissant l\'accès à l\'éducation et les méthodes d\'apprentissage.',
    fullContent: `Les plateformes d'éducation en ligne connaissent une croissance explosive, redéfinissant l'accès à l'éducation et les méthodes d'apprentissage.

Les technologies d'apprentissage adaptatif utilisent l'IA pour personnaliser le contenu éducatif en fonction des besoins individuels de chaque étudiant. Les cours en ligne offrent une flexibilité sans précédent et démocratisent l'accès à l'éducation de qualité.

Cependant, les défis persistent concernant l'engagement des étudiants, la qualité pédagogique, et la réduction de la fracture numérique pour garantir un accès équitable à tous.`,
    source: 'EdTech Weekly',
    score: 76,
    date: '8 janvier 2025',
    category: 'Éducation',
    author: 'Sophie Moreau',
    mediaUrl: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    mediaType: 'image',
    isVerified: true,
    relatedSources: [
      {
        id: 1001,
        title: 'Online Learning: The Future of Education',
        source: 'Education Innovation',
        date: '8 janvier 2025',
        score: 78,
      },
      {
        id: 1002,
        title: 'IA et apprentissage personnalisé',
        source: 'Pédagogie Numérique',
        date: '7 janvier 2025',
        score: 75,
      },
      {
        id: 1003,
        title: 'Fracture numérique en éducation',
        source: 'Accès Éducation',
        date: '7 janvier 2025',
        score: 72,
      },
    ],
    evaluationMetrics: {
      sourcesAnalyzed: 9,
      expertsReviewed: 6,
      factChecks: 11,
      crossSourceAgreement: 79,
      informationConsistency: 82,
      sourceQuality: 77,
      expertVerification: 74,
    },
  },
};

// Recent searches mock data
export const recentSearches: string[] = [
  'IA générative',
  'Transition énergétique',
  'Innovation médicale',
  'Économie mondiale',
  'Technologie blockchain',
  'Changement climatique',
  'Crypto-monnaies',
  'Santé numérique',
];
