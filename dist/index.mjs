import { Elysia } from 'elysia';
import { open } from 'lmdb';

const DEFAULT_CONFIG = {
    databases: [
        { name: 'main', path: './data/' }
    ],
    server: {
        port: 5000,
        host: '127.0.0.1'
    },
    logLevel: 'info'
};
let RUNTIME_CONFIG = { ...DEFAULT_CONFIG };
function setConfig(newConfig) {
    RUNTIME_CONFIG = { ...RUNTIME_CONFIG, ...newConfig };
}
const databases = {};
function initializeDatabases() {
    RUNTIME_CONFIG.databases.forEach(dbConfig => {
        databases[dbConfig.name] = open({
            path: dbConfig.path,
            compression: true,
        });
    });
}

class Connector {
    static async get(dbName, key) {
        if (!databases[dbName]) {
            throw new Error(`Database ${dbName} not found`);
        }
        const db = databases[dbName];
        return await db.get(key);
    }
    static async put(dbName, key, value) {
        if (!databases[dbName]) {
            throw new Error(`Database ${dbName} not found`);
        }
        const db = databases[dbName];
        await db.put(key, value);
    }
    static async remove(dbName, key) {
        if (!databases[dbName]) {
            throw new Error(`Database ${dbName} not found`);
        }
        const db = databases[dbName];
        await db.remove(key);
    }
    static async getAll(dbName) {
        if (!databases[dbName]) {
            throw new Error(`Database ${dbName} not found`);
        }
        const db = databases[dbName];
        const items = [];
        for await (const { key, value } of db.getRange()) {
            items.push({ key: key.toString(), value });
        }
        return items;
    }
}

// src/index.ts
var isBun = typeof new Headers()?.toJSON === "function";
var processHeaders = (headers) => {
  if (isBun) return Object.keys(headers.toJSON()).join(", ");
  let keys = "";
  headers.forEach((_, key) => {
    keys += key + ", ";
  });
  if (keys) keys = keys.slice(0, -1);
  return keys;
};
var processOrigin = (origin, request, from) => {
  if (Array.isArray(origin))
    return origin.some((o) => processOrigin(o, request, from));
  switch (typeof origin) {
    case "string":
      if (origin.indexOf("://") === -1) return from.includes(origin);
      return origin === from;
    case "function":
      return origin(request) === true;
    case "object":
      if (origin instanceof RegExp) return origin.test(from);
  }
  return false;
};
var cors = (config) => {
  let {
    aot = true,
    origin = true,
    methods = true,
    allowedHeaders = true,
    exposeHeaders = true,
    credentials = true,
    maxAge = 5,
    preflight = true
  } = config ?? {};
  if (Array.isArray(allowedHeaders))
    allowedHeaders = allowedHeaders.join(", ");
  if (Array.isArray(exposeHeaders)) exposeHeaders = exposeHeaders.join(", ");
  const origins = typeof origin === "boolean" ? void 0 : Array.isArray(origin) ? origin : [origin];
  const app = new Elysia({
    name: "@elysiajs/cors",
    seed: config,
    aot
  });
  const anyOrigin = origins?.some((o) => o === "*");
  const handleOrigin = (set, request) => {
    if (origin === true) {
      set.headers.vary = "*";
      set.headers["access-control-allow-origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (anyOrigin) {
      set.headers.vary = "*";
      set.headers["access-control-allow-origin"] = "*";
      return;
    }
    if (!origins?.length) return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0; i < origins.length; i++) {
        const value = processOrigin(origins[i], request, from);
        if (value === true) {
          set.headers.vary = origin ? "Origin" : "*";
          set.headers["access-control-allow-origin"] = from || "*";
          return;
        }
        if (value) headers.push(value);
      }
    }
    set.headers.vary = "Origin";
    if (headers.length)
      set.headers["access-control-allow-origin"] = headers.join(", ");
  };
  const handleMethod = (set, method) => {
    if (!method) return;
    if (methods === true)
      return set.headers["access-control-allow-methods"] = method ?? "*";
    if (methods === false || !methods?.length) return;
    if (methods === "*")
      return set.headers["access-control-allow-methods"] = "*";
    if (!Array.isArray(methods))
      return set.headers["access-control-allow-methods"] = methods;
    set.headers["access-control-allow-methods"] = methods.join(", ");
  };
  const defaultHeaders = {};
  if (typeof exposeHeaders === "string")
    defaultHeaders["access-control-expose-headers"] = exposeHeaders;
  if (typeof allowedHeaders === "string")
    defaultHeaders["access-control-allow-headers"] = allowedHeaders;
  if (credentials === true)
    defaultHeaders["access-control-allow-credentials"] = "true";
  app.headers(defaultHeaders);
  function handleOption({ set, request, headers }) {
    handleOrigin(set, request);
    handleMethod(set, request.headers.get("access-control-request-method"));
    if (allowedHeaders === true || exposeHeaders === true) {
      if (allowedHeaders === true)
        set.headers["access-control-allow-headers"] = headers["access-control-request-headers"];
      if (exposeHeaders === true)
        set.headers["access-control-expose-headers"] = Object.keys(headers).join(",");
    }
    if (maxAge) set.headers["access-control-max-age"] = maxAge.toString();
    return new Response(null, {
      status: 204
    });
  }
  if (preflight) app.options("/", handleOption).options("/*", handleOption);
  return app.onRequest(function processCors({ set, request }) {
    handleOrigin(set, request);
    handleMethod(set, request.method);
    if (allowedHeaders === true || exposeHeaders === true) {
      const headers = processHeaders(request.headers);
      if (allowedHeaders === true)
        set.headers["access-control-allow-headers"] = headers;
      if (exposeHeaders === true)
        set.headers["access-control-expose-headers"] = headers;
    }
  });
};

