"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Scale, Lock, Upload, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Tab = "pay" | "appeal";

function PayForm() {
  const [loading, setLoading] = useState(false);
  const [reg, setReg] = useState("");
  const [penaltyId, setPenaltyId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!reg.trim() || !penaltyId.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    const normalizedReg = reg.replace(/\s+/g, "").toUpperCase();
    const normalizedId = penaltyId.trim();
    window.location.href = `/pay?reg=${normalizedReg}&id=${encodeURIComponent(normalizedId)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Vehicle Registration"
        variant="dark"
        mono
        placeholder="e.g. AB12 CDE"
        value={reg}
        onChange={(e) => setReg(e.target.value.toUpperCase())}
      />
      <Input
        label="Penalty Reference ID"
        variant="dark"
        mono
        placeholder="e.g. PCN-2025-001234"
        value={penaltyId}
        onChange={(e) => setPenaltyId(e.target.value)}
      />
      {error && (
        <div className="p-3 rounded-lg bg-warning/10 border border-warning/30 text-warning text-sm font-body">
          {error}
        </div>
      )}
      <Button type="submit" loading={loading} className="w-full py-4 font-display font-semibold text-base">
        Find My Penalty →
      </Button>
      <p className="text-center text-xs text-[#475569] font-body flex items-center justify-center gap-1.5">
        <Lock size={12} />
        Secured by Stripe · GDPR compliant
      </p>
    </form>
  );
}

function AppealForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle2 size={56} className="text-success mx-auto" />
        </motion.div>
        <h3 className="mt-4 font-display font-semibold text-xl text-white">
          Appeal submitted
        </h3>
        <p className="mt-2 text-sm text-text-muted font-body">
          Reference: <span className="font-mono text-white">APL-2025-00891</span>
        </p>
        <p className="mt-3 text-sm text-text-muted font-body">
          Your appeal is now marked as pending. We&apos;ll respond within 5
          working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 2000));
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <Input
        label="Penalty Reference ID"
        variant="dark"
        mono
        placeholder="e.g. PCN-2025-001234"
      />
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium font-body text-text-muted">
          Reason for appeal
        </label>
        <textarea
          rows={4}
          className="w-full bg-dark-hero border border-dark-border text-white placeholder:text-text-muted rounded-[var(--radius-md)] px-4 py-3.5 font-body text-base focus:border-purple-primary focus:shadow-[0_0_0_3px_rgba(124,58,237,0.2)] transition-all duration-150 resize-none"
          placeholder="Explain why you're appealing this penalty..."
        />
      </div>
      <div className="border-2 border-dashed border-dark-border rounded-[var(--radius-md)] bg-dark-hero p-6 text-center cursor-pointer hover:border-purple-primary/50 transition-colors">
        <Upload size={24} className="mx-auto text-text-muted mb-2" />
        <p className="text-sm text-text-muted font-body">
          Drag files here or click to upload
        </p>
        <p className="text-xs text-[#475569] font-body mt-1">
          Images or PDF (optional)
        </p>
      </div>
      <Input label="Email address" variant="dark" type="email" placeholder="your@email.com" />
      <Input label="Phone number" variant="dark" type="tel" placeholder="+44 7000 000000" />
      <Button type="submit" loading={loading} className="w-full py-4 font-display font-semibold text-base">
        Submit Appeal →
      </Button>
    </form>
  );
}

export default function PenaltySection() {
  const [activeTab, setActiveTab] = useState<Tab>("pay");

  return (
    <section id="penalty-zone" className="py-24 lg:py-32 bg-dark-hero">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="purple">Penalty Zone</Badge>
          <h2 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-white">
            Pay or appeal your parking charge
          </h2>
          <p className="mt-4 text-text-muted font-body leading-relaxed">
            Enter your details below to find your penalty and pay online or
            submit an appeal.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-dark-surface border border-dark-border rounded-full p-1">
            <button
              onClick={() => setActiveTab("pay")}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                activeTab === "pay"
                  ? "bg-purple-primary text-white"
                  : "text-[#64748B] hover:text-white"
              }`}
            >
              <CreditCard size={14} className="inline mr-2 -mt-0.5" />
              Pay Now
            </button>
            <button
              onClick={() => setActiveTab("appeal")}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                activeTab === "appeal"
                  ? "bg-purple-primary text-white"
                  : "text-[#64748B] hover:text-white"
              }`}
            >
              <Scale size={14} className="inline mr-2 -mt-0.5" />
              Submit Appeal
            </button>
          </div>
        </div>

        {/* Form card */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-dark-surface border border-dark-border rounded-[20px] p-8">
            {activeTab === "pay" ? <PayForm /> : <AppealForm />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
