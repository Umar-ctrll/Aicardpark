"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Lock, Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";
import { findPenalty } from "@/lib/mock-penalties";

function ProgressBar({ step }: { step: number }) {
  const steps = ["Look up", "Details", "Pay", "Done"];
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isComplete = stepNum < step;
        const isActive = stepNum === step;
        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-all ${
                  isComplete
                    ? "bg-success text-white"
                    : isActive
                    ? "bg-purple-primary text-white"
                    : "bg-border-custom text-text-muted"
                }`}
              >
                {isComplete ? "✓" : stepNum}
              </div>
              <span className="text-[11px] font-body text-text-muted">
                {label}
              </span>
            </div>
            {i < 3 && (
              <div
                className={`w-8 lg:w-16 h-px mb-5 ${
                  isComplete ? "bg-success" : "bg-border-custom"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function LookupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [reg, setReg] = useState(searchParams.get("reg") || "");
  const [penaltyId, setPenaltyId] = useState(searchParams.get("id") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ reg?: string; id?: string }>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const errors: { reg?: string; id?: string } = {};
    if (!reg.trim()) errors.reg = "This field is required";
    if (!penaltyId.trim()) errors.id = "This field is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    // Simulate network delay then do client-side lookup
    await new Promise((r) => setTimeout(r, 800));
    const normalizedReg = reg.replace(/\s+/g, "").toUpperCase();
    const found = findPenalty(normalizedReg, penaltyId.trim());
    if (!found) {
      setError(
        "No penalty found for those details. Double-check the registration and reference ID."
      );
      setLoading(false);
      return;
    }
    router.push(`/pay/${found.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Vehicle Registration"
        mono
        placeholder="e.g. AB12 CDE"
        value={reg}
        onChange={(e) => setReg(e.target.value.toUpperCase())}
        error={fieldErrors.reg}
        hint="Format: AB12 CDE"
      />
      <Input
        label="Penalty Reference"
        mono
        placeholder="e.g. PCN-2025-001234"
        value={penaltyId}
        onChange={(e) => setPenaltyId(e.target.value)}
        error={fieldErrors.id}
        hint="Found on your penalty notice"
      />
      {error && (
        <div className="p-4 rounded-xl bg-warning-tint border border-warning/30 text-sm font-body text-text-primary">
          ⚠ {error}
        </div>
      )}
      <Button
        type="submit"
        loading={loading}
        className="w-full py-4 font-display font-semibold text-base"
      >
        Find My Penalty →
      </Button>
      <p className="text-center text-sm text-text-muted font-body flex items-center justify-center gap-2">
        <Phone size={14} />
        Lost your notice? Call us on{" "}
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
          className="text-purple-primary hover:underline"
        >
          {PHONE_NUMBER}
        </a>
      </p>
    </form>
  );
}

function PayPageContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-body-bg pt-[120px] pb-20">
        <div className="max-w-[520px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm font-body text-text-muted">
            <a href="/" className="hover:text-purple-primary transition-colors">
              Home
            </a>
            <span className="mx-2">→</span>
            <span className="text-text-primary">Pay Penalty</span>
          </div>

          <ProgressBar step={1} />

          <div className="bg-white border border-border-custom rounded-[20px] p-8 lg:p-10 shadow-[var(--shadow-md)]">
            <h1 className="font-display font-semibold text-2xl text-text-primary mb-2">
              Find your penalty
            </h1>
            <p className="text-sm text-text-secondary font-body mb-8">
              Enter your vehicle registration and penalty reference number from
              your notice.
            </p>
            <LookupForm />
          </div>

          <p className="mt-6 text-center text-xs text-text-muted font-body flex items-center justify-center gap-1.5">
            <Lock size={12} />
            All payments secured by Stripe
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PayPage() {
  return (
    <Suspense>
      <PayPageContent />
    </Suspense>
  );
}
