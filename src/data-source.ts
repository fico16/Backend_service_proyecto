import "reflect-metadata";
import { DataSource } from "typeorm";
import { Salchipapa } from "./entities/Salchipapa";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Salchipapa],
  migrations:[],
  subscribers:[]
});