import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(8000),

  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  FRONTEND_URL: z.string().url(),

  DATABASE_HOSTNAME: z.string().min(1),

  DATABASE_PORT: z.coerce.number().int().min(1).max(65535),

  DATABASE_USERNAME: z.string().min(1),

  DATABASE_PASSWORD: z.string().min(1),

  DATABASE_NAME: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;