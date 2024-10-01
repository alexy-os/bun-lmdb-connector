import { databases } from './config';

export class Connector {
  static async get(dbName: string, key: string): Promise<any> {
    const db = databases[dbName];
    if (!db) throw new Error(`Database ${dbName} not found`);
    return await db.get(key);
  }

  static async put(dbName: string, key: string, value: any): Promise<void> {
    const db = databases[dbName];
    if (!db) throw new Error(`Database ${dbName} not found`);
    await db.put(key, value);
  }

  static async remove(dbName: string, key: string): Promise<void> {
    const db = databases[dbName];
    if (!db) throw new Error(`Database ${dbName} not found`);
    await db.remove(key);
  }

  static async getAll(dbName: string): Promise<any[]> {
    const db = databases[dbName];
    if (!db) throw new Error(`Database ${dbName} not found`);
    const items = [];
    for await (const { key, value } of db.getRange()) {
      items.push({ key, value });
    }
    return items;
  }
}