import { databases } from './config';

export class Connector {
  static async get(dbName: string, key: string): Promise<any> {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    return await db.get(key);
  }

  static async put(dbName: string, key: string, value: any): Promise<void> {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    await db.put(key, value);
  }

  static async remove(dbName: string, key: string): Promise<void> {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    await db.remove(key);
  }

  static async getAll(dbName: string): Promise<any[]> {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    const items: { key: string; value: any }[] = [];
    for await (const { key, value } of db.getRange()) {
      items.push({ key: key.toString(), value });
    }
    return items;
  }
}