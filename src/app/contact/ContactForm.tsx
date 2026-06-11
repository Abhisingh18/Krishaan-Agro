"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Enquiry — Krishaan Agro\n\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`;
    setSent(true);
    setTimeout(() => {
      window.open(whatsappLink(msg), "_blank");
    }, 600);
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

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-100 bg-white p-12 text-center shadow-card">
        <CheckCircle2 className="h-16 w-16 text-brand-500" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-900">
          Thank you! 🌱
        </h3>
        <p className="mt-2 text-brand-600">
          We&apos;re opening WhatsApp to connect you with our team right away.
        </p>
        <button
          onClick={() => setSent(false)}
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
      <button type="submit" className="btn-primary mt-6 w-full text-base">
        Send Message <Send className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-brand-500">
        Your message will be sent to our team via WhatsApp for the fastest reply.
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
