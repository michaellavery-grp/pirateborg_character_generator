// PIRATE BORG Character Generator - JavaScript Logic
// Mock data with placeholder content - user will replace with rulebook data

// ==================== DICE ROLLING FUNCTIONS ====================

function roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice(count, sides) {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += roll(sides);
    }
    return total;
}

// Roll 3d6 and return the sum (standard RPG ability rolls)
function rollAbility() {
    return roll(6) + roll(6) + roll(6);
}

// Roll 2d6 and read left-to-right (e.g., 2 and 6 = "26", not 8)
// Results in 36 combinations (11-66)
function roll2d6LeftToRight() {
    const die1 = roll(6);
    const die2 = roll(6);
    return `${die1}${die2}`;
}

// ==================== MOCK CHARACTER DATA ====================

// Name Generator - 2d6 read left-to-right (e.g., 2 and 6 = 26, not 8)
// Results in 36 combinations (11-66)
// Format: {roll: "number", male: "name", female: "name"}
const FIRST_NAMES = [
    {roll: "11", male: "Esteban", female: "Bridget"},
    {roll: "12", male: "Richard", female: "Juliette"},
    {roll: "13", male: "Hendrik", female: "Esther"},
    {roll: "14", male: "Raymond", female: "Rose"},
    {roll: "15", male: "John", female: "Beatrice"},
    {roll: "16", male: "Edmund", female: "Olive"},
    {roll: "21", male: "Charles", female: "Antonia"},
    {roll: "22", male: "Peter", female: "Charlotte"},
    {roll: "23", male: "Oliver", female: "Isabel"},
    {roll: "24", male: "Barth", female: "Adine"},
    {roll: "25", male: "Henry", female: "Angela"},
    {roll: "26", male: "Roger", female: "Cecile"},
    {roll: "31", male: "Don", female: "Edwidge"},
    {roll: "32", male: "Martin", female: "Catalina"},
    {roll: "33", male: "Louis", female: "Elizabeth"},
    {roll: "34", male: "Fredrick", female: "Madeleine"},
    {roll: "35", male: "Willem", female: "Anastasia"},
    {roll: "36", male: "Nicholas", female: "Emma"},
    {roll: "41", male: "Jerry", female: "Mary"},
    {roll: "42", male: "Edward", female: "Francisca"},
    {roll: "43", male: "Alvaro", female: "Ana"},
    {roll: "44", male: "Gaspar", female: "Agnes"},
    {roll: "45", male: "Francisco", female: "Marie"},
    {roll: "46", male: "Johan", female: "Eleanor"},
    {roll: "51", male: "Carlos", female: "Anne"},
    {roll: "52", male: "Francis", female: "Henrietta"},
    {roll: "53", male: "Jacques", female: "Alice"},
    {roll: "54", male: "Jack", female: "Margaret"},
    {roll: "55", male: "Francois", female: "Jeannette"},
    {roll: "56", male: "Silas", female: "Carmela"},
    {roll: "61", male: "Thomas", female: "Catherine"},
    {roll: "62", male: "Jacob", female: "Ursula"},
    {roll: "63", male: "Juan", female: "Annette"},
    {roll: "64", male: "Philippe", female: "Gabriela"},
    {roll: "65", male: "Jean", female: "Esme"},
    {roll: "66", male: "Billy", female: "Marion"}
];

// Nicknames (gender-neutral)
const MIDDLE_NAMES = [
    {roll: "11", name: "Sir/Madam"},
    {roll: "12", name: "Sea"},
    {roll: "13", name: "Turtle"},
    {roll: "14", name: "Siren"},
    {roll: "15", name: "Red"},
    {roll: "16", name: "One-Eye"},
    {roll: "21", name: "Crimson"},
    {roll: "22", name: "Blue"},
    {roll: "23", name: "Water"},
    {roll: "24", name: "Skull"},
    {roll: "25", name: "Tall-Tale"},
    {roll: "26", name: "Old"},
    {roll: "31", name: "Blood"},
    {roll: "32", name: "Mr./Mrs/Ms."},
    {roll: "33", name: "Gunpowder"},
    {roll: "34", name: "King/Queen"},
    {roll: "35", name: "Bow-legged"},
    {roll: "36", name: "Fish"},
    {roll: "41", name: "Whale"},
    {roll: "42", name: "Bones"},
    {roll: "43", name: "Squid"},
    {roll: "44", name: "Scurvy"},
    {roll: "45", name: "Bilge"},
    {roll: "46", name: "Shark"},
    {roll: "51", name: "Heart"},
    {roll: "52", name: "The Bride/Groom"},
    {roll: "53", name: "Black"},
    {roll: "54", name: "White"},
    {roll: "55", name: "Death"},
    {roll: "56", name: "Devil"},
    {roll: "61", name: "Knife"},
    {roll: "62", name: "Claw"},
    {roll: "63", name: "Rat"},
    {roll: "64", name: "Dark"},
    {roll: "65", name: "Green"},
    {roll: "66", name: "Planktooth"}
];

