"use client";

import { motion } from "framer-motion";

const rows = [
  { feature: "Setup time", ai: "5 minutes", trad: "Days or weeks" },
  { feature: "ANPR accuracy", ai: "99.8%", trad: "80–90%" },
  { feature: "Manual staff needed", ai: "None", trad: "Required" },
  { feature: "Online payments", ai: "Built-in", trad: "Third party" },
  { feature: "Real-time reporting", ai: "Instant", trad: "Manual export" },
  { feature: "Scalability", ai: "Unlimited sites", trad: "Per-site licensing" },
];

export default function CompetitiveAdvantages() {
  return (
    <section className="py-24 lg:py-32 bg-body-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-display font-semibold text-purple-primary tracking-[0.1em] uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary leading-tight">
              Why AI Car Park beats traditional enforcement
            </h2>
            <p className="mt-6 text-text-secondary font-body leading-relaxed">
              Traditional car park enforcement requires manual patrols, paper
              tickets, and third-party payment processors. AI Car Park replaces
              all of that with a single intelligent platform that scales to any
              number of sites — deployed in minutes, not weeks.
            </p>
          </motion.div>

          {/* Right — comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-border-custom rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 text-sm font-body font-semibold">
                <div className="px-5 py-4 text-text-secondary">Feature</div>
                <div className="px-5 py-4 bg-purple-primary/5 text-purple-primary text-center">
                  AI Car Park ✓
                </div>
                <div className="px-5 py-4 text-text-muted text-center">
                  Traditional ✗
                </div>
              </div>
              {/* Rows */}
              {rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm font-body ${
                    i % 2 === 0 ? "bg-body-bg" : "bg-white"
                  }`}
                >
                  <div className="px-5 py-3.5 text-text-primary font-medium">
                    {row.feature}
                  </div>
                  <div className="px-5 py-3.5 text-success text-center font-medium">
                    ✓ {row.ai}
                  </div>
                  <div className="px-5 py-3.5 text-text-muted text-center">
                    ✗ {row.trad}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
