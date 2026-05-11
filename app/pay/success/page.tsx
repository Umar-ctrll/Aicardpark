"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function ProgressBar() {
  const steps = ["Look up", "Details", "Pay", "Done"];
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-body font-semibold bg-success text-white">
              ✓
            </div>
            <span className="text-[11px] font-body text-text-muted">
              {label}
            </span>
          </div>
          {i < 3 && <div className="w-8 lg:w-16 h-px mb-5 bg-success" />}
        </div>
      ))}
    </div>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const penaltyId = searchParams.get("id") || "PCN-2025-001234";
  const email = searchParams.get("email") || "your email";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-body-bg pt-[120px] pb-20 flex items-start justify-center">
        <div className="max-w-[520px] mx-auto px-6 w-full">
          <ProgressBar />

          <div className="bg-white border border-border-custom rounded-[20px] p-8 lg:p-12 shadow-[var(--shadow-md)] text-center">
            {/* Animated checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <motion.path
                  d="M24 40 L35 51 L56 30"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h1 className="mt-6 font-display font-bold text-[32px] text-text-primary">
                Payment Successful
              </h1>
              <p className="mt-2 text-text-secondary font-body">
                Your penalty has been paid.
              </p>

              {/* Reference box */}
              <div className="mt-6 mx-auto max-w-xs p-4 rounded-[var(--radius-md)] bg-success-tint border border-success/30">
                <p className="text-sm font-body text-text-secondary">
                  Reference:
                </p>
                <p className="font-mono font-medium text-text-primary mt-0.5">
                  {penaltyId}
                </p>
              </div>

              <p className="mt-5 text-sm text-[#64748B] font-body">
                A receipt has been sent to{" "}
                <span className="text-text-primary font-medium">{email}</span>
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full py-3 bg-white border border-border-custom rounded-[var(--radius-md)] text-sm font-body font-medium text-text-primary hover:border-purple-primary transition-all">
                  Download receipt PDF
                </button>
                <Link
                  href="/"
                  className="text-sm text-purple-primary font-body hover:underline"
                >
                  Return to home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