// Surnames (gender-neutral)
const LAST_NAMES = [
    {roll: "11", name: "Perez"},
    {roll: "12", name: "Thompson"},
    {roll: "13", name: "Jansen"},
    {roll: "14", name: "Williams"},
    {roll: "15", name: "Alva"},
    {roll: "16", name: "Dubois"},
    {roll: "21", name: "De Leon"},
    {roll: "22", name: "Brown"},
    {roll: "23", name: "Jones"},
    {roll: "24", name: "Johnson"},
    {roll: "25", name: "Thatch"},
    {roll: "26", name: "Davies"},
    {roll: "31", name: "Archer"},
    {roll: "32", name: "Blanc"},
    {roll: "33", name: "Evans"},
    {roll: "34", name: "Wright"},
    {roll: "35", name: "Smith"},
    {roll: "36", name: "Wilson"},
    {roll: "41", name: "Bernard"},
    {roll: "42", name: "Roberts"},
    {roll: "43", name: "White"},
    {roll: "44", name: "Jean"},
    {roll: "45", name: "Santiago"},
    {roll: "46", name: "Morel"},
    {roll: "51", name: "Rodriguez"},
    {roll: "52", name: "Garcia"},
    {roll: "53", name: "Robinson"},
    {roll: "54", name: "Lopez"},
    {roll: "55", name: "Baker"},
    {roll: "56", name: "Black"},
    {roll: "61", name: "Bonnet"},
    {roll: "62", name: "Walker"},
    {roll: "63", name: "Martin"},
    {roll: "64", name: "Jackson"},
    {roll: "65", name: "Diaz"},
    {roll: "66", name: "Taylor"}
];

const CLASSES = [
    {
        name: "Brute",
        hp: "d12",
        devilsLuck: "d2",
        featureDie: "d6",
        abilities: "A tough melee combatant prone to fits of RAGE.",
        modifiers: {strength: 1, agility: 0, presence: -1, toughness: 1, spirit: -1}
    },
    {
        name: "Rapscallion",
        hp: "d8",
        devilsLuck: "d2",
        featureDie: "d6",
        abilities: "A sneaky, cutthroat scallywag good at backstabbing, breaking and entering, stealing, cheating and escaping.",
        modifiers: {strength: -1, agility: 2, presence: 0, toughness: -1, spirit: 0}
    },
    {
        name: "Buccaneer",
        hp: "d8",
        devilsLuck: "d2",
        featureDie: "d6",
        abilities: "Skilled trackers and survivalists.",
        modifiers: {strength: 0, agility: -1, presence: 2, toughness: 0, spirit: -1}
    },
    {
        name: "Swashbuckler",
        hp: "d10",
        devilsLuck: "d2",
        featureDie: "d6",
        abilities: "A brash fighter with bravado and swagger.",
        modifiers: {strength: 1, agility: 1, presence: -1, toughness: 0, spirit: -1}
    },
    {
        name: "Zealot",
        hp: "d8",
        devilsLuck: "d4",
        featureDie: "d10",
        abilities: "A clergy member, cultist, shaman or believer.",
        modifiers: {strength: 0, agility: -1, presence: 0, toughness: -1, spirit: 2}
    },
    {
        name: "Sorcerer",
        hp: "d8",
        devilsLuck: "d4",
        featureDie: "d6",
        abilities: "An eldritch occultist, frail and enigmatic.",
        modifiers: {strength: -1, agility: 0, presence: 0, toughness: -1, spirit: 2}
    }
];

// Class Features - Brute (d6)
const BRUTE_FEATURES = [
    "Brass Anchor (pg. 35)",
    "Whaling Harpoon (pg. 35)",
    "Meat Cleaver (pg.35)",
    "Part of a Broken Mast (pg. 35)",
    "Runic Machete (pg. 35)",
    "Rotten Cargo Net (pg.35)"
];

// Class Features - Rapscallion (d6)
const RAPSCALLION_FEATURES = [
    "Backstabber (pg. 36-37)",
    "Burglar (pg. 36-37)",
    "Skylarker (pg. 36-37)",
    "Sneaky Bastard (pg. 36-37)",
    "Lucky Devil (pg. 36-37)",
    "Grog Brewer (pg. 36-37)"
];

// Class Features - Buccaneer (d6)
const BUCCANEER_FEATURES = [
    "Treasure Hunter (pg.38)",
    "Crack Shot (pg.38)",
    "Fix Bayonets! (pg.38)",
    "Focused Aim (pg.38)",
    "Buccan Cook (pg.38)",
    "Survivalist (pg.38)"
];

