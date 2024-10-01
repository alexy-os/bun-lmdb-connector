import { Database } from 'lmdb';

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
    { name: 'main', path: './data/main.mdb' }
  ],
  server: {
    port: 3000,
    host: 'localhost'
  },
  logLevel: 'info'
};

export let RUNTIME_CONFIG: Config = { ...DEFAULT_CONFIG };

export function setConfig(newConfig: Partial<Config>) {
  RUNTIME_CONFIG = { ...RUNTIME_CONFIG, ...newConfig };
}

export const databases: { [key: string]: Database } = {};

export function initializeDatabases() {
  RUNTIME_CONFIG.databases.forEach(dbConfig => {
    databases[dbConfig.name] = new Database(dbConfig.path);
  });
}