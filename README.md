# ⚓ PIRATE BORG Character Generator ⚓

A web-based character generator for the PIRATE BORG tabletop roleplaying game, combining the simplicity of SCVMBIRTHER's layout with Pirate Borg's seaworthy shenanigans.

## Features

- **Random Character Generation**: Roll up cursed crew members with the click of a button
- **Print-Friendly Layout**: Clean, single-page character sheets optimized for printing
- **Dark Aesthetic**: Grimy pirate theme with blood red and gold accents
- **Authentic Game Mechanics**: Uses 3d6 for ability scores 
- **Six Pirate Classes**: Brute, Rapscallion, Buccaneer, Swashbuckler, Zealot, Sorcerer
- **20 Arcane Rituals**: From "Call of the Sea" to "Weathercraft"
- **Character Depth**: Backgrounds, distinctive flaws, physical trademarks, and more

## Quick Start

1. Open `index.html` in any modern web browser
2. A random character will be generated automatically
3. Click "ROLL A NEW SCALLYWAG" to generate a new character
4. Click the print button (🖨️) to print your character sheet

## Character Attributes

### Five Core Abilities
- **STRENGTH**: Physical power and melee combat
- **AGILITY**: Dexterity, reflexes, and acrobatics
- **PRESENCE**: Charisma, leadership, and intimidation
- **TOUGHNESS**: Endurance, resilience, and hit points
- **SPIRIT**: Magical power and ritual casting

All abilities rolled using 3d6, subtract 10, divide by 2 (rounded down).

### Character Stats
- **Hit Points**: Based on class hit die + Toughness modifier (minimum 1)
- **Omens**: Rolled d2 (luck points for avoiding death)
- **Silver**: Starting money based on class (40-180 pieces)

### Character Elements
- **Name**: Random pirate names from a pool of 36 first names(male and female = 72), 36 nicknames and 36 surnames
- **Class**: Six classes with unique abilities and equipment
- **Background**: seafaring origin stories
- **Distinctive Flaws**: personality quirks and bad habits
- **Physical Trademark**: physical characteristics
- **Arcane Rituals**: spells for Sorcerer/Zealot classes (conditional display)

## Classes

Each class has unique ability modifiers applied after base ability scores are rolled. Final abilities are capped at -3 to +6.

### Brute (d12 HP)
A tough melee combatant prone to fits of RAGE.
- **Ability Modifiers**: Strength +1, Toughness +1, Presence -1, Spirit -1
- **Starting Gear**: Random equipment from tables

### Rapscallion (d8 HP)
A sneaky, cutthroat scallywag good at backstabbing, breaking and entering, stealing, cheating and escaping.
- **Ability Modifiers**: Agility +2, Strength -1, Toughness -1
- **Starting Gear**: Random equipment from tables

### Buccaneer (d8 HP)
Skilled trackers and survivalists.
- **Ability Modifiers**: Presence +2, Agility -1, Spirit -1
- **Starting Gear**: Random equipment from tables

### Swashbuckler (d10 HP)
A brash fighter with bravado and swagger.
- **Ability Modifiers**: Strength +1, Agility +1, Presence -1, Spirit -1
- **Starting Gear**: Random equipment from tables

### Zealot (d8 HP)
A clergy member, cultist, shaman or believer.
- **Ability Modifiers**: Spirit +2, Agility -1, Toughness -1
- **Starting Gear**: Random equipment from tables

### Sorcerer (d8 HP)
An eldritch occultist, frail and enigmatic.
- **Ability Modifiers**: Spirit +2, Strength -1, Toughness -1
- **Starting Gear**: Random equipment from tables

## Arcane Rituals