// Class Features - Swashbuckler (d6)
const SWASHBUCKLER_FEATURES = [
    "Ostentatious Fencer (pg. 41)",
    "Flintlock Fanatic (pg. 41)",
    "Scurvy Scallywag (pg. 41)",
    "Inspiring Leader (pg. 41)",
    "Knife Knave (pg. 41)",
    "Black Powder Poet (pg. 41)"
];

// Class Features - Zealot (d10) - Priestly powers
const ZEALOT_FEATURES = [
    "Heal (pg. 42)",
    "Curse (pg. 42)",
    "Death Ward (pg. 42)",
    "Control Weather (pg. 42)",
    "Blessed Guidance (pg. 42)",
    "Holy Protection (pg. 42)",
    "Divine Light (pg. 42)",
    "Silence (pg. 42)",
    "Sanctuary (pg. 42)",
    "Commune (pg. 42)"
];

// Class Features - Sorcerer (d6) - Arcane spells
const SORCERER_FEATURES = [
    "Dead Head (pg. 45)",
    "Spiritual Possession (pg. 45)",
    "Protection (pg. 45)",
    "Clairvoyance (pg. 45)",
    "Necro-Sleep (pg. 45)",
    "Raise the Dead (pg. 45)"
];

// d100 Background Table - Each entry: {name, silver, item/trait}
const BACKGROUNDS = [
    {name: "sailor", silver: "2d6 x 10s", item: "a reason to go to sea"},
    {name: "actor", silver: "2d6 x 10s", item: "a play or book"},
    {name: "apothecary", silver: "2d6 x 10s", item: "healing kit"},
    {name: "artist", silver: "2d6 x 10s", item: "art supplies"},
    {name: "assassin", silver: "2d6 x 10s", item: "a dagger"},
    {name: "bandit", silver: "2d6 x 10s", item: "a club"},
    {name: "barkeep", silver: "2d6 x 10s", item: "a flask of fine rum"},
    {name: "blacksmith", silver: "2d6 x 10s", item: "a set of files and tools"},
    {name: "bosun", silver: "2d6 x 10s", item: "the trust of the entire crew"},
    {name: "business person", silver: "3d6 x 10s", item: "a profitable past"},
    {name: "busker", silver: "1d12 x 10s", item: "a small toy or trinket"},
    {name: "cabin boy/girl", silver: "2d8 x 10s", item: "a spyglass"},
    {name: "captive", silver: "1d8 x 10s", item: "your freedom"},
    {name: "former captive", silver: "2d4 x 10s", item: "a keepsake from the island"},
    {name: "castaway", silver: "1d12 x 10s", item: "a book of recipes"},
    {name: "chef", silver: "2d6 x 10s", item: "some fine cooking spices"},
    {name: "cook", silver: "2d6 x 10s", item: "some fine cooking spices"},
    {name: "craftsman", silver: "2d6 x 10s", item: "a set of tools"},
    {name: "criminal", silver: "1d10 x 10s", item: "lock picks or a crowbar"},
    {name: "cultist", silver: "2d6 x 10s", item: "a book of scripture"},
    {name: "deserter", silver: "2d4 x 10s", item: "a small bounty on your head"},
    {name: "doctor", silver: "3d6 x 10s", item: "a medical kit"},
    {name: "explorer", silver: "2d6 x 10s", item: "a map and compass"},
    {name: "farmer", silver: "2d4 x 10s", item: "a reason to leave your farm"},
    {name: "first mate", silver: "2d6 x 10s", item: "a loyal friend"},
    {name: "gambler", silver: "1d12 x 10s", item: "a sizable debt"},
    {name: "grave robber", silver: "2d6 x 10s", item: "something from a corpse"},
    {name: "guard", silver: "2d6 x 10s", item: "a keen eye for mischief"},
    {name: "gunner", silver: "2d6 x 10s", item: "skill at shooting"},
    {name: "harlot", silver: "2d8 x 10s", item: "an admirer with syphilis"},
    {name: "heretic", silver: "2d4 x 10s", item: "a blasphemous disposition"},
    {name: "homemaker", silver: "2d6 x 10s", item: "a loved one back home"},
    {name: "hunter", silver: "2d4 x 10s", item: "a skinning knife"},
    {name: "former servant", silver: "2d4 x 10s", item: "someone looking for you"},
    {name: "innkeeper", silver: "2d4 x 10s", item: "a small inn somewhere"},
    {name: "landowner", silver: "3d6 x 10s", item: "property somewhere"},
    {name: "loner", silver: "2d6 x 10s", item: "a dislike of others"},
    {name: "cartographer", silver: "2d6 x 10s", item: "map making tools"},
    {name: "marine", silver: "2d6 x 10s", item: "a military cutlass"},
    {name: "medic", silver: "2d6 x 10s", item: "a medical kit"},
    {name: "merchant", silver: "2d8 x 10s", item: "good negotiating skills"},
    {name: "military", silver: "2d6 x 10s", item: "combat training"},
    {name: "missionary", silver: "2d4 x 10s", item: "a holy symbol and scripture"},
    {name: "monk", silver: "2d6 x 10s", item: "a holy symbol and scripture"},
    {name: "musician", silver: "2d6 x 10s", item: "[roll on instrument table, pg. 27]"},
    {name: "naval deserter", silver: "2d4 x 10s", item: "a price on your head"},
    {name: "navigator", silver: "2d6 x 10s", item: "a compass"},
    {name: "noble", silver: "3d6 x 10s", item: "good manners"},
    {name: "nobody", silver: "2d4 x 10s", item: "a desire for a purpose"},
    {name: "nurse", silver: "2d6 x 10s", item: "a medical kit"},
    {name: "officer", silver: "2d8 x 10s", item: "a cutlass and military training"},
    {name: "orphan", silver: "2d4 x 10s", item: "a longing for new parental figures"},
    {name: "performer", silver: "2d6 x 10s", item: "[roll on instrument table, pg. 27]"},
    {name: "philosopher", silver: "2d6 x 10s", item: "a book and a puzzling disposition"},
    {name: "pilot", silver: "2d6 x 10s", item: "a compass"},
    {name: "pirate", silver: "2d6 x 10s", item: "an empty bottle of rum"},
    {name: "politician", silver: "2d6 x 10s", item: "skill at deception"},
    {name: "priest", silver: "2d6 x 10s", item: "a holy symbol and scripture"},
    {name: "privateer", silver: "2d6 x 10s", item: "a letter of marque"},
    {name: "quartermaster", silver: "2d6 x 10s", item: "the respect of a ship's crew"},
    {name: "refugee", silver: "2d4 x 10s", item: "strong survival instincts"},
    {name: "religious follower", silver: "2d4 x 10s", item: "a strong sense of faith"},
    {name: "revolutionary", silver: "2d6 x 10s", item: "bold plans and a few allies"},
    {name: "rumored sorcerer", silver: "2d6 x 10s", item: "dark and powerful knowledge"},
    {name: "runaway", silver: "2d4 x 10s", item: "a desire for a new home"},
    {name: "sail maker", silver: "2d6 x 10s", item: "skill with sails"},
    {name: "scholar", silver: "2d8 x 10s", item: "a few books"},
    {name: "scoundrel", silver: "2d8 x 10s", item: "a few enemies along the way"},
    {name: "scout", silver: "2d6 x 10s", item: "keen senses and a map"},
    {name: "shaman", silver: "2d4 x 10s", item: "herbs and mystic knowledge"},
    {name: "shipwright", silver: "2d6 x 10s", item: "skill with woodworking"},
    {name: "smuggler", silver: "2d6 x 10s", item: "a bounty on your head"},
    {name: "soldier", silver: "2d6 x 10s", item: "a tactical mind"},
    {name: "spy", silver: "2d6 x 10s", item: "a dark cloak"},
    {name: "student", silver: "2d4 x 10s", item: "a strong will to learn"},
    {name: "surgeon", silver: "2d6 x 10s", item: "a medical kit"},
    {name: "thief", silver: "1d12 x 10s", item: "lock picks"},
    {name: "vagabond", silver: "2d4 x 10s", item: "a leather backpack"},
    {name: "victim", silver: "2d6 x 10s", item: "a haunted past"},
    {name: "warrior", silver: "2d4 x 10s", item: "a cultural weapon"},
    {name: "whaler", silver: "2d4 x 10s", item: "a harpoon"},
    {name: "writer", silver: "2d6 x 10s", item: "ink, quills, and parchment"}
];

