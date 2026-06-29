"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2, Loader2, AlertCircle, MessageSquareHeart } from "lucide-react";
import { SITE } from "@/lib/utils";
import type { FeedbackRow } from "@/lib/db";

type Status = "idle" | "sending" | "sent" | "error";

export default function FeedbackForm({
  onSubmitted,
}: {
  /** Called with the new feedback so it can render on the page instantly. */
  onSubmitted?: (feedback: FeedbackRow) => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: "", role: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const row: FeedbackRow = {
      name: form.name.trim(),
      role: form.role.trim() || null,
      message: form.message.trim(),
      rating,
    };

    try {
      // Save to PostgreSQL so the feedback renders for every visitor.
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row),
      });
      if (!res.ok) throw new Error("send failed");

      onSubmitted?.({ ...row, created_at: new Date().toISOString() });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center justify-center rounded-3xl border border-brand-100 bg-white p-12 text-center shadow-card">
        <CheckCircle2 className="h-16 w-16 text-brand-500" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-900">
          Shukriya! 🌱
        </h3>
        <p className="mt-2 text-brand-600">
          Aapka feedback hamari team tak pahunch gaya hai. Aapki baat hamare liye
          bahut keemti hai.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setRating(5);
            setForm({ name: "", role: "", message: "" });
          }}
          className="btn-outline mt-6"
        >
          Share more feedback
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
          <MessageSquareHeart className="h-3.5 w-3.5 text-accent-500" /> Your Voice
        </span>
        <h3 className="mt-3 font-display text-2xl font-bold text-brand-900 sm:text-3xl">
          Share your feedback
        </h3>
        <p className="mt-2 text-sm text-brand-600">
          Krishaan Agro ke saath aapka anubhav kaisa raha? Hamein zaroor bataayein.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-8"
      >
        {/* Rating */}
        <div className="flex flex-col items-center gap-2">
          <label className="text-sm font-semibold text-brand-800">
            How would you rate us?
          </label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                onClick={() => setRating(n)}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    n <= (hover || rating)
                      ? "fill-accent-500 text-accent-500"
                      : "text-brand-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field
            label="Your Name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="Your name"
            required
          />
          <Field
            label="Role / Location"
            value={form.role}
            onChange={(v) => setForm({ ...form, role: v })}
            placeholder="e.g. Dairy Farmer, Bihar"
          />
        </div>

        <div className="mt-4">
          <label className="mb-1.5 block text-sm font-semibold text-brand-800">
            Your Feedback
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            placeholder="Apna anubhav humein bataayein…"
            className="w-full resize-none rounded-2xl border border-brand-200 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-400"
          />
        </div>

        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 rounded-2xl bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="h-5 w-5 shrink-0" />
            Feedback send nahi ho paya. Dobara try karein ya humein call/WhatsApp
            karein: {SITE.phoneDisplay}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary mt-6 w-full text-base disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              Sending… <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Submit Feedback <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-brand-800">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-brand-200 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-400"
      />
    </div>
  );
}
