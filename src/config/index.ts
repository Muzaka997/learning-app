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

const prodApiBaseUrl = "https://devcamper-api-i20h.onrender.com/api/v1";
const prodApiUrl = "https://devcamper-api-i20h.onrender.com";
const localApiBaseURL = "http://localhost:5001/api/v1";
const localApiURL = "http://localhost:5001";

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
