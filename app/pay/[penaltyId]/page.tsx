"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { Lock, Clock, Camera } from "lucide-react";
import { getPenaltyById, type Penalty } from "@/lib/mock-penalties";

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

function PenaltyDetails({
  penalty,
  step,
  onStepChange,
}: {
  penalty: Penalty;
  step: number;
  onStepChange: (step: number) => void;
}) {
  const router = useRouter();
  const [paying, setPaying] = useState(false);
  const [email, setEmail] = useState("");

  const daysRemaining = Math.max(
    0,
    28 -
      Math.floor(
        (Date.now() - new Date(penalty.issueDate).getTime()) /
          (1000 * 60 * 60 * 24)
      )
  );

  const handlePay = async () => {
    setPaying(true);
    await new Promise((r) => setTimeout(r, 2500));
    router.push(
      `/pay/success?id=${penalty.id}&email=${encodeURIComponent(email)}`
    );
  };

  if (step === 3) {
    return (
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-purple-tint/50 border border-purple-primary/20">
          <p className="text-sm font-body text-text-primary font-medium">
            Paying <span className="font-display font-bold text-lg text-purple-primary">£{penalty.amount.toFixed(2)}</span>{" "}
            for penalty{" "}
            <span className="font-mono text-sm">{penalty.id}</span>
          </p>
        </div>

        <div>
          <label className="text-sm font-medium font-body text-text-secondary mb-1.5 block">
            Email (for receipt)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-white border border-border-custom text-text-primary placeholder:text-text-muted rounded-[var(--radius-md)] px-4 py-3 font-body text-base focus:border-purple-primary focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all duration-150"
          />
        </div>

        {/* Stripe Card mockup */}
        <div>
          <label className="text-sm font-medium font-body text-text-secondary mb-1.5 block">
            Card details
          </label>
          <div className="bg-white border border-border-custom rounded-[var(--radius-md)] px-4 py-3.5 flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-5 rounded bg-[#1A1F71] flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">VISA</span>
              </div>
              <div className="w-8 h-5 rounded bg-[#EB001B]/90 flex items-center justify-center">
                <div className="flex -space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B]" />
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="flex-1 border-none outline-none font-body text-base text-text-primary placeholder:text-text-muted bg-transparent"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="w-16 border-none outline-none font-body text-base text-text-primary placeholder:text-text-muted bg-transparent text-center"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-12 border-none outline-none font-body text-base text-text-primary placeholder:text-text-muted bg-transparent text-center"
            />
          </div>
        </div>

        <Button
          onClick={handlePay}
          loading={paying}
          className="w-full py-4 font-display font-semibold text-base"
        >
          {paying
            ? "Processing your payment…"
            : `Pay £${penalty.amount.toFixed(2)} Securely →`}
        </Button>

        <button
          onClick={() => onStepChange(2)}
          className="w-full text-center text-sm text-text-muted font-body hover:text-purple-primary transition-colors"
        >
          ← Back to details
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-text-muted font-body">
          <Lock size={12} />
          Secured by Stripe
          <svg width="40" height="16" viewBox="0 0 40 16" className="ml-1">
            <rect width="40" height="16" rx="3" fill="#635BFF" />
            <text
              x="9"
              y="12"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              fontFamily="sans-serif"
            >
              stripe
            </text>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Penalty header */}
      <div className="rounded-xl border border-border-custom overflow-hidden">
        <div className="bg-alert px-5 py-3 flex items-center justify-between">
          <span className="text-white font-body font-semibold text-sm">
            PENALTY NOTICE
          </span>
          <span className="text-white font-display font-bold text-2xl">
            £{penalty.amount.toFixed(2)}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm text-text-muted">
              {penalty.id}
            </span>
            <StatusBadge status={penalty.status} />
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-body">
            <div>
              <span className="text-text-muted">Vehicle</span>
              <p className="font-mono font-medium text-text-primary mt-0.5">
                {penalty.vehicleReg}
              </p>
            </div>
            <div>
              <span className="text-text-muted">Location</span>
              <p className="font-medium text-text-primary mt-0.5">
                {penalty.location}
              </p>
            </div>
            <div>
              <span className="text-text-muted">Issue date</span>
              <p className="font-medium text-text-primary mt-0.5">
                {new Date(penalty.issueDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <span className="text-text-muted">Entry time</span>
              <p className="font-medium text-text-primary mt-0.5">
                {penalty.entryTime}
              </p>
            </div>
            <div>
              <span className="text-text-muted">Free time allowed</span>
              <p className="font-medium text-text-primary mt-0.5">
                {penalty.freeTimeMinutes} minutes
              </p>
            </div>
            <div>
              <span className="text-text-muted">Time exceeded</span>
              <p className="font-medium text-alert mt-0.5">
                {penalty.exceededMinutes} minutes
              </p>
            </div>
          </div>

          {/* Evidence placeholders */}
          <div className="mt-5 flex gap-3">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="w-24 h-16 rounded-lg bg-body-bg border border-border-custom flex items-center justify-center"
              >
                <Camera size={16} className="text-text-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deadline */}
      {daysRemaining > 0 && penalty.status === "unpaid" && (
        <div className="p-3.5 rounded-xl bg-warning-tint border border-warning/30 flex items-center gap-2">
          <Clock size={16} className="text-warning shrink-0" />
          <p className="text-sm font-body text-text-primary font-medium">
            {daysRemaining} days remaining before charge increases
          </p>
        </div>
      )}

      {/* Actions */}
      <Button
        onClick={() => onStepChange(3)}
        className="w-full py-4 font-display font-semibold text-base"
      >
        Pay £{penalty.amount.toFixed(2)} Now →
      </Button>
      <Button
        variant="secondary"
        className="w-full py-3.5"
        onClick={() => router.push("/#penalty-zone")}
      >
        Submit an Appeal
      </Button>
      <p className="text-center text-xs text-text-muted font-body">
        You have 28 days from issue date to pay the reduced rate.
      </p>
    </div>
  );
}

const STEP_LABELS: Record<number, string> = {
  2: "Details",
  3: "Payment",
};

export default function PenaltyDetailPage() {
  const params = useParams();
  const [penalty, setPenalty] = useState<Penalty | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [step, setStep] = useState(2);

  useEffect(() => {
    // Use client-side mock data (no API call needed for static export)
    const id = params.penaltyId as string;
    const found = getPenaltyById(id);
    if (found) {
      setPenalty(found);
    } else {
      setError("Penalty not found.");
    }
    setLoading(false);
  }, [params.penaltyId]);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
    const stepSlug = newStep === 3 ? "payment" : "details";
    const penaltyId = params.penaltyId as string;
    window.history.replaceState(null, "", `?step=${stepSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-body-bg pt-[120px] pb-20">
        <div className="max-w-[520px] mx-auto px-6">
          <div className="mb-6 text-sm font-body text-text-muted">
            <Link
              href="/"
              className="hover:text-purple-primary transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">→</span>
            <Link
              href="/pay"
              className="hover:text-purple-primary transition-colors"
            >
              Pay Penalty
            </Link>
            <span className="mx-2">→</span>
            <span className="text-text-primary">
              {STEP_LABELS[step] || "Details"}
            </span>
          </div>

          <ProgressBar step={step} />

          <div className="bg-white border border-border-custom rounded-[20px] p-8 lg:p-10 shadow-[var(--shadow-md)]">
            {loading ? (
              <div className="py-12 text-center">
                <div className="w-8 h-8 rounded-full border-2 border-purple-primary border-t-transparent animate-spin mx-auto" />
                <p className="mt-4 text-sm text-text-muted font-body">
                  Loading penalty details…
                </p>
              </div>
            ) : error ? (
              <div className="py-12 text-center">
                <p className="text-alert font-body">{error}</p>
                <Link
                  href="/pay"
                  className="mt-4 inline-block text-sm text-purple-primary hover:underline font-body"
                >
                  ← Try again
                </Link>
              </div>
            ) : penalty ? (
              <PenaltyDetails
                penalty={penalty}
                step={step}
                onStepChange={handleStepChange}
              />
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