20 rituals with nautical and eldritch themes:
- **Call of the Sea**: Underwater swimming enchantment
- **Curse of the Drowned**: Phantom drowning attack
- **Dark Delusions**: Supernatural tempest
- **Eldritch Tentacles**: Summon tentacles from the deep
- **Heart Hex**: Curse an enemy's heart
- **Light of a Thousand Stars**: Blinding radiance
- **Mermaid's Kiss**: Enchantment of the deep
- **Mind Manacles**: Mental imprisonment
- **Mists of Confusion**: Obscuring fog
- **Obfuscate Time**: Temporal distortion
- **Phantasmal Fauna**: Summon ghostly creatures
- **Release the Kraken**: Summon the legendary beast
- **Reopen the Grave**: Raise the dead
- **Return from the Locker**: Escape Davy Jones' grasp
- **Spiritual Ward**: Protection from spirits
- **Summon the Ferryman**: Call the death boatman
- **The Black Spot**: Mark of death curse
- **Thalassomancy**: Ocean divination
- **Weathercraft**: Control storms and wind
- **Divination**: See the future

## Physical Trademarks

20 distinctive features including:
- Cursed (visibly part skeleton/ghost/water/flames/coral)
- Missing body parts (eye, leg, hand, ear)
- Matted, dreaded hair
- Many tattoos
- Rotten or broken teeth
- Scurvy symptoms
- Gnarly scars
- Various states of decay and disfigurement
- "So good looking, people are jealous" (ironic balance)

## Distinctive Flaws

20 personality traits and bad habits:
- Drunken Lush, Stubborn, Mocking/sardonic cheer
- Way too loud, Stupid, Coward, Cocky
- Slightly deranged, Aggressive, Anxious
- Cheater, Selfish, Lazy, Hedonistic
- Impulsive, Ostentatious, Paranoid
- Pretentious, Sadistic, Disloyal

## Release Notes

### v0.7.0 - "Landlubber Abilities & Bug Fixes" (Current)
**Date**: November 30, 2025

#### Landlubber Abilities System
- 🎲 **New Optional Roll Method**: Added "Landlubber Abilities" checkbox for 4d6 drop lowest
  - Roll 4d6 for each ability and drop the lowest die
  - Keep the top 3 dice for ability score calculation
  - Produces **17.2% higher average scores** than standard 3d6
  - **3.5% less variability** (more consistent scores)
  - Better first-level survivability with higher ability modifiers

- 📊 **Statistical Analysis Performed**:
  - 10,000 sample simulation comparing both methods
  - **Standard (3d6)**: Mean = 10.48, Std Dev = 2.95
  - **Landlubber (4d6 drop)**: Mean = 12.28, Std Dev = 2.84
  - **F-statistic**: 1.075 (ANOVA variance comparison)
  - Landlubber method has statistically lower variance
  - Distribution shifts toward higher scores (more 13-16 results)

- 🎮 **User Experience**:
  - Checkbox located below "House Rules" option
  - Works independently or combined with House Rules
  - Both options can be enabled simultaneously
  - Character regeneration respects checkbox state

#### Critical Bug Fixes
- 🐛 **Fixed Ritual Display**: Corrected class check for arcane rituals
  - **Previous Bug**: Checked for non-existent "Wretch" class
  - **Fix**: Now correctly checks for "Zealot" or "Sorcerer" classes
  - **Result**: Ritual section now displays properly for magical classes

- 📝 **Text Corrections**:
  - Fixed typo in CLOTHING array: "Fancy Clother" → "Fancy Clothes"
  - Fixed typo in HATS array: "Morion (-1 dmg.)m break" → "Morion (-1 dmg.), break for no damage"

#### Technical Implementation
- **rollAbilityLandlubber()**: New dice rolling function
  - Rolls array of 4d6, sorts ascending
  - Sums indices [1], [2], [3] (drops index [0])
  - Returns value in 3-18 range (higher average than 3d6)

- **Conditional Rolling**: `generateCharacter()` checks landlubber checkbox
  - Uses ternary operator to select appropriate roller function
  - Applies same modifier calculation regardless of method
  - Class modifiers and ability caps still apply

- **variance_analysis.html**: Statistical analysis tool included
  - Browser-based variance comparison tool
  - Generates 10,000 samples for each method
  - Calculates mean, variance, std dev, F-statistic
  - Distribution histogram showing probability differences

