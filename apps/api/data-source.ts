import { DataSource } from "typeorm";
import { IssueMigrations1710433714000 } from "./features/issue/issue.migrations";
import { Issue } from "./features/issue/issue.models";
import { IssueStatus } from "./features/issue/issue.models";
import { SeedDataMigration1710433714100 } from "./seed-data.migration";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root-password",
    database: "issue_tracker",
    entities: [Issue, IssueStatus],
    migrations: [
        IssueMigrations1710433714000, 
        SeedDataMigration1710433714100
    ],
    synchronize: false,
});