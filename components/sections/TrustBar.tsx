"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Camera, Zap, Headphones } from "lucide-react";

const items = [
  { icon: Shield, text: "GDPR Compliant" },
  { icon: Lock, text: "Stripe Secured Payments" },
  { icon: Camera, text: "99.8% ANPR Accuracy" },
  { icon: Zap, text: "Instant Online Confirmation" },
  { icon: Headphones, text: "UK-wide Support" },
];

export default function TrustBar() {
  return (
    <motion.section
      className="bg-[rgba(124,58,237,0.08)] border-t border-b border-[rgba(124,58,237,0.15)] py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {items.map((item, i) => (
            <div key={item.text} className="flex items-center gap-2.5">
              {i > 0 && (
                <div className="hidden md:block w-px h-5 bg-border-custom -ml-6 mr-6" />
              )}
              <item.icon size={20} className="text-purple-primary shrink-0" />
              <span className="text-sm font-body font-medium text-text-secondary whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
