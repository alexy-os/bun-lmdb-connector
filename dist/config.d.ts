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
export declare const DEFAULT_CONFIG: Config;
export declare let RUNTIME_CONFIG: Config;
export declare function setConfig(newConfig: Partial<Config>): void;
export declare const databases: {
    [key: string]: ReturnType<typeof open>;
};
export declare function initializeDatabases(): void;
