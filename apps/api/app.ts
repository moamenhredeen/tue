
import express, { Express } from "express";
import { AppDataSource } from "./data-source";
import morgan from "morgan";
import cors from "cors";
import { IssueController } from "./features/issue/issue.controller";

export class App {
    private readonly app: Express;

    constructor() {
        this.app = express();
    }
    
    public async start() {
        await this.setupDatabase()
        this.setupMiddlewares()
        this.setupRoutes()
        this.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    
    private setupMiddlewares() {
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    private setupRoutes() {
        this.app.use(IssueController.route, new IssueController().router);
    }

    private async setupDatabase() {
        await AppDataSource.initialize()
        await AppDataSource.runMigrations()
    }
}   