const DISTINCTIVE_FLAWS = [
    "Drunken Lush", "Stubborn", "Mocking, sardonic cheer", "Way too loud", "Stupid",
    "Coward", "Cocky", "Slightly deranged", "Agressive", "Anxious", "Cheater", "Selfish",
    "Lazy", "Hedonistic", "Impulsive", "Ostentatious", "Paranoid", "Prententious",
    "Sadistic", "Disloyal"
];

// d20 Idiosyncrasies Table
const IDIOSYNCRASIES = [
    "You smoke constantly, and cough even more.",
    "\"Functioning\" alcoholic. You're probably drunk right now.",
    "You bet on everything possible.",
    "Constantly counting. Teeth, cannon balls... everything.",
    "Rats are your favorite meal.",
    "You know every tall tale ever told. You make sure everyone else knows you know them.",
    "You are afraid of prime numbers larger than 3. d20 rolls of 5, 7, 11, 13, 17, and 19 fill you with superstitious terror.",
    "You become a murderous grump when hungry.",
    "Habitual procrastinator... if you even finish the task.",
    "You are a voluntary insomniac. Sleep is for the dead.",
    "You prefer to shoot first and never ask questions.",
    "Overly, annoyingly religious.",
    "You collect something, and you often talk to your collection.",
    "They are your friends. Always trying to trick your crewmates, just for fun.",
    "Why even pay for anything when you can steal it?",
    "You talk to yourself when alone, but you often think you're alone when you aren't.",
    "You secretly enjoy the taste of human flesh.",
    "You always say you \"know the right way\" but are prone to getting lost.",
    "You blame everyone but yourself for all of your mistakes.",
    "Extremely obsessive with tasks and relationships."
];

