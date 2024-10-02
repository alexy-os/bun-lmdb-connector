import { Elysia } from 'elysia';
import { RUNTIME_CONFIG, initializeDatabases, setConfig } from './config';
import { setupRoutes } from './routes';

export { setConfig, initializeDatabases } from './config';
export { Connector } from './connector';

export function startServer() {
  initializeDatabases();

  const app = new Elysia();
  setupRoutes(app);

  app.listen(RUNTIME_CONFIG.server.port, () => {
    console.log(`Server is running on http://${RUNTIME_CONFIG.server.host}:${RUNTIME_CONFIG.server.port}`);
  });

  return app;
}