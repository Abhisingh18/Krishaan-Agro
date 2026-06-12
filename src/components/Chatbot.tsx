"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/utils";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = [
  "What services do you offer?",
  "Tell me about smart farming",
  "Contract farming buy-back?",
  "How do I order products?",
];

function getReply(input: string): string {
  const q = input.toLowerCase();
  if (/(service|offer|do you do|provide)/.test(q))
    return "We offer 5 verticals 🌱:\n• Krishaan Agro Services (B2C, B2B, machinery, soil lab, advisory, training, market linkage)\n• Urban Gardening\n• Smart Farming\n• Contract Farming\n• Premium Agri Products\n\nWhich one interests you?";
  if (/(smart farming|hydroponic|polyhouse|vertical|multilayer)/.test(q))
    return "Smart Farming 🚜 includes Polyhouse setup, Hydroponic farm setup & farming, Multilayer and Vertical farming — high yield with less water & space. Want a free consultation?";
  if (/(urban|garden|rooftop|terrace|balcony)/.test(q))
    return "Urban Gardening 🌿: rooftop/terrace, vertical, windowsill, park & lawn gardening, plus biophilic interior design. We design, set up and maintain it all!";
  if (/(contract|buy.?back|aloe|moringa|tulsi|ashwagandha)/.test(q))
    return "In Contract Farming 🤝 we provide inputs, technical guidance AND guaranteed buy-back for crops like Aloevera, Moringa, Tulsi, Ashwagandha, Rose, Marigold & more.";
  if (/(soil|test|lab|npk)/.test(q))
    return "Our accredited Soil Testing Lab 🧪 analyses NPK, pH and micro-nutrients, then gives you a crop-specific advisory report. Shall I help you book a test?";
  if (/(order|buy|product|price|cod|delivery|cart)/.test(q))
    return "Easy! 🛒 Browse the Shop, add items to cart, and checkout via WhatsApp with Cash on Delivery — no advance payment. Want me to open WhatsApp for you?";
  if (/(machinery|tractor|tiller|equipment)/.test(q))
    return "We offer modern Agri Machinery 🚜 for sale & rental — tillers, tools and implements suited for Indian fields. Check the Shop for current models!";
  if (/(price|cost|quote|rate)/.test(q))
    return "Pricing depends on crop, area and service. Share your details on WhatsApp and our team will send a custom quote within hours. 💬";
  if (/(hi|hello|hey|namaste|namaskar)/.test(q))
    return "Namaste! 🙏 I'm Agri-bot, your Krishaan Agro assistant. Ask me about our services, products or farming solutions!";
  if (/(contact|call|number|whatsapp|reach)/.test(q))
    return `You can call us at ${SITE.phoneDisplay} or tap the WhatsApp button below to chat with our team directly. 📞`;
  return "Great question! 🌾 Our experts can help you best. Tap below to chat on WhatsApp, or ask me about services, smart farming, products or soil testing.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Namaste! 🙏 I'm Agri-bot 🤖 — your Krishaan Agro assistant. How can I help you grow today?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: getReply(text) }]);
    }, 750 + Math.random() * 500);
  };

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-5 right-5 z-[90]">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setOpen(true)}
              className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow"
              aria-label="Open Agri-bot chat"
            >
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
              <Bot className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold ring-2 ring-cream">
                <Sparkles className="h-3 w-3" />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="fixed bottom-5 right-5 z-[95] flex h-[560px] max-h-[80vh] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-brand-100 bg-cream shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 to-brand-800 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/15">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-brand-700" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-none">Agri-bot</p>
                  <p className="mt-1 text-[11px] text-white/70">
                    Online • AI Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 transition hover:bg-white/15"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-leaf-grid bg-[length:18px_18px] px-4 py-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.from === "bot" && (
                    <span className="mr-2 mt-1 grid h-7 w-7 shrink-0 place-items-center self-end rounded-full bg-brand-600 text-white">
                      <Leaf className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div
                    className={`max-w-[78%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm shadow-card ${
                      m.from === "user"
                        ? "rounded-br-md bg-accent-500 text-white"
                        : "rounded-bl-md bg-white text-brand-900"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <span className="mr-2 grid h-7 w-7 shrink-0 place-items-center self-end rounded-full bg-brand-600 text-white">
                    <Leaf className="h-3.5 w-3.5" />
                  </span>
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-card">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 animate-bounce rounded-full bg-brand-400"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 transition hover:bg-brand-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-brand-100 bg-white p-3">
              <a
                href={whatsappLink("Hi Krishaan Agro! I have a question.")}
                target="_blank"
                rel="noreferrer"
                className="mb-2 block text-center text-[11px] font-medium text-brand-600 hover:underline"
              >
                Prefer a human? Chat on WhatsApp →
              </a>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Agri-bot anything…"
                  className="flex-1 rounded-full border border-brand-200 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-brand-400"
                />
                <button
                  type="submit"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
