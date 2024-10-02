import { open } from 'lmdb';

export interface DatabaseConfig {
  name: string;
  path: string;
}

export interface ServerConfig {
  port: number;
  host: string;
}

export interface Config {
  databases: DatabaseConfig[];
  server: ServerConfig;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export const DEFAULT_CONFIG: Config = {
  databases: [
    { name: 'main', path: './data/' }
  ],
  server: {
    port: 5000,
    host: '127.0.0.1'
  },
  logLevel: 'info'
};

export let RUNTIME_CONFIG: Config = { ...DEFAULT_CONFIG };

export function setConfig(newConfig: Partial<Config>) {
  RUNTIME_CONFIG = { ...RUNTIME_CONFIG, ...newConfig };
}

export const databases: { [key: string]: ReturnType<typeof open> } = {};

export function initializeDatabases() {
  RUNTIME_CONFIG.databases.forEach(dbConfig => {
    databases[dbConfig.name] = open({
      path: dbConfig.path,
      compression: true,
    });
  });
}