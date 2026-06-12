"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/utils";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = [
  "What services do you offer?",
  "Soil testing kaise hota hai?",
  "Training / Internship details",
  "Contract farming buy-back?",
];

function getReply(input: string): string {
  const q = input.toLowerCase();

  // services overview
  if (/(service|offer|do you do|provide|kya karte)/.test(q))
    return "We offer 7 services 🌱:\n• Krishaan Agro Services (B2C, B2B, machinery, advisory, market linkage)\n• Urban Gardening\n• Smart Farming\n• Contract Farming\n• Training Program\n• Internship\n• Soil Testing\n\nPlus premium agri products in our Shop. Which one interests you?";

  // training
  if (/(training|workshop|seekh|sikhna|course)/.test(q))
    return "Training Program 🎓 — Seekho, ugao, kamao!\n• Smart Farming (hydroponics/polyhouse)\n• Organic Farming\n• Floriculture\n• Urban Gardening workshops\n• Agri-Entrepreneurship\n• Soil & Crop Management\n\nHands-on training hamare operational farms par. WhatsApp pe details maangein!";

  // internship
  if (/(internship|intern|student|graduate|career)/.test(q))
    return "Internship 💼 — Career ki shuruaat khet se!\nCertified internships for students & graduates:\n• Agronomy • Hydroponics • Floriculture\n• Agri-Business & Marketing • Soil Lab • Field Research\n\nReal farms, real projects, expert mentorship. Apply via WhatsApp!";

  // smart farming
  if (/(smart farming|hydroponic|polyhouse|vertical farm|multilayer)/.test(q))
    return "Smart Farming 🚜 — Polyhouse setup, Hydroponic farm setup & farming, Multilayer (A-frame racks) and Vertical farming. 90% kam paani, zero soil, year-round production. Hamare website par real project photos bhi hain! Free consultation chahiye?";

  // urban gardening
  if (/(urban|garden|rooftop|terrace|balcony|lawn|interior)/.test(q))
    return "Urban Gardening 🌿 — rooftop/terrace, vertical walls, windowsill, park & lawn gardening, plus biophilic interior design. Ghar, society ya office — hum design, setup aur maintenance sab karte hain!";

  // contract farming
  if (/(contract|buy.?back|gladiolus|marigold|genda|rajnigandha|tuberose|guldaudi|chrysanthemum|flower|phool)/.test(q))
    return "Contract Farming 🤝 — full input support, technical guidance AND guaranteed buy-back!\nCrops: Gladiolus, Marigold (Genda), Tuberose (Rajnigandha), Chrysanthemum (Guldaudi), mixed floriculture & herbal crops.\nHum khet se hi weighing, grading aur on-the-spot procurement karte hain — record ke saath. 🌸";

  // soil testing
  if (/(soil|mitti|test|lab|npk|ph )/.test(q))
    return "Soil Testing 🧪 — Mitti jaano, fasal badhao!\nHum 14 parameters test karte hain: NPK, pH, EC, micro-nutrients sab. Report aasaan bhasha mein samjhate hain + fertilizer recommendation bhi.\n\nSample buaai se ~1 mahina pehle bhejein. Poora sampling guide website ke Soil Testing page par hai. Book karne ke liye WhatsApp karein!";

  // products / order
  if (/(order|buy|product|shop|cod|delivery|cart|kharid)/.test(q))
    return "Shop 🛒 mein 8 premium products hain — cattle feed, vermicompost, power tiller, drip irrigation, hydroponic kits, neem bio-pesticide, moringa powder & grow towers.\n\nCart mein daalo → WhatsApp pe order → Cash on Delivery. Best price enquiry par milta hai — koi advance payment nahi!";

  // machinery
  if (/(machinery|tractor|tiller|equipment|aujar)/.test(q))
    return "Agri Machinery 🚜 — modern tractors, tillers, tools aur implements — sale & rental dono. Mini Power Tiller shop mein available hai. Details ke liye WhatsApp karein!";

  // pricing
  if (/(price|cost|quote|rate|kitna|paisa|fees)/.test(q))
    return "Pricing crop, area aur service ke hisaab se hoti hai — isliye hum 'Best price on enquiry' model use karte hain. 💬 WhatsApp pe apni requirement bhejein, team turant best quote degi. Koi hidden charge nahi!";

  // team / founder
  if (/(founder|ceo|team|abhishek|ujjawal|pawan|deepak|kaun|who)/.test(q))
    return "Hamari team 👥:\n• Abhishek Kumar — Founder & CEO\n• Ujjawal Kumar — Co-Founder\n• Pawan Kumar — CMO\n• Deepak Kumar — COO\n\nAbout page par founder ka message aur poori team ki photos hain!";

  // partner
  if (/(partner|sapl|satbahani|collab)/.test(q))
    return "Hamara official partner hai Satbahani Agro Pvt Ltd (SAPL), Aurangabad 🤝 — saath milkar hum Bihar ke kisaano tak behtar services pahuncha rahe hain.";

  // awards / gallery
  if (/(award|gallery|photo|achievement|moment)/.test(q))
    return "Awards & Gallery 🏆 — humein kai awards aur felicitations mile hain! Website ke 'Awards' page par 31 real photos hain — award ceremonies, kisan events aur field moments. Zaroor dekhein!";

  // events
  if (/(event|expo|fair|mela)/.test(q))
    return "Upcoming Events 📅:\n• India Horti Expo 2026 (19 Jun, Greater Noida)\n• Agroworld Expo 2026 (20 Nov, New Delhi)\n• Bharat Agri Tech 2027 (08 Jan, Bengaluru)\n• Farm-Tech India 2027 (14 Feb, Patna)\n\nIn events mein humse milein! Details homepage par hain.";

  // address / location
  if (/(address|location|kahan|office|aurangabad|bihar|visit)/.test(q))
    return `Hamara office 📍:\n${SITE.address}\n\nMon–Sat, 9am–7pm. Aane se pehle ek baar call/WhatsApp kar lein: ${SITE.phoneDisplay}`;

  // email
  if (/(email|mail)/.test(q))
    return `Aap humein email kar sakte hain: ${SITE.email} 📧 — ya website ke Contact page ka form bharein, message seedha hamari team tak pahunchta hai.`;

  // greeting
  if (/(^hi\b|hello|hey|namaste|namaskar|ram ram)/.test(q))
    return "Namaste! 🙏 Main Agri-bot hoon — Krishaan Agro ka assistant. Services, products, training, soil testing, contract farming — kuch bhi puchhiye!";

  // thanks
  if (/(thank|dhanyawad|shukriya|badhiya|nice|great)/.test(q))
    return "Dhanyawad! 🙏🌱 Krishaan Agro ko chunne ke liye shukriya. Aur koi sawaal ho toh zaroor puchhein — ya WhatsApp pe team se seedha baat karein!";

  // contact
  if (/(contact|call|number|whatsapp|phone|reach|baat)/.test(q))
    return `You can call us at ${SITE.phoneDisplay} or tap the WhatsApp button below to chat with our team directly. 📞 Email: ${SITE.email}`;

  return "Great question! 🌾 Main in topics mein madad kar sakta hoon: services, smart farming, urban gardening, contract farming, training, internship, soil testing, products, events, team aur contact. Ya neeche WhatsApp button se team se seedha baat karein!";
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
