import { Elysia } from 'elysia';

interface DatabaseConfig {
    name: string;
    path: string;
}
interface ServerConfig {
    port: number;
    host: string;
}
interface Config {
    databases: DatabaseConfig[];
    server: ServerConfig;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
}
declare function setConfig(newConfig: Partial<Config>): void;
declare function initializeDatabases(): void;

declare class Connector {
    static get(dbName: string, key: string): Promise<any>;
    static put(dbName: string, key: string, value: any): Promise<void>;
    static remove(dbName: string, key: string): Promise<void>;
    static getAll(dbName: string): Promise<any[]>;
}

declare function createServer(): Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
declare function startServer(app: Elysia): void;

export { Connector, createServer, initializeDatabases, setConfig, startServer };
