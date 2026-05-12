"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Minus,
  CreditCard,
  ShieldCheck,
  Scale,
  Gavel,
  CircleParking,
  HelpCircle,
  Database,
  FileText,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ── FAQ Data ────────────────────────────────────────── */

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: { q: string; a: string }[];
}

const categories: FAQCategory[] = [
  {
    title: "Driver Guidance & Payment",
    icon: <CreditCard size={20} />,
    items: [
      {
        q: "How do I pay a parking charge?",
        a: "Visit our Pay Penalty page, enter your vehicle registration and the penalty reference number shown on your notice, and complete a secure card payment via Stripe. You'll receive instant on-screen confirmation plus an email receipt.",
      },
      {
        q: "How long do I have to pay?",
        a: "You have 28 days from the date of issue. Paying within 14 days qualifies you for the reduced rate — typically 50% of the full charge.",
      },
      {
        q: "What happens if I don't pay?",
        a: "The charge will increase to the full amount after the reduced-rate period ends. Continued non-payment may result in debt recovery action and, ultimately, a County Court Judgment (CCJ) being registered against the vehicle's keeper.",
      },
      {
        q: "I can't afford to pay in full — what can I do?",
        a: "Please contact our support team as soon as possible. We may be able to arrange a payment plan depending on your circumstances. It's important not to ignore the notice.",
      },
      {
        q: "Can I pay over the phone?",
        a: "Our primary payment channel is online via the secure Pay Penalty page. If you're unable to pay online, call our support line and an advisor can guide you through alternative options.",
      },
    ],
  },
  {
    title: "Data & Personal Information",
    icon: <Database size={20} />,
    items: [
      {
        q: "How did you obtain my details?",
        a: "As a member of the BPA (British Parking Association), we are authorised to request registered keeper details from the DVLA when a parking charge is issued and not paid within the on-site notice period.",
      },
      {
        q: "I've sold the vehicle — why am I receiving this?",
        a: "If the vehicle was sold before the charge was issued, please submit an appeal with proof of sale (e.g., V5C/2 slip, bill of sale). We'll update our records and redirect the charge if appropriate.",
      },
      {
        q: "How is my personal data handled?",
        a: "We comply fully with UK GDPR regulations. Your data is used solely for the purpose of administering parking charges. See our Privacy Policy for full details on data storage, retention, and your rights.",
      },
    ],
  },
  {
    title: "Appeals Process",
    icon: <ShieldCheck size={20} />,
    items: [
      {
        q: "How do I appeal a parking charge?",
        a: "Use the appeal form on our website or write to us at the address on your notice. Include your penalty reference, vehicle registration, a clear explanation of why you believe the charge is incorrect, and any supporting evidence.",
      },
      {
        q: "How long do I have to appeal?",
        a: "You can appeal within 28 days of the date the charge was issued. We strongly recommend appealing as soon as possible.",
      },
      {
        q: "Will the charge increase while my appeal is being reviewed?",
        a: "No. The charge is frozen at the current rate while an appeal is under review. If your appeal is unsuccessful, you'll have a further 14 days to pay at the reduced rate.",
      },
      {
        q: "How long does an appeal decision take?",
        a: "We aim to respond to all appeals within 5 working days. Complex cases may take a little longer, but we'll keep you informed.",
      },
      {
        q: "Can I pay and still appeal?",
        a: "Yes. Paying the charge does not prevent you from submitting an appeal. If the appeal is successful, you'll receive a full refund.",
      },
      {
        q: "Who decides the outcome of my appeal?",
        a: "Appeals are reviewed by an independent team who were not involved in issuing the original charge, ensuring a fair and impartial assessment.",
      },
    ],
  },
  {
    title: "POPLA Appeals",
    icon: <Scale size={20} />,
    items: [
      {
        q: "What is POPLA?",
        a: "POPLA (Parking on Private Land Appeals) is an independent appeals service. If your initial appeal to us is unsuccessful, you have the right to escalate your case to POPLA for a free, independent review.",
      },
      {
        q: "How long do I have to appeal to POPLA?",
        a: "You have 28 days from the date of our appeal rejection letter to submit your case to POPLA.",
      },
      {
        q: "Is the charge frozen during a POPLA review?",
        a: "Yes. The charge remains at its current level while POPLA considers your case. No further recovery action will be taken during this period.",
      },
      {
        q: "What happens after POPLA makes a decision?",
        a: "If POPLA upholds your appeal, the charge is cancelled. If they reject it, payment becomes due within 14 days at the reduced rate.",
      },
    ],
  },
  {
    title: "Legal & Court Proceedings",
    icon: <Gavel size={20} />,
    items: [
      {
        q: "I've received a 'Letter Before Action' — what should I do?",
        a: "This is a formal notice that court proceedings may begin. We strongly advise either paying the outstanding charge or contacting us immediately to discuss your options. Ignoring this letter can lead to a court claim.",
      },
      {
        q: "What happens if a court claim is issued?",
        a: "You will receive a court claim form. You must respond within the deadline stated (usually 14–33 days). Failing to respond may result in a default County Court Judgment (CCJ) being entered against you.",
      },
      {
        q: "What is a CCJ and how does it affect me?",
        a: "A County Court Judgment is a court order requiring you to pay the debt. It stays on your credit file for 6 years and can affect your ability to obtain a mortgage, credit cards, loans, and even mobile phone contracts.",
      },
      {
        q: "Can I remove a CCJ?",
        a: "If you pay the full amount within one calendar month of the judgment date, you can apply to have the CCJ removed from the register. After one month, the CCJ remains on record for 6 years even if paid.",
      },
      {
        q: "I never received any letters before this — what happened?",
        a: "Letters are sent to the address registered with the DVLA. If you have moved or your DVLA records are not up to date, you may not have received earlier correspondence. Contact us as soon as possible to discuss your case.",
      },
    ],
  },
  {
    title: "Charges & Payments",
    icon: <FileText size={20} />,
    items: [
      {
        q: "Why is the charge so high?",
        a: "Private parking charges are set in accordance with BPA guidelines and are clearly displayed on signage at the car park. The charge reflects the cost of managing and enforcing parking on private land.",
      },
      {
        q: "I've already paid — why am I still getting letters?",
        a: "Payments can take a few days to process. If you've paid recently and are still receiving reminders, please contact us with your payment confirmation and we'll update your records immediately.",
      },
      {
        q: "Is my card payment secure?",
        a: "Yes. All payments are processed through Stripe, which is PCI DSS Level 1 certified — the highest level of payment security. We never store your full card details.",
      },
    ],
  },
  {
    title: "Parking & Blue Badge",
    icon: <CircleParking size={20} />,
    items: [
      {
        q: "I had a valid Blue Badge displayed — why did I get a charge?",
        a: "If your Blue Badge was correctly displayed and valid at the time, please submit an appeal with a photo of the badge in the windscreen and your badge number. We'll review the camera evidence and cancel the charge if appropriate.",
      },
      {
        q: "I didn't see a ticket on my windscreen — is the charge valid?",
        a: "Our system uses ANPR cameras, not physical windscreen tickets. Charges are issued based on camera evidence of your entry and exit times. You should have received a postal notice to the registered keeper's address.",
      },
    ],
  },
  {
    title: "General",
    icon: <HelpCircle size={20} />,
    items: [
      {
        q: "Who are AI Car Park?",
        a: "AI Car Park is an AI-powered parking management platform that helps private car park operators automate enforcement, payments, and appeals using ANPR technology.",
      },
      {
        q: "I've received a letter from a debt collector — is this legitimate?",
        a: "If the parking charge has gone unpaid for an extended period, the debt may be passed to an authorised debt recovery agent. Check that the reference number matches your original penalty notice. If in doubt, contact us directly.",
      },
      {
        q: "How do I make a complaint?",
        a: "You can submit a complaint via our contact form or by writing to us at the address shown on your notice. We aim to acknowledge complaints within 2 working days and provide a full response within 10 working days.",
      },
      {
        q: "Do you have a privacy policy?",
        a: "Yes. Our full Privacy Policy is available on the website and outlines how we collect, use, and protect your personal data in accordance with UK GDPR.",
      },
    ],
  },
];

