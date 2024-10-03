# Server Configuration Setup Guide

This guide explains how to set up and manage server configuration for your application.

## Configuration Structure

1. Define the configuration structure using a TypeScript interface:

```typescript
interface Config {
  port: number;
  dbPath: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  // Add other configuration parameters as needed
}
```

2. Set default values:

```typescript
const DEFAULT_CONFIG: Config = {
  port: 3000,
  dbPath: './data',
  logLevel: 'info',
  // Set other default values
};
```

3. Create a mutable runtime configuration:

```typescript
let RUNTIME_CONFIG: Config = { ...DEFAULT_CONFIG };
```

## Updating Configuration

Use the `setConfig` function to update the configuration at runtime:

```typescript
function setConfig(newConfig: Partial<Config>): void {
  RUNTIME_CONFIG = { ...RUNTIME_CONFIG, ...newConfig };
}
```

## Loading Configuration from External Sources

### 1. From a File

```typescript
import fs from 'fs';
import path from 'path';

export function loadConfigFromFile(filePath: string): void {
  try {
    const configData = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const newConfig = JSON.parse(configData) as Partial<Config>;
    setConfig(newConfig);
    console.log('Configuration loaded from file successfully');
  } catch (error) {
    console.error('Error loading configuration from file:', error);
  }
}
```

Usage:
```typescript
loadConfigFromFile('./config.json');
```

### 2. From Environment Variables

```typescript
export function loadConfigFromEnv(): void {
  const newConfig: Partial<Config> = {};
  
  if (process.env.PORT) newConfig.port = parseInt(process.env.PORT, 10);
  if (process.env.DB_PATH) newConfig.dbPath = process.env.DB_PATH;
  if (process.env.LOG_LEVEL) newConfig.logLevel = process.env.LOG_LEVEL as Config['logLevel'];
  
  setConfig(newConfig);
  console.log('Configuration loaded from environment variables');
}
```

Usage:
```typescript
loadConfigFromEnv();
```

### 3. From Command Line Arguments

```typescript
import minimist from 'minimist';

export function loadConfigFromCommandLine(): void {
  const argv = minimist(process.argv.slice(2));
  const newConfig: Partial<Config> = {};
  
  if (argv.port) newConfig.port = parseInt(argv.port, 10);
  if (argv.dbPath) newConfig.dbPath = argv.dbPath;
  if (argv.logLevel) newConfig.logLevel = argv.logLevel as Config['logLevel'];
  
  setConfig(newConfig);
  console.log('Configuration loaded from command line arguments');
}
```

Usage:
```typescript
loadConfigFromCommandLine();
```

## Accessing Configuration

To access the current configuration:

```typescript
export function getConfig(): Readonly<Config> {
  return RUNTIME_CONFIG;
}
```

## Best Practices

1. Load configuration in a specific order, e.g., defaults -> file -> environment variables -> command line arguments. This allows for flexible overriding.

2. Validate the configuration after loading to ensure all required fields are set and have valid values.

3. Use a configuration management library like `nconf` or `convict` for more advanced features and easier management of configuration from multiple sources.

4. Keep sensitive information (like API keys) in environment variables rather than in configuration files.

5. Use strong typing with TypeScript to catch configuration errors early.

6. Implement a mechanism to reload configuration at runtime without restarting the server, if needed.

By following this guide, you can create a flexible and robust configuration system for your server application, allowing for easy management and updates of server settings from various sources.