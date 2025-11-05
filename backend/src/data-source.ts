
import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // Fix: Cannot find name '__dirname'. Using relative path for entities.
  entities: ['**/*.entity{.ts,.js}'],
  synchronize: false, // Set to false for production, use migrations instead
  // Fix: Cannot find name '__dirname'. Using relative path for migrations.
  migrations: ['database/migrations/*{.ts,.js}'],
});