// d20 Unfortunate Incidents & Conditions Table
const UNFORTUNATE_INCIDENTS = [
    "Your loved ones were burned alive. Revenge is imminent.",
    "You are a known pirate. You face the gallows if caught.",
    "You betrayed former crewmates. Now they hunt you.",
    "You were marooned on an island for far too long. The voices must be real.",
    "You stole a ship. The owner wants your money or your head, but will settle for both.",
    "You escaped captivity, and will never go back.",
    "A close relative has become your greatest enemy.",
    "The last two ships you crewed all sank.",
    "Your last crew was killed by undead. They left you alive on purpose. Political leaders hold your loved one(s) captive.",
    "An undead spirit you don't like possesses you regularly.",
    "You wronged an infamous pirate lord.",
    "You narrowly escaped a cannibalistic ending, but you didn't escape that smell.",
    "You slaughtered them. Like animals.",
    "You are the mysterious lone survivor of a treasure expedition gone awry.",
    "[d2] 1: failed mutineer. 2: Successful mutineer.",
    "A silent ghost haunts you. It is always watching, but only you can see it.",
    "You deserted the military, but you're sure who knows of it.",
    "You have no memory before a few days ago.",
    "You died once already, but Hell didn't want you."
];


const RITUALS = [
    {
        name: "Call of the Sea",
        description: "d6 creatures can swim underwater and swim 40' a round for d4 + Spirit hours."
    },
    {
        name: "Curse of the Drowned",
        description: "For d6 rounds, a creature gets +4 to all DRS and is DR -4 to defend against."
    },
    {
        name: "Dark Delusions",
        description: "An illusion or vision of your design appears in the mind of any creatures you can see for d4 + SPIRIT minutes."
    },
    {
        name: "Obfuscate Time",
        description: "d2 creatures recovers 2d10 + SPIRIT HP, but age 2d10 months."
    },
    {
        name: "Eldritch Tentacles",
        description: "They appear and attack up to d6 craetures of your choice, taking d6 damage each."
    },
    {
        name: "Heart Hex",
        description: "Increase the reaction of one creature by one level (pg. 31). If they are already friendly, they fall in love with a crature of your choice for d4 + SPIRIT  days."
    },
    {
        name: "Thalassomancy",
        description: "d2 + SPRIT creatures lungs fill with sea water. They suffocate for d4 rounds, losing d4 HP each round."
    },
    {
        name: "Light of a thousand Stars",
        description: "30' of light radiates from an object for 2d12 hours. It cannot be extinguished. All attacks are -4 DR to hit/+4 to defend."
    },
    {
        name: "Return from the Locker",
        description: "A recently killed creature returns to life with 1 HP, their lungs expel black ichor and bilge water."
    },
    {
        name: "Mind Manacles",
        description: "One creature you can see must obey your commands for d2 + SPIRIT rounds."
    },
    {
        name: "Mists of Confusion",
        description: "d4 + SPIRIT creatures each roll for a new reaction (pg. 31)."
    },
    {
        name: "Divination",
        description: "Ask the spirits or gods 3 yes or no questions."
    },
    {
        name: "Phantasmal Fauna",
        description: "You summon a ghostly hound or shark. It obeys your commands. It dissipates at sunset. HP 5, Morale - Ghostly Form -d2 Bite d6."
    },
    {
        name: "Release the Kraken",
        description: "The Kraken appears in nearby waters."
    },
    {
        name: "Reopen the Grave",
        description: "You summon d2 + SPIRIT zombies or skeletons. They are under your control."
    },
    {
        name: "Mermaid's Kiss",
        description: "A creature gains +1 to STRENGTH, AGILITY, and TOUGHNESS for d4 days."
    },
    {
        name: "Spiritual Ward",
        description: "One creature gains -d4 protection for d2 days. Works in addition to armor."
    },
    {
        name: "Summon the Ferryman",
        description: "A human of your choice loses 3d8 HP. If you fail, you or an ally loses the HP instead (don't roll a Mishap)."
    },
    {
        name: "The Black Spot",
        description: "Name a human you have met. They must test DR12 or die within d8 days."
    },
    {
        name: "Weathercraft",
        description: "For the next d4 hours, the weather obeys your commands. Change the direction & speed of the wind (all ships get +/- 1 speed) and start or stop rain, fog, or thunderstorms."
    }
];

