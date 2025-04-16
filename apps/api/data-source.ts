import { DataSource } from "typeorm";
import { IssueMigrations1710433714000 } from "./features/issue/issue.migrations";
import { Issue } from "./features/issue/issue.models";
import { IssueStatus } from "./features/issue/issue.models";
import { SeedDataMigration1710433714100 } from "./seed-data.migration";
import { appConfig } from "./config";

export const AppDataSource = new DataSource({
    type: "postgres",
    ssl: true,
    host: appConfig.database.host,
    port: appConfig.database.port,
    username: appConfig.database.user,
    password: appConfig.database.password,
    database: appConfig.database.name,
    entities: [Issue, IssueStatus],
    migrations: [
        IssueMigrations1710433714000, 
        SeedDataMigration1710433714100
    ],
    synchronize: false,
});