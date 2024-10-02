import { Elysia } from 'elysia';
import { RUNTIME_CONFIG, initializeDatabases, setConfig } from './config';
import { setupRoutes } from './routes';
import { Connector } from './connector';

export { setConfig, initializeDatabases, Connector };

export function startServer() {
  initializeDatabases();

  const app = new Elysia();
  setupRoutes(app);

  app.listen({
    port: RUNTIME_CONFIG.server.port,
    hostname: RUNTIME_CONFIG.server.host
  }, () => {
    console.log(`Server is running on http://${RUNTIME_CONFIG.server.host}:${RUNTIME_CONFIG.server.port}`);
  });

  return app;
}