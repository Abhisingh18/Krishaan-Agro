import { NextResponse } from "next/server";
import { sql, ensureTable, type FeedbackRow } from "@/lib/db";

export const dynamic = "force-dynamic";

// GET /api/feedback → latest feedback for the testimonials section
export async function GET() {
  if (!sql) return NextResponse.json({ feedbacks: [] });
  try {
    await ensureTable();
    const feedbacks = (await sql`
      select name, role, message, rating, created_at
        from feedbacks
       order by created_at desc
       limit 12
    `) as FeedbackRow[];
    return NextResponse.json({ feedbacks });
  } catch (err) {
    console.error("GET /api/feedback failed:", err);
    return NextResponse.json({ feedbacks: [] }, { status: 500 });
  }
}

// POST /api/feedback → save a new feedback
export async function POST(req: Request) {
  if (!sql) {
    return NextResponse.json(
      { ok: false, error: "Database not configured" },
      { status: 503 }
    );
  }
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim().slice(0, 80);
    const role = String(body.role ?? "").trim().slice(0, 120) || null;
    const message = String(body.message ?? "").trim().slice(0, 1000);
    const rating = Math.max(1, Math.min(5, Number(body.rating) || 5));

    if (!name || !message) {
      return NextResponse.json(
        { ok: false, error: "Name and message are required" },
        { status: 400 }
      );
    }

    await ensureTable();
    await sql`
      insert into feedbacks (name, role, message, rating)
      values (${name}, ${role}, ${message}, ${rating})
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/feedback failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save feedback" },
      { status: 500 }
    );
  }
}
