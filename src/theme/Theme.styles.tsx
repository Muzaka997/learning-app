// Design system derived from the "Learning App" editorial design:
// Newsreader (serif) headings + Instrument Sans body, warm-paper background,
// blue accent, soft layered card shadows.

const fonts = {
  bodyFont: "'Instrument Sans', system-ui, -apple-system, sans-serif",
  headingFont: "'Newsreader', Georgia, serif",
};

export const lightTheme = {
  ...fonts,

  // surfaces
  background: "#faf9f6", // warm paper page background
  cardBg: "#ffffff",
  cardBorder: "rgba(36,52,74,0.07)",
  cardShadow:
    "0 1px 2px rgba(22,35,58,0.04), 0 12px 30px -18px rgba(22,35,58,0.18)",
  cardShadowHover:
    "0 1px 2px rgba(22,35,58,0.04), 0 26px 46px -22px rgba(22,35,58,0.32)",

  // text
  text: "#24344a", // base body text
  heading: "#16233a", // strong ink for headings
  textMuted: "#566579", // secondary copy
  textSubtle: "#94a3b8", // captions / labels
  navText: "#33465e",

  // accent + interactive
  accent: "#2f6fd8",
  link: "#2f6fd8",
  linkHover: "#255bb5",
  buttonBackground: "#2f6fd8",
  buttonText: "#ffffff",

  // header
  headerBg: "rgba(250,249,246,0.82)",
  headerBorder: "rgba(36,52,74,0.08)",

  // inputs
  inputBg: "#ffffff",
  inputBorder: "rgba(36,52,74,0.14)",

  // subtle fills (hover pills, tinted buttons)
  hoverFill: "rgba(36,52,74,0.05)",

  // legacy sidebar tokens kept so old references don't break
  sidebarBackground: "#ffffff",
  sidebarText: "#33465e",
  sidebarHover: "rgba(36,52,74,0.05)",
  sidebarActive: "rgba(47,111,216,0.15)",
};

export const darkTheme: typeof lightTheme = {
  ...fonts,

  background: "#141b26",
  cardBg: "#1c2635",
  cardBorder: "rgba(255,255,255,0.08)",
  cardShadow: "0 1px 2px rgba(0,0,0,0.4), 0 12px 30px -18px rgba(0,0,0,0.7)",
  cardShadowHover: "0 1px 2px rgba(0,0,0,0.4), 0 26px 46px -22px rgba(0,0,0,0.8)",

  text: "#dbe3ef",
  heading: "#f4f7fb",
  textMuted: "#9fb0c5",
  textSubtle: "#6f8098",
  navText: "#c4d0e0",

  accent: "#5b93ea",
  link: "#5b93ea",
  linkHover: "#7dabf0",
  buttonBackground: "#5b93ea",
  buttonText: "#ffffff",

  headerBg: "rgba(20,27,38,0.82)",
  headerBorder: "rgba(255,255,255,0.08)",

  inputBg: "#111825",
  inputBorder: "rgba(255,255,255,0.14)",

  hoverFill: "rgba(255,255,255,0.06)",

  sidebarBackground: "#1c2635",
  sidebarText: "#c4d0e0",
  sidebarHover: "rgba(255,255,255,0.06)",
  sidebarActive: "rgba(91,147,234,0.22)",
};

export type ThemeType = typeof lightTheme;
