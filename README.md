<!-- prettier-ignore -->
<div align="center">

# ◓ Pokégent

[![Node.js](https://img.shields.io/badge/node-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Ink](https://img.shields.io/badge/ink-5.0%2B-ff7700?style=flat-square)](https://github.com/vadimdemedes/ink)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
<br>
[![GitHub release](https://img.shields.io/github/v/release/shafiqimtiaz/pokegent?style=flat-square&logo=github)](https://github.com/shafiqimtiaz/pokegent/releases)
[![GitHub stars](https://img.shields.io/github/stars/shafiqimtiaz/pokegent?style=flat-square)](https://github.com/shafiqimtiaz/pokegent)

Terminal dashboard that shows what's running in your Pokémon AI coding ecosystem — 16 Pokémon species (CLI) detectors, TMs/HMs (MCP) discovery, movepool usage charts, PP burn metrics, and a shareable HTML Trainer Card with animated sprites.

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Share](#share-your-setup)

</div>

Pokégent is a Node.js TUI that scans your local machine to give you a live picture of your Pokémon AI tooling landscape. It detects running AI processes as Pokémon, finds TMs/HMs (installed MCP servers), tallies movepool (model) usage from shell history and log files, and estimates PP burn rates (tokens) — all without ever making a network request.

> [!NOTE]
> Pokégent runs entirely locally. No telemetry, no outbound calls, no external services. It reads the process table, configuration directories, and log files on your machine and renders the results in your terminal.

## Features

- **16 Pokémon species detectors** — Scans for Mewtwo, Venusaur, Blastoise, Pikachu, Eevee, Charizard, Charmander, Gengar, Snorlax, Zubat, Jigglypuff, Ditto, Machamp, Rayquaza, Lapras, and Dragonite
- **TM/HM (MCP) discovery** — Aggregates tool servers from `~/.claude`, `~/.cursor`, `~/.opencode`, `~/.n8n` and other standard config paths
- **Movepool (Model) frequency charts** — Parses terminal history and log files for model mentions, renders horizontal ASCII bars
- **PP (Token) burn analytics** — Battles (sessions), PP velocity, input/output splits, and estimated cost from local logs
- **Trainer scoring system** — 0-1000 points across Pokémon, TMs/HMs, movepool, and PP burn metrics
- **7 Trainer badges** — 🏆 Pokédex Master, 🦄 Legendary Trainer, 🧬 Hybrid Evolution, 🔥 Blast Burn, 💎 Elite Four, ⚡ Thunder Shock, 🌐 Safari Zone Master
- **Shareable HTML Trainer Card** — Generate a beautiful, self-contained HTML Trainer Card featuring animated showdown sprites for active Pokémon
- **2-second auto-refresh** — Live updates so you can watch your ecosystem change as you work
- **Demo mode** — Built-in realistic mock data for previews, screenshots, or evaluation

## Installation

```bash
# Run directly with npx (zero install)
npx pokegent

# Or install globally
npm install -g pokegent
```

## Usage

```bash
# Live TUI dashboard
npx pokegent

# Demo mode with mock data
npx pokegent --demo

# Generate shareable card + copy markdown to clipboard
npx pokegent --share

# Generate HTML card file
npx pokegent --html

# Export raw JSON data
npx pokegent --json
```

### Keyboard shortcuts (TUI mode)

| Key | Action |
|-----|--------|
| `q` | Quit the application |
| `r` | Force an immediate refresh |
| `s` | Share card (copy markdown to clipboard) |
| `h` | Generate HTML card |

## Share your setup

The viral mechanic: **press `s` to copy a markdown card to clipboard, or `h` to generate an HTML file.**

### Markdown card (for Discord, GitHub, Slack)

```bash
npx pokegent --share
```

This prints the terminal card AND copies a markdown version to your clipboard. Paste it anywhere.

### HTML Trainer Card (for GitHub Pages, Twitter, anywhere)

```bash
npx pokegent --html
```

This generates `pokegent.html` — a self-contained, dark-red/black themed, animated card featuring dynamic Pokémon gifs and OpenGraph meta tags for beautiful link previews. Drop it in a repo, open it in a browser, or share the raw link.

## Scoring

Your setup gets scored 0-1000 points:

| Dimension | Max Points | How |
|-----------|-----------|-----|
| Pokémon running | 350 | 75 per running Pokémon (cap 4) + 50 bonus for 3+ simultaneous |
| TMs & HMs (MCP) | 200 | 10 per server (cap 15) + 1 per tool (cap 50) |
| Movepool diversity | 200 | 30 per unique model (cap 5) + 50 for using 3+ providers |
| PP velocity + battles | 250 | PP velocity tiers + battle count |

### Rarity tiers

| Score | Tier |
|-------|------|
| 900+ | 🌟 MYTHICAL CHAMPION — Top 1% |
| 750+ | 💎 SHINY LEGENDARY — Top 5% |
| 600+ | 🥇 POKÉMON MASTER — Top 15% |
| 400+ | 🥈 GYM LEADER — Top 35% |
| 200+ | 🥉 ELITE TRAINER — Top 60% |
| <200 | 🌱 BEGINNER TRAINER — everyone starts here |

## What gets scanned

<details>
<summary><strong>16 Pokémon species and their detection signals</strong></summary>

| Pokémon | CLI Platform | Process match | Config path |
|---------|--------------|---------------|-------------|
| Mewtwo | Claude Code | `claude*` | `~/.claude` |
| Venusaur | Codex | `codex*` | `~/.codex` |
| Blastoise | GitHub Copilot CLI | `copilot*` | `~/.copilot` |
| Pikachu | Gemini CLI | `gemini*` | `~/.gemini` |
| Eevee | Cursor | `cursor` | `~/.cursor` |
| Charizard | Amp | `amp*` | `~/.amp` |
| Charmander | Cline | — | `~/.cline`, VS Code ext |
| Gengar | Roo Code | `roo*` | `~/.roo` |
| Snorlax | Kilo Code | `kilo*` | `~/.kilo` |
| Zubat | Kiro | `kiro` | `~/.kiro` |
| Jigglypuff | Crush | — | `~/.crush` |
| Ditto | OpenCode | `opencode` | `~/.opencode` |
| Machamp | Factory Droid | `factory-droid` | `~/.factory-droid` |
| Rayquaza | Antigravity | `antigravity*` | `~/.antigravity` |
| Lapras | Kimi CLI | `kimi*` | `~/.kimi` |
| Dragonite | Qwen Code | `qwen*` | `~/.qwen` |

</details>

<details>
<summary><strong>Scanned moves / models (19 patterns)</strong></summary>

claude-4-opus, claude-4-sonnet, claude-3.7-sonnet, claude-3.5-sonnet, claude-3-haiku, gpt-4.1, gpt-4o, gpt-4-turbo, o4-mini, o3, o3-mini, o3-pro, gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, deepseek-v3, deepseek-r1, qwen-3, llama-4

</details>

## Tech stack

- **[Ink](https://github.com/vadimdemedes/ink)** — React for CLI. Provides the TUI framework.
- **[ps-list](https://github.com/sindresorhus/ps-list)** — Cross-platform process listing.
- **Node.js 18+** — All scanning logic uses built-in modules (`fs`, `path`, `child_process`).

## Running from source

```bash
git clone https://github.com/shafiqimtiaz/pokegent.git
cd pokegent
npm install
npx tsx src/index.ts --demo
npx tsx src/index.ts
```

## Privacy

Pokégent runs 100% locally. No data leaves your machine. No telemetry. No analytics. No network requests. Your AI tooling data stays on your computer.
