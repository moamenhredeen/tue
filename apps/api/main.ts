
import fastify from "fastify";
import { AppDataSource } from "./data-source";
import fastifyAutoload from "@fastify/autoload";
import fastifyCors from "@fastify/cors";
import path from "path";

async function main() {
    await AppDataSource.initialize()
    await AppDataSource.runMigrations()


    const app = fastify({
        logger: true
    });
    
    app.register(fastifyCors, {});

    app.register(fastifyAutoload, {
        dir: path.join(__dirname, "features"),
        matchFilter: path => path.endsWith(".controller.ts"),
        options: {
            prefix: "api"
        }
    });

    app.listen({ port: 3000 }, (err, address) => {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }
    });

}

main();