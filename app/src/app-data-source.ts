import { DataSource } from 'typeorm';
import { env } from '@/common/utils/envConfig';

export const myDataSource = new DataSource({
  type: env.DATABASE_TYPE as 'mysql',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  logging: env.NODE_ENV === 'development',
  timezone: 'Z',
  charset: 'utf8mb4_unicode_ci',
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsTransactionMode: 'each',
  logger: 'file',
  migrationsRun: env.NODE_ENV === 'production',
});
