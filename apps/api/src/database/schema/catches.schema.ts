import {
  mysqlTable,
  int,
  varchar,
  decimal,
  datetime,
  timestamp,
} from 'drizzle-orm/mysql-core';

export const catches = mysqlTable('catches', {
  id: int('id')
    .autoincrement()
    .primaryKey(),

  species: varchar('species', { length: 100 })
    .notNull(),

  lengthCm: decimal('length_cm', {
    precision: 6,
    scale: 2,
  }).notNull(),

  weightKg: decimal('weight_kg', {
    precision: 7,
    scale: 3,
  }).notNull(),

  caughtAt: datetime('caught_at')
    .notNull(),

  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
});

export type CatchRecord = typeof catches.$inferSelect;

export type NewCatchRecord = typeof catches.$inferInsert;