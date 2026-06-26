import path from 'path';
import os from 'os';

const home = os.homedir();

export const APP_TITLE = '◓ Pokégent';
export const VERSION = '2.0.0';
export const REFRESH_INTERVAL = 2000;

export interface CliSignature {
  process: string[];
  config: string[];
  icon: string;
  pokemonId: number;
}

export const CLI_SIGNATURES: Record<string, CliSignature> = {
  'Mewtwo':        { process: ['claude', 'claude-code'],            config: ['~/.claude', '~/.claude.json', '~/.config/claude'],             icon: '🔮', pokemonId: 150 },
  'Venusaur':      { process: ['codex', 'openai-codex'],            config: ['~/.codex', '~/.config/codex'],                                icon: '🍃', pokemonId: 3 },
  'Blastoise':     { process: ['copilot', 'github-copilot'],        config: ['~/.copilot', '~/.config/github-copilot'],                     icon: '🐢', pokemonId: 9 },
  'Pikachu':       { process: ['gemini', 'gemini-cli'],             config: ['~/.gemini', '~/.config/gemini'],                              icon: '⚡', pokemonId: 25 },
  'Eevee':         { process: ['cursor'],                           config: ['~/.cursor', '~/.cursor-server'],                              icon: '🦊', pokemonId: 133 },
  'Charizard':     { process: ['amp', 'amp-cli'],                   config: ['~/.amp', '~/.config/amp'],                                    icon: '🔥', pokemonId: 6 },
  'Charmander':    { process: ['cline'],                            config: ['~/.cline', '~/.vscode/extensions/saoudrizwan.claude-dev-*'],  icon: '🦎', pokemonId: 4 },
  'Gengar':        { process: ['roo', 'roo-code'],                  config: ['~/.roo', '~/.roo-code'],                                      icon: '👻', pokemonId: 94 },
  'Snorlax':       { process: ['kilo', 'kilo-code'],                config: ['~/.kilo', '~/.kilo-code'],                                    icon: '🐻', pokemonId: 143 },
  'Zubat':         { process: ['kiro'],                             config: ['~/.kiro', '~/.config/kiro'],                                  icon: '🦇', pokemonId: 41 },
  'Jigglypuff':    { process: ['crush'],                            config: ['~/.crush'],                                                   icon: '🎈', pokemonId: 39 },
  'Ditto':         { process: ['opencode'],                         config: ['~/.opencode', '~/.config/opencode'],                          icon: '🍮', pokemonId: 132 },
  'Machamp':       { process: ['factory', 'factory-droid'],         config: ['~/.factory-droid'],                                           icon: '💪', pokemonId: 68 },
  'Rayquaza':      { process: ['antigravity', 'ag-cli'],            config: ['~/.antigravity'],                                             icon: '🐉', pokemonId: 384 },
  'Lapras':        { process: ['kimi', 'kimi-cli'],                 config: ['~/.kimi', '~/.config/kimi'],                                  icon: '⛵', pokemonId: 131 },
  'Dragonite':     { process: ['qwen', 'qwen-code'],               config: ['~/.qwen', '~/.config/qwen'],                                  icon: '🐉', pokemonId: 149 },
};

export interface McpScanPath {
  path: string;
  source: string;
}

export const MCP_SCAN_PATHS: McpScanPath[] = [
  { path: '~/.claude/mcpServers.json',       source: 'Claude' },
  { path: '~/.claude/config.json',           source: 'Claude' },
  { path: '~/.config/claude/settings.json',  source: 'Claude' },
  { path: '~/.cursor/mcp.json',              source: 'Cursor' },
  { path: '~/.opencode/config.json',         source: 'OpenCode' },
  { path: '~/.roo/mcp.json',                 source: 'Roo Code' },
  { path: '~/.kilo/mcp.json',                source: 'Kilo Code' },
];

export const MODEL_PATTERNS: Record<string, RegExp> = {
  'claude-4-opus':     /claude[\-\s]?4[\-\s]?opus/i,
  'claude-4-sonnet':   /claude[\-\s]?4[\-\s]?sonnet/i,
  'claude-3.7-sonnet': /claude[\-\s]?3\.?7[\-\s]?sonnet/i,
  'claude-3.5-sonnet': /claude[\-\s]?3\.?5[\-\s]?sonnet/i,
  'claude-3-haiku':    /claude[\-\s]?3[\-\s]?haiku/i,
  'gpt-4.1':           /gpt[\-\s]?4\.?1/i,
  'gpt-4o':            /gpt[\-\s]?4o/i,
  'gpt-4-turbo':       /gpt[\-\s]?4[\-\s]?turbo/i,
  'o4-mini':           /o4[\-\s]?mini/i,
  'o3':                /\bo3\b/i,
  'o3-mini':           /o3[\-\s]?mini/i,
  'o3-pro':            /o3[\-\s]?pro/i,
  'gemini-2.5-pro':    /gemini[\-\s]?2\.?5[\-\s]?pro/i,
  'gemini-2.5-flash':  /gemini[\-\s]?2\.?5[\-\s]?flash/i,
  'gemini-2.0-flash':  /gemini[\-\s]?2\.?0[\-\s]?flash/i,
  'deepseek-v3':       /deepseek[\-\s]?v3/i,
  'deepseek-r1':       /deepseek[\-\s]?r1/i,
  'qwen-3':            /qwen[\-\s]?3/i,
  'llama-4':           /llama[\-\s]?4/i,
};

export const SCAN_DIRS = {
  models: ['~/.claude', '~/.cursor', '~/.config', '~/.local/share'],
  burn: ['~/.claude', '~/.cursor', '~/.opencode'],
};

export const LOG_EXTENSIONS = new Set(['.log', '.jsonl', '.json', '.txt']);

export const SHELL_HISTORIES = ['~/.bash_history', '~/.zsh_history', '~/.local/share/fish/fish_history'];

export const ENV_CHECKS = ['python3', 'node', 'git', 'pip3'];

export const SCORING = {
  MAX_AGENTS: 4,
  MAX_MCP_SERVERS: 15,
  MAX_MODELS: 5,
  MAX_TOKEN_VELOCITY: 20_000,
  AGENT_PTS: 75,
  AGENT_BONUS: 50,
  AGENT_BONUS_THRESHOLD: 3,
  MCP_SERVER_PTS: 10,
  MCP_TOOL_CAP: 50,
  MODEL_PTS: 30,
  PROVIDER_BONUS: 50,
  PROVIDER_THRESHOLD: 3,
};

export function expandHome(p: string): string {
  return p.replace(/^~/, home);
}
