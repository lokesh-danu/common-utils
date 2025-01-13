import { Pool } from 'pg';

class Postgres {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT || '5432', 10),
        });
    }

    public async query(text: string, params?: any[]): Promise<any> {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res.rows;
        } finally {
            client.release();
        }
    }

    public async close(): Promise<void> {
        await this.pool.end();
    }
}

export default new Postgres();