function setupRoutes(app) {
    app.use(cors());
    // REST API endpoints
    app.get('/api', () => {
        return Object.keys(Connector.getAll);
    });
    app.get('/api/:dbName/:key', async ({ params }) => {
        try {
            const { dbName, key } = params;
            return await Connector.get(dbName, key);
        }
        catch (error) {
            return handleError(error);
        }
    });
    app.post('/api/:dbName', async ({ params, body }) => {
        try {
            const { dbName } = params;
            const { key, value } = body;
            await Connector.put(dbName, key, value);
            return { success: true };
        }
        catch (error) {
            return handleError(error);
        }
    });
    app.delete('/api/:dbName/:key', async ({ params }) => {
        try {
            const { dbName, key } = params;
            await Connector.remove(dbName, key);
            return { success: true };
        }
        catch (error) {
            return handleError(error);
        }
    });
    app.get('/api/:dbName', async ({ params }) => {
        try {
            const { dbName } = params;
            return await Connector.getAll(dbName);
        }
        catch (error) {
            return handleError(error);
        }
    });
    // WebSocket support
    app.ws('/ws', {
        open(ws) {
            console.log('WebSocket connected');
        },
        message(ws, message) {
            const { action, dbName, key, value } = JSON.parse(message);
            let response;
            switch (action) {
                case 'get':
                    response = Connector.get(dbName, key);
                    break;
                case 'put':
                    response = Connector.put(dbName, key, value);
                    break;
                case 'remove':
                    response = Connector.remove(dbName, key);
                    break;
                case 'getAll':
                    response = Connector.getAll(dbName);
                    break;
                default:
                    response = Promise.resolve({ error: 'Invalid action' });
            }
            response.then(result => ws.send(JSON.stringify(result)));
        },
        close(ws) {
            console.log('WebSocket closed');
        }
    });
}
function handleError(error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    });
}

/// <reference types="bun-types" />
function createServer() {
    const app = new Elysia();
    setupRoutes(app);
    return app;
}
function startServer(app) {
    app.listen({
        port: RUNTIME_CONFIG.server.port,
        hostname: RUNTIME_CONFIG.server.host
    }, () => {
        console.log(`Server is running on http://${RUNTIME_CONFIG.server.host}:${RUNTIME_CONFIG.server.port}`);
    });
}
// Проверка, запущен ли файл напрямую
if (typeof Bun !== 'undefined' && Bun.main === import.meta.path) {
    initializeDatabases();
    const app = createServer();
    startServer(app);
}

export { Connector, createServer, initializeDatabases, setConfig, startServer };
//# sourceMappingURL=index.mjs.map