---

### v0.6.1 - "House Rules: High-Sided Dice"
**Date**: November 25, 2025

#### House Rules System
- ☑️ **Optional House Rules Checkbox**: Players can enable first-level advantage for HP and Devil's Luck
  - Located in header below generate/print buttons
  - Persists across character generations
  - Gives new characters better survivability

- 🎲 **High-Sided Dice Mechanic**: Low rolls become high rolls
  - **How it works**: Rolls in lower half of die range convert to upper half
  - **d2**: 1 → 2 (always maximum)
  - **d4**: 1-2 → 3-4
  - **d6**: 1-3 → 4-6
  - **d8**: 1-4 → 5-8 (most common HP die)
  - **d10**: 1-5 → 6-10
  - **d12**: 1-6 → 7-12 (Brute HP)

- 💪 **Practical Impact**:
  - Sorcerer (d8 HP): Minimum 5 HP instead of 1 (before toughness modifier)
  - Brute (d12 HP): Minimum 7 HP instead of 1 (before toughness modifier)
  - Devil's Luck (d4): Minimum 3 points instead of 1
  - Devil's Luck (d2): Always 2 points (martial classes)
  - First-level characters are more resilient and fun to play

- 🎨 **UI Styling**: Gold-bordered checkbox box matching pirate theme
  - Clear explanation of house rule effect
  - Accessible checkbox with gold accent color
  - Non-intrusive placement

#### Technical Implementation
- **rollHighSided() function**: Core logic for converting rolls
  - Takes die size and house rules boolean
  - Calculates midpoint: `Math.ceil(sides / 2)`
  - Converts low rolls: `sides - midpoint + result`
  - Returns original roll if house rules disabled

- **Applied to**:
  - All HP calculations (d4, d6, d8, d10, d12)
  - All Devil's Luck calculations (d2, d4)
  - Does NOT affect ability scores (keeps character diversity)

---

### v0.6.0 - "Thing of Importance"
**Date**: November 25, 2025

#### Thing of Importance System
- 🗝️ **d100 Thing of Importance Table**: Complete 100-item table from Pirate Borg rulebook
  - Every character gets a random item rolled on d100
  - Items range from mundane to mysterious to macabre
  - Examples: animal pelt, jar containing a severed hand, compass that doesn't point north, glass vial of dark blood
  - Displayed on character sheet between Background and Distinctive Flaws
  - Included in print layout

- 📊 **Distribution Testing**: Added comprehensive d100 distribution tests
  - Tests 1000 rolls for uniform distribution
  - Chi-square goodness of fit analysis
  - Histogram showing distribution across all 100 items
  - Verifies pseudo-random number generator quality

#### Complete d100 Item List
Items include personal treasures, mysterious artifacts, and grim mementos:
- **Personal Items**: silver locket, letter from a loved one, drawing of a loved one, necklace from a loved one
- **Mysterious Objects**: compass that doesn't point north, old rusted key with blue gem that glows in moonlight, perfect cube made of crystal
- **Macabre Treasures**: jar containing a severed hand, severed toes from bandits, noose taken from a corpse, monkey paw extending 1 finger
- **Valuable Goods**: ancient gold coin, single diamond earring, bottle of perfumed oil, jar of the finest tobacco
- **Strange Artifacts**: stone tablet with ancient pictographs, leather-bound tome in unknown language, talisman shaped like a snake
- **Scars & Tattoos**: gills scars from lashes on your back, long scar on your face, tattoo (d4 sub-roll for meaning)

---

### v0.5.0 - "Class Features & Name Generator"
**Date**: November 24, 2025

#### Name Generator System
- 🎲 **2d6 Left-to-Right Name Generation**: Roll name components using unique 2d6 mechanic
  - Rolls 2d6 and reads digits left-to-right (e.g., 2 and 6 = "26" not 8)
  - Creates 36 unique combinations per table (11-66)
  - Three separate tables: First Names, Nicknames (middle names), Surnames

