import { Sequelize } from 'sequelize';
import { config } from '../../config';

class PostgresConnection {
    private static instance: Sequelize | null = null;

    public static getInstance(): Sequelize {
        if (!PostgresConnection.instance) {
            console.log(`Attempting to connect to Postgres database at: ${config.db.postgresUrl}`);
            PostgresConnection.instance = new Sequelize(config.db.postgresUrl!, {
                dialect: 'postgres'
            });
        }
        return PostgresConnection.instance;
    }
}