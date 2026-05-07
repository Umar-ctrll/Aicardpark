"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

type TabKey = "pay" | "appeal" | "ccj";

const tabs: { key: TabKey; label: string }[] = [
  { key: "pay", label: "How to Pay" },
  { key: "appeal", label: "Appeal Process" },
  { key: "ccj", label: "CCJ / Court Claims" },
];

const paySteps = [
  {
    num: 1,
    title: "Find your penalty reference",
    desc: "Look at your penalty notice — the reference number is printed at the top (e.g. PCN-2025-001234).",
  },
  {
    num: 2,
    title: "Visit the Pay page",
    desc: "Click the \"Pay Penalty\" button in the navigation or scroll to the Penalty Zone on this page.",
  },
  {
    num: 3,
    title: "Enter your vehicle reg + penalty ID",
    desc: "Type your vehicle registration and penalty reference into the form fields.",
  },
  {
    num: 4,
    title: "Pay securely by card",
    desc: "Complete your payment via Stripe. You'll receive instant confirmation and an email receipt.",
  },
];

const appealSteps = [
  {
    num: 1,
    title: "Submit appeal with reason + evidence",
    desc: "Use the appeal form in the Penalty Zone to explain your case and upload supporting evidence.",
  },
  {
    num: 2,
    title: "We review within 5 working days",
    desc: "Our team reviews your appeal along with the camera evidence and parking records.",
  },
  {
    num: 3,
    title: "Decision emailed to you",
    desc: "You'll receive an email with the outcome of your appeal and next steps.",
  },
  {
    num: 4,
    title: "Outcome",
    desc: "If upheld, the penalty is cancelled. If rejected, payment is due within 14 days.",
  },
];

function PayTab() {
  return (
    <div className="space-y-6">
      {paySteps.map((step) => (
        <div key={step.num} className="flex items-start gap-4">
          <div className="w-8 h-8 shrink-0 rounded-full bg-purple-tint flex items-center justify-center font-display font-bold text-sm text-purple-primary">
            {step.num}
          </div>
          <div>
            <h4 className="font-body font-semibold text-base text-text-primary">
              {step.title}
            </h4>
            <p className="mt-1 text-sm text-text-secondary font-body leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
      <a
        href="#penalty-zone"
        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep transition-all duration-200"
      >
        Pay Now →
      </a>
    </div>
  );
}

function AppealTab() {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border-custom" />
      <div className="space-y-8">
        {appealSteps.map((step) => (
          <div key={step.num} className="relative flex items-start gap-4">
            <div className="absolute left-[-18px] w-5 h-5 rounded-full bg-purple-primary border-4 border-white" />
            <div className="ml-3">
              <h4 className="font-body font-semibold text-base text-text-primary">
                {step.title}
              </h4>
              <p className="mt-1 text-sm text-text-secondary font-body leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CCJTab() {
  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-warning-tint border border-warning/30 flex items-start gap-3">
        <AlertTriangle size={20} className="text-warning shrink-0 mt-0.5" />
        <p className="text-sm font-body text-text-primary font-medium">
          Ignoring a penalty notice can lead to court action.
        </p>
      </div>
      <div className="space-y-4 text-sm text-text-secondary font-body leading-relaxed">
        <p>
          If a parking charge is not paid or appealed within the specified
          timeframe, the case may be escalated. This can result in a County
          Court Judgment (CCJ) being issued against the registered keeper.
        </p>
        <p>
          A CCJ is a formal court order that requires you to pay the debt. It
          will appear on your credit record for six years and can affect your
          ability to obtain credit, a mortgage, or other financial services.
        </p>
        <p>
          To avoid this outcome, we strongly recommend paying the penalty at
          the reduced rate within 14 days, or submitting an appeal if you
          believe the charge was issued in error.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href="#penalty-zone"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep transition-all duration-200"
        >
          Pay Now →
        </a>
        <a
          href="#penalty-zone"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border-custom text-text-primary font-body font-medium rounded-[var(--radius-md)] hover:border-purple-primary transition-all duration-200"
        >
          Submit Appeal
        </a>
      </div>
    </div>
  );
}

export default function HowToPay() {
  const [activeTab, setActiveTab] = useState<TabKey>("pay");

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-display font-semibold text-purple-primary tracking-[0.1em] uppercase">
            Information
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-text-primary">
            Paying & appealing
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="flex border-b border-border-custom mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-body font-medium transition-all duration-200 border-b-2 -mb-px ${
                activeTab === tab.key
                  ? "border-purple-primary text-purple-primary"
                  : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "pay" && <PayTab />}
          {activeTab === "appeal" && <AppealTab />}
          {activeTab === "ccj" && <CCJTab />}
        </motion.div>
      </div>
    </section>
  );
}
