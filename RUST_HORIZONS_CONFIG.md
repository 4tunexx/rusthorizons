# RUST HORIZONS - Transformation Config

## Story Overview
**Rust Horizons: The Tale of the Spark Seeker** - A post-apocalyptic 2D MMORPG where players journey through a rust-choked world to find "The Spark" and activate Project: Genesis before The Overmind destroys all remaining hope for humanity.

---

## Core Characters (NPCs)

### Main Quest Givers
1. **The Archivist** (Fragment NPC)
   - Role: Primary quest giver, sends players on Spark Seeker missions
   - Location: Starting area, Ashfall Wastes
   - Dialogue: Speaks through Data-Pad, guides players through the story

2. **Fixer Finch** (Scrap Mechanic)
   - Role: Upgrade vendor, engineering quest giver
   - Location: Junktown Settlement
   - Specializes in: Equipment upgrades, tech components
   
3. **Vesper** (Lead-Slinger)
   - Role: Combat trainer, bounty giver
   - Location: Junktown Settlement
   - Specializes in: Combat abilities, dangerous expeditions

4. **Kael** (Tech-Shaman)
   - Role: Knowledge keeper, ancient tech expert
   - Location: Junktown Settlement
   - Specializes in: Lore, historical technology

---

## World Regions

### Main Areas
1. **Ashfall Wastes** (Starting Area)
   - Description: Desolate canyons covered in ash, rust-colored rocks
   - Purpose: Tutorial/early game exploration
   - Enemies: Weak scavenger bots, mutated creatures

2. **Rustwood Plains** 
   - Description: Barren plains with rusted metal structures, dead trees
   - Purpose: Mid-game hunting ground
   - Enemies: Iron Hounds, Scrap Drones, Rust Serpents
   - Key Quest: Reactivate Comm-Relay Tower

3. **Junktown Settlement**
   - Description: Hub city built from scavenged refuse, sprawling and chaotic
   - Purpose: Main settlement, quest hub, trading
   - NPCs: Fixer Finch, Vesper, Kael
   - Enemies: None (safe zone)

4. **Toxic Bog**
   - Description: Festering chemical swamp, mutated flora, toxic sludge pools
   - Purpose: Challenging mid-game area
   - Enemies: Rad-Ghouls, Mutant-Brutes, Toxic Biters
   - Key Quest: Gather rare mutagenic components

5. **Forgotten Rail Lines**
   - Description: Ancient railway through wasteland, overgrown with rust
   - Purpose: Dungeon-style area
   - Enemies: Drone Patrols, Scrap-Tanks, Service Bots
   - Key Quest: Disable security systems

6. **The Citadel of the Architects**
   - Description: Massive fortified structure, dust storm shrouded
   - Purpose: End-game boss area
   - Enemies: Laser Turrets, Scrap-Tanks, Cyber-Sentinel (final boss)
   - Key Quest: Activate Project Genesis

---

## Enemy Types (Mobs)

### Tier 1 (Weak)
- **Scavenger Bot** - Basic robot, weak AI
- **Rust-Rat** - Mutated rat with metal protrusions
- **Broken Drone** - Malfunctioning surveillance unit

### Tier 2 (Medium)
- **Iron Hound** - Quadrupedal killing machine, crimson optics
- **Rad-Ghoul** - Humanoid creature twisted by radiation
- **Scrap-Drone** - Advanced patrol drone
- **Rust Serpent** - Long, metallic mutated snake

### Tier 3 (Hard)
- **Mutant-Brute** - Grotesque humanoid abomination
- **Scrap-Tank** - Heavily armored mobile fortress
- **Drone Swarm Alpha** - Coordinated group of advanced drones

