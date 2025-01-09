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
export * from './api';
export * from './errors';
export * from './events';
export * from './validation';
export * from './metrics';
export * from './rateLimiter';
export * from './featureFlags';
export * from './testUtils';
export * from './dateUtils';
export * from './constants';







// src/db/index.ts
import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import AWS from 'aws-sdk';

const sequelize = new Sequelize(config.db.postgresUrl!);
const mongoConnection = mongoose.connect(config.db.mongoUrl!);
const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: config.db.dynamoRegion });

export { sequelize, mongoConnection, dynamoDB };

// src/encryption/index.ts
import crypto from 'crypto';

const encrypt = (data: string, key: string) => {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

const decrypt = (encrypted: string, key: string) => {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

export { encrypt, decrypt };

// src/api/index.ts
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000
});

export { apiClient };

// src/errors/index.ts
class AppError extends Error {
    constructor(public message: string, public statusCode: number = 500) {
        super(message);
    }
}

export { AppError };

// src/events/index.ts
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'app-client',
    brokers: ['localhost:9092']
});

export { kafka };

// src/validation/index.ts
import { z } from 'zod';

const validateSchema = (schema: z.ZodSchema, data: any) => {
    return schema.parse(data);
};

export { validateSchema };

// src/metrics/index.ts
import promClient from 'prom-client';

const httpRequestDuration = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status']
});

export { httpRequestDuration };

// src/constants/index.ts
const ROLES = Object.freeze({ USER: 'user', ADMIN: 'admin' });
const STATUSES = Object.freeze({ ACTIVE: 'active', INACTIVE: 'inactive' });

export { ROLES, STATUSES };
