import { pgTable, serial, varchar, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

export const rsvps = pgTable('rsvps', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  guests: integer('guests').notNull().default(1),
  attending: boolean('attending').notNull().default(true),
  message: text('message'),
  dietaryPreference: varchar('dietary_preference', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const wishes = pgTable('wishes', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