- 👤 **Gender System**: d2 roll determines male or female
  - First names have gendered variants (male/female options)
  - Nicknames and surnames are gender-neutral
  - Examples: "Esteban", "Richard", "Hendrik" (male) or "Bridget", "Juliette", "Esther" (female)

- 📛 **Three-Part Names**: Characters get full names with nicknames
  - Format: `FirstName "Nickname" Surname`
  - Example: `Charles "nickname_42" surname_23`
  - Nicknames displayed in quotes for classic pirate styling

- 🗂️ **Name Arrays Ready for Data**:
  - FIRST_NAMES: 36 entries with actual Pirate Borg names filled in
  - MIDDLE_NAMES: 36 entries (placeholders for user to fill)
  - LAST_NAMES: 36 entries (placeholders for user to fill)

#### Class Features System
- ⚔️ **Random Class Features**: Every class gets a unique feature at character creation
  - **Melee Classes** (d6 features): Brute, Rapscallion, Buccaneer, Swashbuckler
  - **Zealot** (d10 features): Priestly powers and divine abilities
  - **Sorcerer** (d6 features): Arcane spells and magical powers

- 🎲 **Class-Specific Feature Dice**:
  - Added `featureDie` property to each class
  - Brute/Rapscallion/Buccaneer/Swashbuckler: Roll d6 for weapon bonuses
  - Zealot: Roll d10 for expanded priestly feature set
  - Sorcerer: Roll d6 for arcane spell selection

- 📜 **Feature Arrays Created**:
  - BRUTE_FEATURES: 6 placeholder entries for melee combat bonuses
  - RAPSCALLION_FEATURES: 6 placeholder entries for sneaky abilities
  - BUCCANEER_FEATURES: 6 placeholder entries for survival skills
  - SWASHBUCKLER_FEATURES: 6 placeholder entries for dueling techniques
  - ZEALOT_FEATURES: 10 placeholder entries for divine powers
  - SORCERER_FEATURES: 6 placeholder entries for arcane spells

- 🖥️ **Display Integration**: Class features shown with class abilities
  - Format: `"Class Abilities: [description]"`
  - Followed by: `"Class Feature: [random feature]"`
  - Both displayed in Class Abilities section

#### UI Enhancements
- 🖨️ **Header Print Button**: Added print button next to "Roll A New Scallywag"
  - Convenient access to print function without scrolling
  - Same styling as footer print button
  - Both buttons call the same `printCharacter()` function

- 🎨 **Button Layout**: Header buttons now display side-by-side
  - Generate button on left, Print button on right
  - Matching size and styling for visual consistency
  - 10px spacing between buttons

#### Class-Specific Ability Modifiers
- ⚡ **Class Modifiers System**: Each class applies unique ability score adjustments
  - **Brute**: STR +1, TOU +1, PRE -1, SPI -1 (tough melee fighter)
  - **Rapscallion**: AGI +2, STR -1, TOU -1 (agile rogue)
  - **Buccaneer**: PRE +2, AGI -1, SPI -1 (charismatic tracker)
  - **Swashbuckler**: STR +1, AGI +1, PRE -1, SPI -1 (balanced duelist)
  - **Zealot**: SPI +2, AGI -1, TOU -1 (spiritual caster)
  - **Sorcerer**: SPI +2, STR -1, TOU -1 (frail occultist)

- 🎲 **Modifier Application Order**:
  1. Roll 3d6 for each ability
  2. Calculate base modifier: (score - 10) / 2 rounded down
  3. Apply class modifiers (add/subtract)
  4. Cap final result at -3 to +6
  5. Apply toughness to HP calculation (minimum HP always 1)

- 💪 **HP Calculation**: `[Hit Die Roll] + Toughness Modifier`
  - Example: Sorcerer rolls d8 (result: 1), has Toughness -2 → Final HP: 1 (not -1)
  - HP can never drop below 1 regardless of negative modifiers

