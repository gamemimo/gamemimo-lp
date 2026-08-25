export interface GameCharacter {
  name: string;
  role: string;
  portrait: string;
  personality: string;
  signatureAbility: string;
  activityQuote: string;
}

export interface GameActivity {
  title: string;
  description: string;
  image: string;
}

export interface GameItem {
  id: string;
  title: string;
  genre: string;
  year: number;
  category: 'highlight-2025-2026' | '2027' | 'holiday' | 'instant-web';
  badge: string;
  badgeColor: string;
  releaseQuarter: string;
  engine: string;
  platforms: string[];
  description: string;
  usp: string;
  rating: number;
  players: string;
  coverImage: string;
  hasPlayableWeb: boolean;
  demoUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  tags: string[];
  featured?: boolean;
  characters?: GameCharacter[];
  activities?: GameActivity[];
}

export const GAMES_CATALOG: GameItem[] = [
  {
    id: "happy-farm",
    title: "Happy Farm: Cozy Harvest",
    genre: "Casual Farm & Town Sim",
    year: 2026,
    category: "highlight-2025-2026",
    badge: "2026 Highlight",
    badgeColor: "badge-success",
    releaseQuarter: "Q4 2026 (November)",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Relaxing autumn farm simulator featuring crop harvest loops, rustic bakery crafting, fluffy animal pens, and neighbor trading helicopter.",
    usp: "Offline-friendly farming with Disney-like pastel aesthetics and instant web-to-mobile cross-save.",
    rating: 4.9,
    players: "2.4M Wishlists",
    coverImage: "/images/game_happy_farm.png",
    hasPlayableWeb: true,
    demoUrl: "/games/happy-farm/",
    appStoreUrl: "https://apps.apple.com/app/happy-farm-cozy-harvest/id6400000001",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.happyfarm",
    tags: ["Farming", "Cozy", "Offline", "Crafting"],
    featured: true,
    characters: [
      {
        name: "Barnaby the Farmer",
        role: "Head Harvester & Orchard Keeper",
        portrait: "/images/characters/character_barnaby_farmer.png",
        personality: "Cheerful, hardworking, loves warm apple cider and morning sunshine.",
        signatureAbility: "Golden Harvest Boost (2x crop speed)",
        activityQuote: "Fresh morning dew on golden wheat! Time to fire up the bakery ovens!"
      },
      {
        name: "Pip the Fluffy Lamb",
        role: "Pasture Mascot & Wool Producer",
        portrait: "/images/character_baby_dragon.png",
        personality: "Playful, gentle, follows the tractor everywhere.",
        signatureAbility: "Rainbow Fleece (Bonus crafting materials)",
        activityQuote: "Baa! The clover patch is ready for snacking!"
      }
    ],
    activities: [
      {
        title: "Golden Wheat & Pumpkin Harvesting",
        description: "Plant seasonal autumn crops, harvest ripe pumpkins with a single tap, and store wheat in the wooden barn.",
        image: "/images/game_happy_farm.png"
      },
      {
        title: "Rustic Bakery Bread & Pie Baking",
        description: "Combine fresh wheat and milk to bake golden croissants and warm pumpkin pies for village deliveries.",
        image: "/images/game_happy_farm.png"
      }
    ]
  },
  {
    id: "halloween-match3d",
    title: "Halloween Night: Spooky Sweets 3D",
    genre: "3D Tile Match & ASMR Sorting",
    year: 2026,
    category: "holiday",
    badge: "🎃 Halloween 2026",
    badgeColor: "badge-warning",
    releaseQuarter: "October 2026 (Halloween)",
    engine: "Unity 6 LTS (C# URP)",
    platforms: ["iOS", "Android", "Web"],
    description: "Tactile 3D goods sorting game filled with candy corn, glowing jack-o-lanterns, bubbling potion vials, and cute friendly ghost plushies.",
    usp: "Satisfying ASMR popping sounds with multi-layered tumbling 3D physics and festive Halloween maps.",
    rating: 4.8,
    players: "Special Event",
    coverImage: "/images/game_halloween_match.png",
    hasPlayableWeb: true,
    demoUrl: "/games/halloween-match/",
    appStoreUrl: "https://apps.apple.com/app/halloween-night-spooky-match3d/id6400000002",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.halloweenmatch3d",
    tags: ["Match-3D", "Halloween", "ASMR", "Physics"],
    featured: true,
    characters: [
      {
        name: "Luna the Teen Witch",
        role: "Magic Candy Enchantress & Guide",
        portrait: "/images/characters/character_luna_witch.png",
        personality: "Playful, sparkly teen witch in starry purple robes with a sweet tooth for candy corn.",
        signatureAbility: "Candy Magnet (Auto-sorts 3 identical sweets into tray)",
        activityQuote: "Abracadabra! Match three pumpkin treats before the witching hour!"
      }
    ],
    activities: [
      {
        title: "3D Shelf Goods Sorting",
        description: "Sort bubbling purple potions, smiling mini-pumpkins, and bat cookies into clean triple sets.",
        image: "/images/game_halloween_match.png"
      }
    ]
  },
  {
    id: "christmas-santa-merge",
    title: "Christmas Wonder: Santa's Gift Merge",
    genre: "Merge-2 & Cozy Holiday Renovation",
    year: 2026,
    category: "holiday",
    badge: "🎄 Christmas 2026",
    badgeColor: "badge-error",
    releaseQuarter: "December 2026 (XMas)",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Cozy holiday merge game restoring Santa's North Pole workshop, gingerbread cottages, and reindeer stables before Christmas Eve.",
    usp: "8x8 festive spawner board, heartwarming holiday storylines, and seasonal advent calendar daily rewards.",
    rating: 4.9,
    players: "Holiday Event",
    coverImage: "/images/game_santa_merge.png",
    hasPlayableWeb: true,
    demoUrl: "/games/christmas-merge/",
    appStoreUrl: "https://apps.apple.com/app/christmas-wonder-santa-merge/id6400000003",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.christmasmerge",
    tags: ["Merge-2", "Christmas", "Renovation", "Stories"],
    featured: true,
    characters: [
      {
        name: "Noel the Toymaker Elf",
        role: "Master Craftsman & Workshop Foreman",
        portrait: "/images/characters/character_noel_elf.png",
        personality: "Warm, jolly, master of wooden toy trains and peppermint treats.",
        signatureAbility: "Toy Box Surge (Spawns 5 mystery wrapped gift boxes)",
        activityQuote: "Only 12 days till Christmas Eve! Let's polish these wooden toy trains!"
      }
    ],
    activities: [
      {
        title: "North Pole Toy Workshop Merge",
        description: "Merge gingerbread cookies, golden bells, and toy train carriages to restore Santa's cozy hearth.",
        image: "/images/game_santa_merge.png"
      }
    ]
  },
  {
    id: "fashion-mie",
    title: "FashionMie: Winter Runway Stylist",
    genre: "Casual Fashion & Teen Dress-Up",
    year: 2026,
    category: "highlight-2025-2026",
    badge: "Winter 2026",
    badgeColor: "badge-secondary",
    releaseQuarter: "December 2026",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Anime fashion stylist simulator with skincare ASMR, luxury Parisian boutique wardrobe, winter runway outfit showdowns, and high-fashion postcard photo studio.",
    usp: "Zero-drift layered wardrobe system, client styling requests, and community runway voting.",
    rating: 4.8,
    players: "1.8M Stylists",
    coverImage: "/images/game_fashion_mie.png",
    hasPlayableWeb: true,
    demoUrl: "/games/fashion-mie/",
    appStoreUrl: "https://apps.apple.com/app/fashionmie-winter-runway/id6400000004",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.fashionmie",
    tags: ["Fashion", "Dress-up", "ASMR Makeup", "Runway"],
    featured: true,
    characters: [
      {
        name: "Mie Sato",
        role: "Lead Fashion Protagonist & Stylist",
        portrait: "/images/characters/character_mie_sato.png",
        personality: "Creative, chic, trendsetting, loves elegant coats and pastel berets.",
        signatureAbility: "Haute Couture Glow (Unlocks 5-star runway spotlight bonus)",
        activityQuote: "The winter runway awaits! Let's find the perfect wool coat and glitter handbag!"
      },
      {
        name: "Yuna Kim",
        role: "Rival Designer & Runway Critic",
        portrait: "/images/characters/character_yuna_kim.png",
        personality: "Perfectionist Korean designer with a sharp eye for color harmony, lilac tailoring, and luxury clutches.",
        signatureAbility: "Critique Boost (+15% VIP client tip bonus)",
        activityQuote: "Chic lines and impeccable tailoring—that's how you win the winter grand prix."
      }
    ],
    activities: [
      {
        title: "Parisian Salon Wardrobe Styling",
        description: "Mix and match designer trench coats, berets, and luxury handbags before the full-length gilded mirror.",
        image: "/images/game_fashion_mie.png"
      }
    ]
  },
  {
    id: "alien-blasted",
    title: "Alien Blasted: Cyber Arcade",
    genre: "Side-Scrolling Multi-Lane Alien Shooter",
    year: 2025,
    category: "instant-web",
    badge: "⚡ 2025 Web Hit",
    badgeColor: "badge-accent",
    releaseQuarter: "Available Now (Web)",
    engine: "React 19 + Pixi.js 8 (Vite)",
    platforms: ["Web Browser", "Mobile Web", "Playable Ads"],
    description: "Fast side-scrolling alien shooter where twin survivor legends Kael Voss (Railburst Carbine) and Nyra Sol (Helix SMG & Biotech Vials) shift across foreground and background street lanes to dodge, flank, and clear lime-green alien swarms in ruined neon megacities.",
    usp: "Glossy comic-book silhouettes, tactical multi-lane street traversal (W/S), instant hero swapping (Tab), and sub-second browser load times.",
    rating: 4.7,
    players: "500K Web Plays",
    coverImage: "/images/game_alien_blasted.png",
    hasPlayableWeb: true,
    demoUrl: "/games/alien-blasted/",
    appStoreUrl: "https://apps.apple.com/app/alien-blasted-cyber-arcade/id6400000005",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.alienblasted",
    tags: ["Action", "Side-Scroller", "Multi-Lane", "Pixi.js"],
    featured: true,
    characters: [
      {
        name: "Kael Voss",
        role: "Precision Vanguard (Railburst Carbine)",
        portrait: "/images/characters/character_kael_voss.png",
        personality: "Route-obsessed pathfinder with dry humor and rock-solid discipline under swarm pressure.",
        signatureAbility: "Overcharged Railburst (Pierces entire enemy street lane)",
        activityQuote: "Keep moving through the Neon Causeway. I'll cover the rear lane!"
      },
      {
        name: "Nyra Sol",
        role: "Aggressive Swarm Breaker (Helix SMG & Vials)",
        portrait: "/images/characters/character_nyra_sol.png",
        personality: "Charismatic, protective former street medic armed with stolen hybrid alien biotech.",
        signatureAbility: "Biotech Grenade Burst (Clears dense swarms in radius)",
        activityQuote: "They want the lower city? They'll have to get through my biotech SMG first!"
      }
    ],
    activities: [
      {
        title: "Neon Causeway Multi-Lane Combat",
        description: "Shift between foreground and background sidewalk lanes, jump over ruined taxis, and blast alien bugs.",
        image: "/images/game_alien_blasted.png"
      }
    ]
  },
  {
    id: "magic-merge-dragon",
    title: "Magic Merge: Dragon Sanctuary",
    genre: "Merge-2 & Dragon Breeding RPG",
    year: 2027,
    category: "2027",
    badge: "2027 Flagship",
    badgeColor: "badge-primary",
    releaseQuarter: "Q1 2027",
    engine: "Unity 6 LTS (C# URP)",
    platforms: ["iOS", "Android", "Steam"],
    description: "Restore floating celestial sky islands, merge glowing elemental eggs, and raise cute baby dragons into majestic celestial guardians.",
    usp: "Deep dragon collection & evolution system combined with streamlined casual merge-2 puzzle mechanics.",
    rating: 5.0,
    players: "Anticipated 2027",
    coverImage: "/images/game_magic_merge.png",
    hasPlayableWeb: false,
    appStoreUrl: "https://apps.apple.com/app/magic-merge-dragon-sanctuary/id6400000006",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.magicmergedragon",
    tags: ["Dragons", "Merge-2", "Magic", "Sanctuary"],
    featured: false,
    characters: [
      {
        name: "Draco the Celestial Hatchling",
        role: "Primary Companion & Island Guardian",
        portrait: "/images/character_baby_dragon.png",
        personality: "Playful, affectionate, loves shiny mana crystals and flying through pink sunset clouds.",
        signatureAbility: "Starlight Breath (Blesses tiles with instant merge boosts)",
        activityQuote: "Sparkle roar! The celestial sanctuary is glowing brighter today!"
      }
    ],
    activities: [
      {
        title: "Celestial Egg Hatching & Merge",
        description: "Merge glowing dragon eggs on floating sky islands to awaken newborn elemental companions.",
        image: "/images/game_magic_merge.png"
      }
    ]
  },
  {
    id: "triple-match-joy",
    title: "Triple Match Joy: Goods Master 3D",
    genre: "3D Tile Match & ASMR Sorting",
    year: 2027,
    category: "2027",
    badge: "2027 Upcoming",
    badgeColor: "badge-info",
    releaseQuarter: "Q1 2027",
    engine: "Unity 6 LTS (C# URP)",
    platforms: ["iOS", "Android"],
    description: "Clean and organize supermarket shelves packed with 300+ tactile 3D items, boba milk teas, pastel rainbow sodas, and cute plushies.",
    usp: "Ultra-satisfying ASMR sound design, hyper-casual 7-slot tray tension, and high micro-IAP conversion.",
    rating: 4.9,
    players: "3D ASMR",
    coverImage: "/images/game_triple_match_joy.png",
    hasPlayableWeb: false,
    appStoreUrl: "https://apps.apple.com/app/triple-match-joy-goods-master/id6400000007",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.triplematchjoy",
    tags: ["3D Match", "Goods Sort", "ASMR", "Relaxing"],
    featured: false,
    characters: [
      {
        name: "Boba Bear",
        role: "Sweet Shop Owner & Tidy Master",
        portrait: "/images/character_mimo_cat.png",
        personality: "Obsessed with neat rows of milk tea and rainbow sodas.",
        signatureAbility: "Shelf Vacuum (Instantly clears one crowded rack)",
        activityQuote: "Everything in its place, and three boba teas in a row!"
      }
    ],
    activities: [
      {
        title: "Boba & Sweet Shop 3D Organizing",
        description: "Match triple boba milk teas, rainbow sodas, and strawberry cakes to trigger celebratory fireworks.",
        image: "/images/game_triple_match_joy.png"
      }
    ]
  },
  {
    id: "kawaii-mart",
    title: "Kawaii Mart: Animal Supermarket",
    genre: "Cozy Idle Arcade & Tycoon",
    year: 2027,
    category: "2027",
    badge: "2027 Upcoming",
    badgeColor: "badge-success",
    releaseQuarter: "Q2 2027",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Top-down joystick harvesting and market stocking sim where cute bunny and kitten helpers run a bustling bakery & grocery store.",
    usp: "Active joystick collection transitioning into automated idle helper loops with high voluntary ad engagement.",
    rating: 4.8,
    players: "Idle Tycoon",
    coverImage: "/images/game_kawaii_mart.png",
    hasPlayableWeb: true,
    demoUrl: "/games/kawaii-mart/",
    appStoreUrl: "https://apps.apple.com/app/kawaii-mart-supermarket/id6400000008",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.kawaiimart",
    tags: ["Tycoon", "Cute Animals", "Idle Arcade", "Simulation"],
    featured: false,
    characters: [
      {
        name: "Bella Bunny",
        role: "Store Manager & Head Cashier",
        portrait: "/images/character_baby_dragon.png",
        personality: "Sweet, organized, wears a floral apron and greets every shopper with a warm smile.",
        signatureAbility: "Speed Checkout (+50% cashier speed during rush hour)",
        activityQuote: "Welcome to Kawaii Mart! Fresh carrots and cold boba are in aisle one!"
      },
      {
        name: "Mochi the Cat Helper",
        role: "Produce Stocker & Bakery Assistant",
        portrait: "/images/character_mimo_cat.png",
        personality: "Fast on his paws, balances apple baskets on his head with ease.",
        signatureAbility: "Stack Master (Doubles inventory carry limit)",
        activityQuote: "Apples restocked! Time to check on the fresh croissants!"
      }
    ],
    activities: [
      {
        title: "Aisle Stocking & Cashier Rush",
        description: "Ring up happy animal customers and keep the bakery and fruit displays full.",
        image: "/images/game_kawaii_mart.png"
      }
    ]
  },
  {
    id: "melody-paws",
    title: "Melody Paws: Kawaii Beat Arcade",
    genre: "Cozy Music & Rhythm Tap",
    year: 2027,
    category: "2027",
    badge: "2027 Upcoming",
    badgeColor: "badge-secondary",
    releaseQuarter: "Q2 2027",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Tap cute cat paws to the rhythm of popular lo-fi and upbeat pop melodies to feed kittens and collect pet outfits.",
    usp: "One-thumb rhythm control, viral TikTok song packs, and soothing visual aesthetics.",
    rating: 4.9,
    players: "Music & Cats",
    coverImage: "/images/game_melody_paws.png",
    hasPlayableWeb: true,
    demoUrl: "/games/melody-paws/",
    appStoreUrl: "https://apps.apple.com/app/melody-paws-kawaii-beat/id6400000009",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.melodypaws",
    tags: ["Music", "Rhythm", "Cats", "Lo-Fi"],
    featured: false,
    characters: [
      {
        name: "DJ Whiskers",
        role: "Rhythm Maestro & Lo-Fi Beatmaker",
        portrait: "/images/character_mimo_cat.png",
        personality: "Groovy, relaxed, wears neon glowing headphones and purrs to the bassline.",
        signatureAbility: "Purrfect Tempo (Extends combo grace period by 3 seconds)",
        activityQuote: "Feel the lo-fi chill! Tap along with the neon keyboard!"
      }
    ],
    activities: [
      {
        title: "Neon Rainbow Rhythm Lane Tapping",
        description: "Tap descending musical notes with cute fluffy kitten paws to unlock hit lo-fi vinyl records.",
        image: "/images/game_melody_paws.png"
      }
    ]
  },
  {
    id: "cooking-hero",
    title: "Cooking Hero: Gourmet World Tour",
    genre: "Time-Management Cooking Sim",
    year: 2027,
    category: "2027",
    badge: "2027 Upcoming",
    badgeColor: "badge-warning",
    releaseQuarter: "Q3 2027",
    engine: "Cocos Creator 3.8 (TypeScript)",
    platforms: ["iOS", "Android", "Web"],
    description: "Cook international delicacies across Tokyo sushi bars, Parisian patisseries, and New York food trucks with Chef Leo and his sous-chef kitten Basil under time-management excitement.",
    usp: "Fast-paced tap-and-serve combos with kitchen gadget upgrades, customer patience management, and cute animal diners.",
    rating: 4.8,
    players: "Chef Rush",
    coverImage: "/images/game_cooking_hero.png",
    hasPlayableWeb: false,
    appStoreUrl: "https://apps.apple.com/app/cooking-hero-world-tour/id6400000010",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.cookinghero",
    tags: ["Cooking", "Time-Management", "Restaurant", "Fast"],
    featured: false,
    characters: [
      {
        name: "Chef Leo",
        role: "Executive Master Chef & Patissier",
        portrait: "/images/character_mimo_cat.png",
        personality: "Enthusiastic French-Italian culinary prodigy with a curly mustache, tall white toque, and red neckerchief.",
        signatureAbility: "Frenzy Sizzle (Instantly completes all active stove orders)",
        activityQuote: "Bon Appétit! Three gourmet burgers and hot ramen on the pass!"
      },
      {
        name: "Basil the Kitten",
        role: "Sous-Chef & Ingredient Inspector",
        portrait: "/images/character_baby_dragon.png",
        personality: "Curious white calico kitten wearing a mini chef bandana who rings the service bell.",
        signatureAbility: "Golden Garnish (+25% bonus coin tip on served orders)",
        activityQuote: "Meow! The sushi rice is seasoned to perfection, Chef!"
      }
    ],
    activities: [
      {
        title: "High-Speed Sizzling Kitchen Rush",
        description: "Flip gourmet beef patties, roll fresh salmon nigiri, and simmer tonkotsu ramen while managing customer patience timers.",
        image: "/images/game_cooking_hero.png"
      }
    ]
  },
  {
    id: "nut-and-bolt",
    title: "Nut & Bolt: Cute Rescue Puzzle",
    genre: "Logic Physics & Screw Puzzle",
    year: 2027,
    category: "2027",
    badge: "2027 Upcoming",
    badgeColor: "badge-accent",
    releaseQuarter: "Q3 2027",
    engine: "Unity 6 LTS (C# URP)",
    platforms: ["iOS", "Android"],
    description: "Unscrew layered wooden planks and colored metal bolts in correct sequence to release trapped cute puppies and kittens and restore animal rescue sanctuaries.",
    usp: "Brain-teasing spatial physics puzzles paired with rewarding animal rescue meta-progression and realistic wooden tactile sounds.",
    rating: 4.7,
    players: "Physics Puzzle",
    coverImage: "/images/game_nut_and_bolt.png",
    hasPlayableWeb: false,
    appStoreUrl: "https://apps.apple.com/app/nut-bolt-cute-rescue/id6400000011",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.nutandbolt",
    tags: ["Puzzle", "Logic", "Physics", "Rescue"],
    featured: false,
    characters: [
      {
        name: "Emma the Inventor",
        role: "Master Engineer & Animal Rescuer",
        portrait: "/images/character_baby_dragon.png",
        personality: "Clever, energetic teenage mechanic in denim overalls, toolbelt, and yellow safety goggles on her forehead.",
        signatureAbility: "Magnetic Wrench (Instantly unscrews any stuck or locked bolt)",
        activityQuote: "Hold on little buddy! Check the gravity angle and unscrew the blue bolt first!"
      },
      {
        name: "Milo the Golden Pup",
        role: "Rescue Sanctuary Mascot",
        portrait: "/images/character_mimo_cat.png",
        personality: "Fluffy, wide-eyed golden retriever puppy who gives joyful tail wags when freed from puzzle cages.",
        signatureAbility: "Joyful Bark (Reveals the next optimal unscrewing move)",
        activityQuote: "Woof! Thank you Emma! Let's go help the kittens next!"
      }
    ],
    activities: [
      {
        title: "Tactile Wood & Metal Screw Puzzles",
        description: "Carefully remove threaded metallic screws in sequential order so wooden planks drop under gravity, opening cages for trapped pets.",
        image: "/images/game_nut_and_bolt.png"
      }
    ]
  },
  {
    id: "happy-city",
    title: "Happy City: Dream Metropolis",
    genre: "Isometric City Builder & Tycoon",
    year: 2027,
    category: "2027",
    badge: "2027 Grand Finale",
    badgeColor: "badge-primary",
    releaseQuarter: "Q4 2027",
    engine: "Unity 6 LTS (C# URP)",
    platforms: ["iOS", "Android", "Web"],
    description: "Build, zone, and customize a bustling 3D coastal metropolis with amusement parks, bullet trains, high-rise eco-towers, and joyful citizens under Mayor Penelope and her corgi mascot Sparky.",
    usp: "Sandbox creative freedom paired with light tycoon trade routes, transit planning, and cooperative mayor clubs.",
    rating: 4.9,
    players: "City Builder",
    coverImage: "/images/game_happy_city.png",
    hasPlayableWeb: false,
    appStoreUrl: "https://apps.apple.com/app/happy-city-dream-metropolis/id6400000012",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.gamemimo.happycity",
    tags: ["City Builder", "Tycoon", "Sandbox", "Multiplayer"],
    featured: false,
    characters: [
      {
        name: "Mayor Penelope",
        role: "Metropolis Chief Architect & Mayor",
        portrait: "/images/character_mimo_cat.png",
        personality: "Visionary young city planner in a pastel teal blazer, carrying architectural blueprints and tablet.",
        signatureAbility: "Grand Blueprint (Boosts city tax revenue and unlocks mega Ferris wheel landmarks)",
        activityQuote: "The coastal express is running smoothly! Time to break ground on the seaside theme park!"
      },
      {
        name: "Sparky the Corgi",
        role: "Construction Inspector Mascot",
        portrait: "/images/character_baby_dragon.png",
        personality: "Energetic corgi wearing an official mini yellow safety hardhat and high-visibility orange vest.",
        signatureAbility: "Safety Patrol (Reduces building construction timers by 30%)",
        activityQuote: "Arf arf! The foundation is solid and ready for the new skyscraper!"
      }
    ],
    activities: [
      {
        title: "3D Coastal Metropolis Master Planning",
        description: "Zone colorful modern skyscrapers, elevated high-speed monorail transit networks, and sunny boardwalk piers along the bay.",
        image: "/images/game_happy_city.png"
      }
    ]
  }
];
