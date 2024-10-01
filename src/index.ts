import { Elysia } from 'elysia';
import { RUNTIME_CONFIG, initializeDatabases } from './config';
import { Connector } from './connector';

initializeDatabases();

const app = new Elysia();

// REST API endpoints
app.get('/api/:dbName/:key', async ({ params }) => {
  const { dbName, key } = params;
  return await Connector.get(dbName, key);
});

app.post('/api/:dbName', async ({ params, body }) => {
  const { dbName } = params;
  const { key, value } = body as { key: string; value: any };
  await Connector.put(dbName, key, value);
  return { success: true };
});

app.delete('/api/:dbName/:key', async ({ params }) => {
  const { dbName, key } = params;
  await Connector.remove(dbName, key);
  return { success: true };
});

app.get('/api/:dbName', async ({ params }) => {
  const { dbName } = params;
  return await Connector.getAll(dbName);
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

app.listen(RUNTIME_CONFIG.server.port, RUNTIME_CONFIG.server.host, () => {
  console.log(`Server is running on http://${RUNTIME_CONFIG.server.host}:${RUNTIME_CONFIG.server.port}`);
});