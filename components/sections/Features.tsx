"use client";

import { motion } from "framer-motion";
import {
  Camera,
  LayoutGrid,
  BarChart3,
  AlertTriangle,
  CreditCard,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    name: "ANPR Recognition",
    desc: "Reads licence plates at 99.8% accuracy in any weather, 24/7, with no manual input required.",
  },
  {
    icon: LayoutGrid,
    name: "Parking Management",
    desc: "Monitor every zone, spot, and entry point from one unified dashboard in real time.",
  },
  {
    icon: BarChart3,
    name: "Admin Dashboard",
    desc: "Full analytics, live camera feeds, entry logs, revenue tracking — all in the purple dashboard your team already uses.",
  },
  {
    icon: AlertTriangle,
    name: "Penalty System",
    desc: "Automatic penalty notice generation with photographic evidence attached and delivery to the registered keeper.",
  },
  {
    icon: CreditCard,
    name: "Online Payments",
    desc: "Stripe-powered payment page. Drivers pay in 60 seconds from any device. No phone calls needed.",
  },
  {
    icon: FileText,
    name: "Instant Reporting",
    desc: "Export occupancy, revenue, and penalty reports as PDF or CSV. Schedule automatic weekly email digests.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-body-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-display font-semibold text-purple-primary tracking-[0.1em] uppercase">
            Features
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary">
            Everything you need to run a modern car park
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              className="group bg-white border border-border-custom rounded-2xl p-7 hover:border-t-[3px] hover:border-t-purple-primary hover:shadow-[var(--shadow-md)] hover:-translate-y-[2px] transition-all duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-[var(--radius-md)] bg-purple-tint flex items-center justify-center">
                <feature.icon size={20} className="text-purple-primary" />
              </div>
              <h3 className="mt-4 font-body font-semibold text-[17px] text-text-primary">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-[#64748B] font-body leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
