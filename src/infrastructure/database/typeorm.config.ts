import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
import { CreateUserEntities } from "src/core/entities/create-user.entity";

dotenv.config();

export const TypeOrmConfig:TypeOrmModuleOptions = {
type:'postgres',
host:process.env.DATABASE_HOST,
port:parseInt(process.env.DATABASE_PORT, 10),
username:process.env.DATABASE_USER,
password:process.env.DATABASE_PASSWORD,
database:process.env.DATABASE_NAME,
entities: [__dirname + '/../../core/entities/*.entity{.ts,.js}'],
synchronize:true
};