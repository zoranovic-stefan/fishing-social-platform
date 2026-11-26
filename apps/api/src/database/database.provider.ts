import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2/promise';

import type { Env } from '../config/env.schema.js';
import * as schema from './schema/catches.schema.js';

export const DATABASE = Symbol('DATABASE');

export const databaseProvider = {
  provide: DATABASE,

  inject: [ConfigService],

  useFactory: (config: ConfigService<Env, true>) => {
    const pool = createPool({
      host: config.get('DATABASE_HOSTNAME', { infer: true }),
      port: config.get('DATABASE_PORT', { infer: true }),
      user: config.get('DATABASE_USERNAME', { infer: true }),
      password: config.get('DATABASE_PASSWORD', { infer: true }),
      database: config.get('DATABASE_NAME', { infer: true }),
      connectionLimit: 10,
    });

    return drizzle(pool, { schema, mode: 'default' });
  },
};

export type Database = ReturnType<
  typeof databaseProvider.useFactory
>;