### Boss
- **Cyber-Sentinel (The Overmind's Avatar)** - Towering entity of data and repurposed machinery

---

## Resources & Items

### Scavenging Resources (replaces fishing/foraging/mining)
- **Scrap Metal** - From deconstructing old machinery
- **Tech Component** - From broken drones and devices
- **Rad-Shard** - Crystallized radiation, used in advanced crafting
- **Molecular Catalyst** - Rare material for powerful upgrades
- **Data-Core Fragment** - Pieces of old AI systems

### Crafting Categories
- **Melee Weapons**: Rusty Pipes, Plasma Cutters, Metal Clubs
- **Ranged Weapons**: Salvage Rifles, Shock Pistols, Bolt Throwers
- **Armor**: Scrap-Metal Vest, Hazmat Suit, Reinforced Exoskeleton
- **Tech Gear**: Data-Pad, Scanner, Radiation Detector

### Quest Items
- **Data-Pad** - Contains quest logs and story lore
- **Comm-Relay Key** - Reactivates towers
- **Genesis Keycard** - Unlocks Citadel access
- **Overmind Fragments** - Pieces of defeated avatars

---

## Progression Path (Story Quests)

### Act 1: The Spark Seeker's Beginning
1. **[COMPLETE] Discover the Data-Pad** - Tutorial, learn controls
2. **Reactivate Comm-Relay Tower** - First combat encounter with Iron Hounds
3. **Reach Junktown** - Meet Fixer Finch, Vesper, Kael

### Act 2: Gathering Strength
4. **Retrieve Components from Toxic Bog** - Hazmat encounter, collect rad-shards
5. **Upgrade Gear** - Return to Fixer with components
6. **Scout the Forgotten Rail Lines** - Stealth and combat challenges

### Act 3: The Final Push
7. **Breach the Citadel** - Overcome automated defenses
8. **Confront The Overmind's Avatar** - Epic boss battle
9. **Activate Project Genesis** - The Spark Ignites (ending cutscene)

### Act 4: The New Dawn (Post-Game)
10. **Ongoing Missions** - Hunt remaining Overmind forces, rebuild settlements

---

## Stat System Mapping

The core combat stats STAY THE SAME but are recontextualized:

```
crush    → Impact damage (heavy melee)
slash    → Cutting damage (sharp melee)
stab     → Precision damage (ranged/tech)
archery  → Ranged weapon skill
magic    → Energy/Plasma damage
```

---

## Color Palette (UI Theme)

- **Primary**: Rust Red (#8B4513), Burnt Orange (#CC5500)
- **Secondary**: Storm Gray (#2F4F4F), Ash White (#D3D3D3)
- **Accent**: Toxic Green (#39FF14), Radioactive (#00FF00)
- **Background**: Dust Brown (#614B3B), Dark Charcoal (#1A1A1A)

---

## Asset Replacement Priority

### HIGH PRIORITY (Do First)
1. Enemy sprites → Robots, mutants, cyber creatures
2. NPC portraits → Survivors, mechanics, scavengers
3. Weapon icons → Tech weapons, pipes, cutters
4. UI background → Wasteland aesthetic (corroded metal, sand)

### MEDIUM PRIORITY
1. Map tilesets → Rust, concrete, sand, toxic sludge
2. Particle effects → Dust, radiation, sparks
3. Environmental objects → Wreckage, scrap piles, bunker doors

### LOW PRIORITY (Keep from Kaetram for now)
1. Some UI elements if they don't conflict
2. Sound system (rename music regions)
3. Animation systems (reuse existing)

---

## Development Checklist

- [ ] Update mobs.json with wasteland enemies
- [ ] Update items.json to waseland weapons/armor
- [ ] Create Spark Seeker NPCs in npcs.json
- [ ] Rewrite achievements.json as Rust Horizons quests
- [ ] Rename regions in map data
- [ ] Update shop vendor names
- [ ] Create new sprite art or find pixel art resources
- [ ] Update UI colors to wasteland theme
- [ ] Test quest progression flow
- [ ] Implement story dialogue sequences
- [ ] Create end-game boss encounter

---

## Next Steps
1. **Start with NPCs** - Create all Spark Seeker characters
2. **Then Mobs** - Define wasteland enemy types
3. **Then Items** - Transform weapons and armor
4. **Then Quests** - Implement story missions
5. **Finally Art** - Replace sprites with wasteland aesthetic

