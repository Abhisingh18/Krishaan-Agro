"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🌱 New Enquiry: ${form.subject} — ${form.name}`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Phone: form.phone,
          Subject: form.subject,
          Message: form.message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const subjects = [
    "General Enquiry",
    "Smart Farming",
    "Contract Farming",
    "Urban Gardening",
    "Buy Products",
    "Soil Testing",
    "Partnership",
  ];

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-100 bg-white p-12 text-center shadow-card">
        <CheckCircle2 className="h-16 w-16 text-brand-500" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-900">
          Message Sent! 🌱
        </h3>
        <p className="mt-2 text-brand-600">
          Aapki enquiry hamari team tak email se pahunch gayi hai. Hum jald hi
          aapse sampark karenge.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              phone: "",
              subject: "General Enquiry",
              message: "",
            });
          }}
          className="btn-outline mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Your name"
          required
        />
        <Field
          label="Phone Number"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          placeholder="+91 ..."
          required
        />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-brand-800">
          Subject
        </label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-2xl border border-brand-200 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-400"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-brand-800">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          placeholder="Tell us how we can help…"
          className="w-full resize-none rounded-2xl border border-brand-200 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-400"
        />
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Message send nahi ho paya. Dobara try karein ya humein call/WhatsApp
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
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-brand-500">
        Your message will be emailed directly to our team at {SITE.email}.
      </p>
    </form>
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
