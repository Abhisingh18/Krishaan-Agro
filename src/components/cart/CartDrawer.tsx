"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { whatsappLink } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, close, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  const buildMessage = () => {
    const lines = items.map((i) => `• ${i.name} (${i.unit}) x${i.qty}`);
    return `Hi Krishaan Agro! 🌱 I'd like to place an order (COD):\n\n${lines.join(
      "\n"
    )}\n\nPlease share the best price.\n\nName:\nAddress:\nPhone:`;
  };

  const placeOrder = () => {
    setPlaced(true);
    setTimeout(() => {
      window.open(whatsappLink(buildMessage()), "_blank");
      clear();
      setPlaced(false);
      close();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-brand-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-brand-100 px-6 py-5">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-brand-900">
                <ShoppingBag className="h-5 w-5 text-brand-600" />
                Your Cart
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs text-brand-700">
                  {items.length}
                </span>
              </h3>
              <button
                onClick={close}
                className="rounded-full p-2 text-brand-700 transition hover:bg-brand-100"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-100">
                  <ShoppingBag className="h-9 w-9 text-brand-500" />
                </div>
                <p className="text-brand-800/70">Your cart is empty.</p>
                <button onClick={close} className="btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {items.map((i) => (
                    <motion.div
                      layout
                      key={i.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-4 rounded-2xl bg-white p-3 shadow-card"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={i.image}
                          alt={i.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold leading-tight text-brand-900">
                            {i.name}
                          </p>
                          <button
                            onClick={() => remove(i.id)}
                            className="text-brand-400 transition hover:text-accent-600"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-brand-500">{i.unit}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-brand-200 bg-cream p-1">
                            <button
                              onClick={() => setQty(i.id, i.qty - 1)}
                              className="grid h-6 w-6 place-items-center rounded-full hover:bg-brand-100"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">
                              {i.qty}
                            </span>
                            <button
                              onClick={() => setQty(i.id, i.qty + 1)}
                              className="grid h-6 w-6 place-items-center rounded-full hover:bg-brand-100"
                              aria-label="Increase"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-600">
                            On enquiry
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-brand-100 bg-white px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-xs text-brand-500">
                    <span>Pricing &amp; delivery</span>
                    <span>Confirmed on WhatsApp</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    disabled={placed}
                    className="btn-accent w-full text-base"
                  >
                    {placed ? (
                      "Opening WhatsApp…"
                    ) : (
                      <>
                        <MessageCircle className="h-5 w-5" />
                        Order via WhatsApp (COD)
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-brand-500">
                    Cash on Delivery & WhatsApp confirmation. No advance payment.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
