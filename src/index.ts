import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";

(async () => {

    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "nodedb",
        entities: ["dist/models/*.js"],
        migrations: ["dist/migrations/*.js"],
        synchronize: true,
        cli: {
            migrationsDir: "src/migrations"
        }
    }).then(async (connection) => {
        connection.manager.create(User, {firstName: "test"})
        console.log("connected")
        connection.runMigrations();
        console.log("run migrations")

        const users = await connection.manager.find(User, {})
        console.log(users)
    })

    

})();