const PHYS_TRADEMARK = [
    "Cursed: visibly part skeleton/ghost/water/flames/coral.", "Missing an eye.", "Matted, dreaded hair",
    "Missing a leg: peg leg or crutch", "Missing hand: hook or claw instead.", "Missing an ear",
    "Many, many tattoos", "Never blinked. Ever.", "Rotten or broken teeth", "Twitches constantly, especially trigger finger.",
    "A nigh incurable case of scurvy: permanently bleeding gums", "Infested with bugs", "Gnarly facial scar",
    "Hideously ugly.", "Corpulent", "Increasingly gangrenous.", "Putrid, bilge stench", "Contagious",
    "Gaunt & Frail", "So good looking, people are jealous"
];

const CONTAINERS = [
    "bucket (4 items)",
    "bandolier (6 small items)",
    "satchel (8 items)",
    "backpack (10 items)",
    "large sea chest (20 items)",
    "dinghy"
];

const CHEAP_GEAR = [
    "lantern (d6 hours of oil)",
    "d4 candles (1 hour each)",
    "30' of rope",
    "shovel",
    "medical kit",
    "weighted dice",
    "flint & steel",
    "hammer & nails",
    "mess kit",
    "pipe & tobacco pouch",
    "d6 torches (1 hour each)",
    "ROLL_PET" // Roll d10 for pet
];

const PETS = [
    "snake",
    "rat",
    "lizard",
    "monkey",
    "parrot",
    "cat",
    "dog",
    "hawk",
    "hermit crab",
    "fish in a jar"
];

const FANCY_GEAR = [
    "compass",
    "spyglass",
    "fishing rod",
    "ROLL_RELIC", // Roll for random relic (d20)
    "bottle of fine rum",
    "olde pocket watch",
    "blanket & pillow",
    "ink, quill, parchment",
    "worn out book",
    "tent",
    "whetstone",
    "ROLL_INSTRUMENT" // Roll d10 for instrument
];

const RELICS = [
    "Cross of the Paragon",
    "Conch Shell from the Abyss",
    "Map inked in Ectoplasm",
    "Will O' the Wisp lantern",
    "Pages from the Necronomicon",
    "Rune-Encrusted flintlock pistol",
    "Jade Die",
    "Undead bird",
    "Mermaid scales",
    "Charon's Obol",
    "Cup of the Carpenter",
    "Heart of the Sea",
    "Necklace of Eyeballs",
    "Crown of the Sunken Lord",
    "Crystalline Skull",
    "Codex Tablet",
    "Skeleton Key",
    "Mummifed monkey head",
    "Great Old One figurine",
    "Broken Compass"
];

const INSTRUMENTS = [
    "concertina",
    "drum",
    "flute",
    "fiddle",
    "banjo",
    "horn",
    "hurdy-gurdy",
    "guitar",
    "mandolin",
    "voice of an angel"
];

const WEAPONS = [
    "Marlinspike or Belaying Pin (d4)",
    "Knife or Bayonet (d4)",
    "Smallsword or Machete (d4)",
    "Cat O'nine tails(d4, range 10')",
    "Boarding Axe (d6)", 
    "Cutlass (d6)",
    "Flintlock Pistol(2d4, range 30')",
    "Finely crafted Rapier (d8)",
    "Boarding Pike (d10 range 10')",
    "Musket (2d6, range 150')"
];

const CLOTHING = [
    "Rags",
    "Rags",
    "Commoners Clothes",
    "Commoners Clothes",
    "Old Uniform",
    "Fancy Clother",
    "Leather Armor (-d2)",
    "Hide Armor (-d2)",
    "Chain shirt (-d4, DR +2)",
    "Conquistador Plate (-d6, DR +4)"
];

const HATS = [
    "None",
    "None",
    "None",
    "None",
    "Wig",
    "Bandanna",
    "Cavalier",
    "Bicorne",
    "Plain tricorne",
    "Fancy tricorne",
    "Metal-lined hat (-1 dmg.)",
    "Morion (-1 dmg.)m break for no damage"
];

// ==================== CHARACTER GENERATION ====================

