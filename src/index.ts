// Utility Package: Modular Design for Node.js and TypeScript Microservices

// Directory Structure:
// - src/
//   - logger/
//   - config/
//   - auth/
//   - db/
//   - encryption/
//   - api/
//   - errors/
//   - events/
//   - validation/
//   - metrics/
//   - rateLimiter/
//   - featureFlags/
//   - testUtils/
//   - dateUtils/
//   - constants/

// src/index.ts - Entry point to expose utilities
export * from './logger';
export * from './config';
export * from './auth';
export * from './db';
export * from './encryption';
// export * from './api';
export * from './errors';
// export * from './events';
export * from './validation';
export * from './metrics';
// export * from './rateLimiter';
// export * from './featureFlags';
// export * from './testUtils';
// export * from './dateUtils';
// export * from './constants';











// src/api/index.ts
// import axios from 'axios';

// const apiClient = axios.create({
//     baseURL: process.env.API_BASE_URL,
//     timeout: 5000
// });

// export { apiClient };



// src/events/index.ts
// import { Kafka } from 'kafkajs';

// const kafka = new Kafka({
//     clientId: 'app-client',
//     brokers: ['localhost:9092']
// });

// export { kafka };
