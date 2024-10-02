export declare class Connector {
    static get(dbName: string, key: string): Promise<any>;
    static put(dbName: string, key: string, value: any): Promise<void>;
    static remove(dbName: string, key: string): Promise<void>;
    static getAll(dbName: string): Promise<any[]>;
}
