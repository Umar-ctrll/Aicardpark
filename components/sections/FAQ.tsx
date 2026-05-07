"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I pay a parking penalty?",
    a: "Visit the Pay page, enter your vehicle registration and penalty reference ID, then pay securely by card. You'll receive instant confirmation.",
  },
  {
    q: "How long do I have to pay?",
    a: "You have 28 days from the issue date. Paying within 14 days qualifies you for the reduced rate (typically 50% off).",
  },
  {
    q: "What if I wasn't the driver?",
    a: "You can transfer liability to the actual driver — use the appeal form and provide their details along with a brief explanation.",
  },
  {
    q: "Can I appeal a penalty?",
    a: "Yes. Submit an appeal through the Penalty Zone with your reason and any supporting evidence. We'll respond within 5 working days.",
  },
  {
    q: "What is ANPR?",
    a: "Automatic Number Plate Recognition — cameras automatically read your licence plate as you enter and exit the car park, with 99.8% accuracy.",
  },
  {
    q: "Is my payment secure?",
    a: "Absolutely. All payments are processed by Stripe, which is PCI DSS Level 1 compliant — the highest level of payment security certification.",
  },
  {
    q: "Will I get a receipt?",
    a: "Yes. An email confirmation and receipt are sent automatically to the email address you provide during payment.",
  },
  {
    q: "What if I don't pay?",
    a: "The charge may escalate to the full amount if not paid within the reduced period. Continued non-payment can result in court action (CCJ).",
  },
  {
    q: "How do I contact you?",
    a: "Use the contact form at the bottom of this page, or call us directly. Our support team covers the entire UK.",
  },
  {
    q: "How accurate is the ANPR system?",
    a: "Our system achieves 99.8% accuracy across all conditions. Photographic evidence is captured for every vehicle entry and exit.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
        open ? "border-t-2 border-t-purple-primary border-border-custom" : "border-border-custom"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span
          className={`font-body font-medium text-base pr-4 ${
            open ? "text-text-primary font-semibold" : "text-text-primary"
          }`}
        >
          {q}
        </span>
        {open ? (
          <Minus size={20} className="text-purple-primary shrink-0" />
        ) : (
          <Plus size={20} className="text-purple-primary shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-250 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-text-secondary font-body leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const left = faqs.slice(0, 5);
  const right = faqs.slice(5);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-body-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-display font-semibold text-purple-primary tracking-[0.1em] uppercase">
            FAQ
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            {left.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
          <div className="space-y-2">
            {right.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
