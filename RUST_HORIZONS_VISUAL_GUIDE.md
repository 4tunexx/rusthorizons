# RUST HORIZONS - VISUAL DESIGN GUIDE

## 🎨 Color Palette

### Primary Colors (Background & Environment)
```
Rust Red         #8B4513  RGB(139, 69, 19)
Burnt Orange     #CC5500  RGB(204, 85, 0)
Storm Gray       #2F4F4F  RGB(47, 79, 79)
Charcoal Black   #1A1A1A  RGB(26, 26, 26)
Ash White        #D3D3D3  RGB(211, 211, 211)
```

### Accent Colors (UI & Effects)
```
Toxic Green      #39FF14  RGB(57, 255, 20) - Radiation indicator
Radioactive      #00FF00  RGB(0, 255, 0) - Critical damage/alerts
Dusty Brown      #614B3B  RGB(97, 75, 59) - Fabric/cloth elements
Steel Gray       #708090  RGB(112, 128, 144) - Metal/tech
Blood Red        #8B0000  RGB(139, 0, 0) - Health indicator
```

### Specific UI Palettes

**Menu Backgrounds:**
- Primary: Charcoal (#1A1A1A) with Rust Red border (#8B4513)
- Secondary: Storm Gray (#2F4F4F) with Burnt Orange accents (#CC5500)

**Text:**
- Main: Ash White (#D3D3D3)
- Warnings: Toxic Green (#39FF14)
- Critical: Blood Red (#8B0000)
- Disabled: Dust Brown (#614B3B)

**HP/Resource Bars:**
- Health: Blood Red (#8B0000) → Ash White (#D3D3D3)
- Stamina: Steel Gray (#708090) → Ash White (#D3D3D3)
- Radiation: Toxic Green (#39FF14) → Charcoal (#1A1A1A)
- Curse/Debuff: Purple (#8B008B)

---

## 🎭 Visual Style Guide

### Enemy Design Principles

**Iron Hound:**
- Base: Dark metal gray with crimson glowing eyes
- Details: Mechanical legs, exposed gears, rust streaks
- Aura: Faint red glow around eyes

**Rad-Ghoul:**
- Base: Grayish-green skin with bioluminescent glowing veins
- Details: Twisted humanoid form, asymmetrical mutations
- Aura: Toxic green glow around body

**Mutant-Brute:**
- Base: Darkened organic matter with protruding metal plates
- Details: Hunched posture, grotesquely enlarged limbs
- Aura: Sickly green/yellow haze

**Scrap-Drone:**
- Base: Geometric metal construction, rusted exterior
- Details: Spinning components, targeting reticule eyes
- Aura: Faint blue scanning light

**Rust Serpent:**
- Base: Long metallic body with corroded exterior
- Details: Jagged rust protrusions along spine
- Aura: None (silent, deadly)

### NPC Design Principles

**The Archivist (Data-Pad):**
- Appearance: Glowing blue screen with weathered edges
- Style: Retro-futuristic terminal
- Color: Cyan (#00FFFF) text on black background

**Fixer Finch:**
- Appearance: Weathered survivor, tool-laden apron
- Style: Techno-scrap repurposes (goggles, armor plating)
- Colors: Rust browns, steel grays, Burnt orange accents

**Vesper:**
- Appearance: Lean, scarred, tactical gear
- Style: Combat-hardened, practical
- Colors: Storm gray, dark leather, weapon metals

**Kael:**
- Appearance: Contemplative, ancient robes/gear
- Style: Monk-like, but with tech-integration
- Colors: Dusty browns, deep purples, silver accents

### Weapon Design

**Rusty Pipe Wrench:**
- Shape: Heavy wrench with corroded metal
- Color: Rust orange (#8B4513) with gray streaks
- Glow: None

**Scrap-Metal Bludgeon:**
- Shape: Weighted club made of bolted-together metals
- Color: Gunmetal gray (#36454F) with rust spots
- Glow: None

**Salvage Rifle:**
- Shape: Cobbled-together rifle with mismatched parts
- Color: Dark steel (#36454F) with copper accents (#B87333)
- Glow: Faint charging glow when active

**Plasma Cutter:**
- Shape: Futuristic cutting tool with blade of energy
- Color: Silver handle (#C0C0C0), glowing cyan blade (#00FFFF)
- Glow: Bright cyan energy effect

### Armor Design

**Scrap-Metal Vest:**
- Base: Hodgepodge of metal plates stitched together
- Color: Rust browns and steel grays
- Style: Clearly improvised, layered protection

**Hazmat Suit:**
- Base: Sealed protective garment with visible taping
- Color: Mustard yellow (#FFDB58) with black seals
- Style: Bulky, protective, Industrial

---

## 🏗️ Environment Design

### Ashfall Wastes
**Color Palette:** Rust reds, sand browns, dark grays
**Density:** Sparse, rocky outcroppings
**Atmosphere:** Dust haze, abandoned structures
**Key Objects:** Rusted vehicle hulks, stone pillars, scattered metal

### Rustwood Plains
**Color Palette:** Burned browns, corroded oranges, black deadwood
**Density:** Medium (scattered dead trees and metal structures)
**Atmosphere:** Barren, industrial decay
**Key Objects:** Metal towers, broken machinery, skeletal trees

### Junktown Settlement
**Color Palette:** Multi-colored scrap (mixed metal hues)
**Density:** High (tightly packed buildings)
**Atmosphere:** Organized chaos, makeshift
**Key Objects:** Scrap buildings, trading posts, watch towers

### Toxic Bog
**Color Palette:** Sickly greens, murky browns, black water
**Density:** Dense (vegetation, obstacles)
**Atmosphere:** Dangerous, mutative, hostile
**Key Objects:** Sludge pools, twisted flora, chemical containers

### Forgotten Rail Lines
**Color Palette:** Rusted metal (#8B4513), aged wood, dark stone
**Density:** Medium (linear path with obstacles)
**Atmosphere:** Eerie, abandoned, dangerous
**Key Objects:** Rail tracks, overgrown signal boxes, drone nests

### The Citadel
**Color Palette:** Cold steel (#36454F), harsh grays, deep blacks
**Density:** Very dense (complex architecture)
**Atmosphere:** Imposing, technological, oppressive
**Key Objects:** Turret placements, force fields, data nodes

---

## 🖼️ Sprite Asset Requirements

### Priority 1 (Critical)
- [ ] 8 Enemy sprites (Scavenger Bot through Drone Swarm)
- [ ] 4 NPC portraits (Archivist, Finch, Vesper, Kael)
- [ ] 4 Weapon sprites (above melee/ranged)
- [ ] 2 Armor sprites (Vest, Hazmat)
- [ ] UI menu backgrounds (3-4 variants)

### Priority 2 (High)
- [ ] Resource icons (6x crafting materials)
- [ ] Quest item sprites (Data-Pad, keys, etc.)
- [ ] Environmental objects (turrets, barriers, generators)
- [ ] Particle effects (radiation glow, electricity, dust)

### Priority 3 (Medium)
- [ ] Additional NPC variants (generic settlers)
- [ ] Alternative weapon skins
- [ ] Environmental hazards (toxic pools, radiation)
- [ ] Decorative elements (ruins, wreckage)

### Priority 4 (Polish)
- [ ] Seasonal/regional variants
- [ ] Boss transformation animations
- [ ] Special effect overlays
- [ ] Cosmetic skins

---

## 🎬 Visual Effects

### Status Effect Icons
```
Radiation:    Green star/hazard symbol
Mutation:     Purple twisted shape
Silence:      Muted icon
Curse:        Dark purple chains
Burn:         Orange fire
Freeze:       Blue snowflake
```

### Particle Effects
```
Explosion:    Orange/red flash with smoke
Radiation:    Green toxic mist
Electric:     Blue/cyan arcs
Dust:         Brown haze
Magic:        Purple sparkles
```

### Screen Effects
- **Radiation Damage:** Green vignette with geiger sound
- **Critical Hit:** Red flash with impact
- **Level Up:** Golden particle burst
- **Quest Complete:** Blue/cyan notification

---

## 📐 Sprite Specifications

### Standard Dimensions
- **NPCs:** 32x48 pixels (standing height)
- **Enemies:** 24x32 to 48x48 (varies by size)
- **Items:** 16x16 pixels (inventory icons)
- **Weapons:** 16x32 pixels (held in hand)
- **Armor:** 32x32 pixels (worn on body)

### Animation Frames
- **Idle:** 2-4 frames (1-2 second loop)
- **Walk:** 4-6 frames (0.5 second per frame)
- **Attack:** 3-5 frames (0.2 second per frame)
- **Death:** 3-6 frames (final frame holds)

---

## 🖍️ Design Tools & Resources

### Recommended Pixel Art Software
- Aseprite (professional, sprite-focused)
- Pico-8 (accessible, limited palette)
- Krita (free, powerful)
- GrafxKid's Pixel Art tutorials (YouTube reference)

### Color Palette Tools
- Coolors.co (palette generator)
- Palette.app (interactive adjustments)
- Lospec.com (palette sharing community)

### Pixel Art Asset Sources
- itch.io (pixel art packs)
- OpenGameArt.org (open source)
- Gumroad (indie artists)
- Commission artists on Fiverr/Upwork

---

## 📋 Version Control Notes

**Art Assets Directory:** `packages/client/public/img/`

Suggested folder structure:
```
img/
├── mobs/
│   ├── scavengerbot.png
│   ├── ironhound.png
│   └── ...
├── npcs/
│   ├── archivist.png
│   ├── fixer_finch.png
│   └── ...
├── weapons/
│   ├── rustypipewrench.png
│   └── ...
├── armor/
├── items/
├── environments/
│   ├── ashfall_wastes/
│   ├── rustwood_plains/
│   └── ...
└── ui/
    ├── menu_background.png
    ├── buttons/
    └── icons/
```

---

**Design Guide Version:** 1.0  
**Last Updated:** February 8, 2026  
**Status:** Ready for Art Team