#### Technical Implementation
- **roll2d6LeftToRight()**: New helper function for name generation
  - Returns string like "23" or "45" (not numeric sum)
  - Enables 36 unique combinations (11-66) instead of 11 (2-12)

- **Class Feature Selection**: Switch statement in `generateCharacter()`
  - Reads `featureDie` from class object
  - Rolls appropriate die size
  - Selects from matching feature array
  - Displays in DOM alongside class abilities

- **Name Generation Logic**:
  - Roll gender (d2)
  - Roll three 2d6 left-to-right values
  - Find matching entries in name arrays
  - Apply gender to first name only
  - Combine with quoted nickname format

- **Ability Modifier Logic**:
  - Calculate base modifiers from 3d6 rolls
  - Add class modifiers object to each class
  - Apply modifiers sequentially to all five abilities
  - Cap each ability at -3 to +6 after class modifiers
  - Use final toughness value for HP (with minimum 1 enforcement)

- **Event Listeners**: Added handler for header print button
  - Both `printBtnHeader` and `printBtn` call `printCharacter()`
  - Single function handles print window creation
  - Data passed via URL parameters to print.html

---

### v0.4.0 - "d100 Background System"
**Date**: November 24, 2025

#### Dedicated Print Page System
- 🖨️ **Separate Print-Optimized Page**: New `print.html` for ultra-compact character sheets
  - Print button opens new window with optimized layout
  - All character data passed via URL parameters (JSON encoded)
  - Auto-prints on page load (500ms delay for rendering)
  - Ultra-compact table layout fits everything on one page

  **Layout Design**:
  - 8-column stats grid (STR/AGI/PRE/TOU/SPI/HP/LUCK/SILVER)
  - 3×2 equipment grid (weapon, clothing, hat, container, cheap gear, fancy gear)
  - 2-column trait sections (side-by-side for space efficiency)
  - Font sizes: 6-10pt (labels to values)
  - Minimal spacing: 3-4px gaps, 4px padding
  - Clean borders: 1-2px solid black
  - No colors, shadows, or decorations (printer-friendly)

  **Benefits**:
  - Guaranteed single-page output
  - Optimized for B&W printers
  - Clean table-based layout
  - No screen-only elements
  - Professional character sheet appearance

#### Character Personality Tables
- ☠️ **Idiosyncrasies Table (d20)**: Quirky behaviors and habits
  - 20 entries from "You smoke constantly" to "Extremely obsessive with tasks"
  - Examples: cannibalistic tendencies, fear of prime numbers, voluntary insomniac
  - Placed prominently near Class Abilities with skull and crossbones emoji

- ⚔️ **Unfortunate Incidents & Conditions Table (d20)**: Dark backstory elements
  - 20 entries of traumatic events and ongoing curses
  - Examples: "Your loved ones were burned alive", "An undead spirit possesses you regularly"
  - Adds depth and tragedy to character histories
  - Styled with blood red accents and dramatic borders

#### Devil's Luck System
- 🎲 **Renamed "Omens" to "Devil's Luck"**: More thematic for Pirate Borg
- ⚔️ **Class-specific Devil's Luck**: Each class has different daily luck
  - **Martial Classes** (d2): Brute, Rapscallion, Buccaneer, Swashbuckler (1-2 per day)
  - **Magical Classes** (d4): Zealot, Sorcerer (1-4 per day)
  - Magical classes get more Devil's Luck for riskier spell casting

#### New Background System
- 🎲 **d100 Background Table**: Complete 100-entry background system from Pirate Borg rulebook
  - Each background includes: name, silver dice notation, and special item/trait
  - Examples: sailor, pirate, naval deserter, rumored sorcerer, quartermaster
  - Backgrounds range from 1d8×10s (80-80s) to 3d6×10s (30-180s) silver

