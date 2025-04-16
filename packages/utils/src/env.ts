

/**
 * Utility function to get an environment variable
 * @param key - The key to get
 * @returns The value of the environment variable
 * @throws Error if the variable is not set
 */
export const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}