import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { envSchema } from './src/config/env.schema.js';

const env = envSchema.parse(process.env);

export default defineConfig({
  dialect: 'mysql',
  schema: './src/database/schema/*.schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: env.DATABASE_HOSTNAME,
    port: env.DATABASE_PORT,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  },
});