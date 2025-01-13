// src/db/index.ts
import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import { config } from '../config';
// import AWS from 'aws-sdk';

class PostgresConnection {
    private static instance: Sequelize | null = null;
    private sequelize: Sequelize;

    private constructor() {
        this.sequelize = new Sequelize(config.db.postgresUrl!, {
            dialect: 'postgres'
        });
    }

    public static getInstance(): Sequelize {
        if (!PostgresConnection.instance) {
            console.log(`Attempting to connect to Postgres database at: ${config.db.postgresUrl}`);
            PostgresConnection.instance = new PostgresConnection().sequelize;
        }
        return PostgresConnection.instance;
    }
}

class MongoConnection {
    private static instance: Promise<typeof mongoose> | null = null;

    public static getInstance(): Promise<typeof mongoose> {
        if (!MongoConnection.instance && config.db.mongoUrl) {
            MongoConnection.instance = mongoose.connect(config.db.mongoUrl);
        }
        return MongoConnection.instance!;
    }
}

class DynamoDBConnection {
    private static instance: any = null;

    public static getInstance(): any {
        if (!DynamoDBConnection.instance) {
            // DynamoDBConnection.instance = new AWS.DynamoDB.DocumentClient({ region: config.db.dynamoRegion });
            DynamoDBConnection.instance = null; // Placeholder as per your original code
        }
        return DynamoDBConnection.instance;
    }
}

export { PostgresConnection, MongoConnection, DynamoDBConnection };