"use client";

import { motion } from "framer-motion";

function CameraScene() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-[180px]">
      {/* Ground */}
      <rect x="0" y="130" width="200" height="2" rx="1" fill="#E2E8F0" />
      {/* Camera post */}
      <rect x="30" y="40" width="6" height="92" rx="3" fill="#94A3B8" />
      {/* Camera head */}
      <rect x="20" y="28" width="28" height="18" rx="4" fill="#7C3AED" />
      <circle cx="34" cy="37" r="5" fill="#5B21B6" />
      <circle cx="34" cy="37" r="2.5" fill="#A78BFA" />
      {/* Scan beams */}
      <g className="animate-scan-beam">
        <line x1="48" y1="34" x2="120" y2="70" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="48" y1="37" x2="120" y2="90" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="48" y1="40" x2="120" y2="110" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.15" />
      </g>
      {/* Car body */}
      <g transform="translate(90, 95)">
        <rect x="0" y="12" width="80" height="24" rx="4" fill="#64748B" />
        <path d="M15,12 Q20,0 35,0 L55,0 Q70,0 72,12" fill="#475569" />
        {/* Windows */}
        <path d="M20,12 Q23,4 35,4 L44,4 L42,12" fill="#94A3B8" opacity="0.6" />
        <path d="M46,12 L48,4 L55,4 Q65,4 67,12" fill="#94A3B8" opacity="0.6" />
        {/* Wheels */}
        <circle cx="20" cy="36" r="7" fill="#334155" />
        <circle cx="20" cy="36" r="3" fill="#1E293B" />
        <circle cx="60" cy="36" r="7" fill="#334155" />
        <circle cx="60" cy="36" r="3" fill="#1E293B" />
        {/* Headlights */}
        <rect x="75" y="16" width="5" height="6" rx="1" fill="#FBBF24" opacity="0.8" />
      </g>
      {/* Plate highlight */}
      <rect x="125" y="115" width="30" height="8" rx="2" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
      <text x="129" y="122" fontSize="5" fontFamily="monospace" fill="#7C3AED">AB12</text>
    </svg>
  );
}

function TimerScene() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-[180px]">
      {/* Dashboard card */}
      <rect x="20" y="10" width="160" height="100" rx="12" fill="#1E293B" />
      {/* Purple sidebar */}
      <rect x="20" y="10" width="24" height="100" rx="12" fill="#7C3AED" />
      <rect x="32" y="10" width="12" height="100" fill="#7C3AED" />
      {/* Sidebar icons */}
      <rect x="28" y="22" width="12" height="8" rx="2" fill="white" opacity="0.3" />
      <rect x="28" y="36" width="12" height="8" rx="2" fill="white" opacity="0.15" />
      <rect x="28" y="50" width="12" height="8" rx="2" fill="white" opacity="0.15" />
      {/* Content area */}
      <rect x="52" y="22" width="60" height="6" rx="2" fill="#334155" />
      <rect x="52" y="34" width="40" height="4" rx="2" fill="#334155" />
      <rect x="52" y="44" width="50" height="4" rx="2" fill="#334155" />
      {/* Clock */}
      <circle cx="140" cy="45" r="20" fill="none" stroke="#7C3AED" strokeWidth="2" />
      <line x1="140" y1="45" x2="140" y2="32" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="45" x2="150" y2="45" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 140 45" to="360 140 45" dur="8s" repeatCount="indefinite" />
      </line>
      <circle cx="140" cy="45" r="2" fill="#7C3AED" />
      {/* Timer readout */}
      <rect x="65" y="72" width="70" height="26" rx="6" fill="#0F172A" />
      <text x="76" y="90" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#7C3AED">2h 45m</text>
      {/* Parked car */}
      <g transform="translate(50, 120)">
        <rect x="0" y="8" width="50" height="16" rx="3" fill="#64748B" />
        <path d="M10,8 Q12,0 22,0 L34,0 Q42,0 43,8" fill="#475569" />
        <circle cx="12" cy="24" r="5" fill="#334155" />
        <circle cx="38" cy="24" r="5" fill="#334155" />
      </g>
    </svg>
  );
}

