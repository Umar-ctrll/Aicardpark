"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

function DashboardMockup() {
  return (
    <div className="relative group">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-2xl bg-purple-primary/20 blur-[60px] scale-110 transition-all duration-600" />

      <div
        className="relative bg-dark-surface border border-dark-border rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(124,58,237,0.1)] transition-transform duration-600 ease-out"
        style={{
          transform: "perspective(1200px) rotateY(-8deg) rotateX(2deg)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform =
            "perspective(1200px) rotateY(0deg) rotateX(0deg)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform =
            "perspective(1200px) rotateY(-8deg) rotateX(2deg)")
        }
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-dark-hero border-b border-dark-border">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="flex-1 mx-4 h-6 bg-dark-surface rounded-md" />
        </div>

        {/* Dashboard content */}
        <div className="flex h-[340px] lg:h-[380px]">
          {/* Purple sidebar */}
          <div className="w-14 bg-purple-primary/90 flex flex-col items-center gap-4 py-4 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-white/20" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
          </div>

          {/* Main area */}
          <div className="flex-1 p-4 space-y-3">
            {/* Top stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Active Sessions", val: "1,247", color: "text-purple-primary" },
                { label: "Revenue Today", val: "£3,420", color: "text-success" },
                { label: "Penalties Issued", val: "23", color: "text-alert" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-hero/50 rounded-lg p-3 border border-dark-border/50"
                >
                  <p className="text-[10px] text-text-muted font-body">
                    {stat.label}
                  </p>
                  <p
                    className={`text-lg font-display font-bold ${stat.color} mt-0.5`}
                  >
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="bg-dark-hero/50 rounded-lg p-3 border border-dark-border/50 flex-1 h-32">
              <p className="text-[10px] text-text-muted font-body mb-2">
                Weekly Revenue
              </p>
              <svg viewBox="0 0 300 80" className="w-full h-20">
                <defs>
                  <linearGradient
                    id="chartGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#7C3AED"
                      stopOpacity="0.02"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0,60 C30,55 60,40 90,35 C120,30 150,45 180,30 C210,15 240,25 270,10 L300,8 L300,80 L0,80 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,60 C30,55 60,40 90,35 C120,30 150,45 180,30 C210,15 240,25 270,10 L300,8"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Table rows */}
            <div className="bg-dark-hero/50 rounded-lg border border-dark-border/50 overflow-hidden">
              {["AB12CDE", "XY99ABC", "LM34NOP"].map((reg, i) => (
                <div
                  key={reg}
                  className={`flex items-center justify-between px-3 py-2 text-[10px] font-body ${
                    i !== 2 ? "border-b border-dark-border/30" : ""
                  }`}
                >
                  <span className="font-mono text-white/80">{reg}</span>
                  <span className="text-text-muted">Zone A</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${
                      i === 0
                        ? "bg-success/20 text-success"
                        : i === 1
                        ? "bg-alert/20 text-alert"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {i === 0 ? "Active" : i === 1 ? "Penalty" : "Exiting"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark-hero overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 30% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-[120px] pb-20 lg:pt-[140px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="purple">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse-dot" />
                AI-Powered Parking Management
              </Badge>
            </motion.div>

            <motion.h1
              className="mt-8 font-display font-bold text-[40px] lg:text-[64px] leading-[1.05] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Stop managing parking.
              <br />
              Let <span className="text-purple-primary">AI</span> do it.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-text-muted max-w-[520px] leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Automate enforcement, slash costs, and get paid instantly online
              — powered by ANPR camera intelligence.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] transition-all duration-200"
              >
                See How It Works
                <ArrowRight size={16} />
              </a>
              <a
                href="#penalty-zone"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-dark-border text-white font-body font-medium rounded-[var(--radius-md)] hover:border-purple-primary transition-all duration-200"
              >
                Pay a Penalty
              </a>
            </motion.div>

            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                {["JD", "SK", "AM"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-dark-hero flex items-center justify-center text-[10px] font-bold font-body text-white"
                    style={{
                      background: ["#7C3AED", "#5B21B6", "#8B5CF6"][i],
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#64748B] font-body">
                Trusted by 50+ private parking operators across Europe
              </p>
            </motion.div>
          </div>

          {/* Right column — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-scroll-line" />
          <span className="text-[11px] text-[#475569] font-body">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