- 💰 **Dynamic Silver Generation**: Starting silver now based on background
  - Removed fixed 3d6×10 silver from classes
  - Each background has unique dice formula (1d8×10s, 2d4×10s, 2d6×10s, 2d8×10s, 3d6×10s, 1d10×10s, 1d12×10s)
  - Added `rollSilver()` function to parse and roll dice notation
  - Silver ranges from ~10s to ~180s depending on background

- 🎭 **Background Items/Traits**: Each background grants special item or personality trait
  - Physical items: "a medical kit", "lock picks or a crowbar", "a map and compass"
  - Personality traits: "skill at deception", "good negotiating skills", "strong survival instincts"
  - Circumstantial: "a price on your head", "someone looking for you", "a sizable debt"
  - Special notes: "[roll on instrument table, pg. 27]" for musician/performer

#### Equipment Updates
- 🏺 **RELICS Table Added**: 20 mystical artifacts (d20)
  - Triggered on Fancy Gear roll of 4
  - Items: Cross of the Paragon, Necronomicon pages, Skeleton Key, Great Old One figurine
  - Updated fancy gear logic to handle both RELIC and INSTRUMENT sub-rolls

- 🎵 **Real Equipment Data**: Replaced all placeholder equipment with actual Pirate Borg content
  - CONTAINERS: bucket, bandolier, satchel, backpack, sea chest, dinghy
  - CHEAP_GEAR: lantern, rope, shovel, medical kit, torches, weighted dice
  - FANCY_GEAR: compass, spyglass, fishing rod, fine rum, pocket watch, tent
  - PETS: snake, rat, parrot, monkey, hermit crab, fish in a jar
  - INSTRUMENTS: concertina, fiddle, hurdy-gurdy, mandolin, "voice of an angel"
  - WEAPONS: Marlinspike, Cutlass, Flintlock Pistol, Rapier, Musket (with damage dice)
  - CLOTHING: Rags, Leather Armor, Chain shirt, Conquistador Plate (with armor values)
  - HATS: Bandanna, Tricorne, Morion (with damage reduction values)

#### Technical Implementation
- **Background selection**: roll(100) for d100 table lookup
- **Silver calculation**: Dynamic dice parser handles all notation variants
- **Display format**: "background_name - special_item/trait"
- **Sub-table chaining**: RELIC (d20) and INSTRUMENT (d10) rolls from fancy gear

---

### v0.3.0 - "Random Equipment Tables"
**Date**: November 24, 2025

#### CRITICAL BUG FIXES
- 🐛 **Fixed ability score calculation**: Changed from "3d6 take middle" to "3d6 sum"
  - **Previous Bug**: `rollAbility()` returned middle die (1-6), always giving negative modifiers
  - **Fix**: Now sums all three dice (3-18 range) for proper D&D-style ability scores
  - **Result**: Modifiers now range from -3 to +4 naturally, capped at -3 to +6
  - Test file included: `test_abilities.html` (100 rolls with statistics)

- 🐛 **Fixed Brute HP calculation**: Added missing d12 and d10 cases
  - **Previous Bug**: Brute (d12) and Swashbuckler (d10) showed "NaN" for HP
  - **Fix**: Added conditional cases for d12 and d10 HP dice
  - **Result**: All classes now correctly calculate hit points

#### Equipment System Overhaul
- ⚔️ **Removed class-specific equipment**: All classes now use random tables
  - Classes no longer have hardcoded gear lists
  - All classes roll 3d6 x 10 for starting silver (30-180 silver)

- 🎲 **Added 6 new random equipment tables**:
  1. **WEAPON (d10)**: weapon_option_1 through weapon_option_10
  2. **CLOTHING (d10)**: clothing_option_1 through clothing_option_10
  3. **HAT (d12)**: hat_option_1 through hat_option_12
  4. **CONTAINER (d6)**: container_option_1 through container_option_6
  5. **CHEAP GEAR (d12)**: cheap_gear_option_1-11, plus ROLL_PET trigger
  6. **FANCY GEAR (d12)**: fancy_gear_option_1-11, plus ROLL_INSTRUMENT trigger

