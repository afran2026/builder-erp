import { existsSync } from "node:fs";
import { resolve } from "node:path";

type ProcessWithEnvLoader = NodeJS.Process & {
  loadEnvFile?: (path?: string) => void;
};

export function loadEnvironment(): void {
  const nodeProcess = process as ProcessWithEnvLoader;

  if (typeof nodeProcess.loadEnvFile !== "function") {
    throw new Error(
      "Node.js process.loadEnvFile is unavailable. Node.js 20.12+ is required.",
    );
  }

  const candidates = [
    resolve(process.cwd(), "../../.env"),
    resolve(process.cwd(), ".env"),
  ];

  for (const file of candidates) {
    if (existsSync(file)) {
      nodeProcess.loadEnvFile(file);
    }
  }
}

export interface AppEnvironment {
  nodeEnv: string;
  port: number;
  apiPrefix: string;
  corsOrigins: string[];
  defaultLocale: string;
  defaultCurrency: string;
}

export function validateEnvironment(): AppEnvironment {
  const nodeEnv = process.env.NODE_ENV || "development";

  if (!["development", "test", "production"].includes(nodeEnv)) {
    throw new Error("NODE_ENV must be development, test or production.");
  }

  const port = Number(process.env.PORT || 4000);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535.");
  }

  const apiPrefix = (process.env.API_PREFIX || "api/v1")
    .replace(/^\/+|\/+$/g, "");

  if (!/^[a-zA-Z0-9/_-]+$/.test(apiPrefix)) {
    throw new Error("API_PREFIX contains invalid characters.");
  }

  const corsOrigins = (
    process.env.CORS_ORIGIN || "http://localhost:3000"
  )
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (corsOrigins.length === 0) {
    throw new Error("At least one CORS origin must be configured.");
  }

  for (const origin of corsOrigins) {
    try {
      const parsed = new URL(origin);

      if (!["http:", "https:"].includes(parsed.protocol)) {
        throw new Error();
      }
    } catch {
      throw new Error(`Invalid CORS origin: ${origin}`);
    }
  }

  const defaultLocale = process.env.DEFAULT_LOCALE || "bn";

  if (!["bn", "en"].includes(defaultLocale)) {
    throw new Error("DEFAULT_LOCALE must be bn or en.");
  }

  const defaultCurrency = process.env.DEFAULT_CURRENCY || "BDT";

  if (defaultCurrency !== "BDT") {
    throw new Error("This Builder-ERP configuration currently supports BDT.");
  }

  return {
    nodeEnv,
    port,
    apiPrefix,
    corsOrigins,
    defaultLocale,
    defaultCurrency,
  };
}
