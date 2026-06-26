# ⬡ AgentCard

[![Python version](https://img.shields.io/badge/python-3.10%2B-blue?style=flat-square&logo=python)](https://python.org)
[![Textual](https://img.shields.io/badge/textual-8.0%2B-ff7700?style=flat-square)](https://textual.textualize.io)
[![psutil](https://img.shields.io/badge/psutil-5.9%2B-3c873a?style=flat-square)](https://github.com/giampaolo/psutil)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](LICENSE)

High-density terminal dashboard that scans your local environment and aggregates what agentic CLI tools are active, what MCP servers they expose, which models they use, and your token burn. Four quadrants, zero outbound requests.

![Animation showing AgentCard in action](docs/demo.gif)

## Features

- **16 CLI Detectors** — Scans processes and config directories for Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor, Amp, Cline, Roo Code, Kilo Code, Kiro, Crush, OpenCode, Factory Droid, Antigravity, Kimi CLI, Qwen Code
- **MCP Discovery** — Aggregates MCP server configurations from `~/.claude`, `~/.cursor`, `~/.opencode`, `~/.n8n` and more
- **Model Frequency Charts** — Parses shell history and log files for model mentions, renders horizontal ASCII bar charts
- **Token Burn Metrics** — Estimates cost, velocity, and session statistics from local log files
- **Live & Demo Modes** — Run real scans or use built-in mock data for a polished demo
- **2-second Auto-refresh** — Reactive timers keep the display current
- **Privacy-first** — Operates entirely locally. No network calls, no telemetry, no external dependencies for data.

## Installation

```bash
# Install dependencies
pip install textual psutil

# Verify everything works in demo mode
python agent_card.py --demo
```

> [!TIP]
> The app also runs without psutil (process scanning degrades gracefully). Only `textual` is required.

## Usage

```bash
# Live mode — scans actual processes and configs
python agent_card.py

# Demo mode — uses built-in mock data (great for screenshots or testing)
python agent_card.py --demo
```

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `q` | Quit |
| `r` | Force refresh |
| `d` | Toggle demo/live mode |
| `t` | Toggle dark/light theme |

## How it works

AgentCard is a single Python file powered by the [Textual](https://textual.textualize.io) TUI framework. Every 2 seconds it scans the local environment and renders four quadrants:

### Quadrant 1 — Active CLI Ecosystem (`🤖`)

Scans the process table (via `psutil`) and well-known configuration directories for 16 agentic CLI platforms. Each tool shows one of four states:

| State | Indicates |
|-------|-----------|
| `RUNNING` | A matching process is active (PID, CPU, memory, uptime shown) |
| `IDLE` | Configuration directory found but no running process |
| `DETECTED` | Traces found (e.g. VS Code extension files) but no config dir |
| `ABSENT` | No process, config, or traces detected |

### Quadrant 2 — Skills & MCP Discovery (`🛠️`)

Scans MCP server configuration files across multiple tools and aggregates server names with their tool counts. Sources include `~/.claude/mcpServers.json`, `~/.cursor/mcp.json`, `~/.n8n/mcp.json`, and others.

### Quadrant 3 — Most Used Models (`📊`)

Walks log directories (`~/.claude`, `~/.cursor`, etc.) and shell history files (`~/.bash_history`, `~/.zsh_history`) for model name occurrences. Renders a ranked list with horizontal ASCII progress bars showing relative frequency.

### Quadrant 4 — Performance & Burn (`💳`)

Extracts token usage data from JSONL/JSON log files and computes:
- Total token volume (input/output split)
- Estimated cost (blended rate: input $3/M, output $15/M tokens)
- Token velocity (tokens/minute)
- Session count and average tokens per session
- Environment integrity index (checks for `python3`, `node`, `git`, `pip3`)

### Detected platforms

| Platform | Detection method |
|----------|-----------------|
| Claude Code | Process `claude*`, dir `~/.claude` |
| Codex | Process `codex*`, dir `~/.codex` |
| GitHub Copilot CLI | Process `copilot*`, dir `~/.copilot` |
| Gemini CLI | Process `gemini*`, dir `~/.gemini` |
| Cursor | Process `cursor`, dir `~/.cursor` |
| Amp | Process `amp*`, dir `~/.amp` |
| Cline | Dir `~/.cline`, VS Code extension |
| Roo Code | Process `roo*`, dir `~/.roo` |
| Kilo Code | Process `kilo*`, dir `~/.kilo` |
| Kiro | Process `kiro`, dir `~/.kiro` |
| Crush | Dir `~/.crush` |
| OpenCode | Process `opencode`, dir `~/.opencode` |
| Factory Droid | Process `factory-droid`, dir `~/.factory-droid` |
| Antigravity | Process `antigravity*`, dir `~/.antigravity` |
| Kimi CLI | Process `kimi*`, dir `~/.kimi` |
| Qwen Code | Process `qwen*`, dir `~/.qwen` |

## Privacy

AgentCard does **not** make any outbound network requests. All scanning is performed against the local filesystem and process table. The environment integrity check only verifies that common tooling (`python3`, `node`, `git`, `pip3`) is available on `PATH`.

## Running from source

```bash
git clone https://github.com/shafiqimtiaz/agent-card.git
cd agent-card
pip install textual psutil
python agent_card.py --demo    # verify it works
python agent_card.py           # live mode
```

## Tech stack

- [Textual](https://textual.textualize.io) — Python TUI framework (v8+)
- [psutil](https://github.com/giampaolo/psutil) — process and system utilities
- Python 3.10+ standard library only — no additional runtime deps for data scanning

## Versioning

This project follows [SemVer](https://semver.org). See the [changelog](CHANGELOG.md) for release history.
