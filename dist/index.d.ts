import { Elysia } from 'elysia';
import { initializeDatabases, setConfig } from './config';
import { Connector } from './connector';
export { setConfig, initializeDatabases, Connector };
export declare function createServer(): Elysia<"", false, {
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
export declare function startServer(app: Elysia): void;