function generateCharacter() {
    // Generate gender (d2: 1=male, 2=female)
    const gender = roll(2) === 1 ? "male" : "female";

    // Generate name using 2d6 left-to-right (three times)
    const firstRoll = roll2d6LeftToRight();
    const middleRoll = roll2d6LeftToRight();
    const lastRoll = roll2d6LeftToRight();

    // Find matching entries
    const firstEntry = FIRST_NAMES.find(n => n.roll === firstRoll);
    const firstName = firstEntry[gender];
    const middleName = MIDDLE_NAMES.find(n => n.roll === middleRoll).name;
    const lastName = LAST_NAMES.find(n => n.roll === lastRoll).name;

    // Combine name
    const fullName = `${firstName} "${middleName}" ${lastName}`;
    document.getElementById('charName').textContent = fullName;

    // Generate class
    const charClass = CLASSES[Math.floor(Math.random() * CLASSES.length)];
    document.getElementById('charClass').textContent = charClass.name;

    // Roll class feature
    const featureDieSize = parseInt(charClass.featureDie.substring(1));
    const featureRoll = roll(featureDieSize) - 1; // 0-indexed array
    let classFeature;

    switch(charClass.name) {
        case "Brute":
            classFeature = BRUTE_FEATURES[featureRoll];
            break;
        case "Rapscallion":
            classFeature = RAPSCALLION_FEATURES[featureRoll];
            break;
        case "Buccaneer":
            classFeature = BUCCANEER_FEATURES[featureRoll];
            break;
        case "Swashbuckler":
            classFeature = SWASHBUCKLER_FEATURES[featureRoll];
            break;
        case "Zealot":
            classFeature = ZEALOT_FEATURES[featureRoll];
            break;
        case "Sorcerer":
            classFeature = SORCERER_FEATURES[featureRoll];
            break;
    }

    // Generate base abilities (3d6, subtract 10, divide by 2, cap at -3 to +6)
    let abilities = {
        strength: calculateModifier(rollAbility()),
        agility: calculateModifier(rollAbility()),
        presence: calculateModifier(rollAbility()),
        toughness: calculateModifier(rollAbility()),
        spirit: calculateModifier(rollAbility())
    };

    // Apply class-specific modifiers
    abilities.strength += charClass.modifiers.strength;
    abilities.agility += charClass.modifiers.agility;
    abilities.presence += charClass.modifiers.presence;
    abilities.toughness += charClass.modifiers.toughness;
    abilities.spirit += charClass.modifiers.spirit;

    // Cap abilities at -3 to +6 after class modifiers
    abilities.strength = Math.max(-3, Math.min(6, abilities.strength));
    abilities.agility = Math.max(-3, Math.min(6, abilities.agility));
    abilities.presence = Math.max(-3, Math.min(6, abilities.presence));
    abilities.toughness = Math.max(-3, Math.min(6, abilities.toughness));
    abilities.spirit = Math.max(-3, Math.min(6, abilities.spirit));

    document.getElementById('strength').textContent = formatModifier(abilities.strength);
    document.getElementById('agility').textContent = formatModifier(abilities.agility);
    document.getElementById('presence').textContent = formatModifier(abilities.presence);
    document.getElementById('toughness').textContent = formatModifier(abilities.toughness);
    document.getElementById('spirit').textContent = formatModifier(abilities.spirit);

    // Generate HP (based on class hit die + toughness modifier, minimum 1)
    let hp;
    if (charClass.hp === "d12") {
        hp = roll(12) + abilities.toughness;
    } else if (charClass.hp === "d10") {
        hp = roll(10) + abilities.toughness;
    } else if (charClass.hp === "d8") {
        hp = roll(8) + abilities.toughness;
    } else if (charClass.hp === "d6") {
        hp = roll(6) + abilities.toughness;
    } else if (charClass.hp === "d4") {
        hp = roll(4) + abilities.toughness;
    }
    hp = Math.max(1, hp); // HP can never go below 1
    document.getElementById('hitPoints').textContent = hp;

    // Generate Devil's Luck based on class (d2 for martial classes, d4 for magical)
    const devilsLuckDie = parseInt(charClass.devilsLuck.substring(1)); // Extract number from "d2" or "d4"
    const devilsLuck = roll(devilsLuckDie);
    document.getElementById('omens').textContent = devilsLuck;

    // Generate Background (d100) and starting silver
    const backgroundRoll = roll(100) - 1; // 0-99 for array index
    const background = BACKGROUNDS[backgroundRoll];
    const silverAmount = rollSilver(background.silver);
    document.getElementById('silver').textContent = silverAmount;

    // Generate random equipment
    // Weapon (d10)
    const weaponRoll = roll(10) - 1;
    document.getElementById('weapon').textContent = WEAPONS[weaponRoll];

    // Clothing (d10)
    const clothingRoll = roll(10) - 1;
    document.getElementById('clothing').textContent = CLOTHING[clothingRoll];

    // Hat (d12)
    const hatRoll = roll(12) - 1;
    document.getElementById('hat').textContent = HATS[hatRoll];

    // Container (d6)
    const containerRoll = roll(6) - 1;
    document.getElementById('container').textContent = CONTAINERS[containerRoll];

    // Cheap Gear (d12)
    const cheapGearRoll = roll(12) - 1;
    let cheapGearResult = CHEAP_GEAR[cheapGearRoll];
    if (cheapGearResult === "ROLL_PET") {
        const petRoll = roll(10) - 1;
        cheapGearResult = PETS[petRoll];
    }
    document.getElementById('cheapGear').textContent = cheapGearResult;

    // Fancy Gear (d12)
    const fancyGearRoll = roll(12) - 1;
    let fancyGearResult = FANCY_GEAR[fancyGearRoll];
    if (fancyGearResult === "ROLL_RELIC") {
        const relicRoll = roll(20) - 1;
        fancyGearResult = RELICS[relicRoll];
    } else if (fancyGearResult === "ROLL_INSTRUMENT") {
        const instrumentRoll = roll(10) - 1;
        fancyGearResult = INSTRUMENTS[instrumentRoll];
    }
    document.getElementById('fancyGear').textContent = fancyGearResult;

    // Display class abilities and class feature
    document.getElementById('classAbilities').innerHTML = `<p>${charClass.abilities}</p><p><strong>Class Feature:</strong> ${classFeature}</p>`;

    // Generate Idiosyncrasy (d20)
    const idiosyncracyRoll = roll(20) - 1;
    document.getElementById('idiosyncrasy').textContent = IDIOSYNCRASIES[idiosyncracyRoll];

    // Generate Unfortunate Incident (d20)
    const incidentRoll = roll(20) - 1;
    document.getElementById('unfortunateIncident').textContent = UNFORTUNATE_INCIDENTS[incidentRoll];

    // Display background (name + item/trait)
    document.getElementById('background').textContent = `${background.name} - ${background.item}`;

    // Generate distinctive flaw
    const habit = DISTINCTIVE_FLAWS[Math.floor(Math.random() * DISTINCTIVE_FLAWS.length)];
    document.getElementById('quirk').textContent = habit;

    // Generate ritual (only for Wretch class)
    const ritualSection = document.getElementById('ritualSection');
    if (charClass.name === "Wretch") {
        const ritual = RITUALS[Math.floor(Math.random() * RITUALS.length)];
        document.getElementById('ritual').innerHTML = `
            <p><strong>${ritual.name}</strong></p>
            <p>${ritual.description}</p>
        `;
        ritualSection.style.display = 'block';
    } else {
        ritualSection.style.display = 'none';
    }

    // Generate physical trademark
    const p_trademark = PHYS_TRADEMARK[Math.floor(Math.random() * PHYS_TRADEMARK.length)];
    document.getElementById('trademark').textContent = p_trademark;
}