/* ── Accordion Item ──────────────────────────────────── */

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
        open
          ? "border-t-2 border-t-purple-primary border-border-custom shadow-[var(--shadow-sm)]"
          : "border-border-custom"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
      >
        <span
          className={`font-body font-medium text-[15px] pr-4 transition-colors ${
            open ? "text-purple-primary font-semibold" : "text-text-primary group-hover:text-purple-primary"
          }`}
        >
          {q}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
            open ? "bg-purple-primary" : "bg-purple-tint"
          }`}
        >
          {open ? (
            <Minus size={14} className="text-white" />
          ) : (
            <Plus size={14} className="text-purple-primary" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-text-secondary font-body leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ── Category Section ────────────────────────────────── */

function CategorySection({
  category,
  index,
}: {
  category: FAQCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-tint flex items-center justify-center text-purple-primary">
          {category.icon}
        </div>
        <h2 className="font-display font-semibold text-xl text-text-primary">
          {category.title}
        </h2>
      </div>
      <div className="space-y-2">
        {category.items.map((item, i) => (
          <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0 && i === 0} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function FAQsPage() {
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
              Support
            </span>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted font-body text-lg">
              Find answers to common questions about parking charges, payments,
              appeals, and court proceedings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <main className="bg-body-bg py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-6 space-y-14">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              id={cat.title.toLowerCase().replace(/\s+&?\s*/g, "-")}
              className="scroll-mt-[140px]"
            >
              <CategorySection category={cat} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-[800px] mx-auto px-6 mt-20">
          <div className="bg-dark-hero rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.2),transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display font-semibold text-2xl text-white mb-3">
                Still have a question?
              </h3>
              <p className="text-text-muted font-body mb-6">
                Our support team is here to help with any parking charge queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/pay"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-primary text-white font-body font-medium rounded-[var(--radius-md)] shadow-[var(--shadow-purple)] hover:bg-purple-deep transition-all duration-200"
                >
                  Pay a Penalty
                </Link>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-dark-border text-white font-body font-medium rounded-[var(--radius-md)] hover:border-purple-primary transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
