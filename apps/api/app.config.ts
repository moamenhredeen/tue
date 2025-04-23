import { config } from "dotenv";
import { getEnvVar } from "@tue/utils/src/env";


/**
 * App configuration
 */
export type AppConfig = {
    /**
     * Port to run the server on
     */
    port: number;
    
    /**
     * Database configuration
     */
    database: {
        url: string;
        host: string;
        port: number;
        user: string;
        password: string;
        name: string;
    }
}

config();

export const appConfig: AppConfig = {
    port: parseInt(process.env.PORT) ?? 3000,
    database: {
        url: getEnvVar("DATABASE_URL"),
        host: getEnvVar("DATABASE_HOST"),
        port: parseInt(getEnvVar("DATABASE_PORT")),
        user: getEnvVar("DATABASE_USER"),
        password: getEnvVar("DATABASE_PASSWORD"),
        name: getEnvVar("DATABASE_NAME"),
    }
}