- 🐾 **Added sub-tables for special rolls**:
  - **PETS (d10)**: Triggered on Cheap Gear roll of 12
    - pet_sub_option_1 through pet_sub_option_10
  - **INSTRUMENTS (d10)**: Triggered on Fancy Gear roll of 12
    - instrument_sub_option_1 through instrument_sub_option_10

#### UI Changes
- 📊 **New equipment layout**: 3-column grid replacing list format
  - Row 1: Weapon | Clothing | Hat
  - Row 2: Container | Cheap Gear | Fancy Gear
  - Each item shows label + rolled result
  - Responsive: Single column on mobile devices

- 🎨 **Equipment styling**: Boxed grid items with gold labels
  - Dark backgrounds (#000000)
  - Blood red borders (#8b0000)
  - Gold uppercase labels (#d4af37)

#### Technical Implementation
- **Dice rolling logic**: All equipment uses proper array indexing (roll - 1)
- **Conditional sub-rolls**: Cheap Gear 12 → Pet, Fancy Gear 12 → Instrument
- **Silver calculation**: Fixed formula (3d6) × 10 instead of extracting from equipment
- **HTML structure**: Equipment grid with semantic labels and IDs
- **CSS responsive**: 3 columns desktop, 1 column mobile

---

### v0.2.0 - "Spirit of the Damned"
**Date**: November 24, 2025

#### Major Changes
- ✨ **Added SPIRIT attribute**: Fifth ability score for magical characters
  - Updates to HTML, CSS, and JavaScript to support 5-column ability grid
  - Spirit modifier used in ritual descriptions (e.g., "d4 + Spirit hours")
  - Responsive layout: 5 columns on desktop, 3 on mobile

#### Content Updates
- 🏴‍☠️ **CLASSES renamed from MOCK_CLASSES**: Production-ready class data
  - Changed "Wretch" → "Sorcerer" (d8 HP)
  - Changed "Sea Dog" → "Rapscallion" (d8 HP)
  - Changed "Brute" HP from d8 → d12 (more durable tank)
  - Changed "Swashbuckler" HP from d6 → d10 (balanced duelist)
  - Updated class abilities to match Pirate Borg rulebook style

- 🎲 **RITUALS renamed from MOCK_RITUALS**: 20 authentic spells
  - Added: Call of the Sea, Thalassomancy, Light of a Thousand Stars
  - Added: Return from the Locker, Mind Manacles, Mists of Confusion
  - Added: Divination, Phantasmal Fauna, Release the Kraken
  - Added: Reopen the Grave, Mermaid's Kiss, Spiritual Ward
  - Added: Summon the Ferryman, The Black Spot, Weathercraft
  - All ritual descriptions reference Spirit modifier for duration/power

- 💀 **DISTINCTIVE_FLAWS renamed from MOCK_BAD_HABITS**: Production content
  - 20 flaws matching Pirate Borg tone and theme
  - Removed verbose descriptions, kept concise keywords
  - Examples: "Drunken Lush", "Cocky", "Sadistic", "Disloyal"

- ⚓ **PHYS_TRADEMARK added**: New physical characteristics system
  - 20 distinctive pirate features
  - Replaces "Devil's Luck" section with "Physical Trademark"
  - Includes classic pirate traits: peg legs, hooks, scurvy, tattoos
  - Supernatural options: cursed appearance, ghostly features

#### UI Changes
- 📝 **Header updated**: "BAD HABIT" → "DISTINCTIVE FLAWS"
- 🦴 **New section**: "PHYSICAL TRADEMARK" replaces "Devil's Luck"
- ©️ **Copyright updated**: Added proper attribution
  - MORK BORG by Stockholm Kartell & Johan Nohr
  - PIRATE BORG by Luke Stratton, Limithron LLC
  - Generator inspired by SCVMBIRTHER

#### Technical Changes
- Grid layout: 4 columns → 5 columns for abilities
- Mobile responsive: 2 columns → 3 columns on small screens
- Function updated: `generateCharacter()` now handles Spirit and trademark
- HTML structure: Added `<div id="spirit">` and `<div id="trademark">`

---

### v0.1.0 - "Initial Release"
**Date**: November 24, 2025

#### Features
- ✅ Core character generation system
- ✅ HTML5 semantic structure with character sheet layout
- ✅ Dark/grimy CSS aesthetic (black, blood red, gold)
- ✅ Print-optimized layout with @media rules
- ✅ JavaScript dice rolling (d4, d6, d8, d10, d12, d20)
- ✅ 3d6 take-middle ability score system
- ✅ 5 initial classes (changed to 6 in v0.2.0)
- ✅ Mock data placeholders for all character elements
- ✅ Auto-generate on page load
- ✅ Manual regenerate button
- ✅ Print functionality

#### Initial Content
- 20 pirate names
- 5 classes with equipment and abilities
- 10 backgrounds (seafaring stories)
- 10 bad habits (verbose descriptions)
- 5 arcane rituals (placeholder spells)
- 8 "Devil's Luck" entries (removed in v0.2.0)

#### Technical Implementation
- Pure vanilla JavaScript (no frameworks)
- CSS Grid for responsive layout
- Monospace/courier fonts for old-school RPG feel
- `.no-print` class for screen-only elements
- Random array selection for all character elements

---

## File Structure

```
pirate-borg-generator/
├── index.html          # Main HTML structure
├── style.css           # Dark aesthetic styling + print rules
├── script.js           # Character generation logic
└── README.md           # This file
```

## Technical Details

### Dice Rolling System
```javascript
roll(sides)           // Single die: d4, d6, d8, d10, d12, d20
rollDice(count, sides) // Multiple dice: 3d6, 2d8, etc.
rollAbility()          // 3d6 take middle value (Mork Borg method)
```

### Ability Score Calculation
1. Roll 3d6
2. Sort the three dice
3. Take the middle value (discard highest and lowest)
4. Calculate modifier: `(score - 10) / 2` rounded down
5. Format as +N or -N for display

### HP Calculation
```javascript
HP = [Class Hit Die] + Toughness Modifier
Minimum HP = 1
```

Classes use: d12 (Brute), d10 (Swashbuckler), d8 (most classes)

### Print Optimization
- Hides: Header, footer, generate button, print button
- Shows: Clean character sheet on white background
- Black borders and text for printer-friendly output
- Page-break avoidance for single-page printing

## Browser Compatibility

- ✅ Chrome/Edge (Chromium): Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Mobile browsers: Responsive layout

**Requirements**: Any modern browser with JavaScript enabled

## Credits

### Game System
- **MORK BORG**: Stockholm Kartell & Johan Nohr
- **PIRATE BORG**: Luke Stratton, Limithron LLC

### Generator
- **Layout Inspiration**: SCVMBIRTHER (Mork Borg generator)
- **Development**: Michael Lavery & Claude Code (2025)
- **Theme**: "Seaworthy shenanigans, in slightly different vector and time-period, with magic and undead, and a cocktail called ASH"

## License

This generator is a fan-made tool for personal use. PIRATE BORG and MORK BORG are copyrighted properties of their respective owners. This tool is not officially endorsed or affiliated with Stockholm Kartell, Johan Nohr, Luke Stratton, or Limithron LLC.

## Future Enhancements

Potential additions for future versions:
- [ ] Full rulebook data for all tables
- [ ] Equipment generator with treasure tables
- [ ] Ship generation system
- [ ] Crew roster management (multiple characters)
- [ ] Save/export characters to JSON
- [ ] Custom backgrounds and flaws input
- [ ] Advanced ritual descriptions with mechanics
- [ ] Portrait/image upload for characters
- [ ] Dark mode toggle (currently always dark)

---

**Current Version**: v0.7.0 "Landlubber Abilities & Bug Fixes"
**Last Updated**: November 30, 2025
**Status**: Active Development

*"The seas call, the dead rise, and ASH flows freely..."* 🏴‍☠️
