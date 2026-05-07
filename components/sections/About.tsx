"use client";

import { motion } from "framer-motion";
import {
  Car,
  ShoppingBag,
  Heart,
  Home,
  Hotel,
  Building2,
} from "lucide-react";

const sectors = [
  { icon: Car, name: "Private Parking" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Heart, name: "Healthcare" },
  { icon: Home, name: "Residential" },
  { icon: Hotel, name: "Hotels" },
  { icon: Building2, name: "Institutions" },
];

const stats = [
  { value: "99.8%", label: "ANPR plate accuracy" },
  { value: "43%", label: "Reduction in enforcement time" },
  { value: "5 min", label: "Average setup per site" },
];

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-body-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-display font-semibold text-purple-primary tracking-[0.1em] uppercase">
              About the System
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary leading-tight">
              Built for private parking operators who need full control
            </h2>
            <div className="mt-6 space-y-4 text-text-secondary font-body leading-relaxed">
              <p>
                AI Car Park uses intelligent ANPR cameras to detect every
                vehicle entering your site. Time is tracked automatically —
                when limits are exceeded, penalties are generated with full
                photographic evidence.
              </p>
              <p>
                Drivers pay online in seconds, with instant confirmation.
                Whether you manage a retail car park, hospital, or residential
                complex — one dashboard gives you total control.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["⚡ Full automation", "📉 Cost reduction", "🎛 Full control"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 bg-purple-tint text-purple-deep text-sm font-body font-medium rounded-full"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right — sectors + stats */}
          <div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-white border border-border-custom rounded-xl p-4 flex flex-col items-start gap-3 hover:border-purple-primary hover:shadow-[var(--shadow-sm)] transition-all duration-200 cursor-default"
                >
                  <sector.icon size={24} className="text-purple-primary" />
                  <span className="text-sm font-body font-medium text-text-primary">
                    {sector.name}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-3xl lg:text-[40px] text-purple-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-body text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
