// src/config/index.ts
import dotenv from 'dotenv';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    db: {
        postgresUrl: process.env.POSTGRES_URL,
        mongoUrl: process.env.MONGO_URL,
        dynamoRegion: process.env.DYNAMO_REGION,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        accessTokenExpiry: '15m',
        refreshTokenExpiry: '7d'
    }
};

export { config };