function PenaltyScene() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-[180px]">
      {/* Penalty notice document */}
      <rect x="35" y="10" width="130" height="110" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      {/* Red header */}
      <rect x="35" y="10" width="130" height="24" rx="8" fill="#EF4444" />
      <rect x="35" y="26" width="130" height="8" fill="#EF4444" />
      <text x="55" y="28" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fill="white">PENALTY NOTICE</text>
      {/* Document lines */}
      <rect x="50" y="44" width="80" height="4" rx="2" fill="#E2E8F0" />
      <rect x="50" y="54" width="60" height="4" rx="2" fill="#E2E8F0" />
      <rect x="50" y="64" width="70" height="4" rx="2" fill="#E2E8F0" />
      <rect x="50" y="74" width="50" height="4" rx="2" fill="#E2E8F0" />
      <rect x="50" y="84" width="75" height="4" rx="2" fill="#E2E8F0" />
      <rect x="50" y="94" width="45" height="4" rx="2" fill="#E2E8F0" />
      {/* Diagonal stamp */}
      <g transform="rotate(-18, 100, 80)">
        <rect x="60" y="68" width="80" height="24" rx="4" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 2" />
        <text x="68" y="84" fontSize="10" fontFamily="sans-serif" fontWeight="bold" fill="#EF4444">PENALTY</text>
      </g>
      {/* Alert triangle */}
      <g transform="translate(145, 115)">
        <polygon points="15,0 30,26 0,26" fill="#F59E0B" />
        <text x="12" y="22" fontSize="14" fontWeight="bold" fill="white">!</text>
      </g>
      {/* Car with exclamation */}
      <g transform="translate(10, 130)">
        <rect x="0" y="6" width="40" height="12" rx="2" fill="#64748B" />
        <circle cx="8" cy="18" r="4" fill="#334155" />
        <circle cx="32" cy="18" r="4" fill="#334155" />
        <circle cx="20" cy="-2" r="8" fill="#EF4444" />
        <text x="17" y="2" fontSize="10" fontWeight="bold" fill="white">!</text>
      </g>
    </svg>
  );
}

function PaidScene() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-[180px]">
      {/* Confetti dots */}
      <circle cx="30" cy="20" r="4" fill="#7C3AED" opacity="0.6" />
      <circle cx="170" cy="15" r="3" fill="#10B981" opacity="0.5" />
      <circle cx="50" cy="35" r="2.5" fill="#F59E0B" opacity="0.5" />
      <circle cx="155" cy="40" r="3.5" fill="#EF4444" opacity="0.4" />
      <circle cx="80" cy="10" r="2" fill="#3B82F6" opacity="0.5" />
      <circle cx="140" cy="5" r="2.5" fill="#7C3AED" opacity="0.4" />
      {/* Phone frame */}
      <rect x="50" y="20" width="100" height="130" rx="16" fill="#7C3AED" />
      <rect x="54" y="28" width="92" height="116" rx="12" fill="white" />
      {/* PAID badge */}
      <rect x="62" y="38" width="76" height="32" rx="16" fill="#10B981" />
      <text x="77" y="59" fontSize="14" fontFamily="sans-serif" fontWeight="bold" fill="white">PAID ✓</text>
      {/* Details card */}
      <rect x="62" y="80" width="76" height="52" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="70" y="95" fontSize="6" fill="#94A3B8" fontFamily="sans-serif">Site</text>
      <text x="70" y="104" fontSize="7" fill="#0F172A" fontWeight="500" fontFamily="monospace">AB123</text>
      <text x="70" y="115" fontSize="6" fill="#94A3B8" fontFamily="sans-serif">Licence plate</text>
      <text x="70" y="124" fontSize="7" fill="#0F172A" fontWeight="500" fontFamily="monospace">AB12 CDE</text>
      {/* Phone notch */}
      <rect x="82" y="22" width="36" height="4" rx="2" fill="#5B21B6" />
    </svg>
  );
}

const steps = [
  {
    num: 1,
    title: "Vehicle detected",
    desc: "ANPR cameras read every licence plate entering your car park — rain or shine, 24/7.",
    illustration: <CameraScene />,
    tint: "",
  },
  {
    num: 2,
    title: "Time monitored",
    desc: "The system tracks how long each vehicle stays, against your configured time limits.",
    illustration: <TimerScene />,
    tint: "",
  },
  {
    num: 3,
    title: "Penalty generated",
    desc: "When time is exceeded, a penalty notice is created automatically with photo evidence.",
    illustration: <PenaltyScene />,
    tint: "bg-[rgba(239,68,68,0.04)]",
  },
  {
    num: 4,
    title: "Paid online",
    desc: "Drivers pay in 60 seconds from any device. Instant confirmation, zero phone calls.",
    illustration: <PaidScene />,
    tint: "bg-[rgba(16,185,129,0.04)]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
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
            How It Works
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary">
            From detection to payment — fully automated
          </h2>
          <p className="mt-4 text-text-secondary font-body leading-relaxed">
            Four steps. Zero manual input. Your car park runs itself while you
            focus on what matters.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden lg:block absolute top-[120px] left-[25%] right-[25%] h-px border-t-2 border-dashed border-[#C4B5FD] z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Step number */}
              <div className="flex justify-center mb-[-20px] relative z-20">
                <div className="w-10 h-10 rounded-full bg-border-custom flex items-center justify-center font-display font-bold text-base text-text-primary">
                  {step.num}
                </div>
              </div>

              {/* Card */}
              <div
                className={`rounded-[20px] border border-border-custom p-8 pt-10 text-center ${
                  step.tint || "bg-body-bg"
                }`}
              >
                {/* Illustration */}
                <div className="mb-5">{step.illustration}</div>

                <h3 className="font-body font-semibold text-[17px] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#64748B] font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
