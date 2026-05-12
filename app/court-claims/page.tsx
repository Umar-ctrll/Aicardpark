"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Mail,
  FileWarning,
  Gavel,
  TrendingDown,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Clock,
  Phone,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PHONE_NUMBER } from "@/lib/constants";

/* ── Content Sections ────────────────────────────────── */

interface Section {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    icon: <AlertTriangle size={22} />,
    title: "What happens if you don't pay the parking charge",
    content: (
      <>
        <p>
          When a parking charge notice (PCN) is issued and not paid within the
          initial period, the process follows a clear escalation path:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mt-3">
          <li>
            <strong>Initial Notice (Day 1):</strong> A parking charge is issued
            — either attached to the windscreen or posted to the registered
            keeper. Paying within 14 days qualifies for the reduced rate.
          </li>
          <li>
            <strong>Reminder Letter (after 28 days):</strong> If the charge
            remains unpaid, a reminder is sent with the full amount now due.
          </li>
          <li>
            <strong>Notice to Keeper:</strong> A formal notice is sent to the
            registered keeper via the DVLA, transferring liability if the driver
            has not been identified.
          </li>
          <li>
            <strong>Debt Recovery:</strong> The outstanding charge may be passed
            to an authorised debt collection agency.
          </li>
          <li>
            <strong>Letter Before Action:</strong> A final warning letter is sent
            giving you a last opportunity to pay before legal action begins.
          </li>
          <li>
            <strong>County Court Claim:</strong> If there is still no response, a
            formal claim is filed with the County Court.
          </li>
        </ol>
      </>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Why you might not have seen earlier letters",
    content: (
      <>
        <p>
          All correspondence is sent to the address registered with the DVLA for
          the vehicle. There are several reasons you may not have received earlier
          notices:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>You moved house but did not update your V5C logbook.</li>
          <li>
            Letters were delivered but not opened, misfiled, or discarded by
            another household member.
          </li>
          <li>You purchased the vehicle recently and address records are out of date.</li>
          <li>Royal Mail delivery issues in your area.</li>
        </ul>
        <div className="mt-4 p-3.5 rounded-xl bg-purple-tint/50 border border-purple-primary/20 flex items-start gap-3">
          <Lightbulb size={18} className="text-purple-primary shrink-0 mt-0.5" />
          <p className="text-sm font-medium">
            <strong>Tip:</strong> Always keep your DVLA details up to date. You
            can update your address online at{" "}
            <span className="text-purple-primary">gov.uk/change-address-v5c</span>
            .
          </p>
        </div>
      </>
    ),
  },
  {
    icon: <FileWarning size={22} />,
    title: "If you receive a Letter Before Action or a court claim",
    content: (
      <>
        <p>
          A <strong>Letter Before Action (LBA)</strong> is a formal pre-court
          warning. It means legal proceedings will begin unless the charge is
          settled or a payment arrangement is made within the stated timeframe
          (usually 14 days).
        </p>
        <p className="mt-3">
          If you receive a <strong>County Court Claim Form</strong>, you must
          respond within the deadline — usually 14 days to acknowledge and 33
          days to file a defence. Ignoring it will result in a default judgment.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-warning-tint border border-warning/30 flex items-start gap-3">
          <AlertTriangle size={18} className="text-warning shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Do not ignore a court claim.</p>
            <p className="mt-1">
              Even if you believe the charge is unfair, you must respond by the
              deadline or a judgment will be entered against you automatically.
            </p>
          </div>
        </div>
        <h4 className="font-semibold mt-5 mb-2">Your options:</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Pay in full</strong> — settles the matter immediately and
            prevents a CCJ being recorded.
          </li>
          <li>
            <strong>Contact us to arrange payment</strong> — we may accept a
            payment plan in appropriate circumstances.
          </li>
          <li>
            <strong>File a defence</strong> — if you genuinely believe the charge
            is invalid, you can defend the claim through the court.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <Gavel size={22} />,
    title: "If you receive a County Court Judgment (CCJ)",
    content: (
      <>
        <p>
          A CCJ is a formal court order requiring you to pay the amount owed. It
          is a serious legal matter with real consequences:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            {
              label: "Credit File",
              desc: "Recorded for 6 years, visible to lenders and financial institutions.",
            },
            {
              label: "Mortgages",
              desc: "Most lenders will decline a mortgage application with an active CCJ.",
            },
            {
              label: "Credit Cards & Loans",
              desc: "Significantly reduces your ability to obtain new credit.",
            },
            {
              label: "Phone Contracts",
              desc: "Many providers run credit checks and may refuse contracts.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-alert-tint border border-alert/20"
            >
              <p className="font-semibold text-alert text-sm">{item.label}</p>
              <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 rounded-xl bg-success-tint border border-success/30">
          <p className="text-sm font-body">
            <strong className="text-success">Can I remove a CCJ?</strong> If you
            pay the full amount within <strong>one calendar month</strong> of the
            judgment date, you can apply to the court to have the CCJ removed
            from the register entirely. After one month, it remains on your
            record for 6 years even if paid.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Your credit score",
    content: (
      <>
        <p>
          An unpaid parking charge alone does not directly appear on your credit
          file. However, once a CCJ is issued, it is recorded on the Register of
          Judgments and becomes visible to credit reference agencies including
          Experian, Equifax, and TransUnion.
        </p>
        <div className="mt-4 relative pl-5 border-l-2 border-purple-primary space-y-3">
          <div>
            <p className="font-semibold text-sm">Before court action</p>
            <p className="text-sm text-text-secondary">
              No impact on your credit score. You can still resolve the matter
              directly with us.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm">After CCJ issued</p>
            <p className="text-sm text-text-secondary">
              Significant negative impact. Recorded for 6 years regardless of
              payment.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm">CCJ paid within 1 month</p>
            <p className="text-sm text-text-secondary">
              Can be removed from the register entirely — as if it never
              happened.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: "If you've already paid",
    content: (
      <>
        <p>
          If you have already paid the parking charge and are still receiving
          correspondence, please don't worry — this is most likely a timing issue
          with our records.
        </p>
        <p className="mt-3">
          Contact us with your <strong>penalty reference number</strong> and{" "}
          <strong>proof of payment</strong> (bank statement, email receipt, or
          transaction reference) and we will update your account immediately.
        </p>
        <p className="mt-3">
          If you have already paid a court claim or CCJ, ensure you also update
          the court record by applying for a{" "}
          <strong>Certificate of Satisfaction</strong> — this marks the judgment
          as paid on the Register.
        </p>
      </>
    ),
  },
];

/* ── Tips ─────────────────────────────────────────────── */

const tips = [
  "Always respond to court documents by the deadline, even if you believe the charge is unfair.",
  "Keep records of all payments and correspondence — screenshots, emails, and bank statements.",
  "If in doubt, seek advice from Citizens Advice (citizensadvice.org.uk) or a legal professional.",
];

/* ── Section Card Component ──────────────────────────── */

function SectionCard({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-border-custom rounded-[20px] p-6 lg:p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-purple-tint flex items-center justify-center text-purple-primary shrink-0">
          {section.icon}
        </div>
        <h2 className="font-display font-semibold text-lg lg:text-xl text-text-primary leading-snug">
          {section.title}
        </h2>
      </div>
      <div className="text-sm text-text-secondary font-body leading-relaxed space-y-2">
        {section.content}
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function CourtClaimsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-dark-hero pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-display font-semibold text-purple-primary tracking-[0.15em] uppercase mb-4">
              Legal Information
            </span>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
              Court Claims & CCJ Support
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted font-body text-lg">
              A clear guide to what happens if a parking charge goes unpaid,
              and what to do if you receive a court claim or CCJ.
            </p>
          </motion.div>
        </div>

        {/* Urgency banner */}
        <div className="relative max-w-[800px] mx-auto px-6 -mb-7">
          <div className="bg-warning-tint border border-warning/30 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-[var(--shadow-md)]">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-warning" />
            </div>
            <p className="text-sm font-body text-text-primary font-medium">
              <strong>Time-sensitive?</strong> If you have a court deadline
              approaching, pay immediately or contact us to discuss options before
              a CCJ is entered.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="bg-body-bg pt-20 pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-[800px] mx-auto px-6 space-y-6">
          {sections.map((section, i) => (
            <SectionCard key={section.title} section={section} index={i} />
          ))}

          {/* Useful Tips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-purple-tint/50 border border-purple-primary/20 rounded-[20px] p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-purple-primary flex items-center justify-center shrink-0">
                <Lightbulb size={20} className="text-white" />
              </div>
              <h2 className="font-display font-semibold text-lg lg:text-xl text-text-primary">
                Useful Tips
              </h2>
            </div>
            <ol className="space-y-4">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-purple-primary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    {tip}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-[800px] mx-auto px-6 mt-16">
          <div className="bg-dark-hero rounded-[20px] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.2),transparent_60%)]" />
            <div className="relative text-center">
              <h3 className="font-display font-semibold text-2xl text-white mb-3">
                Need to resolve a charge?
              </h3>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto">
                The sooner you act, the more options you have. Pay the reduced
                rate, set up a plan, or speak to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/pay"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep transition-all duration-200"
                >
                  Pay Now <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-dark-border text-white font-body font-medium rounded-[var(--radius-md)] hover:border-purple-primary transition-all duration-200"
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>
              <Link
                href="/faqs"
                className="inline-block mt-4 text-sm text-text-muted hover:text-purple-primary font-body transition-colors"
              >
                View all FAQs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
