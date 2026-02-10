export const EnvironmentModeEnum = {
  Production: "production",
  Development: "development",
} as const;

export type EnvironmentModeType =
  (typeof EnvironmentModeEnum)[keyof typeof EnvironmentModeEnum];

interface IEnvironmentConfig {
  apiBaseURL: string;
  apiURL: string; // Base API URL without /api/v1
  mode: EnvironmentModeType;
}

// ...existing code...
let config: IEnvironmentConfig;

// Allow overriding via Vite env vars set in Vercel project settings
const stripTrailingSlash = (u?: string) =>
  (u || "").replace(/\s+/g, "").replace(/\/$/, "");

const envApiBase = stripTrailingSlash(
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || undefined,
);
const envApiUrl = stripTrailingSlash(
  (import.meta.env.VITE_API_URL as string | undefined) || undefined,
);

// Derive missing counterpart if only one is supplied
const deriveFromApiURL = (url?: string) =>
  url ? stripTrailingSlash(url) + "/api/v1" : undefined;
const deriveFromApiBase = (base?: string) =>
  base ? stripTrailingSlash(base.replace(/\/?api\/v1$/, "")) : undefined;

const resolvedEnvApiUrl = envApiUrl || deriveFromApiBase(envApiBase);
const resolvedEnvApiBase = envApiBase || deriveFromApiURL(envApiUrl);

const prodApiBaseUrl =
  stripTrailingSlash(resolvedEnvApiBase) ||
  "https://devcamper-api-i20h.onrender.com/api/v1";
const prodApiUrl =
  stripTrailingSlash(resolvedEnvApiUrl) ||
  "https://devcamper-api-i20h.onrender.com";
const localApiBaseURL = stripTrailingSlash("http://localhost:5001/api/v1");
const localApiURL = stripTrailingSlash("http://localhost:5001");

switch (import.meta.env.MODE) {
  case EnvironmentModeEnum.Production:
    config = {
      apiBaseURL: prodApiBaseUrl,
      apiURL: prodApiUrl,
      mode: EnvironmentModeEnum.Production,
    };
    break;
  case EnvironmentModeEnum.Development:
  default:
    config = {
      apiBaseURL: localApiBaseURL,
      apiURL: localApiURL,
      mode: EnvironmentModeEnum.Development,
    };
    break;
}

export default config;
