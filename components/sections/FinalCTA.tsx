"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { PHONE_NUMBER } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-dark-hero overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative max-w-[640px] mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="purple">Get Started</Badge>

        <h2 className="mt-6 font-display font-bold text-3xl lg:text-[48px] lg:leading-[1.1] text-white">
          Ready to take full control of your car park?
        </h2>

        <p className="mt-5 text-text-muted font-body text-lg leading-relaxed">
          Join parking operators across Europe using AI Car Park to automate
          enforcement and payments.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] transition-all duration-200"
          >
            Request a Quote
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/20 text-white font-body font-medium rounded-[var(--radius-md)] hover:border-white/40 transition-all duration-200"
          >
            Schedule a Demo
          </a>
        </div>

        <p className="mt-8 text-text-muted font-body text-sm">
          Or call us directly:
        </p>
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
          className="inline-block mt-1 text-white font-body font-medium text-xl hover:text-purple-primary transition-colors"
        >
          {PHONE_NUMBER}
        </a>
      </motion.div>
    </section>
  );
}
