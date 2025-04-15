
/**
 * App configuration
 */
export type AppConfig = {
    /**
     * Port to run the server on
     */
    port: number;
    /**
     * Database URL
     */
    databaseUrl: string;
}

export const appConfig: AppConfig = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    databaseUrl: process.env.DATABASE_URL,
}