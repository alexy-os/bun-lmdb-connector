# bun-lmdb-connector

A high-performance LMDB connector for Bun, providing seamless integration with Lightning Memory-Mapped Database through REST API and WebSocket interfaces.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building the Package](#building-the-package)
- [Publishing](#publishing)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install bun-lmdb-connector using one of the following methods:

1. Via GitHub:
   ```bash
   bun add github:alexy-os/bun-lmdb-connector
   ```

2. Via npm:
   ```bash
   bun add bun-lmdb-connector
   ```

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code
  - `index.ts`: Main entry point
  - `config.ts`: Configuration management
  - `connector.ts`: LMDB connector implementation
  - `package.json`: Package configuration for distribution
  - `README.md`: Usage instructions for the package
- `dist/`: Contains the built package (generated during build)
- `package.json`: Main package configuration
- `tsconfig.json`: TypeScript configuration
- `README.md`: This file

## Development

To set up the project for development:

1. Clone the repository:
   ```bash
   git clone https://github.com/alexy-os/bun-lmdb-connector.git
   cd bun-lmdb-connector
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun start
   ```

   use test-connector.html to test the connector and database name is `main` by default

## Building the Package

To build the package for distribution:

1. Run the build script:
   ```bash
   bun run build
   ```

This command will:
- Compile TypeScript files to JavaScript
- Generate type definitions
- Copy necessary files to the `dist/` directory

## Publishing

To publish the package to npm:

1. Update the version in `package.json`
2. Build the package
3. Run:
   ```bash
   npm publish
   ```

To publish to GitHub Packages, update the `publishConfig` in `package.json` and use:

```bash
npm publish --registry=https://npm.pkg.github.com
```

## Usage

Refer to the `src/README.md` file for detailed usage instructions of the bun-lmdb-connector package.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.