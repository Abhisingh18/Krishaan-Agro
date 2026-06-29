import { neon } from "@neondatabase/serverless";

/** A feedback row as stored in / returned from PostgreSQL. */
export type FeedbackRow = {
  name: string;
  role: string | null;
  message: string;
  rating: number;
  created_at?: string;
};

const connectionString = process.env.DATABASE_URL;

/**
 * PostgreSQL query function (Neon serverless driver — connects over HTTPS,
 * so it works behind firewalls that block port 5432 and is reliable on
 * Vercel serverless functions).
 * Null until DATABASE_URL is set, so the site keeps building/working.
 */
export const sql = connectionString ? neon(connectionString) : null;

let tableReady: Promise<void> | null = null;

/** Create the feedbacks table on first use (so no manual SQL is required). */
export function ensureTable(): Promise<void> {
  if (!sql) return Promise.resolve();
  if (!tableReady) {
    tableReady = sql`
      create table if not exists feedbacks (
        id bigint generated always as identity primary key,
        created_at timestamptz not null default now(),
        name text not null,
        role text,
        message text not null,
        rating int not null default 5
      )
    `.then(() => undefined);
  }
  return tableReady;
}
