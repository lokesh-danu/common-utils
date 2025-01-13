# [Common Utils]

A collection of generalized utility functions and classes designed for use in Node.js microservices, written in TypeScript. This package aims to provide a modular and reusable set of tools to streamline the development of microservices.

## Features

- **Authentication**: Utilities for token generation and validation.
- **Configuration**: Centralized configuration management using environment variables.
- **Database Connections**: Simplified connection management for PostgreSQL, MongoDB, and DynamoDB.
- **Encryption**: Basic encryption and decryption utilities.
- **Error Handling**: Custom error classes for consistent error management.
- **Logging**: Configurable logging using Winston.
- **Metrics**: Prometheus metrics integration for monitoring.
- **Validation**: Data validation using Zod schemas.

## Directory Structure

- `src/`
  - `auth/`: Authentication utilities.
  - `config/`: Configuration management.
  - `db/`: Database connection utilities.
  - `encryption/`: Encryption and decryption utilities.
  - `errors/`: Custom error classes.
  - `logger/`: Logging utilities.
  - `metrics/`: Metrics collection and reporting.
  - `validation/`: Data validation utilities.

## Installation

To install this package, use npm or yarn:

bash
npm install common-utils

or
yarn add common-utils

## Usage

Import the utilities you need from the package:

typescript
```jsx
import { generateToken, validateToken } from 'cmn-uts';
import { config } from 'cmn-uts';
import { PostgresConnection } from 'cmn-uts';
import { encrypt, decrypt } from 'cmn-uts';
import { AppError } from 'cmn-uts';
import { logger } from 'cmn-uts';
import { httpRequestDuration } from 'cmn-uts';
import { validateSchema } from 'cmn-uts';
```


## Configuration

Ensure you have a `.env` file in your project root with the necessary environment variables:

```jsx
NODE_ENV=development
POSTGRES_URL=your_postgres_url
MONGO_URL=your_mongo_url
DYNAMO_REGION=your_dynamo_region
JWT_SECRET=your_jwt_secret
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_db_port
API_BASE_URL=your_api_base_url
LOG_LEVEL=info
```


## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.
