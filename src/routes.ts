import { Elysia } from 'elysia';
import { Connector } from './connector';
import { cors } from '@elysiajs/cors';

export function setupRoutes(app: Elysia) {
  app.use(cors());

  // REST API endpoints
  app.get('/api', () => {
    return Object.keys(Connector.getAll);
  });

  app.get('/api/:dbName/:key', async ({ params }) => {
    try {
      const { dbName, key } = params;
      return await Connector.get(dbName, key);
    } catch (error: unknown) {
      return handleError(error);
    }
  });

  app.post('/api/:dbName', async ({ params, body }) => {
    try {
      const { dbName } = params;
      const { key, value } = body as { key: string; value: any };
      await Connector.put(dbName, key, value);
      return { success: true };
    } catch (error: unknown) {
      return handleError(error);
    }
  });

  app.delete('/api/:dbName/:key', async ({ params }) => {
    try {
      const { dbName, key } = params;
      await Connector.remove(dbName, key);
      return { success: true };
    } catch (error: unknown) {
      return handleError(error);
    }
  });

  app.get('/api/:dbName', async ({ params }) => {
    try {
      const { dbName } = params;
      return await Connector.getAll(dbName);
    } catch (error: unknown) {
      return handleError(error);
    }
  });

  // WebSocket support
  app.ws('/ws', {
    open(ws) {
      console.log('WebSocket connected');
    },
    message(ws, message) {
      const { action, dbName, key, value } = JSON.parse(message as string);
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

function handleError(error: unknown): Response {
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  return new Response(JSON.stringify({ error: errorMessage }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });
}