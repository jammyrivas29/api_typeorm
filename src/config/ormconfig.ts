import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "node_mysql_crud_api",
    entities: [User],
    synchronize: true, 
    logging: true
});