// ==================== HELPER FUNCTIONS ====================

function calculateModifier(abilityScore) {
    // Standard D&D style: (score - 10) / 2, rounded down
    // Range: 3d6 = 3-18, modifiers = -3 to +4 naturally
    // Capped at -3 to +6 for game balance
    let modifier = Math.floor((abilityScore - 10) / 2);
    return Math.max(-3, Math.min(6, modifier));
}

function rollSilver(diceNotation) {
    // Parse notation like "2d6 x 10s" or "3d6 x 10s"
    const match = diceNotation.match(/(\d+)d(\d+)\s*x\s*(\d+)/);
    if (!match) return 0;

    const numDice = parseInt(match[1]);
    const dieSize = parseInt(match[2]);
    const multiplier = parseInt(match[3]);

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += roll(dieSize);
    }
    return total * multiplier;
}

function formatModifier(modifier) {
    if (modifier >= 0) {
        return `+${modifier}`;
    }
    return `${modifier}`;
}

// ==================== PRINT FUNCTION ====================

function printCharacter() {
    // Collect all character data
    const characterData = {
        name: document.getElementById('charName').textContent,
        class: document.getElementById('charClass').textContent,
        strength: document.getElementById('strength').textContent,
        agility: document.getElementById('agility').textContent,
        presence: document.getElementById('presence').textContent,
        toughness: document.getElementById('toughness').textContent,
        spirit: document.getElementById('spirit').textContent,
        hp: document.getElementById('hitPoints').textContent,
        luck: document.getElementById('omens').textContent,
        silver: document.getElementById('silver').textContent,
        weapon: document.getElementById('weapon').textContent,
        clothing: document.getElementById('clothing').textContent,
        hat: document.getElementById('hat').textContent,
        container: document.getElementById('container').textContent,
        cheapGear: document.getElementById('cheapGear').textContent,
        fancyGear: document.getElementById('fancyGear').textContent,
        classAbilities: document.getElementById('classAbilities').textContent,
        idiosyncrasy: document.getElementById('idiosyncrasy').textContent,
        unfortunateIncident: document.getElementById('unfortunateIncident').textContent,
        background: document.getElementById('background').textContent,
        distinctiveFlaw: document.getElementById('quirk').textContent,
        physicalTrademark: document.getElementById('trademark').textContent
    };

    // Encode data and open print page
    const encodedData = encodeURIComponent(JSON.stringify(characterData));
    window.open(`print.html?data=${encodedData}`, '_blank');
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', function() {
    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateCharacter);

    // Print buttons (header and footer)
    document.getElementById('printBtnHeader').addEventListener('click', printCharacter);
    document.getElementById('printBtn').addEventListener('click', printCharacter);

    // Generate initial character on page load
    generateCharacter();
});
