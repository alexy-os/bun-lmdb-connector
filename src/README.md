
# bun-lmdb-connector

bun-lmdb-connector is a library for working with LMDB (Lightning Memory-Mapped Database) in the Bun environment. It provides a simple and efficient way to interact with LMDB through REST API and WebSocket.

## Installation

You can install bun-lmdb-connector in two ways:

1. Through GitHub:
```bash
bun add github:alexy-os/bun-lmdb-connector
```

2. Through npm:
```bash
bun add bun-lmdb-connector
```

## Main Features

bun-lmdb-connector provides the following main features:

1. Initialization and configuration of databases
2. CRUD operations through REST API
3. CRUD operations through WebSocket
4. Flexible configuration of the server and databases

## Usage

### Initialization

```typescript
import { setConfig, initializeDatabases } from 'bun-lmdb-connector';

// Configure the configuration (optional)
setConfig({
  databases: [
    { name: 'mydb', path: './data/mydb.mdb' }
  ],
  server: {
    port: 3000,
    host: 'localhost'
  },
  logLevel: 'info'
});

// Initialize databases
initializeDatabases();
```

### Using Connector

The Connector class provides methods for working with the database:

```typescript
import { Connector } from 'bun-lmdb-connector';

// Get value
const value = await Connector.get('mydb', 'key');

// Write value
await Connector.put('mydb', 'key', 'value');

// Delete value
await Connector.remove('mydb', 'key');

// Get all values
const allValues = await Connector.getAll('mydb');
```

### REST API

bun-lmdb-connector automatically creates REST API endpoints:

- GET /api/:dbName/:key - get value by key
- POST /api/:dbName - write new value
- DELETE /api/:dbName/:key - delete value by key
- GET /api/:dbName - get all values from the database

### WebSocket

To work through WebSocket, connect to the /ws endpoint and send messages in JSON format:

```javascript
const ws = new WebSocket('ws://localhost:3000/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: 'get',
    dbName: 'mydb',
    key: 'someKey'
  }));
};

ws.onmessage = (event) => {
  console.log('Received:', JSON.parse(event.data));
};
```

## Note

Make sure you have Bun and all necessary dependencies installed before using this library.
